const allUsers = users => {
  console.log("All users:", users.map(user => user.name));
};

const activeUsers = users => {
  console.log("Active users:", users.filter(user => user.isActive).map(user => user.name));
};

const usersOlder18 = users => {
  console.log("Users older than 18:", users.filter(user => user.age >= 18).map(user => user.name));
};

const avgAge = users => {
  const total = users.reduce((sum, user) => sum + user.age, 0);
  console.log("Average age:", (total / users.length).toFixed(1));
};

const getActiveUserNames = users => {
  return users.filter(user => user.isActive).map(user => user.name);
};


// Data
const users = [
  { name: "Abbas", age: 23, isActive: true },
  { name: "Asin", age: 16, isActive: true },
  { name: "Jehera", age: 43, isActive: false }
];

// Calls
allUsers(users);
activeUsers(users);
usersOlder18(users);
avgAge(users);
console.log("Active user names:", getActiveUserNames(users));
