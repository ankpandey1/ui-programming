function getDatabase()
{
    return Products;
}

function changeAvailabilityOfProduct(myarray, availabilityValue)
{
    for (i = 0; i < Products[myarray[0]].length; i++)
    {
        if (Products[myarray[0]][i].nr == myarray[1])
        {
            Products[myarray[0]][i].available = availabilityValue;
            return Products[myarray[0]][i];
        }
    }
}