function receipt(){

    var total = 0;
    var arr = getCheckedBoxes("items");
    
    for(var i = 0; i < arr.length; i++){
        total += parseInt(arr[i]);
    }

    var name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var phnNumber = document.getElementById("phnNumber").value;
    var address = document.getElementById("address").value;

    if(name == "" || address == ""){
        alert("Please fill in the name and address fields!");
        return false;
    }else{
        alert("Dear, "+name+" your order has been completed! Your total bill is $"+total+". Your order will be shipped to "
    +address+".");
    }
}

// Pass the checkbox name to the function
 function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName(chkboxName);
    var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
       // And stick the checked ones onto an array...
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].value);
       }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
  } 