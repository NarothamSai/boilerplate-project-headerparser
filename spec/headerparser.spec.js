const axios = require("axios");

describe("Suite for Header Parser Micro-serivce,",function(){
  let result = {};
  beforeAll(function(done){
    axios.get("https://headerparser.narothamsai.repl.co/api/whoami",{
      headers:{'accept-language':'en'}
    })
    .then(response=>{
      result = response.data;
      done();
    })
  })

  describe("should return JSON object",function(){
    it(":",function(){
      expect(result).not.toBe(null);
      expect(typeof result).toBe('object');
    })

    it("with your IP address in the ipaddress key.",function(){
      expect(result.ipaddress).toBeDefined();
    })
    it("with your preferred language in the language key.",function(){
      expect(result.language).toBeDefined();
    })
    it("with your software in the software key.",function(){
      expect(result.software).toBeDefined();
    })
  })

  
})