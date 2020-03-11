var fill = document.querySelector('.fill');
var empties = document.querySelectorAll('.empty');
var dragables = document.querySelector('.dragablediv');

//Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
dragables.addEventListener('dragstart', dragStart);
dragables.addEventListener('dragend', dragEnd);

//Loop through empties and call drag events

for (const empty of empties)
{
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag functions
function dragStart()
{
    this.className += ' hold';

    // setTimeout(function foo()
    // {
    //     if (this.className == 'fill hold')
    //     {
    //         this.className = 'invisible';
    //         console.log("asd");
    //     }
    // }, 0);
}

function dragEnd()
{
    // console.log("This is when ending: ", this.className);
    if (this.className == 'fill hold') this.className = 'fill';
    else this.className = 'dragablediv';
    // console.log(this.className);
}

function dragOver(e)
{
    e.preventDefault();
    console.log(this.className);
}

function dragEnter(e)
{
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave()
{
    this.className = 'empty';
}

function dragDrop()
{
    this.className = 'empty';
    this.append(fill);
}