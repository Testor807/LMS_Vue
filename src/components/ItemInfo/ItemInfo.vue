<template>
<template>
  <div>
  <table>
    <thead>
    </thead>
    <tbody>
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

<script>
import { fetchBooks } from '../../js/DB/BookDB.js'; // 引入資料檢索函數

export default {
  data() {
    return {
      items: []
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

<style>
/* 添加一些樣式 */
table, tr,td,th{
  border: 1px solid black;
}
</style>
</template>