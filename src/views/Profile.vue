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
            <router-link to="/confirm" class="btn btn-block w-100 btn-danger">ثبت نهایی</router-link>
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
    <div id=" container-fluid px-0 mx-0">



        <div class="row " style="margin-top: 50px">

          <div class="col-lg-6 mb-3">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="name" class="form-label">نام</label>
                    <input type="text" class="form-control" id="name" aria-describedby="nameHelp">
                    <div id="nameHelp" class="form-text"></div>
                  </div>
                  <div class="mb-3">
                    <label for="mobile" class="form-label">موبایل</label>
                    <input type="text" class="form-control" id="mobile">
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">آدرس</label>
                    <textarea class="form-control" id="address"></textarea>

                  </div>
                  <div class="w-100 mb-3 rounded " style="height: 200px">
                    <div class="map-container mx-auto mb-3">
                      <div class="map-marker-centered"></div>
                      <l-map id="map" class="mx-auto map" style="height: 280px; width: 100%"
                             @dragend="getCoords($event)" :zoom="zoom" :center="center">
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <!--        <l-marker :lat-lng="markerLatLng"></l-marker>-->
                      </l-map>
                    </div>

                  </div>
                  <button type="submit" class="btn btn-primary">ویرایش</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="card">
              <div class="card-body">
                <h5>تاریخچه سفارش ها</h5>

                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true" aria-controls="collapseOne">
                        1401-04-01
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                      <div class="accordion-body p-0">
                        <div class="card">
                          <div class="card-body p-0 ">
                            <table class="table table-borderless rounded m-0">
                              <thead class="bg-danger text-light">
                              <th>عنوان</th>
                              <th>فی</th>
                              <th>تعداد</th>
                              <th>قیمت</th>
                              </thead>
                              <tbody class=" ">
                              <tr>
                                <td>پیتزا ایتالیایی بزرگ</td>
                                <td>198,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>1<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>198,000</td>
                              </tr>
                              <tr>
                                <td>برگر ذغالی</td>
                                <td>110,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>2<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>220,000</td>
                              </tr>
                              <tr>
                                <td>پپسی</td>
                                <td>14,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>3<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>42,000</td>
                              </tr>
                              <!--              <tr class="border-none">-->
                              <!--                <td colspan="4" > </td>-->
                              <!--              </tr>-->
                              <tr class="  ">
                                <!--              <th colspan="2" class=""></th>-->
                                <th colspan="3" class="">تخفیف</th>
                                <td colspan="1" class="">0</td>
                              </tr>
                              <tr class="bg-danger text-light m-0">
                                <th class="">تاریخ</th>
                                <td class="">1401/02/01</td>
                                <th colspan="1" class="">جمع کل</th>
                                <td colspan="1" class="">460,000</td>
                              </tr>
                              </tbody>
                            </table>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        1401-02-23
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                      <div class="accordion-body p-0">
                        <div class="card">
                          <div class="card-body p-0 ">
                            <table class="table table-borderless rounded m-0">
                              <thead class="bg-danger text-light">
                              <th>عنوان</th>
                              <th>فی</th>
                              <th>تعداد</th>
                              <th>قیمت</th>
                              </thead>
                              <tbody class=" ">
                              <tr>
                                <td>پیتزا ایتالیایی بزرگ</td>
                                <td>198,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>1<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>198,000</td>
                              </tr>
                              <tr>
                                <td>برگر ذغالی</td>
                                <td>110,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>2<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>220,000</td>
                              </tr>
                              <tr>
                                <td>پپسی</td>
                                <td>14,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>3<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>42,000</td>
                              </tr>
                              <!--              <tr class="border-none">-->
                              <!--                <td colspan="4" > </td>-->
                              <!--              </tr>-->
                              <tr class="  ">
                                <!--              <th colspan="2" class=""></th>-->
                                <th colspan="3" class="">تخفیف</th>
                                <td colspan="1" class="">0</td>
                              </tr>
                              <tr class="bg-danger text-light m-0">
                                <th class="">تاریخ</th>
                                <td class="">1401/02/01</td>
                                <th colspan="1" class="">جمع کل</th>
                                <td colspan="1" class="">460,000</td>
                              </tr>
                              </tbody>
                            </table>


                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        1400-12-26
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                      <div class="accordion-body p-0">
                        <div class="card">
                          <div class="card-body p-0 ">
                            <table class="table table-borderless rounded m-0">
                              <thead class="bg-danger text-light">
                              <th>عنوان</th>
                              <th>فی</th>
                              <th>تعداد</th>
                              <th>قیمت</th>
                              </thead>
                              <tbody class=" ">
                              <tr>
                                <td>پیتزا ایتالیایی بزرگ</td>
                                <td>198,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>1<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>198,000</td>
                              </tr>
                              <tr>
                                <td>برگر ذغالی</td>
                                <td>110,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>2<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>220,000</td>
                              </tr>
                              <tr>
                                <td>پپسی</td>
                                <td>14,000</td>
                                <td><i class="bi bi-plus-circle-fill me-2 text-danger"></i>3<i
                                    class="bi bi-dash-circle-fill ms-2 text-danger"></i></td>
                                <td>42,000</td>
                              </tr>
                              <!--              <tr class="border-none">-->
                              <!--                <td colspan="4" > </td>-->
                              <!--              </tr>-->
                              <tr class="  ">
                                <!--              <th colspan="2" class=""></th>-->
                                <th colspan="3" class="">تخفیف</th>
                                <td colspan="1" class="">0</td>
                              </tr>
                              <tr class="bg-danger text-light m-0">
                                <th class="">تاریخ</th>
                                <td class="">1401/02/01</td>
                                <th colspan="1" class="">جمع کل</th>
                                <td colspan="1" class="">460,000</td>
                              </tr>
                              </tbody>
                            </table>


                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  </main>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import {LMap, LTileLayer, LMarker, LGeoJson,} from "@vue-leaflet/vue-leaflet";

export default {
  name: 'Profile',
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