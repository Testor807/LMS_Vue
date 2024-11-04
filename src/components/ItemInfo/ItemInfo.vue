
<script>
import { fetchBooks } from '../../js/DB/BookDB.js'; // 引入資料檢索函數

export default {
  data() {
    return {
      item: []
    };
  },
  async mounted() {
    try {
      this.items = await fetchBooks(); // 獲取書籍資料
    } catch (error) {
      console.error("Failed to fetch books: ", error);
    }
  }
};
</script>

<template>
  <div>
  <table>
    <thead>
      <tr><th>{{ item.BookName_EN }}</th></tr>
    </thead>
    <tbody>
      <tr><td></td><td>Author</td><td>:</td><td>{{ item.Author }}</td></tr>
      <tr><td>Publication</td><td>:</td><td>{{ item.Publication }}</td></tr>
      <tr><td>Publication Year</td><td>:</td><td>{{ item.Publication_Year }}</td></tr>
      <tr><td>Subject</td><td>:</td><td>{{ item.Subject }}</td></tr>
      <tr><td>Language</td><td>:</td><td>{{ item.Language }}</td></tr>
      <tr><td>ISBN</td><td>:</td><td>{{ item.BookName_EN }}</td></tr>
    </tbody>
  </table>
  </div>
  <br />
  <hr />
  <div>
  <table>
    <thead>
      <tr><th>Library</th><th>Book ID</th><th>Status</th><th>Position</th></tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  </div>
</template>

<style>
/* 添加一些樣式 */
table, tr,td,th{
  border: 1px solid black;
}
</style>