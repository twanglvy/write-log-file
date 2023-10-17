import fs from 'fs';
import sd from 'silly-datetime'
/**
 * 
 * @param {*} file 文件位置
 * @param {*} content 内容
 */

export const wlogger  = async (file , content) => {
    let options = {
        flags: 'a',
        encoding: 'utf8',// utf8编码
    }
    let stderr = fs.createWriteStream(file, options);
    let logger = new console.Console(stderr);
    // 增加时间
    let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    logger.log(`[${time}]  ${content}`);
}

export const clearlog = async(file) => {
    fs.writeFile(file, '', function (err) {
        if (err) {
            return err;
        }
    })
}
