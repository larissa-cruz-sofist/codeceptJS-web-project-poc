Feature('test online');

Scenario('Sauce Demo Should Be Online', ({ I }) => {
  I.amOnPage('/');
  I.see('Swag Labs', {xpath: '//div[contains(@class,"login_logo") and text()="Swag Labs"]'});
});