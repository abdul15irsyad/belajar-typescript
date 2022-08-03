import { Users, User } from './models/userModel'

// let users = new Users([
//     new User('irsyad', 22, 'mauk', false),
//     new User('abdul', 24, 'pamulang', false),
//     new User('hamid', 27, 'bekasi', true),
// ])

let users: Users = new Users

let pathJSON: string = './data/users.json'
users.loadData(pathJSON)
users.getAll()
users.add(new User({ name: 'darussalam', age: 18, address: 'citayam' }))
users.remove(2)
users.getAll()