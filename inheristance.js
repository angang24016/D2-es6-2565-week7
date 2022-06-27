//Multi Level inheritance
class Annimal{ //parant class
     constructor(cname){
        this.cn = cname
    }
}

class Cat extends Annimal{ // child class
  cshow(){
      console.log(this.cn)
  }
}

class BabyCat extends Cat{
    color(){
      console.log("Red hair")
    }
} 

let bcat = new BabyCat()
bcat.color()
bcat.cshow()