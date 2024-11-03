<template>
<template>
  <div>
    <h1>Books List</h1>
    <div v-if="items.length">
        <table>
          <thead>
            <tr><th>Library</th><th>Item ID</th><th>Status</th><th>Position</th></tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
                <td rowspan="3"></td><td>{{item.Author}}</td>
            </tr>
          </tbody>
        </table>
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
</style>
</template>