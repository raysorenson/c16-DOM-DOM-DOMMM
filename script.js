document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;   //save a few keystrokes. Probably not worth it
    
    let button1 = document.createElement('button');  //create element
    button1.textContent = 'Add Square';              //add text to element
    button1.setAttribute('class', 'button');         //add class and classname to element
    body.appendChild(button1);                       //adds element to html
    
    
    
    const containerDiv = document.createElement('div');   //creating a flex container
    containerDiv.setAttribute('class', 'flex-container'); //class for flex added
    body.append(containerDiv);                            //container added to html
    let divCount = 0;                                     //counter to increment div ID
    
    
    button1.addEventListener('click', function() {       //listener that adds squares
        let blackSquare = document.createElement('div');
        blackSquare.setAttribute('class', 'square');
        divCount++;                                      //increments counter
        blackSquare.setAttribute('id', divCount);        //applies counter to div ID
        
        
        blackSquare.addEventListener('mouseover', function() {
            blackSquare.innerText = blackSquare.id;       //adds text to new div
        })
        
        blackSquare.addEventListener('mouseout', function(){
            blackSquare.innerText = '';                   //removes text from new div
        })

        blackSquare.addEventListener('click', function() {
            let nuColor = Math.floor(Math.random()*16777215).toString(16);  //rando color generator
            blackSquare.style.backgroundColor = '#' + nuColor;              //applies rando color to element
        })

        blackSquare.addEventListener('dblclick', function() {
            if (blackSquare.id % 2 == 0) {                 //checks if square ID is even or odd
                if (blackSquare.nextSibling) {             //check for a nextSibling (nexted IF statement)
                    blackSquare.nextSibling.remove();      //remove next sibling
                } else {
                    alert('No square to remove');
                }
        } else {
            if (blackSquare.previousSibling) {            //checks for previos sibling (nested if statement)
                blackSquare.previousSibling.remove();     //remove previous sibling
            } else {
                alert('No square to remove');
            }
        }
        })
            
    containerDiv.append(blackSquare);       //append div. 
    })

})