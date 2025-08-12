import { remote } from 'webdriverio';
import { assert } from 'chai';
import path from 'path';

let driver;

before(async function () {
	this.timeout(60000);

	const appPath = path.resolve("Booking.com.apk");

	const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:automationName': 'UiAutomator2',
  'appium:app': appPath,
  'appium:appPackage': 'com.booking',
  'appium:appActivity': 'com.booking.startup.HomeActivity',
  'appium:appWaitActivity': 'com.booking.*',
  'appium:autoGrantPermissions': true,
  'appium:newCommandTimeout': 300
};


	  driver = await remote({
		port: 4723,
		capabilities
	  });
});


describe('Booking App - Open the App', function () {
  this.timeout(30000);

  it('Visit the home page and do a search', async function () {
    await (await driver.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View')).click();
    await driver.pause(5000);

    const destinationField = await driver.$('~Enter your destination');
    await destinationField.click();    
    await driver.pause(5000);

    // Select the search text
    const inputField = await driver.$('android=new UiSelector().className("android.widget.EditText")');
    await inputField.setValue('São Paulo');

    const element = await driver.$('android=new UiSelector().className("android.widget.TextView").text("Sao Paulo")');
    await element.click();

	//Select the date
    await (await driver.$('id=com.booking:id/facet_date_picker_confirm')).click();
    await driver.pause(5000);

    await (await driver.$('(//android.widget.TextView[@text="Search"])[1]')).click();
  });
});

