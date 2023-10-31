import Card from "./Card"
import useGame from "./useGame"
import './memory-card.css'
export default function MemoryCard() {

    const game = useGame()

    return(
        <div>
            <h1>Memory Card Game</h1>
            <h2>Best Score: {game.bestScore} || My score: {game.score} </h2>
            <h3>Touch the images once</h3>
            <ul>
                {game.cards.map(card => 
                    <Card 
                        key={card.getId()} 
                        id={card.getId()} 
                        url={card.getUrl()} 
                        clickListener={game.handleCardEvent}
                    />)
                } 
            </ul>
            
        </div>
    )
}