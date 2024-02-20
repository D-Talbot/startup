# SaveDuck 🦆
> The less gory game of Hangman: saving ducks by solving words! 

## Startup Specification Deliverable
### Elevator Pitch

Introducing SaveDuck, a twist on the classic word-guessing game! Ever felt that Hangman was a *tad* too dark? Delve into a world where every correct guess not only reveals the mystery word but also rescues an adorable duck. Join in this delightful journey where fun meets compassion. Experience all of the same fun and guess correctly to save the duck! 

### Design

![Design](duck.png)

### Key Features

- Secure login/registration over HTTPS (User account creation and login functionality + display of the player's name after logging in)
- Ability to play SaveDuck and view the scoreboard
- Includes both an About page and the source from GitHub
- Storage of words, user profiles, scores, and game details.
- Real-time updates on word progress and duck reactions.
### Technologies

How I will be using each of the required technologies:
- **HTML** - Uses correct HTML structure for application. Four HTML pages: Login, Play, Scoreboard, and the About Page. Displaying the virtual duck, word underscores, and interactive buttons.
- **CSS** -Styling the game for a visually appealing and responsive design. Each page uses good design choices such as whitespace, colors, typography, and contrast.

## HTML Deliverable
➡️  For this deliverable I built out the basic content/structure of my application using HTML
- **HTML Pages**  - 4 pages: index, play, scoreboard, and the about page -> neccessary for logging in and playing SaveDuck.
- **Links** - Each page is accessible on every page.
- **Application** - Simple alphabet buttons, word underscores, and user name.
- **DB/Login** - Scoreboard for most ducks saved. Form for user to create an account and/or login as well as displaying their name. 
- **Images** - Plenty of placeholder images of ducks (ex: about, play, and index have some)
- **WebSocket Data** - Announcment updates on the status of the ducks.

## CSS Deliverable
➡️ For this deliverable I properly styled the application into its final appearance.
- **Header, footer, and main content body** - I applied css styling to all of them to look nice :)
- **Navigation elements** - I styled the nav bar using bootstrap, including the SaveDuck logo.
- **Responsive to window resizing** - My web page resizes and is responsive.
- **Application elements** - I used good contrast whitespace.
- **Application text content** - Consistent fonts, styling (italics, etc.), responsive text.
- **Application images** - I properly styled and placed my images. 

#### ignore everything below this for now 

## JavaScript deliverable
➡️ Provides various displays for each page. Includes user interaction for guessing letters via clickable alphabet buttons and logic for revealing correct guesses and tracking incorrect ones. (ex: interactive gameplay, and letter selection)
- **Service** - Backend service with endpoints for:
  - login
  - retrieving scores (including the date, names, etc.)
- **DB/Authentication** - Stores both the users and the date in the database. Authentication through registration and and login with credentials securely stored in the database. 
- **WebSocket** - After a user plays, they can check the scoreboard for their rank and their data is rendered each time a user starts/ends a game. Facilitating real-time communication between the client and server. Ensuring instant updates on word progress and game events.
## Service deliverable
➡️ For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

**Prerequisite** - Simon JavaScript deployed to simon.saveduck.click. Link included to my GitHub startup repo displayed in the footers. Notes here documenting what you modified/added with this deliverable
**Future Login** - After login, you are directed to the play page where the username is saved and displayed.
**Future Database** - Displayed the number of ducks saved (games won). Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
**Future WebSocket** - I used the setInterval function to periodically create random "realtime" websocket data of other users score/username. This will be replaced later once I do the WebSocket deliverable.
**Application Interaction Logic** - Randomly generated underscored word (user won't recieve the same one until they go through the rest). "Hangman" Functionality/Gameplay: The letters only show up after they get one correct. 

## DB/Login deliverable
➡️For this deliverable I associate the votes with the logged in user. I stored the votes in the database.

- **MongoDB Atlas database created** - done!
- **Stores data in MongoDB** - done!
- **User registration** - Creates a new account in the database.
- **existing user** - Stores the votes under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their votes.
- **Restricts functionality** - You cannot vote until you have logged in. This is restricted on the frontend only.

## WebSocket deliverable
➡️ For this deliverable I used webSocket to update the votes on the frontend in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - All user votes display in realtime. I'm really proud that this is working. Way cool!

## React deliverable
➡️ For this deliverable I converted the application over to use Vue. I know it is supposed to use React, but the instructor said I could use Vue because I already have extensive experience with React.

- **Bundled** and transpiled - done!
- **Components** - Login, voting list, vote are all components.
- **Router** - Routing between login and voting components.
- **Hooks** - Vue uses class properties instead of UseState to track changes in vote state.

## Notes
[Notes](startup/notes.md)