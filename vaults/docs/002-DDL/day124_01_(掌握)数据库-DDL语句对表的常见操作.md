# 602_day124_建表-DDL语句--DQL-聚合函数-多表查询-01_(掌握)数据库-DDL语句对表的常见操作_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=22

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/bf9e0ac9-b263-a922-473d-01d587e5319a

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/5f605c97-51f8-4cc9-a978-dbf85bc26bd8.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/4212a52f-8727-45d3-9ba4-09a688db89e7.webp)

[00:00:00 - 00:00:29]

我们继续学习数据库相关内容。之前已经讲了MySQL的介绍、下载安装、终端连接，以及用图形化工具（如Navicat）连接数据库并操作。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/0787422e-6991-423a-90fc-dea5a7768358.webp)

[00:00:29 - 00:01:24]

数据库是一个软件，用特定格式存储数据。你可以在电脑上安装数据库软件，创建数据库和表，插入数据，然后在需要时取出数据。比如，用户注册时，把账号信息存到数据库；登录时，查询数据库确认账号存在就允许登录。操作数据库需要用SQL语句（结构化查询语言），通过SQL语句与数据库沟通，让它完成各种操作。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/774f8f95-d054-411d-b805-f842f0089d65.webp)

[00:01:25 - 00:01:37]

SQL语句种类很多，分成四类：DDL（数据定义语言）、DML（数据操作语言）、DQL（数据查询语言）、DCL（数据控制语言）。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/6691fed1-7d1e-4f88-b94f-451f5c9bbd2e.webp)

[00:01:37 - 00:02:05]

我们现在学的是DDL语句，之前已经演示了DDL对数据库的操作，比如创建、删除数据库等。这些命令不用硬背，练习一遍就行。忘了可以查笔记，关键是理解和实践。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/aaa84fac-279d-4741-b50e-1e689c85116c.webp)

[00:02:05 - 00:02:12]

我分享了一个文件，里面有之前演示的SQL语句，随时可以打开查看，方便复习。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/6266342d-2332-4499-bf2e-573f1e08699e.webp)

[00:02:12 - 00:03:11]

SQL命令很多，初学者不用强记。就像学命令行工具，命令多了记不住很正常。用得多了自然就熟了。比如忘了怎么删除数据库，查一下笔记，看到`DROP DATABASE`就想起来了。关键是多练，熟悉后再用时查一下就行，不用刻意背。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/d5166187-e2a8-4f48-92ad-88d4c9c26889.webp)

[00:03:11 - 00:03:47]

昨天讲了用DDL操作数据库，今天讲DDL操作表。DDL（数据定义语言）不仅能操作数据库，还能操作表，比如创建、查看、删除表等。接下来用Navicat演示这些操作。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/414d5b53-9c39-42a1-a4bb-2b5cc0cd61d4.webp)

[00:03:47 - 00:03:55]

今天用Navicat演示，不用VS Code。虽然有些场景可能需要VS Code，但操作表主要用Navicat就够了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/db060e38-749b-4e28-8024-8e9dbd765dec.webp)

[00:03:55 - 00:04:04]

视频里提到“C Code语句”是SQL语句的口误。我们用Navicat的查询窗口演示表的操作，昨天的数据库操作代码可以先关掉。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/e2fe222c-5e5f-467e-8508-1eec316bb72a.webp)

[00:04:04 - 00:06:19]

在Navicat新建一个查询窗口，放大显示，演示表的操作。数据库软件里可以有很多数据库，每个数据库里又可以有很多表。我们先来看当前数据库（比如`musicdb`）里有哪些表，用：

```sql
SHOW TABLES;
```

运行后，能看到当前数据库的表列表，比如只有`t_singer`一张表。想看表的结构（有哪些字段、类型等），用：

```sql
DESC t_singer;
```

`DESC`是`DESCRIBE`的缩写，描述表结构。运行后会显示`t_singer`的字段、类型（如`varchar`、`int`）、是否允许为空、是否主键等信息。`SELECT DATABASE();`可以确认当前使用的数据库是`musicdb`。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/7f09a920-4599-406f-baea-77aa2096e607.webp)

[00:06:19 - 00:06:36]

`DESC t_singer;`会显示表的字段，比如`name`（`varchar`类型）、`age`（`int`类型），以及是否允许为空（`NULL`或`NOT NULL`）、是否主键等信息。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/6a0c548a-a142-4039-90c2-f37cc069f2a5.webp)

[00:06:36 - 00:08:33]

`DESC`命令查看表结构，主要用于调试或检查数据库信息，实际代码（如JavaScript、Java）里很少用。演示的SQL语句可以保存为文件，比如`ddl_table_operation.sql`，方便复习。接下来讲创建表，之前在命令行演示过创建`t_singer`，现在再创建一个新表：

```sql
CREATE TABLE users (
    name VARCHAR(10),
    age INT,
    score DOUBLE
);
```

`CREATE TABLE`是关键字，大写；`users`是表名，小写。括号里定义字段：`name`是`VARCHAR(10)`（可变长度字符串，最长10个字符），`age`是`INT`（整数），`score`是`DOUBLE`（双精度浮点数）。字段间用逗号分隔，语句以分号结尾。运行后刷新Navicat，能看到新表`users`。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/10686626-c0ec-41d2-b2cc-96876330b398.webp)

[00:08:34 - 00:08:41]

创建表时，括号里定义表的字段，指定每个字段的名称和数据类型。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/56671c6e-678b-4a29-8ef5-513a3f6943b6.webp)

[00:08:41 - 00:08:58]

表就像Excel，顶部是字段名，比如`id`、`name`、`address`、`age`、`score`等，创建表时要定义这些字段。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/2c1f9c64-7a3b-4d16-bec0-bab50e3928c7.webp)

[00:08:58 - 00:10:59]

创建`users`表时，指定字段和类型：

```sql
CREATE TABLE users (
    name VARCHAR(10),
    age INT,
    score DOUBLE
);
```

`VARCHAR(10)`表示可变长度的字符串，最长10个字符；`INT`是整数；`DOUBLE`是浮点数。字段类型像编程里定义变量类型。字段间用逗号分隔，类型名按规范大写。后面会讲更多数据类型和约束（比如主键、外键），现在只讲基本结构。运行后，Navicat刷新，能看到`users`表创建成功。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/a64eff2c-074b-4748-b387-de086d46fc93.webp)

[00:10:59 - 00:11:28]

运行`SHOW TABLES;`确认`users`表已创建。如果表名是关键字，需用反引号，比如：

```sql
CREATE TABLE `table` (
    name VARCHAR(10)
);
```

重复创建已存在的表会报错，比如`table users already exists`。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/f3a73c15-b740-45c9-99e4-bf2ff3099a1b.webp)

[00:11:28 - 00:11:58]

为了避免重复创建表报错，用：

```sql
CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(10),
    age INT,
    score DOUBLE
);
```

`IF NOT EXISTS`检查表是否存在，不存在才创建，存在就跳过，不会报错，适合在代码里用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250624/bf9e0ac9-b263-a922-473d-01d587e5319a/359eaa56-dd26-4cb5-9ccd-20694bce311b.webp)

[00:11:59 - 00:12:36]

创建表时加`IF NOT EXISTS`更安全。接下来会讲更多细节，比如数据类型（`VARCHAR`、`INT`、`DOUBLE`等）和约束（主键、外键等）。今天先掌握表的基本创建方式。

---