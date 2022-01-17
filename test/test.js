const { index, server } = require("./../index.js");
const request = require('supertest');
const chai = require('chai');

const { expect } = chai;

describe("Test start", () =>{
	before(() => {
		console.log("Starting tests..");
	})
	;
	after(() => {
		console.log("All tests completed..");
	});

	describe("Connection test", () =>{
		it("listening on", () =>{
			console.log(request(index).port);
		});
	});
});

const nameIsLuca = {
	id: 1,
	name: 'Luca'
};

const nameIsLucaLuca = {
	id: 2,
	name: 'LucaLuca'
}

const nameIsLucaLucaLuca = {
	id: 3,
	name: 'LucaLucaLuca'
}

describe('Fetch users test', async () => {
  it('Shows all names', async () => {
    const { body, status } = await request(server).get('/users');
    const { data } = body;
    expect(status).to.equal(200);
	  console.log(data);
    expect(data).to.deep.include(nameIsLuca);
    expect(data).to.deep.include(nameIsLucaLuca);
    expect(data).to.deep.include(nameIsLucaLucaLuca);
  });
});
