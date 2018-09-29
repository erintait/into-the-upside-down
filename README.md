<<<<<<< HEAD
# Memory Match - Version 0.5 (v0.5)
=======
# Memory Match

### Overview

> Version 1.0 continues where version 0.5 stopped by adding in the statistics of the memory match game. When a user clicks on a card the application will start tracking how many matches versus how many attempts. In combination with the stats there is also a tracker for how many times the game is played. Games played is tracked by resetting / restarting the game.
>>>>>>> a0040ac1e88654dd0439e5c9ea6c7123a80f6a44

> ##### Related Reading

> - <a href="https://docs.google.com/presentation/d/1FhpJTYGzq6vlHaRcTbOGirVJH6GQSYbaav77uzUOgw4/pub?start=false&loop=false&delayms=3000">READING - JS Event Handling</a>
> - <a href="https://docs.google.com/presentation/d/17hxhHxdsEFo42iClxdLfHeMJRnxSu7Y9lt7Tv_J9fIc/pub?start=false&loop=false&delayms=3000">READING - JS Functions</a>

> ##### Related Videos
 
> - <a href="https://www.youtube.com/watch?v=cXeHN5uydmY&feature=youtu.be" target="_blank">Video - Event Handling</a>
> - <a href="https://www.youtube.com/watch?v=OzbKGDrjGW0&feature=youtu.be">Video - JS Functions</a>

> ##### Related Prototypes

> - Proto - JS Event Handling
> - Proto - JS Functions

#### Getting Started

> - If you haven't already started the v0.1 start there - <a href="https://github.com/Learning-Fuze/memory_match/tree/v0.1#getting-started">View Details Here</a>
> - Are you on your master branch?
    - **Yes** - continue to "Pull Latest Changes"
    - **I dont know** Run the command below
        - `git branch` - this will highlight the branch you are currently on
    - **No** - Make sure you `git add .` and `git commit` to your current branch before you switch to your master branch
> - Pull Latest Changes    
        - `git checkout master`
        - `git pull origin master` - **Now continue with the next steps**
> - Create a feature branch
<<<<<<< HEAD
    - `git checkout -b version0.5`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/memory_match/tree/v0.5#scope">Below</a>
=======
    - `git checkout -b version1.0`
> - Work on the scope defined <a href="https://github.com/Learning-Fuze/memory_match/tree/v1.0#scope">Below</a>
>>>>>>> a0040ac1e88654dd0439e5c9ea6c7123a80f6a44
> - Save your work to gitHub
> - Add files to git
    - `git add .`
> - Commit files (Group files together)
<<<<<<< HEAD
    - `git commit -m "Memory Match version0.5 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin version0.5`
> - Create pull request
    - Pull request should be made from version0.5 to **your repository's** master branch
=======
    - `git commit -m "Memory Match version1.0 - Your Name"`
    - **Replace "Your Name" with your first and last name**
> - Send to gitHub (Push)
    - `git push origin version1.0`
> - Create pull request
    - Pull request should be made from version1.0 to **your repository's** master branch
>>>>>>> a0040ac1e88654dd0439e5c9ea6c7123a80f6a44
    - Receive Peer review on your pull request (Wait for Instruction)
        - Reviewer should merge pull request through Github UI once all comments have been resolved
> - **Once Peer Review is complete & auto merge happens through Github UI**
    - Switch to master branch locally
        - `git checkout master`
    - Pull latest merged code
        - `git pull origin master`

<<<<<<< HEAD
#### Scope

> - Create 4 card static layout by removing 7 of the nine matching cards
> - Add a click handler to each card by 1 of these 2 methods
>   - jQuery - Intermediate
>       - Add click method to a jQuery Selector with the parameter equal to a function called card_clicked
>   - onclick attribute - Fundamentals
>       - the value of the attribute on each element should be set to card_clicked with a parameter of the keyword this
> - Declare and assign 3 global (see scope presentation) variables
>   - **first_card_clicked** assigned to null
>   - **second_card_clicked** assigned to null
>   - **total_possible_matches** assign to number of total possible matches (in this case 2)
>   - **match_counter** assigned to 0
> - Declare card_clicked function in the script.js file with the following functionality in it
>   - Show the card face
>   - Check if variable first_card_clicked is null
>       - **true** - assign first_card_clicked equal to the html DOM Element that was clicked
>           - click handler functionality is complete, return
>       - **false** - assign second_card_clicked to the html DOM Element that was clicked
>           - check if first_card_clicked is equivalent to the second_card_clicked
>               - **true**
>                   - increment match_counter by 1
>                   - reset both variables defined above to null again and then wait for next card click
>                   - check if match_counter is equivalent to total_possible_matches
>                       - **true**
>                           - Display a message to the user they have won
>                       - **false**
>                           - click handler functionality is complete, return
>               - **false**
>                   - Wait 2 seconds then
>                       - Be wary of waiting programmatically but not being able to control the user from clicking on cards while the program waits execute the reset of the code
>                       - Show card back on both elements that are flipped over
>                       - reset both card_clicked
>                       - variables to null
>                       - click handler functionality is complete, return
> <img src="https://docs.google.com/drawings/d/1JT0nsiTg3HXG2L3QFPnfAmPoQDWUCRNKDvl2qr1r9xo/pub?w=960&h=720" width="750"/>
=======
### Scope

- Adding Stats
  - Declare a global variable, `matches`, and set it to 0
    - Every time the application finds a match this variable should be incremented by 1
  - Declare a global variable, `attempts`, and set it to 0
    - Every time a user attempts a match (clicks the 2nd card) the attempts should be incremented by 1
  - Declare a global variable, `accuracy`, and set it to 0
    - Accuracy is defined as a percentage of matches / attempts
  - Declare a global variable, `games_played` and set it to 0
    - When the page is loaded a new global variable should be defined called games_played. When the game is reset by clicking the reset button the games_played should be incremented by 1.
  - Declare a function, `display_stats`, that has the following functionality
     - Inserts the **games_played** value into the element that would be selected like this “.games-played .value”
     - Insert **attempts** value into the element that would be selected using this selector “.attempts .value”
     - Formats **accuracy** to be a percentage number with the **%** sign
     - Takes formatted **accuracy** and inserts the value of the variable into the element that has the selector of “.accuracy .value”
  - Declare a function, `reset_stats`, that has the following functionality
     - Resets variable **accuracy** to 0
     - Resets variable **matches** to 0
     - Resets variable **attempts** to 0
     - Calls **display_stats** function
  - On **Reset button** click, the function handler for the click event should have the following functionality
     - increment games_played by 1
     - call reset_stats
     - call display_stats
     - Reset all cards to have the back face showing
>>>>>>> a0040ac1e88654dd0439e5c9ea6c7123a80f6a44
