document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;
    
    let button1 = document.createElement('button');
    button1.textContent = 'Add Square';
    button1.setAttribute('class', 'button');
    body.appendChild(button1);
    
    
    
    const containerDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'flex-container');
    body.append(containerDiv);
    let divCount = 0;   
    
    
    button1.addEventListener('click', function() {
        let blackSquare = document.createElement('div');
        blackSquare.setAttribute('class', 'square');
        divCount++;
        blackSquare.setAttribute('id', divCount);
        
        
        blackSquare.addEventListener('mouseover', function() {
            blackSquare.innerText = blackSquare.id;
        })
        
        blackSquare.addEventListener('mouseout', function(){
            blackSquare.innerText = '';
        })

        blackSquare.addEventListener('click', function() {
            let nuColor = Math.floor(Math.random()*16777215).toString(16);
            blackSquare.style.backgroundColor = '#' + nuColor;
        })

        blackSquare.addEventListener('dblclick', function() {
            if (blackSquare.id % 2 == 0) {
                if (blackSquare.nextSibling) {
                    blackSquare.nextSibling.remove();
                } else {
                    alert('No square to remove');
                }
        } else {
            if (blackSquare.previousSibling) {
                blackSquare.previousSibling.remove();
            } else {
                alert('No square to remove');
            }
        }
        })
            
    containerDiv.append(blackSquare);
    })

})