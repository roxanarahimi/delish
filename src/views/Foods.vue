<template>
  <main style="overflow-x: hidden">
    <div id="foods container-fluid px-0 mx-0">
      <!--      top nav -->
      <div class="w-100 mt-4 d-flex justify-content-center">
        <div class="btn-group  " style="position: fixed; z-index: 100">
          <a class="btn btn-lg btn-danger p-3" style="border-radius:  0 80px  80px 0"><i
              class="bi bi-caret-right-fill"></i></a>
          <!--                             <router-link  to="/login" class="btn btn-lg btn-danger p-3">ورود</router-link>-->
<!--          <router-link to="/orders" class="btn btn-lg btn-danger p-3"><i class="bi bi-three-dots-vertical"></i></router-link>-->
          <router-link to="/foods" class="btn btn-lg btn-danger p-3"><i class="bi bi-grid-fill"></i></router-link>
          <router-link to="/orders" class="btn btn-lg btn-danger p-3"><i class="bi bi-person-fill"></i></router-link>
          <router-link to="/login" class="btn btn-lg btn-danger p-3"><i class="bi bi-shield-lock-fill"></i></router-link>
          <a  class="d-xl-none btn btn-lg btn-danger p-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="bi bi-basket2-fill"></i></a>
          <a class="btn btn-lg btn-danger p-3" style="border-radius: 80px  0 0 80px"><i
              class="bi bi-caret-left-fill"></i></a>
        </div>
      </div>
<!--      offCanvas-->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <button type="button" class=" btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">سبد خرید</h5>
        </div>
        <div class="offcanvas-body">

          <!--        factor-->
          <div id="factor1" class="d-xl-none  ">
            <div class="card" style="min-height :167px;  margin-top: 85px;">
              <div class="card-body px-2 py-3">
                <table class="table  m-0" style="border-radius: 20px">
                  <!--                  <thead class="">-->
                  <!--                  <th>عنوان</th>-->
                  <!--                  <th style="width: 80px">تعداد</th>-->
                  <!--                  </thead>-->
                  <tbody class=" ">
                  <tr>
                    <td>
                      <p class="fw-bold mb-1">پیتزا ایتالیایی بزرگ</p>
                      <p class="text-muted  mb-1">198,000</p>
                    </td>
                    <td style="width: 80px"><i class="bi bi-plus-circle-fill me-2 text-danger"></i>1<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                  </tr>
                  <tr>
                    <td>
                      <p class="fw-bold mb-1">برگر ذغالی</p>
                      <p class="text-muted mb-1">220,000</p>
                    </td>
                    <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>2<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                  </tr>
                  <tr>
                    <td>
                      <p class="fw-bold mb-1">پپسی</p>
                      <p class="text-muted mb-1">42,000</p>
                    </td>
                    <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>3<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                  </tr>
                  <tr class="border-none">
                    <th  class="border-none">
                      <p class="fw-bold  mb-1">تخفیف</p>
                      <p class="fw-bold mb-1">جمع کل</p>

                    </th>
                    <td class="border-none">
                      <p class="fw-bold mb-1">0</p>
                      <p class="fw-bold mb-1">460,000</p>

                    </td>

                  </tr>
                  </tbody>
                </table>
                <div>
                  <button class="btn btn-block  w-100 btn-danger">ثبت نهایی</button>

                </div>

              </div>
            </div>
          </div>
          <!--        factor-->


        </div>
      </div>
<!--      offCanvas-->
      <!--      top nav -->
      <div class="d-flex justify-content-center mt-5">


        <!--      side nav -->
        <div id="sideNav" class="col-3 col-md-2 d-flex justify-content-start" style="">
          <nav class="" style="position: fixed">
            <div class="btn-group-vertical">
              <a href="#pizza" class="btn btn-danger px-3 pt-4 " style="border-radius: 80px 80px 0 0"
                 aria-current="page">پیتزا</a>
              <a href="#burger" class="btn btn-lg btn-danger px-3">برگر</a>
              <a href="#sandwich" class="btn btn-lg btn-danger px-3">ساندویچ</a>
              <a href="#pasta" class="btn btn-lg btn-danger px-3">پاستا</a>
              <a href="#side" class="btn btn-lg btn-danger px-3">پیش غذا</a>
              <a href="#salad" class="btn btn-lg btn-danger px-3">سالاد</a>
              <a href="#drink" class="btn btn-lg btn-danger px-3">نوشیدنی</a>
              <a href="#other" class="btn btn-lg btn-danger px-3 pb-4" style="border-radius: 0 0 80px 80px">سایر</a>
            </div>
          </nav>
        </div>
        <!--      side nav -->


        <div id="content" class="col-9 col-md-10 row " style="">

          <!--          cards-->
          <div class="col-12 col-xl-8 px-md-3">
            <div id="pizza" style="padding-top: 85px" class="row  ">
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="1"/>

                </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card  index="2" />
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card  index="10" />
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card  index="10" />
              </div>
            </div>
            <div id="burger" style="padding-top: 85px" class="row  ">
              <div class="col-12 col-md-6 col-lg-4  col-xxl-3 mb-3">
                <food-card index="3"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-3 mb-3">
                <food-card index="3"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-3 mb-3">
                <food-card index="4"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-3 mb-3">
                <food-card index="5"/>
              </div>
            </div>
            <div id="sandwich" style="padding-top: 120px" class="row  ">
              <div class="col-12 col-md-6 col-lg-4  col-xxl-3 mb-3">
                <food-card index="6"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-3 mb-3">
                <food-card index="7"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-3 mb-3">
                <food-card index="8"/>
              </div>
            </div>
            <div id="pasta" style="padding-top: 120px" class="row  ">

            </div>
            <div id="side" style="padding-top: 120px" class="row  ">

            </div>
            <div id="salad" style="padding-top: 120px" class="row  ">

            </div>
            <div id="drink" style="padding-top: 120px" class="row  ">

            </div>
            <div id="other" style="padding-top: 120px" class="row  ">

            </div>

          </div>
          <!--          cards-->
          <!--        factor-->
          <div id="factor" class="d-none d-xl-block col-4 px-2 mb-3 ">
            <div class="card" style="min-height :167px;  margin-top: 85px;">
              <div class="card-body px-2 py-3">
                <table class="table  m-0" style="border-radius: 20px">
<!--                  <thead class="">-->
<!--                  <th>عنوان</th>-->
<!--                  <th style="width: 80px">تعداد</th>-->
<!--                  </thead>-->
                  <tbody class=" ">
                  <tr>
                    <td>
                      <p class="fw-bold mb-1">پیتزا ایتالیایی بزرگ</p>
                      <p class="text-muted  mb-1">198,000</p>
                    </td>
                    <td style="width: 80px"><i class="bi bi-plus-circle-fill me-2 text-danger"></i>1<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                  </tr>
                  <tr>
                    <td>
                      <p class="fw-bold mb-1">برگر ذغالی</p>
                      <p class="text-muted mb-1">220,000</p>
                    </td>
                    <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>2<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                  </tr>
                  <tr>
                    <td>
                      <p class="fw-bold mb-1">پپسی</p>
                      <p class="text-muted mb-1">42,000</p>
                    </td>
                    <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>3<i
                        class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                  </tr>
                  <tr class="border-none">
                    <th  class="border-none">
                      <p class="fw-bold  mb-1">تخفیف</p>
                      <p class="fw-bold mb-1">جمع کل</p>

                    </th>
                    <td class="border-none">
                      <p class="fw-bold mb-1">0</p>
                      <p class="fw-bold mb-1">460,000</p>

                    </td>

                  </tr>
                  </tbody>
                </table>
<div>
  <button class="btn btn-block  w-100 btn-danger">ثبت نهایی</button>

</div>

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
import Menu from "@/components/TheMenu";

export default {
  name: "Foods",
  components: {FoodCard},
  setup(){
    return{
    }
  }
}
</script>

<style scoped>
#sideNav {
  margin-top: 85px;
  width: 110px;
}

#content {
  width: calc(100% - 110px);
}

.card {
  /*box-shadow: 0 1px 1px dimgray;*/
  /*border: none;*/
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