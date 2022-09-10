var expect = chai.expect;


describe('MyFunctions', function() {

    describe('#player.name check', function(){
        it("Is looking to match player1.name as a string", function(){
            let player1 = new Player('I am a name');
            expect(player1.name).to.be.a('string');
        });
    });
});