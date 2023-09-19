Feature('tasks');

Scenario('Writing task', ({ I }) => {
    I.amOnPage('https://todolistme.net/');
    I.click('input[id="newtodo"]');
    I.fillField('input[id="newtodo"]', 'Tarefa 1');
    I.pressKey('Enter');
    I.seeElement({css: 'span[id="mytodo_7"]'});
});

Scenario('Mark task done', ({ I }) => {
    I.amOnPage('https://todolistme.net/');
    I.click('input[id="newtodo"]');
    I.fillField('input[id="newtodo"]', 'Tarefa 1');
    I.pressKey('Enter');
    I.seeElement({css: 'span[id="mytodo_7"]'});
    I.click('input[onclick="finish_todo(0, 7)"]');
    I.scrollPageToBottom();
    I.seeElement({xpath: '//span[contains(@title,"Completed") and text()="Tarefa 1"]'});
  });

  Scenario('Delete task', ({ I }) => {
    I.amOnPage('https://todolistme.net/');
    I.click('input[id="newtodo"]');
    I.fillField('input[id="newtodo"]', 'Tarefa 1');
    I.pressKey('Enter');
    I.seeElement({css: 'span[id="mytodo_7"]'});
    I.click('input[onclick="finish_todo(0, 7)"]');
    I.scrollPageToBottom();
    I.wait(2)
    // I.moveCursorTo({xpath: '//span[contains(@title,"Completed") and text()="Tarefa 1"]'});
    // I.waitForElement({xpath: '//li[@id ="todo_0"]/img[@title="Delete Item"]'});
    // I.executeScript(() => {
    //   const locator = '#todo_0 > img';
    //   const deleteButtom = document.querySelector(locator);
    //   deleteButtom.click();
    // });
    I.click({xpath: '//a[@class ="purge" and @title="Remove all done items."]'});
    I.waitForInvisible({xpath: '//span[contains(@title,"Completed") and text()="Tarefa 1"]'});
  });

  Scenario('Drag and drop task', ({ I }) => {
    I.amOnPage('https://todolistme.net/');
    I.click('input[id="newtodo"]');
    I.fillField('input[id="newtodo"]', 'Tarefa 1');
    I.pressKey('Enter');
    I.seeElement({css: 'span[id="mytodo_7"]'});
    I.dragAndDrop({css: 'span[id="mytodo_7"]'}, {xpath: '//li[@id ="mylist_1"]'});
    I.wait(3);
    // I.click({xpath: '//li[@id ="mylist_1"]'});
    // I.wait(3);
    // I.seeElement({css: 'span[id="mytodo_7"]'});
});