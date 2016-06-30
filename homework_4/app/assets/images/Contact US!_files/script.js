$(document).ready(
	function (){
	$(".beer-form").submit(function(event){
			event.preventDefault();
			quantity = $(".grain", this).val(); 
			sugar =(quantity / 5).toFixed(0);
			water = (sugar * 6);
			yeast = (sugar * 2);
			$(".sugar", this).html(sugar);
			$(".water", this).html(water);
			$(".yeast", this).html(yeast);
		});
	$(".feed-form").submit(function(event){
		event.preventDefault();
		meat = $(".meat", this).val();
		fish = ((meat / 6) * 2).toFixed(0);
		flour = ((meat / 6) * 4).toFixed(0);
		water = ((meat / 6) * 3).toFixed(0);
		wheat = (flour * 3)
		$(".fish", this).html(fish);
		$(".flour", this).html(flour);
		$(".h2o", this).html(water);
		$(".wheat", this).html(wheat);
	});

	$(".ssotw").mouseenter(function(){
				$(".credit").animate({
					fontSize: "50px"
				})
			});

			$(".ssotw").mouseleave(function(){
				$(".credit").animate({
					fontSize: "12px"
				})
			});
	});

		$(".twitter").mouseenter(function(){
			$(".twitter").css({
				width: "200px",
				height: "200px"
			})
			$(".twitter a img").css({
				width: "200px",
				height: "200px"
			})
		})
		$(".twitter").mouseleave(function(){
			$(".twitter").css({
				width: "100px",
				height: "100px"
			})
			$(".twitter a img").css({
				width: "100px",
				height: "100px"
			})
		})

		$(".insta").mouseenter(function(){
			$(".insta").css({
				width: "200px",
				height: "200px"
			})
			$(".insta a img").css({
				width: "200px",
				height: "200px"
			})
		})
		$(".insta").mouseleave(function(){
			$(".insta").css({
				width: "100px",
				height: "100px"
			})
			$(".insta a img").css({
				width: "100px",
				height: "100px"
			})
		})
	
		$(".facebook").mouseenter(function(){
			$(".facebook").css({
				width: "200px",
				height: "200px"
			})
			$(".facebook a img").css({
				width: "200px",
				height: "200px"
			})
		})
		$(".facebook").mouseleave(function(){
			$(".facebook").css({
				width: "100px",
				height: "100px"
			})
			$(".facebook a img").css({
				width: "100px",
				height: "100px"
			})
		});			
