Feature('ordering');

const { I, loginPage, orderingPage } = inject();

Scenario('Sorting products in alphabetical order (A-Z)', ({ I }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    orderingPage.selectSortingOrder('Name (A to Z)');
    I.seeElement({xpath: '//div[contains(@class,"inventory_item_name") and text()="Sauce Labs Backpack"]'});
});

Scenario('Sorting products in alphabetical order (Z-A)', ({ I }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    orderingPage.selectSortingOrder('Name (Z to A)');
    I.seeElement({xpath: '//div[contains(@class,"inventory_item_name") and text()="Test.allTheThings() T-Shirt (Red)"]'});
});

Scenario('Sorting products in price order (low to high)', ({ I }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    orderingPage.selectSortingOrder('Price (low to high)');
    I.seeElement({xpath: '//div[contains(@class,"inventory_item_name") and text()="Sauce Labs Onesie"]'});
});

Scenario('Sorting products in price order (high to low)', ({ I }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    orderingPage.selectSortingOrder('Price (high to low)');
    I.seeElement({xpath: '//div[contains(@class,"inventory_item_name") and text()="Sauce Labs Fleece Jacket"]'});
});