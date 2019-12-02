# Libs
- 一款个人的js函数封装库

## 使用方法

```javascript
    wwwm.函数名(arguments)
    wwm[函数名](arguments)
```

**字符串方法**

* trim(string , type) 字符串去除空格
* changeCase(string , type) 字符串格式化
* repeatStr(string , count) 字符串循环复制
* replaceAll(str, AFindText, ARepText) 字符串替换
* checkType(str , type) 字符串检测|验证(手机号，大小写，英文，中文)
* checkPwd(str) 检测密码强度
* randomWord(count) 限定位数生成随机码
* throttle(fn, wait) 函数节流
* debounce(fn, wait) 函数防抖

**数组方法**

* removeRepeatArray(arr) 数组去重
* upsetArr(arr) 重置数组顺序
* maxArr(arr) 取数组最大值
* minArr(arr) 取数组最小值
* sumArr(arr) 数组求和
* covArr(arr) 数组求平均值
* randomOne(arr) 数组中随机取一个元素
* getEleCount(obj , ele) 数组或字符串中元素出现的次数
* getArrayNum(arr , n2 , n2) 取数组一个区间内的元素返回数组
* steamroller(arr) 数组扁平化

**常用函数**

* getFontSize() 字体屏幕适配rem(根元素字体最大为100px)
* getEndTime(endTime) 到某一个时间的倒计时
* randomColor() 随机产生颜色
* randomNumber(n1, n2) 随机返回一个n1-n2范围的数字,可带参数可不带参数
* filterParams(obj) 清除对象中值为空的属性
* setCookie(name, value, iDay) 设置cookie
* getCookie(name) 获取cookie
* removeCookie(name) 删除cookie
* ajax(options) ajax封装
* istype(o, type) 数据类型判断
* browserInfo(type) 手机类型判断

**DOM操作**

* hasClass(obj, classStr) 检测对象是否有那个类名
* addClass(obj, classStr) 添加类名
* removeClass(obj, classStr) 删除类名
* replaceClass(obj, newName, oldName) 替换类名
* siblings(obj, opt) 获取兄弟节点
* css(obj, json) 设置样式
* loadImg(obj, url, errorUrl, cb) 图片加载中设置


