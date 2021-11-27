package com.penrose.bookcrud_1.Model;

public class BookModel {

  int ibn;
  String title;
  String author;

  public BookModel() {
  }

  public BookModel(int ibn, String title, String author) {
    this.ibn = ibn;
    this.title = title;
    this.author = author;
  }

  public int getIbn() {
    return ibn;
  }

  public void setIbn(int ibn) {
    this.ibn = ibn;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }
}
