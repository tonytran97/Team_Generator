const Engineer = require('../lib/Engineer');

// engineer object has the four following properties 
const engineer = new Engineer('Franky', 8, 'franky@onepiece.com', 'ironmanfranky'); 

describe('Engineer', () => {
    describe('Engineer instantiation', () => {
        it('should create and return the object containing the following properties', () => {

            expect('name' in engineer).toEqual(true);
            expect('id' in engineer).toEqual(true);
            expect('email' in engineer).toEqual(true);
            expect('github' in engineer).toEqual(true);
        })

    })
// the following five methods will be used to retrieve the respective properties that were passed in the parameters
    describe('getNAME', () => {
     it('should return the name property from the engineer object', () => {
        const name = 'Franky';
        expect(engineer.getName()).toEqual(name);
        })   
    })
    describe('getID', () => {
    it('should return the id property from the engineer object', () => {
        const id = 8;
        expect(engineer.getID()).toEqual(id);
        })
    })
    describe('getEmail', () => {
    it('should return the email property from the engineer object', () => {
        const email = 'franky@onepiece.com';
        expect(engineer.getEmail()).toEqual(email);
        })
    })
    describe('getGitHub', () => {
        it('should return the github property from the engineer object', () => {
        const github = 'ironmanfranky';
        expect(engineer.getGitHub()).toEqual(github);
        })
    })
    describe('getRole', () => {
        it("should return the string of 'Engineer'", () => {

        expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})