const Intern = require('../lib/Intern');

// intern object has the four following properties 
const intern = new Intern('Jinbe', 10, 'jinbe@onepiece.com', 'Straw Hat Pirates'); 

describe('Intern', () => {
    describe('Intern instantiation', () => {
        it('should create and return the object containing the following properties', () => {

            expect('name' in intern).toEqual(true);
            expect('id' in intern).toEqual(true);
            expect('email' in intern).toEqual(true);
            expect('school' in intern).toEqual(true);
        })

    })
// the following five methods will be used to retrieve the respective properties that were passed in the parameters
    describe('getNAME', () => {
     it('should return the name property from the intern object', () => {
        const name = 'Jinbe';
        expect(intern.getName()).toEqual(name);
        })   
    })
    describe('getID', () => {
    it('should return the id property from the intern object', () => {
        const id = 10;
        expect(intern.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
    it('should return the email property from the intern object', () => {
        const email = 'jinbe@onepiece.com';
        expect(intern.getEmail()).toEqual(email);
        })
    })
    describe('getSchool', () => {
        it('should return the school property from the intern object', () => {
            const school = 'Straw Hat Pirates';
        expect(intern.getSchool()).toEqual(school);
        })
    })
    describe('getRole', () => {
        it("should return the string of 'Intern'", () => {

        expect(intern.getRole()).toEqual('Intern');
        })
    })
})