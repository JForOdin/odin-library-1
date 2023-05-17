
const library = new Library("libraryOne"); 
// create example books and add to library object
let newBook = new Book("The Road","Cormack Mcarthy",232);
let newBookTwo = new Book("Shantaram","Gregory David",2021);
library.addBook(newBook);
library.addBook(newBookTwo); 
////////

const removeButton = (id) => {
    return "<button style = 'margin-left:10px' onClick='library.removeBook("+`${id}`+")' id = "+`${id}`+">remove book</button>";
}
const libraryDiv = document.getElementById("book-list");
const readButton = (id) => {
    if(library.getBooks()[id].read)
    {
        return "<button style = 'background-color: #5f9ea0; color: white; border-radius: 5px; margin: 5px;' onClick='library.toggleRead("+`${id}`+")' id = "+`${id}`+">havent read</button>";
    }
    else
    {
        return "<button style = 'background-color: #5f9ea0; color: white;  border-radius: 5px; margin: 5px;' onClick='library.toggleRead("+`${id}`+")' id = "+`${id}`+">read</button>";
    }
}
const refreshLibrary = () => {
    if(libraryDiv.hasChildNodes)
    {
        libraryDiv.textContent = "";
    }
    for(let i = 0; i < library.getBooks().length; i++)  //loop through array display book info in a div
    {
        const bookDiv = document.createElement('div');
        bookDiv.style.display = "grid";
        bookDiv.style.gridTemplateColumns = "25% 25% 25% 25%";
        bookDiv.style.justifyContent = "space-evenly";
        bookDiv.style.border = "5px solid #5f9ea0";
        bookDiv.style.margin = "5px";
       /* bookDiv.className = "book-div";
        bookDiv.style.display = "flex";

        bookDiv.style.justifyContent = "space-evenly"
        bookDiv.style.alignItems = "center"; */
        bookDiv.innerHTML = "<div>"+library.getBooks()[i].title+"</div>"+"<div>"+library.getBooks()[i].author+"</div>"+"<div>"+library.getBooks()[i].pages+"</div>"+"<div>"+readButton(library.getBooks()[i].id)+"</div>"//+" "+removeButton(library.getBooks()[i].id);
        libraryDiv.appendChild(bookDiv);
    }
}
refreshLibrary();
let showingForm = false; //
const formContainerDiv = document.getElementById("form-div");
let form = document.createElement('div');

const addButton = document.getElementById("add-button");
addButton.onclick = () => {
    if(showingForm)
    {
        showingForm = false;
        return formContainerDiv.style.display = "none";
    }
    showingForm = true;
    formContainerDiv.style.display = "block";
}

const authorName = document.querySelector("#author_name");
const bookTitle = document.querySelector("#book_title")
const pages = document.querySelector("#pages");
const submitButton = document.querySelector("#submit-book");
submitButton.onclick = () => {
    event.preventDefault();
    let newBook = new Book(authorName.value,bookTitle.value,pages.value);
    library.addBook(newBook);
    authorName.value = ""; //reset form values to empty strings
    bookTitle.value = "";  
    pages.value = "";
    refreshLibrary(); 
}
