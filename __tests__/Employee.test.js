// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }
// }

const employee = new Employee('Tony', 0, 'test@email.com'); 

describe('Employee', () => {
    describe('getNAME', () => {
     it("should take in the user's name that was put within the parameter and return that string", () => {
        const name = 'Tony';
        expect(employee.name).toEqual(name);
        })   
    })
    describe('getID', () => {
    it("should take in the user's ID that was put within the parameter and return that value", () => {
        const id = 0;
        expect(employee.id).toEqual(id);
        })
    })
    describe('getEmail', () => {
    it("should take in the user's email that was put within the parameter and return that string", () => {
        const email = 'test@email.com';
        expect(employee.email).toEqual(email);
        })
    })
})