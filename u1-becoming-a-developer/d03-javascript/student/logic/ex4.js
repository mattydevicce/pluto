var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 10:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    alert(output);
    break;
  case 5:
    output += '!';
    alert(output);
    break;
  default:
    alert('Please pick a number from 0 to 6!');
}