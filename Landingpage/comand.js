document.getElementById("myform").addEventListener ("submit", function (event){

    const name = document.getElementById("name").value; 
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value; 
    const feedback = document.getElementById("feedback").value;

    if(name === "" || email === "" || contact ==="" ||  feedback=== ""){
        alert('fill all details');
        event.preventDefault();

    }
    else{
        alert('Form submitted');

    }
});