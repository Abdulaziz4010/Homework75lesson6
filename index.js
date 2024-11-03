document.getElementById('createButton').addEventListener('click', function () {
    let newButton = document.createElement('button');
    newButton.textContent = 'New Button';
    document.getElementById('buttonContainer').appendChild(newButton);
});


// 


document.addEventListener('keydown', function (event) {
    const rangDiv = document.getElementById('rangDiv');
    if (event.key === 'q') {
        rangDiv.style.backgroundColor = 'red';
    } else if (event.key === 's') {
        rangDiv.style.backgroundColor = 'yellow';
    } else if (event.key === 'd') {
        rangDiv.style.backgroundColor = 'darkgray';
    } else if (event.key === 'b') {
        rangDiv.style.backgroundColor = 'blue';
    }
});



// 

let intervalId;
        document.getElementById('toggleButton').addEventListener('click', function () {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null; 
            } else {
                intervalId = setInterval(() => {
                    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 500).toString(16)}`;
                }, 2000); 
            }
        });

// 



const rasmlar = ['rasm1.jpeg', 'rasm2.jpg', 'rasm3.jpg', 'rasm4.jpg', 'rasm5.jpg'];
        let index = 0;

        setInterval(() => {
            index = (index + 1) % rasmlar.length; 
            document.getElementById('rasm').src = rasmlar[index]; 
        }, 2000); 