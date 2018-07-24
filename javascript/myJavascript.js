/* Function to validate the form */ 
function validateForm(form){
    var firstName = form.fName.value;
    var lastName = form.lName.value;
    var email = form.eMail.value;

    /* Checking if the radio button is checked */
    var exChecked = document.getElementById("excellent").checked;
    var goodChecked = document.getElementById("good").checked;
    var avgChecked = document.getElementById("average").checked;
    var pChecked = document.getElementById("poor").checked;
    var vPChecked = document.getElementById("veryPoor").checked;

    /* Storing the final radio button checked boolean value */
    var radioChecked = (exChecked || goodChecked || avgChecked || pChecked || vPChecked);

    if(firstName == "" || lastName == "" || !radioChecked){
        alert("First name, last name and rating must be filled!");
        form.reset();
        return false;
    }
    
    /* regular expression to match email */
    var emailValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email != ""){
        if(!emailValid.test(email)){
            alert("Invalid E-mail address!");
            form.reset();
            return false;
        }
    }

    /* regular expression to match alphabets */
    var letters = /^[A-Z a-z]+$/;

    if(!(letters.test(form.fName.value) && letters.test(form.lName.value))){
        alert("First and last name can have only alphabets!");
        form.reset();
        return false;
    }
    
    var rated = form.rating.value;
    var comment = form.comment.value;

    if(comment == ""){
        alert("Dear "+firstName+", Thank you very much for your feedback."+
     " You have rated our site as "+rated);
    }else{
        alert("Dear "+firstName+", Thank you very much for your feedback."+
     " You have rated our site as "+rated+" and your comment was "+comment);
    }
}