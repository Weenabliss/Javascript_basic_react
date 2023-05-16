class Human {
    constructor(){                                  //Bắt buộc sử dụng từ khóa constructor để định nghĩa hàm tạo
        this.name = "John";                         //Tất cả mọi biến đều phải khai báo trong constructor 
        this.age = 14;                              //Khai báo biến trong constructor không được sử dụng let hoặc var mà phải sử dụng this
        this.getname = () => this.name + " Wick";   //Arrow function
    }
    //let getName = () => name;     //Không được sử dụng arrow function bên ngoài contructor vì bản chất arrow function là khai báo biến
}
//kết thừa
class Vietnamese extends Human {
    constructor(){
        super(); //Hàm super để kế thừa mọi thứ của class cha
    }
}
vietnamese = new Vietnamese();
console.log(vietnamese.getname());