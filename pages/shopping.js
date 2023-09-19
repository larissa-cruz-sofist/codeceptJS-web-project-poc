const { I } = inject();

class shoppingPage {
  constructor() {

    this.buttomAddBackpack = 'button[id="add-to-cart-sauce-labs-backpack"]';
    this.buttomRemoveBackpack = 'button[id="remove-sauce-labs-backpack"]';
    this.buttomCartOneProduct = '//span[contains(@class, "shopping_cart_badge") and text()="1"]';
    //insert your locators
    // this.button = '#button'
  }

  addBackpacktoCart() {
    I.click(this.buttomAddBackpack);
    I.waitForEnabled(this.buttomRemoveBackpack);
    I.waitForEnabled(this.buttomCartOneProduct);
  }
  // insert your methods here
}

// For inheritance
module.exports = new shoppingPage();
module.exports.shoppingPage = shoppingPage;
