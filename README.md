# Milestone Project 2 - Interactive Frontend Development

## Project Description
The objective of this project was to design a pattern-based memory game using HTML, CSS and JavaScript. 
The type of patterns used were lists of words (specifically verbs) that the player must memorise and reproduce in the correct order.
The game is designed to stengthen the player's writing abilities, as being able to recall verbs easily and readily is a simple, effective 
way to produce strong sentences and more memorable literary works. There are 10 levels to each round of the game and points are awarded
for each correct answer. Initially, the player is required to recall three words. After each successful level, two more words are added
to the list until a total of 21 words must be memorised.

## UX
### Layout
This was a mobile-first design project, so the focus was primarily on making the layout accessible for mobile phone users. 
![](assets/images/wireframe-flashcards.png)

![](assets/images/wireframe-gameboard.png)

The above images are examples of the flashcard design (top) and the gameboard design (bottom). As typing plays 
a huge role in this game, having a gambeoard that allowed the player to see the word spaces and the input field 
while the keyboard was activated was very important.
It was decided to keep the game on one html page and use modals to convey different stages of the game (instructions, 
flashcards, level complete, round complete). 

### Colour Palette
As the target audience is writers, the colours resembling parchment (off-white) and ink (blues and black) were the main colour theme 
for the game.

### Images
For the background of the jumbotron on the home screen, an image of a fountain pen was chosen to keep with the writing theme. 
A photo of parchement was used for the surface of the gameboard and a photo of a bookcase was the background of the gameboard.

### Fonts
The concept of the fonts was to mimic the writing process - going from hand writing to printed words.
For the input field in the game, Tangerine was chosen for its calligraphy style. The correct, printed word on the gameboard
was the font 'Nixie One'. The headings on the modals and navbar was the font 'Fredericka the Great', again for its visual link 
to writing.

### User Journey
The following user stories were identified:
1. "As a novice writer, I'd like a word-based game so that when I'm writing, words come to mind more easily."
2. "As a writer/student with a busy schedule, I'd like strengthen my writing daily in little chunks, without the need to actively create something everytime."
3. "As a working writer, I'd like an undistracting exercise to quickly alleviate writer's block, so I can return to my work as soon as possible."

Based on these stories, the game was developed to be quick and simple. For those working on memory, the game keeps score and increases levels of complexity.
For those who use it to address writer's block, there is a 'New Game' button on the gameboard, and on both the Level Complete Modal and Round Complete Modal.
Opting for 'New Game' will generate a new list of words and quickly expose the user to new vivid words.

## Features
### Current Features

- Landing Page & Jumbotron - Gives an intruduction to the game and provides 'Play' button to start 
- Instructions Modal - Gives directions on how to play the game
- Flashcard Modal - Displays the number of words to memorise and the words
- Scoreboard - At the top of the gameboard. Display the score, the level, the round and a 'New Game" button 
- Gameboard - Displays the spaces for the number of words in the round. A green tick icon appears if answer is correct. Red 'Try again' is incorrect. There's a field and button to submit answer at bottom. The submit ('Check') button can be triggered by pressing enter on keyboard.
- Level Complete Modal - Displays current level, score and next level. Gives option for 'New Game' or next level ('Play')
- Round Complete Modal - Displays current round, score and next round. Gives option for 'New Game' or next round ('Play')


### Future Features
1. Option to select difficulty mode - A timer will be added, allowing the player a set amount of time to recall the word. 
Easy will have no time restrictions. Medium will have 60 seconds per word. Hard will have 15 seconds per word.
2. A modal or page offering daily writing tips and new words with definitions.

## Bugs
An identified bug that could not be rectified in time for the deployment of this website was when enter key was used to submit 
answers in levels 2 and above. When the answers are submitted by clicking the button, there was no issue. But using the enter key
resulted in a second blank answer being submitted as well. This bug would be corrected in future versions of the website.

Another issue arose when the game.js file was being separated into: game_logic.js, game_objects.js, helper_functions.js and main.js.
There were issues with communication between the files and could not be fixed prior to deployment. The files have been included in this project,
but their links have been commented out in index.html. The active js file is game.js.

## Testing
The css stylesheet was inputted directly into the W3C CSS validator and approved. The HTML index.html was inputted directly into the W3C Markup validator. Errors and warnings for each page were addressed and then the page was rechecked through the validator. The process was repeated until no warning remained. The html files and the css stylesheet have been validated.

Manual testing was carried out on all the buttons and the both the Check button and enter key was used to submit answers in the game. The enter created issues when used on levels 2 and above. It was not possible to fix this particular bug prior to deployment.

Both correct and incorrect answers were submitted to confirm that the appropriate icon and messages were displayed. All tests passed, with spacing on the screen as the only issue when words were too long.

Answers in uppercase were also submitted to verify that the .toLowerCase() function was working correctly. This test passed.

Answers containing numbers and non-letter characters were also tested. They returned the expected incorrect text response.

The Level Modal was tested by manually finishing level 1 and level 2. The modal displayed (passed) and buttons and linked functions passed.

The Round Modal (which displays when the player has completed level 10) was triggered to display. The modal displayed and all buttons worked as designed.

Automatic testing was not carried out prior to deployment due to time constraints. But preferrably, the following would be tested automatically: 

- A correct answer submitted in lowercase - expect a green icon
- An incorrect answer - expect red text response
- A correct answer submitted in uppercase - expect a green icon
- Answer containing numbers and non-letter characters - expect red text response
- Comparing the current game level to the number of words displayed on flashcards - expect number of words to be (level*2)+1</li>
- Comparing the current game level to the number of word spaces displayed on gameboard - expect number of spaces to be (level*2)+1</li>

The website was inspected using Google Chrome Dev Tools to view it on mobile and tablet versions. The page and each modal was viewed and tested in these views.


## Deployment of Website
This webiste was developed using gitpod and stored in repositories on Github. Gitpod was installed as an extension tool on 
google Chrome, which was accessed then via the project's repository page on Github. This allowed for regular version control 
updates:
1. git add . was entered into the command line interface to add files to the staging area.
2. git commit -m "" committed the files to the repository.
3. git push -u origin master pushed the master branch.

The website was deployed using Github Pages. To do this, while in the github webpages of the project repository, I accessed
 the Settings Tab. Under the GitHub Pages section further down the page, is the option to choose Source. I switched the 
 default option of none to master branch. Then I retrieved the provided link to my deployed website.

Link to Deployed Website: https://erikan-ir.github.io/interactive-frontend-development-milestone-project/

To run the project locally:
1. Follow the link below to the project's Github repository page.
2. Click on Clone or Download.
3. Copy the link provided.
4. Enter git clone into the command line interface.
5. Paste in the copied link and press enter.


## Technology
1. GitHub was where the files were stored.
2. Gitpod was the editing environment used to create and edit files.
3. Bootstrap 4 was used for navbar, forms and for its grid system to improve responsive design.
4. Font awesome was used to provide icons.
5. The photos were taken using a Oneplus 6T phone and edited using the phone's build-in photo software.
6. Google Fonts was used to provide the fonts.
7. Colors was used to generate a color palette.
8. W3C CSS Validator was used to validate the style.css file.
9. W3C Markup Validator was used to validate the following files: index.html.
10. HTML Formatter was used to format the following files: index.html.
11. jQuery was also used.

## Credit
- Thanks to Reuben Ferrante for advising as mentor on this project.
- The code used in the construction of the navbar was obtained from the Code Institute "Whiskey Drop" tutorials.
- The css code structure for the jumbotron and modal buttons were modelled on the Facebook Sign up button (for the 3D effect).