<template>
  <!--      top nav -->
  <div id="topMeu" class="w-100 pt-4 pb-4  d-flex justify-content-center"
       style="position: fixed; z-index: 100; background-color: white !important ;">
    <div class="btn-group  " style="">
      <a class="btn btn-lg btn-danger p-3" style="border-radius:  0 80px  80px 0"><i
          class="bi bi-caret-right-fill"></i></a>
      <!--                             <router-link  to="/login" class="btn btn-lg btn-danger p-3">ورود</router-link>-->
      <!--          <router-link to="/orders" class="btn btn-lg btn-danger p-3"><i class="bi bi-three-dots-vertical"></i></router-link>-->
      <router-link to="/foods" class="btn btn-lg btn-danger p-3"><i class="bi bi-house-fill"></i></router-link>
      <router-link to="/foods" class="btn btn-lg btn-danger p-3"><i class="bi bi-grid-fill"></i></router-link>
      <router-link to="/orders" class="btn btn-lg btn-danger p-3"><i class="bi bi-person-fill"></i></router-link>
      <router-link to="/login" class="btn btn-lg btn-danger p-3"><i class="bi bi-shield-lock-fill"></i>
      </router-link>
      <a class="d-xl-none btn btn-lg btn-danger p-3" type="button" data-bs-toggle="offcanvas"
         data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="bi bi-basket2-fill"></i></a>
      <a class="btn btn-lg btn-danger p-3" style="border-radius: 80px  0 0 80px"><i
          class="bi bi-caret-left-fill"></i></a>
    </div>
  </div>
  <!--      offCanvas-->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <button type="button" class=" btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <h5 class="offcanvas-title" id="offcanvasExampleLabel"> </h5>
    </div>
    <div class="offcanvas-body">

      <!--        factor-->
      <div id="factor1" class="">
        <div class="card" style="min-height :167px;  margin-top: 0px;">
          <div class="card-body px-2 py-3">
            <div>
              <span class="float-start h4 ">سبد خرید</span>
              <span class="float-end h4 " style="cursor: pointer"><i class="bi bi-trash-fill"></i></span>
            </div>
            <hr class="mt-5">

            <div style="height: 200px; overflow-y: scroll">
              <table class="table m-0" style="border-radius: 20px">
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
                </tbody>
              </table>

            </div>
            <!--             <div style="position: absolute; bottom: 10px; right: 5px; width: 97%">-->

            <div class="row">
              <p class="fw-bold  mb-1 col-6">تخفیف</p>
              <p class="fw-bold mb-1 col-6">0</p>

              <p class="fw-bold  col-6">جمع کل</p>
              <p class="fw-bold  col-6">460,000</p>
            </div>
            <a class="btn btn-block w-100 btn-danger">ثبت نهایی</a>
            <!--                </div>-->

          </div>
        </div>

        <img style="position: fixed;  width: 350px; bottom: 0px" src="../assets/chef1.png" alt="">

      </div>
      <!--        factor-->


    </div>
  </div>
  <!--      offCanvas-->
  <!--      top nav -->
  <main style="overflow-x: hidden ;  padding-top: 112px " class="">
    <div id="foods container-fluid px-0 mx-0">

      <div class="d-flex justify-content-center ">


        <!--      side nav -->
        <div id="sideNav" class="col-3 col-md-2 d-flex justify-content-start" style="">
          <nav class="" style="position: fixed">
            <div class="btn-group-vertical">
              <a     @click="scrollPage('pizza')" class="btn btn-danger          px-2 px-sm-3 pt-4 " style="border-radius: 80px 80px 0 0" aria-current="page">پیتــــزا</a>
              <a    @click="scrollPage('burger')" class="btn btn-lg btn-danger   px-2 px-sm-3">برگـــر</a>
              <a  @click="scrollPage('sandwich')" class="btn btn-lg btn-danger   px-2 px-sm-3">ساندویچ</a>
              <a     @click="scrollPage('pasta')" class="btn btn-lg btn-danger   px-2 px-sm-3">پاســتا</a>
              <a      @click="scrollPage('side')" class="btn btn-lg btn-danger   px-2 px-sm-3">پیش غذا</a>
              <a     @click="scrollPage('salad')" class="btn btn-lg btn-danger   px-2 px-sm-3">ســالاد</a>
              <a     @click="scrollPage('drink')" class="btn btn-lg btn-danger   px-2 px-sm-3">نوشیدنی</a>
              <a     @click="scrollPage('other')" class="btn btn-lg btn-danger   px-2 px-sm-3 pb-4" style="border-radius: 0 0 80px 80px">ســایر</a>
            </div>
          </nav>
        </div>
        <!--      side nav -->


        <div id="content" class="col-9 col-md-10 row " style="">

          <!--          cards-->
          <div class="col-12 col-xl-8 px-md-3">
            <div id="pizza" style="scroll-margin-top: 112px" class="row">
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="1"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="2"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="10"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="11"/>
              </div>
            </div>
            <div id="burger" style="scroll-margin-top: 112px" class="row  ">

              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="11"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="3"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="4"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="5"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="6"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="7"/>
              </div>
            </div>
            <div id="sandwich" style="scroll-margin-top: 112px" class="row  ">

              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="12"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="13"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="14"/>
              </div>
            </div>
            <div id="pasta" style="scroll-margin-top: 112px" class="row  ">

              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="15"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="16"/>
              </div>
            </div>
            <div id="side" style="scroll-margin-top: 112px" class="row  ">


              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="17"/>
              </div>
            </div>
            <div id="salad" style="scroll-margin-top: 112px" class="row  ">

              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="18"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="19"/>
              </div>
            </div>
            <div id="drink" style="scroll-margin-top: 112px" class="row  ">

              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="20"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="21"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="22"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="23"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="24"/>
              </div>
            </div>
            <div id="other" style="scroll-margin-top: 112px" class="row  ">

              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="25"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="26"/>
              </div>
              <div class="col-12 col-md-6 col-lg-4  col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <food-card index="27"/>
              </div>
            </div>

          </div>
          <!--          cards-->
          <!--        factor-->
          <div id="factor" class="d-none d-xl-block row col-4 px-2 mb-3">
            <div class="card mx-2" style="width: 20%; position: fixed; min-height: 176px">
              <div class="card-body px-2 py-3">
                <div>
                  <span class="float-start h4 ">سبد خرید</span>
                  <span class="float-end h4 " style="cursor: pointer"><i class="bi bi-trash-fill"></i></span>
                </div>
                <hr class="mt-5">

                <div style="height: 200px; overflow-y: scroll">
                  <table class="table m-0" style="border-radius: 20px">
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
                    </tbody>
                  </table>

                </div>
                <!--             <div style="position: absolute; bottom: 10px; right: 5px; width: 97%">-->

                <div class="row">
                  <p class="fw-bold  mb-1 col-6">تخفیف</p>
                  <p class="fw-bold mb-1 col-6">0</p>

                  <p class="fw-bold  col-6">جمع کل</p>
                  <p class="fw-bold  col-6">460,000</p>
                </div>
                <a class="btn btn-block w-100 btn-danger">ثبت نهایی</a>
                <!--                </div>-->

              </div>
            </div>

            <img style="position: fixed;  width: 350px; bottom: 0px" src="../assets/chef1.png" alt="">

          </div>
          <!--        factor-->

        </div>

      </div>
    </div>
  </main>
</template>

<script>
import FoodCard from "@/components/FoodCard";
// import Menu from "@/components/TheMenu";

export default {
  name: "Foods",
  components: {FoodCard},
  setup() {
    const scrollPage = (id)=>{
      let element = document.querySelector('#'+id);
      console.log(element.top)
      document.querySelector('main').scrollTo(element);

      // element.scrollMarginTop = document.querySelector('#topMeu').height;
      document.querySelector('#' + id).scrollIntoView();
    }
    return {
      scrollPage
    }
  }
}
</script>

<style scoped>
#sideNav {
  /*margin-top: 5px;*/
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

/*.table>:not(caption)>*>* {*/
/*  border-bottom-width: 0px;*/
/*}*/

</style>