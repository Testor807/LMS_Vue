<template>
  <div>
    <table v-if="item.length > 0">
      <thead>
        <tr><th colspan="4">{{ this.item[0].BookName_EN }}/ {{ this.item[0].Author }}著</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="6"></td><td>Author</td><td>:</td><td>{{ this.item[0].Author }}</td></tr>
        <tr><td>Publication</td><td>:</td><td>{{ this.item[0].Publication }}</td></tr>
        <tr><td>Publication Year</td><td>:</td><td>{{ this.item[0].Publication_Year }}</td></tr>
        <tr><td>Subject</td><td>:</td><td>{{ this.item[0].Subject }}</td></tr>
        <tr><td>ISBN</td><td>:</td><td>{{ this.item[0].ISBN }}</td></tr>
        <tr><td>Language</td><td>:</td><td>{{ this.item[0].Language }}</td></tr>
      </tbody>
    </table>
  </div>
  <div v-if="item">
    <table v-if="collects.length>0">
      <thead>
        <tr><th>Library</th><th>Call No.</th><th>Status</th><th>Position</th></tr>
      </thead>
      <tbody v-for="collect in collects" :key="collect.id">
        <tr><td>{{ collect.LID }}</td><td></td><td>{{ collect.Status }}</td><td>{{ collect.Position }}</td></tr>
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


<script>
import { useRouter } from 'vue-router';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { QueryISBN } from '../../js/DB/BookDB.js'; // 引入資料檢索函數
import { StockByISBN } from '@/js/DB/StockDB.js';
import { fetchLib } from '@/js/DB/LibDB.js';
import store from '../../js/Store/Item.js';
export default {
  data() {
    return {
      isbn: '',
      item: [],
      collects: [],
      libs: []
    };
  },
  computed: {
    // 使用 mapState 來映射 state
    ...mapState(['ISBN']),
  },
  async mounted() {
    try {
      this.isbn = store.state.ISBN;
      this.item = await QueryISBN(this.isbn); // 獲取書籍資料
      this.collects = await StockByISBN(this.isbn);
      this.libs = await fetchLib();

      this.collects = this.combine(this.collects,this.libs);
    } catch (error) {
      console.error("Failed to fetch books: ", error);
    }
  },
  methods:{
    combine(collects,libs){
      for(let i=0;i<collects.length;i++){
        for(let j=0;j<libs.length;j++){
          if(collects[i].LID == libs[j].LID){
            collects[i].LID = libs[j].Library;
            j=libs.length+1;
          }
        }
      }
      return collects;
    }
  }
};
</script>