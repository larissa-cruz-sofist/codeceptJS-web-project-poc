const { I } = inject();

class orderingPage {
  
  constructor() {

    this.titleProducts = '//span[contains(@class,"title") and text()="Products"]';
    this.sortSelectOrder = '//select[contains(@class, "product_sort_container") and contains(@data-test, "product_sort_container")]';
    //insert your locators
    // this.button = '#button'
  }

  selectSortingOrder(option){
    I.seeElement(this.titleProducts);
    I.click(this.sortSelectOrder);
    I.selectOption(this.sortSelectOrder, option);
  }
  // insert your methods here
}

// For inheritance
module.exports = new orderingPage();
module.exports.orderingPage = orderingPage;
