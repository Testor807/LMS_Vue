<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <h2>User: {{ user ? user.name : 'No user logged in' }}</h2>
    <button @click="increment">Increment</button>
    <button @click="fetchUser">Fetch User</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

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
};
</script>