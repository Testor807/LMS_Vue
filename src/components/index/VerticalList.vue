<template>
  <div>
    <h1>Books List</h1>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id">{{ item.BookName_CN }}</li>
    </ul>
    <p v-else>No books found.</p>
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
</style>