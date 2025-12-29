const users = [
  { name: "Abbas", age: 23, isActive: true },
  { name: "Asin", age: 16, isActive: true },
  { name: "Jehera", age: 43, isActive: false }
];


const removeUser = (arr, nam) => {
    return arr.filter(users => users.name != nam)
}

console.log(removeUser(users, 'Asin'))