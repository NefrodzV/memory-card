export default function Card(id, title, url) {
    
    let isSelected = false;

    const updateIsSelected = () => {
        if(!isSelected) isSelected = true
    }

    const getId = () => id
    
    const getTitle = () => title

    const getUrl = () => url

    // Resets the selected property to false 
    const reset = () => isSelected = false

    return {
        updateIsSelected,
        getTitle,
        getUrl,reset
    }

}