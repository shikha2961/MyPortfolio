function reveal(){
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
}
window.addEventListener("scroll", reveal);
console.log("Hey");

function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    msg: document.getElementById("msg").value
  };
  const serviceID = "service_uud0a7h";
  const templateID = "template_l9jbycl";

  emailjs.send(serviceID, templateID, params)
  .then(
    res =>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
      console.log(res);

      alert("Your message sent successfully");
    }
  )
  .catch((err)=>console.log(err));
}



