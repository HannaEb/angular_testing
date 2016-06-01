describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Todos App");
  });
});

describe('Todos tracker', function() {
  it('has a todo', function() {
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toEqual('ToDo1');
  });
});
