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
}
//Store Class: Handles Storage

//Event:Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//event add books

//event :Remove book