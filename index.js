/* 1. */
// first version 
function initialCase(str) {
  const newStr = str.split(" ");
  return newStr
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
}

console.log(initialCase("hello world")); // "Hello World"
console.log(initialCase("I am developer")); // "I Am Developer"

// second version, which works too

//     сonst str = 'hello world';
//     const arr = str.split(" ");
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }

//     const str2 = arr.join(" ");
// }
// console.log(str2);

/*
2. При вводе в #textInput выводить текст в #preview
в initialCase (воспользуйтесь своей функцией)
*/

const textInput = document.querySelector("#textInput");
const previewTag = document.querySelector("#preview");

textInput.oninput = () => {
  previewTag.textContent = initialCase(textInput.value);
};

/*
3. По клику #textBtn добавлять тег p c текстом из #textInput в section.
При этом четные теги должны быть красного цвета(#bd2525), а нечетные синего(#3424be)
*/

const textBtn = document.querySelector("#textBtn");
const sectionTag = document.querySelector("section");

textBtn.onclick = () => {
  const p = document.createElement("p");
  p.textContent = initialCase(textInput.value);
  if (textInput.value.length % 2 === 0) {
    p.style.color = "#bd2525";
  } else {
    p.style.color = "#3424be";
  }
  sectionTag.append(p);
  textInput.value = "";

  /*
4. По клику на #checkBtn нужно проверить нет ли "!" среди текстов тегов p добавленных вами
Если найден, тогда окрасить кнопку зеленым цветом, в противном случае красным.
*/

  const checkBtn = document.querySelector("#checkBtn");

  checkBtn.onclick = () => {
    for (let i = 0; i < p.textContent.length; i++) {
      if (p.textContent[i] === "!") {
        checkBtn.style.background = "#00ff00";
      } else {
        checkBtn.style.background = "#ff0000";
      }
    }
  };
};
