
//return the json object containing all the Products
function getDatabase()
{
    return Products;
}

//change 'availability' attribute of a json object in Products
//function is called from controller.js, parameters are also passed from there.
function changeAvailabilityOfProduct(myarray, availabilityValue)
{
    //myarray[0] contains the type of product e.g beer, wine etc
    //myarray[1] contains the unique 'nr' attribute of each product

    //loop through the list of products belonging to the particular type contained in myarray[0]
    for (i = 0; i < Products[myarray[0]].length; i++)
    {
        //if the matching item is found chnge it's availibility and return all the information of the item.
        if (Products[myarray[0]][i].nr == myarray[1])
        {
            Products[myarray[0]][i].available = availabilityValue;
            return Products[myarray[0]][i];
        }
    }
}

//called from controller.js parameters are passed in from controller.js
function getUser(username, password)
{
    //loop through all the users in DB return true or false if the user is found
    for (i = 0; i < DB.users.length; i++)
    {
        if (DB.users[i].username == username && DB.users[i].password == password)
        {
            return true;
        }
    }

    return false;
}