<template>
  <div>
    <h1>Books List</h1>
    <div v-if="items.length">
      <div v-for="item in items" :key="item.id">
        <table>
          <thead>
            <tr class="head"><th colspan="3">
              <div @click="click(item.ISBN)">
              <div>{{ item.BookName_EN }}/{{ item.Author }}著</div>
              <div v-if="item.Translator">{{ item.Translator }}(譯)</div>
              </div>
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
import { useRouter } from 'vue-router';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { fetchBooks,QueryISBN } from '../../js/DB/BookDB.js'; // 引入資料檢索函數
import store from '../../js/Store/Item.js';
export default {
  setup(){
    const router = useRouter()
    const click = (item) => {
      store.commit('setISBN',item)
      router.push({
        path: '/item'
      })
    }
    return {
      click
    }
  },
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
  },
  computed: {
    // 使用 mapState 來映射 state
    ...mapState(['ISBN']),
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