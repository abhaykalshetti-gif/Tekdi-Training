
const appName = "Dynamic App";

let versionNumber = 1.0;

var developerName = "Alex";

function updateStatus(message) {
  return `[${appName}] Status updated: ${message}`;
}

class UserAccount {
  constructor(username) {
    this.username = username;
    this.status = "online";
  }

  login() {
    this.status = "online";
    console.log(updateStatus(`${this.username} has logged in.`));
  }
}

const users = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < users.length; i++) {
  if (users[i] === "Bob") {
    continue;
  }
  const user = new UserAccount(users[i]);
  user.login();
}

function countdown(start) {
  while (start > 0) {
    console.log(`T-minus ${start}...`);
    start--;
  }
  let finalMessage = "Liftoff!";
  return finalMessage;
}

console.log(updateStatus("Application started."));
console.log(countdown(5));
