# 609_day124_建表-DDL语句--DQL-聚合函数-多表查询-08_(掌握)数据库-DQL-基本查询的规则_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=29

## AI好记
https://aihaoji.com/zh/dashboard/tasks/view/article/77c35527-6f7f-33a7-406c-85d6b69ec154

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/63e77225-bf0d-4cf8-9ac8-a93264e3f6a6.webp)

*00:00:00 - 00:00:30*

**教学内容**：
我们之前讲了 DQL 语句，也就是数据查询语言，用来从数据库里挑数据。在查询前，我们得先准备一张表，往里面塞很多数据，这样后面查询才方便演示。我从网上爬了108条数据，接下来就用这些数据来练习查询。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/63a2d0c6-a4c1-48d7-b252-59af1154e956.webp)

*00:00:33 - 00:01:01*

**教学内容**：
有了数据后，我用一个 JavaScript 程序连接数据库，通过 `mysql2` 库的 `connection.query` 执行插入语句，把 JSON 里的手机数据塞进表里。程序里用了占位符 `?`（后面会讲具体作用），把每条手机数据循环插入。现在程序已经跑通，数据都准备好了。

**代码示例**：

```javascript
// 连接数据库并插入数据
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

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/dd18fb67-e5e6-46de-9cff-0d28f366af1f.webp)

*00:01:01 - 00:01:19*

**教学内容**：
运行 `node index.js` 时，可能会遇到数据库名错误，比如 `db_music` 写错了。如果报错，说明没找到数据库，得检查名字是否正确。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/bac0c1d5-c4e9-4068-951a-d7e514fbd7b4.webp)

*00:01:21 - 00:01:45*

**教学内容**：
数据库名得是 `music_db`（原文可能误称 `db_music`）。如果报错，会提示数据库不存在。重新跑程序时，可以加代码检查插入结果，确认成功或失败，具体后面讲。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/03808273-a5f6-4bf0-a021-4927d7737a2c.webp)

*00:01:45 - 00:02:15*

**教学内容**：
程序跑完没报错，说明插入成功。打开数据库一看，`products` 表里已经有了 108 条数据。有了这些数据，接下来就可以开始查询练习了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/14f79627-a31a-4421-89e1-91f14061599c.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/0cf75063-f03a-4fde-9fe8-b4eba5312cd0.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/020e8f0e-93bd-4d7e-b35d-0004611a5c56.webp)

*00:02:15 - 00:02:44*

**教学内容**：
有了 108 条数据，我们开始练习 DQL 查询。接下来用 `SELECT` 语句在 `products` 表里查数据，先从基本查询开始。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/54c1d13b-69ab-45b5-91a5-a4457ba49636.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/5b1a849d-935d-453e-985a-3290eb84b845.webp)

*00:02:44 - 00:03:14*

**教学内容**：
如果想查 `products` 表里所有数据的所有字段（共 108 条，包含 `id`、`brand`、`title` 等），可以用 `SELECT *`。这里的 `*` 是通配符，代表所有字段。如果不加 `WHERE` 条件，所有数据都会查出来。

**代码示例**：

```sql
-- 查询 products 表所有数据的所有字段
SELECT *
FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/b65815f7-d52e-4720-8092-90483643e16e.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/ae6c16b7-7cb7-41b9-b05c-e74faef2e29c.webp)

*00:03:14 - 00:03:44*

**教学内容**：
基本查询就是用 `SELECT * FROM products` 查所有字段的所有数据。`*` 代表所有字段，`FROM products` 指定表名。运行后，所有 108 条数据的每个字段（`id`、`brand`、`title` 等）都会显示。

**代码示例**：

```sql
-- 基本查询：查所有字段的所有数据
SELECT *
FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/65b0dde3-c766-4aca-8c35-86240371786b.webp)

*00:03:44 - 00:04:14*

**教学内容**：
执行 `SELECT * FROM products` 后，所有字段和数据都出来了，从第一条到最后一条（108 条）。但实际开发中，我们不一定需要所有字段，可能只想要部分字段，比如 `id`、`brand`、`title`、`price`。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/dc37d80e-cc20-40ab-b337-9a46a02593b2.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/f4e705a1-a360-46e7-9828-b30abfcfc9b2.webp)

*00:04:14 - 00:04:44*

**教学内容**：
如果只查特定字段，比如 `id`、`brand`、`title`、`price`，就在 `SELECT` 后列出这些字段名，用逗号分隔。运行后，只返回这些字段的数据，但还是所有 108 条记录。

**代码示例**：

```sql
-- 查询指定字段：id, brand, title, price
SELECT id, brand, title, price
FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/78b2d554-e5f5-47ed-9576-22d8d573b795.webp)

*00:04:44 - 00:05:14*

**教学内容**：
查指定字段时，写 `SELECT id, brand, title, price FROM products`，字段间用逗号分隔（原文误称“豆号”）。这样只返回指定的字段，数据量更少，更符合实际需求。

**代码示例**：

```sql
-- 查询指定字段的所有数据
SELECT id, brand, title, price
FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/5e5f8b76-8a58-4354-bcb7-ba45bcffc240.webp)

*00:05:15 - 00:07:09*

**教学内容**：
字段名可以加反引号（` `）保护，比如 `` `brand` ``，但通常不用。字段间用逗号分隔。如果字段名不好懂或容易混淆（尤其多表查询时，比如多表都有 `id` 字段），可以用 `AS` 给字段起别名。比如，把 `id` 改成 `phone_id`，`brand` 改成 `phone_brand`，这样结果更清晰。别名在多表查询时特别有用，能区分不同表的同名字段。

**代码示例**：

```sql
-- 查询指定字段并起别名
SELECT id AS phone_id, brand AS phone_brand, title, price
FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/e928366a-7075-448e-b5f4-d0f66b6df564.webp)

*00:07:10 - 00:07:35*

**教学内容**：
用 `AS` 起别名后，查询结果会显示 `phone_id`、`phone_brand` 等别名，而不是 `id`、`brand`。这些别名在前端处理数据时也能直接用，方便转换和展示。

**代码示例**：

```sql
-- 查询字段并用 AS 起别名
SELECT id AS phone_id, brand AS phone_brand, title, price
FROM products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/77c35527-6f7f-33a7-406c-85d6b69ec154/bc6d7db2-73fe-4d32-aa1a-4e98816e398d.webp)

*00:07:37 - 00:08:05*

**教学内容**：
`as`关键字可以省略，效果是一样的。建议写 `AS` 让代码更清晰。这就是 DQL 基本查询的核心：选字段、指定表、起别名。后面会讲更复杂的查询。

**代码示例**：

```sql
-- 查询字段，省略 AS 关键字
SELECT id phone_id, brand phone_brand, title, price
FROM products;
```

---