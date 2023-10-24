
function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_xdt7c3w";
    const templateID = "template_ba4f4sw";
    
    emailjs.send(serviceID, templateID, params).then((res) =>{
            document.getElementById("name").value = " ";
            document.getElementById("email").value = " ";
            document.getElementById("message").value = " ";
            alert("Thankyou for contacting us");
        })
        .catch((err) => console.log(err)) ;
}
