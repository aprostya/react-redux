const normalizeString = (value) => {
    if (!value) {
      return value
    }
  
const onlyString = value
    if (onlyString.length <= 40) {
      return onlyString
    }
    return `${onlyString.slice(0, 40)}`
  }
  
  export default normalizeString;