
<template>
  <div>A</div>
  <div>B</div>
</template>
<script>
import { useRouter } from 'vue-router';
import { fetchBooks } from '../../js/DB/BookDB.js'; // 引入資料檢索函數
console.log(localStorage.getItem('item'));
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
<style>
/* 添加一些樣式 */
table, tr,td,th{
  border: 1px solid black;
}
</style>