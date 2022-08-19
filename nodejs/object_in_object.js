/*var obj1 = {
    a : "red",
    b : "green"
};

var obj2 = {
    name : "amar",
    obj1 : obj1
};

var obj3 = {
    data : obj2
};*/



var obj = {
    name : "amar",
    data : {
        x : "indore",
        y : "mumbai",
        z : {
            a : "red",
            b : "green",
            c : {
                name : "rohit",
                age : 25
            }
        }
    }
};
console.log(obj.data.z.c.age);



