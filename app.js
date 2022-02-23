document.addEventListener('DOMContentLoaded', () => {



    //card options
    const cardArray = [
        {
            name: 'dif',
            img: 'images/DIF.png'
        },
        {
            name: 'dif',
            img: 'images/DIF.png'
        },
        {
            name: 'frolunda',
            img: 'images/frölunda.png'
        },
        {
            name: 'frolunda',
            img: 'images/frölunda.png'
        },
        {
            name: 'linkoping',
            img: 'images/Linkoping-HC.png'
        },
        {
            name: 'linkoping',
            img: 'images/Linkoping-HC.png'
        },
        {
            name: 'malmo',
            img: 'images/Malmo-Redhawks.png'
        },
        {
            name: 'malmo',
            img: 'images/Malmo-Redhawks.png'
        },
        {
            name: 'puck',
            img: 'images/puck.png'
        },
        {
            name: 'puck',
            img: 'images/puck.png'
        },
        {
            name: 'rogle',
            img: 'images/rögle.png'
        },
        {
            name: 'rogle',
            img: 'images/rögle.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/shl.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/shl.png')
            cards[optionTwoId].setAttribute('src', 'images/shl.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    //flippcard
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})