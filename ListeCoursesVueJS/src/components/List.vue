<template>
  <section class="list rounded mb-0">
    <header class="header">
      <h4 class="title-list">
        Liste du {{ dateList | moment("dddd Do MMMM YYYY") }}
        <b-icon class="del-list" @click.prevent="deleteList()" icon="trash-fill" aria-hidden="true"></b-icon>
      </h4>
    </header>
    <div class="main">
      <table class="table table-striped table-responsive ">
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <product :productA="product" :index="index"></product>
            </tr>
        </tbody>
        <button type="button" class="btn btn-info btn-add-product" @click="addproduct">
          <b-icon icon="plus" class="icon-add"></b-icon>
        </button>
      </table>
    </div>
    <cart :products.sync="products" :index="index">Mon caddie</cart>
  </section>
</template>

<script>
import Cart from "./Cart";
import Product from "./Product";
import productmixin from "../mixins/productmixin.js"

export default {
  mixins: [productmixin],
  components: {
    Cart,
    Product
  },
  data() {
    return {
      dateList: Date.now(),
      products: []
    };
  },
  props: ["index"],
  methods: {
    addproduct() {
      this.products.push({
        name: "Nouveau produit",
        quantity: 1,
        isNull: false
      });
      this.products = this.deleteProductNull(this.products);

    },
    deleteproduct(indexProduct) {
      this.products.splice(indexProduct, 1);
    },
    deleteList() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>

<style>
.icon-del,
.icon-add {
  width: 25px;
  height: 25px;
}

.del-list {
  margin-bottom: 15px;
  float: right;
  margin-right: 15px;
  margin-top: 0px;
  width: 30px;
  height: 30px;
}

.del-list:hover {
  cursor: pointer;
  color: rgb(94, 94, 94);
}

.list {
  float: left;
  /* width: 48%; */
  background-color: #87cefa;
  display: block;
  margin: 10px;
  box-shadow: 6px 6px 6px black;
}
.btn-add-product {
  margin: 13px;
}

.title-list {
  margin-top: 10px;
}
.table th,
.table td,
.table th,
.table td {
  border: none;
}
</style>
