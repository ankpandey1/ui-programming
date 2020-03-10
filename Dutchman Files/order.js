function subtract(){
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
}

function add(){
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) + 1;
    count = count > 10 ? 10 : count;        
    $input.val(count);
    $input.change();
    return false;
}



function getAllProducts(){
    var productItem={};
    var results=[];
    for(var i=0;i<Products['beer'].length;i++){
        productItem=Products['beer'][i];
        results.push(productItem);
    }
    for(var i=0;i<Products['wine'].length;i++){
        productItem=Products['wine'][i];
        results.push(productItem);
    }
    for(var i=0;i<Products['cocktail'].length;i++){
        productItem=Products['cocktail'][i];
        results.push(productItem);
    }
    for(var i=0;i<Products['dishes'].length;i++){
        productItem=Products['dishes'][i];
        results.push(productItem);
    }
    return results;
}

function getProductByType(type){
    var results=[];
   
    if(type=='all'){
        results=getAllProducts();
    }
    else if(type in Products){

        var productItem={};
        for(var i=0;i<Products[type].length;i++){
            productItem=Products[type][i];
            results.push(productItem);
        }
    }

    return results;
}


function listProductByType(){
    $('.itemContainer').empty();
    
    var results=getProductByType($('[name="type"]').val());
    if(results.length==0){
        $('.itemContainer').append('No result found');
    }else{
        for(var i=0;i<results.length;i++){
            $('.itemContainer').append('<div class="item">\
            <div><img src="http://placehold.it/150x150" /></div>\
            <div class="aName">'+results[i]['name']+'</div>\
            <div class="aPrice">'+results[i]['curprice']+' SEK</div>\
            <div class="number">\
                <span class="minus">-</span>\
                <input class="quantity" type="number" value="1" min="1" max="10" />\
                <span class="plus">+</span>\
            </div></div>');
        }
    }
    //add the script for controlling the number input (add and subtract) for each item
    $('.itemContainer').ready(function() {
        console.log('hello');
        $('.minus').click(function() {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function() {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) + 1;
            count = count > 10 ? 10 : count;
            $input.val(count);
            $input.change();
            return false;
        });
    });
}