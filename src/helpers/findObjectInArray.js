// Returns the index of an object in an array
// where the value of a given property matches 
// the value passed as an argument
const findObjectInArray = (arr, propertyName, value) => {
    return arr.findIndex(item => (item[propertyName] === value));
}

export default findObjectInArray