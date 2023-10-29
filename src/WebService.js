export default function WebService() {

    const getRandomImages = async function () {
        const nekosUrl = 'https://v1.nekosapi.com/api/image/random?limit=10'
        const response = await fetch(nekosUrl, {mode: "cors"})
        const images = await response.json()
        return images
    }

    return {
        getRandomImages
    }
}