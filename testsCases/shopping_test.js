Feature('shopping');

const { I, shoppingPage } = inject();

Scenario('Adding product to cart', ({ I, loginPage }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    I.seeElement({xpath: '//span[contains(@class,"title") and text()="Products"]'});
    shoppingPage.addBackpacktoCart();

});

Scenario('Remove product to cart', ({ I, loginPage }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    I.seeElement({xpath: '//span[contains(@class,"title") and text()="Products"]'});
    shoppingPage.addBackpacktoCart();
    I.click('button[id="remove-sauce-labs-backpack"]');
    I.waitForEnabled('button[id="add-to-cart-sauce-labs-backpack"]');

});

Scenario('Go to to cart view product', ({ I, loginPage }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    I.seeElement({xpath: '//span[contains(@class,"title") and text()="Products"]'});
    shoppingPage.addBackpacktoCart();
    I.click('//span[contains(@class, "shopping_cart_badge") and text()="1"]');
    I.seeElement('//div[contains(@class, "inventory_item_name") and text()="Sauce Labs Backpack"]');

});

Scenario('Go to to cart view product and click', ({ I, loginPage }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    I.seeElement({xpath: '//span[contains(@class,"title") and text()="Products"]'});
    shoppingPage.addBackpacktoCart();
    I.click('//span[contains(@class, "shopping_cart_badge") and text()="1"]');
    I.click('//div[contains(@class, "inventory_item_name") and text()="Sauce Labs Backpack"]');
    I.seeElement('//div[contains(@class, "inventory_details_name") and text()="Sauce Labs Backpack"]');

});

Scenario('Go to to cart view product and click, after, back to products', ({ I, loginPage }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    I.seeElement({xpath: '//span[contains(@class,"title") and text()="Products"]'});
    shoppingPage.addBackpacktoCart();
    I.click('//span[contains(@class, "shopping_cart_badge") and text()="1"]');
    I.click('//div[contains(@class, "inventory_item_name") and text()="Sauce Labs Backpack"]');
    I.seeElement('//div[contains(@class, "inventory_details_name") and text()="Sauce Labs Backpack"]');
    I.click('button[id="back-to-products"]');
});

Scenario('Buying a Backpack', ({ I, loginPage }) => {
    I.amOnPage('/');
    loginPage.sendFormWithCredentials('standard_user', 'secret_sauce');
    I.seeElement({xpath: '//span[contains(@class,"title") and text()="Products"]'});
    shoppingPage.addBackpacktoCart();
    I.click('//span[contains(@class, "shopping_cart_badge") and text()="1"]');
    I.seeElement('//div[contains(@class, "inventory_item_name") and text()="Sauce Labs Backpack"]');
    I.click('button[id="checkout"]');
    I.fillField({css: 'input[id="first-name"]'}, 'Larissa');
    I.fillField({css: 'input[id="last-name"]'}, "da Cruz");
    I.fillField({css: 'input[id="postal-code"]'}, "05897410");
    I.scrollPageToBottom();
    I.click('input[id="continue"]');
    I.scrollPageToBottom();
    I.seeElement('//div[contains(@class, "summary_info_label summary_total_label") and text() = "32.39"]');
    I.click('button[id="finish"]');
    I.seeElement('//h2[contains(@class, "complete-header") and text() ="Thank you for your order!"]');
    I.seeElement('button[id="back-to-products"]');
});
