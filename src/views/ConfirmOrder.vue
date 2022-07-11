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
    <div id="container-fluid px-0 mx-0">
        <div id="" class="row px-3" style="">

          <!--          cards-->
          <div class="col-lg-6 ">
            <div class="map-container mx-auto mb-3">
              <div class="map-marker-centered"></div>
              <l-map id="map" class="mx-auto map" style="height: 280px; width: 100%"
                     @dragend="getCoords($event)" :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <!--        <l-marker :lat-lng="markerLatLng"></l-marker>-->
              </l-map>
            </div>
              <textarea rows="3" placeholder="نشانی..." class="form-control mb-3"></textarea >

              <button  class=" btn btn-danger float-end mb-3">
                ویرایش نشانی
              </button >
          </div>
          <!--          cards-->
          <!--        factor-->
          <div id="factor" class="col-lg-6 row px-2 mb-3">
            <div class="card mx-2 w-100 mb-3" style=" min-height: 200px">
              <div class="card-body px-2 py-3">
                <div>
                  <span class="float-start h4 ">سبد خرید</span>
                  <span class="float-end h4 " style="cursor: pointer"><i class="bi bi-trash-fill"></i></span>
                </div>
                <hr class="mt-5">

                <div  >
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
                <!--                </div>-->
                <div class="row justify-content-between">
                  <form id="login"  class=" px-0 col-6">

                    <div class="input-group mb-3 px-2">
                      <input type="text" class="form-control"  minlength="11" maxlength="11" required placeholder="کد تخفیف">
                      <button class="btn btn-danger" type="submit"  id="button-addon2">اعمال کد</button>

                    </div>
                    <small class="d-block error m-2"></small>

                  </form>
                  <div class="col-3 ">
                    <a class="btn btn-danger w-100 "> پرداخت </a>

                  </div>
                </div>
              </div>
            </div>

<!--            <img style="position: fixed;  width: 350px; bottom: 0px" src="../assets/chef1.png" alt="">-->


          </div>
          <!--        factor-->

        </div>
    </div>
  </main>
</template>

<script>
import FoodCard from "@/components/FoodCard";
import {onMounted, ref} from "vue";
// import Menu from "@/components/TheMenu";
import 'leaflet/dist/leaflet.css';
import {LMap, LTileLayer, LMarker, LGeoJson,} from "@vue-leaflet/vue-leaflet";

export default {
  name: 'ConfirmOrder',
  components: {
    LGeoJson,
    LMap,
    LTileLayer,
    LMarker,

  },
  data() {
    return {
      flag: 0,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
          '&copy; <a target="_blank" href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [35.7049839, 51.4751094],
      // markerLatLng: [35.705523, 51.473405],


    };
  },
  methods: {
    getCoords(e) {
      console.log(e.target.getCenter())
    }}

}
</script>

<style scoped>

.card {
  /*box-shadow: 0 1px 1px dimgray;*/
  /*border: none;*/
}


.map {
  height: 280px;
  z-index: 1;
  margin: 0 auto;

}

.map-container {
  position: relative;

}

.map-marker-centered {
  background-image: url("https://img.icons8.com/color/48/000000/marker--v1.png");
  width: 50px;
  height: 48px;
  position: absolute;
  z-index: 2;
  left: calc(50% - 25px);
  top: calc(50% - 22px);
  transition: all 0.4s ease;
}
</style>