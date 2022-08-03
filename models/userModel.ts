import { readFileSync } from 'fs';

class Users {
    /**
     * list of users.
     */
    public list: User[]

    public constructor(list: User[] = []) {
        this.list = list
    }

    /**
     * Generate new id based on highest user id in list
     * @return {number}
     */
    public newId(): number {
        return this.list.length <= 0 ? 1 : Math.max(...this.list.map((user: User) => user.id)) + 1
    }

    /**
     * Add user to list
     * @param {User} user
     * object User
     */
    public add(user: User): void {
        user.id = this.newId()
        this.list.push(user)
        // console.log(`add to users list succeed`)
    }

    /**
     * Remove user from list by id
     * @param {number} id
     * user id
     */
    public remove(id: number): void {
        if (!this.list.find((item: User) => item.id == id)) {
            return console.log(`user with id ${id} not found`)
        }
        this.list = this.list.filter((item: User) => item.id != id)
        // console.log(`remove user in list with id: ${id} succeed`)
    }

    /**
     * Get all user in list
     */
    public getAll(): void {
        console.log(`id name age address`)
        this.list.forEach((user: User): any => console.log(`${user.id} ${user.name} ${user.age} ${user.address}`))
    }

    /**
     * Get all user in list
     * @param {string} pathJSON
     */
    public loadData(pathJSON: string): void {
        let usersJSON = JSON.parse(readFileSync(pathJSON, { encoding: 'utf8', flag: 'r' }))
        usersJSON.users.forEach((user: any) => {
            this.add(user)
        });
    }
}

class User {
    /**
     * user id
     */
    public id: number
    public name: string
    public age: number
    public address: string
    public isMarried?: Boolean

    constructor({ id, name, age, address, isMarried = false }: { id?: any, name: string, age: number, address: string, isMarried?: Boolean }) {
        this.id = id
        this.name = name
        this.age = age
        this.address = address
        this.isMarried = isMarried
    }

    /**
     * Say greeting
     * @return {string}
     */
    public greeting(): string {
        return `hello my name is ${this.name}, iam ${this.age}, i come from ${this.address} and im ${this.marriedStatus()}`
    }

    /**
     * Return a statement that user is married or single
     * @return {string}
     */
    private marriedStatus(): string {
        return this.isMarried ? 'married' : 'single'
    }
}

export { Users, User }