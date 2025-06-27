# 615_day124_建表-DDL语句--DQL-聚合函数-多表查询-14_(掌握)数据库-根据需求创建多张表的分析_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=35

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/5bd1ca56-6285-43be-b830-6d10dc4eb444.webp)

*00:00:01 - 00:00:26*

之前我们讲了聚合函数（比如求和、平均值）、`GROUP BY`分组，以及如何用`HAVING`对分组结果加条件。现在我们来聊一个新话题——多表设计。还没讲到多对多关系，那部分会更复杂，今天我们先聚焦在为什么需要多张表以及怎么设计它们。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/f8490fae-e06c-4586-906a-d668ea594a14.webp)

*00:00:26 - 00:00:48*

什么是多表设计？简单说，就是把数据分散到不同的表，而不是全塞在一张表里。比如，我们之前用了一个商品表（`products`），里面存了手机的信息。如果我们直接把所有信息都塞到这张表里，可能会不太合适。接下来我们用一个例子来说明为什么。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/5fd393a6-5a6b-4060-97f6-d779f30d46cc.webp)

*00:00:48 - 00:02:38*

假设我们的商品表里有一列是品牌（`brand`），比如“华为”。现在我们直接存了品牌名称，一个简单的字符串，比如“华为”。但实际上，品牌不只是一个名字，它可能还包含很多信息，比如品牌的官网（像 www.huawei.com）、公司地址（比如深圳）、品牌市值等等。如果我们把这些信息都加到商品表里，比如加一列`brand_website`存官网，再加一列`brand_address`存地址，会怎么样？可以是可以，但有两个问题：

1. **表会变得很复杂**：商品表本来是存手机信息的，现在塞了一堆品牌相关字段，维护起来很麻烦。
2. **数据重复**：比如华为的手机有好几款，每款手机都存一遍“官网”和“地址”，这些信息其实是一样的，重复存储浪费空间，也容易出错。

所以，我们需要把品牌信息单独抽出来，放到一张新表里，专门存品牌相关的数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/c447bd05-9a22-4a0d-8f75-fab12e4c6bd8.webp)

*00:02:38 - 00:03:08*

为了更清楚地说明，我们用一个新例子：歌曲和歌手的关系。假设我们要建一个数据库，存歌曲信息和歌手信息。我们先来创建一个歌曲表，展示单表的问题，然后再优化成多表设计。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/34bbe02e-52e1-4217-8ff2-455cc673666f.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/cbdc7ca9-7307-47ea-a337-fa8d6682a776.webp)

*00:03:11 - 00:03:41*

我们先创建一个歌曲表，记录歌曲的信息，比如歌曲ID、名称、时长和歌手名字。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/322b7fdd-c3ac-4e3c-bfeb-9a0818b83c44.webp)

*00:03:41 - 00:05:12*

下面是创建歌曲表的 SQL 语句：

```sql
CREATE TABLE IF NOT EXISTS t_song (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    duration INT,
    singer VARCHAR(10)
);
```

这张表有：

- `id`：歌曲的唯一ID，自动增长。
- `name`：歌曲名称，最多20个字符，不能为空。
- `duration`：歌曲时长，用整数表示（秒）。
- `singer`：歌手名字，最多10个字符。

---

*00:05:12 - 00:06:12*

然后我们往歌曲表里插入一些数据：

```sql
INSERT INTO t_song (name, duration, singer) VALUES
    ('温柔', 100, '五月天'),
    ('离开地球表面', 120, '五月天'),
    ('倔强', 130, '五月天'),
    ('笑忘歌', 110, '五月天');
```

这些语句往` t_song` 表里插入了四首歌，分别是“温柔”“离开地球表面”“倔强”和“笑忘歌”，都是五月天的歌，时长随便写的。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/b8192a63-0ae1-4937-92d5-c2c773c45d38.webp)

*00:06:13 - 00:06:45*

插入数据后，歌曲表里有了四条记录。但这里有个问题：每条记录都存了“五月天”这个歌手名字。如果五月天的歌有几十首上百首，每首歌都重复存“五月天”，这就造成了数据冗余（重复存储）。而且，如果五月天改了名字（比如艺名变了），我们得把所有记录的歌手名字都改一遍，特别麻烦。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/91735103-908c-415c-82fa-469fcd093e2d.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/0277f1d4-5b8c-4a2d-ad93-139e6aa8410c.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/7cacd0b4-eb92-4954-a85c-ec2ef268b7d9.webp)

*00:06:45 - 00:07:15*

我们再看现实例子，比如在网易云音乐上，点开一个歌手（像鱼丁糸或邓紫棋）的页面，会看到很多信息：歌手名字、简介、代表作、主要成就、早年经历等。如果我们把这些信息都塞到歌曲表里，每首歌都存一份歌手简介、成就等，数据会重复很多次，表也会变得很复杂。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/ffd36524-4b08-4d6f-a948-e650dd10e4cb.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/9096a798-27b4-4c0a-aff5-0698f042a2fb.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/3f4aa2ca-f14f-4d8c-a732-f7c2749edbc4.webp)

*00:07:15 - 00:07:45*

以邓紫棋为例，她的艺人简介可能包含名字、出生日期、代表作品、成就等。如果每首歌都存这些信息，数据量会很大，维护也很麻烦。比如，更新她的简介得改动所有相关歌曲的记录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/4e85cb77-ac65-4689-afee-cffe44d2c238.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/26fa4422-bb4d-4ca6-9080-f1c0f2725a5a.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/e9a476c0-0a70-4ecc-a609-a24619423366.webp)

*00:07:45 - 00:08:14*

所以，正确的做法是把歌手信息单独抽出来，建一张歌手表，专门存歌手相关的数据，比如名字、简介等。这样，歌曲表只需要存一个指向歌手表的标识（比如歌手ID），而不是重复存一大堆信息。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/cfc74507-d639-4ff9-91e9-bff70c3cba9c.webp)

*00:08:14 - 00:08:44*

歌手信息应该有自己的表，而不是只在歌曲表里存个名字。我们来建一张歌手表，专门存歌手的信息。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/1c31b45f-82dc-4593-b630-b895957a891a.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/73d24d3f-1ada-45bc-9448-e62df6e600f7.webp)

*00:08:44 - 00:09:16*

如果我们直接在歌曲表里加字段，比如`singer_name`、`singer_intro`、`singer_achievements`，每首歌都存一份，数据会重复很多次。比如五月天的简介在每首歌里都存一遍，太浪费了。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/6dbca429-4cba-4d7d-85dd-59e53ea3cdc8.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/9b05322f-2345-4519-a9ce-2d9c19172cc8.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/34848b6c-d36f-480a-aca2-3b6e06f57a09.webp)

*00:09:16 - 00:09:46*

重复存储（冗余数据）会导致数据库效率低、维护难。所以我们要把歌手信息单独抽出来，建一张歌手表，只存一次歌手信息，歌曲表通过关联来引用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/11aea557-fad3-4217-8a55-5b4d24e34f67.webp)

*00:09:46 - 00:11:10*

下面是创建歌手表的 SQL 语句：

```sql
CREATE TABLE IF NOT EXISTS t_singer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    intro VARCHAR(200)
);
```

这张表有：

- `id`：歌手唯一ID，自动增长。
- `name`：歌手名字，最多10个字符，不能为空。
- `intro`：歌手简介，最多200个字符。

插入一条歌手数据，比如五月天：

```sql
INSERT INTO t_singer (name, intro) VALUES
    ('五月天', '五月天是中国台湾的摇滚乐团，成立于1997年，代表作包括温柔、倔强等。');
```

这样，歌手表里就存了五月天的信息，只存一次。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/5ca89ba3-de3d-4a42-a322-54f5dee99cec.webp)

*00:11:10 - 00:11:14*

歌手简介可能很长，但我们只需要在歌手表里存一次，而不是在每首歌里都存。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/7d02c60e-cd20-4b92-b21c-f5540dc3f8f3.webp)

*00:11:14 - 00:11:20*

我们把五月天的简介存到歌手表里，歌曲表只需要引用歌手ID。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/2b25cd60-58a6-4aaa-a303-d8af79b5654e.webp)

*00:11:20 - 00:11:43*

歌手表建好后，歌曲表需要改一下，把原来的`singer`字段（存名字）改成`singer_id`（存歌手ID），这样就能通过ID关联到歌手表。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/a7d6b530-38e9-4e3e-87b4-a0eaca220608.webp)

*00:11:43 - 00:11:53*

修改歌曲表后，里面会多一个`singer_id`字段，指向歌手表的ID。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/648975b0-64ca-49a5-90b4-e8222c906bd6.webp)

*00:11:53 - 00:11:59*

歌手表专门存五月天的信息，比如名字和简介，只存一次，歌曲表通过`singer_id`引用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/e4348fec-7ea3-4854-b94e-eea4c3a7423b.webp)

*00:11:59 - 00:12:14*

歌曲表里不需要存歌手名字，只存`singer_id`。比如五月天的ID是1，歌曲表里每首歌的`singer_id`都填1。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/8929c1dd-4e9c-402c-b7d1-6456fac53d16.webp)

*00:12:14 - 00:12:55*

原来的歌曲表存了“五月天”好多次，太浪费空间。现在改成存`singer_id`，比如都存1，数据量小多了，也避免了重复。如果需要歌手信息，直接通过`singer_id`去歌手表查。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/e2ce702c-5120-45d7-a741-ad4bfefb59ad.webp)

*00:12:55 - 00:12:59*

我们需要修改歌曲表，把`singer`字段改成`singer_id`。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/f9c7a082-1192-4c4f-9ab0-11636288b4c9.webp)

*00:13:01 - 00:15:41*

下面是修改歌曲表的 SQL 语句。因为直接改字段类型可能报错（比如从`VARCHAR`改成`INT`），我们先删掉`singer`字段，再加一个`singer_id`字段：

```sql
ALTER TABLE t_song DROP COLUMN singer;
ALTER TABLE t_song ADD COLUMN singer_id INT;
```

然后更新歌曲表的数据，把原来的歌手名字替换成对应的`singer_id`。假设五月天的ID是1：

```sql
UPDATE t_song SET singer_id = 1 WHERE name IN ('温柔', '离开地球表面', '倔强', '笑忘歌');
```

这样，歌曲表里每首歌的`singer_id`都是1，指向歌手表里的五月天。

---

*00:15:41 - 00:16:27*

理想情况下，建表时就应该设计好，直接用`singer_id`而不是`singer`。但如果一开始没设计好，可以通过`ALTER TABLE`来修改，先删掉旧字段，再加新字段。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/e2461ded-4732-4763-a777-0f809d64678e.webp)

*00:16:27 - 00:16:48*

改完后，歌曲表里每首歌只存`singer_id`（比如1），不需要存“五月天”三个字，数据更简洁。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/d5770125-f29e-4132-94a0-2c3fb902acb3.webp)

*00:16:48 - 00:16:52*

通过`singer_id`，我们可以去歌手表查五月天的详细信息。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/6a1d5acd-33c0-4bad-9756-45d6e67ad4e3.webp)

*00:16:52 - 00:16:56*

比如，查询歌曲和歌手信息可以用多表查询（后面会讲）。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/40547dd7-d35a-485d-aedb-901e3df22c81.webp)

*00:16:58 - 00:17:01*

通过`singer_id`，我们可以用多表查询把歌曲和歌手信息关联起来。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/27fffed8-ec63-48db-af06-1e0a1e51cda6.webp)

*00:17:01 - 00:17:19*

这样，歌曲表只存`singer_id`，不需要重复存歌手名字或简介，节省空间，也方便维护。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/9818bca9-8caa-46c9-8615-5728703f2914.webp)

*00:17:19 - 00:17:31*

回到商品表的例子，品牌也是一样。如果我们只存品牌名字（像“华为”），没问题。但如果品牌还有官网、地址、市值等信息，直接加到商品表会导致冗余和复杂。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/f5e00ba3-8abd-41d5-9a14-dd26392ceb86.webp)

*00:17:31 - 00:18:01*

如果品牌信息很多（比如官网、地址、市值），我们应该建一张品牌表，存品牌ID、名字、官网、地址等。商品表只存`brand_id`，通过ID关联到品牌表。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/b98a034e-7dca-497a-978c-65867a7aa403.webp)

*00:18:01 - 00:18:40*

什么时候需要拆表？没有固定标准，取决于数据复杂度和维护需求。如果品牌只有名字，单表存着就行。但如果品牌信息复杂（名字、官网、地址、市值等），就该拆到单独的表，减少冗余，方便维护。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/a8a2dde1-a5eb-4035-b851-fd6611ca8889.webp)

*00:18:40 - 00:19:35*

回到商品表，如果品牌有官网、排名、市值等信息，直接加到`products`表会让表变复杂，还会重复存储（比如华为的官网存很多次）。更好的办法是建一张品牌表：

```sql
CREATE TABLE IF NOT EXISTS t_brand (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    website VARCHAR(100),
    address VARCHAR(200),
    market_value DECIMAL(15,2)
);
```

商品表改成用`brand_id`：

```sql
ALTER TABLE products DROP COLUMN brand;
ALTER TABLE products ADD COLUMN brand_id INT;
```

然后用`brand_id`关联到品牌表。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/cce1d645-f0e0-9cd5-8c1c-5b648ed22bb1/9f8740f7-7524-440e-a4a1-45c6b4f68e6e.webp)

*00:19:35 - 00:20:12*

商品表只存`brand_id`，需要品牌信息时，通过多表查询从品牌表查。这样既避免冗余，又保持表结构简洁。歌曲和歌手的例子也是一样，歌曲表存`singer_id`，歌手信息存到歌手表，通过ID关联查询。

---