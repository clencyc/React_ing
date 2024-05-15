const page = (
    <div>
        <img src="./reactlogo.png" width="65px" height="60px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was Originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>It is maintained by Facebook</li>
            <li>It is used by many companies</li>
        </ul>
    </div>

)
ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(nav))