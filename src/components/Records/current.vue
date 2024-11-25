<template>
    <div>
        <table v-if="items.length">
            <thead>
                <tr><th>No.</th><th>Item</th><th>Author</th><th>User</th><th>Date</th></tr>
            </thead>
            <tbody v-for="item in items" :key="item.id">
                <tr><th></th><th>{{ item.BookName_EN }}</th><th></th><th></th><th></th></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { fetchLoan, QL_AccID, QL_Lid } from '@/js/DB/LoanDB';
import store from '@/js/store/Account';
import {fetchLib} from '@/js/DB/LibDB';
import { StockByID } from '@/js/DB/StockDB';
import { QA_ID } from '@/js/DB/AccDB';

export default{
    data() {
    return {
      type: null,
      lid: null,
      items: [],
      libs: [],
      book: [],
      Loan: [],
      account: []
    };
  },
  computed: {
    // 使用 mapState 來映射 state
    ...mapState(['type']),
    ...mapState(['lid']),
  },
  methods: {
    async Assign(records){
        this.libs = await fetchLib();
        for(let i=0;i<records.length;i++){
            this.book = await StockByID(records[i].BID);
            for(let j=0;j<this.libs.length;j++){
                if(this.book.LID == this.libs[j].LID){
                    const arr = {"Book":this.book.BookName_EN,"Author":this.book.Author,"User":records[i].AccID,"ExpiryDate":records[i].ExpiryDate,"ExportDate":records[i].ExportDate};
                    this.item.push(arr);
                    console.log(this.item);
                    j= this.libs.length+1;
                }
            }
        }
    }
  },
  async mounted(){
    this.type = store.state.type;
    switch(this.type){
    case "admin":
        console.log("Admin Account");
        this.Loan = await fetchLoan();
        if(this.Loan != [] ){
            this.Assign(this.Loan);
        }
        break;
    case "staff":
        console.log("Staff Account");
        this.Loan = QL_Lid();
        break;
    default:
        console.log("Member Account");
        this.Loan = QL_AccID();
        break;
    }
  }
}
</script>