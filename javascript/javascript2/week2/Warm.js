// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
function timeFunction() {
    setTimeout(() => {
      console.log("Called after 2.5 seconds");
    }, 2500);
  }
  
  // 2. Create a function that takes 2 parameters: delay and stringToLog.
  // Calling this function should log out the stringToLog after delay seconds.
  // Call the function you have created with some different arguments.
  // const logStringAfterDelay = (delay, stringToLog) => {
  //   setTimeout(() => console.log(stringToLog), delay * 1000);
  // }
  function logStringAfterDelay(delay, stringToLog) {
    setTimeout(() => console.log(stringToLog), delay * 1000);
  }
  logStringAfterDelay(3, "it!");
  logStringAfterDelay(1, "I");
  logStringAfterDelay(2, "did");