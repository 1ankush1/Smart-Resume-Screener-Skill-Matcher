Smart Resume Screener (Frontend)

How to Run (3 Steps) 
Install Node.js from https://nodejs.org

Step 1. Open this folder in IntelliJ IDEA, open the terminal
Run command: npm install

Step 2. Start the website
Run command: npm run dev

opens http://localhost:8080

Inside src/ 

    File           What it does
--> `main.jsx`       Starts React and loads the CSS
-->`App.jsx`       Chooses which screen to show (login / register / dashboard
-->`Login.jsx`     Login screen (demo, any email + password works)
-->`Register.jsx`  Register screen (demo, saved in the browser only)
-->`Dashboard.jsx` Main page: upload resume, job description, call backend 
-->`Results.jsx`   Shows score, matched skills, missing skills           
-->`style.css`     All the styling                                       
