$(function(){

  
$('input:text').each(function(){
		var txtval = $(this).val();
		$(this).focus(function(){
			$(this).val('')
		});
		$(this).blur(function(){
			if($(this).val() == ""){
				$(this).val(txtval);
			}
		});
	});



   $("a[href^='http']:not([href*='twelveskip.com'],[href*='leadpages.co'])").each(function() {
       $(this).click(function(event) {
             event.preventDefault();
             event.stopPropagation();
             window.open(this.href, '_blank');
        }).addClass('externalLink');
   });
   
   


			});



