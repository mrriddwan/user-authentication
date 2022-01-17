<template>
    <h1>Login</h1>
    <div>
  <h2>list</h2>

  <ul v-for="(todo, index) in todos" :key="index">
    <li> 
      <span :class="{ done: todo.done }">
        {{todo.content}}
      </span>
    </li>

    <q-btn push @click="removeTodo(index)" label="Remove" color="red" />
    <q-btn push @click="doneTodo(todo)" label="Done" color="green"/>

  </ul>

  <h4 v-if="todos.length === 0">-- Insert item --</h4>
</div>
    
</template>

<script>

export default {
    name: 'Login'
}
</script>

<style scoped>

</style>