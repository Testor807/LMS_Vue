<template>
  <div>
    <h1>Books List</h1>
    <div v-if="items.length">
      <div v-for="item in items" :key="item.id">
        <table>
          <thead>
            <tr><th colspan="2">{{ item.BookName_EN }}</th></tr>
          </thead>
          <tbody>
            <tr><td rowspan="3"></td><td>{{item.Author}}</td></tr>
            <tr><td>{{item.Publication}}</td></tr>
            <tr><td>{{item.Publication_Year}}</td></tr>
          </tbody>
        </table>
      </div>
      <hr />
    </div>

  </div>
</template>

<script>
import { fetchBooks } from '../../js/DB/firestoreService.js'; // 引入資料檢索函數

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