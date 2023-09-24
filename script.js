/* List avaiable commands when user enters 'help' */

const helpCommands = [
  { cmd: "help", desc: "- find out the commands you can run" },
  { cmd: "about", desc: "- learn all about me" },
  { cmd: "portfolio", desc: "- see the list of projects I have made" },
  {
    cmd: "contact",
    desc: "- see ways you can reach me...(no stalkers please)",
  },
  { cmd: "clear", desc: "- clear the screen" },
];

const aboutMe = `
<p>Hello there 👋🏽! My name is Rosita Emakpo. I am a Tampa Bay native. I graduated of Palomar College, where I earned an Associate of Science degree in Computer Science. Now, I work as a Software Engineer Associate at Cisco in San Jose, where I dive deep into the world of web development. Got a thing for JavaScript or React? Me too! I love turning complex challenges into sleek, user-friendly solutions.</p>

<p>Before joining the Cisco family,  I was an integral part of the Sharp Healthcare team in San Diego, working as an Access Specialist in Support Services. In this capacity, I wore many hats - from assisting with practice management reports to ensuring the accuracy of comments left by patient representatives. My role also entailed working closely with Access Analysts to provide top-tier support.</p>

<p>When I'm not immersed in code, you'll find me whipping up dishes from all corners of the globe (always up for recipe swaps!). Movie marathons? Count me in! I'm also threading my way into the world of sewing and embracing the linguistic adventure of learning Mandarin Chinese.</p>

<p>Thank you for stopping by! Fancy a chat? I'm all ears! Let's connect.</p>
`;

// Stores the history of commands the user enters

// For input field to be focused on page load
let inputBox = document.getElementById("input");

// Prompt container that displays all prompt and respones
const commandsContainer = document.getElementById("commandsContainer");

//Inital focus on input field
//document.getElementById('input').focus();
inputBox.focus();

//Re-foccus on inout field whenever it loses focus
inputBox.addEventListener("blur", () => {
  inputBox.focus();
});

// Type writter effect to text
function typeText(element, text, delay, callback) {
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, delay);
    } else if (callback) {
      callback();
    }
  }

  type();
}

// Function to display the help commands
function displayHelpCommands() {
  // Create a html <span> & <div> elements
  const commandDiv = document.createElement("div");

  function displayCommand(index) {
    if (index < helpCommands.length) {
      const cmdSpan = document.createElement("span");
      cmdSpan.className = "cmd";

      const descSpan = document.createElement("span");
      descSpan.className = "desc";

      const lineDiv = document.createElement("div");
      lineDiv.appendChild(cmdSpan);
      lineDiv.appendChild(descSpan);
      commandDiv.appendChild(lineDiv);

      typeText(cmdSpan, helpCommands[index].cmd, 15, () => {
        typeText(descSpan, helpCommands[index].desc, 15, () => {
          displayCommand(index + 1);
        });
      });
    }
  }

  // document.body.appendChild(commandDiv);
  // displayCommand(0);

  commandsContainer.appendChild(commandDiv);
  displayCommand(0);
}

function displayAboutMe() {
  const aboutMeDiv = document.createElement("div");
  aboutMeDiv.className = "about-section"; // Adding a class
  aboutMeDiv.innerHTML = aboutMe;
  commandsContainer.appendChild(aboutMeDiv);
}

// Mimics a terminal by clearing the screen
function clearText() {
  commandsContainer.innerHTML = "";
  // A single prompt after clearing:
  // createNewInputLine();
}

//  Function creates a new Input line
function createNewInputLine() {
  // Create the prompt, display user command, and the new input
  const newPromptDiv = document.createElement("div");

  const newPromptSpan = document.createElement("span");
  newPromptSpan.className = "prompt";
  newPromptSpan.textContent = "rosita@rosita.tech ~  $";

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
  // document.body.appendChild(newPromptDiv);
  commandsContainer.appendChild(newPromptDiv);

  // Update the reference to the inputBox to the new input and add focus
  inputBox = newInput;
  inputBox.focus();

  // Add the blur and keydown events to the new input
  inputBox.addEventListener("blur", () => {
    inputBox.focus();
  });

  // List of commands to run based on user prompt
  const commandAction = {
    help: displayHelpCommands,
    about: displayAboutMe,
    clear: clearText,
    // Rosita To Do - add other prompts

    // Check if user entered the 'portfolio' command
    // Display portfolio info

    // Check if user entered the 'contact' command
    // Display contact info

    // Check if user entered the 'clear' command
    // Clear the screen
  };

  // Listen for when the user hits the return/enter key
  inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const inputValue = inputBox.value.trim().toLowerCase();

      const commandSpan = document.createElement("span");
      commandSpan.className = "enteredCommand"; // This is a new class we'll define in CSS
      commandSpan.textContent = inputValue;
      inputBox.parentElement.insertBefore(commandSpan, inputBox);

      // Remove the input box now that the command has been processed
      inputBox.remove();

      // Check command the user has entered
      // Check if the entered command exists in our commandAction object
      if (commandAction[inputValue]) {
        commandAction[inputValue]();
      } else {
        console.error("Error! Unknown command");
      }

      // Creates a new line for command input
      createNewInputLine();
    }
  });
}
createNewInputLine();
