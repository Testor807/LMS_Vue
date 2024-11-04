<template>
  <div>
    <h1>Books List</h1>
    <div v-if="items.length" class="container">
      <div class="item" v-for="item in items" :key="item.id">
        <table id="item">
          <tbody>
            <tr><td></td></tr>
            <tr><td>{{item.Author}}</td></tr>
            <tr><td>{{item.Publication}}</td></tr>
            <tr><td>{{item.Publication_Year}}</td></tr>
          </tbody>
        </table>
        <br />
      </div>
    </div>

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

.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 0 30%; /* 每个元素占据 30% 的宽度 */
  box-sizing: border-box; /* 包含内边距和边框在内 */
  margin: 5px; /* 元素之间的间距 */
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}

#item{
  margin: auto;;
}
</style>