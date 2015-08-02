taskManager.controller('TaskManagerController', [function() {

  var self = this;
  self.tasks = [];

  self.addNewTask = function () {
    self.tasks.push(
      {
        "todo": self.newTask,
        "status": "active"
      });

    self.newTask = '';
  };

  self.deleteTask = function (task) {
    var index = self.tasks.indexOf(task);
    self.tasks.splice(index, 1);
  };

  self.changeTaskStatus = function (task) {
    if (task.status == "active")
      { task.status = "completed"; }
    else
      { task.status = "active"; }
  };

  self.editTask = function (task) {
    task.todo = self.editedTodo;
  };

}]);