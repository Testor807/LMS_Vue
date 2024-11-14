<template>
  <div>
    <h1>Component2</h1>
    <h1>Count: {{ count }}</h1>
    <h2>User: {{ user ? user.name : 'No user logged in' }}</h2>
    <button @click="increment">Increment</button>
    <button @click="fetchUser">Fetch User</button>
    <button @click="click()">Next Page</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import store from '@/js/store';
//console.log(store.count);

export default {
  computed: {
    // 使用 mapState 來映射 state
    ...mapState(['count', 'user']),
    
    // 使用 mapGetters 來映射 getters
    ...mapGetters(['count', 'user']),
  },
  methods: {
    // 使用 mapMutations 來映射 mutations
    ...mapMutations(['increment', 'setUser']),
    
    // 使用 mapActions 來映射 actions
    ...mapActions(['fetchUser']),
    
  },
  setup(){
    const router = useRouter()
    const click = () => {
      router.push({
        path: '/'
      })
    }
    return {
      click
    }
  }
};
</script>