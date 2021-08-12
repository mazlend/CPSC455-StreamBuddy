README 
## What StreamBuddy is about

StreamBuddy allows users to search, browse, discover, track, review, and share films that are available on Netflix. It gives users advanced search options to refine their search to find the exactly right film. We have built a social network so users can view the profiles and reviews of other users, and see who is following them.


**Requirements**

We defined the following minimal, standard and stretch goals for our project.

***Minimal Requirements***
1. Search film information on a movie database (IMDb / The Movie Database / Rotten Tomatoes) via an API.  ✅
2. Allow users to filter films  (filter e.g. country, language, genre, cast, year of release, rating).  ✅
3. Match up filtered results to films available on Netflix.  ✅
4. Responsive UI that works across all devices, content displays properly on various screen sizes.  ✅
 
***Standard Requirements***
1. Create a user profile and manage login credentials.  ✅
2. Users can add watched films to their seen list. ✅
3. Users can add films they would like to watch to their watchlist. ✅
4. Users can rate films and post reviews. ✅

***Stretch Requirements***
1. Users can follow other users (similar to letterboxed) and view their seen list, watchlist, ratings, and reviews history. ✅
2. Pull watch history from a user’s Netflix, Crave, etc. accounts for more detailed recommendations. ❌
3. Add other streaming services and their media onto our product (e.g. Amazon Prime, Hulu, Crave, etc.)  ❌


# The following technology was used

## HTML/CSS/JS
While this course has started out with teaching the use of HTML we did not make use of it for the development of our project. We switched to React because HMTL re-renders the entire page. We did make extensive use of CSS and JavaScript though.
HTML: We do not use the index.html file other than it being the ‘entry point’ (ie. the root of our DOM tree) for the code and the place where everything gets rendered onto by index.js.
CSS: We used Material-UI for components and found it ideal to use a Material-UI theme provider, theme, and use styles to manage branding colors, styling, fonts, and ensure the website looks consistent throughout.
JavaScript: is a scripting language that makes it easy to dynamically update content and allow for interaction. It is a popular language that allows for faster user experience through client-side execution, a smooth interaction with the server through asynchronous calls. Since it can also be used on the server side using Node.js (a JS runtime that allows us to use JS outside of a web browser) it was a natural choice to use it. 

## React
React is a declarative and efficient JavaScript-library that allows for the development of user interfaces. Using components makes it incredibly easy to reuse code and structure pages in a way that is intuitive.
React Hooks and functional components were used to manage states and render changes efficiently. We used the context hook to manage the logged in user information across multiple components, a state hook to keep track of user interaction and state changes of various components such as the advanced film search filters, and used a use effect hook to efficiently re-render the component every time a state changed and information on the website needed to be updated.
Material-UI: was used for the rapid development of components that already come with a certain look. Being a React framework, Material-Ui lends itself well to the combination with React. Material-UI also allows for customization of components which we made use of extensively in the navigation bar and the sidebar. We also combined paper, cards, grids, and modal to create more complex components such as the Movie cards with pop ups and user social network profiles. 
React and Material-Ui combined with our creativity has resulted in a visually appealing, highly efficient, and responsive user interface.

## Node/Express
Node.js: was very useful for developing our application and making use of the ability to run JavaScript both on the client and server side. It’s an asynchronous, event-based communication between the browser and the server, enabling us to efficiently respond to frontend user actions. We used node modules and development dependencies to build and run our application.
Express: is a light-weight web application framework for Node.js. It allowed us to quickly implement a REST API for our server that uses routes and controllers.

## MongoDB

After scraping data from websites to construct a list of movies available on Netflix we created functions to automatically fetch data from the Open Movie Database (OMDb database) to construct the details of each film (genre, year of release, cast, language, etc.). We subsequently filtered and cleaned the data to make it consistent and stored it in the MongoDB database. We created two collections, one to store all film data and second to store all user data. MongoDB was a great choice because its document-based approach allowed us to efficiently and easily find and update data. Adapting the data model to allow for reviews etc. was an easy accomplishment with MongoDB.

## Release Engineering
We used Github actions to deploy our application on Heroku. Github actions allow for continuous development - each time code is pushed to master, the site is automatically updated. We utilised git as version control software. To maintain good practices, each contributor created their own branch which was merged every sprint. The main branch would be updated every sprint and thus would gradually have functionality added without merge conflicts.


# Where we went above & beyond

Our project goes beyond the basic requirements and utilizes a myriad of complex technologies:

We did extensive user experience research to develop a visual identity and branding for StreamBuddy. Our application design displays aesthetic sophistication combined with memorable user experience, and advances inclusion and equity. We were careful with our word choices. For instance, we choose to use stars instead of actors and actresses to be gender neutral and inclusive. There is an adequate contrast between content and background colors. The blocks of content are succinct with accessible fonts and sizes to accommodate people with reading or visual disabilities, and alt text is used to describe images and convey information where needed.

Our site is responsive and resizes to fit mobile screens through automatic sliders. We used icons, typewriter animation, and more to enhance the user experience. 

Our project integrated social media. We used google authentication with react to allow users to sign in with their gmail accounts. The site would automatically pull their personal information and use that to generate a  user profile for StreamBuddy. We also built a social network functionality which allowed users to follow and be followed.

The film advanced search algorithm had a complex implementation. This was accomplished by sending a search query from the front-end to the back-end with axios calls. In the back-end, regex-objects were created to populate each criteria in the query. We had to ensure that each individual component in the front-end passed in the correct callback.

To generate our media, we utilized Javascript to scrape a website which contained a list of all Netflix movies. We used the Open Movie Database, OMDB API, to gather information pertaining to each film including country, genre, release date, cast, and ratings. We cleaned all this data to put into our MongoDB database. 


# Things we would like to improve

We intend to add increased security measures on user profiles and information, as sensitive data is being handled. This includes hashing of authentication as well as other protective measures. Further, we intend to update the database automatically to keep media current and add content from other streaming sites like Crave, Hulu, and Amazon Prime. This would be accomplished by utilizing unofficial APIs that list the media on other streaming services. We would also like to implement a dynamic search which would update the results as soon as users type.


# Team shoutouts!

Our team worked incredibly hard to put this project together even though we lacked experience in creating a full-stack app. Everyone was able to contribute with their individual strengths and through the collective effort of the team we were able to learn together and create an end-result that we are proud of.

***Saad Shahid***: Scrapped websites to generate a list of films currently available on Netflix. Created functions to automatically get data from the open movie database (OMBb API) and store it in the StreamBuddy MongoDB database. Developed search and advanced search button components, implemented frontend for simple and advanced search of films including frontend axios and callback functions for films. Contributed to fix bugs and to improve design of the site. Deployed the final project on Heroku using Github actions.

***Jeffrey Kwok***: Implemented the backend and frontend search and advanced search functionalities for films including advanced search filters, film axios, backend film routes, and schema. Assisted in creating the social network, implemented the unfollow functionality, and a pop up to view watchlist and reviews. Debugged errors and deployed the final project on Github and Heroku. Fixed styling and alignment front-end issues.

***Mark Coleman***: Developed many frontend components including a responsive Sidebar, Moviecard, MoviecardList, MoviecardListDense, MoviecardListWrapper, MovieCardActions, Alerts, and Authentication. Worked on frontend user axios. Significantly contributed to fix all frontend bugs and to make the user interface responsive and visually appealing.

***Florentina Simlinger***: Conducted research on UX design, designed the StreamBuddy logo, created frontend components including the RangeSlider, Ratings and Review Input, Reviews, Profile Navbar, and User. Substantially contributed to fix all frontend bugs and to make the user interface look great and responsive. Contributed to team organization by keeping documentation up to date and led team discussions.

***Nazish Tazeem***: Created a responsive navigation bar, a reusable autocomplete plus checkbox component for advanced search of films, user context hook, and about page. Developed all social network components (network, network bar, user cards, and user card). Implemented delete review, frontend user Axios, and the entire user backend. Contributed to fixing bugs, branding, and making the user interface visually appealing.
