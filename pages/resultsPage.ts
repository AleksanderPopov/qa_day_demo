import { ScreenedStep, Step } from 'allure-cookies';
import { be, Browser, have } from 'selenidejs';

export class ResultsPage {

    @ScreenedStep()
    async shouldHaveNthResults(quantity) {
        await Browser.all('.g .r').should(have.size(quantity));
    }

    @ScreenedStep()
    async followNthResultLink(index) {
        await Browser.all('.g .r').filterBy(be.visible)
            .get(0)
            .element('a')
            .click();
    }
}