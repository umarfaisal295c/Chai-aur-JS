const course={
    courseName:"Js in hindi",
    price:"999",
    courseInstructor:"Umar"
}
// console.log(course.courseName);
// de-structure objects.
const {courseInstructor}=course;
// console.log(courseInstructor);
const {courseInstructor:instructor}=course;
// console.log(instructor);
// USe in React Js.
const navbar =({company})=>{
    // few lines of code.
}
navbar(company="Umar");
// APIs.
// { // this is calles JSON Format.
//     "name": "Umar",
//     "description": "Web-developer"
// keys and values will be string.
// }



