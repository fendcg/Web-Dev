let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}   

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

if ("0") { // true because non empty string
    alert( 'Hello' );
  }

  let message2 = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

if (login == 'Employee') {
  message2 = 'Hello';
} else if (login == 'Director') {
  message2 = 'Greetings';
} else if (login == '') {
  message2 = 'No login';
} else {
  message2 = '';
}