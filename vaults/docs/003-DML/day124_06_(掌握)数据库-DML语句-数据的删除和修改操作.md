# 607_day124_建表-DDL语句--DQL-聚合函数-多表查询-06_(掌握)数据库-DML语句-数据的删除和修改操作_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=27

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/b770a9a4-12b1-72a8-40a1-635d92285eb8

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/79d0fc96-33e5-45fa-b4c4-3f58ef36293e.webp)

*00:00:01 - 00:00:31*

### 教学内容

**大白话讲解**：
之前我们讲了DML（数据操作语言）的插入操作，用`INSERT INTO`往表里加数据。现在接着讲DML的另外两个操作：删除数据和修改数据。先讲删除。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/0919964f-bfd8-4cb2-a99d-e60942cdd069.webp)

*00:00:33 - 00:01:02*

### 教学内容

**大白话讲解**：
删除数据用`DELETE FROM`语句，后面跟表名，比如`DELETE FROM t_products`。但直接运行会把表里所有数据清空，非常危险！所以要小心使用。

### 代码示例

```sql
DELETE FROM t_products;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/2b1cd27f-95c0-4a79-adee-1c0f41df11c3.webp)

*00:01:02 - 00:01:26*

### 教学内容

**大白话讲解**：
直接用`DELETE FROM t_products`会删掉所有数据，执行前要确认有没有备份，不然数据全没了，可能会导致严重后果。所以这种语句要慎用！

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/987b7bd7-ae0a-447a-a514-96bd90fa5245.webp)

*00:01:27 - 00:01:49*

### 教学内容

**大白话讲解**：
删数据时通常只删特定数据，而不是全删。可以用条件指定要删的记录，比如根据`id`删除某条数据。接下来会演示怎么加条件删除。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/46287962-3977-4293-9bb0-ef2a20fd7219.webp)

*00:01:49 - 00:02:19*

### 教学内容

**大白话讲解**：
如果不小心删了数据，可以重新运行插入语句恢复数据。但要注意，`id`字段如果设了`AUTO_INCREMENT`，删掉后重新插入，`id`会继续递增，不会重用之前的`id`（比如删了`id=1`，新数据可能是`id=4`）。可以手动指定`id`，但通常让它自动递增。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/091048b7-0978-41b7-aa9d-ea7fa0486c57.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/74c36282-145b-4b8b-a062-2696f0751b29.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/9369cf2a-c7cf-4c6e-a990-06a2f26e1104.webp)

*00:02:22 - 00:02:50*

### 教学内容

**大白话讲解**：
`id`自动递增是正常逻辑，不会回退重用旧的`id`。实际开发中，删除数据通常在后台管理系统中操作，比如在商品列表点“删除”，根据`id`删特定记录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/a7d89297-0b1f-4be8-b77a-9d503325f16f.webp)

*00:02:50 - 00:03:20*

### 教学内容

**大白话讲解**：
在后台系统里，点“删除”会拿到记录的`id`，然后后端生成SQL语句删除对应数据。最常见的是根据`id`删，也可以用其他条件，比如`price > 1000`。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/ea7c2b4b-c706-431d-bbde-88424121221f.webp)

*00:03:20 - 00:03:50*

### 教学内容

**大白话讲解**：
删除特定数据用`DELETE FROM t_products WHERE`加条件，比如`WHERE id = 4`删除`id`为4的记录。条件后面会详细讲，现在先知道用`WHERE`指定删除目标。

### 代码示例

```sql
DELETE FROM t_products WHERE id = 4;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/d3576faa-d725-4660-b6fb-00825e444824.webp)

*00:03:54 - 00:04:24*

### 教学内容

**大白话讲解**：
比如要删“iPhone 100”（`id=4`），在后台点删除，前端传`id=4`给后端，后端生成`DELETE FROM t_products WHERE id = 4`。实际开发中，`id`是动态拼接的。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/c2cb0abb-bb53-4a2c-a075-321a1e09e0db.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/8cfe4761-3b04-44f6-a5e4-49fe6faaa431.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/976cb664-1856-4a5a-a6c0-94ac8a669349.webp)

*00:04:26 - 00:04:56*

### 教学内容

**大白话讲解**：
运行`DELETE FROM t_products WHERE id = 4`后，刷新表，`id=4`的数据（iPhone 100）就没了。这是最常见的删除方式。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/e23af059-cdeb-4a57-b916-7c1b187e4757.webp)

*00:04:56 - 00:05:26*

### 教学内容

**大白话讲解**：
现在讲修改数据，用`UPDATE`语句。格式是`UPDATE 表名 SET 字段=新值`。比如改华为手机（`id=6`）的价格为8888，直接写`UPDATE t_products SET price = 8888`。

### 代码示例

```sql
UPDATE t_products SET price = 8888;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/37bdb47a-cb3f-45d6-bfd3-de42b8cf8aee.webp)

*00:05:29 - 00:05:59*

### 教学内容

**大白话讲解**：
`UPDATE t_products SET price = 8888`会把所有记录的价格改成8888，风险很高！所以也要加条件，比如`WHERE id = 6`，只改特定记录。字段名不是关键字时，反引号可加可不加。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/e46298c5-0c9b-4cd1-a5fd-081c1706f743.webp)

*00:05:59 - 00:06:29*

### 教学内容

**大白话讲解**：
正确的修改方式是`UPDATE t_products SET price = 8888 WHERE id = 6`，只改`id=6`的记录。`WHERE`条件后面会详细讲，现在知道用来指定修改目标就行。

### 代码示例

```sql
UPDATE t_products SET price = 8888 WHERE id = 6;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/2fcd75b0-3220-4131-a0e9-82a23fc598b0.webp)

*00:06:29 - 00:06:56*

### 教学内容

**大白话讲解**：
运行`UPDATE t_products SET price = 8888 WHERE id = 6`后，`id=6`的记录价格改为8888。`id`通常从前端传过来，动态拼接SQL。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/44ecd250-c90d-4b71-95d5-16b7911ce6be.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/ce2b8780-264a-445b-b918-09c9df51afbf.webp)

*00:06:57 - 00:07:25*

### 教学内容

**大白话讲解**：
运行后刷新，`id=6`的价格变成8888。还可以一次改多个字段，比如同时改`price`和`title`。

### 代码示例

```sql
UPDATE t_products SET price = 8888, title = '华为至尊版' WHERE id = 6;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/3cdb348a-7252-49bc-a1bd-8aa566f7fb92.webp)

*00:07:25 - 00:07:55*

### 教学内容

**大白话讲解**：
用`SET price = 8888, title = '华为至尊版'`可以一次改多个字段，`WHERE id = 6`确保只改这条记录。另一种写法是用`SET (字段列表) = (值列表)`，但现在用`SET 字段=值`更常见，拼接也方便。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/fdc225e8-24ce-49ed-b211-5a367ad2a4eb.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/b82eee8a-2d79-47a5-aa10-553b003f5b89.webp)

*00:07:56 - 00:08:26*

### 教学内容

**大白话讲解 **`：
运行后，`id=6`的`title`变成“华为至尊版”，`price`变成8888。这就是DML的修改操作。插入、删除、修改都讲完了。如果想记录修改时间，可以加个字段。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/a36afc60-75d4-4aba-baea-7e0b03ae27be.webp)

*00:08:26 - 00:08:56*

### 教学内容

**大白话讲解**：
可以用`ALTER TABLE`加个`update_time`字段，记录数据修改时间。用`TIMESTAMP`类型，设置默认值和自动更新。

### 代码示例

```sql
ALTER TABLE t_products ADD update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/9b1baa09-b4f3-44ba-9251-12214738b777.webp)

*00:08:56 - 00:09:25*

### 教学内容

**大白话讲解**：
`update_time`用`TIMESTAMP`类型，`DEFAULT CURRENT_TIMESTAMP`表示插入时自动用当前时间，`ON UPDATE CURRENT_TIMESTAMP`表示修改记录时自动更新为最新时间。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/eab29193-8d87-41e1-bf0f-c45fa148a87d.webp)

*00:09:26 - 00:10:19*

### 教学内容

**大白话讲解**：
加`update_time`字段的语句是`ALTER TABLE t_products ADD update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`。运行后，表里会多这个字段。

### 代码示例

```sql
ALTER TABLE t_products ADD update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/7018596d-db49-419f-a6d2-568a0344123e.webp)

*00:10:19 - 00:10:49*

### 教学内容

**大白话讲解**：
运行后，`t_products`表多了`update_time`字段。插入新数据时，`update_time`会自动记录当前时间；修改数据时，它会更新为最新时间。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/c44e219d-4087-4edc-baba-27b8b98e48e7.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/01dfefeb-e83b-4278-ad9e-cbf5f51c4fd3.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/11665d08-4680-420b-bae7-cbfd802352f0.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/7815f265-2658-49cc-a66b-9308f3743c07.webp)

*00:10:50 - 00:11:20*

### 教学内容

**大白话讲解**：
插入一条数据（比如重新加“iPhone 100”），`update_time`会自动填当前时间。刷新表后，能看到新数据和时间戳。

### 代码示例

```sql
INSERT INTO t_products (title, description, price, publish_time)
VALUES ('iPhone 100', 'iPhone 100, only 998', 998, '2022-09-10');
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/da2ce14c-c16c-4578-95e1-f9452a906ba7.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/3e5d1f5a-7808-494a-9267-9fef064d5008.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/a58ee8e6-9280-43e5-95fe-a361ccd6b0e0.webp)

*00:11:20 - 00:11:49*

### 教学内容

**大白话讲解**：
修改数据，比如把`id=7`（iPhone 100）的价格改成12998，运行后`update_time`会自动更新为当前时间（比如51分33秒）。

### 代码示例

```sql
UPDATE t_products SET price = 12998 WHERE id = 7;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/60c9f9e7-b214-47c0-b29f-1f91f42d2779.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/0544b778-f51a-405a-94e8-537d13234a55.webp)

*00:11:49 - 00:12:19*

### 教学内容

**大白话讲解**：
`update_time`字段能记录每次修改的时间，前端可以展示这条数据最后啥时候改过。很实用的功能。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/35237446-eb89-4782-88cd-809665f6a23e.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/b770a9a4-12b1-72a8-40a1-635d92285eb8/a6e0ab50-86f8-43c6-8018-b16eabe81e63.webp)

*00:12:19 - 00:12:39*

### 教学内容

**大白话讲解**：
`update_time`字段在实际项目中很常见，能跟踪数据修改时间。这节课讲完了DML的插入、删除、修改操作。

---