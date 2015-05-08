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

addTaskToList("Mow the lawn", taskList);
expect(taskList[2]).to.equal("Mow the lawn")
expect(taskList.length).to.equal(3);

addTaskToList("Wash the car", taskList);
expect(taskList[3]).to.equal("Wash the car")
expect(taskList.length).to.equal(4)

addTaskToList("Walk the dogs", taskList);
expect(taskList[4]).to.equal("Walk the dogs")
expect(taskList.length).to.equal(5)


//How do I delete an item from my taskList???
taskList.splice(3,1);


taskList.sort();


console.log(taskList[1], taskList[3], taskList[2], taskList[4]);
