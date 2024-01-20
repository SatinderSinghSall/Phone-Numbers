//Javascript below.

function checkPassword()
{
    var password = prompt("Please enter the password:");

    if (password === "vaibhav_001")
    {
        document.getElementById("mainTable").style.display = "table";
    } 
    
    else
    {
        alert("Incorrect password. Access denied. Try Again!");
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    checkPassword();
});