const crypto = require('crypto');

function generateRandomNumber(min, max) {
  const randomBuffer = crypto.randomBytes(4); // 4字节（32位）的随机数据
  const randomNumber = randomBuffer.readUInt32LE(0); // 以小端字节序读取32位整数

  // 将随机数映射到指定范围
  const scaledRandomNumber = min + (randomNumber / 0xFFFFFFFF) * (max - min);

  return Math.floor(scaledRandomNumber);
}

// 生成一个范围在 1 到 100 的随机数
const randomValue = generateRandomNumber(1, 100);
console.log('随机数:', randomValue);
