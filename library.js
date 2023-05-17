/* const Book = (title,author,pages,id) => {
    const toggleRead = () =>
    {
        this.read = !this.read;
    }
    return {title,author,pages,id};
} */
 class Book { 
    constructor(title,author,pages,id){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = id;
        this.read = false;
    }
    toggleRead() 
    {
        console.log("toggle read")
        this.read = !this.read;
    }
  
} 
class Library {
    constructor(libraryName)
    {
        this.library = [];
    }
    addBook(book) {
        book.id = this.library.length;
        this.library.push(book);
    };
    resetIDs() //after moving the array item we need to reset the id
    {
        for(let i = 0; i < this.library.length; i++)
            this.library[i].id = i;
    }
    toggleRead(id) 
    {
        this.getBooks()[id].toggleRead();
        refreshLibrary();
    }
    removeBook(id) 
    {
        console.log("Remove book with id : ",id);
        let tempLibrary = [];
        for(let i = 0; i < this.library.length; i++)
        {
            if(i!= id)
            {
                console.log("Pushing ",this.library[i]);
                tempLibrary.push(this.library[i]);
            }
        }
        this.library = tempLibrary;
        this.resetIDs();
        refreshLibrary();
    }
    getBooks() {
        return this.library;
    }
};
