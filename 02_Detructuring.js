var Employee = {
    name: "Wick",
    age: 24,
    getname: () => 'John '+ Employee.name
}
console.log(Employee.name); //Sử dụng cách này sẽ phải mang toàn bộ thuộc tính của Employee vào hàm log nhưng chỉ lấy ra name
//Phân rã object - phân rã dạng key - value nên phải bao gồm dấu {}
let {name: my_name, age: my_age, getname: my_getname} = Employee;
console.log(my_age);
console.log(my_name);
console.log(my_getname());
//Sử dụng cấu trúc phân rã khi import 1 thư viện nào đó -
    //Trong thư viện có rất nhiều đối tượng
    //Chúng ta chỉ lấy những đối tượng cần thiết cho ứng dụng của chúng ta - (VD import react-native)

//Phân rã mảng bao gồm []
arrays = [1,2,3,4,5];
let [value1,value2,value3,value4,value5,value6] = arrays;
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
console.log(value5);
console.log(value6); //Số lượng phân rã > số lượng mảng sẽ mang giá trị undefine