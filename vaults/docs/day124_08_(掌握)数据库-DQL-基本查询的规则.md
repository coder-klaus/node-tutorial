# 609_day124_建表-DDL语句--DQL-聚合函数-多表查询-08_(掌握)数据库-DQL-基本查询的规则_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=29

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/63e77225-bf0d-4cf8-9ac8-a93264e3f6a6.webp)

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/77c35527-6f7f-33a7-406c-85d6b69ec154

## 正文内容

*00:00:00 - 00:00:30*

### 教学内容

**大白话讲解**：
我们之前准备讲DQL（数据查询语言），也就是怎么查数据的语句。但在查询前，得先有数据。所以我们建了一张表，往里面塞了很多数据（从网上爬来的），这样方便接下来演示查询操作。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/63a2d0c6-a4c1-48d7-b252-59af1154e956.webp)

*00:00:33 - 00:01:01*

### 教学内容

**大白话讲解**：
用一个Node.js程序连接数据库，通过`mysql2`库把JSON文件里的数据插入表中。程序里用`connection.query`执行插入语句，`?`是占位符，代表动态传入的数据（比如手机信息）。具体细节后面讲，现在先把数据插进去。

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

const data = require('./phones.json');
const statement = 'INSERT INTO products (brand, title, price, score, vote_cnt, url, pid) VALUES (?, ?, ?, ?, ?, ?, ?)';
data.forEach(item => {
    connection.query(statement, [item.brand, item.title, item.price, item.score, item.vote_cnt, item.url, item.pid]);
});
connection.end();
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/dd18fb67-e5e6-46de-9cff-0d28f366af1f.webp)

*00:01:01 - 00:01:19*

### 教学内容

**大白话讲解**：
运行`node index.js`插入数据，可能会报错，比如数据库名不对（比如`db_music`写错了）。得检查数据库名，确保连接正确。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/bac0c1d5-c4e9-4068-951a-d7e514fbd7b4.webp)

*00:01:21 - 00:01:45*

### 教学内容

**大白话讲解**：
如果程序报错，可能是数据库名或配置有问题。重新运行后，可以加代码检查插入是否成功（比如打印结果），不过现在没加这部分逻辑。后面会讲怎么处理查询结果。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/03808273-a5f6-4bf0-a021-4927d7737a2c.webp)

*00:01:45 - 00:02:15*

### 教学内容

**大白话讲解**：
程序运行没报错，说明插入成功。打开数据库查看，`products`表已经有108条数据了，说明数据插好了，可以开始用这些数据演示查询。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/14f79627-a31a-4421-89e1-91f14061599c.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/0cf75063-f03a-4fde-9fe8-b4eba5312cd0.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/020e8f0e-93bd-4d7e-b35d-0004611a5c56.webp)

*00:02:15 - 00:02:44*

### 教学内容

**大白话讲解**：
有了108条数据后，不直接在表里看，而是用DQL语句查询，接下来开始演示基本的查询操作。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/54c1d13b-69ab-45b5-91a5-a4457ba49636.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/5b1a849d-935d-453e-985a-3290eb84b845.webp)

*00:02:44 - 00:03:14*

### 教学内容

**大白话讲解**：
`products`表有108条数据，包含很多字段。如果想查所有数据的所有字段，可以用简单的查询语句。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/b65815f7-d52e-4720-8092-90483643e16e.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/ae6c16b7-7cb7-41b9-b05c-e74faef2e29c.webp)

*00:03:14 - 00:03:44*

### 教学内容

**大白话讲解**：
最简单的查询是用`SELECT * FROM 表名`，`*`是通配符，代表查所有字段。如果不加条件（比如`WHERE`），会把表里所有数据都查出来。

### 代码示例

```sql
SELECT * FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/65b0dde3-c766-4aca-8c35-86240371786b.webp)

*00:03:44 - 00:04:14*

### 教学内容

**大白话讲解**：
运行`SELECT * FROM products`，会返回`products`表的所有数据（108条）和所有字段（`id`、`brand`、`title`等）。确认表名正确（比如`products`），运行后就能看到完整结果。

### 代码示例

```sql
SELECT * FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/dc37d80e-cc20-40ab-b337-9a46a02593b2.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/f4e705a1-a360-46e7-9828-b30abfcfc9b2.webp)

*00:04:14 - 00:04:44*

### 教学内容

**大白话讲解**：
运行后，所有字段和数据都出来了。但实际开发中，可能不需要所有字段，比如只想要`id`、`brand`、`title`、`price`，可以指定查哪些字段。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/78b2d554-e5f5-47ed-9576-22d8d573b795.webp)

*00:04:44 - 00:05:14*

### 教学内容

**大白话讲解**：
如果只想查部分字段，比如`id`、`brand`、`title`、`price`，就在`SELECT`后列出这些字段名，用逗号分隔。这样查询结果只包含指定的字段，但还是返回所有数据（108条）。

### 代码示例

```sql
SELECT id, brand, title, price FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/5e5f8b76-8a58-4354-bcb7-ba45bcffc240.webp)

*00:05:15 - 00:07:09*

### 教学内容

**大白话讲解**：
查询指定字段时，字段名间用逗号分隔，比如`SELECT id, brand, title, price FROM products`。字段名一般不用加引号，除非是关键字（用反引号）。运行后，结果只有这几个字段的所有数据。如果觉得字段名（比如`id`）不够明确，可以给字段起别名，方便区分或让结果更清晰。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/e928366a-7075-448e-b5f4-d0f66b6df564.webp)

*00:07:10 - 00:07:35*

### 教学内容

**大白话讲解**：
给字段起别名用`AS`关键字，比如`SELECT id AS phone_id`把`id`改名叫`phone_id`。别名在多表查询时特别有用，因为不同表可能都有`id`字段，起别名可以区分，比如`phone_id`表示手机ID，`brand_id`表示品牌ID。运行后，结果显示别名，比如`phone_id`、`phone_brand`。

### 代码示例

```sql
SELECT id AS phone_id, brand AS phone_brand, title, price FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/bc6d7db2-73fe-4d32-aa1a-4e98816e398d.webp)

*00:07:37 - 00:08:05*

### 教学内容

**大白话讲解**：
`AS`关键字可以省略，直接写`SELECT id phone_id, brand phone_brand FROM products`，效果一样。别名方便后续处理，比如转成JSON数据时用别名作为键名。基本查询就是这样：查所有字段用`*`，查部分字段列出字段名，可以加别名。

### 代码示例

```sql
SELECT id phone_id, brand phone_brand, title, price FROM products;
```

---