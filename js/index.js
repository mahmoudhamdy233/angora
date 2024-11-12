

// var enternumber = window.prompt("enter the namber");


// window.alert(enternumber)






// var enternumbar = window.prompt("enter number");

// if ( enternumbar % 3 === 0 && enternumbar % 4 === 0 )
// {
//     window.alert("yes");
// }

// else
// {
//     window.alert("no") 
// }









// var enternumbar1 = window.prompt("enter number");
// var enternumbar2 = window.prompt("enter number2");

// if ( enternumbar1 > enternumbar2 ) 
//             {window.prompt(enternumbar1); }

// if ( enternumbar2 > enternumbar1 ) 
//     {window.prompt(enternumbar2); }
 

    





// var enternumbar1 = window.prompt("enter number");

// if ( enternumbar1 > 0 ) 
//             {window.alert("positive"); }

// if ( 0 > enternumbar1 ) 
//     {window.alert("negative"); }





// var enternumbar1 = window.prompt("enter number1");
// var enternumbar2 = window.prompt("enter number2");
// var enternumbar3 = window.prompt("enter number3");

// if ( enternumbar1 > enternumbar2  &&  enternumbar1 > enternumbar3 ) 
    
//             {window.alert(enternumbar1); }

// else if ( enternumbar2 > enternumbar1  &&  enternumbar2 > enternumbar3 ) 
    
//                 {window.alert(enternumbar2); }
    
// else if ( enternumbar3 > enternumbar1  &&  enternumbar3 > enternumbar2 ) 
    
//                     {window.alert(enternumbar3); }
        
    

// var enternumbar = window.prompt("enter number");


// if ( enternumbar % 2 === 0  )
// {


//     {window.alert("even"); }

// }

// else if ( enternumbar % 2 === 1 )
// {


//     {window.alert("odd"); }

// }



// var word = window.prompt("enter word ")

// if ( word === 'a' || word ==='e' || word==='i' || word==='o'  || word ==='u'  ) {

//     window.alert("vowel")
// }

// else {

//     window.alert("Consonant")
// }
   






// var enternumbar = window.prompt("enter number");

// for (  var i = 1 ;  i <= enternumbar   ;         i++              )

// {

// if ( i <= enternumbar )
// {
//     window.alert(i)
// }
 

// }







// var enternumbar = window.prompt("enter number");
// var ruslt = 0

// for (  var i = 1 ;  i <= 12  ;      i++               )

// {

// if (   ruslt = i * enternumbar )
// {
//     window.alert(ruslt)
// }
 

// }


// var enternumbar = window.prompt("enter number");

// for (  var i = 1 ;  i <= enternumbar   ;         i++              )

// {

// if ( i % 2 === 0 )
// {
//     window.alert(i)
// }
 

// }


// var enternumbar1 = window.prompt("enter number");
// var enternumbar2 = window.prompt("enter number");
// var i  = 1


// if (   i = 0   ; i <  enternumbar2    ; i++ )
// {
//     window.alert( i )
    
// }





// var cartona ="" ;

// for (  i = 0; i < 100 ; i++ ) {
//     if (i % 2 === 0 )
//     {
//         cartona += "<h3 class='dark'>route</h3>" ;
//         cartona += "<h3>route</h3>" ;
//     }
    
// }

// document.getElementById("demo").innerHTML = cartona;


function randomtext() {


var names = [  "Friedrich Nietzsche"  ,    "Mark Twain"    ,    "Eleanor Roosevelt"  , "douglas adams"  , "Dr. Seuss"  ]

var quotes = [   " “It is not a lack of love, but a lack of friendship that makes unhappy marriages.” " ,    " “The man who does not read has no advantage over the man who cannot read.” "   ,      "“A woman is like a tea bag; you never know how strong it is until it's in hot water.”" , "“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”" , "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”" ]






var num =Math.floor(   Math.random ()   * names.length     )

  
document.getElementById("qoutenames").innerHTML = names[num]
document.getElementById("qouteoutput").innerHTML = quotes[num]




}




































