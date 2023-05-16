let values = ["A","B","C"];
let setArrays = new Set(values);
//Duyệt mảng
for (let [value] of setArrays) {
    console.log(value);
}
//Thêm phần tử: sử dụng add
setArrays.add("D");
//Xóa phần tử: sử dụng delete
setArrays.delete("A");
console.log(setArrays);