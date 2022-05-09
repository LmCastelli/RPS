# Hello! Thank you for checking out some of my projects! Below are some notes on what this project is, as well as some notes to myself for when I come back and update/build off this project. 

This is a small game I made just as a refresher/practice on simple, single page React app. 

It's essentially Rock, Paper, Scissors, with the exception that the player and the computer shoot with two hands. Oh and there's goofy little clip art with each option. The game will play until one side reaches 20 points, upon which the toggle to show the entire game will turn to null and the only option will be to restart.

The only separate file from App.js is the function that calculates how scoring works (loops through the hands and uses an if/else statement) and the function that takes the player and computer hands from state and sends them to the scoring function. I should and hopefully will go back and make the scoreboard, player hands, and computer hands all separate components for cleanliness and clarity, but for now they all reside within App.js.

Additionally, the styling could/should be more clean, I need to refresh on some CSS when handling images, so I won't have to make three separate classes for the different sized images, as well as making the container stay the same and not slightly adjusting the total size. 

Radio buttons are used for selecting the hand and updating state, I absolutely could have made the player hand an object too, but this is just the first mock-up and therefore has more simple state management. I'd like to do a more complex version of RPS in the future, and I will definitely build off these ideas. Although each button set controls its respective "hand", it is only one form that the submit button handles. 

# npm start 
Runs the app in development mode, on http://localhost:3000. Refreshing will restart the game, however there is a restart button that will be the only option once the game is over, outside of refreshing the page of course.

# Future ideas:
• 3 or 4 players total, preferably only using one had each

• RPG type game, I'm sure it's been done before but I think it would be fun to make 

• Different "characters" with a simple passive quirk that gets added to the game

• Some weirdly complex table of options instead of the standard A beats B beats C beats A

