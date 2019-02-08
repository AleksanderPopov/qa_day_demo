import { getJasmineAllureReporter, setScreenshotProvider } from 'allure-cookies';
import { Browser } from 'selenidejs';
import { Builder, Capabilities } from 'selenium-webdriver';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
jasmine.getEnv().addReporter(getJasmineAllureReporter({basePath: './build', resultsDir: 'allure-results'}));
setScreenshotProvider(Browser.screenshot)


beforeAll(() => {
    const webdriver = new Builder()
        .withCapabilities(Capabilities.chrome())
        .build();
    Browser.configuration.webdriver = webdriver;
});

afterAll(async () => {
   await Browser.quit();
});



