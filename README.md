# CPSC 455-StreamBuddy

## Project Description

***Project Summary***
StreamBuddy allows users to search, browse, discover, track, review, and share films that are available on Netflix. It gives users advanced search options to refine their search to find the exactly right film. We have built a social network so users can view the profiles and reviews of other users, and see who is following them.

## Project Task Requirements
***Minimal requirements:***  
1. Search film information on a movie database (IMDb / The Movie Database / Rotten Tomatoes) via an API.  ✅
2. Allow users to filter films  (filter e.g. country, language, genre, cast, year of release, rating).  ✅
3. Match up filtered results to films available on Netflix.  ✅
4. Responsive UI that works across all devices, content displays properly on various screen sizes.  ✅
  
***Standard" requirements:***  
1. Create a user profile and manage login credentials.  ✅
2. Users can add watched films to their seen list. ✅
3. Users can add films they would like to watch to their watchlist. ✅
4. Users can rate films and post reviews. ✅

***Stretch requirements (plan to complete at least 1!):***  
1. Users can follow other users (similar to letterboxed) and view their seen list, watchlist, ratings, and reviews history. ✅
2. Pull watch history from a user’s Netflix, Crave, etc. accounts for more detailed recommendations. ❌
3. Add other streaming services and their media onto our product (e.g. Amazon Prime, Hulu, Crave, etc.)  ❌


## Description on how tech from Units 1- 5 are used in the project
***HTML/CSS/JS***
**HTML**: We do not use the index.html file other than it being the ‘entry point’ (ie. the root of our DOM tree) for the code and the place where everything gets rendered onto by index.js.
**CSS**: We used Material-UI for components and found it ideal to use a Material-UI theme provider, theme, and use styles to manage branding colors, styling, fonts, and ensure the website looks consistent throughout.
JavaScript: is a scripting language that makes it easy to dynamically update content and allow for interaction. It is a popular language that allows for an efficient user experience through client-side execution, smooth interaction with the server through asynchronous calls. Since it can also be used on the server-side using Node.js (a JS runtime that allows us to use JS outside of a web browser) it was a natural choice to use it. 

***React***
React is a declarative and efficient JavaScript library that allows for the development of user interfaces. Using components makes it incredibly easy to reuse code and structure pages intuitively.

**React Hooks**: we extensively used react hooks to manage states and render changes efficiently. We used the context hook to manage the logged-in user information across multiple components, a state hook to keep track of user interaction and state changes of various components such as the advanced film search filters, and used a use effect hook to efficiently re-render every time a state changed and information on the website needed to be updated.

**Material-UI**: We used Material-UI for the rapid development of components that already come with a certain look. Being a React framework, Material-Ui lends itself well to the combination with React. Material-UI also allows for customization of components which we made use of extensively in the navigation bar and the sidebar. We also combined paper, cards, grids, and modals to create more complex components such as Movie cards with pop-ups and social network profiles. 

React and Material-Ui combined with our creativity have resulted in a visually appealing, highly efficient, and responsive user interface.

***Node/Express***
Node.js was very useful for developing our application and making use of the ability to run JavaScript both on the client and server side. Its asynchronous, event-based communication between the browser and the server, enabled us to efficiently respond to frontend user actions. We used node modules and development dependencies to build and run our application.
Express is a lightweight web application framework for Node.js. It allowed us to quickly implement a REST API for our server that uses routes and controllers.

***MongoDB***
Scrapped data from websites to construct a list of movies available on Netflix. 
Created functions to automatically fetch data from the Open Movie Database (OMDb database) to construct the details of each film (genre, year of release, cast, language, etc.)
Filtered and cleaned data to make it consistent and stored it in the MongoDB database.
Created two collections, one to store all films data and second to store all user data

***Release Engineering***
Used Github actions to deploy our application on Heroku. Github actions allow for continuous development - each time code is pushed to master, the site is automatically updated.
We utilized git as version control software. To maintain good practices, each contributor created their branch which was merged every sprint. The main branch would be updated every sprint and thus would gradually have functionality added without merge conflicts.

## Description of ‘Above and Beyond’ functionality. Please give a clear description and in-depth explanation of how you went above and beyond the requirements of the course. 
Our project goes beyond the basic requirements and utilizes a myriad of complex technologies:

We did extensive user experience research to develop a visual identity and branding for StreamBuddy. Our application design displays aesthetic sophistication combined with memorable user experience and advances inclusion and equity. We were careful with our word choices. For instance, we choose to use stars instead of actors and actresses to be gender-neutral and inclusive. Our contents are succinct and displayed in easy-to-read fonts to accommodate people with visual disabilities. Alt-text conveys information about images and media if needed. 

Our site is responsive and resizes to fit mobile screens through automatic sliders. We used icons, typewriter animation, and more to enhance the user experience. 

Our project integrated social media. We used google authentication with React to allow users to sign in with their Gmail accounts. The site would automatically pull their personal information and use that to generate a  user profile for StreamBuddy. We also built a social network functionality that allowed users to follow others.

The film advanced search algorithm had a complex implementation. This was accomplished by sending a search query from the front-end to the back-end with Axios calls. In the back-end, regex-objects were created to populate criteria in the query. We had to ensure that each component in the front-end passed in the correct callback.

To generate our media, we utilized Javascript to scrape a website that contained a list of all Netflix movies. We used the Open Movie Database, OMDB API, to gather information about each film. This information includes country, genre, release date, cast, and ratings. We cleaned all this data to put into our MongoDB database. 

## Description of Next Steps. What would you do next to further improve the app, or add additional relevant functionality? 
-Hashing of authentication 
-Automatic updates of database
-Adding content from other streaming sites

We intend to add increased security measures on user profiles and information, as sensitive data is being handled. This includes hashing of authentication as well as other protective measures. Further, we intend to update the database automatically to keep media current and add content from other streaming sites like Crave, Hulu, and Amazon Prime. This would be accomplished by utilizing unofficial APIs that list the media on other streaming services.


## List of contributions. Highlight areas where each team member contributed significantly.

***Saad Shahid***: Scrapped websites to generate a list of films currently available on Netflix. Created functions to automatically get data from the open movie database (OMBb API) and store it in the StreamBuddy MongoDB database. Developed search and advanced search button components, implemented frontend for simple and advanced search of films including frontend axios and callback functions for films. Contributed to fix bugs and to improve design of the site. Deployed the final project on Heroku using Github actions.

***Jeffrey Kwok***: Implemented the backend and frontend search and advanced search functionalities for films including advanced search filters, film axios, backend film routes, and schema. Assisted in creating the social network, implemented the unfollow functionality, and a pop up to view watchlist and reviews. Debugged errors and deployed the final project on Github and Heroku. Fixed styling and alignment front-end issues.

***Mark Coleman***: Developed many frontend components including a responsive Sidebar, Moviecard, MoviecardList, MoviecardListDense, MoviecardListWrapper, MovieCardActions, Alerts, and Authentication. Worked on frontend user axios. Significantly contributed to fix all frontend bugs and to make the user interface responsive and visually appealing.

***Florentina Simlinger***: Conducted research on UX design, designed the StreamBuddy logo, created frontend components including the RangeSlider, Ratings and Review Input, Reviews, Profile Navbar, and User. Substantially contributed to fix all frontend bugs and to make the user interface look great and responsive.

***Nazish Tazeem**: Created a responsive navigation bar, a reusable autocomplete plus checkbox component for advanced search of films, user context hook, and about page. Developed all social network components (network, network bar, user cards, and user card). Implemented delete review, frontend user Axios, and the entire user backend. Contributed to fixing bugs, branding, and making the user interface visually appealing.


## Prototypes

### Browser View
![](/images/browser-desktop.jpg)

### Mobile View
![](/images/mobile.jpg)

### Tablet View
![](/images/tablet.jpg)
