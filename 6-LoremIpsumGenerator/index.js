

const words = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do",
  "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "ut",
  "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris",
  "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute", "irure", "dolor",
  "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat",
  "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt",
  "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"
];

// Repeat the words to reach 500 words
const loremWords = Array.from({ length: 500 }, () => words[Math.floor(Math.random() * words.length)]);











let paragraph = document.getElementById('paragraph');





let wordsPerParagraph = document.getElementById('wpp');

let wordsPerParagraphText = document.getElementById('wppText');
let paragraphText = document.getElementById('paragraphText');


let elementType = document.getElementById('elem')



let insert = document.getElementById('insert')

let textArea = document.getElementById('textArea');

let generate = document.getElementById('generate')




function changeTexts()  {
  paragraphText.innerText = paragraph.value
  wordsPerParagraphText.innerText = wordsPerParagraph.value
}
document.body.addEventListener('load', changeTexts)
document.body.addEventListener('change', changeTexts)


generate.addEventListener('click', () => {
  if (insert.value == 'yes') {



    for (let i = 0; i < paragraph.value; i++) {
      let text = elementType.value ? `<${elementType.value}>`:"";
      for (let j = 0; j < wordsPerParagraph.value; j++) {
        text += `${loremWords[Math.floor(Math.random() * words.length)]} `
      }
      text +=  elementType.value ? `</${elementType.value}>`:"";

      text+="\n__________________________\n"
      
      // let child = document.createElement(`${elementType.value}`)
      // console.log(child)

      // child.innerText=`${text}`
      textArea.innerHTML+=text
    }

  } else {

    let text = ''
    for (let i = 0; i < paragraph.value; i++) {
      text=''
      console.log(i)
      for (let j = 0; j < wordsPerParagraph.value; j++) {
        text += loremWords[Math.floor(Math.random() * words.length)]+" "
        // console.log(j)
      }
      text += "\n__________________________\n"
      textArea.innerHTML +=
        `${text}`
    }



  }

})
