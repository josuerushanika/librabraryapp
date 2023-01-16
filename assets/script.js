// Book class:Represents a book
class Book {
  constructor(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class: Handle UI Tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book one',
        author:'John Doe',
        isbn: '3434434'
      },
      
      {
        title: 'Book Two',
        author:'Jane Doe',
        isbn: '167104'
      }
    ];
  const books = StoredBooks;
  books.forEach((book) => UI.addbookToList(book));
  }

  static addbookToList(book){
   const list = document.querySelector('#book-list');

   const row = document.createElement('tr');

   row.innerHTML =`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
   `;

   list.appendChild(row);
  }
  //delete books
  static deleteBook(el) {
    if(el.classList.contains('delete')) {
       el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
   const div = document.createElement('div');
   div.className = `alert alert-${className}`;
   div.appendChild(document.createTextNode(message));
   const container = document.querySelector('.container');
   const form = document.querySelector('#book-form');
   container.insertBefore(div, form);
   //vanish in 3 seconds
   setTimeout(() => document.querySelector('.alert').remove(),3000);
  }

//clear field
  static clearFields() {
    document.querySelector('#title').value='';
    document.querySelector('#author').value='';
    document.querySelector('#isbn').value='';
  }
}
//Store Class: Handles Storage

//Event:Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//event add books

document.querySelector('#book-form').addEventListener('submit', (e) =>{
  //Prevent actual submit
  e.preventDefault();
//Get form values
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const isbn = document.querySelector('#isbn').value;
//validate
if(title === '' || author === ''|| isbn ==='') {
   UI.showAlert('Please fill in all fields', 'danger');
} else {
  //instatiat book
const book = new Book(title, author, isbn);

//Add Book to UI
UI.addbookToList(book);

//Show success message
UI.showAlert('Book added', 'success');
//clear field
UI.clearFields();

}

});
//event :Remove book
document.querySelector('#book-list').addEventListener('click',(e)=>{
UI.deleteBook(e.target)
});