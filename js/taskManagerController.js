taskManager.controller('TaskManagerController', [function() {

  this.addNewTask = function () {
    this.tasks = [
      {
        "todo": "weekend challenge",
        "status": "active",
      },
      {
        "todo": "retrospective",
        "status": "done"
      }
    ];
  };

}]);