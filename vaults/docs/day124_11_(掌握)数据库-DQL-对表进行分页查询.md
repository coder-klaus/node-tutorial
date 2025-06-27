# 612_day124\_建表-DDL语句--DQL-聚合函数-多表查询-11\_(掌握)数据库-DQL-对表进行分页查询\_1080p

## 视频来源

https://www.bilibili.com/video/BV1814y1X7Xr?p=32

## AI好记

https://aihaoji.com/zh/dashboard/tasks/view/article/dc51cf0c-92c5-6fb6-0660-425a27d50293

## 正文内容

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/d25bb3e0-fcbd-413e-8095-7e42c933be46.webp)*00:00:00 - 00:00:30*

### 教学内容

**大白话讲解**：\
之前讲了用`ORDER BY`对查询结果排序，比如按价格或评分排。现在讲分页查询。数据量大的时候，比如上万条数据，不可能一次全查出来显示，得分成一页一页显示，这就是分页查询。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/60cd4b46-98d6-4e04-b859-3f97114e2580.webp)

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/99359988-6396-47c0-8b8c-425f607dac51.webp)*00:00:30 - 00:00:59*

### 教学内容

**大白话讲解**：\
实际开发中，数据可能有成千上万条，一次查太多不现实，所以要分页。分页通常用两个参数：`offset`（偏移，从第几条开始）和`size`（每页拿多少条）。这些在前端或小程序开发中也讲过。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/7718b82f-8116-48be-9d3c-e32383ccaba5.webp)*00:00:59 - 00:01:18*

### 教学内容

**大白话讲解**：\
分页查询在前端项目或小程序开发中提到过，比如语音开发时也用过。MySQL里分页查询的逻辑跟这些一样，都是控制查哪些数据。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/102c266a-1245-466e-92ef-5b783376dcab.webp)*00:01:18 - 00:01:33*

### 教学内容

**大白话讲解**：\
MySQL里分页查询跟前端分页类似。当数据量很大时，一次全查出来不现实，得分页查。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/a0b1da3a-251d-4d40-bbd8-2e37ad62cc09.webp)*00:01:33 - 00:02:03*

### 教学内容

**大白话讲解**：\
分页查询用`LIMIT`和`OFFSET`关键字。`LIMIT`指定每页拿多少条数据（相当于`size`），`OFFSET`指定从第几条开始（偏移量）。比如`LIMIT 2 OFFSET 0`是拿前两条，`LIMIT 2 OFFSET 2`是从第3条开始拿两条。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/fd15b50a-b045-4a5b-ab1f-404bac270d16.webp)*00:02:03 - 00:02:33*

### 教学内容

**大白话讲解**：\
接下来演示分页查询，先不加条件，直接从`products`表查数据，用`LIMIT`和`OFFSET`控制分页。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/d823ceba-5611-468e-87e1-5e58b5f4c8ce.webp)*00:02:36 - 00:03:20*

### 教学内容

**大白话讲解**：\
分页查询用`LIMIT`限制查几条数据，比如`LIMIT 2`就是查2条。如果不写`OFFSET`，默认从第1条（偏移0）开始查。

### 代码示例

```sql
SELECT * FROM products LIMIT 2;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/26ca22c9-b138-4549-b6fc-df4eb84af499.webp)

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/eca8274d-72f5-4ea7-b8f0-4c62066cfabc.webp)*00:03:23 - 00:03:52*

### 教学内容

**大白话讲解**：\
运行`LIMIT 2`，结果是从第1条数据开始（比如华为Nova53），查2条。如果不写`OFFSET`，默认偏移0条，查前2条。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/f2f7eb6f-1bdf-4928-a0da-abac0bdeb443.webp)*00:03:52 - 00:04:19*

### 教学内容

**大白话讲解**：\
加`OFFSET`，比如`LIMIT 2 OFFSET 4`，就是跳过前4条，从第5条开始查2条。默认不写`OFFSET`相当于`OFFSET 0`。

### 代码示例

```sql
SELECT * FROM products LIMIT 2 OFFSET 4;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/8e199d16-aafb-412e-b125-61c7748a6bc3.webp)*00:04:48 - 00:05:18*

### 教学内容

**大白话讲解**：\
`LIMIT 2 OFFSET 4`查出来的是第5、6条数据（比如OPPO A3）。`LIMIT`是`size`（查几条），`OFFSET`是偏移量（从第几条开始）。这在前端分页很常见。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/66c3708d-cb0d-4745-b913-740ebfa06cd1.webp)*00:05:18 - 00:05:56*

### 教学内容

**大白话讲解**：\
分页查询就用`LIMIT`和`OFFSET`。还有另一种写法：`LIMIT offset, size`，比如`LIMIT 4, 2`，表示跳过4条查2条，但这种写法阅读性差，不推荐。

### 代码示例

```sql
SELECT * FROM products LIMIT 4, 2;
```

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/2d261bf0-a772-4095-98ac-fff0e74d1cbd.webp)

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/a1db7ba3-0e90-4559-8752-da0f80316a6b.webp)*00:05:56 - 00:06:26*

### 教学内容

**大白话讲解**：\
`LIMIT 4, 2`跟`LIMIT 2 OFFSET 4`效果一样，都是跳过4条查2条，但前者把偏移量写在前面，容易混淆，建议用`LIMIT size OFFSET offset`的写法。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/27b8a393-e33a-4416-9650-95406cd5e6fa.webp)

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/c0a56592-a3b2-402a-b2d5-b6d0df66f936.webp)*00:06:27 - 00:06:56*

### 教学内容

**大白话讲解**：\
分页查询就是用`LIMIT`和`OFFSET`控制查哪些数据，前端常传这两个参数给后端。这节课的DQL内容讲完了，下午会讲更高级的内容，比如多表查询。

---

![](https://pic.aihaoji.com/user_cf07d812-ef26-8550-a50d-768cff660798/img/20250626/dc51cf0c-92c5-6fb6-0660-425a27d50293/ff3751d9-d88f-45d7-9b08-aa186630a475.webp)*00:06:56 - 00:06:57*

### 教学内容

**大白话讲解**：\
分页查询讲完了，接下来保存视频。

---