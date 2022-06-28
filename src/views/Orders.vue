<template>
  <main>
    <div class="container-fluid">

      <div class="row " style="margin-top: 50px">
        <div class="col-12 d-flex  justify-content-center">
          <div class="btn-group mb-5 ">
            <a class="btn btn-lg btn-danger p-3" style="border-radius:  0 80px  80px 0"><i
                class="bi bi-caret-right-fill"></i></a>
            <!--                             <router-link  to="/login" class="btn btn-lg btn-danger p-3">ورود</router-link>-->
            <router-link to="/foods" class="btn btn-lg btn-danger p-3">سفارش</router-link>
            <router-link to="/login" class="btn btn-lg btn-danger p-3">خروج</router-link>
            <a class="btn btn-lg btn-danger p-3" style="border-radius: 80px  0 0 80px"><i
                class="bi bi-caret-left-fill"></i></a>
          </div>
        </div>
        <div class="col-lg-5 mb-3">
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
                <div class="w-100 mb-3 rounded bg-secondary" style="height: 200px">
                  map
                </div>
                <button type="submit" class="btn btn-primary">ویرایش</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-7 mb-3">
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
                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
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
export default {
  name: "Orders"
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  color: black;
  background-color: transparent;
  /*box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);*/
}
</style>
