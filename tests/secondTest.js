const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("../capabilities");
var should = require("chai").should();

//describe block
describe("add second todo tests", function () {
    var driver;

    //username
    const USERNAME = ltCapabilities.capabilities.user;

    //key
    const KEY = ltCapabilities.capabilities.accessKey;


    //host
    const GRID_HOST = "hub.lambdatest.com/wd/hub";

    const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;


    beforeEach(function(){
        ltCapabilities.capabilities.name = this.currentTest.title;
        
        driver = new Builder()
        .usingServer(gridUrl)
        .withCapabilities(ltCapabilities.capabilities)
        .build();
    });

    afterEach(async function(){
        await driver.quit();
    });

    //it block
    it("successfully adds second todo to applicatiom", async function () {
        this.timeout(15000)

            //1 - launch the browser
            //let driver = await new Builder().forBrowser("firefox").build();

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
            //await driver.quit();
        
       
    });

});

//how to run the code
//npx mocha --no-timeouts 'tests/*.js'
//or it is better to add 'mocha --no-timeouts' into
// package.json
// "scripts": {
//  "test": "mocha --no-timeouts"
//and run as 'npm test'