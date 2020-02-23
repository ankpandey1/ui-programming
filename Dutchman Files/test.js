// jQuery
$(document).ready(function ()
{
    if ($('body').is('.barwaitpage'))
    {
        displayDrinks();
    }
});

// $(document).ready(function ($)
// {

//     if (window.history && window.history.pushState)
//     {

//         window.history.pushState('forward', null, './#forward');

//         $(window).on('popstate', function ()
//         {
//             alert('Back button was pressed.');
//         });

//     }
// });

function loginUser()
{
    var gotUser = false;

    for (i = 0; i < DB.users.length; i++)
    {
        if ((document.getElementById("username").value == DB.users[i].username ||
            document.getElementById("username").value == DB.users[i].email) &&
            document.getElementById("password").value == DB.users[i].password)
        {
            gotUser = true;
            break;
        }
    }

    if (gotUser)
    {
        window.location.replace("barwait.html");
    }
    else alert("User not found");
}

function displayDrinks()
{
    for (i = 0; i < 100; i++)
    {
        var newDiv = document.createElement("div");
        var list = document.createElement("li");
        var drinkName = document.createTextNode(DB2.spirits[i].name);
        var button = document.createElement("button");
        button.innerHTML = "Show More";
        button.id = i;
        button.setAttribute('onclick', "hideDiv(this.id)")

        var drinkInfoDiv = document.createElement("div");
        drinkInfoDiv.id = "drink" + i;
        drinkInfoDiv.style = "display:none";

        var jsonDataPretty = document.createElement("pre");

        var allDrinkInfo = document.createTextNode(JSON.stringify(DB2.spirits[i], null, 2));
        var priceLabel = document.createElement("label");
        priceLabel.innerHTML = "Price: ";

        var priceBox = document.createElement("input");
        priceBox.setAttribute('type', "number");
        priceBox.setAttribute('value', DB2.spirits[i].priceinclvat);

        var drinkAvailabilityText = document.createTextNode("Is Available");

        var checkBox = document.createElement("input");
        checkBox.setAttribute('type', "checkbox");

        var changeDataButton = document.createElement("button");
        changeDataButton.innerHTML = "Save Changes";

        list.appendChild(drinkName);
        list.appendChild(button);
        newDiv.appendChild(list);
        jsonDataPretty.appendChild(allDrinkInfo);
        drinkInfoDiv.appendChild(jsonDataPretty);
        drinkInfoDiv.appendChild(priceLabel);
        drinkInfoDiv.appendChild(priceBox);
        drinkInfoDiv.appendChild(drinkAvailabilityText);
        drinkInfoDiv.appendChild(checkBox);
        drinkInfoDiv.appendChild(changeDataButton);
        newDiv.appendChild(drinkInfoDiv);
        document.getElementById("drinkList").appendChild(newDiv);
    }
}

function hideDiv(id)
{
    // console.log("drinkInfo", id);

    var x = document.getElementById("drink" + id);


    if (x.style.display === "none")
    {
        x.style.display = "block";
        document.getElementById(id).innerHTML = "Show Less"
    }
    else
    {
        x.style.display = "none";
        document.getElementById(id).innerHTML = "Show More"
    }
}