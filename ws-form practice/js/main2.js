let elUsername, elEmail, elPassword, elH1;
document.addEventListener("DOMContentLoaded",function(){
  elH1 = document.querySelector("h1");
//  elH1 = document.getElementsByTagName("h1")[0];
  elUsername = document.querySelector("input[name=username]");
  elEmail = document.querySelector("input[name=email]");
  elPassword = document.querySelector("input[name=password]");
  document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault(); //stop form submission (default behavior for a form)
    // password check
    if( elPassword.value != "12345678" ) {

    	} else if {if !(/^[a-z][a-z0-9\.]*@(([?:a-z0-9]+\.)+[a-z]{2,3}$
	if i.test( elEmail.value)) {
	elH1.innerText = "Your e-mail looks off ....";


      elH1.innerText = "Oh no, bad password!!";
    } else if {if (/^[d] {

	elH1.innerText = "Your username looks off ....";
      // password is okay.. let's check for a number
      // in the username
      let numberFound = false;
      for(let i=0; i<elUsername.value.length; i++){
        if( "0123456789".indexOf(elUsername.value[i]) > -1 ) {
          numberFound = true;
          break;
        }
      }
      if( numberFound ) {
        // elH1.innerText = "Welcome " + elUsername.value + "!";
        //emailtest with regular Expressions
        //must start with a letter
        //then an @symbol

        //expect there to be letters-numbers or a dot
        //then a smbol
        /^[a-z]
        elH1.innerText = `Welcome ${elUsername.value}!`;
      } else {
      	//else if (/\d/ .test(elUsername.value))
        elH1.innerText = "Ooops, there was no number in your username... :'(";
      }
    }
    console.log("Form Submitted");
  });
});

//document.querySelector("form").onsubmit(function(){});

//below if for expression
//email.match(regex) 

}

//8 - ZEO OR MANY
//+ - ONE OR MANY
//? - ZERO OR ONE