// function to change background color randomly
function changeBgColor() {
    const colors = ["lightblue", "lightgreen", "lightcoral", "lightpink", "lightyellow"];
	
	document.body.style.background =colors[Math.floor(Math.random()*colors.length)];
	}
	
	//Contact Form Validation
	document.getElementById("contactForm").addEventListener("submit",function(event) {event.preventDefault(); // prevents the form from submitting
	
    let name =
document.getElementById("name").value.trim();
    let email =
document.getElementById("email").value.trim();
    let message=
	
document.getElementById("message").value.trim();
    if (name===""|| email===""|| message==="") {
	
document.getElementById("formMessage").textContent = "please fill out all fields.";
document.getElementById("formMessage").style.color = "red";
    } else {
	
document.getElementById("formMessage").textContent = "Message sent succesfully!";

document.getElementById("formMessage").style.color = "green";

        //Clear form
doument.getElementById("contactForm").reset();
    }
});
	
	
	
	
