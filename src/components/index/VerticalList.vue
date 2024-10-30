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
import {GetBookStoack} from '../../js/DB/ItemDB.js'
console.log(GetBookStoack());
</script>