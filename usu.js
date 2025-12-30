
const users = [
  { name: "Abbas", age: 23, isActive: true },
  { name: "Asin", age: 16, isActive: true },
  { name: "Jehera", age: 43, isActive: false }
];


const updateUserAge = (users, name, age)=>{
    return users.map((user) => {
        if(user.name===name){
            return {...users, age : age}
        }
        return user
    })
}



const up = updateUserAge(users, "Asin", 18);
console.log(up)
console.log(users)