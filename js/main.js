cardsList = [
    {
        "id": "first", 
        "heading":"Eine Erfindung der Moderne", 
        "body":"Lange Zeit war an Künstliche Intelligenz nicht zu denken. Erst im 20. Jahrhundert veröffentlichte ein Informatiker den Gedanken, dass Maschinen eines Tages selbstständig denken und Entscheidungen treffen könnten.", 
        "answer": false, 
        "url":"img/cards/card1.jpeg", 
        "isImage": true,
        "wrongans" : "Tatsächlich formulierte der französische Philosoph René Descartes bereits Mitte des 17. Jahrhunderts eine Aussage zur Künstlichen Intelligenz. Er unterschied zwischen zwei Arten von Maschinen: lernfähige Maschinen und Maschinen, die nur eine spezielle Aufgabe erledigen können.",
        "moreInfo" : "https://www.nzz.ch/wissenschaft/kuenstliche-intelligenz-maschinen-mit-commonsense-ld.1539827"
    },
    {
        "id": "second",
        "heading":"Intelligente Ente",
        "body":"Als eine der ersten Erfindung der Künstlichen Intelligenz gilt die „verdauende Ente“, die sogenannte „Digesting Duck“. Das Ziel des Erfinders war es, ein Abbild einer realen Ente zu schaffen. Die „Digesting Duck“ war bereits dazu in der Lage, Körner zu essen, diese zu verdauen und anschließend auszuscheiden.", 
        "answer": true, 
        "url":"img/cards/card2.jpg", 
        "isImage": true,
        "wrongans": "Auch wenn bei dieser Erfindung kein Computer verwendet wurde, war die „Digesting Duck“ im 18. Jahrhundert eine Innovation. Sie zählt zu der Gruppe der Automaten.",
        "moreInfo" : "https://www.hodinkee.com/articles/watches-automatons-soul-and-the-digesting-duck-of-jacques-de-vaucanson"
    },
    {
        "id": "third",
        "heading":"Der Turing Test", 
        "body":"Der sogenannte „Turing Test“, entwickelt von einem britischen Mathematiker, gilt als ein Meilenstein zur Entwicklung der Künstlichen Intelligenz. Bis heute hat dieser Test Gültigkeit. Er zeigt an, ob eine Maschine das Denkvermögen eines Menschen hat und dadurch „intelligent“ ist.", 
        "answer": true, 
        "url":"img/cards/card3.jpg", 
        "isImage": true,
        "wrongans": "Diese Aussage stimmt. Alan Mathison Turing gilt als Entwickler des Turing Tests, der noch heute verwendet wird.",
        "moreInfo" : "https://jaai.de/mensch-oder-maschine-der-turing-test-einfach-erklaert-1385/"
    },
    {
        "id": "fourth", 
        "heading":"Grundgesetze für Roboter", 
        "body":`Folgende Gesetze gelten für Roboter seit 1950:</br>
                §1: Ein Roboter darf niemals einem Menschen Schaden zufügen.</br>
                §2: Ein Roboter muss stets dem Menschen gehorchen, es sei denn dies steht in Konflikt zu §1. </br>
                §3: Ein Roboter muss seine eigene Existenz beschützen, es sei denn dies steht in Konflikt zu §1 oder §2. 
                `, 
        "answer": true, 
        "url":"img/cards/card4.jpg", 
        "isImage": true,
        "wrongans": "In der Tat veröffentlichte der Science Fiction Autor Isaac Asimov 1942 diese Gesetze unter dem Namen „The Three Laws of Robotics“.",
        "moreInfo" : "http://www.roboterwelt.de/magazin/die-robotergesetze-von-isaac-asimov/"
    },
    {
        "id": "five", 
        "heading":"1951: Der erste Neurocomputer", 
        "body":"Mit 40 Synapsen entwickelte ein amerikanischer Mathematiker den ersten Neurocomputer. Dieser sollte das Verhalten von Sozialverhalten von Kleinkindern simulieren.", 
        "answer": false, 
        "url":"img/cards/card5.jpg", 
        "isImage": true,
        "wrongans": "Naja. Diese Aussage stimmt nur teilweise. In Wirklichkeit handelte es sich um das Verhalten von Laborraten, das der amerikanische Mathematiker Marvin Minsky mithilfe der Erfindung eines neuronalen Netzes simulieren und analysieren wollte.",
        "moreInfo" : "https://taz.de/Nachruf-auf-Marvin-Minsky/!5270090/"
    },
    {
        "id": "sixth", 
        "heading":"Die Geburtsstunde der Künstlichen Intelligenz", 
        "body":"Im Jahr 1956 fand in New Hapshire, Amerika, eine wissenschaftliche Konferenz statt. Hier wurde erstmals der Begriff „artificial intelligence“, also „Künstliche Intelligenz“, als Name einer eigenständigen Forschungsdisziplin verwendet.", 
        "answer": true, 
        "url":"img/cards/card6.jpg", 
        "isImage": true,
        "wrongans": "In der Tat gibt es seit dieser Konferenz im Jahr 1956 am Dartmouth College in New Hampshire die Forschungsdisziplin der Künstlichen Intelligenz.",
        "moreInfo" : "https://www.heise.de/newsticker/meldung/50-Jahre-Kuenstliche-Intelligenz-141200.html"
    },
    {
        "id": "seven", 
        "heading":"Englischstunde bei Mr. Robot", 
        "body":"In den 60er Jahren kommunizierten Schülerinnen und Schüler erstmals mit einem künstlich-intelligenten Lehrer. Der Chatbot mit dem Namen „Mr. Robot“ wurde im Englisch-Unterricht eingesetzt.", 
        "answer": false, 
        "url":"img/cards/card7.jpg", 
        "isImage": true,
        "wrongans": "Zwar wurde in den 60er Jahren (genauer gesagt 1966) der erste Chatbot entwickelt, dieser trug allerdings den Namen „Eliza“ und arbeitete als Psychotherapeut.",
        "moreInfo" : "http://www.med-ai.com/models/eliza.html.de"
    },
    {
        "id": "eight", 
        "heading":"Weltmeister KI", 
        "body":"1979, 1997, 2011 und 2016: Das sind die Jahre, in denen Künstliche Intelligenz den Menschen besiegte. Angefangen bei dem Brettspiel Backgammon, über die Weltmeisterschaft im Schach, zu der Quizshow Jeopardy! und schließlich zum chinesischen Strategiespiel Go! – Der Computer scheint dem Menschen in immer komplexeren Situationen überlegen zu sein.", 
        "answer": true, 
        "url":"img/cards/card8.jpg", 
        "isImage": true,
        "wrongans": "All diese Siege eines Computers mithilfe Künstlicher Intelligenz gab es wirklich. Abzuwarten bleibt, welche Weltmeisterschaft ein Computer als nächstes für sich entscheidet …",
        "moreInfo" : "https://video.golem.de/wissenschaft/4413/watson-gewinnt-gegen-die-groessten-champions-in-der-geschichte-von-jeopardy.html"
    }
];

cardDecisions = [];

let idx = 0;
let currentCardIdx = 0;
let currentClickedCardId = -1;
let currentClickedType = ""; //can be card, moreinfo, none

class Carousel 
{
    constructor(board, stats)
    {
        this.board = board;
        this.stats = stats;

        cardsLeft.innerText = (cardsList.length - currentCardIdx) + "  Karten übrig";

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
                decision = true;
                // get right border position
                posX = this.board.clientWidth
                
            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) 
            {
                successful = true;
                decision = false;
                
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

        //let url = "https://picsum.photos/320/320/?random=" + Math.round(Math.random()*1000000);

        let id = idx;
        
        let cardContent = cardsList[id % cardsList.length];

        if(cardContent.isImage)
        {
            // cardContent.url = url;
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

            if(i == 0)
                stats.appendChild(ul);

            let cardContent = cardsList[decision.idx];

            var li = document.createElement('li');
            //li.classList.add("custom_column");

            var cardAnswer = cardContent.answer == true ? "Wahr" : "Falsch";
            var userAnswer = decision.decision == true ? "Wahr" : "Falsch";

            if(cardAnswer != userAnswer)
                countOfwrongAns++;

            li.id = decision.idx;

            var noneBtn = `<button class="result_button" id=`+li.id+` onclick="carousel.showClickedCard(this, 'none');">tick</button>`;

            li.innerHTML = `
                <div>
                    <h4 class="green_color_text">` + cardContent.heading + `</h4>
                    <span> Richtige Antwort: ` + cardAnswer + ` </span><br/>
                    <span> Ihre Antwort: ` + userAnswer + ` </span>
                    <button class="result_button" id=`+li.id+` onclick="carousel.showClickedCard(this, 'card');">card</button>
                    <button class="result_button" id=`+li.id+` onclick="window.open('`+ cardContent.moreInfo + `')">info</button>`
                    + (cardAnswer != userAnswer ? noneBtn  : "") + `
                </div>
            `;

            // li.onclick = function()
            // {
            //     carousel.showClickedCard(this);
            // }

            ul.appendChild(li);
            
        }
        this.stats.appendChild(ul);



        let resultP = document.getElementById('resultP');
        resultP.innerHTML = `
            Das waren die Meilensteile der KI. Hier sehen Sie, welche Aussagen richtig, welche falsch sind und wie Sie sich entschieden haben. <br/>
            Insgesamt haben Sie <span class="ans_span">` + (cardsList.length-countOfwrongAns) + `</span> von <span class="ans_span"> ` 
            +  cardsList.length + `</span> Aussagen richtig bewertet. 
            <br/><br/>Klicken Sie auf die Buttons, um mehr zu erfahren.
        `;
        
        summary.style.display = "block";
    }

    getCardInnerHTML(cardContent)
    {
        
        if(cardContent.isImage)
        {
            return `
                <div>
                    <h2>` + cardContent.heading + `</h2>
                    <img src=` + cardContent.url + ` height=200 width=200>
                    <p class="cardBody">` + cardContent.body + `</p>
                </div>
            `;
        } else
        {
            return `
                <div>
                    <h2>` + cardContent.heading + `</h2>
                    <video height=200 width=260 controls>
                        <source src=` + cardContent.url + ` type="video/mp4" >
                    </video>
                    <p class="cardBody">` + cardContent.body + `</p>
                </div>
            `;
        }
    }

    showClickedCard(item, clickedType) 
    {   
        let cardContent = cardsList[item.id];

        if(currentClickedCardId != -1 && (currentClickedCardId != item.id || currentClickedType != clickedType))
        {
            // document.getElementById(currentClickedCardId).classList.remove('checked');

            var currentCardElement = document.getElementById("c"+currentClickedCardId);
            if(currentCardElement)
                this.stats.removeChild(currentCardElement);
        } 
        if( (currentClickedCardId != item.id || currentClickedType != clickedType) && clickedType=="card")
        {
            // item.classList.toggle('checked');

            currentClickedCardId = item.id;
            currentClickedType = "card";

            let card = document.createElement('div');
            card.classList.add('card2');
            card.id = "c"+item.id;
            
            card.innerHTML = this.getCardInnerHTML(cardContent); 
    
            this.stats.appendChild(card);
        } else if((currentClickedCardId != item.id || currentClickedType != clickedType) && clickedType == "moreinfo")
        {
            currentClickedCardId = item.id;
            currentClickedType = "moreinfo";

            let info = document.createElement('div');
            info.id = "c"+item.id;
            info.innerHTML = cardContent.moreInfo;
            info.classList.add('more_info');

            this.stats.appendChild(info);
        } else if((currentClickedCardId != item.id || currentClickedType != clickedType) && clickedType == "none")
        {
            currentClickedCardId = item.id;
            currentClickedType = "none";

            let info = document.createElement('div');
            info.id = "c"+item.id;
            info.innerHTML = cardContent.wrongans;
            info.classList.add('more_info');

            this.stats.appendChild(info);
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

// (function($) {
//     var element = $('.follow-scroll'),
//         originalY = element.offset().top;
    
//     // Space between element and top of screen (when scrolling)
//     var topMargin = 20;
    
//     // Should probably be set in CSS; but here just for emphasis
//     element.css('position', 'relative');
    
//     $(window).on('scroll', function(event) {
//         var scrollTop = $(window).scrollTop();
        
//         element.stop(false, false).animate({
//             top: scrollTop < originalY
//                     ? 0
//                     : scrollTop - originalY + topMargin
//         }, 300);
//     });
// })(jQuery);