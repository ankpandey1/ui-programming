// var fill = document.querySelector('.fill');
// var empties = document.querySelectorAll('.empty');


$(document).ready(function ()
{
    // aFunction();
    var dragables = document.querySelectorAll('.dragable');
    var unavailable = document.querySelector('.unavailable');

    for (var dragable of dragables)
    {
        dragable.addEventListener('dragstart', dragStart);
        dragable.addEventListener('dragend', dragEnd);
    }

    unavailable.addEventListener('dragover', dragOver);
    unavailable.addEventListener('dragenter', dragEnter);
    unavailable.addEventListener('dragleave', dragLeave);
    unavailable.addEventListener('drop', dragDrop);
});

//Fill listeners
// fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);

//Loop through empties and call drag events
// for (const empty of empties)
// {
//     empty.addEventListener('dragover', dragOver);
//     empty.addEventListener('dragenter', dragEnter);
//     empty.addEventListener('dragleave', dragLeave);
//     empty.addEventListener('drop', dragDrop);
// }

// Drag functions
var dragableElement;
function dragStart()
{
    this.className += ' hold';

    setTimeout(() => (this.className = 'invisible'), 0);

    dragableElement = this;
}

function dragEnd()
{
    // this.className = 'fill';
    this.className = 'dragable';
}

function dragOver(e)
{
    e.preventDefault();
}

function dragEnter(e)
{
    // console.log(e);
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave()
{
    // this.className = 'empty';
    this.className = 'unavailable';
}

function dragDrop()
{
    // this.className = 'empty';
    this.className = 'unavailable';

    dragableElement.setAttribute('draggable', "false");

    var itemId = "#" + dragableElement.id;
    // console.log(itemId);
    $(itemId).find('.rmvbtn').css("display", "inline");
    // console.log();


    this.append(dragableElement);

    var myarray = dragableElement.id.split(/([0-9]+)/).filter(Boolean);

    updateDataBase(itemId, myarray, false);
}

// function removeItem(btn)
// {
//     var kindOfItem = $(btn).parent().parent().attr('id');
//     console.log(kindOfItem);

//     // var element = document.getElementById(kindOfItem);
//     // element.setAttribute('draggable', "true");
//     // var itemId = "#" + element.id;
//     // $(itemId).find('.rmvbtn').css("display", "none");

//     // document.getElementById("unlist").removeChild(element);

//     // if (kindOfItem.includes('beer')) document.getElementById("beerlist").appendChild(element);
// }