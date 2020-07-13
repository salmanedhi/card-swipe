cardsList = [
    {
        "id": "first", 
        "heading":"Malware", 
        "body":"Malware is when you have to pay a certain amount of money to gain access to the computer.", 
        "answer": true, 
        "url":"", 
        "isImage": true
    },
    {
        "id": "second",
        "heading":"Hacktivists", "body":"Hacktivists are people that go to protests and post about it online", 
        "answer": true, 
        "url":"", 
        "isImage": false
    },
    {
        "id": "third",
        "heading":"Cyber Attack", 
        "body":"Backing up important files offline, on an external hard drive or in the cloud, will help protect your business in the event of a cyber attack. True or False?", 
        "answer": false, 
        "url":"", 
        "isImage": false
    },
    {
        "id": "fourth", 
        "heading":"Cyber criminals", 
        "body":"Cyber criminals only target large companies. True or False?", 
        "answer": false, 
        "url":"", 
        "isImage": true
    },
    {
        "id": "five", 
        "heading":"Email Phishing", 
        "body":"Over 90% of successful cyberattacks start as phishing emails", 
        "answer": false, 
        "url":"", 
        "isImage": false
    },
    {
        "id": "sixth", 
        "heading":"Stolen Data", 
        "body":"If a block of data is stolen from your business, such as customer information, the first thing you should do is notify those affected", 
        "answer": false, 
        "url":"", 
        "isImage": true
    }
];

cardDecisions = [];

let idx = 0;
let currentCardIdx = 0;
let currentClickedCardId = -1;

class Carousel 
{
    constructor(board, stats)
    {
        this.board = board;
        this.stats = stats;

        cardsLeft.innerText = (cardsList.length - currentCardIdx) + "  cards left";

        this.push();
        this.push();

        //handle gestures
        this.handle();
    }

    handle() 
    {
        if(this.hammer)
            this.hammer.destroy();

        this.cards = this.board.querySelectorAll('.card');

        this.topCard = this.cards[this.cards.length-1];

        this.nextCard = this.cards[this.cards.length-2];

        if(this.cards.length > 0)
        {
            // set default top card position and scale
            this.topCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)';

            this.hammer = new Hammer(this.topCard);
            this.hammer.add(new Hammer.Tap());
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL, threshold: 0
            }));

            this.hammer.on('pan',(e) => {
                this.onPan(e);
            });

            this.hammer.on('tap',(e) => {
                this.onTap(e);
            });

        }
    }

    onPan(e)
    {
        if(!this.isPanning)
        {
            this.isPanning = true;

            //remove transition property
            this.topCard.style.transition = null;

            if (this.nextCard) 
                this.nextCard.style.transition = null;

            //get starting coordinates
            let style = window.getComputedStyle(this.topCard);
            let mx = style.transform.match(/^matrix\((.+)\)$/);
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0;
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0;

            //get card bounds
            let bounds = this.topCard.getBoundingClientRect();

            //get finger position, top (1) or bottom (-1) of the card
            this.isDraggingFrom = (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1;
        }

        //get new coordinates
        let posX = e.deltaX + this.startPosX;
        let posY = e.deltaY + this.startPosY;

        //get ratio b/w swiped pixels and x axis
        let propX = e.deltaX / this.board.clientWidth;
        let propY = e.deltaY / this.board.clientHeight;

        //get swipe direction , left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1;

        // get degrees of rotation (between 0 and +/- 45)
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45;

        // get scale ratio, between .95 and 1
        let scale = (95 + (5 * Math.abs(propX))) / 100;

        // move and rotate top card
        this.topCard.style.transform =
        'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)';

        // scale up next card
        if (this.nextCard) this.nextCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')';

        //card released
        if(e.isFinal)
        {
            this.isPanning = false;

            let successful = false;
            let decision = false;

            //set back transition property
            this.topCard.style.transition = 'transform 200ms ease-out';

            if (this.nextCard) 
                this.nextCard.style.transition = 'transform 100ms linear';

            
            // check threshold
            if (propX > 0.20 && e.direction == Hammer.DIRECTION_RIGHT) 
            {
                successful = true;

                if(cardsList[currentCardIdx].answer == true)
                    decision = true;
                // get right border position
                posX = this.board.clientWidth
                
            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) 
            {
                successful = true;

                if(cardsList[currentCardIdx].answer == false)
                    decision = true;

                // get left border position
                posX = - (this.board.clientWidth + this.topCard.clientWidth)
                
            } 
            /*else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) 
            {
                successful = true;
                decision = false;
                // get top border position
                posY = - (this.board.clientHeight + this.topCard.clientHeight)
                
            }*/
            
            if (successful) 
            {
                //save decision made on card
                var obj = {
                    "idx" : currentCardIdx++,
                    "decision" : decision
                };
                cardDecisions.push(obj);

                // throw card in the chosen direction
                this.topCard.style.transform = 'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)';
            
                //if more cards exist
                if(currentCardIdx < cardsList.length)
                {
                    // wait transition end
                    setTimeout(() => {
                        cardsLeft.innerText = (cardsList.length - currentCardIdx) + "  cards left";
                        // remove swiped card
                        this.board.removeChild(this.topCard)
                        // add new card
                        this.push()
                        // handle gestures on new top card
                        this.handle()
                    }, 200)
                } else
                {
                    //change layout and show stats
                    this.showStats();
                }
              } else {
            
                // reset card position
                // reset cards position and size
                this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'
            
              }
        }
    }

    push()
    {
        const card = document.createElement('div');
        card.classList.add('card');

        let url = "https://picsum.photos/320/320/?random=" + Math.round(Math.random()*1000000);

        let id = idx;
        
        let cardContent = cardsList[id % cardsList.length];

        if(cardContent.isImage)
        {
            cardContent.url = url;
            card.innerHTML = this.getCardInnerHTML(cardContent);
        } else
        {
            url = "small.mp4";
            cardContent.url = url;   
            card.innerHTML = this.getCardInnerHTML(cardContent);
        }
        
        
        cardsList[id % cardsList.length] = cardContent;
        idx++;
       
        this.board.insertBefore(card, this.board.firstChild);
    }

    onTap(e)
    {
        // get finger position on top card
        let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth;

        // get rotation degrees around Y axis (+/- 15) based on finger position
        let rotateY = 15 * (propX < 0.05 ? -1 : 1);

        // enable transform transition
        this.topCard.style.transition = 'transform 100ms ease-out';

        // apply rotation around Y axis
        this.topCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(' + rotateY + 'deg) scale(1)';

        // wait for transition end
        setTimeout(() => {
            // reset transform properties
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
        }, 100);
    }

    showStats()
    {
        document.body.style.backgroundColor = "white"; 
        this.board.style.display = "none";

        var countOfwrongAns = 0;
        /*
        //logic of showing each card

        var row = document.createElement('div');
        row.classList.add("custom_row");
        
        for(var i in cardDecisions)
        {
            if(countOfwrongAns % 3 == 0 && countOfwrongAns != 0)
            {
                this.stats.appendChild(row);
                row = document.createElement('div');
                row.classList.add("custom_row", "cardMargin");
            }

            var decision = cardDecisions[i];

            if(decision.decision == false)
            {
                countOfwrongAns++;
                var column = document.createElement('div');
                column.classList.add("custom_column");

                let card = document.createElement('div');
                card.classList.add('card2');

                let cardContent = cardsList[decision.idx];
                
                card.innerHTML = this.getCardInnerHTML(cardContent); 

                column.appendChild(card);
                row.appendChild(column);
            }
        }
        this.stats.appendChild(row);
        */

        //logic of showing list with card on click
        
        var ul = document.createElement('ul');
        //ul.classList.add("custom_row", "cardMargin");
        
        for(var i in cardDecisions)
        {
            var decision = cardDecisions[i];

            if(decision.decision == false)
            {
                if(i == 0)
                    stats.appendChild(ul);

                countOfwrongAns++;

                let cardContent = cardsList[decision.idx];

                var li = document.createElement('li');
                //li.classList.add("custom_column");

                li.id = decision.idx;
                li.innerHTML = `
                    <div >
                        <h4 class="green_color_text">` + cardContent.heading + `</h4>
                        <span> Correct Answer: ` + cardContent.answer + ` </span><br/>
                        <span> Your Answer: ` + decision.decision + ` </span>
                    </div>
                `;

                li.onclick = function()
                {
                    carousel.showClickedCard(this);
                }

                ul.appendChild(li);
            }
        }
        this.stats.appendChild(ul);



        let resultP = document.getElementById('resultP');
        resultP.innerHTML = `Thank you for participating! Here's how you scored. You answered <span class="ans_span">` + (cardsList.length-countOfwrongAns) + `</span> out of <span class="ans_span"> ` +  cardsList.length +  ` </span> correctly!`;
        
        summary.style.display = "block";
    }

    getCardInnerHTML(cardContent)
    {
        
        if(cardContent.isImage)
        {
            return `
                <div style="padding:15px;">
                    <h2>` + cardContent.heading + `</h2>
                    <img src=` + cardContent.url + ` height=200 width=200>
                    <p class="cardBody">` + cardContent.body + `</p>
                </div>
            `;
        } else
        {
            return `
                <div style="padding:15px;">
                    <h2>` + cardContent.heading + `</h2>
                    <video height=200 width=260 controls>
                        <source src=` + cardContent.url + ` type="video/mp4" >
                    </video>
                    <p class="cardBody">` + cardContent.body + `</p>
                </div>
            `;
        }
    }

    showClickedCard(item) 
    {

        if(currentClickedCardId != -1 && currentClickedCardId != item.id)
        {
            document.getElementById(currentClickedCardId).classList.remove('checked');

            var currentCardElement = document.getElementById("c"+currentClickedCardId);
            if(currentCardElement)
                this.stats.removeChild(currentCardElement);
        } 
        if(currentClickedCardId != item.id)
        {
            item.classList.toggle('checked');

            currentClickedCardId = item.id;
        
            let card = document.createElement('div');
            card.classList.add('card2');
            card.id = "c"+item.id;
    
            let cardContent = cardsList[item.id];
            
            card.innerHTML = this.getCardInnerHTML(cardContent); 
    
            this.stats.appendChild(card);
        } 
    }
}


let board = document.querySelector('#board');
let stats = document.getElementById('stats');
let summary = document.getElementById('summary');
let cardsLeft = document.getElementById('cardsLeft');

//board.style.display = "none";
summary.style.display = "none";

let carousel = new Carousel(board, stats);

