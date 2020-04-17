Milestone Project 1 - User Centric Frontend Development
Project Description
The objective of this project was to design a pattern-based memory game using HTML, CSS and JavaScript. 
The type of patterns used were lists of words (specifically verbs) that the player must memorise and reproduce in the correct order.
The game is designed to stengthen the player's writing abilities, as being able to recall verbs easily and readily is a simple, effective 
way to produce strong sentences and more memorable literary works. There are 10 levels to each round of the game and points are awarded
for each correct answer. Initially, the player is required to recall three words. After each successful level, two more words are added
to the list until a total of 21 words must be memorised.


UX
Colour Palette
As the target audience is writers, the colours resembling parchment (off-white) and ink (blues and black) were the main colour theme 
for the game.

Images
For the background of the jumbotron on the home screen, an image of a fountain pen was chosen to keep with the writing theme. 
A photo of parchement was used for the background of the gameboard.

Font



User Journey


Features
Current Features
Landing Page - 
Instructions Modal - 
Flashcard Modal - 
Gameboard - 

Future Features
Option to select difficulty mode - A timer will be added, allowing the player a set amount of time to recall the word. 
Easy will have no time restrictions. Medium will have 60 seconds per word. Hard will have 15 seconds per word.

Bugs
The most pressing issue that occurred with this project was the use of parallax effects. While it is easily implemented, it caused issues regarding the z-indexes of dropdown features. One instance was the dropdown in the navbar, which pushed down the opaque layer over the parallax. This issue was eventually resolved. The second instance, however, persisted. On the FAQ page, the collapse feature from Bootstrap greatly affects the content below. A solution has not been found, as the issue frequently seems to eventually rectify itself once the page has been loaded for a time. When asking my mentor in one instance of this, after adjusting the screen a few times, the issue would spontaneously disappear and could not be replicated until later if the page was reloaded after a while.

Testing
The css stylesheet was inputted directly into the W3C CSS validator and approved. All pages - index.html, about.html, faq.html and contact.html - were inputted directly into the W3C Markup validator. Errors and warnings for each page were addressed and then the page was rechecked through the validator. The process was repeated until no warning remained. All four html files and the css stylesheet have been validated.

Manual testing was carried out on all the links on every page - all links in the footers and the navbars. The read more and sign-up buttons were all checked as well.

The collapse feature on the FAQ page resulted in a bug being identified, however, it was not possible to rectify it yet.

The website was inspected using Google Chrome Dev Tools to view it on mobile and tablet versions. Each page was viewed and tested in these views.

Deployment of Website
This webiste was developed using gitpod and stored in repositories on Github. Gitpod was installed as an extension tool on google Chrome, which was accessed then via the project's repository page on Github. This allowed for regular version control updates:

git add . was entered into the command line interface to add files to the staging area.
git commit -m "" committed the files to the repository.
git push -u origin master pushed the master branch.
The website was deployed using Github Pages. To do this, while in the github webpages of the project repository, I accessed the Settings Tab. Under the GitHub Pages section further down the page, is the option to choose Source. I switched the default option of none to master branch. Then I retrieved the provided link to my deployed website.

Link to Deployed Website: https://erikan-ir.github.io/user-centric-frontend-development-milestone-project/.

To run the project locally:

Follow the link below to the project's Github repository page.
Click on Clone or Download.
Copy the link provided.
Enter git clone into the command line interface.
Paste in the copied link and press enter.

Technology
GitHub was where the files were stored.
Gitpod was the editing environment used to create and edit files.
Bootstrap 4 was used for navbar, forms and for its grid system to improve responsive design.
Font awesome was used to provide icons.
The parallax effect used js code from the following source.
The photos were taken using a Oneplus 6T phone and edited using the phone's build-in photo software.
Google Fonts was used to provide the fonts.
Coolors was used to generate a color palette.
W3C CSS Validator was used to validate the style.css file.
W3C Markup Validator was used to validate the following files: index.html, about.html, faq.html and contact.html.
HTML Fromatter was used to format the following files: index.html, about.html, faq.html and contact.html.

Credit
Thanks to Reuben Ferrante for advising as mentor on this project and to Eoin Brennan for providing the logo file.
Inspiration for the use of paralax effect came from the sample project on the Code Institute website.
The implementation and link to the source of the js code for the parallax was guided by the youtube tutorial by iEatWebsites.
The code used in the construction of the navbar was obtained from the Code Institute "Whiskey Drop" tutorials.
The code used to style the social links in the footer of all the webpages, came from Code Institute's mini-bootstrap (resume project) tutorial.
The inspiration for and part of the code used for the timeline/navigation feature in the footer came from Code Institute's mini-bootstrap (resume project) tutorial.
The css code structure for the jumbotron and contact form buttons were modelled on the Facebook Sign up button (for the 3D effect).
