import { useState, useEffect } from "react"
import Card from "./models/Card"
// Creates a hook for the game logic
export default function useGame() {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [cards, setCards] = useState([])
    
    const url = 'https://v1.nekosapi.com/api/image/random?limit=11'

   
    const isDuplicate = (data, cardsData) => cardsData.some(card => card.getUrl() === data.url)
    const processData = (data) => {
        const cardsData = []
        data.forEach(obj => {
            // This is to remove the duplicates from the source
            // Probably better with a map object
            if(!isDuplicate(obj, cardsData)) {
                const card = Card(obj.id, null, obj.url)
                cardsData.push(card)
            }
        });
        // update the card state
        setCards(cardsData)
        
    }
  
    const requestData = () => {
        fetch(url, {mode: "cors"}).then(response => {
            if(!response.ok) {
                throw new Error("[Response Error] status: "+ response.status)
            }
            return response.json()
        }).then(json => processData(json.data))
    }
    
    useEffect(() => {
        // Getting pics 10 times
       requestData()
        
    },[])

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

    const randomPointer = (length) => Math.floor(Math.random() * length)

    // Makes the cards random
    const randomize = () => {
        const cardsCopy = [...cards]
        const randomData = []
        while(cardsCopy.length > 0) {
            const pointer = randomPointer(cardsCopy.length)
            const obj = cardsCopy.splice(pointer, 1)[0]
            randomData.push(obj)
        }
        // Updates the card state
        setCards(randomData)
    }

    const endGame = () => {
        cards.forEach(card => card.setIsSelected(false))
        if(bestScore < score) {
            setBestScore(score)
        }
        setScore(0)
    }

    const handleCardEvent = (id) => {
        const card = searchCard(id)
        
        if(card.getIsSelected()) {
            //TODO END GAME
            endGame()
            return
        }
        setScore(score + 1)
        card.setIsSelected(true)
        randomize()
    }

    // Props
    const props = {
        score,
        bestScore,
        cards,
        handleCardEvent
    }

    return props
}