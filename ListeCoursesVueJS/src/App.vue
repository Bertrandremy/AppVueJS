<template>
  <div id="app">
    <list v-for="(list, index) in lists" :key="index" v-bind:index="index"></list>
    <div class="add-list">
      <button type="button" class="btn btn-info btn-add-list" @click="addList">Ajouter une liste</button>
    </div>
  </div>
</template>

<script>
import List from "./components/List";

export default {
  components: {
    List
  },
  data() {
    return {
      lists: []
    };
  },
  methods: {
    addList() {
      this.lists++;
    }
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #e5eef2;
}
.add-list {
  float: left;
  width: 420px;
  height: 200px;
  align-content: center;
  border: dashed 2px black;
  vertical-align: middle;
  margin: 10px;
}
.btn-add-list {
  margin: 100px;
}
</style>
