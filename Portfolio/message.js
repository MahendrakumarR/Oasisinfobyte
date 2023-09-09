document.getElementById("myform").addEventListener ("submit", function (event){

    const name = document.getElementById("name").value; 
    const contact = document.getElementById("email").value;
    const email = document.getElementById("contact").value; 
    const feedback = document.getElementById("feedback").value;

    if(name === "" || contact === "" || email ==="" ||  feedback=== ""){
        alert('fill all details');
        event.preventDefault();

    }
    else{
        alert('Contact please click the mail icon');

    }
});