const bookData = [
  {
    image: "./images/GameProgrammingPatternsBookCover.jpg",
    title: "Game Programming Patterns",
    author: "Robert Nystrom"
  },
  {
    image: "./images/YouDontKnowJSYetBookCover.jpg",
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson"
  },
  {
    image: "https://placekitten.com/720/720",
    title: "book three",
    author: "author three"
  }
];

const buildReadingSection = bookData => {
  const bookContainer = document.createElement("div");
  const bookImg = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");

  bookImg.style.backgroundImage = "url(" + bookData.image +")";
  bookTitle.textContent = bookData.title;
  bookAuthor.textContent = bookData.author;

  const divCurrentReading = document.querySelector(".currently-reading-container");
  bookContainer.append(bookImg);
  bookContainer.append(bookTitle);
  bookContainer.append(bookAuthor);
  divCurrentReading.append(bookContainer);

  bookContainer.setAttribute("class", "c-r-container");
  bookImg.setAttribute("class", "c-r-img");
  bookTitle.setAttribute("class", "c-r-title");
  bookAuthor.setAttribute("class", "c-r-author");
}
buildReadingSection(bookData[0]);
buildReadingSection(bookData[1]);
