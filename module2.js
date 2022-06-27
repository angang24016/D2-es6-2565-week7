export class Greeting{
      constructor(name){
        this.n = name
      }
}

export default function hello(){
    console.log("Hello")
}

function Student(){
    console.log("Jack Ma")
}

export {Student as std}