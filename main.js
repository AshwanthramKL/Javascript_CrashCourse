// Conditionals

const x = 321;

let y = x === 321 ? 'red': 'yellow';

switch(y)
{
    case 'red':
        {
        console.log('color is red');
        break;
        }
    case 'yellow':
        {
        console.log('color is yellow');
        break;
        }
    
    default:
        {
            console.log("Neither red nor yellow")
            break;
        }
    }

