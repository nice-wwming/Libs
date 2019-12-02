var wwm = {

    /**
     * trim
     * 字符串去除空格
     * @param {string} str 
     * @param {1-4 number} type 
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
     * @param {1-5 number} type
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
            var itemText = ""
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
     * @param {number} count 
     * /需要循环的字符串
     * /循环次数
     */
    //repeatStr('123',3)
    //"result：123123123"
    repeatStr: function (str, count) {
        var text = '';
        for (var i = 0; i < count; i++) {
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
    }
}