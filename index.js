//How to select HTML elements in JQury?

// - Assume we have a class in Html named as "head" so to select that element we write as follow : -

//$(".head");

// that's how easy it is

// How to hide that element

/*           
$("head").hide();
  */

//EVENT IN JQUERY

// Implement the fucntion when we click on the button the box should be hidden

/*
$("#btn").click(function () {
    $(".box").hide();
})

*/

//dblclick event in jquery

//dblclick event will be fired at the time when you double click on spefified element
/*
$("#btn").dblclick(function () {
    $(".box").hide();
            })
*/

//mouseenter

// mouseeneter event will fire when you enter your mouse to the specified HTML element
/*
$(".box").mouseenter(function () {
    $(this).hide();
});
*/

// mouseleave

// it is same as the mouseeneter even with bit changes. it fires when your mouse will leave from the specified element
/*
$(".box").mouseleave(function () {
    $(this).hide();
});
*/

//hover event

/*           
 So basically hover event takes two function one for the enter and another for the leave when you move the mouse 
to the specified Html element
*/

/*

$(".box").hover(function () {
    $(this).hide();
},
    function () {
        $(this).show();
    });

*/

// Keyboard evens

// keyup
/*                                   
$("body").keyup(function () {
    $(this).css("background-color", "yellow");
});
/*


            // keydown

 /*           
$("body").keydown(function () {
    $(this).css("background-color", "green");
})
  */

// keypress

/*          
$("body").keypress(function () {
    $(this).css("background-color", "black")
})
*/

//on event

// we can fire multiple event by just using on event

/*
$(".box").on({
    click: function () {
        $(this).css("backgroundColor", "red");
    },
    mouseenter: function () {
        $(this).css("backgroundColor", "yellow");
    },
    mouseleave: function () {
        $(this).css("backgroundColor", "purple");
    }
});
*/

// Effects in JQUERY

// hide();

/*
$("#btn1").click(function () {
    $(".box").show(1000);
});


                //show();


$("#btn2").click(function () {
    $(".box").hide(3000);
});
*/

// fadeIn();

/*
$("#btn1").click(function () {
    $(".box").fadeIn();
})


                        //fadeOut();




$("#btn2").click(function () {
  $(".box").fadeOut();
});
*/

// fadeToggle();

/*
$("#btn1").click(function () {
    $(".box").fadeToggle(3000);
});
*/

//fadeTo();

/*
$("#btn1").click(function () {
    $(".box").fadeTo(1000, 0.1);
});
*/

// slideUp() and slideDown()

/*          
$("#btn1").click(function () {
    $(".box").slideUp(5000);
})


$("#btn2").click(function () {
    $(".box").slideDown(2000);
})

*/

// slideToggle

/*
$("#btn1").click(function () {
    $(".box").slideToggle(4000);
})
*/

// animate()

/*

$("#btn1").click(function () {
    $(".box").animate({
        height: "300px",
        width: "500px",
        opacity: 0.1,
        borderRadius: "100px",
        
        
    }, 5000, function () {
        alert("Animation coompleted");
    });
   
});

                       // To stop the animation 



$("#btn2").click(function () {
    $(".box").stop();
});

*/

// form event

/*                    
$("#user").focus(function () {
    $(this).css("background-color", "aliceblue");
});

$("#user").blur(function () {
    $(this).css("background-color", "");
})                                                

$("#pass").focus(function () {
  $(this).css("background-color", "aliceblue");
});                                              // focus method

$("#pass").blur(function () {
  $(this).css("background-color", "");
});                                            // blur Method


$("#sel").change(function () {
    $(this).css("background-color", "pink");
});                                            
*/

// change method

/*                  
$(".op").change(function () {
    let x = $(this).val();
    console.log(x);
})

*/

// submit method

/*                    
$("#sub").submit(function () {
    console.log("You have submitted the page");
});
*/

// Keyboard events

// keyup();

/*
                                
$("body").keyup(function () {
    $(this).css("background-color", "red");
})

*/

// keydown();

/*
$("body").keydown(function () {
  $(this).css("background-color", "green");
});
*/

//keypress

/*
$("body").keypress(function () {
  $(this).css("background-color", "green");
});
*/

// Method Chaning

// $("#btn1").click(function () {
//     $(".box").css("background", "red").slideUp(5000).slideDown(5000).fadeIn().fadeOut();
// });

// Dom Manipulating

// set html

/*
$("#btn1").click(function () {
  $(".box").html("<p>Rakesh Kumar Parida</p>");
});
*/

//get html

/*
$("#btn1").click(function () {
    let x = $(".box").html();
    alert(x);
})
*/

// set text

/*
$("#btn1").click(function () {
    $(".box").text("Learning jquery");
})
*/

// set html

/*
$("#btn1").click(function () {
  $(".box").html("<h1>Done</h1>");
});

*/

// get and set attibute

/*
$("#btn1").click(function () {
    $(".box").attr("id", "boxId"); // set an attr called id "boxId" dynamically
  
});
*/

/*
$("#btn1").click(function () {
    let x = $(".box").attr("class");
    console.log(x);                // get attr using attr();
});

*/

// How to set multiple attribute of an element?
/*
$("#btn1").click(function () {
    $(".box").attr({
        "id": "boxId",
        "value": "mainBox"
    });
});
*/

/*
There are 4 ways of adding an elemnt in the document 

1. append();
2. prepend();
3. before();
4. after();

*/

/*


                                // append();
                                    

$(".listItems").append("<li>This is an append Item<li>");


                                // prepend();



$(".listItems").prepend("<li>This is a prepend Item");


                                //before



$(".listItems").before("<p> This is a before elements</p>");

                                //after()




$(".listItems").after("<p>This is an after element</p>");

*/

                                // remove();

/*
$("#btn1").click(function () {
    $(".listItems").remove();
});
*/

                                    // empty();

/*
$("#btn1").click(function () { 
    $(".listItems").empty();
});
*/

                                // addClass();

/*                           
$("#btn1").click(function () {
    $(".box").addClass("circle");
});

*/

                               //removeClass();

/*
$("#btn1").click(function () {
    $(".box").removeClass("box");
})

*/

                                // toggleClass();


/*
$("#btn1").click(function () {
    $(".box").toggleClass("circle");
});

*/




                // Conflict 

  /*              
$.noConflict();
                
jQuery("#btn1").click(function () {
    jQuery(".box").css("background-color", "red");
});

*/


        // you can also set a variable name
        
    
        /*
let jq = $.noConflict();

jq("#btn1").click(function () {
    jq(".box").css("background-color", "yellow");
});

*/
        
    