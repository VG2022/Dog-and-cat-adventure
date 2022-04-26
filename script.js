$(".Dragon-text,.Dragon-attack,.worried-dog,.next-button-two,.adventure-text  ,.save-friend,.give-up,.bad-end,.sad-cat,.onward,.path,.found-dragon,.Dragon,.next-button-three,.dog-Fight,.epic-battle,.happy-friends,.good-end,.slay-it").hide(function() { 

}); 

$(".next-button").click(function() { 
$(".Dragon-text, .Dragon-attack").show(); 
$(".next-button-two").show(); 
$(".intro-text,.dog-and-cat,.next-button").hide(); 
});  

$(".next-button-two").click(function() { 
$(".adventure-text,.worried-dog,.save-friend,.give-up").show(); 
$(".Dragon-text,.Dragon-attack,.next-button-two").hide(); 
});   

$(".give-up").click(function() { 
$(".bad-end,.sad-cat").show();  
$(".adventure-text,.worried-dog,.save-friend,.give-up").hide();
});    

$(".save-friend").click(function() { 
$(".onward,.path").show();  
 
$(".adventure-text,.worried-dog,.save-friend,.give-up").hide();
});    

$(".path").hover(function() {
$(".found-dragon,.Dragon,.next-button-three").show();  
$(".onward,.path").hide();
});

$(".next-button-three").click(function() {
$(".epic-battle,.dog-Fight").fadeIn();  
$(".found-dragon,.Dragon,.next-button-three").hide();
}); 

$(".slay-it").click(function() {
$(".epic-battle,.dog-Fight").show();  
$(".found-dragon,.Dragon,.next-button-three").hide();
}); 