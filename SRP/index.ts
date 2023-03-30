// Single Responsibility Principle

// A classe só deve ter uma responsabilidade. O exemplo abaixo não está correto, pois a classe possui responsabilidades demais, o ideal seria que apenas fosse referene a cursos
class Course{
    private _course: string
    private _category: string

    constructor(course: string, category: string) {
        this._course = course;
        this._category = category
      }

    public get course() {
        return this._course;
    }

    public set course(course){
        this._course = course
    }

    public get category(){
        return this._category
    }

    public set category(category){
        this._category = category
    }
}

const course = new Course("Full Cycle", "Software")
course.course = "Test"
course.category = "Lorem"

console.log(course.course)
console.log(course.category)
