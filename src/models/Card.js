export default function Card(id, title, url) {
    let isSelected = false;

    const getId = () => id
    
    const getTitle = () => title

    const getUrl = () => url

    const getIsSelected = () => isSelected

    const setIsSelected = (val) => isSelected = val

    return {
        getId,
        getTitle,
        getUrl,
        getIsSelected,
        setIsSelected,
    }

}