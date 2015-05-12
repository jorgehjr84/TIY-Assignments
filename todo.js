var expect = require('chai').expect;


var taskList = [];

function listTasks(){
}


// I can add a task to my list...
function addTaskToList(task, list){
  //What is the task? @parameter task
  //Where is the task going? @List Parameter
  //What order / priority? lowest on the bottom(push)
  return list.push(task);
}


// Editing Task
function editTask(position, newTask){
  return taskList[position] = newTask;
}




/*Sorting my taskList
addTaskToList.sort(function (taskList){
  return taskList[0,3,2,1,4,]
}
*/
expect(taskList.length).to.equal(0);


addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

//expect what?
addTaskToList("Take out the trash", taskList);
//expect what now?
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);

addTaskToList("Mow the lawn", taskList);
expect(taskList[2]).to.equal("Mow the lawn")
expect(taskList.length).to.equal(3);

addTaskToList("Wash the car", taskList);
expect(taskList[3]).to.equal("Wash the car")
expect(taskList.length).to.equal(4)

addTaskToList("Walk the dogs", taskList);
expect(taskList[4]).to.equal("Walk the dogs")
expect(taskList.length).to.equal(5)

editTask(2, "Mow the lawn and rake the leaves");
expect(taskList[2]).to.equal("Mow the lawn and rake the leaves");

editTask(3, "Wash both cars now sucka");
expect(taskList[3]).to.equal ("Wash both cars now sucka");




//How do I delete an item from my taskList???
taskList[0] = taskList[taskList.length - 1];
var newTaskList = taskList - 1;
newTaskList =  newTaskList[taskList.length - 1];
  for (newTaskList = 0 ; taskList < newTaskList ; taskList++){
    newTaskList[2] = taskList[2];
  }




console.log(taskList);
console.log(taskList.length);
