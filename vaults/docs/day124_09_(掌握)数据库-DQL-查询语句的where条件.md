# 610_day124_建表-DDL语句--DQL-聚合函数-多表查询-09_(掌握)数据库-DQL-查询语句的where条件_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=30

## AI 好记

https://aihaoji.com/zh/dashboard/tasks/view/article/722ada52-7f03-dae5-906b-d2764df0b3e2

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/0e85e6a2-7bf3-4128-be1a-77cf4db04f73.webp)

*00:00:00 - 00:00:28*

### 教学内容

**大白话讲解**：
之前讲了DQL的基本查询，能查出表里所有数据。但实际开发中，不会把所有数据都返回给用户，通常会根据条件筛选出想要的数据。这节课讲`WHERE`子句，用来加条件限制查询结果。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/a80ab9b8-d299-4c28-89f9-27389956972e.webp)

*00:00:29 - 00:00:58*

### 教学内容

**大白话讲解**：
开发中，我们想根据条件挑出特定数据，这叫条件查询。用`WHERE`关键字，后面跟条件，比如用比较运算符来筛选数据。先讲比较运算符怎么用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/8a932bc0-7d98-4af1-bfb6-812d8aa42b99.webp)

*00:00:58 - 00:01:25*

### 教学内容

**大白话讲解**：
比较运算符就是用来比较字段值的，比如`<`、`>`、`=`等。可以用`WHERE`加条件筛选数据，比如查价格小于1000的手机，写成`WHERE price < 1000`，这样就能把符合条件的记录挑出来。

### 代码示例

```sql
SELECT * FROM products WHERE price < 1000;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/2183e271-0219-4124-b057-1b9d8905e32a.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/ee900309-569a-43b8-b4ec-a53872bfa7c1.webp)

*00:01:25 - 00:01:41*

### 教学内容

**大白话讲解**：
`WHERE`后面跟字段名和条件，比如`price < 1000`，就是从`products`表里挑出价格小于1000的记录。条件可以根据需求设置，比如价格、品牌等。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/1214ae3b-3b9c-4b84-96c2-17fac7a5e6c5.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/0a35a250-20a2-4b7d-b969-7b3e98482775.webp)

*00:01:41 - 00:02:11*

### 教学内容

**大白话讲解**：
条件通常从前端传过来，后端拼接成SQL语句。可以用多种比较运算符，比如`>`、`>=`、`=`、`!=`等，也可以查特定品牌。接下来演示几种条件查询。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/533989bc-c1cc-4a2e-a5c2-e81126dae6d3.webp)

*00:02:11 - 00:02:40*

### 教学内容

**大白话讲解**：
用比较运算符做条件查询，比如查价格小于1000的手机，写成`WHERE price < 1000`。接下来演示具体例子。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/852c6117-7682-48b0-b37c-5c5639d3a6ff.webp)

*00:02:43 - 00:03:12*

### 教学内容

**大白话讲解**：
查价格小于1000的手机，SQL语句是`SELECT * FROM products WHERE price < 1000`。运行后，结果只显示价格小于1000的手机，逻辑简单直观。

### 代码示例

```sql
SELECT * FROM products WHERE price < 1000;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/bbb710c2-44d2-4b19-933f-0bccc7fa69e0.webp)

*00:03:12 - 00:03:53*

### 教学内容

**大白话讲解**：
再试试查价格大于等于3000的手机，写成`WHERE price >= 3000`。运行后，能看到所有价格大于等于3000的手机，数量可能不少，说明手机价格普遍较高。

### 代码示例

```sql
SELECT * FROM products WHERE price >= 3000;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/d616c756-f58b-49f3-bb49-cb7f940d3c60.webp)

*00:03:53 - 00:04:12*

### 教学内容

**大白话讲解**：
运行后，价格大于等于3000的手机都查出来了。还可以用`=`查精确值，比如查某个特定价格，或者用`!=`查不等于某值的记录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/b2cbae74-5b00-47df-b668-07c0bfed774f.webp)

*00:04:47 - 00:05:12*

### 教学内容

**大白话讲解**：
查特定品牌的手机，比如华为，用`WHERE brand = '华为'`，就能把所有华为手机挑出来。`=`在查字符串时用得比较多。

### 代码示例

```sql
SELECT * FROM products WHERE brand = '华为';
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/f34c9c90-3300-4b4c-bb8b-9ebb9f947c51.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/b48dc094-1b35-4586-951c-8a4934cd2c80.webp)

*00:05:12 - 00:05:37*

### 教学内容

**大白话讲解**：
查不等于某个值的记录，比如查非苹果手机，用`WHERE brand != '苹果'`，这样所有非苹果品牌的手机都会被查出来。

### 代码示例

```sql
SELECT * FROM products WHERE brand != '苹果';
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/79f83219-61df-4d85-b63d-943738e76a9d.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/a36562a7-4acc-4de7-a6ff-4c8852cdd49a.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/0360e027-5a5d-4797-9d2a-623e6af10d7a.webp)

*00:05:43 - 00:06:13*

### 教学内容

**大白话讲解**：
用`!=`查非苹果手机，结果里没有苹果品牌。比较运算符跟JavaScript里的很像，只是写在`WHERE`后面。接下来讲逻辑运算符，用来组合多个条件。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/284c59b5-8a84-4745-a2aa-6b22935755a9.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/f421c2a7-b637-49a2-9647-1f53910b9280.webp)

*00:06:13 - 00:06:43*

### 教学内容

**大白话讲解**：
逻辑运算符用来把多个条件组合起来，比如`AND`（与）、`OR`（或），跟JavaScript里的逻辑运算符类似。比如查既是华为品牌又价格小于2000的手机，需要两个条件都满足。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/30a0c238-44f0-4ece-ac2c-0facf5f2daae.webp)

*00:06:46 - 00:07:15*

### 教学内容

**大白话讲解**：
逻辑运算符可以组合条件，比如查华为且价格小于2000的手机。接下来演示这种查询。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/4763c223-acde-41bc-86ac-fd698333cf17.webp)

*00:07:15 - 00:07:45*

### 教学内容

**大白话讲解**：
用逻辑运算符查华为且价格小于2000的手机，需要两个条件：品牌是华为，价格小于2000。用`AND`连接这两个条件。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/569c0db1-049e-40b6-975e-23ce4edfe715.webp)

*00:07:45 - 00:08:41*

### 教学内容

**大白话讲解**：
查华为且价格小于2000的手机，可以用`AND`关键字或`&&`符号，写成`WHERE brand = '华为' AND price < 2000`或`WHERE brand = '华为' && price < 2000`，效果一样。运行后，结果是华为品牌且价格小于2000的手机。

### 代码示例

```sql
SELECT * FROM products WHERE brand = '华为' AND price < 2000;
-- 或者
SELECT * FROM products WHERE brand = '华为' && price < 2000;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/529b379a-6379-41bd-9d26-943a09cdd555.webp)

*00:08:41 - 00:09:36*

### 教学内容

**大白话讲解**：
用`AND`或`&&`结果相同，都是查满足两个条件的记录。接下来讲`OR`逻辑运算符，比如查华为手机或价格大于5000的手机，只要满足一个条件就行。

### 代码示例

```sql
SELECT * FROM products WHERE brand = '华为' OR price > 5000;
-- 或者
SELECT * FROM products WHERE brand = '华为' || price > 5000;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/1fec0ad8-1a9f-4eaf-b2d9-43f7df9ee5b8.webp)

*00:09:36 - 00:10:07*

### 教学内容

**大白话讲解**：
用`OR`或`||`查华为手机或价格大于5000的手机，结果包括所有华为手机（不管价格）和价格大于5000的非华为手机。两种写法效果一样。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/35b4e253-3bdc-4c80-b5a5-c91d8795a041.webp)

*00:10:07 - 00:10:33*

### 教学内容

**大白话讲解**：
接下来讲查价格在某个区间的记录，比如1000到2000之间的手机，可以用`AND`组合条件。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/d26d9d16-b941-4277-b62a-25cd3cf433c6.webp)

*00:10:34 - 00:11:31*

### 教学内容

**大白话讲解**：
查价格在1000到2000之间的手机，可以写`WHERE price >= 1000 AND price <= 2000`。运行后，结果是价格在1000到2000（含边界）的手机。实际数据可能没有正好1000或2000的，因为手机价格常设为1998、1499等。

### 代码示例

```sql
SELECT * FROM products WHERE price >= 1000 AND price <= 2000;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/e6cd6891-04dd-4b45-9a15-e5c3e080ced3.webp)

*00:11:31 - 00:13:31*

### 教学内容

**大白话讲解**：
之前写错了符号，应该是`>=`和`<=`。除了用`AND`查价格区间，还可以用`BETWEEN`关键字，写成`WHERE price BETWEEN 1000 AND 2000`，效果一样，包含1000和2000。`BETWEEN`是更简洁的写法，常用于区间查询。

### 代码示例

```sql
SELECT * FROM products WHERE price BETWEEN 1000 AND 2000;
```

---

*00:13:32 - 00:13:58*

### 教学内容

**大白话讲解**：
查多个值中的一个，比如查品牌是小米或华为的手机，可以用`OR`组合条件。

### 代码示例

```sql
SELECT * FROM products WHERE brand = '小米' OR brand = '华为';
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/03d7678a-7123-4fd4-a486-7ebec330be13.webp)

*00:13:58 - 00:14:51*

### 教学内容

**大白话讲解**：
用`OR`查小米或华为的手机，写成`WHERE brand = '小米' OR brand = '华为'`，结果包含所有小米和华为手机。还可以用`IN`关键字，写成`WHERE brand IN ('小米', '华为')`，效果相同，`IN`更简洁，适合列举多个值。

### 代码示例

```sql
SELECT * FROM products WHERE brand IN ('小米', '华为');
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/65a2df98-2a24-4144-8a60-22d2320528d1.webp)

*00:14:51 - 00:15:10*

### 教学内容

**大白话讲解**：
`IN`用来查字段值在多个选项中的记录，比如品牌是小米或华为。掌握一种写法（`OR`或`IN`）就够了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/8255c249-662d-4602-bd93-3f1d78f2b7f7.webp)

*00:15:11 - 00:15:28*

### 教学内容

**大白话讲解**：
接下来讲模糊查询，适合查不精确的条件，比如标题包含某个字符的情况。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/e617c87a-573f-4f36-9642-5017d48ce22f.webp)

*00:15:29 - 00:17:00*

### 教学内容

**大白话讲解**：
模糊查询用`LIKE`关键字，常用于搜索，比如查用户名包含某个字母。`LIKE`结合两个符号：`%`（百分号）匹配任意数量的任意字符；`_`（下划线）匹配单个任意字符。模糊查询在开发中很常见，比如搜索框输入部分内容就能匹配相关记录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/6d9a43cf-58f7-4f1d-b464-667ff31f2fcc.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/93e3d534-ce13-4d17-8577-f847d14d51f9.webp)

*00:17:00 - 00:17:30*

### 教学内容

**大白话讲解**：
模糊查询例子：查标题以“V”开头的手机，比如Vivo手机。可以用`WHERE title LIKE 'V%'`，`V`表示开头是V，`%`表示后面任意字符。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/69cd7350-790f-4e4c-b743-3b22a9c636d6.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/6791e3c1-36af-4776-9eed-d2506750893d.webp)

*00:17:30 - 00:18:00*

### 教学内容

**大白话讲解**：
查标题以“V”开头的手机，写`WHERE title LIKE 'V%'`，`%`表示后面可以是任意字符，前面没有`%`或`_`表示必须以V开头。运行后，结果是所有以V开头的手机，比如Vivo。

### 代码示例

```sql
SELECT * FROM products WHERE title LIKE 'V%';
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/684a4414-181a-407f-80f4-ee4b770911a9.webp)

*00:18:03 - 00:19:02*

### 教学内容

**大白话讲解**：
再试试查标题包含“V”的手机，用`WHERE title LIKE '%V%'`，前后都加`%`，表示V前面和后面都可以有任意字符。运行后，所有标题包含V的手机（比如Vivo、Nova）都会查出来。

### 代码示例

```sql
SELECT * FROM products WHERE title LIKE '%V%';
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/7322c83d-99ec-47fd-93ba-ece6d12ceaca.webp)

*00:19:06 - 00:19:41*

### 教学内容

**大白话讲解**：
标题包含“V”的查询，`%V%`表示V在标题任意位置都行，常用于搜索框，比如用户输入一个字母，查所有相关记录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/97e5bb23-0b90-4360-92cd-8029263589d5.webp)

*00:19:41 - 00:20:13*

### 教学内容

**大白话讲解**：
用`LIKE '%V%'`查标题包含V的记录，前后用`%`表示不限制V的位置。这种方式常用于用户名或商品搜索，前端传部分内容，后端拼接SQL执行查询。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/aa0477de-0259-46c8-8cfd-6abe115adba1.webp)

*00:20:13 - 00:20:29*

### 教学内容

**大白话讲解**：
比如前端传“V”，后端拼接成`LIKE '%V%'`，查出标题含V的记录。这种模糊查询跟搜索框的逻辑一样。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/95e91302-d830-4778-9c75-7c87a619306b.webp)

*00:20:29 - 00:20:40*

### 教学内容

**大白话讲解**：
运行`LIKE '%V%'`，结果包含所有标题有V的手机，比如Vivo、Nova等。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/f83aae43-de5d-4e65-bd3b-4a8d69124965.webp)

*00:20:40 - 00:20:45*

### 教学内容

**大白话讲解**：
所有标题含V的记录都能查出来，模糊查询很灵活。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/5e2b3104-ada8-4c8f-a866-651850eed30c.webp)

*00:20:45 - 00:21:10*

### 教学内容

**大白话讲解**：
除了`%`，还可以用`_`（下划线）匹配单个字符。接下来用下划线举例。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/6c365ec5-0741-4df9-b9f2-e7b491d9f2d8.webp)

*00:21:11 - 00:21:32*

### 教学内容

**大白话讲解**：
用下划线查标题第三个字符是“M”的手机，比如锤子手机的“Smartisan”。下划线`_`表示单个任意字符。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/291b0c0b-7db1-4e43-bb8f-16d01b1e83d7.webp)

*00:21:32 - 00:21:35*

### 教学内容

**大白话讲解**：
要求标题第三个字符是“M”，前面正好有两个任意字符。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/74101993-0ee6-4699-81ba-a62cc18c315d.webp)

*00:21:35 - 00:22:07*

### 教学内容

**大白话讲解**：
查标题第三个字符是“M”的手机，用`WHERE title LIKE '__M%'`，`__`表示前面两个任意字符，`M`是第三个字符，`%`表示后面任意字符。运行后，结果包括标题第三个字符是M的手机，比如“Smartisan”。

### 代码示例

```sql
SELECT * FROM products WHERE title LIKE '__M%';
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/3157fe56-573c-47e0-bb70-f20cb5f3326b.webp)

*00:22:07 - 00:22:12*

### 教学内容

**大白话讲解**：
运行后，查出标题第三个字符是M的手机，比如“Smartisan”或“小米M”。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/f3405844-2f8b-47ff-80d8-27ed468cc067.webp)

*00:22:12 - 00:22:22*

### 教学内容

**大白话讲解**：
这种模糊查询用`_`精确匹配单个字符，`%`匹配任意字符，开发中很常见。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/722ada52-7f03-dae5-906b-d2764df0b3e2/457794d6-a967-4471-8500-022ad7353473.webp)

*00:22:22 - 00:22:52*

### 教学内容

**大白话讲解**：
模糊查询在开发中用得多，`WHERE`条件的比较运算符、逻辑运算符、模糊查询不仅能用在查询（`SELECT`），也能用在更新（`UPDATE`）和删除（`DELETE`）操作中。

---