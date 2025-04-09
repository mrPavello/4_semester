abstract class BaseUser {
  constructor(public id: number, public name: string) {}
  
  abstract getRole() : string;
}

class Guest extends BaseUser {
  constructor(id: number, name: string) {
    super(id, name);
  }

  getRole(): string {
    return "Guest";
  }

  getPermission(): Array<string> {
    return ["Просмотр контента"];
  }
} 

class User extends BaseUser {
  constructor(id: number, name: string) {
    super(id, name);
  }

  getRole(): string {
    return "User";
  }

  getPermission(): Array<string> {
    return ["Просмотр контента", "Добавление комментариев"];
  }
} 

class Admin extends BaseUser {
  constructor(id: number, name: string) {
    super(id, name);
  }

  getRole(): string {
    return "Admin";
  }

  getPermission(): Array<string> {
    return ["Просмотр контента", "Добавление комментариев", "Удалениие комментариев", "Управление пользователями"];
  }
} 

let guest: Guest = new Guest(0, "anonimus");
console.log(guest.getRole());
console.log(guest.getPermission());

let user: User = new User(1, "Lexy");
console.log(user.getRole());
console.log(user.getPermission());

let admin: Admin= new Admin(2, "Ivan");
console.log(admin.getRole());
console.log(admin.getPermission());


////////////////////////////////////////////


interface IReport {
  title: string;
  content: string;

  generate(): string;
}

class HTMLReport implements IReport {
  constructor(public title: string, public content: string) {}

  generate(): string {
    return `<h1>${this.title}</h1><p>${this.content}</p>`;
  }
}

class JSONReport implements IReport {
  constructor(public title: string, public content: string) {}

  generate(): string {
    return JSON.stringify({ title: this.title, content: this.content });
  }
}

const report1 = new HTMLReport("Отчет 1", "Содержание отчета");
console.log(report1.generate());

const report2 = new JSONReport("Отчет 2", "Содержание отчета");
console.log(report2.generate());

/////////////////////////////////////////////////////////////////////////

type objCache<T> = {key: string, value: T, ttl: number, timeStart: number};
class Cache_<T> {
  public cache: Array<objCache<T>>;
  
  constructor() {
    this.cache = [];
  }

  add(key: string, value: T, ttl: number) {
    if (ttl <= 0) throw new Error("Время не может быть отрицательным.");
    this.cache.push({key, value, ttl, timeStart: Date.now()});
  }

  get(key: string) : T | null {
    this.clearExpired();
    const item = this.cache.find((item) => item.key === key);
    return item ? item.value : null;
  }

  private clearExpired() {
    const now = Date.now();
    this.cache = this.cache.filter((item) => item.timeStart + item.ttl > now);
  }
}

const cache = new Cache_<number>();
cache.add("price", 100, 5000);
setTimeout(() => {
  console.log(cache.get("price"));
}, 2000);
setTimeout(() => {
  console.log(cache.get("price"));
}, 6000);

//////////////////////////////////////////////////////////////////////////////////////

function createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T {
  return new cls(...args);
}

class Product {
  constructor(public name: string, public price: number) {}
}

const p = createInstance(Product, "Телефон", 50000);
console.log(p);

////////////////////////////////////////////////////////////////////////////////////

enum LogLevel {
  INFO = 1,
  WARNING,
  ERROR
}

let LogEntry: [Date, LogLevel, string];

function logEvent(event: typeof LogEntry) {
  console.log(event);
}

logEvent([new Date(), LogLevel.INFO, "Система запущена"]);

////////////////////////////////////////////////////////////////////////////////////

enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500
}

type ApiResponse<T> = [status: HttpStatus, data: T | null, error?: string];

function success<T>(data: T): ApiResponse<T> {
  return [HttpStatus.OK, data];
}

function error(message: string, status: HttpStatus): ApiResponse<null> {
  return [HttpStatus.BAD_REQUEST, null, "Не найдено"];
}

const res1 = success({user: "Андрей"});
console.log(res1);

const res2 = error("Не найдено", HttpStatus.UNAUTHORIZED);
console.log(res2);