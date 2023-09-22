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


// Listen for when the user hits the return/enter key
inputBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    /* Get the valye from the input field. Trim any white space and convert to lowercase to better handling */
    const inputValue = inputBox.value.trim().toLowerCase();

    // Display the command the user entered
    displayUserCommandEntered(inputValue);


    // Check if user entered the 'help' command
    if (inputValue === 'help') {
      // run function to display the help commands
      displayHelpCommands();
    }

    // Check if user entered the 'about' command
    // Display about me info

    // Check if user entered the 'portfolio' command
    // Display portfolio info

    // Check if user entered the 'contact' command
    // Display contact info

    // Check if user entered the 'clear' command
    // Clear the screen

    // Clear input after processing command
    inputBox.value = '';
  }
})


// Display the command the user entered
function displayUserCommandEntered(command) {
  const commandEntered = document.createElement('p');
  commandEntered.textContent = `rosita@rosita:~$ ${command}`;
  document.body.appendChild(commandEntered);
}



// Function to display the help commands
function displayHelpCommands() {

  // Create a html <pre> element 
  const preElement = document.createElement('pre');
  // Convert array to string with new line characters
  preElement.textContent = helpCommands.join('\n');

  // Insert the <pre> element before the input field
  // inputBox.parentNode.insertBefore(preElement, inputBox);

  document.body.appendChild(preElement);
}


// Creates a new prompt to span element and input
function createInputPrompt() {
  // Create an a new line input prompt so that the user can enter a new command
  const newCommandPrompt = document.createElement('span');
  newCommandPrompt.className.add('prompt');
  newCommandPrompt.textContent = 'rosita@rosita:~$ ';

  const newInput = inputBox.cloneNode();
  newInput.value = '';

  // Add new element to body of html page
  document.body.appendChild(newCommandPrompt);
  document.body.appendChild(newInput);

  // Focus on the new input field
  inputBox = newInput;

  // Re-focus on input field whenever it loses focus 
  inputBox.focus();

  inputBox.addEventListener('blur', () => {
    inputBox.focus();
  });



  // Listen for when the user hits the return/enter key
  inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // Get the value from the input box
      const inputValue = inputBox.value.trim().toLowerCase();

      // Display the command the user entered
      displayUserCommandEntered(inputValue);

      // Check if the user entered "help"
      if (inputValue === 'help') {
        displayHelpCommands();
      }

      // Display a new input line
      createInputPrompt();

      // Clear the current input after processing
      inputBox.value = '';
    }
  });


}





