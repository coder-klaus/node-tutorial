// 简单示例：连接数据库并插入数据

// JSON文件默认没有导入和导出语句，导致ESM无法进行解析，解决方法有两种
// 1. 通过fs模块读取成json格式字符串，再转json对象
// 2. CJS的require方法会同步读取文件，可以读取JSON文件
//    所以使用内置module模块的createRequire方法创建一个类似于CJS中的require方法
import { createRequire } from 'node:module';
import mysql from 'mysql2'

// 创建类似于CJS的require方法
const require = createRequire(import.meta.url);
const phones = require('./data/phone.json')

// 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'P@ssw0rd',
  database: 'music_db'
});

const statement = `INSERT INTO products SET ?;`
// 插入数据
phones.forEach(phone => connection.query(statement, phone))
