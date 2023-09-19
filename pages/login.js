const { I } = inject();

class loginPage {

  constructor() {

    this.email = 'input[id="user-name"]';
    this.password = 'input[id="password"]';
    this.submitButton = 'input[id="login-button"]';
    //insert your locators
    // this.button = '#button'
  }

  sendFormWithCredentials(email, password) {
    I.fillField(this.email, email);
    I.fillField(this.password, password);
    I.click(this.submitButton);
  }

  // insert your methods here

}

// For inheritance
module.exports = new loginPage();
module.exports.loginPage = loginPage;

