var regTools = regTools || {};

// difine regular expression
// regular expressions via http://www.williamlong.info/archives/433.html
regTools.REs = {
    'Chinese': /^[\u4e00-\u9fa5]+$/,
    'doubleByte': /^[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]+$/,
    'email': /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    'url': /^[a-zA-z]+:\/\/[^\s]*$/,
    'mobile': /^1[34578]\d{9}$/, // for China
    'QQ': /^[1-9][0-9]{4,}$/, // Tencent QQ
    'zip': /^((0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]8[13456])\d{4}|99907[78]|86\d{3})$/, // for China
    'IDNumber': /^(\d{15}|\d{17}[Xx1-9])$/, // for China
    'IP': /^((([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5]))$/,

    // Numbers
    'positiveInteger': /^[1-9]\d*$/,
    'negativeInteger': /^-[1-9]\d*$/,
    'integer': /^(-?[1-9]\d*|0)$/,
    'nonnegativeInteger': /^([1-9]\d*|0)$/,
    'nonpositiveInteger': /^(-[1-9]\d*|0)$/,
    'positiveFloating': /^([1-9]\d*\.\d*|0?\.\d*[1-9]\d*)$/,
    'negativeFloating': /^-([1-9]\d*\.\d*|0?\.\d*[1-9]\d*)$/,
    'floating': /^-?([1-9]\d*\.\d*|0?\.\d*[1-9]\d*|0?\.0+|0)$/,
    'nonnegativeFloating': /^([1-9]\d*\.\d*|0?\.\d*[1-9]\d*|0?\.0+|0)$/,
    'nonpositiveFloating': /^((-([1-9]\d*\.\d*|0?\.\d*[1-9]\d*))|0?\.0+|0)$/,

    // special string
    'letter': /^[A-Za-z]+$/,
    'uppercase': /^[A-Z]+$/,
    'lowercase': /^[a-z]+$/,
    'letterOrNumber': /^[A-Za-z0-9]+$/
};

regTools.isChinese = function(str) {
    return regTools.REs['Chinese'].test(str);
};

regTools.isDoubleByte = function(str) {
    return regTools.REs['doubleByte'].test(str);
};

regTools.isEmail = function(str) {
    return regTools.REs['email'].test(str);
};

regTools.isUrl = function(str) {
    return regTools.REs['url'].test(str);
};

regTools.isMobile = function(str) {
    return regTools.REs['mobile'].test(str);
};

regTools.isQQ = function(str) {
    return regTools.REs['QQ'].test(str);
};

regTools.isZip = function(str) {
    return regTools.REs['zip'].test(str);
};

regTools.isIDNumber = function(str) {
    return regTools.REs['IDNumber'].test(str);
};

regTools.isIP = function(str) {
    return regTools.REs['IP'].test(str);
};

// numbers
regTools.isPositiveInteger = function(str) {
    return regTools.REs['positiveInteger'].test(str);
};

regTools.isNegativeInteger = function(str) {
    return regTools.REs['negativeInteger'].test(str);
};

regTools.isInteger = function(str) {
    return regTools.REs['integer'].test(str);
};

regTools.isNonnegativeInteger = function(str) {
    return regTools.REs['nonnegativeInteger'].test(str);
};

regTools.isNonpositiveInteger = function(str) {
    return regTools.REs['nonpositiveInteger'].test(str);
};

regTools.isPositiveFloating = function(str) {
    return regTools.REs['positiveFloating'].test(str);
};

regTools.isNegativeFloating = function(str) {
    return regTools.REs['negativeFloating'].test(str);
};

regTools.isFloating = function(str) {
    return regTools.REs['floating'].test(str);
};

regTools.isNonnegativeFloating = function(str) {
    return regTools.REs['nonnegativeFloating'].test(str);
};

regTools.isNonpositiveFloating = function(str) {
    return regTools.REs['nonpositiveFloating'].test(str);
};

// special string
regTools.isLetter = function(str) {
    return regTools.REs['letter'].test(str);
};

regTools.isUppercase = function(str) {
    return regTools.REs['uppercase'].test(str);
};

regTools.isLowercase = function(str) {
    return regTools.REs['lowercase'].test(str);
};

regTools.isLetterOrNumber = function(str) {
    return regTools.REs['letterOrNumber'].test(str);
};



// for test only
function check(str) {
    if(str == undefined) { return; }
    console.log('check isChinese(\'' + str + '\'): ' + regTools.isChinese(str));
    console.log('check isDoubleByte(\'' + str + '\'): ' + regTools.isDoubleByte(str));
    console.log('check isEmail(\'' + str + '\'): ' + regTools.isEmail(str));
    console.log('check isUrl(\'' + str + '\'): ' + regTools.isUrl(str));
    console.log('check isMobile(\'' + str + '\'): ' + regTools.isMobile(str));
    console.log('check isQQ(\'' + str + '\'): ' + regTools.isQQ(str));
    console.log('check isZip(\'' + str + '\'): ' + regTools.isZip(str));
    console.log('check isIDNumber(\'' + str + '\'): ' + regTools.isIDNumber(str));
    console.log('check isIP(\'' + str + '\'): ' + regTools.isIP(str));
    console.log('check isPositiveInteger(\'' + str + '\'): ' + regTools.isPositiveInteger(str));
    console.log('check isNegativeInteger(\'' + str + '\'): ' + regTools.isNegativeInteger(str));
    console.log('check isInteger(\'' + str + '\'): ' + regTools.isInteger(str));
    console.log('check isNonnegativeInteger(\'' + str + '\'): ' + regTools.isNonnegativeInteger(str));
    console.log('check isNonpositiveInteger(\'' + str + '\'): ' + regTools.isNonpositiveInteger(str));
    console.log('check isPositiveFloating(\'' + str + '\'): ' + regTools.isPositiveFloating(str));
    console.log('check isNegativeFloating(\'' + str + '\'): ' + regTools.isNegativeFloating(str));
    console.log('check isFloating(\'' + str + '\'): ' + regTools.isFloating(str));
    console.log('check isNonnegativeFloating(\'' + str + '\'): ' + regTools.isNonnegativeFloating(str));
    console.log('check isNonpositiveFloating(\'' + str + '\'): ' + regTools.isNonpositiveFloating(str));
    console.log('check isLetter(\'' + str + '\'): ' + regTools.isLetter(str));
    console.log('check isUppercase(\'' + str + '\'): ' + regTools.isUppercase(str));
    console.log('check isLowercase(\'' + str + '\'): ' + regTools.isLowercase(str));
    console.log('check isLetterOrNumber(\'' + str + '\'): ' + regTools.isLetterOrNumber(str));
}