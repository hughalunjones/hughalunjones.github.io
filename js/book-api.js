async function loadObject(isbn) {
  const url = "https://openlibrary.org/isbn/" + isbn + ".json";
  const response = await fetch(url);
  return response.json();
}
function buildBookSection(isbn){
  const bookSection = document.querySelector(".current-reading");
  const img = document.createElement("img");
  const pTitle = document.createElement("p");
  pTitle.textContent = isbn.title;
  bookSection.append(pTitle);
  bookSection.append(img);
}
async function insertArticle(id) {
  const isbn = await loadObject(id);
  const section = buildBookSection(isbn);
  results.appendChild(section);
}
