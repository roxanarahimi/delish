<template>
  <!--      top nav -->
  <div id="topMeu" class="w-100 pt-4 pb-4  d-flex justify-content-center"
       style="position: fixed; z-index: 100; background-color: white !important ;">
    <div class="btn-group  " style="">
      <a class="btn btn-lg btn-danger p-3" style="border-radius:  0 80px  80px 0"><i
          class="bi bi-caret-right-fill"></i></a>
      <!--                             <router-link  to="/login" class="btn btn-lg btn-danger p-3">ورود</router-link>-->
      <!--          <router-link to="/orders" class="btn btn-lg btn-danger p-3"><i class="bi bi-three-dots-vertical"></i></router-link>-->
      <router-link to="/" class="btn btn-lg btn-danger p-3"><i class="bi bi-house-fill"></i></router-link>
      <router-link to="/foods" class="btn btn-lg btn-danger p-3"><i class="bi bi-grid-fill"></i></router-link>
      <router-link to="/profile" class="btn btn-lg btn-danger p-3"><i class="bi bi-person-fill"></i></router-link>
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
      <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
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
                    <p class="fw-bold mb-1">پیتزا اسپشیال</p>
                    <p class="text-muted  mb-1">530,000</p>
                  </td>
                  <td style="width: 80px"><i class="bi bi-plus-circle-fill me-2 text-danger"></i>1<i
                      class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-bold mb-1">اسموکی برگر</p>
                    <p class="text-muted mb-1">315,000</p>
                  </td>
                  <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>2<i
                      class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-bold mb-1">پپسی لیوانی</p>
                    <p class="text-muted mb-1">65,000</p>
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
              <p class="fw-bold  col-6">1,040,000</p>
            </div>
            <router-link to="/confirm" class="btn btn-block w-100 btn-danger">ثبت نهایی</router-link>
            <!--                </div>-->

          </div>
        </div>

        <img style="position: fixed;  width: 230px; bottom: 0; left:0" src="../assets/chef1.png" alt="">

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
              <a @click="scrollPage('pizza')" class="btn btn-danger          px-2 px-sm-3 pt-4 "
                 style="border-radius: 80px 80px 0 0" aria-current="page">پیتــــزا</a>
              <a @click="scrollPage('burger')" class="btn btn-lg btn-danger   px-2 px-sm-3">برگـــر</a>
              <a @click="scrollPage('sandwich')" class="btn btn-lg btn-danger   px-2 px-sm-3">ساندویچ</a>
              <a @click="scrollPage('pasta')" class="btn btn-lg btn-danger   px-2 px-sm-3">پاســتا</a>
              <a @click="scrollPage('side')" class="btn btn-lg btn-danger   px-2 px-sm-3">پیش غذا</a>
              <a @click="scrollPage('salad')" class="btn btn-lg btn-danger   px-2 px-sm-3">ســالاد</a>
              <a @click="scrollPage('drink')" class="btn btn-lg btn-danger   px-2 px-sm-3">نوشیدنی</a>
              <a @click="scrollPage('other')" class="btn btn-lg btn-danger   px-2 px-sm-3 pb-4"
                 style="border-radius: 0 0 80px 80px">ســایر</a>
            </div>
          </nav>
        </div>
        <!--      side nav -->


        <div id="content" class="col-9 col-md-10 row " style="">

          <!--          cards-->
          <div v-if="foods && foods['pizza']" class="col-12 col-xl-8 px-md-3">
            <div id="pizza" style="scroll-margin-top: 112px" class="row">
              <div v-for="data in foods['pizza']" :key="data.id"  class="col-12 col-md-6 col-lg-4 col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <suspense>

                  <template #default>
                    <food-card :food="data"/>
                  </template>
                  <template #fallback>
                      <food-card-skeleton />
                  </template>
                </suspense>
              </div>
            </div>
            <div id="burger" style="scroll-margin-top: 112px" class="row  ">
              <div v-for="data in foods['burger']" :key="data.id"
                   class="col-12 col-md-6 col-lg-4 col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <suspense>
                  <food-card :food="data"/>
                  <template #fallback>
                    <food-card-skeleton />
                  </template>
                </suspense>
              </div>
            </div>
            <div id="sandwich" style="scroll-margin-top: 112px" class="row  ">
              <div v-for="data in foods['sandwich']" :key="data.id"
                   class="col-12 col-md-6 col-lg-4 col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <suspense>
                  <food-card :food="data"/>
                  <template #fallback>
                    <food-card-skeleton />
                  </template>
                </suspense>
              </div>
            </div>
            <div id="pasta" style="scroll-margin-top: 112px" class="row  ">
              <div v-for="data in foods['pasta']" :key="data.id"
                   class="col-12 col-md-6 col-lg-4 col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <suspense>
                  <food-card :food="data"/>
                  <template #fallback>
                    <food-card-skeleton />
                  </template>
                </suspense>
              </div>
            </div>
            <div id="side" style="scroll-margin-top: 112px" class="row  ">
              <div v-for="data in foods['side']" :key="data.id"
                   class="col-12 col-md-6 col-lg-4 col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <suspense>
                  <food-card :food="data"/>
                  <template #fallback>
                    <food-card-skeleton />
                  </template>
                </suspense>
              </div>
            </div>
            <div id="salad" style="scroll-margin-top: 112px" class="row  ">
              <div v-for="data in foods['salad']" :key="data.id"
                   class="col-12 col-md-6 col-lg-4 col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <suspense>
                  <food-card :food="data"/>
                  <template #fallback>
                    <food-card-skeleton />
                  </template>
                </suspense>
              </div>
            </div>
            <div id="drink" style="scroll-margin-top: 112px" class="row  ">
              <div v-for="data in foods['drink']" :key="data.id"
                   class="col-12 col-md-6 col-lg-4 col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <suspense>
                  <food-card :food="data"/>
                  <template #fallback>
                    <food-card-skeleton />
                  </template>
                </suspense>
              </div>
            </div>
            <div id="other" style="scroll-margin-top: 112px" class="row  ">
              <div v-for="data in foods['other']" :key="data.id"
                   class="col-12 col-md-6 col-lg-4 col-xxl-4 px-3 pe-md-0 ps-md-2 mb-2">
                <suspense>
                  <food-card :food="data"/>
                  <template #fallback>
                    <food-card-skeleton />
                  </template>
                </suspense>
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
                        <p class="fw-bold mb-1">پیتزا اسپشیال</p>
                        <p class="text-muted  mb-1">530,000</p>
                      </td>
                      <td style="width: 80px"><i class="bi bi-plus-circle-fill me-2 text-danger"></i>1<i
                          class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <p class="fw-bold mb-1">اسموکی برگر</p>
                        <p class="text-muted mb-1">315,000</p>
                      </td>
                      <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>2<i
                          class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <p class="fw-bold mb-1">پپسی لیوانی</p>
                        <p class="text-muted mb-1">65,000</p>
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
                  <p class="fw-bold  col-6">1,040,000</p>
                </div>
                <router-link to="/confirm" class="btn btn-block w-100 btn-danger">ثبت نهایی</router-link>
                <!--                </div>-->

              </div>
            </div>

            <img style="position: fixed;  width: 230px; bottom: 0; left:0" src="../assets/chef1.png" alt="">

          </div>
          <!--        factor-->

        </div>

      </div>
    </div>
  </main>
</template>

<script>
import FoodCard from "@/components/FoodCard";
import {onMounted, ref} from "vue";
// import Menu from "@/components/TheMenu";
import foodCardSkeleton from "@/components/FoodCardSkeleton";
export default {
  name: "Foods",
  components: {FoodCard, foodCardSkeleton},
  setup() {
    const scrollPage = (id) => {
      let element = document.querySelector('#' + id);
      document.querySelector('main').scrollTo(element);
      document.querySelector('#' + id).scrollIntoView();
    }
    const foods = ref();
    const info = [
      {id:1,title:"چیزبرگر",type:"burger",image:"5.jpg",parts:"گوشت چرخ شده، پنیر، کاهو، گوجه، خیارشور",price:475000,off:2},
      {id:2,title:"ماشروم برگر",type:"burger",image:"7.jpg",parts:"گوشت چرخ شده، پنیر، کاهو، گوجه، خیارشور",price:3250000,off:5},
      {id:3,title:"اسموکی برگر",type:"burger",image:"8.jpg",parts:"گوشت چرخ شده، پنیر، کاهو، گوجه، خیارشور",price:315000,off:0},
      {id:4,title:"برگر با سس پنیر",type:"burger",image:"6.jpg",parts:"گوشت چرخ شده، پنیر، کاهو، گوجه، خیارشور",price:310000,off:3},
      {id:5,title:"پیتزا اسپشیال",type:"pizza",image:"3.jpg",parts:"سوسیس، کالباس، قارچ، فلفل، ذرت، پنیر گودا، پنیر پیتزا، سس مخصوص",price:530000,off:0},
      {id:6,title:"پیتزا استیک",type:"pizza",image:"2.jpg",parts:"سوسیس، کالباس، قارچ، فلفل، ذرت، پنیر گودا، پنیر پیتزا، سس مخصوص",price:450000,off:0},
      {id:7,title:"پیتزا قارچ و مرغ",type:"pizza",image:"1.jpg",parts:"سوسیس، کالباس، قارچ، فلفل، ذرت، پنیر گودا، پنیر پیتزا، سس مخصوص",price:345000,off:3},
      {id:8,title:"پیتزا سبزیجات",type:"pizza",image:"4.jpg",parts:"سوسیس، کالباس، قارچ، فلفل، ذرت، پنیر گودا، پنیر پیتزا، سس مخصوص",price:345000,off:10},
      {id:9,title:"پپسی لیوانی",type:"drink",image:"delish.png",parts:null,price:65000,off:0},
      {id:10,title:"نوشابه خانواده",type:"drink",image:"delish.png",parts:null,price:49000,off:0},
      {id:11,title:"نوشابه قوطی",type:"drink",image:"delish.png",parts:null,price:30000,off:0},
      {id:12,title:"دلستر",type:"drink",image:"delish.png",parts:null,price:30000,off:0},
      {id:13,title:"سس پنیر",type:"other",image:"delish.png",parts:null,price:15000,off:0},
      {id:14,title:"سس قارچ",type:"other",image:"delish.png",parts:null,price:15000,off:0},
      {id:15,title:"سس کنجد",type:"other",image:"delish.png",parts:null,price:15000,off:0},
      {id:16,title:"نان یک نفره",type:"other",image:"delish.png",parts:null,price:12000,off:0},
      {id:18,title:"پاستا چیکن آلفردو",type:"pasta",image:"delish.png",parts:"پنه، سس الفردو، مرغ گریل، قارچ، خامه",price:395000,off:0},
      {id:19,title:"پاستا بیف آلفردو",type:"pasta",image:"delish.png",parts:"پنه، سس الفردو، مرغ گریل، قارچ، خامه",price:395000,off:0},
      {id:20,title:"سالاد سزار با  مرغ گریل",type:"salad",image:"delish.png",parts:"کاهو سس سزار مرغ",price:268000,off:0},
      {id:21,title:"سالاد سزار با مرغ سوخاری",type:"salad",image:"delish.png",parts:"کاهو سس سزار مرغ",price:268000,off:0},
      {id:22,title:"هات داگ ویژه",type:"sandwich",image:"delish.png",parts:"هات داگ، قارچ، پنیر، کاهو، گوجه، خیارشور",price:320000,off:0},
      {id:23,title:"هات رویال",type:"sandwich",image:"delish.png",parts:"هات داگ، قارچ، پنیر، کاهو، گوجه، خیارشور",price:325000,off:0},
      {id:24,title:"ژامبون تنوری",type:"sandwich",image:"delish.png",parts:"هات داگ، قارچ، پنیر، کاهو، گوجه، خیارشور",price:310000,off:0},
      {id:25,title:"سیب زمینی ساده",type:"side",image:"delish.png",parts:"سیب زمینی سزخ شده ادویه مخصوص",price:195000,off:0},
      {id:26,title:"سیب زمینی با سس پنیر",type:"side",image:"delish.png",parts:"سیب زمینی سزخ شده ادویه مخصوص",price:230000,off:0},
      {id:27,title:"سالاد فصل",type:"salad",image:"delish.png",parts:"کاهو سس سزار مرغ",price:145000,off:0}
        ];
    onMounted(()=>{
      foods.value = Object.groupBy(info, ({ type }) => type);
      console.log(foods.value)
    })
    return {
      scrollPage, foods, info
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