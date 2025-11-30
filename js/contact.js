// ======= Script Contact Form =======

const submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const fname=document.getElementById("fname").value.trim();; //.value.trim() gives the actual text typed by the user. ,,,,is used to retrieve the value of an input element and then remove any leading or trailing whitespace from that value.
    const phoneno=document.getElementById("phonenumber").value.trim();;
    const email=document.getElementById("email").value.trim();;

    if(fname==="" || phoneno==="" || email===""){
        alert("All the fields are required. Please input each detail.");
        return;
    }
    
    alert("Thank you for contacting us... We will respond to you very soon.");
    

})
