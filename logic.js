document.addEventListener('DOMContentLoaded', function() {
    // create a div element with two buttons inside and append it to the body
    var div = document.createElement('div');
    div.id = 'footer';
    var buttonCreate = document.createElement('button');
    buttonCreate.id = 'create';
    buttonCreate.textContent = 'Create';
    buttonCreate.addEventListener('click', function() {
        // create a new div element and append it to the body
        listOfColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'grey'];
        // select a random color from the list
        var color = listOfColors[Math.floor(Math.random() * listOfColors.length)];
        var div = document.createElement('div');
        div.className = 'circle';
        div.style.backgroundColor = color;
        div.addEventListener('click', function() {
            // remove the div element from the body
            this.parentNode.removeChild(this);
        });
        document.body.appendChild(div);
    });

    var buttonDelete = document.createElement('button');
    buttonDelete.id = 'delete';
    buttonDelete.textContent = 'Delete';
    buttonDelete.addEventListener('click', function() {
        // delete the last div element from the body
        var divs = document.querySelectorAll('div.circle');
        if (divs.length > 0) {
            var lastDiv = divs[divs.length - 1];
            document.body.removeChild(lastDiv);
        }
    });

    var buttonDeleteAll = document.createElement('button');
    buttonDeleteAll.id = 'deleteAll';
    buttonDeleteAll.textContent = 'Delete All';
    buttonDeleteAll.addEventListener('click', function() {
        // delete all div elements from the body
        var divs = document.querySelectorAll('div.circle');
        for (var i = 0; i < divs.length; i++) {
            document.body.removeChild(divs[i]);
        }
    });

    div.appendChild(buttonCreate);
    div.appendChild(buttonDelete);
    div.appendChild(buttonDeleteAll);
    document.body.appendChild(div);
});