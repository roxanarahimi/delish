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
        <i class="bi bi-plus-circle-fill me-2 text-danger" style="font-size: 25px"></i>
        <input type="text" class="form-control form-control-sm text-center" required value="">
        <i class="bi bi-dash-circle-fill ms-2 text-danger d-none" style="font-size: 25px"></i>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodCard"
}
</script>

<style scoped>
.card {
  /*background-color: rgba(240, 128, 128, 0.6);*/
  box-shadow: 0 1px 1px lightgrey;
  border: none;
  border-radius: 50% 50% 20px 210px;
}

.card img {
  border-radius:   250px 250px 0  0px;
  margin: -10px 0px 0 0;


}

/*@media (min-width: 1501px ) {*/
/*  .card img {*/

/*    margin: -40px 160px 0 0;*/
/*    width: 100px;*/
/*    height: 100px;*/
/*  }*/
/*}*/

/*@media (max-width: 1500px ) {*/
/*  .card img {*/

/*    margin: -40px 140px 0 0;*/
/*    width: 100px;*/
/*    height: 100px;*/
/*  }*/
/*}*/

/*@media (max-width: 1400px ) {*/
/*  .card img {*/

/*    margin: -40px 250px 0 0;*/
/*    width: 100px;*/
/*    height: 100px;*/
/*  }*/
/*}*/

/*@media (max-width: 1300px ) {*/
/*  .card img {*/

/*    margin: -40px 220px 0 0;*/
/*    width: 100px;*/
/*    height: 100px;*/
/*  }*/
/*}*/

/*@media (max-width: 1200px ) {*/
/*  .card img {*/

/*    margin: -40px 360px 0 0;*/
/*    width: 100px;*/
/*    height: 100px;*/
/*  }*/
/*}*/

/*@media (max-width: 1024px ) {*/
/*  .card img {*/

/*    margin: -40px 240px 0 0;*/
/*    width: 130px;*/
/*    height: 130px;*/
/*  }*/
/*}*/

/*@media (max-width: 900px ) {*/
/*  .card img {*/
/*    margin: -40px 190px 0 0;*/
/*    width: 150px;*/
/*    height: 150px;*/
/*  }*/
/*}*/
/*@media (max-width: 800px ) {*/
/*  .card img {*/
/*    margin: -40px 150px 0 0;*/
/*    width: 150px;*/
/*    height: 150px;*/
/*  }*/
/*}*/
/*@media (max-width: 726px ) {*/
/*  .card img {*/
/*    margin: -40px 150px 0 0;*/
/*    width: 150px;*/
/*    height: 150px;*/
/*  }*/
/*}*/

/*@media (max-width: 500px ) {*/
/*  .card img {*/
/*    margin: -40px 150px 0 0;*/
/*    width: 150px;*/
/*    height: 150px;*/
/*  }*/
/*}*/

/*@media (max-width: 450px ) {*/
/*  .card img {*/
/*    margin: -40px 110px 0 0;*/
/*    width: 130px;*/
/*    height: 130px;*/
/*  }*/
/*}*/

/*@media (max-width: 400px ) {*/
/*  .card img {*/
/*    margin: -40px 105px 0 0;*/
/*    width: 120px;*/
/*    height: 120px;*/
/*  }*/
/*}*/

input {
  border: none;
}
</style>