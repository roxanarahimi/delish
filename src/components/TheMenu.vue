<template>
  <div class="w-100 mt-4 d-flex justify-content-center">
    <div class="btn-group  " style="position: fixed; z-index: 100">
      <a class="btn btn-lg btn-danger p-3" style="border-radius:  0 80px  80px 0"><i
          class="bi bi-caret-right-fill"></i></a>
      <!--                             <router-link  to="/login" class="btn btn-lg btn-danger p-3">ورود</router-link>-->
      <!--          <router-link to="/orders" class="btn btn-lg btn-danger p-3"><i class="bi bi-three-dots-vertical"></i></router-link>-->
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
                <th class="border-none">
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

</template>

<script>
export default {
  name: "TheMenu"
}
</script>

<style scoped>

</style>