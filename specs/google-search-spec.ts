import { be, Browser, have, perform } from 'selenidejs';
import './base'
import { ResultsPage } from '../pages/resultsPage';
import { SearchPage } from '../pages/searchPage';

const searchPage = new SearchPage();
const resultsPage = new ResultsPage();

describe('google search', () => {
    it('should return 10 results', async () => {
        await searchPage.open()
        await searchPage.search('selenidejs npm')

        await resultsPage.shouldHaveNthResults(10)
    });

    it('should follows first result link', async function () {
        await searchPage.open()
        await searchPage.search('selenidejs npm')
        await resultsPage.followNthResultLink(0)

        await Browser.should(have.url('https://www.npmjs.com/package/selenidejs'));
    });
});
