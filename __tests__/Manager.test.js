const Manager = require("../lib/Manager");

// manager object has the three following properties 
const manager = new Manager('Luffy', 0, 'luffy@onepiece.com', 10); 

describe("Manager", () => {
    describe("Manager instantiation", () => {
        it('should create and return the object containing the following properties', () => {

            expect('name' in manager).toEqual(true);
            expect('id' in manager).toEqual(true);
            expect('email' in manager).toEqual(true);
            expect('officeNumber' in manager).toEqual(true);
        })
    })
    // the following three methods will be used to retrieve the respective properties that were passed in the parameters
    describe('getNAME', () => {
        it('should return the name property from the manager object', () => {
           const name = 'Luffy';
           expect(manager.getName()).toEqual(name);
           })   
       })
       describe('getID', () => {
       it('should return the id property from the manager object', () => {
           const id = 0;
           expect(manager.getID()).toEqual(id);
           })
       })
       describe('getEmail', () => {
       it('should return the email property from the manager object', () => {
           const email = 'luffy@onepiece.com';
           expect(manager.getEmail()).toEqual(email);
           })
       })
       describe('getRole', () => {
           it("should return the string of 'Manager'", () => {
   
           expect(manager.getRole()).toEqual('Manager');
           })
       })
})