$(document).ready(function() {


	var nav = $('#main-nav');
	var block = $('#main-contacts');


	$('body').scrollspy({ target: '#main-nav' });

	$(window).scroll(function(){
		if ($(document).scrollTop() > 50){
			nav.removeClass('col-12').addClass('fixed-top');
		}
		if ($(document).scrollTop() < 50){
			nav.removeClass('fixed-top').addClass('col-12');
		}

	});
	
	$(".navbar").on('click', function (e) {
		if(e.target.className == "icon-menu" && $('#main-nav-list').is(":hidden")){
			$("#main-nav-list").show();
		}
		else if(e.target.className == "icon-menu" && $('#main-nav-list').is(":visible")){
			$("#main-nav-list").hide();
		}
		else if (e.target.className == "nav-link"){
			 $('#main-nav-list').hide();
		}
       
        
       /* $('.navbar-collapse').removeClass('show');*/
        /*$a = $($(this).attr('href'));  
        return false;*/
    });

	$("#gallery").owlCarousel({
		loop:true,
		margin:10,
		dots:false,
		nav:true,
		navText:['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
		responsive:{
			0:{
			    items:1
			},
			500:{
			    items:2
			},
			700:{
			    items:3
			},
			900:{
				items:4
			}

		}
	});

	$("#blog-posts").owlCarousel({
		loop:true,
		margin:10,
		dots:false,
		nav:true,
		navText:['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
		responsive:{
			0:{
			    items:1
			},
			767:{
			    items:2
			},
			1200:{
				items:3
			}

		}
	});
		

$("#main-contacts-toggler").on("click",openContacts);
	
function openContacts(e) {
	if($(window).width() < 576){

	var wd = $("#main-contacts-toggler").width();
	var x = e.currentTarget;
	var find = x.classList.contains("close-block");

		if(find){
				$("#main-contacts").show();
				$("#main-contacts").animate({"left":0},200);
				$("#main-contacts-toggler").animate({"left":0},200);
				$("#main-contacts-list").animate({"left":"20%"},1000);
				$("#chevron").css("transform", "rotate(180deg)");
				$("#main-contacts-toggler").addClass("open-block").removeClass("close-block");

		}
		else{	
				$("#main-contacts").animate({"left":"100%"},200);
				$("#main-contacts").hide("slow");
				$("#main-contacts-toggler").css("left", "auto");
				$("#main-contacts-toggler").animate({"right":0},500);
				$("#main-contacts-list").animate({"left":"100%"},1000);
				$("#chevron").css("transform", "rotate(0deg)");
				$("#main-contacts-toggler").addClass("close-block").removeClass("open-block");
		}
	
	}
}

})