/* List avaiable commands when user enters 'help' */
const helpCommands = [
  "help       - Find out the commands you can run",

  "about      - Learn all about me",

  "portfolio  - See the list of projects I have made",

  "contact    - See ways you can reach me...(no salker please)",

  "clear      - Clear the screen",
];

// For input field to be focused on page load
let inputBox = document.getElementById("input");

//Inital focus on input field
//document.getElementById('input').focus();
inputBox.focus();

//Re-foccus on inout field whenever it loses focus
inputBox.addEventListener("blur", () => {
  inputBox.focus();
});

// Function to display the help commands
function displayHelpCommands() {
  // Create a html <pre> element
  const preElement = document.createElement("pre");
  // Convert array to string with new line characters
  preElement.textContent = helpCommands.join("\n");

  // Insert the <pre> element before the input field
  // inputBox.parentNode.insertBefore(preElement, inputBox);

  document.body.appendChild(preElement);
}

function createNewInputLine() {
  // Create the prompt, display user command, and the new input
  const newPromptDiv = document.createElement("div");

  const newPromptSpan = document.createElement("span");
  newPromptSpan.className = "prompt";
  newPromptSpan.textContent = "rosita@rosita.tech: ~ ";

  const newInput = document.createElement("input");
  // Adding input type as URL to disable 1password plugin
  newInput.type = "URL";
  newInput.id = "input";
  newInput.className = "input-styles";
  newInput.name = "name";
  newInput.required = true;
  newInput.minlength = "4";
  newInput.maxlength = "18";
  newInput.size = "10";
  newInput.setAttribute("class", "inputSyle");

  newPromptDiv.appendChild(newPromptSpan);
  newPromptDiv.appendChild(newInput);

  // Append the new elements to the body
  document.body.appendChild(newPromptDiv);

  // Update the reference to the inputBox to the new input and add focus
  inputBox = newInput;
  inputBox.focus();

  // Add the blur and keydown events to the new input
  inputBox.addEventListener("blur", () => {
    inputBox.focus();
  });

  // Listen for when the user hits the return/enter key
  inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const inputValue = inputBox.value.trim().toLowerCase();

      // Create a read-only text node with the command and append it to the current prompt
      // const commandText = document.createTextNode(inputValue);
      // inputBox.parentElement.insertBefore(commandText, inputBox);

      const commandSpan = document.createElement("span");
      commandSpan.className = "enteredCommand"; // This is a new class we'll define in CSS
      commandSpan.textContent = inputValue;
      inputBox.parentElement.insertBefore(commandSpan, inputBox);

      // Remove the input box now that the command has been processed
      inputBox.remove();

      // check if user entered 'help' command
      if (inputValue === "help") {
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

      // Creates a new line for command input
      createNewInputLine();
    }
  });
}
createNewInputLine();
