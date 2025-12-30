console.log('Test JS');
//! digit spelling
//? weekday = Sunday (1), Monday (2), Tuesday(3), Wednesday(4), Thursday(5)
//? weekend = Friday(6), Saturday(7)
const numberOfDay = parseInt( prompt("Enter a digit: Sunday (1), Monday (2), Tuesday(3), Wednesday(4), Thursday(5) Friday(6), Saturday(7) ") );
// if ( numberOfDay == 1 ) {
//     console.log("Weekday");
// }
// else if ( numberOfDay == 2 ) {
//     console.log("Weekday");
// }
// else if ( numberOfDay == 3 ) {
//     console.log("Weekday");
// }
// else if ( numberOfDay == 4 ) {
//     console.log("Weekday");
// }
// else if ( numberOfDay == 5 ) {
//     console.log("Weekday");
// }
// else if ( numberOfDay == 6 ) {
//     console.log("Weekend");
// }
// else if ( numberOfDay == 7 ) {
//     console.log("Weekend");
// }
//* Switch, case, break, default
//! switch use menu, data from user
switch( numberOfDay ) {
    // case 1:
    //     console.log("Weekday");
    //     break;
    //  case 2:
    //     console.log("Weekday");
    //     break;
    //  case 3:
    //     console.log("Weekday");
    //     break;
    //  case 4:
    //     console.log("Weekday");
    //     break;
    //  case 5:
    //     console.log("Weekday");
    //     break;
    case 1:
     case 2:
     case 3:
     case 4:
     case 5:
        console.log("Weekday");
        break;
    //  case 6:
    //     console.log("Weekend");
    //     break;
    // case 7:
    //     console.log("Weekend");
    //     break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Not a valid Option, Please choose a numeric value");
        break;
}

let letter = prompt("Enter a letter");
letter = letter.toLowerCase();
switch( letter ) {
    case 'a':
     case 'e':
     case 'i':
     case 'o':
     case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
        break;
}