var Employee = {
    name: "John",
    code: "EM001",
    weight: 50,
    //Khai báo hàm khi có {}
    weight_after_eating () {
        return this.weight * 2 ; 
        //Sử dụng this để truy cập biến trong object.  
        //Sử dụng return để trả về kết quả 
    },
    //Khai báo hàm khi không có {} - Arrow function
    weight_after_eating_2 : () => Employee.weight * 2,
        //Sử dụng chính tên object để truy cập biến - không sử dụng this
        //Không cần sử dụng return khi trả về kết quả 
    
    weight_after_eating_3 : () => { return Employee.weight * 2;} 
        //Nếu có {} thì bắt buộc phải sử dụng return để trả về kết quả
}
console.log(Employee.weight_after_eating());
console.log(Employee.weight_after_eating_2());
console.log(Employee.weight_after_eating_3());