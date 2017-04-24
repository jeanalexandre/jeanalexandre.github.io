$(document).ready(function() {

  /* Création des barres de compétences + animations */
  $('.barres li').each(function() {
  	var pourcentage = $(this).attr('data-skills');
  	$(this).append($("<span></span>").animate({
  		width : ''+ pourcentage +'%' }, 2500));	
  });
  
  
}); // Fin document.ready