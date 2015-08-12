var nirvana = ['kurt cobain', 'aaron burckhard', 'krist novoselic'];

nirvana[1] = 'dale crover';
nirvana[1] = 'dave foster';
nirvana[1] = 'chad channing';
nirvana.push('jason everman');
nirvana.pop();
nirvana[1] = 'dan peters';
nirvana[1] = 'dave grohl';
nirvana.push('john duncan');
nirvana.pop();
nirvana.push('lori goldston');
nirvana.push('pat smear');
alert(nirvana);

guessThisNumber = Math.floor((Math.random()*10)+1);
failureAt = 5;
console.log("You get", failureAt, "guesses to get it right")

do{
    guess = parseInt(prompt());
    console.log("Your guess:", guess);
    failureAt--;    
    console.log("Tries left:", failureAt);
} while (guess != guessThisNumber && failureAt > 0);


if (guess === guessThisNumber) {
    console.log("You guessed correctly, the answer is", guess);
} else {
    console.log("fail");
}