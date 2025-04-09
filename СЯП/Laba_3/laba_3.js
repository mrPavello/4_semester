var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BaseUser = /** @class */ (function () {
    function BaseUser() {
    }
    return BaseUser;
}());
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest(id, name) {
        return _super.call(this) || this;
    }
    Guest.prototype.getRole = function () {
        return "Guest";
    };
    Guest.prototype.getPermission = function () {
        return ["Просмотр контента"];
    };
    return Guest;
}(BaseUser));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name) {
        return _super.call(this) || this;
    }
    User.prototype.getRole = function () {
        return "User";
    };
    User.prototype.getPermission = function () {
        return ["Просмотр контента", "Добавление комментариев"];
    };
    return User;
}(BaseUser));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, name) {
        return _super.call(this) || this;
    }
    Admin.prototype.getRole = function () {
        return "Admin";
    };
    Admin.prototype.getPermission = function () {
        return ["Просмотр контента", "Добавление комментариев", "Удалениие комментариев", "Управление пользователями"];
    };
    return Admin;
}(BaseUser));
var guest = new Guest(0, "anonimus");
console.log(guest.getRole());
console.log(guest.getPermission());
var user = new User(1, "Lexy");
console.log(user.getRole());
console.log(user.getPermission());
var admin = new Admin(2, "Ivan");
console.log(admin.getRole());
console.log(admin.getPermission());
var HTMLReport = /** @class */ (function () {
    function HTMLReport(title, content) {
        this.title = title;
        this.content = content;
    }
    HTMLReport.prototype.generate = function () {
        return "<h1>".concat(this.title, "</h1><p>").concat(this.content, "</p>");
    };
    return HTMLReport;
}());
var JSONReport = /** @class */ (function () {
    function JSONReport(title, content) {
        this.title = title;
        this.content = content;
    }
    JSONReport.prototype.generate = function () {
        return JSON.stringify({ title: this.title, content: this.content });
    };
    return JSONReport;
}());
var report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate());
var report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate());
var Cache_ = /** @class */ (function () {
    function Cache_() {
        this.cache = [];
    }
    Cache_.prototype.add = function (key, value, ttl) {
        if (ttl <= 0)
            throw new Error("Время не может быть отрицательным.");
        this.cache.push({ key: key, value: value, ttl: ttl, timeStart: Date.now() });
    };
    Cache_.prototype.get = function (key) {
        this.clearExpired();
        var item = this.cache.find(function (item) { return item.key === key; });
        return item ? item.value : null;
    };
    Cache_.prototype.clearExpired = function () {
        var now = Date.now();
        this.cache = this.cache.filter(function (item) { return item.timeStart + item.ttl > now; });
    };
    return Cache_;
}());
var cache = new Cache_();
cache.add("price", 100, 5000);
setTimeout(function () {
    console.log(cache.get("price"));
}, 2000);
setTimeout(function () {
    console.log(cache.get("price"));
}, 6000);
//////////////////////////////////////////////////////////////////////////////////////
function createInstance(cls) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (cls.bind.apply(cls, __spreadArray([void 0], args, false)))();
}
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var p = createInstance(Product, "Телефон", 50000);
console.log(p);
////////////////////////////////////////////////////////////////////////////////////
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
var LogEntry;
function logEvent(event) {
    console.log(event);
}
logEvent([new Date(), LogLevel.INFO, "Система запущена"]);
////////////////////////////////////////////////////////////////////////////////////
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatus || (HttpStatus = {}));
function success(data) {
    return [HttpStatus.OK, data];
}
function error(message, status) {
    return [HttpStatus.BAD_REQUEST, null, "Не найдено"];
}
var res1 = success({ user: "Андрей" });
console.log(res1);
var res2 = error("Не найдено", HttpStatus.UNAUTHORIZED);
console.log(res2);
