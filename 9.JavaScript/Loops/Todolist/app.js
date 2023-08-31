let userCommand = prompt('What would you like to do?');

const todoList = [];

while (userCommand !== 'quit') {
  if (userCommand === 'new') {
    let todo = prompt('Enter new todo');
    console.log(todo);
    todoList.push(todo);
    userCommand = prompt('What would you like to do?');
  } else if (userCommand === 'list') {
    console.log('*************');
    for (list of todoList) {
      console.log(`${todoList.indexOf(list)}: ${list}`);
    }
    console.log('*************');
    userCommand = prompt('What would you like to do?');
  } else if (userCommand === 'delete') {
    let todoIndex = prompt('Enter index of todo to delete');
    todoList.splice(todoIndex, 1);
    console.log('TODO Removed🗑');
    userCommand = prompt('What would you like to do?');
  } else {
    userCommand = prompt('Please enter valid commands! What would you like to do?');
  }
}
if (userCommand === 'quit') {
  console.log('OK, YOU QUIT THE APP 🥺');
}
