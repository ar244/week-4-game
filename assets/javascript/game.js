$(document).ready(function(){
		  	
		  	// variables
			var randomNumber=0;
			var totalScore=0;
			var crystalArr = ["#crystalImg1", "#crystalImg2", "#crystalImg3", "#crystalImg4"];
			var crystal;
			
			// set up crytals
			crystal = $("<button>");
			crystal.addClass("buttonC");
			crystal.attr("id", "crystalImg1");
			$("#buttons").append(crystal);
					
			crystal = $("<button>");
			crystal.addClass("buttonC");
			crystal.attr("id", "crystalImg2");
			$("#buttons").append(crystal);
			
			crystal = $("<button>");
			crystal.addClass("buttonC");
			crystal.attr("id", "crystalImg3");
			$("#buttons").append(crystal);
				
			crystal = $("<button>");
			crystal.addClass("buttonC");
			crystal.attr("id", "crystalImg4");
			$("#buttons").append(crystal);
					

			// when crystals are clicked
			$(".buttonC").on("click", function() {
				var val = $(this).attr("data");
				
				totalScore+= parseInt(val);
				$("#totalText").text("Your total score is: "+ totalScore);
				if (totalScore == randomNumber) {
					
					//$("#mesg").text("You won!!!");
					alert("You won! Micky gets to go home!!!")

					var win = parseInt($("#wins").attr("value"));
					win++;
					$("#wins").attr("value", win);
					$("#wins").text("Wins: " + win);
					setup();
				} else if (totalScore > randomNumber) {

					//$("#mesg").text("You Lost!!!");
					alert("You lost! Keep trying!!!")

					var lose = parseInt($("#losses").attr("value"));
					lose++;
					$("#losses").attr("value", lose);
					$("#losses").text("Losses: " + lose);
					setup();
				}
			});

			// set up the game and/or reset values
			var setup = function() {
				// Initial random number
				var max=120;
				var min=19;
				randomNumber = (Math.floor(Math.random() * (max - min) + min ));
				$("#randomNum").text("Target score: " + randomNumber);

				// Display total
				$("#totalText").text("Your total score is: 0");
				totalScore = 0;

				// set value for each crystal
				for (var i=0; i<4; i++) {
					max = 12;
					min = 1;
					var val = (Math.floor(Math.random() * (max - min) + min ));
					$(crystalArr[i]).attr("data", val);
					console.log($("#crystalArr[i]"));
					console.log("here " + val);
				}
			}

			// at start of game
			setup();

		});