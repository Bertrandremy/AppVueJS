<template>
  <div>
    <b-button class="btn-lg btn-warning btn-cart" v-b-modal = "'modalCart' + index"><slot></slot></b-button>
    <b-modal
      :id="'modalCart' + index"      
      ref="modal"
      title="Mon caddie"
      @show="openModal"
      @hidden="resetModal"
      @ok="handleOk"
      size="lg">
      <form ref="form" @submit.stop.prevent="handleSubmit">

      <table class="table">
        <thead>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index" v-bind:class="{ productNull: product.isNull }">
            <td>
              <th type="text" v-text="product.name"  />
            </td>
            <td>
              <th type="text" v-text="product.quantity" />
            </td>
            <td>
              <b-button @click.prevent="editQuantity(index)"> J'en mets un dans mon panier </b-button>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </b-modal>
  </div>
</template>

<script>
import productmixin from "../mixins/productmixin.js"

export default {
  mixins: [productmixin],
  props: ['products', 'index'],
     computed: {
     cartProducts: {
       get() {
         return this.products;
       },
       set(v) { this.$emit('update:products', v);}
     },
   },
  methods: {    
    editQuantity(index) {
      this.cartProducts[index].quantity--
      if (this.products[index].quantity < 1 || this.products[index].quantity === NaN) {
        this.products[index].isNull = true;
      }
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      return valid;
    },
    openModal() {
          this.cartProducts = this.deleteProductNull(this.cartProducts);
    },
    resetModal() {
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.cartProducts = this.deleteProductNull(this.cartProducts);
      this.$nextTick(() => {
        this.$bvModal.hide('modalCart' + this.index);
      });
    }
  }
};
</script>
<style scoped>
.productNull {
  background-color: #cfebfd;
  text-decoration: line-through;
  color: darkgray;
  pointer-events: none
}
.btn-cart {
  margin-bottom: 10px;
}
</style>
