function formSubmit(){
    //declare variable and get value which user input and store that value in variable such as name, phone, email, employemnetIncome, otherIncome, taxPaid
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let employmentIncome = parseFloat(document.getElementById("employmentIncome").value);
    let otherIncome = parseFloat(document.getElementById("otherIncome").value);
    let taxPaid = parseFloat(document.getElementById("taxPaid").value);

    //To validate Phone number in 123-123-1234 format
    let regexPhone = /^\d{3}-\d{3}-\d{4}$/;

    //To validate Email Id in format email@domain.com
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    //To strore all errors
    let errors = [];

    // Phone number validation check and print an error message if phone number is not in correct format
    if (!regexPhone.test(phone)) {
      errors.push("Please enter a valid phone number in the format 123-123-1234.");
    }
  
     // Emal Id validation check and print an error message if email id is not in correct format
    if (!regexEmail.test(email)) {
      errors.push("Please enter a valid email ID in the format email@domain.com.");
    }
  
    // Income validation check and print an error message if any string input or value less than 0(including)
    if (isNaN(employmentIncome) || employmentIncome <= 0) {
      errors.push("Please enter a valid numeric value for employment income.");
    }
  
     // Other income validation check and print an error message if any string input or value less than 0(excluding)
    if (isNaN(otherIncome) || otherIncome < 0) {
      errors.push("Please enter a valid numeric value for other income.");
    }
  
    // Tax paid validation check and print an error message if any string input or value less than 0(excluding)
    if (isNaN(taxPaid) || taxPaid < 0) {
      errors.push("Please enter a valid numeric value for tax paid.");
    }
  
    //Check if any error is present, if yes then print messages using join method
    if (errors.length > 0) {
      document.getElementById("errors").innerHTML = errors.join("<br>");
      return false;
    }
    
    //Calculation for total Income
    let totalIncome = employmentIncome + otherIncome;
    //initialise total tax to zero
    let totalTax = 0;

    //Check if totalIncome is less than 30000 then perform tasks
    if (totalIncome < 30000) {
        totalTax = totalIncome * 0.2;
    } 
    //Check in total income is between 30000 to 60000 and perform task
    else if (totalIncome >= 30000 && totalIncome <= 60000) {
        totalTax = totalIncome * 0.25;
    } 
    //chck if totalincome is more than 60000 then perform this task
    else {
        totalTax = totalIncome * 0.34;
    }

    //calculation for total payable taxes 
    let taxesPayable = totalTax - taxPaid;

    //to print a result
    let result = `<p> 
        Name: ${name}  
        <br>
        Phone: ${phone}  
        <br>
        Email: ${email}  
        <br>
        Total Income: $${totalIncome.toFixed(2)}  
        <br>
        Total Income Tax: $${totalTax.toFixed(2)} 
        <br> 
        Income Taxes Paid: $${taxPaid.toFixed(2)}  
        <br>
        Income Taxes Payable: $${taxesPayable.toFixed(2)} 
    
    </p>`    

            //To print a result
            document.getElementById("formResult").innerHTML = result;

            //To print errors
            document.getElementById("errors").innerHTML = "";
            
            //return false will stop the form from submitting and keep it on current page.
            return false;
    
}