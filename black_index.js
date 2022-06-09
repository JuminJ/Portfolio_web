var dealer_card1_num;
var dealer_card2_num;

var dealer_card2_src;

var dealer_card1 = document.querySelectorAll("img")[0];
var dealer_card2 = document.querySelectorAll("img")[1];

var player_card_num = new Array();
var player_card_src = new Array();

var initScreen = document.getElementById("initScreen");
var gameScreen = document.getElementById("GameScreen");
var loseScreen = document.getElementById("loseScreen");
var winScreen = document.getElementById("winScreen");
var drawScreen = document.getElementById("drawScreen");
var pos = document.getElementById("playerCards");

var playerCardCount;

var playerDeck = document.getElementById("playerCards");

var playerSum;
var dealerSum;

function NewRandomNum()
{
    return Math.floor(Math.random() * 52) + 1
}

function Init()
{
    playerSum = 0;
    dealerSum = 0;

    dealer_card1_num = NewRandomNum();
    dealer_card2_num = NewRandomNum();
    while(true){
        if(dealer_card1 === dealer_card2_num)
        {
            dealer_card2_num = NewRandomNum();
        }else{
            break;
        }
    }

    for(var i = 0; i < playerCardCount; i++){
        player_card_num.pop();
        player_card_src.pop();
        pos.removeChild(pos.childNodes[playerCardCount-i]);
    }

    playerCardCount = 0;

    var index = parseInt(dealer_card1_num / 13);
    if(dealer_card1_num % 13 === 0){
        switch(dealer_card1_num)
        {
            case 13:
                index = 0;
                break;
            case 26:
                index = 1;
                break;
            case 39:
                index = 2;
                break;
            case 52:
                index = 3;
                break;
        }
    }
    switch(index)
    {
        case 0:
            if(isNumber(dealer_card1_num))
            {
                if(dealer_card1_num === 1)
                {
                    dealerSum += 11;
                }else{
                    dealerSum += dealer_card1_num;
                }
            }else{
                dealerSum += 10;
            }
            break;
        case 1:
            if(isNumber(dealer_card1_num - 13))
            {
                if(dealer_card1_num - 13 === 1)
                {
                    dealerSum += 11;
                }else{
                    dealerSum += dealer_card1_num - 13;
                }
            }else{
                dealerSum += 10;
            }
            break;
        case 2:
            if(isNumber(dealer_card1_num - 26))
            {
                if(dealer_card1_num - 26 === 1)
                {
                    dealerSum += 11;
                }else{
                    dealerSum += dealer_card1_num - 26;
                }
            }else{
                dealerSum += 10;
            }
            break;
        case 3:
            if(isNumber(dealer_card1_num - 39))
            {
                if(dealer_card1_num - 39 === 1)
                {
                    dealerSum += 11;
                }else{
                    dealerSum += dealer_card1_num - 39;
                }
            }else{
                dealerSum += 10;
            }
            break;
    }
    console.log(dealerSum);
    index = parseInt(dealer_card2_num / 13);
    if(dealer_card2_num % 13 === 0){
        switch(dealer_card2_num)
        {
            case 13:
                index = 0;
                break;
            case 26:
                index = 1;
                break;
            case 39:
                index = 2;
                break;
            case 52:
                index = 3;
                break;
        }
    }
    
    switch(index)
    {
        case 0:
            if(isNumber(dealer_card2_num))
            {
                if(dealer_card2_num === 1)
                {
                    dealerSum += 11;
                    if(dealerSum === 22)
                    {
                        dealerSum = 2;
                    }
                }else{
                    dealerSum += dealer_card2_num;
                }
            }else{
                dealerSum += 10;
            }
            break;
        case 1:
            if(isNumber(dealer_card2_num - 13))
            {
                if(dealer_card2_num - 13 === 1)
                {
                    dealerSum += 11;
                    if(dealerSum === 22)
                    {
                        dealerSum = 2;
                    }
                }else{
                    dealerSum += dealer_card2_num - 13;
                }
            }else{
                dealerSum += 10;
            }
            break;
        case 2:
            if(isNumber(dealer_card2_num - 26))
            {
                if(dealer_card2_num - 26 === 1)
                {
                    dealerSum += 11;
                    if(dealerSum === 22)
                    {
                        dealerSum = 2;
                    }
                }else{
                    dealerSum += dealer_card2_num - 26;
                }
            }else{
                dealerSum += 10;
            }
            break;
        case 3:
            if(isNumber(dealer_card2_num - 39))
            {
                if(dealer_card2_num - 39 === 1)
                {
                    dealerSum += 11;
                    if(dealerSum === 22)
                    {
                        dealerSum = 2;
                    }
                }else{
                    dealerSum += dealer_card2_num - 39;
                }
            }else{
                dealerSum += 10;
            }
            break;
    }

    
}

function StartGame(){

    Init();

    dealer_card1_src = "cardDeck/ace-g559e2d4ac_1280_" + dealer_card1_num + ".png";
    dealer_card2_src = "cardDeck/ace-g559e2d4ac_1280_" + dealer_card2_num + ".png";

    dealer_card1.setAttribute("src", "cardDeck/ace-g559e2d4ac_1280_53.png");
    dealer_card2.setAttribute("src", dealer_card2_src);

    AddPlayerCard();
    AddPlayerCard();

    initScreen.style.display = 'none';
    gameScreen.style.display = 'block';

}

function AddPlayerCard()
{
    player_card_num[playerCardCount] = NewRandomNum();
    
    
    var j = playerCardCount;
    while(j){
        var k = 0;
        for(var i = 0; i < playerCardCount; i++)
        {
            if(player_card_num[playerCardCount] === player_card_num[i])
            {
                player_card_num[playerCardCount] = NewRandomNum();
            }else{
                k++;
            }
        }
        if(k === j){
            break;
        }
    }
    player_card_src[playerCardCount] = "cardDeck/ace-g559e2d4ac_1280_" + player_card_num[playerCardCount] + ".png";

    var card = document.createElement("img");
    card.src = player_card_src[playerCardCount];

    pos.appendChild(card);

    playerCardCount += 1;

    checkBurst();


}


function hit()
{
    AddPlayerCard();
}

function stay()
{
    if(playerSum > dealerSum)
    {
        Win();
    }else if(playerSum < dealerSum)
    {
        Lose();
    }else if (playerSum === dealerSum)
    {
        Draw();
    }
}

function checkBurst()
{
    if(PlayerSum())
    {
        Lose();
    }
}

function PlayerSum()
{
    var index;
    var x;
    playerSum = 0;

    for(var i = 0; i < playerCardCount; i++)
    {
        index = parseInt(player_card_num[i] / 13);
        if(player_card_num[i] % 13 === 0){
            switch(player_card_num[i])
            {
                case 13:
                    index = 0;
                    break;
                case 26:
                    index = 1;
                    break;
                case 39:
                    index = 2;
                    break;
                case 52:
                    index = 3;
                    break;
            }
        }
        switch(index)
        {
            case 0:
                if(isNumber(player_card_num[i])){   
                    if(player_card_num[i] === 1){   //에이스일 경우 +11
                        playerSum += 11;
                    }else{                          
                        playerSum += player_card_num[i];   //에이스가 아닌경우 그냥 카드의 숫자를 더함
                    }
                }
                else{                               //그림카드의 경우 +10
                    playerSum += 10;
                }
                break;
            case 1:
                if(isNumber(player_card_num[i] - 13)){
                    if(player_card_num[i] - 13 === 1){
                        playerSum += 11;
                    }else{                          
                        playerSum += player_card_num[i] - 13;
                    }
                }
                else{
                    playerSum += 10;
                }
                break;
            case 2:
                if(isNumber(player_card_num[i] - 26)){
                    if(player_card_num[i] - 26 === 1){
                        playerSum += 11;
                    }else{                          
                        playerSum += player_card_num[i] -26;
                    }
                }
                else{
                    playerSum += 10;
                }
                break;
            case 3:
                if(isNumber(player_card_num[i] - 39)){
                    if(player_card_num[i] - 39 === 1){
                        playerSum += 11;
                    }else{                          
                        playerSum += player_card_num[i] - 39;
                    }
                }
                else{
                    playerSum += 10;
                }
                break;
        }
        
        
    }
    if(playerSum < 22)
    {
        console.log(playerSum);
        return false;
    }
    else
    {
        for(var i = 0; i < playerCardCount; i++)
        {
            if(player_card_num[i] % 13 === 1)
            {
                playerSum -= 10;
            }
        }
        if(playerSum < 22)
        {
            console.log(playerSum);
            return false;
        }
        console.log(playerSum);
        return true;
    }

}

function Lose()
{
    loseScreen.style.display = 'block';
    document.getElementById("playingBtn").style.display = 'none';

    dealer_card1.setAttribute("src", dealer_card1_src);

    var loseComment = document.getElementById("loseText");
    loseComment.innerHTML= "딜러카드의 합은 " + dealerSum + "이고 당신의 카드의 합은" + playerSum + "로 패배 하였습니다";
}

function Win()
{
    winScreen.style.display = 'block';
    document.getElementById("playingBtn").style.display = 'none';

    dealer_card1.setAttribute("src", dealer_card1_src);

    var loseComment = document.getElementById("winText");
    loseComment.innerHTML= "딜러카드의 합은 " + dealerSum + "이고 당신의 카드의 합은" + playerSum + "로 승리 하였습니다";
}

function Draw()
{
    drawScreen.style.display = 'block';
    document.getElementById("playingBtn").style.display = 'none';

    dealer_card1.setAttribute("src", dealer_card1_src);

    var loseComment = document.getElementById("drawText");
    loseComment.innerHTML= "딜러카드의 합은 " + dealerSum + "이고 당신의 카드의 합은" + playerSum + "로 비겼습니다";
}

function AgainBtn()
{
    drawScreen.style.display = 'none';
    winScreen.style.display = 'none';
    loseScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    initScreen.style.display = 'block';
    document.getElementById("playingBtn").style.display = 'block';
}

function isNumber(num)
{
    if(10 < num){
        return false;
    }
    else if(num === 0)
    {
        return false;
    }else{
        return true;
    }
}
