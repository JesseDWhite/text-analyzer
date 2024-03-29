// utility logic

function noInputtedWord(word, text) {
    return ((text.trim().length === 0) || (word.trim().length === 0));
}

//business interface logic

function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function (element) {
        if (!Number(element)) {
            wordCount++;
        }
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {
    if (noInputtedWord(word, text)) {
        return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++
        }
    });
    return wordCount;
}

//user-interface logic

function boldPassage(word, text) {
    if (noInputtedWord(word, text)) {
        return ""
    }
    let htmlString = "<p>"
    let textArray = text.split(" ");
    textArray.forEach(function (element, index) {
        if (element.toLowerCase().startsWith(word.toLowerCase()) && element.toLowerCase().endsWith(word.toLowerCase())) {
            htmlString = htmlString.concat("<b>" + element + "</b>");
        } else {
            htmlString = htmlString.concat(element);
        }
        if (index !== (textArray.length - 1)) {
            htmlString = htmlString.concat(" ");
        }
    });
    return htmlString + "</p>";
}

$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const passage = $("#text-passage").val();
        const word = $("#word").val();
        const wordCount = wordCounter(passage);
        const occurrencesOfWord = numberOfOccurrencesInText(word, passage);

        $("#total-count").html(wordCount);
        $("#selected-count").html(occurrencesOfWord);
        $("#bolded-passage").html(boldPassage(word, passage))
    });
});

// here is a short text passage with a second here for you to see.But then I will throw in a there just to make it confusing since it will still highlight it as if it were a here.