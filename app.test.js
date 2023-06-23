const request=require("supertest");
const app =require('./server');

describe("get service as crud operation", () =>{
    it("get service as crud operation", async()=>{
        const res=await request(app).get("/houses")
        expect(res.statusCode).toBe(200)
    })  
});
