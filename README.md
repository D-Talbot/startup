![](logo.png)
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
- Real-time updates on word progress and alphabet characters. 
### Technologies

How I will be using each of the required technologies:
- **HTML** - Uses correct HTML structure for application. Four HTML pages: Login, Play, Scoreboard, and the About Page. Displaying the virtual duck, word underscores, and interactive buttons.
- **CSS** -Styling the game for a visually appealing and responsive design. Each page uses good design choices such as whitespace, colors, typography, and contrast.
- **Javascript Application** - Simple alphabet buttons, word/character underscores, and user name iteractivity.
- **DB/Login** - Scoreboard for most ducks saved. Form for user to create an account and/or login as well as displaying their name. 
- **WebSocket Data/Service** - Endpoints for getting and updating the scores. Announcment updates on the status of the ducks and their rescuers.

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
- **DB/Authentication** - Stores both the users and the date in the database. Authentication through accout/login which is stored in the database. 
- **WebSocket** - After a user plays, they can check the scoreboard for their rank and their data shown on the scoreboard. Psuedo websocket data generated.

## Service deliverable
➡️ For this deliverable I added backend endpoints that receives.. and returns.

- **Node.js/Express HTTP service** - done! Can be found in my index.js file :)
- **Calls to third party endpoints** - done! I have a random photo display on the About page. 
- **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for getting/updating the scoreboard.
- **Frontend calls service endpoints** - I did this using the fetch function.
- **Static middleware for frontend** - done! Also found in index.js.

## DB/Login deliverable
➡️For this deliverable I associate the saved # of ducks with the logged in user. I stored the score in the database.

- **MongoDB Atlas database created** - complete!
- **Stores Application Data in MongoDB** - done!
- **New User Registration** - Creates a new account in the database.
- **Existing User Registration** - Stores the scores under the same user if the user already exists.
- **Use MongoDB to Store/Retrieve Credentials** - Stores both user and their scores.
- **Restricts Functionality** - You cannot play until you have logged in. This is restricted on the frontend only.

## WebSocket deliverable
➡️ For this deliverable I used webSocket to update the scores (ducks saved) on the frontend in realtime.

- **Backend listens for WebSocket connection** - done!
- **Simon Websocket Deliverable Deployed** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - Duck rescued display in realtime.

## React deliverable
➡️ For this deliverable I converted the application over to use React.

- **Bundled** and transpiled - done!
- **Components** - Login, are all components.
- **Router** - Routing between login and scoring components.
- **Hooks** - UseState to track changes.

## Notes
[Notes](startup/notes.md)
