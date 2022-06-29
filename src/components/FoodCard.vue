<template>
  <div class="card food-card m-1 ">
    <img class="img-fluid" src="../assets/food-bg.png" alt="">

    <div class="card-body py-2 px-3">
      <div class="mt-3">
        <span class="pe-2"><i class="bi bi-circle-fill" style="font-size: 7px"></i>سوسیس</span>
        <span class="pe-2"><i class="bi bi-circle-fill" style="font-size: 7px"></i> ژامبون</span>
        <span class="pe-2"><i class="bi bi-circle-fill" style="font-size: 7px"></i> زیتون</span>
        <span class="pe-2"><i class="bi bi-circle-fill" style="font-size: 7px"></i> پنیر پیتزا</span>
        <span class="pe-2"><i class="bi bi-circle-fill" style="font-size: 7px"></i> ذرت</span>

        <span class="pe-2"><i class="bi bi-circle-fill" style="font-size: 7px"></i> پنیر گود</span>
        <span class="pe-2"><i class="bi bi-circle-fill" style="font-size: 7px"></i> پنیر گودا</span>
        <span class="pe-2"><i class="bi bi-circle-fill" style="font-size: 7px"></i> قارچ</span>

      </div>
      <p class="fw-bold mt-4 mb-0">پیتزا ایتالیایی</p>
      <p>119,000</p>
      <div class="input-group mt-2 px-0 " style="width: 100px;">

        <i :id="'increase_'+index" @click="increaseQ" class="bi bi-plus-circle-fill me-1 text-danger" style="font-size: 20px"></i>
        <input :id="'quantity_'+index" type="text" class="form-control p-0 form-control-sm text-center" required value="">
        <i :id="'decrease_'+index" @click="decreaseQ" v-if="decreaseBtn" class="bi bi-dash-circle-fill ms-1 text-danger" style="font-size: 20px"></i>

      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";

export default {
  name: "FoodCard",
  props: ['index'],
  setup(props){
    const decreaseBtn = ref(false);
    const increaseQ = ()=>{

      if (document.querySelector('#quantity_'+props.index).value === '' ){
        document.querySelector('#quantity_'+props.index).value = 1;
        decreaseBtn.value = true;
      }else{
        document.querySelector('#quantity_'+props.index).value = parseInt(document.querySelector('#quantity_'+props.index).value) + 1;

      }
    }
    const decreaseQ = ()=>{
      if(document.querySelector('#quantity_'+props.index).value >0) {
        document.querySelector('#quantity_'+props.index).value = parseInt(document.querySelector('#quantity_'+props.index).value) - 1;
        if (parseInt(document.querySelector('#quantity_'+props.index).value) === 0){
          document.querySelector('#quantity_'+props.index).value = '';
          decreaseBtn.value = false;
        }
      }

    }

    return{
      decreaseBtn,
      increaseQ,
      decreaseQ
    }
  }
}
</script>

<style scoped>
.card {
  /*background-color: rgba(240, 128, 128, 0.6);*/
  box-shadow: 0 1px 1px lightgrey;
  border: none;
  border-radius: 46% 46% 20px 210px;
}

.card img {
  border-radius: 250px 250px 0 0px;
  margin: -2px 0px 0 0;


}

.input-group > .form-control, .input-group > .form-select {
  position: relative;
  flex: 0 1 !important;
  min-width: 20px !important;
  border: none;
}
.bi{
  cursor: pointer;
}

</style>