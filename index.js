const axios = require("axios");
const chalk = require("chalk");
const login = require("fca-unofficial");
const package = require("./package.json");
const totp = require("totp-generator");
const ytdl = require("ytdl-core");
const { writeFileSync, createReadStream, unlinkSync, createWriteStream } = require("fs-extra");
var { data: botData } = package;

const BigData = {
    logEvent: false,
    isProcess: false,
    reaction: new Map(),
    reply: new Map(),
    threadData: {},
    userData: {},
    default: botData.default,
    wait: false,
    event: { id: '', messageID: '' }
};

const Data = {
    loginCookieOptions: {
        forceLogin: true,
        listenEvents: true,
        logLevel: "error",
        updatePresence: true,
        selfListen: true,
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
    },
    loginEmailOptions: {
        logLevel: "silent",
        forceLogin: true,
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
    }
}

const modules = {
    logger: function (data, option, more) {
        const color = more == 0 ? "greenBright" : more == 1 ? "redBright" : more == 2 ? "cyanBright" : more == 3 ? "magentaBright" : more == 4 ? "yellow" : undefined;
        if (option == 0) return console.log(chalk.yellow(data));
        else if (option == undefined) return console.log(chalk.greenBright(`[ ${data.toUpperCase()} ] » `) + data);
        else return console.log(chalk[color == undefined ? "greenBright" : color](`[ ${option.toUpperCase()} ] » `) + `${data}`);
    },
    getName: function (api, id) {
        return new Promise(async (resolve) => {
            if (botData.users.some(i => i.userID == id)) {
                resolve(botData.users.find(e => e.userID == id).name);
            } else if (!botData.users.some(i => i.userID == id)) {
                var name = (await api.getUserInfo(id))[id].name;
                resolve(name);
            } else {
                resolve('');
            }
        });
    },
    checkUpdate: async function () {
        try {            
            const { data } = await axios.get("https://raw.githubusercontent.com/ProCoderMew/OneFile/main/package.json");
            if (data.version != package.version) {
                modules.logger("Đã có bản cập nhật mới.", "update", 1);
            } else modules.logger("Bạn đang sử dụng phiên bản mới nhất.", "update", 3);
        } catch {
            modules.logger("Đã có lỗi xảy ra.", "update", 1);
        }
    },
    loginWithEmail: function () {
        return login({ email: botData.default.email, password: botData.default.password }, Data.loginEmailOptions, (err, api) => {
            if (err) {
                switch (err.error) {
                    case "login-approval":
                        err.continue(totp(botData.default.token));
                        break;
                    default:
                        if (process.env.API_SERVER_EXTERNAL == 'https://api.glitch.com') return modules.logger(err.error, "login", 1);
                        else {
                            modules.logger(err.error, "login", 1);
                            return process.exit();
                        }
                        break;
                }
                return;
            }
            botData.cookies = api.getAppState();
            writeFileSync("./package.json", JSON.stringify(package, null, 4));
            modules.logger("Đã ghi thành công cookie mới.", "cookie");
            return modules.loginWithCookie();
        });
    },
    loginWithCookie: async function () {
        require("npmlog").emitLog = () => { };        
        return login({ appState: botData.cookies }, function (err, api) {
            if (err) {
                if (err.error == "Not logged in" || err.error.indexOf("Error retrieving userID.") == 0) return modules.loginWithEmail();
                else return modules.logger(err, "login", 1);
            }
            botData.cookies = api.getAppState();
            writeFileSync("./package.json", JSON.stringify(package, null, 4));
            api.setOptions(Data.loginCookieOptions);
            modules.loadData();
            modules.logger("Bot ID: " + api.getCurrentUserID(), "info");
            modules.logger("Bắt đầu nhận tin.", "status");
            const listen = modules.listen({ api });
            const temp = ["presence", "typ", "read_receipt"];
            const handleListen = function (error, event) {
                if (error) return modules.logger(error.error, "listen", 1);
                if (temp.includes(event.type)) return;                
                if (BigData.event.id == api.getCurrentUserID() &&
                    BigData.event.messageID == event.messageID) {
                    api.listenMqtt().stopListening();
                }
                listen(event);
                if (BigData.logEvent == true) console.log(event);
                BigData.event.id = event.senderID || '';
                BigData.event.messageID = event.messageID || '';
            };
            api.listenMqtt(handleListen);
            setInterval(async function () {
                api.listenMqtt().stopListening();
                await restart();
            }, 3600000);
            async function restart() {
                await new Promise(resolve => setTimeout(resolve, 20000));
                logger("Bắt đầu nhận tin.", "status");
                return api.listenMqtt(handleListen);
            };
        })
    },
    listen: function ({ api }) {
        return function (event) {
            switch (event.type) {
                case "message":
                case "message_reply":
                case "message_unsend":
                    Message({ api })({ event });
                    noPrefix({ api })({ event });
                    Reply({ api })({ event });
                    break;
                case "event": {
                    switch (event.logMessageType) {
                        case "log:subscribe": {
                            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                                return api.sendMessage(`Đã kết nối thành công >w<`, event.threadID, () => {
                                    api.changeNickname(BigData.default.name, event.threadID, api.getCurrentUserID(), () => {
                                        api.muteThread(event.threadID, -1);
                                    });
                                });
                            }
                        break;
                        }
                    }
                break;
                }
            }
        }
    },
    createThread: async function ({ event, api }) {
        if (BigData.wait == true) return;
        var { threadID, isGroup } = event;
        threadID = parseInt(threadID);
        if (!botData.hasOwnProperty('threads')) botData['threads'] = [];
        let threads = botData.threads;
        if (!threads.some(e => e.threadID == threadID) && isGroup) {
            BigData.wait = true;            
            let threadInfo = await api.getThreadInfo(threadID);
            threads.push({ threadID, name: threadInfo.name, prefix: BigData.default.prefix, block: false, selfListen: false, blockCmd: [], shortcuts: [] });            
            modules.logger(threadID + " | " + threadInfo.name, "thread", 2);
            BigData.wait = false;            
        }
        writeFileSync("./package.json", JSON.stringify(package, null, "\t"));
        modules.loadData();
    },
    createUser: async function ({ event, api }) {
        if (BigData.wait == true) return;
        var { senderID } = event;
        senderID = parseInt(senderID);
        if (!botData.hasOwnProperty('users')) botData['users'] = [];
        let users = botData.users;
        if (!users.some(e => e.userID == senderID)) {
            BigData.wait = true;
            var userData = (await api.getUserInfo(senderID))[senderID];
            let name = userData.name;
            let sex = userData.gender;
            users.push({ userID: senderID, name, sex, block: false });            
            modules.logger(senderID + " | " + name, "user", 2);
            BigData.wait = false;
        }
        writeFileSync("./package.json", JSON.stringify(package, null, "\t"));
        modules.loadData();
    },
    loadData: function () {
        if (botData.hasOwnProperty('threads')) {
            for (const thread of botData.threads) {
                if (!BigData.threadData.hasOwnProperty(thread.threadID)) {
                    BigData.threadData[thread.threadID] = thread;
                }
            }
        }
        if (botData.hasOwnProperty('users')) {
            for (const user of botData.users) {
                if (!BigData.userData.hasOwnProperty(user.userID)) {
                    BigData.userData[user.userID] = user;
                }
            }
        }
    },
    getData: function ({ event }) {
        var thread = botData.threads.find(e => e.threadID == event.threadID);
        var user = botData.users.find(e => e.userID == event.senderID);
        return {
            thread,
            user
        }
    }
}

function Message({ api }) {
    const botID = api.getCurrentUserID();
    return async function ({ event }) {
        const { threadID, senderID, messageID, body: content } = event;
        if (!event.isGroup) return;
        if ((Object.keys(BigData.threadData)).some(e => e == threadID) && BigData.threadData[threadID].block == true && senderID != BigData.default.admin) return;
        if ((Object.keys(BigData.userData)).some(e => e == senderID) && BigData.userData[senderID].block == true && senderID != BigData.default.admin) return;
        // create thread
        if (!(Object.keys(BigData.threadData)).some(e => e == threadID)) return modules.createThread({ event, api });
        // create user        
        modules.createUser({ event, api });

        var out = function (data, callback = function () { }, mid) {
            if (!data) return;
            mid = typeof mid == "undefined" ? messageID : mid;
            typeof callback == "string" ? mid = callback : callback;
            typeof callback != "function" ? callback = function () { } : callback;
            return api.sendMessage(data, threadID, callback, mid);
        }

        // check admin
        var isAdmin = function () {
            var list = BigData.default.admin;
            if (list == senderID) return true;
            else {
                out("Bạn không đủ quyền sử dụng lệnh này.");
                return false;
            }
        }
        
        if (BigData.threadData[threadID].selfListen == false && api.getCurrentUserID() == senderID) return;
        var prefix = BigData.threadData[threadID].prefix || BigData.default.prefix;
        if (content.indexOf(prefix) !== 0) return;
        var args = content.slice(prefix.length).trim().split(/ +/);
        // auto correct
        var { bestMatch } = require("string-similarity").findBestMatch(args[0], botData.allCmds);
        if (bestMatch.rating >= 0.4) args = [bestMatch.target, ...args.slice(1)];
        else return;

        // check cmd
        if (BigData.threadData[threadID].blockCmd.includes(args[0])) return out("Lệnh '" + args[0] + "' đã bị cấm dùng.");
      
        try {
            var { user: DataUser, thread: DataThread } = modules.getData({ event });
            // all
            if (args[0] == "all") {
                var threadData = await api.getThreadInfo(threadID);
                var all = threadData.participantIDs;
                var body = args.slice(1).join(" ") || '‎', mentions = [];
                all = all.filter(e => e != api.getCurrentUserID());
                for (let i in all) {
                    if (i == body.length) body += body.charAt(body.length - 1);
                    if (typeof body[i] != "undefined") mentions.push({ tag: body[i], id: all[i], fromIndex: i });
                }
                return out({ body, mentions });
            }
            // cmds
            if (args[0] == "cmds") {
                var cmds = botData.allCmds.sort((a, b) => a.localeCompare(b)).join(", ");
                return out(`Có ${botData.allCmds.length} lệnh:\n${cmds}`);  
            }
            // uid
            if (args[0] == "uid") {
                var msg = '';
                if (Object.keys(event.mentions).length == 0) return out(senderID);
                else {
                    for (let e of Object.keys(event.mentions)) {
                        msg += `\n${event.mentions[e].replace(/@/g, "")}: ${e}`
                    }
                    return out(msg);
                }
            }
            // uptime
            if (args[0] == "uptime") {
                var sec_num = parseInt(process.uptime(), 10);
                var days = Math.floor(sec_num / (3600 * 24))
                var hours = Math.floor(sec_num % (3600 * 24) / 3600);
                var minutes = Math.floor(sec_num / 60) % 60;
                var seconds = sec_num % 60;
                return out([days, hours, minutes, seconds].map(v => (v < 10 ? "0" + v : v)).filter((v, i) => v !== "00" || i > 0).join(":"));
            }
            // on/off log
            if (args[0] == "log" && isAdmin()) {
                if (BigData.logEvent == true) {
                    BigData.logEvent = false;
                    return out("Đã tắt log event.");
                } else {
                    BigData.logEvent = true;
                    return out("Đã bật log event.");
                }
            }
            // set prefix        
            if (args[0] == "setprefix" && isAdmin()) {
                if (!args[1]) return out("Prefix cần set where :D?");
                BigData.threadData[threadID].prefix = args[1];
                botData.threads.find(e => e.threadID == threadID).prefix = args[1];
                writeFileSync("./package.json", JSON.stringify(package, null, 4));
                return out("Đổi prefix thành công.");
            }
            // sing
            if (args[0] == "sing") {
                const regexYoutube = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
                if (regexYoutube.test(args[1])) {
                    var videoInfo = await ytdl.getInfo(args[1]);
                    var { videoId, lengthSeconds } = videoInfo.videoDetails;
                    if (lengthSeconds > 1200) return out("Độ dài video vượt quá mức cho phép, tối đa là 20 phút!");
                    else return api.sendTypingIndicator(threadID, () => ytdl(videoId, { filter: format => format.itag == '140' }).pipe(createWriteStream(`./${videoId}.m4a`)).on("close", () => out({ body: videoInfo.videoDetails.title, attachment: createReadStream(`./${videoId}.m4a`) }, () => unlinkSync(`./${videoId}.m4a`))).on("error", (e) => out(e)));
                } else return out("Vui lòng nhập 1 link youtube.");
            }
            // rerun
            if (args[0] == "rerun") {
                if (event.type != "message_reply") return out("Vui lòng reply 1 tin nhắn");
                return modules.listen({ api })({
                    type: 'message',
                    threadID: threadID,
                    messageID: event.messageReply.messageID,
                    senderID: senderID,
                    attachments: event.messageReply.attachments,
                    body: event.messageReply.body,
                    isGroup: true,
                    mentions: event.messageReply.mentions,
                    timestamp: Date.now()
                });
            }
            // selfListen
            if (args[0] == "sl") {
                if (BigData.threadData[threadID].selfListen == false) {
                    BigData.threadData[threadID].selfListen = true;
                    DataThread.selfListen = true;
                    out("Đã bật selfListen.");
                } else if (BigData.threadData[threadID].selfListen == true) {
                    BigData.threadData[threadID].selfListen = false;
                    DataThread.selfListen = false;
                    out("Đã tắt selfListen.");
                }
                writeFileSync("./package.json", JSON.stringify(package, null, 4))
            }
            // say
            if (args[0] == "say") {
                var dataSay = args.slice(1).join(" ");
                var name = Math.floor(Math.random() * 99999999999999999999999999999999);
                var { data } = await axios(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(dataSay)}&tl=vi&client=tw-ob`, { responseType: 'arraybuffer' });
                writeFileSync(`./${name}.mp3`, Buffer.from(data, 'utf-8'));
                return api.sendMessage({ attachment: createReadStream(`./${name}.mp3`)}, event.threadID, () => unlinkSync(`./${name}.mp3`));                
            }
            // ban
            if (args[0] == "ban" && isAdmin()) {
                switch (args[1]) {
                    case "cmd":
                        if (!args[2]) return out("Chưa nhập lệnh cần cấm.");
                        if (!botData.allCmds.some(e => e == args[2])) return out("Lệnh cần cấm không tồn tại.");
                        if (BigData.threadData[threadID].blockCmd.includes(args[2])) return out("Lệnh này đã bị cấm từ trước.");
                        BigData.threadData[threadID].blockCmd.push(args[2]);
                        out("Đã cấm sử dụng lệnh '" +  args[2] +  "' trong nhóm này.");
                    break;
                    case "user":
                        var mention = Object.keys(event.mentions)[0];
                        if (!mention) {
                            if (isNaN(args[2])) return out("ID cần là 1 dãy số.");
                            if (!botData.users.some(e => e.userID == args[2])) return out("Không có dữ liệu của người dùng.");
                            if (BigData.userData[args[2]].block == true) return out(BigData.userData[args[2]].name + " đã bị cấm từ trước.");
                            BigData.userData[args[2]].block = true;
                            botData.users.find(e => e.userID == args[2]).block = true;
                            out("Đã cấm người dùng: " + BigData.userData[args[2]].name);
                        } else {
                            if (!botData.users.some(e => e.userID == mention)) return out("Không có dữ liệu của người dùng.");
                            if (BigData.userData[mention].block == true) return out(BigData.userData[args[2]].name + " đã bị cấm từ trước.");
                            BigData.userData[mention].block = true;
                            botData.users.find(e => e.userID == mention).block = true;
                            out("Đã cấm người dùng: " + BigData.userData[args[2]].name);
                        }
                    break;
                    case "thread":
                        if (!args[2]) {
                            if (BigData.threadData[threadID].block == true) return out("Nhóm này đã bị cấm từ trước.");
                            BigData.threadData[threadID].block = true;
                            botData.threads.find(e => e.threadID == threadID).block = true;
                            out("Đã cấm nhóm: " + BigData.threadData[threadID].name);                            
                        } else {
                            if (isNaN(args[2])) return out("ID cần là 1 dãy số.");
                            if (!botData.threads.some(e => e.threadID == args[2])) return out("Không có dữ liệu của nhóm.");
                            if (BigData.threadData[args[2]].block == true) return out(BigData.threadData[args[2]].name + " đã bị cấm từ trước.");
                            BigData.threadData[args[2]].block = true;
                            botData.threads.find(e => e.threadID == args[2]).block = true;
                            out("Đã cấm nhóm: " + BigData.threadData[args[2]].name);
                        }
                    break;
                    default:
                        return out("Lệnh bạn nhập không đúng, vui lòng thử lại.");
                    break;
                }
                writeFileSync("./package.json", JSON.stringify(package, null, 4));
            }
            // unban
            if (args[0] == "unban" && isAdmin()) {
                switch (args[1]) {
                    case "cmd":
                        if (!args[2]) return out("Chưa nhập lệnh cần bỏ cấm.");
                        if (!botData.allCmds.some(e => e == args[2])) return out("Lệnh cần bỏ cấm không tồn tại.");
                        if (!BigData.threadData[threadID].blockCmd.includes(args[2])) return out("Lệnh này chưa bị cấm.");
                        BigData.threadData[threadID].blockCmd.splice(BigData.threadData[threadID].blockCmd.indexOf(args[2]));
                        out("Đã bỏ cấm lệnh '" +  args[2] +  "' trong nhóm này.");
                    break;
                    case "user":
                        var mention = Object.keys(event.mentions)[0];
                        if (!mention) {
                            if (isNaN(args[2])) return out("ID cần là 1 dãy số.");
                            if (!botData.users.some(e => e.userID == args[2])) return out("Không có dữ liệu của người dùng.");
                            if (BigData.userData[args[2]].block == false) return out(BigData.userData[args[2]].name + " chưa bị cấm.");
                            BigData.userData[args[2]].block = false;
                            botData.users.find(e => e.userID == args[2]).block = false;
                            out("Đã bỏ cấm người dùng: " + BigData.userData[args[2]].name);
                        } else {
                            if (!botData.users.some(e => e.userID == mention)) return out("Không có dữ liệu của người dùng.");
                            if (BigData.userData[mention].block == false) return out(BigData.userData[mention].name + " đã bị cấm từ trước.");
                            BigData.userData[mention].block = false;
                            botData.users.find(e => e.userID == mention).block = false;
                            out("Đã bỏ cấm người dùng: " + BigData.userData[mention].name);
                        }
                    break;
                    case "thread":
                        if (!args[2]) {
                            if (BigData.threadData[threadID].block == false) return out("Nhóm này chưa bị cấm.");
                            BigData.threadData[threadID].block = false;
                            botData.threads.find(e => e.threadID == threadID).block = false;
                            out("Đã bỏ cấm nhóm: " + BigData.threadData[threadID].name);                            
                        } else {
                            if (isNaN(args[2])) return out("ID cần là 1 dãy số.");
                            if (!botData.threads.some(e => e.threadID == args[2])) return out("Không có dữ liệu của nhóm.");
                            if (BigData.threadData[args[2]].block == false) return out(BigData.threadData[args[2]].name + " chưa bị cấm.");
                            BigData.threadData[args[2]].block = false;
                            botData.threads.find(e => e.threadID == args[2]).block = false;
                            out("Đã bỏ cấm nhóm: " + BigData.threadData[args[2]].name);
                        }
                    break;
                    default:
                        return out("Lệnh bạn nhập không đúng, vui lòng thử lại.");
                    break;                    
                }
                writeFileSync("./package.json", JSON.stringify(package, null, 4));
            }
        } catch (e) {
            out(`${e.name}: ${e.message} tại lệnh ${args[0]}`);
            modules.logger(`${e.name}: ${e.message} tại lệnh ${args[0]}`, "message", 1);
        }
    }
}

function Reply({ api }) {
    var replyData = [];
    return async function ({ event }) {
        const { threadID, messageID, senderID, body: content } = event;
        if (event.type != "message_reply") return;
        for (var e of BigData.reply.entries()) {
            if (!replyData.some(i => i == e[0])) replyData.push(e[0]);
        }

        var out = function (data, callback = function () {}, mid) {
            if (!data) return;
            mid = typeof mid == "undefined" ? messageID : mid;
            typeof callback == "string" ? mid = callback : callback;
            typeof callback != "function" ? callback = function () { } : callback;
            return api.sendMessage(data, threadID, callback, mid);
        }

        if (replyData.length > 0) {
            var DataInReplyData = BigData.reply.get(event.messageReply.messageID);
            if (typeof DataInReplyData == "undefined") return;
            const { name: commandName } = DataInReplyData;
            switch (commandName) {
                case "name":
                   
                break;
            }
            BigData.reply.delete(event.messageReply.messageID);
            replyData.splice(replyData.indexOf(event.messageReply.messageID), 1);
        }
    }
}

function noPrefix({ api }) {
    return async function ({ event }) {        
        const { threadID, senderID, messageID, body } = event;
        if (senderID == api.getCurrentUserID()) return;
        
        var out = function (data, callback = function () { }, mid) {
            if (!data) return;
            mid = typeof mid == "undefined" ? messageID : mid;
            typeof callback == "string" ? mid = callback : callback;
            typeof callback != "function" ? callback = function () { } : callback;
            return api.sendMessage(data, threadID, callback, mid);
        }

        if (body == "ahihi") return out("=))");
    }
}

// Open Server
const server = require('http').createServer(function (req, res) {
  res.writeHead(200);
  res.end("Hello World");
});
server.listen(process.env.PORT || 3000);

console.clear();
modules.checkUpdate();
// get cookie or start bot
if (botData.cookies.length == 0) return modules.loginWithEmail();
else return modules.loginWithCookie();
