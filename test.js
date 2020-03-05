
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
        window.location.replace("bartender.html");
    }
    else alert("User not found");
}

function logoutUser()
{
    var gotUser = false;

    if (!gotUser)
    {
        window.location.replace("login.html");
    }

    else alert("Something went wrong")
}

function alarm()
{
    var audio = new Audio('alarm.mp3');
    audio.play();
}