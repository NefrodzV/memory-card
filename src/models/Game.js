import Repository from "../repositories/Repository"
import Card from "./Card"
export default function Game() {
    console.log("game init")
    // Repository to get the cards data
    const repository = Repository()
    const cards = []
    let score = 0
    let bestScore = 0
    //Represents when the game has ended
    // let gameEnd = false

    //Object to update the ui when data has changed
    const Updater = {
        updateCards: null
    }

    // TODO: IMPLEMENT THESE TWO METHOD FOR GETTING THE DATA FROM REPO AND INIT THE CARDS ARRAY
    const initCards = function(){
       repository.getImages().then(response => {
        if(response.data === undefined) return
        response.data.forEach(obj => {
        const card = Card(obj.id, null, obj.url)
        cards.push(card)
        })
        console.log(cards)
       })
    }
    
    const searchCard = (id) => {
        let card = null
        for(let i = 0; i < cards.length; i++) {
            const object = cards[i]
            if(object.getId() === id) {
                card = object
                break
            }
        }
        return card
    }

    //Updates the ui,and best score if needed
    const endGame = () => {
        if(score > bestScore) {
            bestScore = score
        }
        // Makes the cards selection to false to reset them
        cards.forEach(card => card.setIsSelected(false))
    }

    const randomPointer = (length) => Math.floor(Math.random * length)

    // Makes the card data random
    // TODO: CHECK IF THIS CAN CHANGE MAYBE
    const randomize = () => {
        // Makes a random pointer
        const cardsCopy = {...cards}
        const randomCardsData = []
        
        while(cardsCopy.length >= 0) {
            const pointer = randomPointer(cardsCopy.length)
            const obj = cardsCopy.splice(pointer, 1)[0]
            randomCardsData.push(obj)
        }

        //TODO: UPDATE THE UI WITH NEW RANDOM CARDS
        
    }

    //Handles the click event when pressed
    const handleClickEvent = (id) => {
        const card = searchCard(id)
        // If the card is already selected end the
        if(card.isSelected()) {
            endGame()
        }
        // Update that the card is selected right now
        card.setIsSelected(true)
        randomize()

        // Updates the ui
    }
    
    const getCards = () => cards
    return {
        getCards,
        handleClickEvent
    }
}