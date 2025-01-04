Development of football manager game

Introduction
This journal is only getting started towards the end of the project, but understanding the importance of journalling has led me to start it even at this stage. The game is a turn based approach to football,  inspired by chess.

The idea of the game concept was a slow process. Since I was a football fan for many years, I always tried to understand the nuances of the game. I tried to define a set of aspects of a football game and it led to the dream of implementing it in some form. I thought about how it can be made into a playable game and then it hit me while playing chess online. A turn based approach to the tactical aspect of the game. The idea is simple, but flexible and intuitive.

My perspective of the game and the aspects
In a football game, the two teams alternate having the ball and attacking the other to score a goal. The team without it tries to get the ball back to start their own attack or prevent the other team from scoring any according to situation.

When a team gets the ball, the first thing they do is to take the ball towards the opponent half. This process is usually called, ball progression or build-up. Once the ball is in opponent half, the team tries to create chances through the faults in the opponent’s defensive structure or through brilliance in creative play. And once the chance is created they try to finish it by shooting towards goal post. Thus the three steps are build-up, create and finish.

The opponent defends these steps differently, when a team tries to buildup, the defending team retreats while making sure none of the attackers become free and also stretches out and tries to stop the one with the ball, not committing lot of players. This is called pressing. And if the pressing fails and the opponent successfully bring the ball to your half and try to create a chance, the defense usually be compact and tries to clear the ball or cut passes or deny space to the attacking team to create chances, this process is called defending in general but I like to call it as containing. If the attacking team manage to create a chance and have a go at the goal, the goalkeeper tries to save it. This step is called goalkeeping.

Implementation of the perspective as a game 
In this game, each of the 6 phases(build-up, create, finish, press, contain and goalkeep) are roles assigned to players. The goalkeep role is only assigned to the goalkeeper and the goalkeeper can have only that role. The other players can have a maximum of 3 roles assigned to them, with some restrictions based on their position. The defenders have two fixed roles of pressing and containing, with an additional optional role selected from build-up or create. The finishing role is not available to defenders. The midfielders can have all 5 roles other than goalkeeping, but their fixed roles are build-up and create. The third one is additional and optional. The forwards have finishing as their only fixed role and can select two extra optional roles from press, build-up and create. The contain role is not available to them.
the match starts with one team having the ball and try to build up, while the other team press to gain back the ball or stop them from moving ahead. In this game, the attacking team will have to select one player from those having the buildup role assigned and the defending team has to pick one that has press role assigned. Each player is assigned a random skill level or form for the game. It is the metric of how well they are playing on that particular game. If the player selected by the attack team has more form, the play move to the create phase. If the form values are same, the build-up failed but the attacking team can try again as they still have possession. If the form value of defender is more, the possession is changed, the defending team has the ball now and they start their own build-up and the other team have to defend now starting from the press. 
The game continues the simiilar pattern in the create phase, with the attacking team first selecting one player from all who has create role and then the defending team select one from those with contain role. If attacker is successful, they move to finish phase. If defender is successful, the possession is changed and they start attacking from the build-up phase. If the form values are equal possession doesn’t change and the attack team again does the create phase. But if the values tie again and again for 3 times, the ball possession is given to the defending team.(In build-up phase, this does not have a limit).

In finish phase, the attacking team select a player that has finish role in them and the opponent doesn’t have to choose as only the goalkeeper has the goalkeep role. If the attack team has better value, it results in a goal. If goalkeeper has better form, he saves the attempt and can start their own attack. If it is tied, the attack team can try one more time.(2 attempts compared to 3 in create phase)

Also have an idea of implementing a randomness to shooting. That is even if the finish attempt is successful, based on the attacker and goalkeeper’s value, a chance of missing the shot.

The objective of the game is to manage the skill level as well as the health of the players. With each move of being selected for any of the 6 moves, the player’s health goes down by one. They start with a health of 10, and if it reaches 0 they will be unavailable to make any move. Also as the game goes on the player’s health naturally decreases even if they don’t get selected for any move. The rate of exhaustion depends upon the number of roles and the postion they play. So the objective of the game is to manage the health of the players and choose the right player in each move. Like chess, both players can see what are the available options for the other and make decisions predicting the moves. A player who was selected in a move  will not be available for the very next move, except for the goalkeeper.

The game goes on until 90 minutes and the one with the most goals, win.

Programming
I am learning JavaScript and I chose this game as my first project.

Recap so far:
The project started in second half of November. I started with the HTML file. Using HTML and CSS I created the gameplay visuals. I used SVG to make an image of the football pitch and also created icons for players-Circle for goalkeepers, Square for Defenders, Diamond for midfielders and triangle for forwards. I did it in two colors red and blue. Then a grid was created with all the possible positions of the players according to the formations. It was a 9x8 grid. I then inserted the svg icons and hid them. I also created overlaying divs for different popups and windows during the game like. Entering names of teams, tossing, result and penalty shootout result. I also created the various buttons to use during the game like formation selector, role selector, substitute, and continue button. Then I started working on the Javascript. The first function I created was one to allocate random formvalues to players from a set of 2 instances of 1 to 10 values for each team. Like a deck of cards being shuffled and dealt.

After that I created a class for players with all the necessary variables. I also created a function that will randomise the formvalues and create the player objects in 2 teams and assign the random values to them, while also initiating the default roles and positions.

The next function was to display the team in different formations. It will be used while selecting the team formation. The function will successfully display the teams when given the team number and formation.

Then I created the functions for toss, showing final result and to do a penalty shootout. These functions display the hidden divs associated with it and change the content according to conditions.

The next function was the first one users interact with which is entering their names and then they have to choose their desired formations. The displayer function previously created was called from this function and then the toss function was called afterwards. The toss function will then start the game.

Then functions to clear what is on the screen so that next steps can be accordingly displayed was created and then a function that displays the player which is binded to the ids in the html file. Now there was an issue with giving different ids for players according to different formations. A map was used that has formations as key and arrays that contain relevant position ids for it to be displayed in the proper html divs.

The next was the actual gameplay mechanics. A buildpress function that finds and shows the available players for that phase, which are the ones with buildup role in the attacking team and the ones with press role in the defending team. The function also assigns onclick function to attacking team that initiate the next step. If either team has no available players for a phase the opposite team automatically moves on to next phase.
The next step is build move-when one of the players is selected by the attacking team, the onclick function sends the id to a variable and then removes the current onclick functions from team mates and assigns different onclick function to the opponent so that they can choose who will press.
The third step is press move-when the defending team select a player which then removes all the onclick functions and then compares the values and decide if it is a success or not. If success, the next phase is called.

The next phases followed same pattern with slight changes accordingly- createcontain phase>>createmove>>containmove. Also finishsave phase>>finish move>>save move.

The functions are getting called properly and goal scoring and possession changes are working.

Now to add the time and score display functions that increments time after each move. Then before the buildpress phase a series of checks to ensure halftime, fulltime and extra times are reached is created. Also added the display for health and skill, with health properly decrementing.

Next step is to add the game management options of changing roles and substituting during the game. The changes functions will be available after every 15 minutes just before the buildpress phase. Two buttons that will initiate each team’s game management sessions. The role change and the substitute functions have been added and the game is ready to test as a whole.

The testing will be followed by adding proper hints for users to follow through. Also a tutorial page was created that has been added along with an intro home page.

The testing showed working of all functions except team 2’s substitutions and both team’s unavailability of all players for substitution. It also showed an instance of a player’s health going negative.

The next step is to fix the bugs before making the game user friendly with hints and labels.

I started journalling on 22 December. Today I wrote the recap so far. Tomorrow the bugs will be fixed.

25 December 2024
Only today I was able to get back to the project. The team red substitution bug has been cleared. Availability of only the team undergoing substitution fixed. The health reduction issue fixed.

The next step is to ensure each function displays the corresponding html element and then hides it at the end. Also make sure the onclick functions for substituting are reset at end of function.

Then move to hints and guides.

27 December 2024
The player icons are now circles instead of circles, triangles, squares and diamonds. The new system is neater.

28 December2024
Properly centered the div elements. Also changed the default roles of players to make it more simplistic. 
Added a dialog box to notify players with different stages of the game.
Added notifications for denoting phases of the play.
Fixed players display in substitution page, half time screen, iamselected option and subs left issue, hide formation dropdown during role setup. Fixes in displaying and hiding screens. Added phase guide.

29 December 2024
Done event notifications background color issue and extratime not triggering issue.

2 January2025
Removed rebound and attempt limits and added last user for goalkeepers as well. When there is a situation of unavailability of goalkeeper, the goal is random with 50-50 chance.
Removed onclicks when opening manage
Removed the playtime reset in halftime.
Fixed the extratime issue

3 January2025
Removed manage buttons on clicking proceed
Removed build notification during manage
Added the flashing notes
Changed the rebound mechanics instead of the delay
Centered the replay button
Checked everything

TODO
edit tutorial
edit intro
