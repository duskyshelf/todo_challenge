describe('TaskManagerController', function() {
  beforeEach(module('TaskManager'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskManagerController');
  }));

  it('initialises without any tasks', function() {
    expect(ctrl.tasks[0]).toBeUndefined();
  });

  describe('adding tasks', function() {

    var tasks = [
      {
        "todo": "weekend challenge",
        "status": "active",
      }
    ];

    it('adds the task to the list', function() {
      ctrl.newTask = "weekend challenge";
      ctrl.addNewTask();
      expect(ctrl.tasks).toEqual(tasks);
    });
  });

  describe('deleting tasks', function() {

    it('deletes the task', function() {
      ctrl.newTask = "weekend challenge";
      ctrl.addNewTask();
      ctrl.deleteTask("weekend challenge");
      expect(ctrl.tasks[0]).toBeUndefined();
    });
  });

  describe('changing task status', function() {

    var example = [
      {
        "todo": "weekend challenge",
        "status": "completed",
      }
    ];

    var tasks = [
      {
        "todo": "weekend challenge",
        "status": "active",
      }
    ];

    it('sets a new task from active to completed', function() {
      ctrl.tasks = tasks;
      ctrl.changeTaskStatus(tasks[0]);
      expect(ctrl.tasks).toEqual(example);
    });
  });
});