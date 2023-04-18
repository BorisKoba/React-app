import { productsService } from "./config/products-service-config"
import productsConfig from "./config/products-config.json"
import { count } from "console"

test("setProducts test", ()=>{
        productsService.setProducts().then(count =>{
                expect(count).toEqual(productsConfig.length);
        })
})
test ("category bread exist", ()=>{
        productsService.isCategoryExist("bread").then(res => expect(res).toBeTruthy());
})
test ("category kukuriku doesn't exist", ()=>{
        productsService.isCategoryExist("kukuriku").then(res => expect(res).toBeTruthy());
})