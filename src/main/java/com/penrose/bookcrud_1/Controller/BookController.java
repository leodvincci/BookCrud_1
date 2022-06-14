package com.penrose.bookcrud_1.Controller;

import com.penrose.bookcrud_1.Model.BookModel;
import com.penrose.bookcrud_1.Service.BookDAO;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/books")
public class BookController {

  @Autowired
  BookDAO bookDAO;


  @GetMapping("/listbooks")
  public List<BookModel> getAllBooks(){
    System.out.println("Listing All Books!");
    return bookDAO.getAllBooks();
  }

  @GetMapping("/getbook/{ibn}")
  public List<BookModel> getBookByID(@PathVariable String ibn){
    return bookDAO.getBookByID(ibn);
  }

  @ResponseBody
  @PostMapping("/savebook")
  public String saveBook(@RequestBody BookModel bookModel){
    bookDAO.saveNewBook(bookModel);
    return "Book Has Been Inserted: " + bookModel.getTitle();
  }

  @ResponseBody
  @PostMapping("/savebooklist")
  public String saveBookList(@RequestBody BookModel[] bookModel){
    bookDAO.saveNewBooks(bookModel);
    return bookModel.length + " NEW Books Have Been Inserted!";
  }
  @CrossOrigin(origins = "http://localhost:3000")
  @DeleteMapping("/deletebook/{ibn}")
  public String deleteBook(@PathVariable String ibn){
    BookModel book = bookDAO.getBookByID(ibn).get(0);
    bookDAO.deleteBook(ibn);
    return "Book Has Been DELETED: " + book.getTitle();

  }



  @GetMapping("/test")
  public String helloworld(){
    return "<h1>Hello World!</h1>";
  }


}
