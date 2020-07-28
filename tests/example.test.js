//learning jest examples

test('Should add 2+2',() => {
    let c = 2+2;
    expect(c).toBe(4);
})

//asynchronous
test('Should add 2+2 asynchronously',async (done) => {
    setTimeout(() => {
        let c=2+2;
        expect(c).toBe(4);
        done();
    },2000);
})