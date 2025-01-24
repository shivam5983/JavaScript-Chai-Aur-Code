// const tinderUSer= new Object() //singleton object hai

const tinderUSer = {}; //non-singleton object hai  

tinderUSer.id= "123ab"
tinderUSer.name="sam"
tinderUSer.isLoggedIn=false



// console.log(tinderUSer) 

const regularUser = {
    email: "abc12@gmail.com" ,
    fullname : {
        userFullname: {
            firstName: "Shivam",
            lastName : "Verma"
        }
    }
}

// console.log(regularUser.fullname.userFullname.lastName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3={obj1,obj2}
// console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3= Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);


// console.log(Object.keys(tinderUSer))   //iska datatype array hai
// console.log(Object.values(tinderUSer))   //iska datatype array hai
// console.log(Object.entries(tinderUSer))    //iska datatype array hai


// console.log(tinderUSer.hasOwnProperty('Username'));


const course = {
    coursename : "js in hindi",
    price : "499",
    courseInstructur : "Hitesh"
}


// ***************************de-Structure*****************************
const {courseInstructur  }=course
console.log(courseInstructur);   // console.log(course.courseInstructor)  give the same output


// *******************API*************************

// {
//     "name": "Shiv",
//     "coursename": "JS in Hindi",
//     "price" : "Free"
// }









