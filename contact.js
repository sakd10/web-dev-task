function validate()
{
    var name=document.getElementById("name");
    var phone=document.getElementById("phone");
    if(name.value=="" || phone.value==""){
        alert("Please enter required filled");
        return false;
    }
    else
    { 
        alert("Submitted Successfully!");
        return true;
    }
}