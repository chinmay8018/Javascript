const jsonStr=`{"name":"chinmay","age":"21","address":{"city":"bhubaneswar"}}`;
const user =JSON.parse(jsonStr);
console.log(user.name);
