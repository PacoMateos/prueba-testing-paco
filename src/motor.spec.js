import { comprobarNumero } from "./motor"; 
import { NO_ES_UN_NUMERO } from "./modelo"; 
describe("comprobarNumero", () => { 
  it("Debería de devolver NO_ES_UN_NUMERO cuando texto no es un número", () => { 
// Arrange 
const texto = "esto no es número"; 
// Act 
const resultado = comprobarNumero(texto); 
// Assert 
    expect(resultado).toBe(NO_ES_UN_NUMERO); 
  }); 
});

