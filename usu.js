
const users = [
  { name: "Abbas", age: 23, isActive: true },
  { name: "Asin", age: 16, isActive: true },
  { name: "Jehera", age: 43, isActive: false }
];


const updateUserAge = (users, name, age)=>{
    return users.map(user => {
        if(user.name===name){
            return {...user, age : age}
        }
        return user
    })
}

const updateActive = (u, nam, sts) =>{
    return u.map(user => {
        if(user.name===nam){
            return {...user, isActive : sts}
        }
        return user
    })
}

const up = updateUserAge(users, "Asin", 18);
console.log(up)
const ua = updateActive(users, "Jehera", true)
console.log(ua)