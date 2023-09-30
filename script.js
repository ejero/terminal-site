/* List avaiable commands when user enters 'help' */

const helpCommands = [
  { cmd: "help", desc: "find out the commands you can run" },
  { cmd: "about", desc: "learn all about me" },
  { cmd: "portfolio", desc: "see the list of projects I have made" },
  {
    cmd: "contact",
    desc: "see ways you can reach me...(no stalkers please)",
  },
  {
    cmd: "message",
    desc: "Send me a message. I'd love to hear from you!",
  },

  { cmd: "clear", desc: "clear the screen" },
];

const aboutMe = `
Hello there 👋🏽! My name is Rosita Emakpo. I am a Tampa Bay native. I graduated of Palomar College, where I earned an Associate of Science degree in Computer Science. Now, I work as a Software Engineer Associate at Cisco in San Jose, where I dive deep into the world of web development. Got a thing for JavaScript or React? Me too! I love turning complex challenges into sleek, user-friendly solutions.

Before joining the Cisco family,  I was an integral part of the Sharp Healthcare team in San Diego, working as an Access Specialist in Support Services. In this capacity, I wore many hats - from assisting with practice management reports to ensuring the accuracy of comments left by patient representatives. My role also entailed working closely with Access Analysts to provide top-tier support.

When I'm not immersed in code, you'll find me whipping up dishes from all corners of the globe (always up for recipe swaps!). Movie marathons? Count me in! I'm also threading my way into the world of sewing and embracing the linguistic adventure of learning Mandarin Chinese.

Thank you for stopping by! Fancy a chat? I'm all ears! Let's connect.
`;

const portfolio = [
  {
    projectTitle: "String to Cut",
    desc: "Small web app that accepts a POST request and returns a JSON object",
    technologiesUsed: "Technologies used: Python, Flask, HTML",
    githubLink: "https://github.com/ejero/string_to_cut",
  },
  {
    projectTitle: "Salon Project ",
    desc: "A hair salon application example for all curl types",
    technologiesUsed:
      "Technologies used: JavaScript, React, PocketBase, Chatwoot ",
    githubLink: " https://github.com/ejero/salon-project ",
  },
  {
    projectTitle: "Jebin Backend ",
    desc: "A backend applicationt to manager users and accounts hosted on a Linode server",
    technologiesUsed:
      "Technologies used: JavaScrit, Express, Squelize, SQLite3, Jest, GitHub Actions",
    githubLink: " https://github.com/ejero/Jebin-Backend/tree/main ",
  },
  {
    projectTitle: "Books Seach ",
    desc: "BooksSeach is a Python project that uses Google Books API",
    technologiesUsed: "Technologies used: Google Client API, Python, API key ",
    githubLink: " https://github.com/ejero/Book-Seach_Google_Books-API",
  },
];

const contact = [
  { how: "GitHub ", link: "https://github.com/ejero" },
  { how: "LinkedIn ", link: "https://www.linkedin.com/in/rosita-emakpo/" },
  { how: "Email ", link: "rositaemakpo@gmail.com" },
  { how: "X (Formally Twitter) ", link: "https://twitter.com/lovelittlerose" },
];

// Stores the history of commands the user enters
let commandHistory = [];
let currentHistoryIndex = -1;

// For input field to be focused on page load
// let inputBox = document.getElementById("input");
let inputBox;

// Prompt container that displays all prompt and respones
const commandsContainer = document.getElementById("commandsContainer");

// Help to focus and unfocus cursor
let formDisplayed = false;

// Scrollable content
document.addEventListener("DOMContentLoaded", function () {
  const parent = document.querySelector(".parent");
  const div4 = document.querySelector(".div4");

  const scrollableContent = document.createElement("div");
  scrollableContent.className = "scrollable-content";

  parent.appendChild(scrollableContent); // Append scrollableContent to parent
  scrollableContent.appendChild(div4); // Move div4 into scrollableContent
});

// Type writer effect to text
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

// Function to diplsay the contact commands
function displayContactCommands() {
  // Create a html <div> element
  const contactDiv = document.createElement("div");
  contactDiv.className = "help-contact-div";

  function displayContact(index) {
    if (index < contact.length) {
      const howSpan = document.createElement("span");
      howSpan.className = "how howDesc";

      const linkSpan = document.createElement("span");
      linkSpan.className = "link linkDesc";

      const lineDiv = document.createElement("div");
      lineDiv.appendChild(howSpan);
      lineDiv.appendChild(linkSpan);
      contactDiv.appendChild(lineDiv);

      typeText(howSpan, contact[index].how, 15, () => {
        typeText(linkSpan, contact[index].link, 15, () => {
          // Set the link only after typing is complete
          linkSpan.innerHTML = `<a href="${contact[index].link}" target="_blank">${linkSpan.textContent}</a>`;
          displayContact(index + 1);
        });
      });
    }
  }

  commandsContainer.appendChild(contactDiv);
  displayContact(0);
}

// Function to display the help commands
function displayHelpCommands() {
  // Create a html <span> & <div> elements
  const commandDiv = document.createElement("div");
  commandDiv.className = "help-command-div";
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

      typeText(cmdSpan, helpCommands[index].cmd, 8, () => {
        typeText(descSpan, helpCommands[index].desc, 8, () => {
          displayCommand(index + 1);
        });
      });
    }
  }

  commandsContainer.appendChild(commandDiv);
  displayCommand(0);
}

function sendMessage() {
  formDisplayed = true;
  const sendMessageDiv = document.createElement("div");
  sendMessageDiv.className = "message-style";

  const form = document.createElement("form");
  form.className = "form-style";
  form.action = "https://formspree.io/f/mnqogjzv";
  form.method = "POST";

  // Create Name input
  const name = document.createElement("input");
  name.className = "input-style";
  name.type = "url";
  name.name = "name";
  name.placeholder = "Name";
  name.required = true;

  // Create Email input
  const email = document.createElement("input");
  email.className = "input-style";
  email.type = "url";
  email.name = "email";
  email.placeholder = "Email";
  email.required = true;

  // Create Message textarea
  const message = document.createElement("textarea");
  message.className = "input-style";
  message.name = "message";
  message.placeholder = "Message";
  message.required = true;

  const button = document.createElement("button");
  button.className = "button-style";
  button.type = "submit";
  button.textContent = "Send Message";

  // Append elements to the form
  form.appendChild(name);
  form.appendChild(document.createElement("br"));
  form.appendChild(email);
  form.appendChild(document.createElement("br"));
  form.appendChild(message);
  form.appendChild(document.createElement("br"));
  form.appendChild(button);

  // Append form to the container div
  sendMessageDiv.appendChild(form);

  // Append the container div to the commandsContainer
  commandsContainer.appendChild(sendMessageDiv);

  // Trigger a repaint to ensure the initial opacity is applied before transitioning
  getComputedStyle(sendMessageDiv).getPropertyValue("opacity");

  // Change opacity to 1 to fade it in
  sendMessageDiv.style.opacity = "1";
}

function displayPortfolioCommand() {
  const commandsContainer = document.getElementById("commandsContainer");

  // Create the main container for the portfolio
  const portfolioDiv = document.createElement("div");
  portfolioDiv.className = "portfolio-style";

  const gridParentDiv = document.createElement("div");
  gridParentDiv.className = "parents";

  let currentProjectIndex = 0; // Add this to keep track of the current project being displayed

  function displayOneProject() {
    if (currentProjectIndex >= portfolio.length) {
      return; // Stop if all projects have been displayed
    }

    const project = portfolio[currentProjectIndex];
    const projectDiv = document.createElement("div");
    projectDiv.className = `projectDiv divs${currentProjectIndex + 1}`;

    const title = document.createElement("span");
    title.className = "projectTitle";

    const desc = document.createElement("span");
    desc.className = "projectDesc";

    const tech = document.createElement("span");
    tech.className = "technologiesUsed";

    const link = document.createElement("a");
    link.className = "githubLink";
    link.href = project.githubLink;
    link.target = "_blank";

    projectDiv.appendChild(title);
    projectDiv.appendChild(document.createElement("br"));
    projectDiv.appendChild(desc);
    projectDiv.appendChild(document.createElement("br"));
    projectDiv.appendChild(tech);
    projectDiv.appendChild(document.createElement("br"));
    projectDiv.appendChild(link);

    gridParentDiv.appendChild(projectDiv);

    typeText(title, ` ${project.projectTitle}`, 10, () => {
      typeText(desc, `${project.desc}`, 10, () => {
        typeText(tech, ` ${project.technologiesUsed}`, 10, () => {
          link.textContent = "Github link"; // Directly set text for the link
          currentProjectIndex++; // Move to the next project
          displayOneProject(); // Recursive call
        });
      });
    });
  }

  displayOneProject(); // Start the process

  portfolioDiv.appendChild(gridParentDiv);
  commandsContainer.appendChild(portfolioDiv);
}

// Displays the about me section of my website
function displayAboutMe() {
  const aboutMeDiv = document.createElement("div");

  // Split the aboutMe content into paragraphs
  //const paragraphs = aboutMe.trim().split("\n");
  const paragraphs = aboutMe.split("\n").filter((para) => para.trim() !== "");

  function typeParagraph(index) {
    if (index < paragraphs.length) {
      const paraElement = document.createElement("p");
      aboutMeDiv.appendChild(paraElement);
      paraElement.className = "about-section";

      // Using my typeText function to type out the content of this paragraph
      typeText(paraElement, paragraphs[index].trim(), 0.5, () => {
        // Add a spacer after every paragraph except the last one
        if (index < paragraphs.length - 0.5) {
          const spacer = document.createElement("div");
          spacer.style.height = "5px"; // Adjust the height as required
          aboutMeDiv.appendChild(spacer);
        }

        typeParagraph(index + 1);
      });
    }
  }

  // Start the typing for the first paragraph
  typeParagraph(0);

  // Add output to html id commandsContainer
  const commandsContainer = document.getElementById("commandsContainer");
  commandsContainer.appendChild(aboutMeDiv);
}

// Mimics a terminal by clearing the screen
function clearText() {
  commandsContainer.innerHTML = "";
}

//  Function creates a new Input line
function createNewInputLine() {
  // Create the prompt, display user command, and the new input
  const newPromptDiv = document.createElement("div");

  const newPromptSpan = document.createElement("span");
  newPromptSpan.className = "prompt";
  // newPromptSpan.textContent = "rosita@rosita.tech ~  $";

  const nameSpan = document.createElement("span");
  nameSpan.className = "name-style";
  nameSpan.textContent = "rosita";

  const domainSpan = document.createElement("span");
  domainSpan.className = "domain-style";
  domainSpan.textContent = "@rosita.tech";

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

  newPromptSpan.appendChild(nameSpan);
  newPromptSpan.appendChild(domainSpan);
  newPromptSpan.appendChild(document.createTextNode(" ~  $"));

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
    if (!formDisplayed) {
      inputBox.focus();
    }
  });

  // List of commands to run based on user prompt
  const commandAction = {
    help: displayHelpCommands,
    about: displayAboutMe,
    clear: clearText,
    portfolio: displayPortfolioCommand,
    message: sendMessage,
    contact: displayContactCommands,
  };

  // Listen for when the user hits the return/enter key
  inputBox.addEventListener("keydown", (e) => {
    // Arrow up to navigate back in history
    if (e.key === "ArrowUp" && currentHistoryIndex > 0) {
      currentHistoryIndex--;
      inputBox.value = commandHistory[currentHistoryIndex];
      e.preventDefault(); // Prevent cursor movement
    }
    // Arrow down to navigate forward in history
    else if (
      e.key === "ArrowDown" &&
      currentHistoryIndex < commandHistory.length - 1
    ) {
      currentHistoryIndex++;
      inputBox.value = commandHistory[currentHistoryIndex];
      e.preventDefault(); // Prevent cursor movement
    }
    // Enter key logic
    else if (e.key === "Enter") {
      const inputValue = inputBox.value.trim().toLowerCase();

      // Store the command in the history
      commandHistory.push(inputValue);
      currentHistoryIndex = commandHistory.length; // Set to the end of the command history

      const commandSpan = document.createElement("span");
      commandSpan.className = "enteredCommand";
      commandSpan.textContent = inputValue;
      inputBox.parentElement.insertBefore(commandSpan, inputBox);

      // Remove the input box now that the command has been processed
      inputBox.remove();

      // Refocus the cursor is not on message command
      if (inputValue === "message") {
        formDisplayed = true;
      } else {
        formDisplayed = false;
      }

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

// Forces the inout to
document.addEventListener("DOMContentLoaded", function () {
  createNewInputLine();
});
