// class declaration with the following methods
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

// employee object has the three following properties 
const employee = new Employee('Zoro', 1, 'zoro@onepiece.com'); 

describe('Employee', () => {
    describe('Employee instantiation', () => {
        it('should create and return the object containing the following properties', () => {

            expect("name" in employee).toEqual(true);
            expect("id" in employee).toEqual(true);
            expect("email" in employee).toEqual(true);
        })

    })
// the following three methods will be used to retrieve the respective properties that were passed in the parameters
    describe('getNAME', () => {
     it("should return the name property from the employee object", () => {
        const name = 'Zoro';
        expect(employee.getName()).toEqual(name);
        })   
    })
    describe('getID', () => {
    it("should return the id property from the employee object", () => {
        const id = 1;
        expect(employee.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
    it("should return the email property from the employee object", () => {
        const email = 'zoro@onepiece.com';
        expect(employee.getEmail()).toEqual(email);
        })
    })
})