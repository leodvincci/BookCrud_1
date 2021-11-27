package com.penrose.bookcrud_1.Controller;

import com.penrose.bookcrud_1.Model.BookModel;
import com.penrose.bookcrud_1.Service.BookDAO;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
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



  @GetMapping("/test")
  public String helloworld(){
    return "<h1>Hello World!</h1>";
  }


}
