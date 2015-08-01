taskManager.controller('TaskManagerController', [function() {

  var self = this;
  self.tasks = [];

  self.addNewTask = function () {
    self.tasks.push(
      {
        "todo": self.newTask,
        "status": "active",
      });
  };

  self.deleteTask = function (task) {
    var index = self.tasks.indexOf(task);
    self.tasks.splice(index, 1);
  };

  self.changeTaskStatus = function (task) {
    var index = self.tasks.indexOf(task);


    if (task.status == "completed")
      { task.status = "active"; }
    else
      { task.status = "completed"; }

    self.tasks[index] = task;
  };


}]);