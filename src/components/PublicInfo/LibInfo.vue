<template>
  <div>
    <h1>Library Information</h1>
    <div v-if="items.length">
      <div v-for="item in items" :key="item.id">
        <table>
          <thead>
            <tr><th colspan="2">{{ item.Library }}</th></tr>
          </thead>
          <tbody>
            <tr><td colspan="2"></td></tr>
            <tr><td>Open Hours</td><td></td></tr>
            <tr><td>Office Number</td><td>{{ item.Contact }}</td></tr>
            <tr><td>Address</td><td>{{ item.Location }}</td></tr>
            <tr><td colspan="3" rowspan="4">Map</td></tr>
          </tbody>
        </table>
        <br />
      </div>
    </div>

  </div>
</template>

<script>
import { fetchLib } from '@/js/DB/LibDB'; // 引入資料檢索函數

export default {
  data() {
    return {
      items: []
    };
  },
  async mounted() {
    try {
      this.items = await fetchLib(); // 獲取書籍資料
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