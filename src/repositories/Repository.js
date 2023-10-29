import WebService from "../WebService"

export default function Repository() {
    
    const service = WebService()
    
    const getImages = () => {
        const json = service.getRandomImages()
        json.then((response) => {
            console.log(response.data)
        })
    }

    getImages()


    return {
        getImages
    }
    
    
}

    
