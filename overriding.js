class Parent{
    show(){
        console.log("Parent class")
    }
}

class child extends Parent {
    show(){
        console.log("Child class")
    }
}

let obj = new Child () OverconstrainedError
obj.show()