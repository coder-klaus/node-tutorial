# 611_day124_建表-DDL语句--DQL-聚合函数-多表查询-10_(掌握)数据流-DQL-对结果进行排序_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=31

## AI 好记

https://aihaoji.com/zh/dashboard/tasks/view/article/39a6e0b3-a6d8-47d2-4356-ff50e36414e5

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/39a6e0b3-a6d8-47d2-4356-ff50e36414e5/dc843494-a7ae-478c-83f0-edafea8b1f88.webp)

*00:00:00 - 00:00:30*

### 教学内容

**大白话讲解**：
之前讲了DQL的查询条件，能筛选出想要的数据。现在讲查询结果的排序。查出来的数据可能需要按某种顺序排列，比如按价格或评分排序，接下来演示怎么做。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/39a6e0b3-a6d8-47d2-4356-ff50e36414e5/0633f2cd-8cbc-4763-950a-a525e5c19493.webp)

*00:00:31 - 00:01:20*

### 教学内容

**大白话讲解**：
排序用`ORDER BY`关键字，后面跟要排序的字段。排序有两种方式：`ASC`（升序，从小到大，比如1,2,3），`DESC`（降序，从大到小，比如3,2,1）。想按字段升序排就用`ASC`，降序排就用`DESC`。接下来用例子演示。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/39a6e0b3-a6d8-47d2-4356-ff50e36414e5/19ef2ddf-6c61-46dc-827c-4c0b4a12468c.webp)

*00:01:20 - 00:01:43*

### 教学内容

**大白话讲解**：
比如查价格小于1000的手机，并按评分（`score`）降序排列，因为评分高的手机更吸引人。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/39a6e0b3-a6d8-47d2-4356-ff50e36414e5/b0824b5c-d28a-4afc-8f96-e7b26c5299cd.webp)

*00:01:44 - 00:02:14*

### 教学内容

**大白话讲解**：
查价格小于1000的手机并按评分降序排，SQL语句是先写`SELECT * FROM products WHERE price < 1000`，然后加`ORDER BY score DESC`。`score`是排序字段，`DESC`表示降序。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/39a6e0b3-a6d8-47d2-4356-ff50e36414e5/3ff93e7c-b2a2-4ef4-934d-fde128f40203.webp)

*00:02:14 - 00:03:13*

### 教学内容

**大白话讲解**：
运行`SELECT * FROM products WHERE price < 1000 ORDER BY score DESC`，结果是价格小于1000的手机，按评分从高到低排序，比如OPPO、华为、Vivo手机。也可以按其他字段排序，比如投票数（`vote_cnt`）。换成升序只要把`DESC`改成`ASC`。

### 代码示例

```sql
SELECT * FROM products WHERE price < 1000 ORDER BY score DESC;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/39a6e0b3-a6d8-47d2-4356-ff50e36414e5/6a8698dc-2533-49c8-b4b5-9b9f2a7af178.webp)
![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/39a6e0b3-a6d8-47d2-4356-ff50e36414e5/36627966-4ed0-4c12-8188-08c5f8b538a5.webp)

*00:03:13 - 00:03:35*

### 教学内容

**大白话讲解**：
改成`ASC`，写`ORDER BY score ASC`，结果按评分从小到大排序，比如4.8、5.4。排序很简单，选字段加`ASC`或`DESC`就行。

### 代码示例

```sql
SELECT * FROM products WHERE price < 1000 ORDER BY score ASC;
```

---