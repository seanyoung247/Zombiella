/* current scene will change depending on options chosen by the reader
*  current scene is fed into the loadScene() function to update the text
*  and options available to the reader
*/

let currentScene = "openingScene";

/* script data in JSON format. The opening key of each block denotes the scene that
*  will be rendered. the paragraph key is the text the the user will see in each scene
*  option1 and option2 will render on each UI button.
*  The result keys will be fed into the loadScene() function
*/

let script = {
    "openingScene":
    {
        "paragraph": "This is scene1, opening scene", "option1": "Go to graveyard",
        "option2": "pour boiling water on stepmother", "option1Result": "graveyardScene", "option2Result": "gameOverScene"
    },
    "graveyardScene":
    {
        "paragraph": "This is the graveyard scene", "option1": "talk to fairy godmother", "option2": "die from zombie attack",
        "option1Result": "scene3", "option2Result": "gameOverScene"
    },
    "scene3":
    {
        "paragraph": "This is scene 3", "option1": "option 1", "option2": "zombie combat",
        "option1Result": "scene4", "option2Result": "gameOverScene"
    },
    "scene4":
    {
        "paragraph": "This is scene 4", "option1": "option 1", "option2": "stiletto fight scene",
        "option1Result": "scene5", "option2Result": "gameOverScene"
    },
    "scene5":
    {
        "paragraph": "This is scene 5", "option1": "option 1", "option2": "stiletto fight scene",
        "option1Result": "scene6", "option2Result": "gameOverScene"
    },
    "scene6":
    {
        "paragraph": "This is scene 6", "option1": "option 1", "option2": "step family massacre",
        "option1Result": "opening scene", "option2Result": "gameOverScene"
    },
    "gameOverScene":
    {
        "paragraph": "Zombiella has been decapitated :(", "option1": "Resurect", "option2": "return to start",
        "option1Result": "graveyardScene", "option2Result": "openingScene"
    }
};

/* UI elements are assigned to consts for ease of access */

const paragraph = document.getElementById("paragraph");
const buttonOption1 = document.getElementById("buttonOption1");
const buttonOption2 = document.getElementById("buttonOption2");

/* Buttons take the users choices and feed them into loadScene() */
buttonOption1.addEventListener('click', () => {
    currentScene = script[currentScene].option1Result;
    loadScene(currentScene);
});

buttonOption2.addEventListener('click', () => {
    currentScene = script[currentScene].option2Result;
    loadScene(currentScene);
});

/* Feed JSON data into the HTML elements for rendering */
loadScene = (scene) => {
    paragraph.innerHTML = script[scene].paragraph;
    buttonOption1.innerHTML = script[scene].option1;
    buttonOption2.innerHTML = script[scene].option2;
};

/* runs on page load and each time user makes a choice */
loadScene(currentScene);