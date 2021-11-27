package com.penrose.bookcrud_1.Service;

import com.penrose.bookcrud_1.Model.BookModel;
import java.util.List;

public interface DAO {

  List<BookModel> getAllBooks();
  List<BookModel> getBookByID(String ibn);

  void saveNewBook(BookModel bookModel);

  void deleteBook();


}
