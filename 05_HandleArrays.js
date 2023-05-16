let arrays = [1,2,3,4,5,6,7];
let array_object = [
    {
        name: "John",
        value: "How"
    },
    {
        name: "Wick",
        value: "What"
    },
    {
        name: "Jake",
        value: "Why"
    },
    {
        name: "John",
        value: "Where"
    },
    {
        name: "John",
        value: "When"
    },
    {
        name: "Jake",
        value: "Which"
    },
    {
        name: "John",
        value: "Who"
    },
    {
        name: "Tom",
        value: "Whom"
    },

];
//Duyệt mảng bằng for
for (let index = 0; index < arrays.length; index++) {
    console.log(arrays[index]);
}

for (let index = 0; index < array_object.length; index++) {
    console.log(array_object[index]);
}
//Duyệt mảng giống foreach
for (let item of arrays) {
    console.log(item);
}

for (let item of array_object) {
    console.log(item);
}

//Tìm đối tượng đầu tiên trong arrays
let ob = arrays.find((value)=>value === 1);
console.log(ob);

let ob_ob = array_object.find((value)=>value.name === "John");
console.log(ob_ob);

//Tìm nhiều đối tượng trong arrays
let multiple_ob = array_object.filter((value)=>value.name === "John");
console.log(multiple_ob);

//Tìm index của đối tượng đầu tiên trong arrays
let index_ob = array_object.findIndex((value)=>value.name === "John");
console.log(index_ob);
