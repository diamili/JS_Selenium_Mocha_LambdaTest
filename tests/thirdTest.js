const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should()

//describe block
describe("add third todo tests", function () {

    //it block
    it("successfully adds third todo to applicatiom", async function () {
        this.timeout(15000)

            //1 - launch the browser
            let driver = await new Builder().forBrowser("firefox").build();

            //2 - navigate to our app
            await driver.get("https://lambdatest.github.io/sample-todo-app/")

            //3 - add a todo
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

            //5 - asssert - to check that smth is presented on the page
            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value
            });

            //assert using chai should
            todoText.should.equal("Learn Selenium")// return the error, becouse the strings do not match

            //4 - close the browser
            await driver.quit();
        
       
    });

    it("new second test in third", async function () {
        this.timeout(15000)

            //1 - launch the browser
            let driver = await new Builder().forBrowser("firefox").build();

            //2 - navigate to our app
            await driver.get("https://lambdatest.github.io/sample-todo-app/")

            //3 - add a todo
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

            //5 - asssert - to check that smth is presented on the page
            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value
            });

            //assert using chai should
            todoText.should.equal("Learn S")// return the error, becouse the strings do not match

            //4 - close the browser
            await driver.quit();
        
       
    });

});

//how to run the code
//npx mocha --no-timeouts 'tests/*.js'
//or it is better to add 'mocha --no-timeouts' into
// package.json
// "scripts": {
//  "test": "mocha --no-timeouts"
//and run as 'npm test'