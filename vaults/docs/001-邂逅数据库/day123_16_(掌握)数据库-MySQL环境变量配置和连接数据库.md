# 596_day123_express和koa的区别和源码-MySQL-16_(掌握)数据库-MySQL环境变量配置和连接数据库_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=16

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/ac87e317-096c-4466-1b08-5f453f8839af

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/2d94c583-f684-49bd-b434-8369d27df19d.webp)

*00:00:00 - 00:00:27*

好的，我们刚在电脑上装好了MySQL，并且确认它的服务已经启动了。接下来，我们要怎么用MySQL呢？其实就是要去连接它。连接MySQL有很多方法，比如可以用命令行工具（终端）来连。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/521d7cb0-4342-4432-b8f6-4921d6d3721f.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/0b6caa54-9993-4243-9466-1c256b718484.webp)

*00:00:28 - 00:00:57*

打开你的终端（Windows上是CMD，Mac上是Terminal），都可以用。试着输入`mysql --version`看看MySQL的版本信息。如果提示找不到命令，不代表MySQL没装好，只是可能环境变量没配置好。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/b53d8d1a-fc93-4950-bd2c-1986b3d53cce.webp)

*00:00:57 - 00:01:11*

别担心，MySQL已经装好了！如果在CMD里直接输入`mysql`没反应，说明环境变量没设置。我们可以先关掉CMD，试试用MySQL自带的命令行工具来连接。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/dee86fd1-3206-4411-aaae-81a76dd3f9b0.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/cae8bb5c-288f-40bc-82d8-c3a9a252b1b9.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/3b1e6e38-25b4-45e1-a9c4-61f623ee573b.webp)

*00:01:13 - 00:01:27*

安装MySQL时，它会自带一个命令行工具（MySQL Command Line Client）。我们可以直接用这个工具来连接数据库。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/b7a0b316-926d-4ea4-aa57-d41a0eed54a5.webp)

*00:01:27 - 00:01:45*

打开MySQL 8.0 Command Line Client，点开后会直接让你输入密码。输入我们设置的密码（比如“codery”），就能登录了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/ff740871-d304-41fb-a205-de52cf0a43a9.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/8e7c24df-e86c-4b6f-8051-52928f72085b.webp)

*00:01:46 - 00:02:00*

输入密码（比如“codery123.0”），按回车，就能进入MySQL的命令行界面。这时候可以用SQL命令来操作数据库，比如创建表、查询数据等。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/b94b78c9-cd6a-410c-83b8-001ebe3e23b7.webp)

*00:02:02 - 00:02:15*

在MySQL命令行里，输入`show databases;`就能看到当前MySQL里有哪些数据库。然后就可以建表、做各种数据库操作了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/2f0b2a9f-c8bc-442a-99b0-fe5cc2cd038f.webp)

*00:02:15 - 00:02:44*

我们刚通过MySQL自带的命令行工具连上了数据库。但为什么在CMD里输入`mysql`没反应呢？这是因为CMD里的命令要能运行，必须得在系统的环境变量里配置好MySQL的路径。就像你用`npm`或`java`命令一样，如果没配置环境变量，系统就找不到这些命令。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/59c12cb8-4769-4a65-9b98-f497c9e134a9.webp)

*00:02:45 - 00:02:54*

在CMD里输入`mysql`，如果提示“不是内部命令”，说明环境变量里没找到MySQL的路径。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/5d45db5f-9daf-42ee-b0b2-20c5ff0aba25.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/a1ae7da3-dc04-4adb-9ed5-258adf65a5dd.webp)

*00:02:54 - 00:03:21*

MySQL自带的命令行工具能直接运行，是因为它直接调用了MySQL的可执行文件。但在CMD里，系统会先在环境变量的路径里找`mysql`命令，如果没配置，就找不到。就像Java的`javac`命令，如果没配置环境变量，也会提示找不到。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/b2abe782-5668-4b10-a08f-3885e1ce7843.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/e1cd13a1-1934-4c23-a1b9-94b0faca3c5c.webp)

*00:03:23 - 00:03:53*

MySQL命令用不了，是因为环境变量没配置好。我们需要找到MySQL的可执行文件（mysql.exe）所在路径。右键MySQL Command Line Client的快捷方式，选“打开文件位置”，就能找到它的目录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/d2a43aab-eeaf-4721-9e29-03ca2542684e.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/13b2471d-360f-4231-8832-7c6c9bba06e9.webp)

*00:03:53 - 00:04:22*

MySQL默认安装在`C:\Program Files\MySQL\MySQL Server 8.0\bin`目录下，bin文件夹里有个`mysql.exe`，这就是我们要用的可执行文件。CMD输入`mysql`时，系统需要知道去这个路径找这个文件。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/c99c3f80-2b2f-484e-abd0-c789d443567d.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/d48fdf6c-39e7-4819-be45-babcc5ee0c2b.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/281b05dc-8fe8-41b0-b74a-4431ae4e7eac.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/8e723448-cfe0-45fd-8996-bca05c0ba3ef.webp)

*00:04:22 - 00:04:52*

系统不知道去`bin`文件夹找`mysql.exe`，所以我们得把这个路径加到环境变量里。加了之后，CMD就能找到并运行这个程序了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/43ce2f0e-589d-41d8-a9bd-60aa2524f8c7.webp)

*00:04:52 - 00:05:21*

如果直接在`bin`文件夹里运行`mysql`命令，系统会先在当前目录找，找到了就能运行。但在其他目录下，系统只看环境变量，所以得配置好环境变量。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/1cecc097-73c9-4507-80ab-4f05db04cfed.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/2f9c3c40-7ced-4b6e-b8f8-f108aac8858a.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/4652020a-7b96-4ddf-9428-a22875596b90.webp)

*00:05:25 - 00:05:54*

配置环境变量的步骤：右键“此电脑”→“属性”→“高级系统设置”→“环境变量”。在弹出的窗口里就能看到环境变量的设置选项。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/36903914-1c40-4215-a722-bedd121f6010.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/cdfd3239-12e5-4378-ba55-1cd1e0e5a611.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/8d5c4a7d-a00e-4b40-8555-8ff079a33ae4.webp)

*00:05:54 - 00:06:24*

环境变量有两类：用户变量和系统变量。用户变量只对当前用户生效，系统变量对所有用户生效。像`Path`变量，无论是用户变量还是系统变量，都可以加MySQL的路径。一般建议加到系统变量里，这样所有用户都能用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/a53cc456-0f44-4978-bda2-befba7d4d085.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/fb132053-dfee-42b4-9fca-9ebd54f35410.webp)

*00:06:24 - 00:06:54*

操作系统支持多用户，比如用户A和用户B。如果加到用户变量，只对当前用户生效；加到系统变量，所有用户都能用。如果是自己的电脑，建议加到系统变量，方便所有用户使用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/bd8cd732-cfb8-4b7c-bcd0-caaf284235d5.webp)

*00:06:56 - 00:07:09*

在系统变量里点“新建”，把MySQL的`bin`目录路径（比如`C:\Program Files\MySQL\MySQL Server 8.0\bin`）加进去。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/41c83c10-7186-4ddd-b85a-aa33e4b7d4bf.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/e96a1e54-1a21-4a5a-b8b8-1c3292398c31.webp)

*00:07:09 - 00:07:25*

加好路径后，点“确定”保存。关闭CMD，重新打开，这样环境变量就生效了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/abc6f87c-bf5b-40bf-8346-eff561a39f2e.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/d89bd674-ef29-4a50-a7b8-6968057f8266.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/27d9f96d-d2d8-4f5d-97e1-fd8223f4001f.webp)

*00:07:28 - 00:07:58*

重新打开CMD，输入`mysql --version`，就能看到MySQL的版本信息（比如8.0.31）。这说明环境变量配置成功，现在可以在CMD里直接用`mysql`命令了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/ffdf4bfd-84a7-49cc-8f37-f5f216236787.webp)

*00:07:59 - 00:09:21*

要在CMD里连接MySQL，输入以下命令：

```bash
mysql -u root -p
```

- `-u root`：指定用户名为`root`（MySQL默认创建的管理员用户）。
- `-p`：提示输入密码。

回车后输入密码（比如“coder5123.2”），就能进入MySQL命令行。输入`show databases;`可以查看所有数据库。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/7991c9ec-44b2-464a-960f-6c846ac4f0d4.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/5f293d93-6532-4010-9278-5f50d03bf826.webp)

*00:09:21 - 00:09:51*

Mac电脑也需要配置环境变量。在终端运行`export PATH=$PATH:/path/to/mysql/bin`（替换为MySQL的bin路径），就能用`mysql`命令了。配置好后，输入`mysql -u root -p`和密码，就能连接MySQL，运行SQL命令。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/94bb762d-ef6b-4a7b-8bf0-83734eb25ed7.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/25afc9b8-f928-4de8-8a74-1d162cde4c77.webp)

*00:09:54 - 00:10:24*

连接成功后，可以用SQL命令操作数据库，比如`show databases;`查看所有数据库。MySQL是一个软件，里面可以有多个数据库。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/225b6f63-7ddc-49b3-a33a-80a52eda530b.webp)

*00:10:25 - 00:10:55*

输入`show databases;`可以看到MySQL里的所有数据库。新装的MySQL默认有四个数据库。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/47216dff-97a2-4af4-b695-3907eeefc6fb.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/212831ca-cb0e-401f-84bf-c8d8fff1efce.webp)

*00:10:55 - 00:11:22*

这四个数据库是MySQL自带的，专门用来管理MySQL本身。一般不用我们手动改，部署时可能会用到。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/e1b91464-2c29-4d1c-a288-c19270888f62.webp)

*00:11:24 - 00:11:40*

第一个数据库叫`information_schema`（原文误写为“information”，已更正）。它存的是MySQL的“元数据”，也就是数据库的结构信息。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/602ffca2-0163-4090-9e72-6629546519cb.webp)

*00:11:42 - 00:12:12*

`information_schema`记录了MySQL里所有数据库的表、列、字段和访问权限等信息。比如你建了个新数据库，里面的表结构和权限都会记录在这里。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/df099901-af6e-484e-b256-c91877dcdd74.webp)

*00:12:12 - 00:12:42*

`information_schema`就像MySQL的“档案室”，存着所有数据库的“户口信息”，包括权限、表结构等，后面会用到。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/5fb1a082-140c-45ac-8fd9-79906dde3437.webp)

*00:12:42 - 00:14:27*

第二个数据库是`performance_schema`，记录MySQL运行时的性能数据，比如查询或存储数据时消耗的资源。如果数据库运行慢，可以查这个数据库分析原因，但一般不用，优化时可能用到。
第三个数据库叫`mysql`，存用户、权限和日志信息，比如`root`用户的信息就存在这里。
第四个数据库是`sys`，它是`performance_schema`的简化版，把性能数据汇总成更易读的形式，方便快速查看性能信息。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250623/ac87e317-096c-4466-1b08-5f453f8839af/81e34800-1054-49bc-8b30-fdd083960da8.webp)

*00:14:27 - 00:15:04*

这四个数据库是MySQL自带的，别随便改动它们。接下来可以学怎么创建自己的数据库。

---