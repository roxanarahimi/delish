<template>

    <div class="card food-card m-0 ">
      <div>
        <img class="img-fluid m-1" :src="'./img/foods/'+ data.image" alt="">
        <h4 v-if="data.off" style="position: absolute; top: 5px; left:5px"><span class="badge bg-danger">{{data.off}}%</span>
        </h4>
        <div class="px-3 pt-5" id="info-wrapper" style="">
          <div id="info" class="mt-3">
            {{ data.parts }}
          </div>
        </div>
      </div>


      <div class="card-body py-1 px-3">
        <p class="d-inline mb-1 float-start fw-bold mb-0">{{ data.title }}</p>
        <p class="d-inline-block mb-1 float-end">{{ data.price * (1 - data.off / 100) }}</p>

        <p v-if="data.off" class="d-block w-100 text-end mb-1 float-end py-1 text-muted"
           style="text-decoration: line-through;">{{ data.price }}</p>
        <div v-else class="d-block w-100 text-end mb-1 float-end text-muted"
             style="text-decoration: line-through; height: 32px"></div>

      </div>
      <div class="m-2">
        <div class="input-group mt-2 px-0 " style="width: 100px;">

          <i :id="'increase_'+data.id" @click="increaseQ" class="bi bi-plus-circle-fill me-1 text-danger"
             style="font-size: 20px"></i>
          <input :id="'quantity_'+data.id" type="text" class="form-control p-0 form-control-sm text-center" required
                 value="">
          <i :id="'decrease_'+data.id" @click="decreaseQ" v-if="decreaseBtn" class="bi bi-dash-circle-fill ms-1 text-danger"
             style="font-size: 20px"></i>

        </div>

      </div>
    </div>

</template>

<script>
import {onMounted, ref} from "vue";

export default {
  name: "FoodCard",
  props: ['food'],
  async setup(props) {
    const data = ref({});
    const decreaseBtn = ref(false);
    const increaseQ = () => {

      if (document.querySelector('#quantity_' + props.food.id).value === '') {
        document.querySelector('#quantity_' + props.food.id).value = 1;
        decreaseBtn.value = true;
      } else {
        document.querySelector('#quantity_' + props.food.id).value = parseInt(document.querySelector('#quantity_' + props.food.id).value) + 1;

      }
    }
    const decreaseQ = () => {
      if (document.querySelector('#quantity_' + props.food.id).value > 0) {
        document.querySelector('#quantity_' + props.food.id).value = parseInt(document.querySelector('#quantity_' + props.food.id).value) - 1;
        if (parseInt(document.querySelector('#quantity_' + props.food.id).value) === 0) {
          document.querySelector('#quantity_' + props.food.id).value = '';
          decreaseBtn.value = false;
        }
      }

    }
    onMounted(()=>{
      data.value = props.food;
    })


    return {
      data,
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
  /*box-shadow: 0 1px 1px lightgrey;*/
  /*border: none;*/
  /*border-radius: 46% 46% 20px 210px;*/
}

.card img {
  /*border-radius: 250px 250px 0 0px;*/
  margin: -2px 0px 0 0;
  width: 95%;


}

.input-group > .form-control, .input-group > .form-select {
  position: relative;
  flex: 0 1 !important;
  min-width: 20px !important;
  border: none;
  background: none;
}

.bi {
  cursor: pointer;
}

#info-wrapper {
  color: white;
  background: rgba(0, 0, 0, 0.3);
  color: black;
  background: rgba(255, 255, 255, 0.7);

  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 75%;
  opacity: 0;
  transition: 500ms ease;
  cursor: pointer;
}

#info-wrapper:hover {
  opacity: 1;
}
</style>