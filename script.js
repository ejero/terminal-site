/* List avaiable commands when user enters 'help' */
const helpCommands = [
  'help       - Find out the commands you can run',

  'about      - Learn all about me',

  'portfolio  - See the list of projects I have made',

  'contact    - See ways you can reach me...(no salker please)',

  'clear      - Clear the screen'
];


// For input field to be focused on page load
const inputBox = document.getElementById('input');

//Inital focus on input field
document.getElementById('input').focus();

//Re-foccus on inout field whenever it loses focus
inputBox.addEventListener('blur', () => {
  inputBox.focus();
});











