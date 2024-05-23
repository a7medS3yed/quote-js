
var quoteList = [
        "“Be yourself; everyone else is already taken.”", 
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", 
        "“So many books, so little time.” ", 
        "“Showing a lack of self-control is in the same vein granting authority to others: 'Perhaps I need someone else to control me.”", 
        "“Greed has gotten out of control thanks to man.”", 
        "“But how can someone who was raised to be the same as everyone else be told they're different because of something out of their control?”",
        "“A room without books is like a body without a soul.”",
        "“You only live once, but if you do it right, once is enough.”",
        "“Be the change that you wish to see in the world.”"
    ];

// console.log(quoteList);

var list = [];

function displayQuote(){
        var randomNamber = Math.floor(Math.random() * quoteList.length);
        // console.log(randomNamber);
        list.push(randomNamber);
        if((list.length == 1) || (list[list.length-1] != list[list.length-2]))
                {var container = `<p class="fs-3">${quoteList[randomNamber]}</p>`;
                // console.log(container);
                document.getElementById('quote').innerHTML = container;}
        else
            displayQuote();

}



