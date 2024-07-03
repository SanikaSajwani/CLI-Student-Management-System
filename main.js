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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, RollNo) {
        var _this = _super.call(this, name, age) || this;
        _this.Courses = [];
        _this.Balance = 0;
        _this.RollNo = RollNo;
        return _this;
    }
    Student.prototype.enroll = function (Courses) {
        this.Courses.push(Courses);
        // Assuming each course has a fixed fee of 10,000
        this.Balance += 10000;
    };
    Student.prototype.viewBalance = function () {
        return this.Balance;
    };
    Student.prototype.payTuition = function (amount) {
        this.Balance -= amount;
    };
    Student.prototype.showStatus = function () {
        return {
            name: this.name,
            RollNo: this.RollNo,
            Courses: this.Courses.map(function (Course) { return Course.name; }),
            Balance: this.Balance,
        };
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, Salary) {
        var _this = _super.call(this, name, age) || this;
        _this.Courses = [];
        _this.Salary = Salary;
        return _this;
    }
    Instructor.prototype.assignCourse = function (Courses) {
        this.Courses.push(Courses);
    };
    return Instructor;
}(Person));
;
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.instructor = [];
        this.name = name;
        this.id = id;
    }
    Course.prototype.addStudent = function (std) {
        this.students.push(std);
    };
    Course.prototype.addInstructor = function (Ins) {
        this.instructor.push(Ins);
    };
    return Course;
}());
var cs101 = new Course(1001, "Introduction to Information Technology");
var cs102 = new Course(1002, "Introduction to Software Engineering");
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    Department.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Department;
}());
var std1 = new Student("Sanika", 19, 10005);
var std2 = new Student("Shaaz", 23, 10007);
var Ins1 = new Instructor("Mr.Winston", 64, 105400);
var Ins2 = new Instructor("Ms. Wilson", 52, 200000);
var D1 = new Department("Computer Science");
var D2 = new Department("Mechanical Engineering");
D1.addCourse(cs101);
D1.addCourse(cs102);
std1.enroll(cs101);
std2.enroll(cs102);
console.log(std1.viewBalance());
std1.payTuition(9000);
console.log(std1.viewBalance());
console.log(std1.showStatus());
