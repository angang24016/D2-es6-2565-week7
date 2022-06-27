class Student {
    constructor(name,age,rno) {
         this.n = name
         this.age = age
         this.rno = rno
        static this.branch = br
    }
     std() {
        //console.log("Name:" + this.n + "Age:" + this.age + "Rno:" + this.rno)
        console.log(`Name:${this.n} Age:${this.age} Rno:$this.rno}`)
    }
       set rollno(newRoll){
        this.rno = newRoll
    }
   
      get fullName(){
       return this.n
    }
}





let std1 = new Student("Mark",20,101)
console.log(std1.n)
std1.std()
//Setter is called
std1.rollno = 201
console.log(std1)
console.log(std1.fullName)
Student.std2()