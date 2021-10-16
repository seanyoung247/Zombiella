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
        "paragraph": "Once upon a time there was girl called Cinderella. She lived with her wicked stepmother and two stepsisters. Cinderella’s stepmother was cruel and didn’t like Cinderella. She made her do all the housework, while her stepsisters wore beautiful gowns and made fun of her."
    },
    "Scene2":
    {
        "paragraph": "One day an invitation to a grand ball for all the ladies of the kingdom arrived. The King wanted his son, the Prince, to find a wife. Cinderella was excited, for she had never been to a ball before."
    },
    "Scene3":
    {
        "paragraph": "This is so exciting! A ball at the castle with the prince, isn’t it wonderful? With all those people with elegant robes and dancing so gracefully!"
    },
    "Scene4":
    {
        "paragraph1": "But her stepmother refused to let her leave. As her stepmother and stepsisters left for the ball they threw Cinder’s porridge on the floor and told her to clean it up.", 
        "paragraph2": "You are not allowed to go, you have chores here and you must do them. There is no place in the castle for someone so inferior like you.” The stepmother said with disgust, then she left the room to get ready for the ball.", 
        "paragraph3": "Hahaha! YOU want to go to the ball? With those robes and that stinky smell that is always following you? Are you kidding, right? No one would like to stay around you, especially the prince. You are so ugly and dull, you will always be! And now do the only thing you know to do, CLEAN!"
    },
    "scene5":
    {
        "paragraph": "Cinderella looks at the porridge on the floor and at the door. Should she clean up the porridge or go to the graveyard to visit her loved ones? ", 
        "option1": "Go to graveyardclean up porridge",
        "option2": "Go to graveyard", 
        "option1Result": "scene6", 
        "option2Result": "scene7"
    },
    "Scene6":
    {
        "paragraph1": "Cinderella looks at the porridge on the floor and at the door. She hesitates for a couple of seconds, she felt the weight of the world was on her shoulders. Resigned she knelled and started cleaning the mess her stepsisters did believing she only deserves to be miserable for the rest of her life. THE END", 
    },
    "scene7":
    {
        "paragraph1": "Dejected, Cinderella fled her stepmother’s house. Miserably she searched for her parent’s grave. Quickly she stumbled over a bizarre tomb with the epitaph: “Make your wish, and it will be granted, for a price”. Cinderella was strangely drawn to it, but perhaps she should carry on?", 
        "paragraph2": "With tears on her eyes, she looks desperately at the tomb: “I don’t know what to do… My life is so miserable, but it is the only thing I know… If I reject them, I will be lonely for the rest of my life! I am not sure I am brave enough… What should I do next?",
        "option1": "Find parent's grave", 
        "option2": "Make a wish",
        "option1Result": "scene8", 
        "option2Result": "scene9"
    },
    "scene8":
    {
        "paragraph": "Cinderella decides to carry on looking for her parent’s graveyard. Her desperation increases and the tears in her eyes doesn’t let her see where she puts her feet. The sun is going down and it’s getting darker and colder, finally she sees the graveyard but doesn’t see the open grave on the way and falls into it. Desperately she tries to climb up, but the soil is too soft and can’t get a good grip. She is covered in blood and is getting darker and colder with the night arriving. Resigned she seats in one of the corners and freezes to death. THE END", 
    },
    "scene9":
    {
        "paragraph": "Barely had Cinderella uttered the words of her wish, then with a snap did her rags turn into a beautiful ball gown. A desultory decaying pumpkin instantly turned into a fine carriage pulled by stunning white horses and attended by a smart page. Gleefully Cinderella jumped into the carriage, and it lurched off to the Ball.", 
    },
    "scene10":
    {
        "paragraph1": "As Cinderella entered the Palace everyone was awestruck by the unknown Beauty making her first public appearance. Cinderella was stunned by all the finery, but most of all the buffet table, since she was only allowed to eat porridge at home. Instantly, the Prince introduced himself and asked Cinderella to dance.", 
        "paragraph": "“She hesitates. What should she do? Dance with the Prince or eat all those delicious foods she will probably never have the occasion to taste ever again?",
        "option1": "Dance with the Prince", 
        "option2": "Visit the bufeet table",
        "option1Result": "scene11", 
        "option2Result": "scene12"
    },
    "scene11":
    {
        "paragraph": "Cinderella forgets about the buffet and starts dancing with the Prince. It’s love at the first sight and they both feel like they are floating in the air, and no one is around them. Because they are completely absorbed looking at each other’s eyes they do not realise the dead have risen and attacking everyone at the ball. They both die together, eaten by the Prince’s aunt Mildred. She never really liked the Prince. THE END", 
    },
    "Scene12":
    {
        "paragraph1": "As Cinders (danced with prince/stuffed her face) a terrible scream tore out. The prince looked up as a lurching decayed creature groaned out a moan. “Aunt Mildred? Aren’t you dead?” he exclaimed as the creature lurched toward him. Still more monsters grabbed at Cinderella, tearing her beautiful gown.", 
        "paragraph2": "Something needs to be done, what should Cinderella do?",
        "option1": "Let the prince deal with the Zombies", 
        "option2": "Get medieval on their asses",
        "option1Result": "scene13", 
        "option2Result": "scene14"
    },
    "Scene13":
    {
        "paragraph": "The prince, more used to ordering daiquiris than wielding daggers, is torn to shreds. The kingdom falls to the Zombie horde. THE END", 
    },
    "Scene14":
    {
        "paragraph": "Enraged by the prospect of her first ever ball being ruined by the Zombies, Cinderella flings the Zombies clutching at her away. Removing her stillettos she exclaimed “I came here to dance in a fabulous ball gown and slay Zombies… And you just tore my ball gown!", 
    },
    "Scene15":
    {
        "paragraph1": "Wielding her shoes as weapons she began cleaving Zombies left and right. The undead scattered before her until the dance floor was covered in decaying bodies. Just as the Zombie horde seemed to be thinning, a panicked scream rang out. Cinderella’s stepfamily was surrounded by more of the flesh craving cadavers!",
        "paragraph2": "Cinderella looks at her stepfamily and remembers all the horrible things they did and told to her. She deeply hesitates, what should Cinderella do?",
        "option1": "Save the ungrateful wretches", 
        "option2": "Leave them to their fate",
        "option1Result": "scene16", 
        "option2Result": "scene17"
    },
    "Scene16":
    {
        "paragraph": "At the last second Cinderella shows pity and decides to save her stepfamily even if they don’t deserve it. She fights the zombies with her stilettos and puts them in a safe place, however her stepsisters saw the undead Aunt Mildred at Cinderella’s back but do not warn her. She gets eaten by Aunt Mildred and the stepfamily is happy they don’t have to see Cinderella ever again. THE END", 
    },
    "Scene17":
    {
        "paragraph": "As the final Zombie collapsed to the floor, shoe heel stuck deep in its ear, the cowering Prince ran to Cinderella and fell to one knee. “You’re magnificent!” He exclaimed. “You saved us all! Will you marry me?", 
    },
    "Scene18":
    {
        "paragraph": "'Nah', said Cinder’s. 'I’ve got a lot of cleaning up to do', she added yanking her shoe from the Zombie’s skull with a wet slap. Without a second look Cinderella strolled out of the palace, to eradicate the Zombie menace once and for all."
    },
};

/* UI elements are assigned to consts for ease of access */

const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");
const paragraph3 = document.getElementById("paragraph3");
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