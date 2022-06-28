<template>
  <main style="overflow-x: hidden">
    <div id="foods container-fluid px-0 mx-0">
      <!--      top nav -->
      <div class="w-100 mt-5 d-flex justify-content-center">
        <div class="btn-group  " style="position: fixed; z-index: 100">
          <a class="btn btn-lg btn-danger p-3" style="border-radius:  0 80px  80px 0"><i
              class="bi bi-caret-right-fill"></i></a>
          <!--                             <router-link  to="/login" class="btn btn-lg btn-danger p-3">ورود</router-link>-->
          <router-link to="/orders" class="btn btn-lg btn-danger p-3">پروفایل</router-link>
          <router-link to="/login" class="btn btn-lg btn-danger p-3">خروج</router-link>
          <a class="btn btn-lg btn-danger p-3" style="border-radius: 80px  0 0 80px"><i
              class="bi bi-caret-left-fill"></i></a>
        </div>
      </div>
      <!--      top nav -->
      <div class="d-flex justify-content-center mt-5">


        <!--      side nav -->
        <div id="sideNav" class="col-3 col-md-2 d-flex justify-content-center" style="margin-top: 120px">
          <nav class="" style="position: fixed">
            <div class="btn-group-vertical">
              <a href="#pizza" class="btn btn-danger px-4 pt-4 " style="border-radius: 80px 80px 0 0"
                 aria-current="page">پیتزا</a>
              <a href="#burger" class="btn btn-lg btn-danger px-4">برگر</a>
              <a href="#sandwich" class="btn btn-lg btn-danger px-4">ساندویچ</a>
              <a href="#pasta" class="btn btn-lg btn-danger px-4">پاستا</a>
              <a href="#side" class="btn btn-lg btn-danger px-4">پیش غذا</a>
              <a href="#salad" class="btn btn-lg btn-danger px-4">سالاد</a>
              <a href="#drink" class="btn btn-lg btn-danger px-4">نوشیدنی</a>
              <a href="#other" class="btn btn-lg btn-danger px-4 pb-4" style="border-radius: 0 0 80px 80px">سایر</a>
            </div>
          </nav>
        </div>
        <!--      side nav -->


        <div id="content" class="col-9 col-md-10 row " style="">


          <!--          cards-->
          <div class="col-10 col-md-6 col-lg-6 col-xl-8 col-xxl-9 px-2">
            <div id="pizza"    style="padding-top: 120px" class="row  ">
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
            </div>
            <div id="burger"   style="padding-top: 120px" class="row  ">
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
            </div>
            <div id="sandwich" style="padding-top: 120px" class="row  ">
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
            </div>
            <div id="pasta"    style="padding-top: 120px" class="row  ">
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
            </div>
            <div id="side"     style="padding-top: 120px" class="row  ">
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
            </div>
            <div id="salad"    style="padding-top: 120px" class="row  ">
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
            </div>
            <div id="drink"    style="padding-top: 120px" class="row  ">
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
            </div>
            <div id="other"    style="padding-top: 120px" class="row  ">
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
              <div class="col-12 col-xl-6  col-xxl-4 mb-3">
                <food-card/>
              </div>
            </div>

          </div>
          <!--          cards-->
          <!--        factor-->
          <div id="factor" class="col-10 col-md-6 col-lg-6 col-xl-4 col-xxl-3 mb-3 mt-3  ">
            <div class="card" style="min-height :167px; border-radius: 20px ; margin-top: 100px;">
              <div class="card-body px-2 py-3">
                <table class="table table-borderless m-0" style="border-radius: 20px">
                  <thead class="">
                  <th>عنوان</th>
                  <th>تعداد</th>
                  <th>قیمت</th>
                  </thead>
                  <tbody class=" ">
                  <tr>
                    <td>پیتزا ایتالیایی بزرگ</td>
                    <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>1<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                    <td>198,000</td>
                  </tr>
                  <tr>
                    <td>برگر ذغالی</td>
                    <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>2<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                    <td>220,000</td>
                  </tr>
                  <tr>
                    <td>پپسی</td>
                    <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>3<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                    <td>42,000</td>
                  </tr>
                  <tr class="">
                    <th colspan="2" class="">تخفیف</th>
                    <td colspan="1" class="">0</td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                  </tr>

                  <tr>
                    <td colspan="3"></td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                  </tr>
                  <tr class="m-0">
                    <th colspan="1" class="">جمع کل</th>
                    <td colspan="1" class="">460,000</td>
                    <td colspan="1" class="">
                      <button class="btn btn-sm btn-danger">پرداخت</button>
                    </td>
                  </tr>
                  </tbody>
                </table>


              </div>
            </div>
          </div>
          <!--        factor-->

        </div>

      </div>
    </div>
  </main>
</template>

<script>
import FoodCard from "@/components/FoodCard";

export default {
  name: "Foods",
  components: {FoodCard}
}
</script>

<style scoped>
#sideNav{
  width: 140px;
}
#content{
  width: calc(100% - 140px);
}
.card {
  box-shadow: 0 1px 1px dimgray;
  border: none;
}

table {
  overflow: hidden;

}
/*@media(min-width: 770px){*/
/*  #factor{*/
/*    position: sticky !important;*/
/*    top: 100px;*/
/*    left: 0px;*/
/*  }*/
/*}*/
</style>