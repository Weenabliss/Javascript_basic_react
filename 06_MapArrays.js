//Dạng array key - value
let mapArrays = new Map([
    ["Name", "Ween"],
    [1,15],
    ["Age",16]
]);
//Show map
console.log(mapArrays);
//Truy cập một value: sử dụng get
console.log(mapArrays.get(1));
//Kiểm tra có key hay không: sử dụng has
console.log(mapArrays.has(1));
//Đếm số phần tử: sử dụng size
console.log(mapArrays.size);
//Lấy ra tât cả các key
console.log(mapArrays.keys());
//Lấy ra từng key
for (let item of mapArrays.keys()) {
    console.log(item);
};
//Lấy cả key và lấy value - sử dụng detructuring
for (let [key,value] of mapArrays) {
    console.log(`Key: ${key} ---- Value: ${value}`);
}
//Sử dụng foreach
mapArrays.forEach((value,key)=>{
    console.log(`Key: ${key} ---- Value: ${value}`);
});
//Thêm một phần tử cho mảng: sử dụng set
mapArrays.set("Height",180);
//Sửa một phần tử mảng
mapArrays.set("Name","John Wick");

//Xóa một phần tử: sử dụng delete
mapArrays.delete(1);

console.log(mapArrays);