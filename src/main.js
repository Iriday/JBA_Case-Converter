const textarea = document.getElementById("text")
const upperCaseBtn = document.getElementById("upper-case")
const lowerCaseBtn = document.getElementById("lower-case")
const properCaseBtn = document.getElementById("proper-case")
const sentenceCaseBtn = document.getElementById("sentence-case")

function capitalizeAllWords(str) {
    str = str.toLowerCase()

    const rLetters = /[a-z]/
    const rWhitespace = /\s/
    const arr = []
    let isPrevWhitespace = true

    for (let i = 0; i < str.length; i++) {
        let isCurrLetter = str[i].match(rLetters)
        arr.push(isPrevWhitespace && isCurrLetter ? str[i].toUpperCase() : str[i])

        isPrevWhitespace = isCurrLetter ? false : str[i].match(rWhitespace)
    }
    return arr.join("")
}

function capitalizeAllSentences(str) {
    str = str.toLowerCase()

    const rLetters = /[a-z]/
    const rEndOfSentence = /[?!.]/
    const arr = []
    let isEndOfSentenceFoundPrev = true

    for (let i = 0; i < str.length; i++) {
        let isCurrLetter = str[i].match(rLetters)

        if (isEndOfSentenceFoundPrev && isCurrLetter) {
            arr.push(str[i].toUpperCase())
            isEndOfSentenceFoundPrev = false
        } else {
            arr.push(str[i])
            if (!isEndOfSentenceFoundPrev) {
                isEndOfSentenceFoundPrev = str[i].match(rEndOfSentence)
            }
        }
    }
    return arr.join("")
}


upperCaseBtn.onclick = () => {
    textarea.value = textarea.value.toUpperCase()
}

lowerCaseBtn.onclick = () => {
    textarea.value = textarea.value.toLowerCase()
}

properCaseBtn.onclick = () => {
    textarea.value = capitalizeAllWords(textarea.value)
}

sentenceCaseBtn.onclick = () => {
    textarea.value = capitalizeAllSentences(textarea.value)
}