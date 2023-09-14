const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should()

//async fn
async function example(){
//1 - launch the browser
let driver = await new Builder().forBrowser("firefox").build();

//2 - navigate to our app
await driver.get("https://lambdatest.github.io/sample-todo-app/")

//3 - add a todo
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

//5 - asssert - to check that smth is presented on the page
let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
    return value
});
//assert using node assertion
//assert.strictEqual(todoText, "Learn Selenium") // strictEqual is used for comparison of 2 strings to check that they match

//assert using chai should
todoText.should.equal("Learn js")// return the error, becouse the strings do not match

//4 - close the browser
await driver.quit();
}

//calling the function
example()