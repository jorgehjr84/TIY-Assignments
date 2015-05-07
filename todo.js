var expect = require('chai').expect;


var taskList = [ ];

function listTasks(){
}


// I can add a task to my list...
function addTaskToList(task, list){
  //What is the task? @parameter task
  //Where is the task going? @List Parameter
  //What order / priority? lowest on the bottom(push)
  return list.push(task);
}



expect(taskList.length).to.equal(0);

addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

//expect what?
addTaskToList("Take out the trash", taskList);
//expect what now?
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);

addTaskList("Mow the lawn", taskList);
expect(taskList[2]).to.equal("Mow the lawn")



console.log("This is a taskList[0]", taskList[1]);
