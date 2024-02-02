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
- **JavaScript** - Provides various displays for each page. Includes user interaction for guessing letters via clickable alphabet buttons and logic for revealing correct guesses and tracking incorrect ones. (ex: interactive gameplay, letter selection, and text updates.)
- **Service** - Backend service with endpoints for:
  - login
  - retrieving scores (including the date, names, etc.)
- **DB/Authentication** - Stores both the users and the date in the database. Authentication through registration and and login with credentials securely stored in the database. 
- **WebSocket** - After a user plays, they can check the scoreboard for their rank and their data is rendered each time a user starts/ends a game. Facilitating real-time communication between the client and server. Ensuring instant updates on word progress, duck reactions, and game events.
- **React** - Application ported to use the React web framework.

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
- **Header, footer, and main content body** - 
- **Navigation elements** - I dropped the underlines and changed the color for anchor elements.
- **Responsive to window resizing** - My app looks great on all window sizes and devices
- **Application elements** - Used good contrast and whitespace
- **Application text content** - Consistent fonts
- **Application images** -  

#### ignore everything below this for now :)

## JavaScript deliverable
➡️ For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **login** - When you press enter or the login button it takes you to the voting page.
- **database** - Displayed the voting counts. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- **WebSocket** - I used the setInterval function to periodically increase a random vote count. This will be replaced with WebSocket messages later.
- **application logic** - The highlight and ranking number change based up the user's selection

## Service deliverable
➡️ For this deliverable I added backend endpoints that receives votes and returns the voting totals.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - I didn't have time to implement this. 😔
- **Backend service endpoints** - Placeholders for login that stores the current user on the server.
- **Endpoints** - for voting.
- **Frontend calls service endpoints - I did this using the fetch function.

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