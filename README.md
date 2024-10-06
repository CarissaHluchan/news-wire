# 📰 News Wire 📰

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

### Technology:
[//]: <> (Add technology you used for this project.) 
1. React
2. React Router
3. Asynchronous JavaScript
4. Cypress
5. CSS

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
**1. _(optional) Fork this project to your own Github account._**
> [!WARNING]
> **[Node.js](https://nodejs.org/en), [npm](https://www.npmjs.com/) are required to run this app.**<br>
> _Please ensure you have both installed on your machine before proceeding._
  - Clone the repository to your local machine.
  - `cd` into the project folder.
  - Use the `npm install` command to install the project dependencies.
  - Use the `npm start` command to run webpack.
  - Check the console for the `PORT` and copy/paste `localhost:PORT` into your web browser.

**2. If you fork this repo you will need to request an API key.**
> [!WARNING]
> **You will need to request an API key to run this app, go to: [News API](https://newsapi.org/).**<br>
> _Please ensure you have an API key to see a working app._
  - create a .env file in the root directory
  - Enter code: `REACT_APP_NEWS_API_KEY=(your API key here)`

**3. To run Cypress testing**
- in the console type `npm run cypress`
- for issues: [Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### Design:
[Design Board](https://www.canva.com/design/DAGR4jaG3Zk/Gn9o1KjUGndzhEMUdDLmwQ/edit)

<img width="693" alt="Screenshot 2024-10-06 at 11 45 55 AM" src="https://github.com/user-attachments/assets/6b9f8cb3-37a7-49c8-85d3-6307f27a0a8a">

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![News Wire Preview](https://github.com/user-attachments/assets/9b6aacbe-6ac3-46c0-a9c4-daf60df8b180)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This solo project took me roughly 11 hours to complete. I am in the 22nd week of intensive front-end web development training program.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
This application was built by: [Carissa Hluchan](https://github.com/CarissaHluchan)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
- A strong understanding of React JS and Front-End best practices
- Ability to prioritize for MVP
- An understanding of basic usability practices and standards
- A clear hierarchy of information
- Clean, well thought out code
- Try to limit total time to around 8 hours on this project. 

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
- Building a calendar in React: With research, I found additional libraries with prebuilt components to handle the Controler and DatePicker.
- Working with the API's date format. I found the best way to manipulate the date was with Moment. I was then able to use the date as the id for NewsCards and for the URL of the DetailedView.
- Keeping to the time limit proved challenging and went over the time limit with most of my time surrounded around the research of the DatePicker as this was my first time working with a calendar inside of React.
- Ambition to learn unit testing with React: Due to the time limit I was not able to complete this. I would need more time available to learn React Unit Testing. It's on my to-do list.
