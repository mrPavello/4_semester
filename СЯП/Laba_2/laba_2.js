var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
////////////////////////////////////////
var CarsType = /** @class */ (function () {
    function CarsType() {
        this.manufacture = "";
        this.model = "";
    }
    return CarsType;
}());
var car = new CarsType();
car.manufacture = "Mersedes-Benz";
car.model = "А-класс W177, V177";
var car1 = new CarsType();
car.manufacture = "Mersedes-Benz";
car.model = "А-класс W177, V177";
var car2 = new CarsType();
car.manufacture = "Mersedes-Benz";
car.model = "А-класс W177, V177";
var arrayCars = [{
        cars: [car1, car2]
    }];
var students = [
    {
        id: 1324,
        name: "Roma",
        group: 10,
        marks: [
            { subject: "Math", mark: 9, done: true },
            { subject: "Physics", mark: 7, done: false },
        ],
    },
    {
        id: 2334,
        name: "Liza",
        group: 3,
        marks: [
            { subject: "Math", mark: 5, done: true },
            { subject: "Chemistry", mark: 8, done: true },
        ],
    },
    {
        id: 3211,
        name: "Paul",
        group: 9,
        marks: [
            { subject: "Physics", mark: 10, done: true },
            { subject: "Biology", mark: 7, done: false },
        ],
    },
];
var studentsFilter = function (group) {
    return students.filter(function (student) { return student.group === group; });
};
var marksFilter = function (mark) {
    return students.filter(function (student) {
        return student.marks.some(function (m) { return m.mark === mark; });
    });
};
var deleteStudent = function (id) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);
            break;
        }
    }
};
var group = {
    students: students,
    mark: 5,
    group: 10,
    studentsFilter: studentsFilter,
    marksFilter: marksFilter,
    deleteStudent: deleteStudent,
};
console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B 9 \u0433\u0440\u0443\u043F\u043F\u044B:");
console.log(group.studentsFilter(9));
console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442\u044B, \u0438\u043C\u0435\u044E\u0449\u0438\u0435 \u043E\u0446\u0435\u043D\u043A\u0443 8:");
console.log(group.marksFilter(8));
console.log("\u0421\u043F\u0442\u0441\u043E\u043A \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F");
group.deleteStudent(1324);
console.log(group.students);
