# 597_day123_express和koa的区别和源码-MySQL-17_(掌握)数据库-MySQL命令行终端的操作演练_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=17

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/42ca4216-a8a1-dafa-3810-8dc3a3a06b56

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/42ca4216-a8a1-dafa-3810-8dc3a3a06b56/f0191ecc-f61f-4408-b112-0ef697eccaee.webp)

*00:00:00 - 00:00:17*

之前我们讲了怎么配置MySQL的环境变量，连接数据库，还用`show databases;`命令看了MySQL自带的四个数据库，并简单介绍了一下它们的作用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/42ca4216-a8a1-dafa-3810-8dc3a3a06b56/ffeb9bea-106b-43ba-a729-b5a4510da3e7.webp)

*00:00:18 - 00:00:45*

现在我们要创建一个自己的数据库，因为那四个数据库是MySQL自带的，不是我们自己的。接下来就用SQL语句来建一个属于我们的数据库。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/42ca4216-a8a1-dafa-3810-8dc3a3a06b56/bf39576c-8f94-4215-9fbe-4b89c31b0e58.webp)

*00:00:46 - 00:01:43*

要创建数据库，用`CREATE DATABASE`语句。比如我们要建一个音乐项目的数据库，可以叫`music_db`。命令是：

```sql
CREATE DATABASE music_db;
```

- `CREATE DATABASE`：创建数据库的命令。
- `music_db`：数据库的名字，通常按项目命名，比如音乐项目就叫`music_db`。
- 分号（`;`）：表示SQL语句结束。

输入这个命令并按回车，系统会提示“Query OK”，说明数据库创建成功。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/42ca4216-a8a1-dafa-3810-8dc3a3a06b56/380cb222-c6c5-4930-b7f9-5495a2251420.webp)

*00:01:43 - 00:02:13*

创建成功后，再用`show databases;`查看，会发现多了一个`music_db`。但现在你还没进入这个数据库，要用它得先切换进去，用`USE`命令：

```sql
USE music_db;
```

按回车后，提示“Database changed”，说明你已经切换到`music_db`数据库了。接下来可以在里面建表、操作数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/42ca4216-a8a1-dafa-3810-8dc3a3a06b56/c4246ee4-4fcc-4bae-bdb4-38e377243693.webp)

*00:02:13 - 00:04:09*

接下来在`music_db`里建一张表，比如一张歌手表，叫`t_singer`。用`CREATE TABLE`命令：

```sql
CREATE TABLE t_singer (
    name VARCHAR(10),
    age INT
);
```

- `CREATE TABLE t_singer`：创建一张叫`t_singer`的表。
- `name VARCHAR(10)`：定义一个字段`name`，类型是`VARCHAR`（字符串），最大长度10个字符。
- `age INT`：定义一个字段`age`，类型是`INT`（整数）。
- 分号（`;`）：语句结束。

这里简单建了两个字段：歌手名字和年龄。敲回车后，表就建好了。

---

*00:04:09 - 00:05:39*

建好表后，检查一下有没有创建成功，用：

```sql
SHOW TABLES;
```

会显示`t_singer`，说明表建好了。接着可以往表里插入数据，用`INSERT INTO`命令：

```sql
INSERT INTO t_singer (name, age) VALUES ('Mayday', 30);
```

- `INSERT INTO t_singer`：往`t_singer`表插入数据。
- `(name, age)`：指定插入的字段。
- `VALUES ('Mayday', 30)`：插入的具体值，`name`是字符串要用单引号，`age`是整数不用。

敲回车后，数据就插入了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/42ca4216-a8a1-dafa-3810-8dc3a3a06b56/17dedb7a-1b62-4b9a-b26f-f56b6c8ef716.webp)

*00:05:46 - 00:06:16*

想查看表里的数据，用`SELECT`命令：

```sql
SELECT * FROM t_singer;
```

这会显示`t_singer`表里的数据，比如“Mayday, 30”。这些操作只是简单演示，后面会详细讲SQL语句。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/42ca4216-a8a1-dafa-3810-8dc3a3a06b56/0693931c-ed29-40a9-8e17-c938c9a5c4fc.webp)

*00:06:17 - 00:06:47*

笔记里有个例子，创建了一个叫`coderhub`的数据库：

```sql
CREATE DATABASE coderhub;
USE coderhub;
CREATE TABLE t_singer (
    name VARCHAR(10),
    age INT
);
INSERT INTO t_singer (name, age) VALUES ('Mayday', 30);
INSERT INTO t_singer (name, age) VALUES ('JayChou', 40);
```

这创建了`coderhub`数据库，切换进去，建了`t_singer`表，插入两条数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/42ca4216-a8a1-dafa-3810-8dc3a3a06b56/78b17909-a112-436f-93c7-35ad73915bb9.webp)

*00:06:47 - 00:07:51*

在命令行里操作数据库有缺点：没有代码高亮，写复杂SQL语句时换行麻烦，操作不方便。实际开发中，我们通常用图形化工具（类似Git的图形界面），更方便管理数据库。接下来会介绍这些工具，让数据库操作更简单。

---