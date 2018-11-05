const normalizeNumbers = (value) => {
    if (!value) {
      return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 10) {
      return onlyNums
    }
    return `${onlyNums.slice(0, 10)}`
}  

  
export default normalizeNumbers;