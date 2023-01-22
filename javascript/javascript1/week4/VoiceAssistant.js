const myObj = {
    name: 0,
    toDo: []
}
function getReply(command) {
    if (command.split(' ').shift() === 'Set') {
        let time = command.split('Set a timer for ').pop().split(' minutes')[0];
        console.log(`Timer set for ${time} minutes`);
        setTimeout(message, (time*60)*1000);       function message() {
            console.log('Timer done');
        }
    }
    else if (command.split(' ').shift() === 'Hello') {
        myObj.name = command.split(' ').pop();
        console.log(`Nice to meet you ${myObj.name}`)
    }
    else if (command === 'What is my name' && myObj.name === 0) {
        console.log("Please, define your name with command getReply('Hello my name is...') ")

    }
    else if (command === 'What is my name' && myObj.name !== 0) {
        console.log(`Your name is ${myObj.name}`)
    }
    else if (command.split(' ').shift() === 'Add') {
        const inputStr = command;
        myObj.toDo.push(inputStr.split('Add ').pop().split(' to')[0]);
        console.log(`${inputStr.split('Add ').pop().split(' to')[0]} added to your todo`)
    }
    else if (command.split(' ').shift() === 'Remove') {
        const inputStr = command;
        toDoRemove = inputStr.split('Remove ').pop().split(' from')[0];
        const index = myObj.toDo.indexOf(toDoRemove);
        if (index > -1) {
            myObj.toDo.splice(index, 1);
            console.log(`Removed ${toDoRemove} from your todo`);
        }
        else {
            console.log(`${toDoRemove} was not found in your todo`)
        }
    }
    else if (command === 'What day is it today?') {
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        console.log(`${da}. Of ${mo} ${ye}`);
    }
    else if (typeof eval(command.split(' ').pop()) === "number") {        let count = command.split('What is ').pop();
        console.log(eval(count));
    }

    else {
        console.log('Please enter a valid command');
    }
}
getReply('What is my name');
getReply('Hello my name is John');
getReply('What is my name');
getReply('Add fishing to my todo');
getReply('Add singing in the shower to my todo');
getReply('Add drinking some bear to my todo');
getReply('Add writing to my todo');
getReply('Add reading to my todo');
getReply('Add making some juice to my todo');
getReply('Remove fishing from my todo');
getReply('Remove dancing from my todo');
getReply('Remove making some juice from my todo');
getReply('What day is it today?');
getReply('What is 4 + 5');
getReply('What is 35/5');
getReply(`Set a timer for 2 minutes`);
console.log(myObj);