var alcoholType = ""

//get all products from the new database
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

//get specified products by the type, if the type is 'all' then get all products
function getProductByType(type){
	alcoholType = type;
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

//list the results using flexboxes
function listProductByType(){
	var imagePath = getImagePath(alcoholType)
    $('.itemContainer').empty();
    
    var results=getProductByType($('[name="type"]').val());
    if(results.length==0){
        $('.itemContainer').append('No result found');
    }else{
        for(var i=0;i<results.length;i++){
            $('.itemContainer').append('<div class="item"  draggable="true" ondragstart="startDragging(this)">\
            <div><img src="'+imagePath+'"/></div>\
            <div class="aName">'+results[i]['name']+'</div>\
            <div class="aPrice">'+results[i]['curprice']+' SEK</div>\
			<div class="header"><span><button type="expandButton">+</button><p style="\
			display: inline-block;">Details</p> </span></div>\
			<div class="expand">\
				<ul><li>Producer:'+results[i]['producer']+'</li>\
				<li>Country:'+results[i]['countryoforiginlandname']+'</li>\
				<li>Alcohol%: '+results[i]['alcoholstrength']+'</li>\
				</ul></div>\
			</div>');
        }
    }
    //add the script for controlling the number input (add and subtract) for each item
    $('.itemContainer').ready(function() {

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
	
	$(".header").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
		var toggleButtonText=$header.find('button')[0].innerText;
		if(toggleButtonText==="+"){
			$header.find('button')[0].innerText="-";
		}else{
			$header.find('button')[0].innerText="+";
		}
//        $header.children()[0].innerText = 	$content.is(":visible") ? "-" : "+";
		//(function () {
            //change text based on condition
          //  return $content.is(":visible") ? '-' : '+';
        //});
    });

});

function getImagePath(type){
	var imagePath = "";
	switch(type) {
		case "beer":
		imagePath = "images/beer.jpg";
		break;
		case "wine":
		imagePath = "images/wine.jpg";
		break;
		case "cocktail":
		imagePath = "images/cocktail.jpg";
		break;
		case "dishes":
		imagePath = "images/dishes.jpg";
		break;
		default:
		imagePath = "images/all.jpg";
	}
	return imagePath;
}
}