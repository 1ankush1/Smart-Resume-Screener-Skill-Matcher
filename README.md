# Smart-Resume-Screener-Skill-Matcher
This Java system speeds up resume screening using a Trie-based Aho-Corasick engine. It loads thousands of skills into one automaton and scans each normalized PDF/DOCX resume in a single linear pass, detecting all matches at once. Skills are weighted against a job description to compute match scores, ranking candidates on an interactive interface.

Frontend: React + Vite + React Router + Axios <br>
<br>
How to Run (3 Steps) <br>
Install Node.js from https://nodejs.org<br>

Step 1. Open this folder in IntelliJ IDEA, open the terminal<br>
Run command: npm install<br><br>

Step 2. Start the website<br>
Run command: npm run dev<br><br>
<br>
opens http://localhost:8080<br>

Inside src/ <br>

    File           What it does
--> `main.jsx`       Starts React and loads the CSS <br>
-->`App.jsx`       Chooses which screen to show (login / register / dashboard <br>
-->`Login.jsx`     Login screen (demo, any email + password works) <br>
-->`Register.jsx`  Register screen (demo, saved in the browser only)<br>
-->`Dashboard.jsx` Main page: upload resume, job description, call backend <br>
-->`Results.jsx`   Shows score, matched skills, missing skills       
-->`style.css`     All the styling<br>
