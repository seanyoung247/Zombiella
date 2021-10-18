/* current scene will change depending on options chosen by the reader
*  current scene is fed into the loadScene() function to update the text
*  and options available to the reader
*/

let currentScene = "intro";

/* script data in JSON format. The opening key of each block denotes the scene that
*  will be rendered. the paragraph key is the text the the user will see in each scene
*  option1 and option2 will render on each UI button.
*  Doc[//www.]
*  The result keys will be fed into the loadScene() function
*/

let script = {
    "intro":
    {
        "paragraph": "Once upon a time there was girl called Cinderella. She lived with her wicked stepmother and two stepsisters. Cinderella’s stepmother was cruel and didn’t like Cinderella. She made her do all the housework, while her stepsisters wore beautiful gowns and made fun of her.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "invitationScene1",
        "option2Result": "na",
        art: "cinders_rags"
    },
    "invitationScene1":
    {
        "paragraph": "One day an invitation to a grand ball for all the ladies of the kingdom arrived. The King wanted his son, the Prince, to find a wife. Cinderella was excited, for she had never been to a ball before.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "invitationScene2",
        "option2Result": "na",
        art: "cinders_rags"
    },
    "invitationScene2":
    {
        "paragraph": "This is so exciting! A ball at the castle with the prince, isn’t it wonderful? With all those people with elegant robes and dancing so gracefully!",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "refusalScene1",
        "option2Result": "na",
        art: "cinders_excited_invitation"
    },
    "refusalScene1":
    {
        "paragraph": "But her stepmother refused to let her leave. As her stepmother and stepsisters left for the ball they threw Cinder’s porridge on the floor and told her to clean it up.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "refusalScene2",
        "option2Result": "na",
        art: "cinders_scrubbing"
    },
    "refusalScene2":
    {
        "paragraph": "You are not allowed to go, you have chores here and you must do them. There is no place in the castle for someone so inferior like you.” The stepmother said with disgust, then she left the room to get ready for the ball.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "refusalScene3",
        "option2Result": "na",
        art: "cinders_and_stepmother"
    },
    "refusalScene3":
    {
        "paragraph": "Hahaha! YOU want to go to the ball? With those robes and that stinky smell that is always following you? Are you kidding, right? No one would like to stay around you, especially the prince. You are so ugly and dull, you will always be! And now do the only thing you know to do, CLEAN!",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "porridgeScene",
        "option2Result": "na",
        art: "cinders_and_stepsisters"
    },
    "porridgeScene":
    {
        "paragraph": "Cinderella looks at the porridge on the floor and at the door. Should she clean up the porridge or go to the graveyard to visit her loved ones?",
        "option1": "Flee house!",
        "option2": "Clean up",
        "option1Result": "graveyardScene1",
        "option2Result": "porridgeEnd",
        art: "cinders_looking-at_poridge"
    },
    "porridgeEnd":
    {
        "paragraph": "Cinderella looks at the porridge on the floor and at the door. She hesitates for a couple of seconds, she felt the weight of the world was on her shoulders. Resigned she knelled and started cleaning the mess her stepsisters did believing she only deserves to be miserable for the rest of her life. THE END",
        "option1": "Restart",
        "option2": "disabled",
        "option1Result": "intro",
        "option2Result": "na",
        art: "cinders_unhappy"
    },
    "graveyardScene1":
    {
        "paragraph": "Dejected, Cinderella fled her stepmother’s house. Miserably she searched for her parent’s grave. Quickly she stumbled over a bizarre tomb with the epitaph: “Make your wish, and it will be granted, for a price”. Cinderella was strangely drawn to it, but perhaps she should carry on?",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "graveyardScene2",
        "option2Result": "na",
        art: "cinders_rags"
    },
    "graveyardScene2":
    {
        "paragraph": "With tears on her eyes, she looks desperately at the tomb: “I don’t know what to do… My life is so miserable, but it is the only thing I know… If I reject them, I will be lonely for the rest of my life! I am not sure I am brave enough… What should I do next?",
        "option1": "Find parents",
        "option2": "Make a wish",
        "option1Result": "findGraveScene1",
        "option2Result": "carriageScene",
        art: "cinders_rags"
    },
    "findGraveScene1":
    {
        "paragraph": "Cinderella decides to carry on looking for her parent’s graveyard. Her desperation increases and the tears in her eyes doesn’t let her see where she puts her feet. The sun is going down and it’s getting darker and colder, finally she sees the graveyard but doesn’t see the open grave on the way and falls into it.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "findGraveScene2",
        "option2Result": "na",
        art: "cinders_unhappy"
    },
    "findGraveScene2":
    {
        "paragraph": "Desperately she tries to climb up, but the soil is too soft and can’t get a good grip. She is covered in blood and is getting darker and colder with the night arriving. Resigned she seats in one of the corners and freezes to death. THE END",
        "option1": "Restart",
        "option2": "disabled",
        "option1Result": "intro",
        "option2Result": "na",
        art: "cinders_curled_up"
    },
    "carriageScene":
    {
        "paragraph": "Barely had Cinderella uttered the words of her wish, then with a snap did her rags turn into a beautiful ball gown. A desultory decaying pumpkin instantly turned into a fine carriage pulled by stunning white horses and attended by a smart page. Gleefully Cinderella jumped into the carriage, and it lurched off to the Ball.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "theBallScene1",
        "option2Result": "na",
        art: "cinders_transformation"
    },
    "theBallScene1":
    {
        "paragraph": "As Cinderella entered the Palace everyone was awestruck by the unknown Beauty making her first public appearance. Cinderella was stunned by all the finery, but most of all the buffet table, since she was only allowed to eat porridge at home. Instantly, the Prince introduced himself and asked Cinderella to dance.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "theBallScene2",
        "option2Result": "na",
        art: "cinders_awe_struck"
    },
    "theBallScene2":
    {
        "paragraph": "She hesitates. What should she do? Dance with the Prince or eat all those delicious foods she will probably never have the occasion to taste ever again?",
        "option1": "Dance",
        "option2": "Eat",
        "option1Result": "danceScene",
        "option2Result": "zombieAttackScene1",
        art: "cinders_awe_struck"
    },
    "danceScene":
    {
        "paragraph": "Cinderella forgets about the buffet and starts dancing with the Prince. It’s love at the first sight and they both feel like they are floating in the air, and no one is around them. Because they are completely absorbed looking at each other’s eyes they do not realise the dead have risen and attacking everyone at the ball. They both die together, eaten by the Prince’s aunt Mildred. She never really liked the Prince. THE END",
        "option1": "Restart",
        "option2": "disabled",
        "option1Result": "intro",
        "option2Result": "na",
        art: "cinders_and_prince_attacked"
    },
    "zombieAttackScene1":
    {
        "paragraph": "As Cinders stuffed her face, a terrible scream tore out. The prince looked up as a lurching decayed creature groaned out a moan. “Aunt Mildred? Aren’t you dead?” he exclaimed as the creature lurched toward him. Still more monsters grabbed at Cinderella, tearing her beautiful gown.",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "zombieAttackScene2",
        "option2Result": "na",
        art: "cinders_and_buffet_table"
    },
    "zombieAttackScene2":
    {
        "paragraph": "Something needs to be done, but who should do it?",
        "option1": "Prince",
        "option2": "Cinders",
        "option1Result": "princeDeathScene",
        "option2Result": "fightScene1",
        art: "cinders_and_prince"
    },
    "princeDeathScene":
    {
        "paragraph": "The prince, more used to ordering daiquiris than wielding daggers, is torn to shreds. The kingdom falls to the Zombie horde. THE END",
        "option1": "Restart",
        "option2": "disabled",
        "option1Result": "intro",
        "option2Result": "na",
        art: "cinders_and_prince_zombies"
    },
    "fightScene1":
    {
        "paragraph": "Enraged by the prospect of her first ever ball being ruined by the Zombies, Cinderella flings the Zombies clutching at her away. Removing her stillettos she exclaimed “I came here to dance in a fabulous ball gown and slay Zombies… And you just tore my ball gown!",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "fightScene2",
        "option2Result": "na",
        art: "cinders_fight_pose"
    },
    "fightScene2":
    {
        "paragraph": "Wielding her shoes as weapons she began cleaving Zombies left and right. The undead scattered before her until the dance floor was covered in decaying bodies. Just as the Zombie horde seemed to be thinning, a panicked scream rang out. Cinderella’s stepfamily was surrounded by more of the flesh craving cadavers!",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "fightScene3",
        "option2Result": "na",
        art: "cinders_kicking_head_off_zombie"
    },
    "fightScene3":
    {
        "paragraph": "Cinderella looks at her stepfamily and remembers all the horrible things they did and told to her. She deeply hesitates, what should Cinderella do?",
        "option1": "Save them",
        "option2": "Leave them",
        "option1Result": "mildredScene",
        "option2Result": "proposalScene",
        art: "stepfamily_surrounded"
    },
    "mildredScene":
    {
        "paragraph": "At the last second Cinderella shows pity and decides to save her stepfamily even if they don’t deserve it. She fights the zombies with her stilettos and puts them in a safe place, however her stepsisters saw the undead Aunt Mildred at Cinderella’s back but do not warn her. She gets eaten by Aunt Mildred and the stepfamily is happy they don’t have to see Cinderella ever again. THE END",
        "option1": "Restart",
        "option2": "disabled",
        "option1Result": "intro",
        "option2Result": "na",
        art: "cinders_zombie"
    },
    "proposalScene":
    {
        "paragraph": "As the final Zombie collapsed to the floor, shoe heel stuck deep in its ear, the cowering Prince ran to Cinderella and fell to one knee. “You’re magnificent!” He exclaimed. “You saved us all! Will you marry me?",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "goodEndingScene",
        "option2Result": "intro",
        art: "prince_proposing"
    },
    "goodEndingScene":
    {
        "paragraph": "'Nah', said Cinder’s. 'I’ve got a lot of cleaning up to do', she added yanking her shoe from the Zombie’s skull with a wet slap. Without a second look Cinderella strolled out of the palace, to eradicate the Zombie menace once and for all.",
        "option1": "Read again",
        "option2": "disabled",
        "option1Result": "intro",
        "option2Result": "na",
        art: "cinders_fight_pose"
    },
};

/* add scene template
"sceneName":
    {
        "paragraph": "scene text",
        "option1": "Next",
        "option2": "disabled",
        "option1Result": "targetScene",
        "option2Result": "na",
        art: null
    },
*/

/* UI elements are assigned to consts for ease of access */

const paragraph = document.getElementById("paragraph");
const buttonOption1 = document.getElementById("buttonOption1");
const buttonOption2 = document.getElementById("buttonOption2");
const buttonOptText1 = document.getElementById("pumpkinText1");
const buttonOptText2 = document.getElementById("pumpkinText2");
const mainImage = document.getElementById("mainImage");

/* Buttons take the users choices and feed them into loadScene() */
buttonOption1.addEventListener('click', () => {
    currentScene = script[currentScene].option1Result;
    loadScene(currentScene);
});

buttonOption2.addEventListener('click', () => {
    currentScene = script[currentScene].option2Result;
    loadScene(currentScene);
});

/* Load art assets based on what scene the user is viewing */
loadArt = (scene) => {

    let image = script[scene].art;

    /* If there is an image to be rendered, build up its file path
    *  and use the file path on index.html element 'mainIMage'
    *  If there is no image to render, make the mainImage element
    *  invisible */

    if (image !== null) {
        mainImage.classList.remove("invisible");
        mainImage.src = `assets/images/${image}.png`;

    } else {
        mainImage.classList.add("invisible");
    }


};

/* Feed JSON data into the HTML elements for rendering */
loadScene = (scene) => {

    /* grab the HTML elements and apply the necessary text from the script */
    paragraph.innerHTML = script[scene].paragraph;
    buttonOptText1.innerHTML = script[scene].option1;
    buttonOptText2.innerHTML = script[scene].option2;

    loadArt(scene);

    /* Remove button 2 from the scene if it is not needed */
    if (script[scene].option2 === "disabled") {
        buttonOption2.classList.add("invisible")
    } else {
        buttonOption2.classList.remove("invisible")
    }
};

/* runs on page load and each time user makes a choice */
loadScene(currentScene);
