<template>
  <div>
    <h1>Books List</h1>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
    <p v-else>No books found.</p>
  </div>
</template>

<script>
import { db } from '../../js/DB/firebase.js'; // 確保正確引入 Firebase 配置
import { collection, getDocs, doc } from "firebase/firestore";

export default {
  data() {
    return {
      items: []
    };
  },
  async mounted() {
    try {
      const booksCollectionRef = collection(doc(collection(db, "LMS"), 'Tables'), 'Book'); // 替換為你的集合名稱
      const querySnapshot = await getDocs(booksCollectionRef);
      this.items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }
};
</script>