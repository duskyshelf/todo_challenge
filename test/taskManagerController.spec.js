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

  describe('editing tasks', function() {

    var tasks = [
      {
        "todo": "weekend challenge",
        "status": "active",
      }
    ];

    var editedTasks = [
      {
        "todo": "final project",
        "status": "active",
      }
    ];

    it('updates a task', function() {
      ctrl.tasks = tasks;
      ctrl.editedTodo = "final project"
      ctrl.editTask(tasks[0]);
      expect(ctrl.tasks).toEqual(editedTasks);
    });
  });

  describe('changing task status', function() {

    var completedTasks = function() {
      return [{
        "todo": "weekend challenge",
        "status": "completed"
      }];
    };

    var activeTasks = function() {
      return [{
        "todo": "weekend challenge",
        "status": "active"
      }];
    };

    it('sets an active task to completed', function() {
      ctrl.tasks = activeTasks();
      ctrl.changeTaskStatus(ctrl.tasks[0]);
      expect(ctrl.tasks).toEqual(completedTasks());
    });

    it('sets a completed task to active', function() {
      ctrl.tasks = completedTasks();
      ctrl.changeTaskStatus(ctrl.tasks[0]);
      expect(ctrl.tasks).toEqual(activeTasks());
    });

  });
});