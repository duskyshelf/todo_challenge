describe('TaskManagerController', function() {
  beforeEach(module('TaskManager'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskManagerController');
  }));

  it('initialises without any tasks', function() {
    expect(ctrl.tasks).toBeUndefined();
  });

  describe('adding tasks', function() {

  var tasks = [
    {
      "todo": "weekend challenge",
      "status": "active",
    },
    {
      "todo": "retrospective",
      "status": "done"
    }
  ];

  it('displays search results', function() {
    ctrl.addNewTask();
    expect(ctrl.tasks).toEqual(tasks);
  });
});
});