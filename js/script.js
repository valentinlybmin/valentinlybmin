$( "#portfolio-section" ).hide();
$( "#firstRow" ).hide();
$( "#secondRow" ).hide();
$( "#thirdRow" ).hide();

$( "#portfolio-section" ).hide();
$( "#contact-section" ).hide();
$( ".main-h1" ).hide();
var lastEvent = "#about-section";

function responsiveNav() {
    var x = document.getElementById("topnavBox");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 

$( document ).ready(function() {
    
    $( ".main-h1" ).slideToggle( "slow", function() {
    // Animation complete.
    });
    
    $( "#firstRow" ).fadeIn( 1000, function() {
        $( "#secondRow" ).fadeIn( 800, function() {
            $( "#thirdRow" ).fadeIn( 800, function() {
            }); 
        });
    });
    
    var activeBtn="about";
    var respWidth =$(window).width(); 
    if(respWidth>=600){
        $(".topnav a").mouseenter(function (Event) {
            if(this.id !== activeBtn )  {
                $(this).animate({ 
                'padding-left' : '25px' ,
                'padding-right' : '25px'
                            }, "fast");
            } 
        });
        
        $(".topnav a").mouseleave(function (Event) {
            $(this).animate({ 'padding' : '10px' }, "fast");
        });
    }

    
    $( "#topnavBox" ).click(function(event) {
        activeBtn=event.target.id;
        var curEvent = "#"+event.target.id;
        $("#about").attr('class', '');
        $("#portfolio").attr('class', '');
        $("#contact").attr('class', '');
        $(curEvent).attr('class', 'active');
        
        if(curEvent==="#about"){
            if(lastEvent!=="#about-section"){
                $( lastEvent ).slideUp( "slow", function() {
                }); 
                $( "#about-section" ).slideDown( "slow", function() {
                });
                lastEvent=curEvent+"-section";
            }
        }
        
        else if(curEvent==="#portfolio"){
            if(lastEvent!=="#portfolio-section"){
                 $(lastEvent).slideUp( "slow", function() {
                 });
                 $( "#portfolio-section" ).slideDown( "slow", function() {
                 });
                 lastEvent=curEvent+"-section";
            }
        }
        
        else if(curEvent==="#contact"){
            if(lastEvent!=="#contact-section"){
                $(lastEvent).slideUp( "slow", function() {
                });
                $( "#contact-section" ).slideDown( "slow", function() {
                });
                lastEvent=curEvent+"-section";
            }
        }
        
        
    });
 
    });