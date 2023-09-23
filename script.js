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


    // Append the user command next to the prompt
    inputBox.previousSibling.textContent += inputValue;



    // // Display the command the user entered
    // displayUserCommandEntered(inputValue);


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


    // Create a new input line for the user to enter another command
    createNewInputLine();
  }
})



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




function createNewInputLine() {
  // Create the prompt, display user command, and the new input
  const newPromptDiv = document.createElement('div');

  const newPromptSpan = document.createElement('span');
  newPromptSpan.className = 'prompt';
  newPromptSpan.textContent = 'rosita@rosita.tech: ~ ';

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.className = 'thick-caret-input';
  newInput.name = 'name';
  newInput.required = true;
  newInput.minlength = '4';
  newInput.maxlength = '18';
  newInput.size = '10';

  newPromptDiv.appendChild(newPromptSpan);
  newPromptDiv.appendChild(newInput);

  // Append the new elements to the body
  document.body.appendChild(newPromptDiv);

  // Update the reference to the inputBox to the new input and add focus
  inputBox = newInput;
  inputBox.focus();

  // Add the blur and keydown events to the new input
  inputBox.addEventListener('blur', () => {
    inputBox.focus();
  });


  inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const inputValue = inputBox.value.trim().toLowerCase();

      // Append the user command next to the prompt
      inputBox.previousSibling.appendChild(userCommand);

      // check if user entered 'help' command
      if (inputValue === 'help') {
        displayHelpCommands();
      }

      // Creates a new line for command input
      createNewInputLine();
    }
  });
}


// // Display the command the user entered
// function displayUserCommandEntered(command) {
//   const commandEntered = document.createElement('p');
//   commandEntered.textContent = `rosita@rosita:~$ ${command}`;
//   document.body.appendChild(commandEntered);
// }







