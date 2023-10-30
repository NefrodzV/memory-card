import WebService from "../WebService"

export default function Repository() {
    
    const service = WebService()
   
    const getImages = () => {
        const json = service.getRandomImages()
        return json
    }

    

    
    return {
        getImages
    }
    
    
}

    
