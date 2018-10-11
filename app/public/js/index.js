$(document).ready(function() {

	$("#submit").on("click", function() {


	var Contact = {
			myname: $("#exampleInputName").val().trim(),
			email: $("exampleInputEmail1").val().trim(),
			message: $("exampleFormControlTextarea1").val().trim(),
		}


$.post("/send", Contact)
		// on success, run this callback
		.done(function(data) {
				// log the data we found
				console.log(data);

				 window.location.reload(data);
        });

				alert("Message sent thank you!");


			});

		});
