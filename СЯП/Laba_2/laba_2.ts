type student = {id:number, name:string, group:number};
let array: student[] = [
  {id: 1, name: 'Vasya', group: 10}, 
  {id: 2, name: 'Ivan', group: 11},
  {id: 3, name: 'Masha', group: 12},
  {id: 4, name: 'Petya', group: 10},
  {id: 5, name: 'Kira', group: 11},
];

////////////////////////////////////////

type CarsType = {manufacture?: string, model?: string};

const car: CarsType = {};
car.manufacture = "Mersedes-Benz";
car.model = "А-класс W177, V177";

////////////////////////////////////////

type ArrayCarsType = {cars: Array<CarsType>};

const car1: CarsType = {};
car.manufacture = "Mersedes-Benz";
car.model = "А-класс W177, V177";

const car2: CarsType = {};
car.manufacture = "Mersedes-Benz";
car.model = "А-класс W177, V177";

const arrayCars: Array<ArrayCarsType> = [{
  cars: [car1, car2]
}];

/////////////////////////////////////////
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type DoneType = boolean;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type MarkType = {
  subject: string,
  mark: MarkFilterType,
  done: DoneType,
}

type StudentType = {
  id: number,
  name: string,
  group: GroupFilterType, 
  marks: Array<MarkType>,
}

type GroupType = {
  students: Array<StudentType>;
  mark: MarkFilterType,
  group: GroupFilterType,
  studentsFilter: (group: GroupFilterType) => Array<StudentType>;
  marksFilter: (mark: MarkFilterType) => Array<StudentType>;
  deleteStudent: (id: number) => void;
}

const students: Array<StudentType> = [
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

const studentsFilter = (group: GroupFilterType): Array<StudentType> => {
  return students.filter((student) => student.group === group);
};

const marksFilter = (mark: MarkFilterType): Array<StudentType> => {
  return students.filter((student) =>
    student.marks.some((m) => m.mark === mark)
  );
};

const deleteStudent = (id: number): void => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      students.splice(i, 1);
      break;
    }
  }
};
const group: GroupType = {
  students: students,
  mark: 5,
  group: 10,
  studentsFilter: studentsFilter,
  marksFilter: marksFilter,
  deleteStudent: deleteStudent,
};

console.log(`Студенты 9 группы:`);
console.log(group.studentsFilter(9))
console.log(`Студенты, имеющие оценку 8:`);
console.log(group.marksFilter(8));
console.log(`Сптсок студентов после удаления`);
group.deleteStudent(1324);
console.log(group.students);
