const normalizeISBN = (value) => {
  
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  console.log(onlyNums);
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
  }
  if (onlyNums.length <= 6) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 4)}-${onlyNums.slice(4)}`
  }
  if (onlyNums.length <= 12) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 4)}-${onlyNums.slice(4, 6)}-${onlyNums.slice(6)}`
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 4)}-${onlyNums.slice(4, 6)}-${onlyNums.slice(6, 12)}-${onlyNums.slice(12, 13)}`
}

export default normalizeISBN;