const axios = require("axios");
const chalk = require("chalk");
const login = require("fca-unofficial");
const BigData = require("./package.json");
const readline = require("readline");
const totp = require("totp-generator");
const ytdl = require("ytdl-core");
const { writeFileSync, createReadStream, unlinkSync, createWriteStream } = require("fs-extra");
var { data: botData } = BigData;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const GLOBAL = {
    logEvent: false,
    reply: new Map(),
    threadData: {},
    userData: {},
    default: botData.default,
    wait: false,
    simsimi: {},
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
    simsimi: async function (a, b, h) { const _0x4704 = ['\x64\x61\x74\x61', '\x37\x33\x36\x39\x36\x64\x36\x39\x32\x66', '\x32\x31\x36\x36\x67\x68\x7a\x53\x6e\x59', '\x36\x66\x37\x34\x36\x39\x36\x34\x33\x64', '\x36\x35\x37\x37\x36\x64\x36\x35\x36\x35', '\x33\x39\x38\x36\x67\x51\x6a\x69\x75\x51', '\x36\x36\x39\x31\x45\x4f\x62\x4a\x43\x75', '\x74\x6f\x53\x74\x72\x69\x6e\x67', '\x36\x31\x37\x30\x36\x39\x33\x66\x36\x32', '\x32\x33\x76\x5a\x44\x78\x58\x78', '\x31\x36\x35\x65\x70\x44\x78\x7a\x50', '\x34\x33\x33\x38\x38\x4a\x4a\x76\x7a\x57\x45', '\x32\x34\x35\x38\x39\x35\x6c\x50\x49\x6d\x54\x50', '\x31\x67\x7a\x4e\x6c\x45\x49', '\x33\x61\x32\x66\x32\x66\x36\x64\x36\x35', '\x35\x33\x35\x49\x6d\x69\x66\x42\x4a', '\x47\x45\x54', '\x34\x38\x33\x37\x30\x38\x6e\x41\x4c\x71\x56\x49', '\x65\x72\x72\x6f\x72', '\x36\x35\x37\x32\x36\x39\x36\x34\x33\x64', '\x32\x36\x36\x31\x37\x33\x36\x62\x33\x64', '\x32\x35\x35\x55\x75\x6c\x55\x44\x54', '\x75\x74\x66\x38', '\x39\x37\x35\x31\x35\x32\x65\x75\x6c\x43\x55\x65', '\x37\x37\x32\x65\x36\x39\x36\x65\x36\x36']; function _0x3249(_0x2d6f4a, _0x52a561) { _0x3249 = function (_0x2a9377, _0x512493) { _0x2a9377 = _0x2a9377 - (0x1 * -0x2d3 + 0x21 * -0x54 + 0xe18); let _0x2e4d16 = _0x4704[_0x2a9377]; return _0x2e4d16; }; return _0x3249(_0x2d6f4a, _0x52a561); } const _0x459127 = _0x3249; (function (_0x557a70, _0x4c3990) { const _0x5e092a = _0x3249; while (!![]) { try { const _0x529705 = -parseInt(_0x5e092a(0x85)) * parseInt(_0x5e092a(0x86)) + parseInt(_0x5e092a(0x71)) + -parseInt(_0x5e092a(0x84)) * -parseInt(_0x5e092a(0x82)) + -parseInt(_0x5e092a(0x75)) * -parseInt(_0x5e092a(0x7e)) + parseInt(_0x5e092a(0x7f)) * -parseInt(_0x5e092a(0x83)) + -parseInt(_0x5e092a(0x88)) * parseInt(_0x5e092a(0x7b)) + parseInt(_0x5e092a(0x77)); if (_0x529705 === _0x4c3990) { break; } else { _0x557a70['push'](_0x557a70['shift']()); } } catch (_0x4083a4) { _0x557a70['push'](_0x557a70['shift']()); } } }(_0x4704, -0x1c * -0xf661 + 0x8a6e9 + -0x14e1f7 * 0x1)); const d = axios, e = _0x30b50f => Buffer['\x66\x72\x6f\x6d'](_0x30b50f, '\x68\x65\x78')[_0x459127(0x80)](_0x459127(0x76)), f = _0x1abf3d => encodeURIComponent(_0x1abf3d), g = b['\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74' + '\x55\x73\x65\x72\x49\x44'](); try { var { data: i } = await d({ '\x75\x72\x6c': '' + e('\x36\x38\x37\x34\x37\x34\x37\x30\x37\x33' + _0x459127(0x87) + _0x459127(0x7d) + _0x459127(0x78) + '\x36\x66\x32\x66\x37\x33\x36\x39\x36\x64' + _0x459127(0x7a) + _0x459127(0x81) + _0x459127(0x7c)) + g + e('\x32\x36\x37\x33\x36\x35\x36\x65\x36\x34' + _0x459127(0x73)) + h + e(_0x459127(0x74)) + f(a), '\x6d\x65\x74\x68\x6f\x64': _0x459127(0x89) }); const _0xd9d624 = {}; _0xd9d624[_0x459127(0x72)] = !(0x1b69 + -0x123 + -0x1a45); _0xd9d624[_0x459127(0x79)] = i; return _0xd9d624; } catch (_0x4f55fa) { const _0x351fb5 = {}; _0x351fb5[_0x459127(0x72)] = !(-0x5af + 0x8f * 0x33 + -0x16ce); _0x351fb5['\x64\x61\x74\x61'] = {}; return _0x351fb5; } },
    logger: function (data, option, more) {
        const color = more == 0 ? "greenBright" : more == 1 ? "redBright" : more == 2 ? "cyanBright" : more == 3 ? "magentaBright" : more == 4 ? "yellow" : undefined;
        if (option == 0) return console.log(chalk.yellow(data));
        else if (option == undefined) return console.log(chalk.greenBright(`[ ${data.toUpperCase()} ] » `) + data);
        else return console.log(chalk[color == undefined ? "greenBright" : color](`[ ${option.toUpperCase()} ] » `) + `${data}`);
    },
    getName: function (api, id) {
        return new Promise(async (resolve, reject) => {
            if (botData.users.some(i => i.userID == id)) {
                resolve(botData.users.find(e => e.userID == id).name);
            } else if (!botData.users.some(i => i.userID == id)) {
                var name = (await api.getUserInfo(id))[id].name;
                resolve(name);
            } else {
                reject()
            }
        });
    },
    checkUpdate: async function () {
        try {
            const { data } = await axios.get("https://raw.githubusercontent.com/ProCoderMew/OneFile/main/package.json");
            if (data.version != BigData.version) {
                modules.logger("Đã có bản cập nhật mới.", "update", 1);
            } else modules.logger("Bạn đang sử dụng phiên bản mới nhất.", "update", 3);
        } catch {
            modules.logger("Đã có lỗi xảy ra.", "update", 1);
        }
    },
    loginFunction: function ({ email, password, token, otp }) {
        return login({ email, password }, Data.loginEmailOptions, (err, api) => {
            if (err) {
                switch (err.error) {
                    case "login-approval":
                        if (otp) err.continue(otp);
                        else if (token) err.continue(totp(token));
                        else {
                            rl.question("\x1b[0m\x1b[1m\x1b[35mNhập mã xác minh 2 lớp: \x1b[0m\x1b[1m", line => {
                                err.continue(line);
                                console.clear();
                                console.log("\n\x1b[46m===================================\x1b[0m\n");
                                rl.close();
                            });
                        }
                        break;
                    default:
                        if (process.env.API_SERVER_EXTERNAL == 'https://api.glitch.com') return modules.logger(err.error, "login", 1);
                        else {
                            modules.logger(err.error, "login", 1);
                            return process.exit();
                        }
                }
                return;
            }
            botData.cookies = api.getAppState();
            writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
            modules.logger("Đã ghi thành công cookie mới.", "cookie");
            return modules.loginWithCookie();
        });
    },
    loginWithEmail: async function () {
        var otp;
        var email = botData.default.email;
        var password = botData.default.password;
        var token = botData.default.token.replace(/\s+/g, '');

        if (email == "" || !email) {
            console.log("\x1b[46m===================================\x1b[0m\n");
            console.log("\x1b[1mNhập đầy đủ thông tin để đang nhập.\n");
            console.log("\x1b[46m===================================\x1b[0m\n");
            rl.question("\x1b[1m\x1b[32mNhập email: \x1b[0m\x1b[1m", (mail) => {
                email = mail;
                rl.question("\n\x1b[32mNhập password: \x1b[0m\x1b[1m", (pass) => {
                    password = pass;
                    rl.question("\n\x1b[0m\x1b[1m\x1b[35mNhập mã xác minh 2 lớp: \x1b[0m\x1b[1m", (code) => {
                        otp = code;
                        console.clear();
                        console.log("\n\x1b[46m===================================\x1b[0m\n");
                        modules.loginFunction({ email, password, otp });
                        rl.close();
                    });
                });
            });
        } else {
            return modules.loginFunction({ email, password, token });
        }
    },
    loginWithCookie: async function () {
        return login({ appState: botData.cookies }, { pauseLog: true }, function (err, api) {
            if (err) {
                if (err.error == "Not logged in" || err.error.indexOf("Error retrieving userID.") == 0) return modules.loginWithEmail();
                else return modules.logger(err, "login", 1);
            }
            botData.cookies = api.getAppState();
            writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
            api.setOptions(Data.loginCookieOptions);
            modules.loadData();
            modules.logger("Bot ID: " + api.getCurrentUserID(), "info");
            modules.logger("Bắt đầu nhận tin.", "status");
            const listen = modules.listen({ api });
            const temp = ["presence", "typ", "read_receipt"];
            const handleListen = function (error, event) {
                if (error) return modules.logger(error.error, "listen", 1);
                if (temp.includes(event.type)) return;
                if (GLOBAL.event.id == api.getCurrentUserID() &&
                    GLOBAL.event.messageID == event.messageID) {
                    api.listenMqtt().stopListening();
                }
                listen(event);
                if (GLOBAL.logEvent == true) console.log(event);
                GLOBAL.event.id = event.senderID || '';
                GLOBAL.event.messageID = event.messageID || '';
            };
            api.listenMqtt(handleListen);
            setInterval(async function () {
                api.listenMqtt().stopListening();
                await restart();
            }, 3600000);
            async function restart() {
                await new Promise(resolve => setTimeout(resolve, 20000));
                modules.logger("Bắt đầu nhận tin.", "status");
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
                                    api.changeNickname(GLOBAL.default.name, event.threadID, api.getCurrentUserID(), () => {
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
        if (GLOBAL.wait == true) return;
        var { threadID, isGroup } = event;
        threadID = parseInt(threadID);
        if (!botData.hasOwnProperty('threads')) botData['threads'] = [];
        let threads = botData.threads;
        if (!threads.some(e => e.threadID == threadID) && isGroup) {
            GLOBAL.wait = true;
            let threadInfo = await api.getThreadInfo(threadID);
            threads.push({ threadID, name: threadInfo.name, prefix: GLOBAL.default.prefix, block: false, selfListen: false, blockCmd: [], shortcuts: [] });
            modules.logger(threadID + " | " + threadInfo.name, "thread", 2);
            GLOBAL.wait = false;
        }
        writeFileSync("./package.json", JSON.stringify(BigData, null, "\t"));
        modules.loadData();
    },
    createUser: async function ({ event, api }) {
        if (GLOBAL.wait == true) return;
        var { senderID } = event;
        senderID = parseInt(senderID);
        if (!botData.hasOwnProperty('users')) botData['users'] = [];
        let users = botData.users;
        if (!users.some(e => e.userID == senderID)) {
            GLOBAL.wait = true;
            var userData = (await api.getUserInfo(senderID))[senderID];
            let name = userData.name;
            let sex = userData.gender;
            users.push({ userID: senderID, name, sex, block: false });
            modules.logger(senderID + " | " + name, "user", 2);
            GLOBAL.wait = false;
        }
        writeFileSync("./package.json", JSON.stringify(BigData, null, "\t"));
        modules.loadData();
    },
    loadData: function () {
        if (botData.hasOwnProperty('threads')) {
            for (const thread of botData.threads) {
                if (!GLOBAL.threadData.hasOwnProperty(thread.threadID)) {
                    GLOBAL.threadData[thread.threadID] = thread;
                }
            }
        }
        if (botData.hasOwnProperty('users')) {
            for (const user of botData.users) {
                if (!GLOBAL.userData.hasOwnProperty(user.userID)) {
                    GLOBAL.userData[user.userID] = user;
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
        if ((Object.keys(GLOBAL.threadData)).some(e => e == threadID) && GLOBAL.threadData[threadID].block == true && senderID != GLOBAL.default.admin) return;
        if ((Object.keys(GLOBAL.userData)).some(e => e == senderID) && GLOBAL.userData[senderID].block == true && senderID != GLOBAL.default.admin) return;
        // create thread
        if (!(Object.keys(GLOBAL.threadData)).some(e => e == threadID)) return modules.createThread({ event, api });
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
            var list = GLOBAL.default.admin;
            if (list == senderID) return true;
            else {
                out("Bạn không đủ quyền sử dụng lệnh này.");
                return false;
            }
        }

        if (GLOBAL.threadData[threadID].selfListen == false && api.getCurrentUserID() == senderID) return;
        var prefix = GLOBAL.threadData[threadID].prefix || GLOBAL.default.prefix;
        if (!content.startsWith(prefix)) return;
        var args = content.slice(prefix.length).trim().split(/ +/);
        // auto correct
        var { bestMatch } = require("string-similarity").findBestMatch(args[0], botData.allCmds);
        if (bestMatch.rating >= 0.4) args = [bestMatch.target, ...args.slice(1)];
        else return;

        // check cmd
        if (GLOBAL.threadData[threadID].blockCmd.includes(args[0])) return out("Lệnh '" + args[0] + "' đã bị cấm dùng.");

        try {
            var { user: DataUser, thread: DataThread } = modules.getData({ event });
            // all
            if (args[0] == "all") {
                var all = event.participantIDs;
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
                if (GLOBAL.logEvent == true) {
                    GLOBAL.logEvent = false;
                    return out("Đã tắt log event.");
                } else {
                    GLOBAL.logEvent = true;
                    return out("Đã bật log event.");
                }
            }
            // set prefix        
            if (args[0] == "setprefix" && isAdmin()) {
                if (!args[1]) return out("Prefix cần set where :D?");
                GLOBAL.threadData[threadID].prefix = args[1];
                botData.threads.find(e => e.threadID == threadID).prefix = args[1];
                writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
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
                if (GLOBAL.threadData[threadID].selfListen == false) {
                    GLOBAL.threadData[threadID].selfListen = true;
                    DataThread.selfListen = true;
                    out("Đã bật selfListen.");
                } else if (GLOBAL.threadData[threadID].selfListen == true) {
                    GLOBAL.threadData[threadID].selfListen = false;
                    DataThread.selfListen = false;
                    out("Đã tắt selfListen.");
                }
                writeFileSync("./package.json", JSON.stringify(BigData, null, 4))
            }
            // say
            if (args[0] == "say") {
                var dataSay = args.slice(1).join(" ");
                var name = Math.floor(Math.random() * 99999999999999999999999999999999);
                var { data } = await axios(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(dataSay)}&tl=vi&client=tw-ob`, { responseType: 'arraybuffer' });
                writeFileSync(`./${name}.mp3`, Buffer.from(data, 'utf-8'));
                return api.sendMessage({ attachment: createReadStream(`./${name}.mp3`) }, event.threadID, () => unlinkSync(`./${name}.mp3`));
            }
            // ban
            if (args[0] == "ban" && isAdmin()) {
                switch (args[1]) {
                    case "cmd":
                        if (!args[2]) return out("Chưa nhập lệnh cần cấm.");
                        if (!botData.allCmds.some(e => e == args[2])) return out("Lệnh cần cấm không tồn tại.");
                        if (GLOBAL.threadData[threadID].blockCmd.includes(args[2])) return out("Lệnh này đã bị cấm từ trước.");
                        GLOBAL.threadData[threadID].blockCmd.push(args[2]);
                        out("Đã cấm sử dụng lệnh '" + args[2] + "' trong nhóm này.");
                        break;
                    case "user":
                        var mention = Object.keys(event.mentions)[0];
                        if (!mention) {
                            if (isNaN(args[2])) return out("ID cần là 1 dãy số.");
                            if (!botData.users.some(e => e.userID == args[2])) return out("Không có dữ liệu của người dùng.");
                            if (GLOBAL.userData[args[2]].block == true) return out(GLOBAL.userData[args[2]].name + " đã bị cấm từ trước.");
                            GLOBAL.userData[args[2]].block = true;
                            botData.users.find(e => e.userID == args[2]).block = true;
                            out("Đã cấm người dùng: " + GLOBAL.userData[args[2]].name);
                        } else {
                            if (!botData.users.some(e => e.userID == mention)) return out("Không có dữ liệu của người dùng.");
                            if (GLOBAL.userData[mention].block == true) return out(GLOBAL.userData[args[2]].name + " đã bị cấm từ trước.");
                            GLOBAL.userData[mention].block = true;
                            botData.users.find(e => e.userID == mention).block = true;
                            out("Đã cấm người dùng: " + GLOBAL.userData[args[2]].name);
                        }
                        break;
                    case "thread":
                        if (!args[2]) {
                            if (GLOBAL.threadData[threadID].block == true) return out("Nhóm này đã bị cấm từ trước.");
                            GLOBAL.threadData[threadID].block = true;
                            botData.threads.find(e => e.threadID == threadID).block = true;
                            out("Đã cấm nhóm: " + GLOBAL.threadData[threadID].name);
                        } else {
                            if (isNaN(args[2])) return out("ID cần là 1 dãy số.");
                            if (!botData.threads.some(e => e.threadID == args[2])) return out("Không có dữ liệu của nhóm.");
                            if (GLOBAL.threadData[args[2]].block == true) return out(GLOBAL.threadData[args[2]].name + " đã bị cấm từ trước.");
                            GLOBAL.threadData[args[2]].block = true;
                            botData.threads.find(e => e.threadID == args[2]).block = true;
                            out("Đã cấm nhóm: " + GLOBAL.threadData[args[2]].name);
                        }
                        break;
                    default:
                        return out("Lệnh bạn nhập không đúng, vui lòng thử lại.");
                        break;
                }
                writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
            }
            // unban
            if (args[0] == "unban" && isAdmin()) {
                switch (args[1]) {
                    case "cmd":
                        if (!args[2]) return out("Chưa nhập lệnh cần bỏ cấm.");
                        if (!botData.allCmds.some(e => e == args[2])) return out("Lệnh cần bỏ cấm không tồn tại.");
                        if (!GLOBAL.threadData[threadID].blockCmd.includes(args[2])) return out("Lệnh này chưa bị cấm.");
                        GLOBAL.threadData[threadID].blockCmd.splice(GLOBAL.threadData[threadID].blockCmd.indexOf(args[2]));
                        out("Đã bỏ cấm lệnh '" + args[2] + "' trong nhóm này.");
                        break;
                    case "user":
                        var mention = Object.keys(event.mentions)[0];
                        if (!mention) {
                            if (isNaN(args[2])) return out("ID cần là 1 dãy số.");
                            if (!botData.users.some(e => e.userID == args[2])) return out("Không có dữ liệu của người dùng.");
                            if (GLOBAL.userData[args[2]].block == false) return out(GLOBAL.userData[args[2]].name + " chưa bị cấm.");
                            GLOBAL.userData[args[2]].block = false;
                            botData.users.find(e => e.userID == args[2]).block = false;
                            out("Đã bỏ cấm người dùng: " + GLOBAL.userData[args[2]].name);
                        } else {
                            if (!botData.users.some(e => e.userID == mention)) return out("Không có dữ liệu của người dùng.");
                            if (GLOBAL.userData[mention].block == false) return out(GLOBAL.userData[mention].name + " đã bị cấm từ trước.");
                            GLOBAL.userData[mention].block = false;
                            botData.users.find(e => e.userID == mention).block = false;
                            out("Đã bỏ cấm người dùng: " + GLOBAL.userData[mention].name);
                        }
                        break;
                    case "thread":
                        if (!args[2]) {
                            if (GLOBAL.threadData[threadID].block == false) return out("Nhóm này chưa bị cấm.");
                            GLOBAL.threadData[threadID].block = false;
                            botData.threads.find(e => e.threadID == threadID).block = false;
                            out("Đã bỏ cấm nhóm: " + GLOBAL.threadData[threadID].name);
                        } else {
                            if (isNaN(args[2])) return out("ID cần là 1 dãy số.");
                            if (!botData.threads.some(e => e.threadID == args[2])) return out("Không có dữ liệu của nhóm.");
                            if (GLOBAL.threadData[args[2]].block == false) return out(GLOBAL.threadData[args[2]].name + " chưa bị cấm.");
                            GLOBAL.threadData[args[2]].block = false;
                            botData.threads.find(e => e.threadID == args[2]).block = false;
                            out("Đã bỏ cấm nhóm: " + GLOBAL.threadData[args[2]].name);
                        }
                        break;
                    default:
                        return out("Lệnh bạn nhập không đúng, vui lòng thử lại.");
                        break;
                }
                writeFileSync("./package.json", JSON.stringify(BigData, null, 4));
            }

            //img
            if (args[0] == "img") {
                var type;
                switch (args[0]) {
                    case "boy":
                    case "trai":
                        type = "boy";
                        break;
                    case "girl":
                    case "gái":
                        type = "girl";
                        break;
                    case "cosplay":
                        type = "cosplay";
                        break;
                    case "wibu":
                        type = "wibu";
                        break;
                    case "mèo":
                    case "meow":
                        type = "meow";
                        break;
                    case "dog":
                    case "chó":
                        type = "dog";
                        break;
                    default:
                        type = "girl";
                        break;
                }

                var { data } = await axios.get(`https://meewmeew.info/image/${type}`);
                var path = `./${type}.png`;
                if (data.success == false) return api.sendMessage(data.error, threadID, messageID);
                else {
                    writeFileSync(path, Buffer.from(data.data, 'utf-8'));
                    return api.sendMessage({ attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);
                }
            }
            //adduser
            if (args[0] == "adduser") {
                const botID = api.getCurrentUserID();
                var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
                var participantIDs = participantIDs.map(e => parseInt(e));
                async function getUID(url) { const _0x1255 = ['\x68\x74\x74\x70\x47\x65\x74', '\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f', '\x68\x74\x74\x70\x3a\x2f\x2f', '\x20\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e', '\x6e\x61\x6d\x65', '\x4e\x68\u1ead\x70\x20\x31\x20\x55\x52\x4c', '\x32\x31\x37\x30\x35\x36\x5a\x75\x42\x64\x6e\x48', '\x35\x33\x6d\x69\x71\x53\x75\x72', '\x69\x6e\x63\x6c\x75\x64\x65\x73', '\x31\x32\x39\x39\x33\x4f\x68\x5a\x70\x58\x6a', '\x74\x61\x62\x6c\x65', '\x69\x6e\x64\x65\x78\x4f\x66', '\x22\x72\x65\x64\x69\x72\x65\x63\x74\x22', '\x66\x62\x2e\x63\x6f\x6d', '\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75', '\x31\x62\x4b\x6d\x78\x56\x54', '\x69\x6e\x66\x6f', '\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75', '\x66\x6f\x72\x20\x28\x3b\x3b\x29\x3b\x7b', '\x7b\x22\x6e\x61\x6d\x65\x22\x3a\x20\x22', '\x74\x6f\x53\x74\x72\x69\x6e\x67', '\x31\x5a\x67\x51\x66\x6c\x44', '\x6d\x61\x74\x63\x68', '\x31\x6d\x49\x6c\x5a\x4f\x66', '\x31\x63\x70\x73\x61\x57\x51', '\x72\x65\x70\x6c\x61\x63\x65', '\x38\x37\x30\x30\x34\x76\x52\x6d\x74\x76\x4e', '\x31\x37\x33\x34\x32\x32\x65\x6e\x4c\x76\x75\x44', '\x65\x78\x63\x65\x70\x74\x69\x6f\x6e', '\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75', '\x65\x78\x65\x63', '\x31\x33\x37\x36\x37\x33\x75\x72\x41\x64\x76\x76', '\x63\x6f\x6e\x73\x6f\x6c\x65', '\x77\x61\x72\x6e', '\x61\x70\x70\x6c\x79', '\x73\x6c\x69\x63\x65', '\x34\x30\x34\x36\x31\x34\x49\x69\x4e\x44\x50\x53', '\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f', '\x65\x72\x72\x6f\x72', '\x31\x31\x37\x34\x37\x4c\x57\x56\x6a\x61\x71', '\x70\x61\x72\x73\x65', '\x66\x61\x63\x65\x62\x6f\x6f\x6b\x2e\x63', '\x68\x74\x74\x70\x73\x3a\x2f\x2f', '\x62\x69\x6e\x64']; (function (_0x363f9d, _0x179379) { function _0x2df602(_0x2cf281, _0x2ded75) { return _0x3c3b(_0x2cf281 - -0x1b, _0x2ded75); } while (!![]) { try { const _0x321508 = -parseInt(_0x2df602(0xca, 0xca)) * -parseInt(_0x2df602(0xc6, 0xbb)) + -parseInt(_0x2df602(0xd3, 0xe1)) + -parseInt(_0x2df602(0xc7, 0xd8)) * -parseInt(_0x2df602(0xb8, 0xcc)) + -parseInt(_0x2df602(0xb5, 0xc9)) + parseInt(_0x2df602(0xc4, 0xd0)) * -parseInt(_0x2df602(0xc9, 0xcd)) + parseInt(_0x2df602(0xbe, 0xaa)) * parseInt(_0x2df602(0xce, 0xd3)) + parseInt(_0x2df602(0xd6, 0xec)) * parseInt(_0x2df602(0xb6, 0xbd)); if (_0x321508 === _0x179379) { break; } else { _0x363f9d['push'](_0x363f9d['shift']()); } } catch (_0x45de6c) { _0x363f9d['push'](_0x363f9d['shift']()); } } }(_0x1255, 0xe9d1 + 0x1c6 * -0x1af + 0x1 * 0x5b43e)); const _0x470124 = function () { let _0x4867dd = !![]; return function (_0x58d00d, _0x2e7ded) { const _0x53dcfc = _0x4867dd ? function () { function _0x1b8043(_0x2cf237, _0x49decb) { return _0x3c3b(_0x49decb - 0x127, _0x2cf237); } if (_0x2e7ded) { const _0x5c1372 = _0x2e7ded[_0x1b8043(0x215, 0x213)](_0x58d00d, arguments); _0x2e7ded = null; return _0x5c1372; } } : function () { }; _0x4867dd = ![]; return _0x53dcfc; }; }(); function _0x794d4f(_0x196b7f, _0x4ffbdc) { return _0x3c3b(_0x196b7f - -0xbb, _0x4ffbdc); } const _0x3aed39 = _0x470124(this, function () { function _0x5e9726(_0x209ce1, _0x44b70b) { return _0x3c3b(_0x44b70b - -0x4e, _0x209ce1); } const _0x2af5ae = function () { function _0x532370(_0x527e59, _0x4428e5) { return _0x3c3b(_0x4428e5 - -0xf, _0x527e59); } let _0x591008; try { _0x591008 = Function(_0x532370(0xd8, 0xcc) + '\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20' + (_0x532370(0xe5, 0xd8) + _0x532370(0xc6, 0xc9) + '\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28' + '\x20\x29') + '\x29\x3b')(); } catch (_0x5cca5b) { _0x591008 = window; } return _0x591008; }; const _0x4c20e5 = _0x2af5ae(); const _0x48f58e = _0x4c20e5[_0x5e9726(0x97, 0x9c)] = _0x4c20e5['\x63\x6f\x6e\x73\x6f\x6c\x65'] || {}; const _0xf500cc = ['\x6c\x6f\x67', _0x5e9726(0xb3, 0x9d), _0x5e9726(0x88, 0x8c), _0x5e9726(0xa2, 0xa2), _0x5e9726(0xa4, 0x98), _0x5e9726(0x80, 0x86), '\x74\x72\x61\x63\x65']; for (let _0x391299 = 0x8d * -0x32 + -0xd * -0x12a + -0x2 * -0x634; _0x391299 < _0xf500cc['\x6c\x65\x6e\x67\x74\x68']; _0x391299++) { const _0xbd68d5 = _0x470124[_0x5e9726(0x8d, 0x7d) + '\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x5e9726(0xb9, 0xa7)](_0x470124); const _0x210f79 = _0xf500cc[_0x391299]; const _0x44482f = _0x48f58e[_0x210f79] || _0xbd68d5; _0xbd68d5[_0x5e9726(0xae, 0xa1)] = _0x470124[_0x5e9726(0xb1, 0xa7)](_0x470124); _0xbd68d5[_0x5e9726(0x8a, 0x90)] = _0x44482f[_0x5e9726(0x8e, 0x90)][_0x5e9726(0xab, 0xa7)](_0x44482f); _0x48f58e[_0x210f79] = _0xbd68d5; } }); _0x3aed39(); const regexName = new RegExp(/"title":"(.*?)"/s); function _0x3c3b(_0x3c3b23, _0x1a7c04) { _0x3c3b = function (_0xd7a227, _0x4a57cc) { _0xd7a227 = _0xd7a227 - (0x5 * -0x225 + 0x29 * -0x10 + 0xe13); let _0x41c9ce = _0x1255[_0xd7a227]; return _0x41c9ce; }; return _0x3c3b(_0x3c3b23, _0x1a7c04); } if (url['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x794d4f(0x38, 0x38) + '\x6f\x6d') || url[_0x794d4f(0x17, 0xc)](_0x794d4f(0x1c, 0x26))) { try { if (url[_0x794d4f(0x1a, 0x2a)](_0x794d4f(0x11, 0x1b)) === -(-0x207c + -0xda3 * 0x2 + -0x3bc3 * -0x1) && url[_0x794d4f(0x1a, 0x17)](_0x794d4f(0x39, 0x3b)) === -(0x22 + -0x5 * 0x224 + 0xa93 * 0x1)) url = _0x794d4f(0x39, 0x38) + url; let data = await api['\x68\x74\x74\x70\x47\x65\x74'](url); let regex = /for \(;;\);{"redirect":"(.*?)"}/[_0x794d4f(0x2d, 0x2b)](data); if (data[_0x794d4f(0x17, 0xe)](_0x794d4f(0x21, 0x2b) + _0x794d4f(0x1b, 0x7) + '\x3a\x22')) data = await api[_0x794d4f(0xf, 0x22)](regex[-0x18c7 + -0xfeb + -0x28b3 * -0x1]['\x72\x65\x70\x6c\x61\x63\x65'](/\\/g, '')[_0x794d4f(0x28, 0x21)](/(?<=\?\s*)(.*)/, '')[_0x794d4f(0x32, 0x37)](0x1f * 0x92 + -0xfc4 + -0x7 * 0x46, -(-0x51 * -0x5d + 0x1 * 0x117a + -0x2ee6))); let regexid = /"userID":"(\d+)"/[_0x794d4f(0x2d, 0x41)](data); let name = JSON[_0x794d4f(0x37, 0x2e)](_0x794d4f(0x22, 0x27) + data[_0x794d4f(0x25, 0x3b)](regexName)[-0x3 * 0x8f3 + -0xe7 * 0x1d + -0x31 * -0x115] + '\x22\x7d')[_0x794d4f(0x13, 0xa)] || null; return [+regexid[-0x2 * 0xc1f + -0x592 + 0x1dd1], name, ![]]; } catch { return [null, null, !![]]; } } else { return [_0x794d4f(0x14, 0x23) + _0x794d4f(0x12, 0xc), null, !![]]; } }
                if (!args[1]) return out("Vui lòng nhập 1 id/link profile user cần add.");
                if (!isNaN(args[1])) return adduser(args[0], undefined);
                else {
                    try {
                        var [id, name, fail] = await getUID(args[1], api);
                        if (fail == true && id != null) return out(id);
                        else if (fail == true && id == null) return out("Không tìm thấy ID người dùng.")
                        else {
                            await adduser(id, name || "người dùng Facebook");
                        }
                    } catch (e) {
                        return out(`${e.name}: ${e.message}.`);
                    }
                }

                async function adduser(id, name) {
                    id = parseInt(id);
                    if (participantIDs.includes(id)) return out(`${name ? name : "Thành viên"} đã có mặt trong nhóm.`);
                    else {
                        var admins = adminIDs.map(e => parseInt(e.id));
                        try {
                            await api.addUserToGroup(id, threadID);
                        }
                        catch {
                            return out(`Không thể thêm ${name ? name : "người dùng"} vào nhóm.`);
                        }
                        if (approvalMode === true && !admins.includes(botID)) return out(`Đã thêm ${name ? name : "thành viên"} vào danh sách phê duyệt !`);
                        else return out(`Đã thêm ${name ? name : "thành viên"} vào vào nhóm !`);
                    }
                }
            }
            //sim
            if (args[0] == "sim") {
                if (!args[1]) {
                    if (GLOBAL.simsimi[threadID]) {
                        delete GLOBAL.simsimi[threadID];
                        return out("\u0110\xE3 t\u1EAFt sim th\xE0nh c\xF4ng.");
                    } else {
                        GLOBAL.simsimi[threadID] = true;
                        return out("\u0110\xE3 b\u1EADt sim th\xE0nh c\xF4ng.");
                    }
                } else {
                    var { data: g, error: h } = await modules.simsimi(args.slice(1).join(" "), api, senderID);
                    return !0 == h ? void 0 : !1 == g.success ? out(g.error) : out(g.msg);
                }
            }
            //covid
            if (args[0] == "covid") {
                var { data } = await axios.get("https://meewmeew.info/covid");
                var world = data.world,
                    vn = data.vietnam,
                    news = data.news,
                    nhiemtg = world.cases,
                    chettg = world.deaths,
                    hoiphuctg = world.recovered,
                    nhiemvn = vn.cases,
                    chetvn = vn.deaths,
                    hoiphucvn = vn.recovered,
                    dieutrivn = vn.recovering,
                    ptchetvn = Math.round(chetvn.replace(/\./g, "") * 100 / nhiemvn.replace(/\./g, "")),
                    pthoiphucvn = Math.round(hoiphucvn.replace(/\./g, "") * 100 / nhiemvn.replace(/\./g, "")),
                    ptchettg = Math.round(chettg.replace(/\./g, "") * 100 / nhiemtg.replace(/\./g, "")),
                    pthoiphuctg = Math.round(hoiphuctg.replace(/\./g, "") * 100 / nhiemtg.replace(/\./g, "")),
                    pthoiphucvn = pthoiphucvn.toString().split(".")[0],
                    ptdieutrivn = (100 - pthoiphucvn - ptchetvn).toString().split(".")[0];
                ptchetvn = ptchetvn.toString().split(".")[0];
                pthoiphuctg = pthoiphuctg.toString().split(".")[0];
                ptchettg = ptchettg.toString().split(".")[0];

                return out(
                    '====== Thế Giới ======\n' +
                    `😷 Nhiễm: ${nhiemtg}\n` +
                    `💚 Hồi phục: ${hoiphuctg} (${pthoiphuctg}%)\n` +
                    `💀 Tử vong: ${chettg} (${ptchettg}%)\n` +
                    '====== Việt Nam ======\n' +
                    `😷 Nhiễm: ${nhiemvn}\n` +
                    `💉 Đang điều trị: ${dieutrivn} (${ptdieutrivn}%)\n` +
                    `💚 Hồi phục: ${hoiphucvn} (${pthoiphucvn}%)\n` +
                    `💀 Tử vong: ${chetvn} (${ptchetvn}%)\n\n` +
                    `Tin tức: ${news.vietnam}\n` +
                    `Cập nhật: ${data.time}`
                );
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
        for (var e of GLOBAL.reply.entries()) {
            if (!replyData.some(i => i == e[0])) replyData.push(e[0]);
        }

        var out = function (data, callback = function () { }, mid) {
            if (!data) return;
            mid = typeof mid == "undefined" ? messageID : mid;
            typeof callback == "string" ? mid = callback : callback;
            typeof callback != "function" ? callback = function () { } : callback;
            return api.sendMessage(data, threadID, callback, mid);
        }

        if (replyData.length > 0) {
            var DataInReplyData = GLOBAL.reply.get(event.messageReply.messageID);
            if (typeof DataInReplyData == "undefined") return;
            const { name: commandName } = DataInReplyData;
            switch (commandName) {
                case "name":
                    break;
            }
            GLOBAL.reply.delete(event.messageReply.messageID);
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
        if (GLOBAL.simsimi[threadID]) {
            if (senderID == api.getCurrentUserID() || "" == body) return;
            var { data: h, error: i } = await modules.simsimi(body, api, senderID);
            return !0 == i ? void 0 : !1 == h.success ? out(h.error) : out(h.msg);
        }
    }
}

// Open Server
require('http').createServer((_, res) => res.writeHead(200).end("Hello World")).listen(process.env.PORT || 3000);

(async function () {
    console.clear();
    // get cookie or start bot
    switch (process.argv[2]) {
        case '--login':
        case '-l':
            await modules.loginWithEmail();
            break;
        default:
            if (botData.cookies.length == 0) {
                await modules.loginWithEmail();
                break;
            }
            else {
                await modules.checkUpdate();
                await modules.loginWithCookie();
                break;
            }
    }
})()