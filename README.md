# _text-analyzer_ 🎹
#### _An application to find the selected word in a sentence and highlight them._
#### By _Jsse White_
## Technologies Used
* _HTML_
* _Javascript_
* _CSS_
* _VS Code_
## Description
This application will take any amount of user input and will then tell them the total number of words used in the given paragraph. The user can then select a certain word that they want to highlight and it will highlight all words in the paragraph that match that description.
## Setup/Installation Requirements
* __
* __
* __
* __
* __
## Known Bugs
* _If a word contains a match at all, it will highlight that word. Example: "check" in "paycheck" will come back as a match if the word you are looking for is "check"._
## License
_MIT (C) 2021 Jesse White 2021_
## Contact Information
Jesse White _jesse.white6@gmail.com_

## Specs

### Decribe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Ouput: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output 2

### Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
wordCounter(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
wordCounter(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
wordCounter(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
wordCounter(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red Green green GREEN";
cosnt word = "Red";
wordCounter(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, don't you?";
const word = "Red";
wordCounter(word, text);
Expected Output: 3

Test: "If an empty sting is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

### Describe: boldPassage()

Test: "It should return a non-mathcing word in a p tag."
Code:
const word = "hello";
cosnt text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p>hello <b>there</b></p>"

### Decribe: mostCommonWords()

Test: "It should return the most common word in the text."
Code:
const word = "hello hello";
const text = "there";
mostCommonWords(word, text);
Expected Output: hello
