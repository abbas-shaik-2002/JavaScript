const addUser = (users, name, age, isActive) => {
  return [...users,{ name, age, isActive }];
};


let users = [];

users = addUser(users, "Abbas", 23, true);
users = addUser(users, "Asin", 16, true);

console.log(users);