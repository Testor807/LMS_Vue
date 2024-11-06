<template>
  <div>
    <h1>Books List</h1>
    <div v-if="items.length">
      <div v-for="item in items" :key="item.id">
        <table>
          <thead>
            <tr class="head"><th colspan="3">
              <div>{{ item.BookName_EN }}/{{ item.Author }}著</div>
              <div v-if="item.Translator">{{ item.Translator }}(譯)</div>
            </th></tr>
          </thead>
          <tbody>
            <tr><td rowspan="7"><img :src="item.img" /></td><td>出版</td><td>{{item.Publication}}; {{item.Publication_Year}}</td></tr>
            <tr><td>Version</td><td></td></tr>
            <tr><td>Subject</td><td>{{item.Subject}}</td></tr>
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
.head{
  text-align: left;
}
</style>