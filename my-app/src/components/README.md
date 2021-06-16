
<!-- 组件介绍文档 -->
<!-- TOC -->

- [Avatar 头像](#avatar-头像)
- [Icon 图标](#icon-图标)
- [Pager 分页](#pager-分页)
- [ImageLoader 渐进图片](#imageloader-渐进图片)
- [Empty 空数据](#empty-空数据)

<!-- /TOC -->


# Avatar 头像
<img src="https://img-blog.csdnimg.cn/20210414112216874.png#pic_center" >

- **头像组件**

- **属性**

属性名   | 含义      | 类型    | 必填    | 默认值 |
-------- |----------|---------| ------- |-------|
width    | 图片宽度  | Number | 否       |   50  |
height   | 图片高度  | Number | 否       |   50  |
url      | 图片路径  | String | 是       |   无  |

 
# Icon 图标
<img src="http://mdrs.yuanjin.tech/img/20201130153927.png" alt="image-20201130153927256" style="zoom:50%;" />

- **图标组件**

- **属性** 

属性名   | 含义      | 类型    | 必填    | 默认值 |
--------|---------- |---------| ------- |-------|
type    | 图标类型  | String  |  是      |   无  |

 有效的图标类型：

<img src="http://mdrs.yuanjin.tech/img/20201130155542.jpg" alt="iShot2020-11-30下午03.47.09" style="zoom:33%;" />


# Pager 分页

<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;" />

- **分页组件** 

- **属性**
 
 属性名       | 含义         | 类型     | 必填    | 默认值 |
--------     |----------    |--------- | ------- |-------|
total        | 数据总量      | Number   | 否       |   0  |
limit        | 页数数据量      | Number   | 否       |   10  |
visibleNumber| 能见的页码量  | Number   | 否       |   10  |
current      | 当前页码数    | Number   | 否       |   1  | 

- **事件**

事件名       | 含义      | 参数类型    |  事件参数   | 
-------    |---------- |---------    | ---------- |
pagerChange | 改变页码   | Number      |  新的页码   |  

# ImageLoader 渐进图片

该组件可以实现一个渐进式图片

![alt tag](http://mdrs.yuanjin.tech/img/20201115132049.gif) 

- **属性**

 属性名       | 含义         | 类型     | 必填    | 默认值 |
--------      |----------    |--------- | -------  |-------|
placeholder   | 占位图片      | String   | 是       |   无  |
src           | 原图片地址    | String   | 是       |   无  |
duration      | 渐进时间      | Number   | 否       |   500  |


事件名       | 含义                   |    参数类型    |  事件参数   | 
-------   |----------                |---------       | ---------- |
load      | 原图片加载完成后抛出时间   | 无             |  无        | 


# Empty 空数据 

- 此组件在页面无数据时展示

![65ae1cddc85cc95ca065110da3cc577.png](https://i.loli.net/2021/04/15/zu83aNEWftsxcJH.png) 


- **属性** 

 属性名       | 含义             | 类型     | 必填    | 默认值  |
--------     |----------        |--------- | ------- |------- |
text        | 图标下方文字描述   | String   | 否       |   "无数据"  |