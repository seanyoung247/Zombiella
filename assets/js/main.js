let currentScene = "openingScene";

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

const paragraph = document.getElementById("paragraph");
const buttonOption1 = document.getElementById("buttonOption1");
const buttonOption2 = document.getElementById("buttonOption2");

buttonOption1.addEventListener('click', () => {
    currentScene = script[currentScene].option1Result;
    loadScene(currentScene);
});

buttonOption2.addEventListener('click', () => {
    currentScene = script[currentScene].option2Result;
    loadScene(currentScene);
});

loadScene = (scene) => {
    paragraph.innerHTML = script[scene].paragraph;
    buttonOption1.innerHTML = script[scene].option1;
    buttonOption2.innerHTML = script[scene].option2;
};

loadScene(currentScene);