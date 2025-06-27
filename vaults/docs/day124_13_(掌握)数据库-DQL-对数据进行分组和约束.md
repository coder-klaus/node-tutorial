# 614_day124_建表-DDL语句--DQL-聚合函数-多表查询-13_(掌握)数据库-DQL-对数据进行分组和约束_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=34

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/b56469c1-f747-362d-0183-626649ca4f7c

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/58d5ad0e-6975-46ec-bb51-f015b6be3ad6.webp)

*00:00:00 - 00:00:30*

好的，刚才我们讲了常见的聚合函数（比如求平均值、最大值等）的使用方法。现在我们来学习一个新东西——`GROUP BY`。这个`GROUP BY`是什么意思呢？简单来说，就是“分组”。它的作用是把数据按照某种规则分成不同的组，然后对每组数据进行处理，比如用聚合函数计算每组的统计值。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/754cff35-be10-4656-8a04-803850ba4e3b.webp)

*00:00:31 - 00:01:25*

当我们用`GROUP BY`的时候，就是通过某个字段把数据分成几组。比如，之前我们用聚合函数（像`AVG`求平均值、`MAX`求最大值）的时候，默认是把所有查询出来的数据看成一整组来计算的。比如算所有手机的平均价格，或者只算华为手机的平均价格。但如果我们想一次性算出每个品牌的平均价格怎么办？这就是`GROUP BY`的用武之地了，它能让数据按照品牌分成不同的组，然后分别计算每组的结果。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/64afbce7-1b6a-4fb4-9257-a4171209c89c.webp)

*00:01:25 - 00:01:55*

如果我们想把所有品牌的平均价格一次性算出来，就可以用`GROUP BY`。它会把查询到的数据按照指定的字段（比如品牌`brand`）再分成小组，每组单独计算结果。简单说，`GROUP BY`就是帮我们把大堆数据分成小份，方便我们对每份数据做统计。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/74fb2bfc-6d3e-4a76-aaf2-dce159063ee4.webp)

*00:01:55 - 00:02:25*

`GROUP BY`通常跟聚合函数一起用，因为它本身就是为了分组后做统计用的。平常的查询（不涉及统计）一般不需要`GROUP BY`。比如，你单纯查所有手机的信息，就不用分组。但如果你想算每个品牌的最高价格、最低价格或平均价格，那就得用`GROUP BY`把数据按品牌分好组，再用聚合函数算每组的结果。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/2ff676f2-3fb6-4983-8dc6-1dfbe80a1640.webp)

*00:02:26 - 00:02:45*

`GROUP BY`的用法是这样的：先把数据按某个字段（比如品牌`brand`）分组，然后对每组数据用聚合函数计算。比如，我们可以算每个品牌里价格最高的手机是哪款，最低的是哪款，或者平均价格是多少。这种分组后计算的方式特别适合统计分析。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/e421a6fe-9ce0-4561-9ad2-0810a0bb1d9e.webp)

*00:02:46 - 00:04:14*

现在我们来详细讲讲`GROUP BY`怎么用。假设我们有一个手机的数据库，想按品牌（`brand`）把手机分成不同组，然后算每个品牌的最高价格、最低价格和平均价格。怎么做呢？我们写一个 SQL 查询语句：

```sql
SELECT brand, MAX(price), MIN(price), AVG(price)
FROM products
GROUP BY brand;
```

这段代码的意思是：从`products`表里查数据，按`brand`字段分组，每组算出最高价格（`MAX(price)`）、最低价格（`MIN(price)`）和平均价格（`AVG(price)`）。比如，华为的手机会被分到一组，vivo的手机分到另一组，然后分别算每组的这些统计值。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/11c165d7-5744-4d9a-8624-b18457acba7d.webp)

*00:04:15 - 00:04:44*

通过`GROUP BY brand`，所有相同品牌的记录会被归到一组。比如，华为的手机是一组，vivo的是一组，OPPO的是一组，小米的是一组，苹果的是一组，锤子的是一组。这样分组后，每组就是一个独立的小数据集，我们可以对每组做进一步的统计。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/7b63e4de-a301-4e4e-8b74-346cfa341dc2.webp)

*00:04:45 - 00:05:15*

分组后，我们可以先简单查每个品牌的名称：

```sql
SELECT brand
FROM products
GROUP BY brand;
```

这个查询会返回所有不同的品牌名称，比如华为、vivo、OPPO、小米、苹果、锤子等，每组只显示一次品牌名。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/e76f02d8-c1ae-421d-b532-c9b0801445f7.webp)

*00:05:16 - 00:05:44*

接下来，我们可以加点统计信息，比如查每个品牌里价格最高的手机：

```sql
SELECT brand, MAX(price)
FROM products
GROUP BY brand;
```

这段代码会返回每个品牌的最高价格。比如，华为组里价格最高的可能是9999元的手机，vivo组里可能是另一个价格，依此类推。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/81381aab-c904-48f8-bce1-d013315d7289.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/3496325d-b9de-4af4-ab63-6a37ab764289.webp)

*00:05:45 - 00:06:17*

如果我们想查更多信息，比如最高价格、最低价格、平均价格和平均评分，可以写：

```sql
SELECT brand, MAX(price), MIN(price), AVG(price), AVG(score)
FROM products
GROUP BY brand;
```

这个查询会返回每个品牌的价格统计和评分统计。比如，华为的最高价格可能是9999元，最低价格是某个值，平均价格和平均评分也会算出来。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/d435203b-af12-4e70-beaa-0ac4627e536e.webp)

*00:06:17 - 00:06:32*

接着，我们可以看vivo组的最高价格、最低价格等。比如，vivo组里最高价格可能是某个具体值，最低价格是另一个值，依此类推。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/f23a0ffd-95cd-4ff0-b65d-6eef9950c592.webp)

*00:06:32 - 00:07:01*

为了让结果更清晰，我们可以给输出的字段起别名：

```sql
SELECT brand, MAX(price) AS max_price, MIN(price) AS min_price, AVG(price) AS avg_price, AVG(score) AS avg_score
FROM products
GROUP BY brand;
```

这样，输出的表格会更直观，列名分别是品牌、最高价格、最低价格、平均价格和平均评分。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/6355bbf2-d6d4-4936-b2e7-ab3e1556fd1c.webp)

*00:07:01 - 00:07:31*

运行上面的查询后，我们会得到每个品牌的统计结果。比如，华为的最高价格可能是9999元，最低价格可能是2000元，平均价格是5000元，平均评分是7.2分；苹果的可能是另一个值，比如平均评分7.39分。这样我们就能清楚看到每个品牌的统计信息。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/fa72d4b4-3b64-48e0-b197-6c4fe63e1459.webp)

*00:07:31 - 00:08:01*

如果平均价格的小数位数太多（比如7.333333），看起来不美观，我们可以用`ROUND`函数来保留小数位。比如：

```sql
SELECT brand, MAX(price) AS max_price, MIN(price) AS min_price, ROUND(AVG(price), 2) AS avg_price, ROUND(AVG(score), 2) AS avg_score
FROM products
GROUP BY brand;
```

这里`ROUND(AVG(price), 2)`表示把平均价格保留2位小数，比如7.333333变成7.33，更加简洁好看。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/6e8ff26f-2b57-4195-a3b0-598498fdbe74.webp)

*00:08:01 - 00:08:31*

总结一下，`GROUP BY`的作用是把数据按某个字段分组，然后对每组用聚合函数计算统计值。最终我们得到一张表格，包含每组的统计结果。这些结果可以返回给客户端，客户端可以用图表（比如柱状图、折线图）展示出来，方便分析和汇总。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/ff4bfa11-90c0-43af-84e9-3ddc951dbcf0.webp)

*00:08:31 - 00:08:59*

这个分组和统计的过程，就是`GROUP BY`的核心用法。客户端拿到这些数据后，可以进一步处理或可视化，比如做成统计报表或图表。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/aa52c8f8-81dd-4cf7-af86-6867ec280c1d.webp)

*00:09:01 - 00:09:02*

好，这就是`GROUP BY`的基本用法。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/85832bfc-e228-4da3-8eed-2bd43a97395e.webp)

*00:09:02 - 00:09:42*

为了让结果更直观，我们可以给输出的字段起别名，比如：

```sql
SELECT brand, MAX(price) AS max_price, MIN(price) AS min_price, ROUND(AVG(price), 2) AS avg_price, ROUND(AVG(score), 2) AS avg_score
FROM products
GROUP BY brand;
```

这样，输出的列名会更清晰，像`max_price`、`avg_price`等，看起来更友好。在实际项目中，这种用法很常见，后续我们还会结合具体案例再讲。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/6625463f-4f59-4ce1-9224-27d19b6d4fee.webp)

*00:09:42 - 00:09:59*

除了`GROUP BY`，我们还可以给分组后的结果加一些条件限制。比如，普通的查询可以用`WHERE`来过滤数据：

```sql
SELECT *
FROM products
WHERE price > 1000;
```

这个查询会返回价格大于1000的所有手机记录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/3f096042-dda4-4a8a-a9b2-e6e25b9ccea0.webp)

*00:09:59 - 00:10:15*

`WHERE`是用来过滤普通查询结果的。比如：

```sql
SELECT *
FROM products
WHERE price > 1000;
```

这会筛选出价格大于1000元的手机记录。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/7880f686-c814-4bd3-94e1-06b95cc5621a.webp)

*00:10:16 - 00:10:43*

但如果我们想对`GROUP BY`分组后的结果加条件，`WHERE`就不适用了。比如，我们想筛选出平均评分大于7分的品牌，不能直接写：

```sql
SELECT brand, AVG(score)
FROM products
GROUP BY brand
WHERE AVG(score) > 7; -- 错误！
```

这个会报错，因为`WHERE`不能直接用来过滤聚合函数的结果。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/095e5813-8491-4303-8aac-5e82ae5f618e.webp)

*00:10:43 - 00:11:10*

要过滤`GROUP BY`后的结果，我们得用`HAVING`。比如：

```sql
SELECT brand, AVG(score) AS avg_score
FROM products
GROUP BY brand
HAVING AVG(score) > 7;
```

`HAVING`专门用来对分组后的结果加条件。这段代码会返回平均评分大于7分的品牌。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/05748d68-94aa-4d42-8a7e-978b817bec10.webp)

*00:11:10 - 00:11:40*

为什么不能用`WHERE`呢？因为`WHERE`是用来过滤原始数据的，而`HAVING`是用来过滤分组后聚合函数算出来的结果。简单说，`WHERE`在分组前用，`HAVING`在分组后用。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/7d34d5d0-9295-41cb-b3e2-3777252234b8.webp)

*00:11:43 - 00:12:07*

所以，正确的写法是用`HAVING`：

```sql
SELECT brand, AVG(score) AS avg_score
FROM products
GROUP BY brand
HAVING AVG(score) > 7;
```

这个查询会先按品牌分组，算出每组的平均评分，然后只返回平均评分大于7的品牌。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/512b4346-76b1-4699-b135-d1a86664ed0b.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/73777cf9-d4bb-4394-99a5-bf93c666fe00.webp)

*00:12:08 - 00:12:32*

如果我们想加更多条件，比如筛选平均价格低于4000元且平均评分大于7的品牌，可以用`HAVING`结合`AND`：

```sql
SELECT brand, ROUND(AVG(price), 2) AS avg_price, ROUND(AVG(score), 2) AS avg_score
FROM products
GROUP BY brand
HAVING AVG(price) < 4000 AND AVG(score) > 7;
```

这个查询会返回平均价格低于4000元且平均评分高于7的品牌。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/db9eb4f7-8735-42a8-9f85-2d350f242e5f.webp)

*00:12:32 - 00:12:36*

可以用`AND`来连接多个条件，也可以用`&&`符号，效果一样。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/1c358f42-caac-4353-8522-99a3080ad828.webp)

*00:12:38 - 00:13:01*

比如，我们想查平均价格低于4000元且平均评分高于7的品牌：

```sql
SELECT brand, ROUND(AVG(price), 2) AS avg_price, ROUND(AVG(score), 2) AS avg_score
FROM products
GROUP BY brand
HAVING AVG(price) < 4000 AND AVG(score) > 7;
```

这个查询会返回符合条件的品牌，比如可能是华为、vivo、OPPO等。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/b56469c1-f747-362d-0183-626649ca4f7c/0ff499d2-6805-45d5-a4b7-1d01aca38ae9.webp)

*00:13:01 - 00:13:35*

总结一下，`HAVING`是专门用来对`GROUP BY`分组后的结果加条件限制的。比如，上面这个查询会筛选出平均价格低于4000元且平均评分高于7的品牌。这个就是`HAVING`的用法。今天的课我们讲了三部分：聚合函数、`GROUP BY`分组，以及用`HAVING`对分组结果加条件。这些都是数据库查询中很实用的功能！

---