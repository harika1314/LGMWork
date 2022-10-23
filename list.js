document.querySelector('#submit').onclick = function () {
    if (document.querySelector('#nexttask input').value.length == 0) {
        alert("Please enter the task")
    }

    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#nexttask input').value}
                </span>
                <button class="delete">
                    <p>&#10006;</p>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}