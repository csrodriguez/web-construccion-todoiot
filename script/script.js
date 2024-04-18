const btnMode = document.querySelector("#btnMode");

btnMode.addEventListener("click", () => {
    if (btnMode.outerText === "Dark") {
        /* Dark Mode */

        btnMode.innerText='Light'

        document.getElementById('btn-about').classList.remove('btn-light');
        document.getElementById('btn-about').classList.add('btn-dark');
     
        document.getElementById('main').classList.remove('main-light');
        document.getElementById('main').classList.add('main-dark');
        document.getElementById('h2-main-title').classList.remove('h2-main-title-light');
        document.getElementById('h2-main-title').classList.add('h2-main-title-dark');

        document.getElementById('to-do-list').classList.remove('to-do-light');
        document.getElementById('to-do-list').classList.add('to-do-dark');
        document.getElementById('h2-to-do-list').classList.remove('to-do-h2-light');
        document.getElementById('h2-to-do-list').classList.add('to-do-h2-dark');

        document.getElementById('completed-tasks').classList.remove('completed-task-light');
        document.getElementById('completed-tasks').classList.add('completed-task-dark');
        document.getElementById('h2-completed-task').classList.remove('comp-task-h2-light');
        document.getElementById('h2-completed-task').classList.add('comp-task-h2-dark');



    } else if (btnMode.innerText === "Light") {
        /* Light Mode */

        btnMode.innerText='Dark'

        document.getElementById('btn-about').classList.remove('btn-dark');
        document.getElementById('btn-about').classList.add('btn-light');

        document.getElementById('main').classList.remove('main-dark');
        document.getElementById('main').classList.add('main-light');
        document.getElementById('h2-main-title').classList.remove('h2-main-title-dark');
        document.getElementById('h2-main-title').classList.add('h2-main-title-light');

        document.getElementById('to-do-list').classList.remove('to-do-dark');
        document.getElementById('to-do-list').classList.add('to-do-light');
        document.getElementById('h2-to-do-list').classList.remove('to-do-h2-dark');
        document.getElementById('h2-to-do-list').classList.add('to-do-h2-light');

        document.getElementById('completed-tasks').classList.remove('completed-task-dark');
        document.getElementById('completed-tasks').classList.add('completed-task-light');
        document.getElementById('h2-completed-task').classList.remove('comp-task-h2-dark');
        document.getElementById('h2-completed-task').classList.add('comp-task-h2-light');
    }
    
});

