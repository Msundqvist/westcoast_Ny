const isValidInput = (inputText) => {
    if (inputText.trim().length === 0 || inputText.trim().length === null) {
        return false;
    }
    return true
}

export default isValidInput;