import { clearlog, wlogger } from "./writelog.mjs"

(async () => {
    let file = './log.txt';
    await clearlog(file);
    await wlogger(file, '测试');
})()