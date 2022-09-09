var helloworld = " Hello world !!";
console.log(helloworld);

console.log(helloworld.charAt(1));

let a = 'a';
let b = 'b';
if( a < b)
{
    console.log(a+ ' is less than ' +b);
}
else if ( a > b)
{
    console.log(a+ ' is greater than ' +b);
}
else
{
    console.log(a+ ' and ' +b+ ' are equal. ');
}

let c = 'c';
let d = 'D';

console.log(c.toUpperCase());
console.log(d.toLowerCase());

console.log( c + d );

let longstring = 
    'This is very long string which needs ' + 
    'To wrap across multple lines because ' +
    'otherwise my code is unreadable and messed up. ';

console.log(longstring);

longstring = 
    ' I am not going to write the whole thing again \
                    so, i am just writing random things \
                    like how are you. ';

console.log(longstring);