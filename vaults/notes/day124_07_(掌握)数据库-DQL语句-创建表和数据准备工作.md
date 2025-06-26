# 608_day124_建表-DDL语句--DQL-聚合函数-多表查询-07_(掌握)数据库-DQL语句-创建表和数据准备工作_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=28

## AI好记
https://aihaoji.com/zh/dashboard/tasks/view/article/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/01c8c726-678c-4125-a47c-76df7c177152.webp)

*00:00:00 - 00:00:30*

**教学内容**：
我们之前讲了 DML 语句，包括插入（`INSERT`）、删除（`DELETE`）和修改（`UPDATE`）数据，这三招是操作数据库数据的核心动作。现在我们要开始学 DQL 语句，全名叫“Data Query Language”，也就是数据查询语言。它的核心关键字是 `SELECT`，用来从数据库里挑出我们想要的数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/b93e4f8e-0757-4713-89a6-ee090b4afc42.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/03f411aa-efca-4023-b720-cc0810852077.webp)

*00:00:30 - 00:01:00*

**教学内容**：
`SELECT` 的意思就是“选择”。想象一下，数据库里有一张表，里面塞了一堆数据，你想从中挑出特定的一些数据，比如某条记录或某些符合条件的数据。`SELECT` 就是干这个的，能从一张或多张表里把数据捞出来。单表查询最简单，多表查询（涉及多张表关联）我们后面再讲。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/cb04243d-7bba-4a0f-b54c-98c4bd7cdc7d.webp)

*00:01:03 - 00:01:28*

**教学内容**：
DQL 的查询格式有点复杂，我们先来看看它的基本结构。核心是 `SELECT` 关键字，后面跟你要查的字段，比如 `id`、`name`、`price` 这些。`FROM` 指明从哪张表查数据。后面可以加条件、排序、分组等，具体格式我们接下来会细讲。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/72a932b8-7e0f-4cf9-8e82-ec80cac51f6b.webp)

*00:01:28 - 00:02:54*

**教学内容**：
查询的基本格式是：先写 `SELECT`，后面列出要查的字段，比如 `id, title, description, price`。然后用 `FROM` 指定表名，比如 `FROM products`。默认情况下，这会把表里所有数据都查出来。如果想查特定数据，可以加 `WHERE` 条件，比如 `WHERE price > 1000` 查价格大于 1000 的手机。还可以用 `ORDER BY` 排序，比如按价格排序（`ORDER BY price`）。这些字段和条件可以灵活组合，具体看你想查啥。

**代码示例**：

```sql
-- 查询价格大于 1000 的手机数据，按价格排序
SELECT id, title, description, price
FROM products
WHERE price > 1000
ORDER BY price;
```

---

*00:02:54 - 00:04:24*

**教学内容**：
除了 `WHERE` 和 `ORDER BY`，还可以用 `LIMIT` 限制返回的数据条数，比如 `LIMIT 2` 只拿两条数据。`OFFSET` 用来跳过前几条，比如 `OFFSET 0` 从第一条开始，`OFFSET 2` 跳过前两条。实际开发中，这些参数通常是前端传来的，比如分页显示时，第一次查 0-2 条，第二次 2-4 条。`GROUP BY` 和 `HAVING` 是用来分组和对分组数据加条件的，涉及聚合函数（比如求和、平均），我们后面再讲。现在重点是理解 `SELECT`、`FROM`、`WHERE`、`ORDER BY`、`LIMIT` 和 `OFFSET` 的用法。这是 MySQL 官方文档里的标准格式，中括号里的部分是可选的。

**代码示例**：

```sql
-- 查询价格大于 1000 的手机数据，限制返回 2 条，跳过前 0 条，按价格排序
SELECT id, title, description, price
FROM products
WHERE price > 1000
ORDER BY price
LIMIT 2 OFFSET 0;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/dd1d6d99-5d85-4344-88aa-61012aaa5d20.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/b77e8803-5428-4631-a632-18acd470a25d.webp)

*00:04:24 - 00:04:53*

**教学内容**：
上面讲的是 DQL 的基本格式，但用之前的表（只有几条数据）来演示查询效果不好，所以我们准备一张新表，塞点更多的数据，方便后面演示查询效果，比如分页、排序等。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/c51897c3-d5e3-4e72-b81d-2aac8d287338.webp)

*00:04:53 - 00:05:23*

**教学内容**：
要演示查询，得先建一张新表。这张表还是存商品信息，包含字段：`id`（主键，自动递增）、`brand`（品牌，比如华为、苹果）、`title`（商品名）、`price`（价格）、`score`（评分）、`vote`（投票数）和 `img_url`（图片地址）。这些字段为后面的查询做准备。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/4f7900f1-37f5-4c21-8088-1fee94473321.webp)

*00:05:23 - 00:06:29*

**教学内容**：
新表的字段设计：`id` 是自动递增的，`brand` 存品牌名（比如华为、苹果、小米），`title` 是商品标题，`price` 是价格，`score` 是评分（用 `DECIMAL(2,1)`，表示两位数字，小数点后一位，比如 8.9），`vote` 是投票数，`img_url` 是图片地址。还有个 `pid`（产品 ID），是从数据源里带的，类似额外的标识，暂时不重要，但先加进来。

**代码示例**：

```sql
-- 创建商品表
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(50),
    title VARCHAR(100),
    price DECIMAL(10,2),
    score DECIMAL(2,1),
    vote INT,
    img_url VARCHAR(255),
    pid VARCHAR(50)
);
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/002d67ba-e7a2-47f5-9aa4-721a3f2558f0.webp)

*00:06:29 - 00:06:38*

**教学内容**：
接下来要建这张 `products` 表，为演示查询做准备工作，后面会往表里加数据来展示查询效果。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/b8e500fd-642d-4999-bbba-7d66e7b7717a.webp)

*00:06:39 - 00:06:46*

**教学内容**：
为了准备数据，我们先把之前的表和数据清掉，重新建一张新表，开始新的查询演示。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/ab0c7010-a973-4abd-9ee7-5c5d63ba9595.webp)

*00:06:46 - 00:07:14*

**教学内容**：
我们新建一个查询文件，命名为 DQL 数据演练，先创建新表。表结构直接复制过来，省得重写。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/534fa65e-0719-4a1d-8ee7-63bfeaa95d58.webp)

*00:07:14 - 00:07:19*

**教学内容**：
复制表结构到新文件，直接建 `products` 表。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/00b88850-7354-48a1-bbee-5496510b433e.webp)

*00:07:20 - 00:07:27*

**教学内容**：
新表叫 `products`，字段和之前一样，包含 `id`、`brand`、`title` 等。现在表是空的，接下来要加数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/a1ac2f2d-1a71-4817-819d-0611547bff1e.webp)

*00:07:27 - 00:07:34*

**教学内容**：
表建好了，但没数据。我们用一段程序来插入数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/254071d8-1b77-4930-93ce-7349f420173d.webp)

*00:07:35 - 00:07:39*

**教学内容**：
插入数据的程序先不用深究，后面会细讲。现在知道它能帮我们往表里加数据就行。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/f89103b8-a786-4041-807a-64a1e33e15d9.webp)

*00:07:39 - 00:07:43*

**教学内容**：
我们会用这段程序往 `products` 表里加数据，模拟真实场景。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/2bfccdb6-7b76-4fcf-ad6e-06899be65bc0.webp)

*00:07:43 - 00:07:48*

**教学内容**：
程序会动态插入数据，往 `products` 表里塞很多记录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/bdbf9b8d-8e5b-441d-869b-5d6fd841dc4d.webp)

*00:07:49 - 00:09:18*

**教学内容**：
这段程序用 JavaScript 和 `mysql2` 库操作 MySQL 数据库。先安装 `mysql2` 库，然后用 `createConnection` 连数据库，填上用户名、密码和数据库名。连接后，程序从一个 JSON 文件里读手机数据，循环执行 `INSERT` 语句把数据塞进 `products` 表。有了足够多数据（比如几十条），后面演示 `LIMIT`、`OFFSET` 等查询效果会更明显。程序细节后面讲，先跑起来看看效果。

**代码示例**：

```javascript
// 简单示例：连接数据库并插入数据
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'coderwhy123.',
    database: 'db_music'
});

const phones = [...]; // JSON 数据
phones.forEach(phone => {
    const query = 'INSERT INTO products (brand, title, price, score, vote, img_url, pid) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [phone.brand, phone.title, phone.price, phone.score, phone.vote, phone.img_url, phone.pid]);
});
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/35c7b29a-8b8d-4cd6-8ae8-6375f69f07c9.webp)

*00:09:18 - 00:09:46*

**教学内容**：
程序写好后，存到 `index.js`，准备在 VS Code 里跑，往 `products` 表加数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/f3a4f2c2-c71d-4201-b120-458b7be9a6d6.webp)

*00:09:46 - 00:10:09*

**教学内容**：
跑程序前，要装 `mysql2` 库。进入项目文件夹（比如 `09`），运行 `npm init` 初始化项目，再跑 `npm install mysql2` 装库。注意文件名别用中文，免得出错。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/2c006362-47f5-49ab-b53e-ff42a04213e9.webp)

*00:10:10 - 00:10:56*

**教学内容**：
装 `mysql2` 时，连接数据库用 `localhost:3306`（MySQL 默认端口，原文说 3300 可能是笔误），用户名 `root`，密码 `coderwhy123.`，数据库名 `db_music`。如果 `npm install` 失败，可以试 `yarn add mysql2`。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/8ef5379b-f85f-4a89-ab8c-7c4436138ba5.webp)

*00:10:56 - 00:11:05*

**教学内容**：
程序用一个 JSON 文件，里面有很多手机数据，比如华为的 `pid`（产品 ID，数据源自带的唯一标识）。这些数据会批量插入表里。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/40410119-2f7a-4c00-a10f-d87b12f84ad0.webp)

*00:11:05 - 00:11:07*

**教学内容**：
JSON 数据包含 `pid` 等字段，`pid` 是数据源的产品 ID，类似额外的标识。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/f0e22413-1997-49ee-b1e6-081aa876bae0.webp)

*00:11:07 - 00:11:23*

**教学内容**：
`pid` 是从爬取的数据里带的，类似产品唯一 ID。程序跑之前得确保 `mysql2` 装好。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/335e6fce-788f-40e4-85b7-4245a1b5eeb0.webp)

*00:11:23 - 00:11:27*

**教学内容**：
如果 `mysql2` 没装好，就得等安装完成。程序跑完后，JSON 里的数据会全插进表里。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/65dc66a3-19d5-48ed-867c-2f52ce398455.webp)

*00:11:27 - 00:11:44*

**教学内容**：
装好 `mysql2` 后，跑 `node index.js`，JSON 里的数据会一条条插进 `products` 表。有了几十条数据，后面查起来效果更明显，不是只有两三条那么单薄。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/343afc35-ac54-44e5-aff6-1a06bacf1d0f.webp)

*00:11:44 - 00:12:01*

**教学内容**：
多条数据能更好展示查询效果，比如分页、排序等。等 `mysql2` 装好后，跑程序，后面再演示具体查询语句。这部分先存视频，休息一下。

---