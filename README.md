# Booking App Automation with Appium & WebdriverIO

Automated test suite for the Booking.com Android app using Appium, WebdriverIO, and Mocha.

---

## 📋 Prerequisites

- Node.js (recommended v16+)
- Java JDK (version 8 or above)
- Android Studio (with SDK installed and configured)
- Appium Server (v2.x)
- Android Emulator running or a physical device connected with USB debugging enabled
- Booking.com APK file (placed inside the project folder)

---

## 🚀 Installation

1. Clone this repository:
git clone https://github.com/yourusername/booking-app-automation.git
cd booking-app-automation

2. Install project dependencies:
npm install

3. Install Appium globally (if you haven’t already):
npm install -g appium

4. (Optional) Install Appium Doctor to verify your setup:
npm install -g appium-doctor
appium-doctor

5. Make sure your Android emulator is running or your physical device is connected with USB debugging enabled.

6. Place the Booking.com APK file in the project folder as `Booking.com.apk`.

---

## 🔧 Project Configuration

- The main test file is located at: `tests/appium_test.js`
- The Appium driver capabilities are configured in the test code, example:

```js
const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:automationName': 'UiAutomator2',
  'appium:app': path.resolve('Booking.com.apk'),
  'appium:autoGrantPermissions': true,
  'appium:newCommandTimeout': 300
};
🧪 How to Run Tests
Start the Appium server in a separate terminal window:
appium

Run the tests:
npm test

