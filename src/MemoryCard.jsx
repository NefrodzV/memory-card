import Card from "./Card"
import useGame from "./useGame"
import './memory-card.css'
export default function MemoryCard() {

    const game = useGame()

    return(
        <div className="memoryCard">
            <h1>Memory Card Game</h1>
            <h2>Best Score: {game.bestScore} || My score: {game.score} </h2>
            <h1>Touch the images only once</h1>
            <ul>
                {game.cards.map(card => <Card key={card.getId()} id={card.getId()} url={card.getUrl()} clickListener={game.handleCardEvent}/>)} 
            </ul>
            
        </div>
    )
}