const fs = require('fs')
const usersJSON = fs.readFileSync('./data.json', 'utf8')

try {
  const users = JSON.parse(usersJSON)
  users.forEach(user => {
    console.log(user)
  });
} catch(err) {
  console.error(err)
}