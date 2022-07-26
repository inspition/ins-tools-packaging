/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * [链式取值]
 *
 * @param   {Function}   fn            [于函数中返回的取值对象]
 * @param   {any}  defaultValue  [可选默认返回值]
 *
 * @return  {[type]}                   [return description]
 */
function getValue(fn, defaultValue) {
    try {
        var result = fn();
        var nullish = [null, undefined];
        if (!result && nullish.includes(result))
            throw new Error("get fn() error: ".concat(result));
        return result;
    }
    catch (error) {
        // console.warn('get value error:', error)
        return defaultValue;
    }
}
/**
 * 链式访问器
 * @param {Any} result  [访问对象]
 * @param {String} path [访问链地址，例：'data.pageInfo.list.0']
 * @return {Any}
 */
function chainAccess(result, path) {
    var aPath = path.split(".");
    var newRes = result[aPath.shift() || ''];
    if (aPath.length && newRes)
        newRes = chainAccess(newRes, aPath.join("."));
    return newRes;
}
/**
 * 防抖
 *
 * @return  {[Function]}     [return 防抖加工后的新方法]
 */
function joinDebounce() {
    var timer = '';
    return function (func, ms) {
        if (ms === void 0) { ms = 500; }
        clearTimeout(timer);
        timer = setTimeout(func, ms);
    };
}
/**
 * 生成并行异步请求列表
 *
 * @param   {[Promise]}  apis  [Promise.all([...])]
 *
 * @return  {[Promise]}        [return description]
 */
function genrateParallels(apis) {
    var _this = this;
    var parallels = apis.map(function (api) { return (function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); })(); });
    return parallels;
}
/**
 * API then回调处理
 * @param {Object} res  [resolve参数]
 */
function $thenBack(res) {
    var data = res === null || res === void 0 ? void 0 : res.data;
    var isError = !(data === null || data === void 0 ? void 0 : data.success);
    if (isError)
        throw data;
    return data;
}
/**
 * API catch回调处理
 * @param {String} errPrefix  [自定义错误前缀]
 */
function $catchBack(errPrefix) {
    if (errPrefix === void 0) { errPrefix = 'request exception - '; }
    // @ts-ignore
    var t = this;
    return function (err) {
        var _a = [
            __assign({}, err),
            errPrefix + ((err === null || err === void 0 ? void 0 : err.msg) || (err === null || err === void 0 ? void 0 : err.errorMsg) || ''),
        ], backData = _a[0], errorMsg = _a[1];
        t.$message.error(errorMsg);
        return backData;
    };
}
/**
 * 接口请求封装
 *
 * @param   {[Promise]}  api  [接口]
 *
 * @return  {[Promise]}       [回调处理后的新接口]
 */
function apiReq(api) {
    // @ts-ignore
    var _a = this, $thenBack = _a.$thenBack, $catchBack = _a.$catchBack;
    // @ts-ignore
    return function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return api.apply(void 0, params).then($thenBack).catch($catchBack());
    };
}
/**
 * 文件下载
 *
 * @param   {[any]}  res  接口回调
 *
 * @return  {[type]}       [return description]
 */
function $downloadFile(res) {
    var _a;
    var _b = res || {}, data = _b.data, headers = _b.headers;
    var isError = !data;
    if (isError)
        throw res;
    var _c = headers || {}, contDesc = _c["content-disposition"], contType = _c["content-type"];
    var type = contType === null || contType === void 0 ? void 0 : contType.split(';').find(function (v) { return v.includes('application'); });
    var fileName = (_a = contDesc === null || contDesc === void 0 ? void 0 : contDesc.split(';').find(function (v) { return v.includes('filename='); })) === null || _a === void 0 ? void 0 : _a.replace('filename=', '');
    var decodeName = fileName ? decodeURIComponent(fileName) : '气象导出';
    var _d = [
        new Blob([data], { type: type }),
        document.createElement("a")
    ], blob = _d[0], eLink = _d[1];
    eLink.download = decodeName;
    eLink.style.display = "none";
    eLink.href = URL.createObjectURL(blob);
    document.body.appendChild(eLink);
    eLink.click();
    URL.revokeObjectURL(eLink.href);
    document.body.removeChild(eLink);
}
/**
 * item字段映射
 *
 * @param   {[Object]}  fieldsMap  [传入字段映射表，返回返]
 *
 * @return  {[Function]}             [return 映射转换]
 */
function itemFiledsMap(fieldsMap) {
    return function (item) {
        if (item === void 0) { item = {}; }
        var formatItem = {};
        Object.entries(fieldsMap).forEach(function (_a) {
            var key = _a[0], path = _a[1];
            Object.defineProperty(formatItem, key, {
                value: chainAccess(item, path),
                writable: true,
                enumerable: true,
                configurable: true
            });
            // formatItem[key] = chainAccess(item, path);
        });
        return formatItem;
    };
}
/**
 * API工具组合
 *
 * @var {[type]}
 */
var apiTools = { apiReq: apiReq, $thenBack: $thenBack, $catchBack: $catchBack, $downloadFile: $downloadFile };
// /**
//  * 请求提交定制确认
//  * @param {String} tip  [确认提示语]
//  * @param {Function} thenBack  [确认后执行回调]
//  */
// export function $confirmReq(tip = '', thenBack = () => null) {
//   this.$confirm(tip, '提示', {
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//   }).then(res => {
//     setTimeout(() => thenBack(res), 300) // 避免遮罩层关闭时与下一个弹窗开启冲突
//   }).catch(() => null)
// }

export { $catchBack, $downloadFile, $thenBack, apiReq, apiTools, chainAccess, genrateParallels, getValue, itemFiledsMap, joinDebounce, random };
