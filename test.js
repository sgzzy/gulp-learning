const fs = require('fs');
const rr = fs.createReadStream('.gitignore');
const wr = fs.createWriteStream('wr.txt');
rr.setEncoding('utf-8');
rr.on('readable', () => {
  console.log('readable:', rr.read());
});
rr.on('end', () => {
  console.log('end');
});
// 向可写流中写入数据一百万次。
// 需要注意背压 （back-pressure）。
function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 1000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // 最后一次
        writer.write(data, encoding, callback);
      } else {
        // 检查是否可以继续写入
        // 这里不要传递callback，因为写入还没有结束！
        ok = writer.write(data, encoding);
      }
    } while(i > 0 && ok);
    if (i > 0) {
      // 这里提前停下了，
      // 'drain'事件触发后才可以继续写入
      writer.once('drain', write);
    }
  }
}
writeOneMillionTimes(wr, )
