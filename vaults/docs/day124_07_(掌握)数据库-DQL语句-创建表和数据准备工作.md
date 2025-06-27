# 608_day124_建表-DDL语句--DQL-聚合函数-多表查询-07_(掌握)数据库-DQL语句-创建表和数据准备工作_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=28

## AI好记
https://aihaoji.com/zh/dashboard/tasks/view/article/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/01c8c726-678c-4125-a47c-76df7c177152.webp)

*00:00:00 - 00:00:30*

### 教学内容

**大白话讲解**：
我们之前讲了DML语句，包括插入数据（`INSERT`）、删除数据（`DELETE`）和修改数据（`UPDATE`）。现在开始学DQL，也就是数据查询语言，用来从数据库里查数据的。核心关键字是`SELECT`，专门用来挑选你想要的数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/b93e4f8e-0757-4713-89a6-ee090b4afc42.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/03f411aa-efca-4023-b720-cc0810852077.webp)

*00:00:30 - 00:01:00*

### 教学内容

**大白话讲解**：
DQL就是数据查询语言，用`SELECT`从表里挑出你需要的数据。比如你有一张表，里面存了一堆数据，想从中找出特定记录，就用`SELECT`。可以从一张表查，也可以从多张表查（多表查询后面讲）。简单说，`SELECT`就是帮你把想要的数据从表里“捞”出来。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/cb04243d-7bba-4a0f-b54c-98c4bd7cdc7d.webp)

*00:01:03 - 00:01:28*

### 教学内容

**大白话讲解**：
DQL的查询语句格式有点复杂，用`SELECT`指定要查哪些字段，从哪个表里查。接下来会详细讲这个格式，并通过例子展示怎么用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/72a932b8-7e0f-4cf9-8e82-ec80cac51f6b.webp)

*00:01:28 - 00:02:54*

### 教学内容

**大白话讲解**：
DQL查询的基本格式是：先写`SELECT`，后面跟要查的字段，比如`id`、`title`、`description`、`price`；然后用`FROM`指定表名，比如`t_products`；可以用`WHERE`加条件，比如只查价格大于1000的；可以用`ORDER BY`排序，比如按价格排；还可以用`LIMIT`限制返回几条数据，搭配`OFFSET`实现分页（比如跳过几条，拿2条）。`GROUP BY`和`HAVING`是跟聚合查询相关的，后面再讲。现在先掌握简单查询。

### 代码示例

```sql
SELECT id, title, description, price
FROM t_products
WHERE price > 1000
ORDER BY price
LIMIT 2
OFFSET 0;
```

---

*00:02:54 - 00:04:24*

### 教学内容

**大白话讲解**：
`ORDER BY`可以不写，如果不排序就按默认顺序返回。`LIMIT`和`OFFSET`常用于分页，比如`LIMIT 2 OFFSET 0`拿前两条，`OFFSET 2`拿下两条。`GROUP BY`和`HAVING`涉及分组统计，后面讲。这是MySQL官方文档的标准查询格式，中括号表示可选部分，比如`WHERE`、`ORDER BY`等可以根据需要加或不加。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/dd1d6d99-5d85-4344-88aa-61012aaa5d20.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/b77e8803-5428-4631-a632-18acd470a25d.webp)

*00:04:24 - 00:04:53*

### 教学内容

**大白话讲解**：
之前的`t_products`表只有几条数据，用来演示查询效果不明显。所以我们新建一张表，插入更多数据，方便展示查询的效果，比如分页、排序等。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/c51897c3-d5e3-4e72-b81d-2aac8d287338.webp)

*00:04:53 - 00:05:23*

### 教学内容

**大白话讲解**：
新建一张`products`表，专门用来演示查询。表里有这些字段：`id`（主键，自动递增）、`brand`（品牌，比如华为、苹果）、`title`（商品标题）、`price`（价格）、`score`（评分）、`vote_cnt`（投票数）、`url`（图片地址）、`pid`（外部商品ID）。建好表后，准备插入数据。

### 代码示例

```sql
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(20),
    title VARCHAR(50),
    price DOUBLE,
    score DECIMAL(2,1),
    vote_cnt INT,
    url VARCHAR(100),
    pid VARCHAR(20)
);
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/4f7900f1-37f5-4c21-8088-1fee94473321.webp)

*00:05:23 - 00:06:29*

### 教学内容

**大白话讲解**：
`score`字段用`DECIMAL(2,1)`，表示两位数，小数点后保留一位，比如8.9分。`vote_cnt`记录有多少人投票，`url`存商品图片地址，`pid`是外部系统的商品ID（比如从别处爬来的数据）。这些字段设计好后，接下来准备大量数据插入。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/002d67ba-e7a2-47f5-9aa4-721a3f2558f0.webp)

*00:06:29 - 00:06:38*

### 教学内容

**大白话讲解**：
建好`products`表后，用程序插入大量数据，方便后续演示查询语句的效果。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/b8e500fd-642d-4999-bbba-7d66e7b7717a.webp)

*00:06:39 - 00:06:46*

### 教学内容

**大白话讲解**：
先把之前的查询和表关掉，重新开个查询窗口，准备建表和插入数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/ab0c7010-a973-4abd-9ee7-5c5d63ba9595.webp)

*00:06:46 - 00:07:14*

### 教学内容

**大白话讲解**：
新建查询窗口，命名为“DQL查询演练”。先创建`products`表，复制之前设计的表结构代码。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/534fa65e-0719-4a1d-8ee7-63bfeaa95d58.webp)

*00:07:14 - 00:07:19*

### 教学内容

**大白话讲解**：
复制`products`表结构代码，直接用来建表。

### 代码示例

```sql
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(20),
    title VARCHAR(50),
    price DOUBLE,
    score DECIMAL(2,1),
    vote_cnt INT,
    url VARCHAR(100),
    pid VARCHAR(20)
);
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/00b88850-7354-48a1-bbee-5496510b433e.webp)

*00:07:20 - 00:07:27*

### 教学内容

**大白话讲解**：
`products`表建好了，现在是空的，接下来用程序往里加数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/a1ac2f2d-1a71-4817-819d-0611547bff1e.webp)

*00:07:27 - 00:07:34*

### 教学内容

**大白话讲解**：
表建好后，目前没数据。接下来用一段程序插入数据，具体代码逻辑后面再讲。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/254071d8-1b77-4930-93ce-7349f420173d.webp)

*00:07:35 - 00:07:39*

### 教学内容

**大白话讲解**：
会用一段程序插入数据，先看效果，代码细节后面讲。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/f89103b8-a786-4041-807a-64a1e33e15d9.webp)

*00:07:39 - 00:07:43*

### 教学内容

**大白话讲解**：
程序会往`products`表动态插入数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/2bfccdb6-7b76-4fcf-ad6e-06899be65bc0.webp)

*00:07:43 - 00:07:48*

### 教学内容

**大白话讲解**：
用Node.js程序往`products`表批量插入数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/bdbf9b8d-8e5b-441d-869b-5d6fd841dc4d.webp)

*00:07:49 - 00:09:18*

### 教学内容

**大白话讲解**：
程序用`mysql2`库连接MySQL数据库。需要先安装`mysql2`，然后用`createConnection`建立连接，输入用户名、密码、数据库名。从一个JSON文件（比如`phones.json`）读手机数据，生成`INSERT`语句，循环插入到`products`表。这样就能快速填入大量数据，方便演示分页、排序等查询效果。不建议现在手写代码，细节后面讲，先用程序生成数据。

### 代码示例

```javascript
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'coderwhy123.',
    database: 'db_music'
});

const data = require('./phones.json'); // 假设有phones.json文件
const statement = 'INSERT INTO products (brand, title, price, score, vote_cnt, url, pid) VALUES (?, ?, ?, ?, ?, ?, ?)';
data.forEach(item => {
    connection.query(statement, [item.brand, item.title, item.price, item.score, item.vote_cnt, item.url, item.pid]);
});
connection.end();
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/35c7b29a-8b8d-4cd6-8ae8-6375f69f07c9.webp)

*00:09:18 - 00:09:46*

### 教学内容

**大白话讲解**：
把程序代码（`index.js`）放进项目目录，准备运行插入数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/f3a4f2c2-c71d-4201-b120-458b7be9a6d6.webp)

*00:09:46 - 00:10:09*

### 教学内容

**大白话讲解**：
在项目目录（比如`09_mysql_database`）运行`npm init -y`初始化项目，再用`npm install mysql2`安装`mysql2`库。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/2c006362-47f5-49ab-b53e-ff42a04213e9.webp)

*00:10:10 - 00:10:56*

### 教学内容

**大白话讲解**：
连接数据库用地址`localhost:3306`，用户名`root`，密码`coderwhy123.`，数据库名`db_music`。如果`npm install mysql2`失败，试试`yarn add mysql2`。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/8ef5379b-f85f-4a89-ab8c-7c4436138ba5.webp)

*00:10:56 - 00:11:05*

### 教学内容

**大白话讲解**：
数据来自`phones.json`，包含很多手机信息，比如品牌、标题、价格等，用来填充`products`表。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/40410119-2f7a-4c00-a10f-d87b12f84ad0.webp)

*00:11:05 - 00:11:07*

### 教学内容

**大白话讲解**：
JSON里的`pid`是外部数据源的商品ID，直接存到`products`表的`pid`字段。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/f0e22413-1997-49ee-b1e6-081aa876bae0.webp)

*00:11:07 - 00:11:23*

### 教学内容

**大白话讲解**：
`pid`是从外部（比如爬取的数据）来的商品ID。继续尝试安装`mysql2`库。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/335e6fce-788f-40e4-85b7-4245a1b5eeb0.webp)

*00:11:23 - 00:11:27*

### 教学内容

**大白话讲解**：
等`mysql2`库安装完成，准备运行程序插入数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/65dc66a3-19d5-48ed-867c-2f52ce398455.webp)

*00:11:27 - 00:11:44*

### 教学内容

**大白话讲解**：
安装好`mysql2`后，运行`node index.js`，JSON里的数据会一条条插入`products`表，生成大量记录，方便后续查询演示。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/12b91d7c-eade-d2b6-11a0-0ba0e6a6187b/343afc35-ac54-44e5-aff6-1a06bacf1d0f.webp)

*00:11:44 - 00:12:01*

### 教学内容

**大白话讲解**：
用大量数据演示查询（比如分页、排序）比用两三条数据效果好。等程序跑完，`products`表会有很多数据，之后继续讲查询语句。

---