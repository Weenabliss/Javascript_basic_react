//Rest parameter là 1 tham số mảng, luôn nằm cuối danh sách tham số
let calculate_sum = (a,b,...c) =>{
    return a+b;
};
let calculate_sum2 = (a,b,...c) =>{
    let result = 0;
    c.map((value)=> result+= value);
    return result;
};
//Lỗi do khi gọi hàm luôn luôn thiếu 2 tham số a,b - biến mảng không được đặt ở đầu hàm trong danh sách para
// let calculate_sum3 = (...c,a,b) =>{
//     let result = 0;
//     c.map((value)=> result+= value);
//     return result;
// };
console.log(calculate_sum(1,2)); 
console.log(calculate_sum2(1,2,3,4)); //a=1,b=2,c =[3,4]

