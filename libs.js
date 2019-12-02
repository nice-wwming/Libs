let wwm = {

    /**
     * trim
     * 字符串去除空格
     * @param {string} str 
     * @param {1-4 Number} type 
     * /type
     * 1: 所有空格
     * 2: 前后空格
     * 3: 前空格
     * 4: 后空格
     */
    //trim('  1235asd',1)
    //result：1235asd
    trim: function (str, type) {
        switch (type) {
            case 1:
                return str.replace(/\s+/g, "");
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, "");
            case 3:
                return str.replace(/(^\s*)/g, "");
            case 4:
                return str.replace(/(\s*$)/g, "");
            default:
                return str;
        }
    },

    /**
     * changeCase 
     * 字符串格式化
     * @param {string} str 
     * @param {1-5 Number} type
     * /type
     * 1: 首字母大写
     * 2: 首字母小写
     * 3: 大小写转换
     * 4: 全部大写
     * 5: 全部小写 
     */
    //changeCase('asdasd',1)
    //result：Asdasd
    changeCase: function (str, type) {
        function ToggleCase(str) {
            let itemText = ""
            str.split("").forEach(
                function (item) {
                    if (/^([a-z]+)/.test(item)) {
                        itemText += item.toUpperCase();
                    } else if (/^([A-Z]+)/.test(item)) {
                        itemText += item.toLowerCase();
                    } else {
                        itemText += item;
                    }
                });
            return itemText;
        }
        switch (type) {
            case 1:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

                });
            case 2:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
                });
            case 3:
                return ToggleCase(str);
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }
    },

    /**
     * repeatStr
     * 字符串循环复制
     * @param {string} str 
     * @param {Number} count 
     * /需要循环的字符串
     * /循环次数
     */
    //repeatStr('123',3)
    //"result：123123123"
    repeatStr: function (str, count) {
        let text = '';
        for (let i = 0; i < count; i++) {
            text += str;
        }
        return text;
    },

    /**
     * replaceAll
     * 字符串替换
     * @param {string} str 
     * @param {string} AFindText 
     * @param {string} ARepText 
     * /字符串
     * /要替换的字符或者正则表达式（不要写g）
     * /替换内容
     */
    //replaceAll('这里是北京，中国首都 ,'北京','上海')
    //result："这里是上海，中国首都 "
    replaceAll: function (str, AFindText, ARepText) {
        raRegExp = new RegExp(AFindText, "g");
        return str.replace(raRegExp, ARepText);
    },

    /**
     * checkType
     * 检测字符串
     * @param {string} str 
     * @param {string} type 
     * /需要检测的字符串
     * /type
     * email 邮箱
     * phone 手机号
     * tel 电话0373-
     * number 数字
     * english 英文
     * chinese 中文
     * lower 小写字母
     * upper 大写字母
     */
    //checkType('165226226326','phone')
    //result：false
    //可以根据需要扩展
    checkType: function (str, type) {
        switch (type) {
            case 'email':
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
            case 'phone':
                return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
            case 'tel':
                return /^(0\d{2,4}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'number':
                return /^[0-9]$/.test(str);
            case 'english':
                return /^[a-zA-Z]+$/.test(str);
            case 'text':
                return /^\w+$/.test(str);
            case 'chinese':
                return /^[\u4E00-\u9FA5]+$/.test(str);
            case 'lower':
                return /^[a-z]+$/.test(str);
            case 'upper':
                return /^[A-Z]+$/.test(str);
            default:
                return true;
        }
    },

    /**
     * checkPwd
     * 检测密码强度
     * @param {string} str 
     * 字符串长度大于6,小写字母,大写字母,数字,以及特殊字符.|@|#|!|-|_ 各加一级强度
     */
    //checkPwd('12asdASAD')
    //result：3(强度等级为3)
    checkPwd: function (str) {
        let nowLv = 0;
        if (str.length < 6) {
            return nowLv
        }
        if (/[0-9]/.test(str)) {
            nowLv++
        }
        if (/[a-z]/.test(str)) {
            nowLv++
        }
        if (/[A-Z]/.test(str)) {
            nowLv++
        }
        if (/[\.|-|_|@|#|!]/.test(str)) {
            nowLv++
        }
        return nowLv;
    },

    /**
     * randomWord
     * 限定位数生成随机码
     * @param {Number} count 
     * /count 2-36
     */
    //randomWord(14)
    //result："83vhdx10rmjkyb9"

    randomWord: function (count) {
        return Math.random().toString(count).substring(2);
    },

    /**
     * removeRepeatArray
     * 数组去重
     * @param {Array} arr 
     */
    removeRepeatArray: function (arr) {
        // return arr.filter(function (item, index, self) {
        //     return self.indexOf(item) === index;
        // });
        //es6
        return Array.from(new Set(arr))
    },

    /**
     * upsetArr
     * 重置数组顺序
     * @param {Array} arr 
     */
    upsetArr: function (arr) {
        return arr.sort(function () {
            return Math.random() - 0.5
        });
    },

    /**
     * maxArr
     * 数组最大值
     * @param {Array} arr 
     */
    maxArr: function (arr) {
        return Math.max.apply(null, arr);
    },

    /**
     * minArr
     * 数组最小值
     * @param {Array} arr
     */
    minArr: function (arr) {
        return Math.min.apply(null, arr);
    },

    /**
     * sumArr
     * 数组求和
     * @param {Array} arr 
     */
    sumArr: function (arr) {
        return arr.reduce(function (pre, cur) {
            return pre + cur
        })
    },

    /**
     * coletr
     * 数组平均值
     * @param {Array} arr 
     */
    coletr: function (arr) {
        return this.sumArr(arr) / arr.length;
    },


    /**
     * randomOne
     * 数组中随机取出一个元素
     * @param {Array} arr 
     */
    randomOne: function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    /**
     * getEleCount
     * 数组（字符串）一个元素出现的次数
     * @param {string|Array} obj 
     * @param {*} ele 
     */
    //getEleCount('asd56+asdasdwqe','a')
    //result：3
    //getEleCount([1,2,3,4,5,66,77,22,55,22],22)
    //result：2
    getEleCount: function (obj, ele) {
        let num = 0;
        for (let i = 0, len = obj.length; i < len; i++) {
            if (ele === obj[i]) {
                num++;
            }
        }
        return num;
    },

    /**
     * getArrayNum
     * 取数组一个区间内的元素返回数组
     * @param {Array} arr 
     * @param {Number} n1 
     * @param {Number} n2 
     * 不传n2,默认返回从n1到数组结束的元素
     */
    //getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
    //result：[5, 6, 7, 8, 9]
    //getArrayNum([0,1,2,3,4,5,6,7,8,9],2)
    //result：[2, 3, 4, 5, 6, 7, 8, 9]
    getArrayNum: function (arr, n1, n2) {
        let arr1 = arr.slice(n1, n2);
        return arr1;
    },

    /**
     * steamroller
     * 数组扁平化
     * @param {Array} arr 
     */
    steamroller: function (arr) {
        let newArr = [],
            _this = this;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                // 如果是数组，调用(递归)steamroller 将其扁平化
                // 然后再 push 到 newArr 中
                newArr.push.apply(newArr, _this.steamroller(arr[i]));
            } else {
                // 不是数组直接 push 到 newArr 中
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },

    /**
     * getFontSize
     * 字体屏幕适配rem
     */
    //适配rem
    getFontSize: function () {
        let doc = document,
            win = window;
        let docEl = doc.documentElement
        let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
        let recalc = function () {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //如果屏幕大于750（750是根据我效果图设置的，具体数值参考效果图），就设置clientWidth=750，防止font-size会超过100px
            if (clientWidth > 750) {
                clientWidth = 750
            }
            //设置根元素font-size大小
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
        //屏幕大小改变，或者横竖屏切换时，触发函数
        win.addEventListener(resizeEvt, recalc, false);
        //文档加载完成时，触发函数
        doc.addEventListener('DOMContentLoaded', recalc, false);
    },

    /**
     * getEndTime
     * 到某一个时间的倒计时
     * @param {Date} endTime 
     */
    //getEndTime('2019/6/22 16:0:0')
    //result："剩余时间6天 2小时 28 分钟20 秒"
    getEndTime: function (endTime) {
        let startDate = new Date(); //开始时间，当前时间
        let endDate = new Date(endTime); //结束时间，需传入时间参数
        let t = endDate.getTime() - startDate.getTime(); //时间差的毫秒数
        let d = 0,
            h = 0,
            m = 0,
            s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 3600 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
            return "剩余时间" + d + "天 " + h + "小时 " + m + " 分钟" + s + " 秒";

        } else {
            return '时间错误!!!';
        }
    },

    /**
     * randomColor
     * 随机产生颜色
     */
    randomColor: function () {
        return '#' + Math.random().toString(16).substring(2).substr(0, 6);
    },

    /**
     * randomNumber
     * 随机返回一个范围的数字
     * @param {Number} n1 
     * @param {Number} n2 
     */
    randomNumber: function (n1, n2) {
        //randomNumber(5,10)
        //返回5-10的随机整数，包括5，10
        if (arguments.length === 2) {
            return Math.round(n1 + Math.random() * (n2 - n1));
        }
        //randomNumber(10)
        //返回0-10的随机整数，包括0，10
        else if (arguments.length === 1) {
            return Math.round(Math.random() * n1)
        }
        //randomNumber()
        //返回0-255的随机整数，包括0，255
        else {
            return Math.round(Math.random() * 255)
        }
    },

    /**
     * filterParams
     * 清除对象中值为空的属性
     * @param {]Object} obj 
     */
    //filterParams({a:"",b:null,c:"010",d:123})
    //Object {c: "010", d: 123}
    filterParams: function (obj) {
        let _newPar = {};
        for (let key in obj) {
            if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
                _newPar[key] = obj[key];
            }
        }
        return _newPar;
    },

    /**
     * setCookie
     * 设置cookie
     * @param {String} name 
     * @param {Any} value 
     * @param {Date} iDay 
     */
    setCookie: function (name, value, iDay) {
        let oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + '=' + value + ';expires=' + oDate;
    },

    /**
     * getCookie
     * 获取cookie
     * @param {String} name 
     */
    getCookie: function (name) {
        let arr = document.cookie.split('; ');
        for (let i = 0; i < arr.length; i++) {
            let arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
        return '';
    },

    /**
     * removeCookie
     * 删除cookie
     * @param {*} name 
     */
    removeCookie: function (name) {
        this.setCookie(name, 1, -1);
    },

    /**
     * hasClass
     * 检测对象是否有那个类名
     * @param {Element} obj 
     * @param {String} classStr 
     */
    hasClass: function (obj, classStr) {
        if (obj.className && this.trim(obj.className, 1) !== "") {
            let arr = obj.className.split(/\s+/);
            return (arr.indexOf(classStr) == -1) ? false : true;
        } else {
            return false;
        }

    },

    /**
     * addClass
     * 添加类名
     * @param {Element} obj 
     * @param {String} classStr 
     */
    addClass: function (obj, classStr) {
        if ((this.istype(obj, 'array') || this.istype(obj, 'elements')) && obj.length >= 1) {
            for (let i = 0, len = obj.length; i < len; i++) {
                if (!this.hasClass(obj[i], classStr)) {
                    obj[i].className += " " + classStr;
                }
            }
        } else {
            if (!this.hasClass(obj, classStr)) {
                obj.className += " " + classStr;
            }
        }
    },

    /**
     * removeClass
     * 删除类名
     * @param {Element} obj 
     * @param {String} classStr 
     */
    removeClass: function (obj, classStr) {
        if ((this.istype(obj, 'array') || this.istype(obj, 'elements')) && obj.length > 1) {
            for (let i = 0, len = obj.length; i < len; i++) {
                if (this.hasClass(obj[i], classStr)) {
                    let reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
                    obj[i].className = obj[i].className.replace(reg, '');
                }
            }
        } else {
            if (this.hasClass(obj, classStr)) {
                let reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
                obj.className = obj.className.replace(reg, '');
            }
        }
    },

    /**
     * replaceClass
     * 替换类名
     * @param {Element} obj 
     * @param {String} newName 
     * @param {String} oldName 
     */
    replaceClass: function (obj, newName, oldName) {
        this.removeClass(obj, oldName);
        this.addClass(obj, newName);
    },

    /**
     * siblings
     * 获取兄弟节点
     * @param {Element} obj 
     * @param {*} opt 
     * /可传可不传的参数
     */
    siblings: function (obj, opt) {
        let a = []; //定义一个数组，用来存o的兄弟元素
        let p = obj.previousSibling;
        while (p) { //先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行
            if (p.nodeType === 1) {
                a.push(p);
            }
            p = p.previousSibling //最后把上一个节点赋给p
        }
        a.reverse() //把顺序反转一下 这样元素的顺序就是按先后的了
        let n = obj.nextSibling; //再取o的弟弟
        while (n) { //判断有没有下一个弟弟结点
            if (n.nodeType === 1) {
                a.push(n);
            }
            n = n.nextSibling;
        }
        if (opt) {
            let _opt = opt.substr(1);
            let b = []; //定义一个数组，用于储存过滤a的数组
            if (opt[0] === '.') {
                b = a.filter(function (item) {
                    return item.className === _opt
                });
            } else if (opt[0] === '#') {
                b = a.filter(function (item) {
                    return item.id === _opt
                });
            } else {
                b = a.filter(function (item) {
                    return item.tagName.toLowerCase() === opt
                });
            }
            return b;
        }
        return a;
    },

    /**
     * css
     * 设置样式
     * @param {Element} obj 
     * @param {Json} json 
     */
    //设置样式
    css: function (obj, json) {
        for (let attr in json) {
            obj.style[attr] = json[attr];
        }
    },

    /**
     * ajax
     * ajax封装
     * @param {Json} options 
     * {string}type http连接的方式，包括POST和GET两种方式
     * {string}url 发送请求的url
     * {object}data 发送的参数，格式为对象类型
     * {function}success ajax发送并接收成功调用的回调函数
     */
    ajax: function (options) {
        var xhr = null;
        var params = formsParams(options.data);
        //创建对象
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // 连接
        if (options.type == "GET") {
            xhr.open(options.type, options.url + "?" + params, options.async);
            xhr.send(null)
        } else if (options.type == "POST") {
            xhr.open(options.type, options.url, options.async);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                options.success(xhr.responseText);
            }
        }

        function formsParams(data) {
            var arr = [];
            for (var prop in data) {
                arr.push(prop + "=" + data[prop]);
            }
            return arr.join("&");
        }
    },

    /**
     * loadImg
     * 图片加载中
     * @param {Element} obj 
     * @param {Url} url 
     * @param {Url} errorUrl 
     * @param {function} cb 
     */
    loadImg: function (obj, url, errorUrl, cb) {
        let oImg = new Image(),
            _this = this;
        oImg.src = url;
        oImg.onload = function () {
            obj.src = oImg.src;
            if (cb && _this.istype(cb, 'function')) {
                cb(obj);
            }
        }
        oImg.onerror = function () {
            obj.src = errorUrl;
            if (cb && _this.istype(cb, 'function')) {
                cb(obj);
            }
        }
    },

    /**
     * istype
     * 数据类型判断
     * @param {Any} o 
     * @param {Type} type 
     */
    istype: function (o, type) {
        if (type) {
            let _type = type.toLowerCase();
        }
        switch (_type) {
            case 'string':
                return Object.prototype.toString.call(o) === '[object String]';
            case 'number':
                return Object.prototype.toString.call(o) === '[object Number]';
            case 'boolean':
                return Object.prototype.toString.call(o) === '[object Boolean]';
            case 'undefined':
                return Object.prototype.toString.call(o) === '[object Undefined]';
            case 'null':
                return Object.prototype.toString.call(o) === '[object Null]';
            case 'function':
                return Object.prototype.toString.call(o) === '[object Function]';
            case 'array':
                return Object.prototype.toString.call(o) === '[object Array]';
            case 'object':
                return Object.prototype.toString.call(o) === '[object Object]';
            case 'nan':
                return isNaN(o);
            case 'elements':
                return Object.prototype.toString.call(o).indexOf('HTML') !== -1
            default:
                return Object.prototype.toString.call(o)
        }
    },

    /**
     * browserInfo
     * 手机类型判断
     * @param {Type} type 
     * /type android|iphone|ipad|weixin|
     */
    //手机类型判断
    browserInfo: function (type) {
        switch (type) {
            case 'android':
                return navigator.userAgent.toLowerCase().indexOf('android') !== -1
            case 'iphone':
                return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
            case 'ipad':
                return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1
            case 'weixin':
                return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
            default:
                return navigator.userAgent.toLowerCase()
        }
    },

    /**
     * throttle
     * 函数节流
     * @param {function} fn 
     * @param {Time} wait 
     */
    throttle: function (fn, wait) {
        var timer = null;
        return function () {
            var context = this;
            var args = arguments;
            if (!timer) {
                timer = setInterval(function () {
                    fn.apply(context, args);
                    timer = null;
                }, wait)
            }
        }
    },

    /**
     * debounce
     * 函数防抖
     * @param {function} func 
     * @param {Time} wait 
     */
    debounce: function (fn, wait) {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn.apply(context, args)
            }, wait);
        }
    }
}