(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{363:function(t,s,a){t.exports=a.p+"assets/img/regex.4fe466ae.jpg"},364:function(t,s,a){t.exports=a.p+"assets/img/regexper.748c4ada.png"},388:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"regexp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#regexp"}},[t._v("#")]),t._v(" REGEXP")]),t._v(" "),n("p",[n("img",{attrs:{src:a(363),alt:"banner"}})]),t._v(" "),n("blockquote",[n("p",[t._v("tips: 善用"),n("code",[t._v("Ctrl + F")]),t._v("输入关键字能提高查询的效率哟~")])]),t._v(" "),n("p",[t._v("自己收集了一套针对工作中所需的正则表达式. 多适用于字符串处理、表单验证、日志数据分析等场合，实用高效, 将长期维护。")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#REGEXP"}},[t._v("REGEXP")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E5%B8%B8%E8%A7%81%E6%AD%A3%E5%88%99%E6%A0%A1%E9%AA%8C"}},[t._v("常见正则校验")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81"}},[t._v("表单验证")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3"}},[t._v("网络相关")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F"}},[t._v("联系方式")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%8C%B9%E9%85%8D%E7%89%B9%E5%AE%9A%E6%95%B0%E5%AD%97"}},[t._v("匹配特定数字")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E5%85%B3"}},[t._v("字符串相关")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%8C%B9%E9%85%8D%E8%AF%AD%E7%B3%BB%E5%AD%97%E7%AC%A6%E8%8C%83%E5%9B%B4"}},[t._v("匹配语系字符范围")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E6%AD%A3%E5%88%99%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"}},[t._v("正则函数使用示例")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#replace"}},[t._v("replace")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#test"}},[t._v("test")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E6%AD%A3%E5%88%99%E6%8A%80%E5%B7%A7"}},[t._v("正则技巧")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E5%8F%8D%E5%90%91%E5%BC%95%E7%94%A8"}},[t._v("反向引用")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%BF%BD%E7%95%A5%E5%88%86%E7%B5%84"}},[t._v("忽略分組")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%89%8D%E7%9E%BB"}},[t._v("前瞻")])])])])])])]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"常见正则校验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见正则校验"}},[t._v("#")]),t._v(" 常见正则校验")]),t._v(" "),n("h3",{attrs:{id:"表单验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表单验证"}},[t._v("#")]),t._v(" 表单验证")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户名正则，4到16位（字母，数字，下划线，减号）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" userNameReg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a-zA-Z0-9_-]{4,16}$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必须拥有数字和特殊字符，并且在6 ~ 16位之间")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (?=.*[0-9]) - 断言一个字符串至少有一个数字;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (?=.*[!@#$%^&*]) - 断言一个字符串至少有一个特殊字符。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配邮箱地址")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mailReg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中国六位数的邮政编码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" postalCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\d{6}$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配15~18位身份证")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" IDCard "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$)|(^[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{2}$)/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配18位的新版身份证")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" IDCard_18 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 校验输入框是字符数为是否为 4~16 位(英文长度为1, 汉字长度为2)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" numName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a-zA-Z0-9]{4,16}$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mate "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[\\u4e00-\\u9fa5]/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aa'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"网络相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络相关"}},[t._v("#")]),t._v(" 网络相关")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ipv4地址正则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" IPReg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Reg Hex颜色正则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pattern "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// URL正则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" urlReg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^((https?|ftp|file):\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配JSON格式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\w+\\(({[^()]+})\\)$/")]),t._v("\n")])])]),n("p",[t._v("匹配"),n("code",[t._v("json")]),t._v("字符串")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\w+\\(({[^()]+})\\)$/")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" matches "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matches"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matches"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nres"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"联系方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系方式"}},[t._v("#")]),t._v(" 联系方式")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5-11位的腾讯qq号")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" qqReg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[1-9][0-9]{4,11}$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信号正则，6至20位，以字母开头，字母，数字，减号，下划线")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" qqReg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 国内常见")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" phone "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^1[3|5|8|9]\\d{9}$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 固定电话")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" telephone "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(0[0-9]{2})\\d{8}$|^(0[0-9]{3}(\\d{7,8}))$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"匹配特定数字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#匹配特定数字"}},[t._v("#")]),t._v(" 匹配特定数字")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配正整数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[1-9]\\d*$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配负整数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^-[1-9]\\d*$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配整数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^-?[1-9]\\d*$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配非负整数（正整数 + 0）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[1-9]\\d*|0$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配非正整数（负整数 + 0）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^-[1-9]\\d*|0$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配正浮点数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配负浮点数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配浮点数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配非负浮点数（正浮点数 + 0）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配非正浮点数（负浮点数 + 0）")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"字符串相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串相关"}},[t._v("#")]),t._v(" 字符串相关")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配由26个英文字母组成的字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[A-Za-z]+$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配由26个英文字母的大写组成的字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[A-Z]+$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配由26个英文字母的小写组成的字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a-z]+$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配由数字和26个英文字母组成的字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[A-Za-z0-9]+$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配由数字、26个英文字母或者下;划线组成的字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\w+$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配空白行的正则表达式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\n\\s*\\r/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配首尾空白字符的正则表达式")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\s*|\\s*$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rtrim "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配双字节字符(包括汉字在内, 一个双字节字符长度计2，ASCII字符计1)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[^\\x00-\\xff]/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"匹配语系字符范围"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#匹配语系字符范围"}},[t._v("#")]),t._v(" 匹配语系字符范围")]),t._v(" "),n("p",[t._v("用法:"),n("code",[t._v("/^[\\u4E00-\\u9FA5]+$/")]),t._v("(匹配简体中文)")]),t._v(" "),n("p",[n("code",[t._v("2E80～33FFh")]),t._v("：中日韩符号区。收容康熙字典部首、中日韩辅助部首、注音符号、日本假名、韩文音符，中日韩的符号、标点、带圈或带括符文数字、月份，以及日本的假名组合、单位、年号、月份、日期、时间等。")]),t._v(" "),n("p",[n("code",[t._v("3400～4DFFh")]),t._v("：中日韩认同表意文字扩充A区，总计收容6,582个中日韩汉字。")]),t._v(" "),n("p",[n("code",[t._v("4E00～9FFFh")]),t._v("：中日韩认同表意文字区，总计收容20,902个中日韩汉字。")]),t._v(" "),n("p",[n("code",[t._v("A000～A4FFh")]),t._v("：彝族文字区，收容中国南方彝族文字和字根。")]),t._v(" "),n("p",[n("code",[t._v("AC00～D7FFh")]),t._v("：韩文拼音组合字区，收容以韩文音符拼成的文字。")]),t._v(" "),n("p",[n("code",[t._v("F900～FAFFh")]),t._v("：中日韩兼容表意文字区，总计收容302个中日韩汉字。")]),t._v(" "),n("p",[n("code",[t._v("FB00～FFFDh")]),t._v("：文字表现形式区，收容组合拉丁文字、希伯来文、阿拉伯文、中日韩直式标点、小符号、半角符号、全角符号等。")]),t._v(" "),n("h2",{attrs:{id:"正则函数使用示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正则函数使用示例"}},[t._v("#")]),t._v(" 正则函数使用示例")]),t._v(" "),n("h3",{attrs:{id:"replace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#replace"}},[t._v("#")]),t._v(" replace")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用正则匹配中文字节, 将其替换为xx, 再获取字符串的长度就是完整的长度了.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[^\\x00-\\xff]/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"test"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" test")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配是否符合邮件规则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test返回一个布尔值, 表示是否匹配到制定字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mail "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'anran758@gmail.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果邮件格式正确的话, 就可以做点啥了(雾")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"正则技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正则技巧"}},[t._v("#")]),t._v(" 正则技巧")]),t._v(" "),n("h3",{attrs:{id:"反向引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反向引用"}},[t._v("#")]),t._v(" 反向引用")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如这里我们想让这个日期格式反转")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正则括号是一个分组, 下面的代码就捕获了三个分组")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过$分组符来转换位置, 来达到我们想要的结果")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-3-21'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(\\d{4})-(\\d{1,2})-(\\d{1,2})/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$2/$3/$1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "3/21/2018"')]),t._v("\n")])])]),n("h3",{attrs:{id:"忽略分組"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#忽略分組"}},[t._v("#")]),t._v(" 忽略分組")]),t._v(" "),n("p",[t._v("不希望捕获某些分组, 只需要分组内加上"),n("code",[t._v("?:")]),t._v("即可:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?:Byron).(ok)/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Byron-ok'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只匹配了 ok")]),t._v("\n")])])]),n("h3",{attrs:{id:"前瞻"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前瞻"}},[t._v("#")]),t._v(" 前瞻")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("名字")]),t._v(" "),n("th",[t._v("正則")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("正向前瞻")]),t._v(" "),n("td",[t._v("exp(?=assert)")])]),t._v(" "),n("tr",[n("td",[t._v("负向前瞻")]),t._v(" "),n("td",[t._v("exp(?!assert)")])])])]),t._v(" "),n("p",[t._v("正向前瞻就是匹配前者, 效验后者是否存在.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个正则的意思是: 匹配一个单词字符( [a-zA-Z0-9_] ), 然后验证后面是不是数字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果为: "X2*3". 因为3后面没有数字, 所以没有匹配到.')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a2*3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w(?=\\d)/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 结果为: "X2*X4X8"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 总的说就是")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a2*34v8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w(?=\\d)/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("负向前瞻则相反, 匹配前面, 替代后面")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a 是单词字符, 后面是数字, 因此没有匹配到")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 是单词字符, 后面不是数字, 被替换成X")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// * 不是单词字符 因此没有匹配到")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 是单词字符, 后面是数字, 因此没有匹配到")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4 是单词字符, 后面不是数字, 被替换成X")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v 是单词字符, 后面是数字, 因此没有匹配到")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8 是单词字符, 后面没有匹配到数字, 被替换成X")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果: aX*4XvX")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a2*34v8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\w(?!\\d)/g")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("hr"),t._v(" "),n("p",[t._v("可视化正则表达式, 可以试试"),n("a",{attrs:{href:"https://regexper.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("regexper"),n("OutboundLink")],1),t._v(", 让你看懂正则匹配的走向.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(364),alt:"regexper"}})]),t._v(" "),n("p",[t._v("如果有哪些正则规则有问题的, 可以在issue留言探讨~")])])}),[],!1,null,null,null);s.default=e.exports}}]);