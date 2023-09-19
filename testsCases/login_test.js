Feature('login');

Scenario('Doing login', ({ I, loginPage }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    I.seeElement({xpath: '//span[contains(@class,"title") and text()="Products"]'});
});

Scenario('Error login', ({ I, loginPage }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('larissa', 'larissa');
    I.seeElement({xpath: '//h3[contains(@data-test, "error") and text()="Epic sadface: Username and password do not match any user in this service"]//button[contains(@class, "error-button")]'});
});