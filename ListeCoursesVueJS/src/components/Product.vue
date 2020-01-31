
<template>
  <div class="line-product">
    <td>
      <input class="input-name" type="text" v-model="productA.name" />
    </td>
    <td>
      <input class="input-quantity" type="number" v-model="productA.quantity" />
    </td>
    <td>
      <b-button size="sm" class="mb-2 btn-del-product" @click.prevent="deleteproduct()">
        <b-icon icon="x" class="icon-del"></b-icon>
      </b-button>
    </td>
  </div>
</template>

<script>
export default {
  props: ["productA", "index"],
  computed: {
    product: {
      get() {
        return this.productA;
      },
      set(v) {
        this.$emit("update:productA", v);
      }
    }
  },
  methods: {
    deleteproduct() {
      this.$parent.deleteproduct(this.index);
    }
  },
  watch: {
    productA: {
      handler() {
        this.productA.name = this.$options.filters.capitalize(
          this.productA.name
        );
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.input-name {
  /* width: 250px; */
}
.input-quantity {
  width: 80px;
}
.line-product {
  height: 50px;
}
.btn-del-product {
  margin-left: 50px;
  height: 38px;
}
</style>
