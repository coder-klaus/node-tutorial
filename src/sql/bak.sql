-- 创建商品表
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50),
    title VARCHAR(100),
    price DECIMAL(10,2),
    score DECIMAL(2,1),
    vote INT,
    url VARCHAR(255),
    pid VARCHAR(50)
);

-- 1. 查询所有数据 =>  * 是通配符，代表所有字段
SELECT * FROM products;

-- 2. 查询特定字段 => 字段之间用逗号分隔
SELECT id, brand, title, price
FROM products;

-- 3. 查询指定字段并起别名 => 查询结果将直接使用别名，而非原始字段名
--    + 适用于多表查询，表字段重名情况
--    + 原则上给字段，表和数据库加上反引号是一个好习惯，不过一般过于繁琐，只在值不合法时才进行添加
--      + 值中间有空格
--      + 值和关键字同名
SELECT id AS phone_id, brand AS phone_brand, title, price
FROM products;

-- 4、as关键字可以省略，但不推荐，语义化变差了
SELECT id AS phone_id, brand AS phone_brand, title, price
FROM products;