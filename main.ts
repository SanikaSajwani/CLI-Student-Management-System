class Person {
   name: string;
   age: number;

   constructor (name: string, age: number ) {
     this.name = name;
     this.age = age;
    }
};

class Student extends Person {
    RollNo: number;
    Courses: Course[] = [];
    Balance: number = 0;

    constructor (name: string, age: number, RollNo: number ) {
     super(name, age)
     this.RollNo = RollNo;
    }

    enroll(Courses: Course) {
        this.Courses.push(Courses);
        // Assuming each course has a fixed fee of 10,000
        this.Balance += 10000;
    }

    viewBalance() {
        return this.Balance;
    }

    payTuition(amount: number){
        this.Balance -= amount;
    }

    showStatus() {
        return {
            name: this.name,
            RollNo: this.RollNo,
            Courses: this.Courses.map(Course => Course.name),
            Balance: this.Balance,
        };
    }
}

class Instructor extends Person {
    Salary: number;
    Courses: Course[] = [];

    constructor (name: string, age: number, Salary: number ) {
     super(name, age)
     this.Salary = Salary;
     
    }

    assignCourse(Courses: Course) {
        this.Courses.push(Courses);
    }
}; 

class Course {
    id: number;
    name: string;
    students: Student[] = [];
    instructor: Instructor[] = [];
    
    constructor (id: number, name: string ) {
        this.name = name;
        this.id = id;
    }

    addStudent(std: Student) {
        this.students.push(std);
    }

    addInstructor(Ins: Instructor) {
        this.instructor.push(Ins)
    }
}

const cs101 = new Course(1001, "Introduction to Information Technology");
const cs102 = new Course(1002, "Introduction to Software Engineering");

class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course) {
        this.courses.push(course);
    }
}

const std1 = new Student("Sanika", 19, 10005); 
const std2 = new Student("Shaaz", 23, 10007);

const Ins1 = new Instructor("Mr.Winston", 64, 105400);
const Ins2 = new Instructor("Ms. Wilson", 52, 200000);

const D1 = new Department("Computer Science");
const D2 = new Department("Mechanical Engineering");

D1.addCourse(cs101);
D1.addCourse(cs102);

Ins1.assignCourse(cs101);
Ins2.assignCourse(cs102);

std1.enroll(cs101);
std1.enroll(cs102);
std2.enroll(cs102);

console.log(std1.viewBalance());
std1.payTuition(15000);
console.log(std1.viewBalance());

console.log(std1.showStatus());


