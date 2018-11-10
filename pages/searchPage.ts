import { ScreenedStep, Step } from 'allure-cookies';
import { Browser, perform } from 'selenidejs';

export class SearchPage {

    @ScreenedStep()
    async open() {
        await Browser.open('http://google.com/ncr');
    }

    @ScreenedStep()
    async search(text) {
        await Browser.element('#lst-ib').setValue(text)
            .then(perform.pressEnter);
    }
}