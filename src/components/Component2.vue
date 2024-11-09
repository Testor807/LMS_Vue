<template>
    
</template>
<script>
//Importing store 
import store from '../js/store.js'; 
export default { 
  name: "Component2", 
  methods: { 
    count() { 
      //Triggering Actions with the store.dispatch method 
      store.dispatch('change_n') 
    }, 
  }, 
}; 
</script>
