package com.penrose.bookcrud_1.Service;

import com.penrose.bookcrud_1.Model.BookModel;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class BookDAO implements DAO{

  @Autowired
  JdbcTemplate jdbcTemplate;

  RowMapper<BookModel> rowMapper = (rs,rowNum)->{
    BookModel bookModel = new BookModel();
    int ibn = rs.getInt("ibn");
    String title = rs.getString("title");
    String author = rs.getString("author");
    bookModel.setTitle(title);
    bookModel.setIbn(ibn);
    bookModel.setAuthor(author);
    return bookModel;
  };

  @Override
  public List<BookModel> getAllBooks() {
    String sql = "select * from books";

    List<BookModel> bookModelList = jdbcTemplate.query(sql,rowMapper);

    return bookModelList;
  }

  @Override
  public List<BookModel> getBookByID(String ibn) {
    String sql = String.format("select * from books where ibn = %s",ibn);
    return jdbcTemplate.query(sql,rowMapper);
  }

  @Override
  public void saveNewBook(BookModel bookModel) {
    Object[] sqlParams = {bookModel.getIbn(),bookModel.getTitle(),bookModel.getAuthor()};
    String sql = "insert into books values(?, ?, ?)";
    jdbcTemplate.update(sql,sqlParams);
    System.out.println("A New Book Has Been Inserted!");
  }

  @Override
  public void deleteBook(String ibn) {
      String sqlParam = ibn;
      String sql = "delete from books where ibn = ?";
      jdbcTemplate.update(sql,sqlParam);
    System.out.println("A Book Has Been DELETED!");

  }
}
