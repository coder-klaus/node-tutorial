# 599_day123_express和koa的区别和源码-MySQL-19_(理解)数据库-认识SQL语句和语句的分类_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=19

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/39103ee3-0239-366a-c849-0a16eb5c8d2f

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/3d6a11ee-1218-40d3-9dc0-1b4e65470bf3.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/15ea8063-dca4-4519-b789-ead0039f3ba6.webp)

*00:00:01 - 00:00:29*

好，刚刚我们讲了怎么用命令行和工具连接MySQL数据库，接下来我们把这些工具关掉，重点看看MySQL里的其他内容。我们现在只保留两个窗口，准备讲新的东西。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/6e269da3-eb8b-4572-a4f3-f858e65ac0b4.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/5d06beb4-028d-4f45-98ea-11b8a35c1aa3.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/062fbe07-b566-43a7-b075-0b8e18af2918.webp)

*00:00:29 - 00:00:59*

这里提到一个叫Navicat的工具，很好用，大家可以了解一下。我们今天不重点用这个工具的功能，而是要讲SQL语句。视频里提到的“C口语句”其实是“SQL语句”的误称，SQL是Structured Query Language（结构化查询语言）的缩写。SQL语句是用来操作数据库的指令，不管你用Navicat、命令行还是其他工具，只要能连接数据库，执行SQL语句就能操作数据库。接下来我们重点讲SQL语句是什么。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/95ee7682-7f64-4708-906c-7d64a7c115bc.webp)

*00:01:17 - 00:01:42*

SQL语句是跟数据库沟通的语言。假如你在用Navicat这样的工具操作数据库，可以通过点击按钮来改数据，比如点一下把数据改成“5”。但在实际开发中，我们得用代码来操作数据库，而不是手动点按钮。SQL语句就是代码和数据库之间的桥梁。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/423f1aff-e24c-44a4-aa10-4563df12d432.webp)

*00:01:42 - 00:02:10*

在真实开发中，我们得用代码，比如JavaScript、Java、Go等语言来操作数据库。你不能像用Navicat那样点几下按钮来改数据，而是要写代码。视频里提到的“杰式代码”“交往代码”“压压代码”“够代码”其实是指JavaScript、Java、Python、Go等语言的口误。总之，不管用什么语言，操作数据库都需要SQL语句。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/d7c2c736-ff30-4f4b-93e3-15ed1e302c2e.webp)

*00:02:12 - 00:04:10*

你的代码（比如JavaScript或Java）不能直接操作数据库，得通过SQL语言来搞定。SQL全称是Structured Query Language（结构化查询语言），专门用来跟数据库打交道。你写好SQL语句，比如创建表、查询数据、添加数据、删除数据或修改数据，然后把这些语句通过代码传给数据库，数据库就会执行相应的操作。不管你用什么编程语言，SQL语句的写法都一样，所以学好SQL语句，你就能在各种后端开发中通用。SQL是操作数据库的通用语言，不绑定某个特定编程语言。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/a3ccf2c2-bad3-41c6-a8a6-5cd46a783ac7.webp)

*00:04:12 - 00:04:42*

接下来我们讲SQL语句的操作流程。想操作数据库，就得用SQL语言跟数据库沟通。SQL是Structured Query Language的缩写，专门用来写操作数据库的语句。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/ba3f94dd-d7f7-40fe-929a-299041deda87.webp)

*00:04:42 - 00:05:12*

SQL语句就是用SQL语言写的指令，可以对数据库做各种操作。MySQL的SQL语句跟其他关系型数据库（如Oracle）的写法很像，学会MySQL的SQL语句，操作其他数据库也很容易。在写SQL语句时，有一些规范：关键字通常用大写，比如`CREATE`、`TABLE`；自己定义的名称（像表名`user`）用小写。下面看个例子：

```sql
CREATE TABLE user
```

这里`CREATE`和`TABLE`是关键字，用大写；`user`是自定义表名，用小写。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/99828ec1-1452-4b86-bee2-feb3931813b3.webp)

*00:05:14 - 00:07:00*

SQL语句每条都要以分号`;`结尾，虽然有些场景可以省略，但最好都加上，明确表示语句结束。如果表名或字段名不小心用了关键字（比如想建一张表名叫`table`），得用反引号（`` ` ``）包起来：

```sql
CREATE TABLE `table`
```

这里`table`是关键字，所以用反引号包起来，避免冲突。尽量别用关键字做名字，但如果必须用，反引号能解决问题。

---

*00:07:01 - 00:07:30*

跟写JavaScript代码一样，SQL语句也尽量避免用关键字命名，比如不要用`class`或`table`做名字。如果非要用关键字，得用反引号包起来：

```sql
CREATE TABLE `table`
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/1074d794-644e-4e21-a794-8e633b155a7d.webp)

*00:07:31 - 00:09:03*

SQL语句种类很多，初学者可能觉得记不住，不用强行背。常用的语句写多了自然就熟了，比如增删改查。刚开始学，把笔记记好，需要时查一下就行。强行背诵可能会打击学习兴趣，得不偿失。把SQL语句多练几遍，慢慢就熟悉了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/3e9456f9-9879-4e9d-96d3-8c6fe2229129.webp)

*00:09:05 - 00:10:05*

SQL语句种类多，官方把它们分成四类：

1. **DDL（Data Definition Language，数据定义语言）**：用来定义数据库或表的结构，比如创建数据库、创建表、删除数据库、删除表等。比如：

```sql
CREATE TABLE user;
DROP DATABASE mydb;
```

2. **DML（Data Manipulation Language，数据操作语言）**：用来操作表里的数据，包括增（插入）、删（删除）、改（更新），但不包括查。比如：

```sql
INSERT INTO user (name) VALUES ('Alice');
DELETE FROM user WHERE id = 1;
UPDATE user SET name = 'Bob' WHERE id = 2;
```

3. **DQL（Data Query Language，数据查询语言）**：专门用来查询数据，比如从表里查数据。因为查询语句比较复杂，单独分一类。比如：

```sql
SELECT * FROM user;
```

4. **DCL（Data Control Language，数据控制语言）**：用来控制数据库的访问权限，比如给用户分配权限。这个比较复杂，后面再说。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/a747360d-b00f-4fb6-aba0-71fda92aef24.webp)

*00:10:07 - 00:10:30*

DML是操作表里数据的语句，主要是增、删、改三种操作，不包括查。查被单独分到DQL里，因为查询逻辑更复杂。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/39103ee3-0239-366a-c849-0a16eb5c8d2f/b4675318-9121-450e-8a38-a83499c43a70.webp)

*00:10:30 - 00:10:50*

DML包括增、删、改，比如插入数据、删除数据、更新数据。DQL是查询数据，比较复杂，单独分一类。DCL是控制权限的语句，后面再讲。我们接下来会逐一学习这些SQL语句。

---