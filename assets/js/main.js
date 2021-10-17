/* current scene will change depending on options chosen by the reader
*  current scene is fed into the loadScene() function to update the text
*  and options available to the reader
*/

let currentScene = "intro";

/* script data in JSON format. The opening key of each block denotes the scene that
*  will be rendered. the paragraph key is the text the the user will see in each scene
*  option1 and option2 will render on each UI button.
*  The result keys will be fed into the loadScene() function
*/

let script = {
    "intro":
    {
        "paragraph": "Once upon a time there was girl called Cinderella. She lived with her wicked stepmother and two stepsisters. Cinderella’s stepmother was cruel and didn’t like Cinderella. She made her do all the housework, while her stepsisters wore beautiful gowns and made fun of her.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "invitationScene1",
        "option2Result": "na"
    },
    "invitationScene1":
    {
        "paragraph": "One day an invitation to a grand ball for all the ladies of the kingdom arrived. The King wanted his son, the Prince, to find a wife. Cinderella was excited, for she had never been to a ball before.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "invitationScene2",
        "option2Result": "na"
    },
    "invitationScene2":
    {
        "paragraph": "This is so exciting! A ball at the castle with the prince, isn’t it wonderful? With all those people with elegant robes and dancing so gracefully!",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "refusalScene1",
        "option2Result": "na"
    },
    "refusalScene1":
    {
        "paragraph": "But her stepmother refused to let her leave. As her stepmother and stepsisters left for the ball they threw Cinder’s porridge on the floor and told her to clean it up.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "refusalScene2",
        "option2Result": "na"
    },
    "refusalScene2":
    {
        "paragraph": "You are not allowed to go, you have chores here and you must do them. There is no place in the castle for someone so inferior like you.” The stepmother said with disgust, then she left the room to get ready for the ball.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "refusalScene3",
        "option2Result": "na"
    },
    "refusalScene3":
    {
        "paragraph": "Hahaha! YOU want to go to the ball? With those robes and that stinky smell that is always following you? Are you kidding, right? No one would like to stay around you, especially the prince. You are so ugly and dull, you will always be! And now do the only thing you know to do, CLEAN!",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "porridgeScene",
        "option2Result": "na"
    },
    "porridgeScene":
    {
        "paragraph": "Cinderella looks at the porridge on the floor and at the door. Should she clean up the porridge or go to the graveyard to visit her loved ones?",
        "option1": "Flee stepmothers house!!",
        "option2": "Clean up porridge",
        "option1Result": "graveyardScene1",
        "option2Result": "porridgeEnd"
    },
    "porridgeEnd":
    {
        "paragraph": "Cinderella looks at the porridge on the floor and at the door. She hesitates for a couple of seconds, she felt the weight of the world was on her shoulders. Resigned she knelled and started cleaning the mess her stepsisters did believing she only deserves to be miserable for the rest of her life. THE END",
        "option1": "Return to begining",
        "option2": "disabled",
        "option1Result": "intro",
        "option2Result": "na"
    },
    "graveyardScene1":
    {
        "paragraph": "Dejected, Cinderella fled her stepmother’s house. Miserably she searched for her parent’s grave. Quickly she stumbled over a bizarre tomb with the epitaph: “Make your wish, and it will be granted, for a price”. Cinderella was strangely drawn to it, but perhaps she should carry on?",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "graveyardScene2",
        "option2Result": "na"
    },
    "graveyardScene2":
    {
        "paragraph": "With tears on her eyes, she looks desperately at the tomb: “I don’t know what to do… My life is so miserable, but it is the only thing I know… If I reject them, I will be lonely for the rest of my life! I am not sure I am brave enough… What should I do next?",
        "option1": "Find parent's grave",
        "option2": "Make a wish",
        "option1Result": "targetScene",
        "option2Result": "na"
    },
};

/* add scene template 
"sceneName":
    {
        "paragraph": "scene text",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "targetScene",
        "option2Result": "na"
    },
*/

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

    if (script[scene].option2 === "disabled") {
        buttonOption2.classList.add("invisible")
    } else {
        buttonOption2.classList.remove("invisible")
    }
};

/* runs on page load and each time user makes a choice */
loadScene(currentScene);