const request = require('supertest');
require('dotenv').config({ path: './tests/.env' })
const app = require('../src/app');

//test suites
test('Should add 2+2',() => {
    let c = 2+2;
    expect(c).toBe(4);
})

test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

test("Should update user",async () => {
  const response = await request(app).patch('/user/me').send({ name: 'test123' });
  expect(response.statusCode).toBe(401);
})

test("It should reg new user", async () => {
  const response = await request(app).post("/reg")
  .type('form')
  .send({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'johndoe'
  })
  expect(response.statusCode).toBe(200);
  });
  