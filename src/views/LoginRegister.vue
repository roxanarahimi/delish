<template>
  <div id="parallax">
    <div style="padding-top: 130px">
      <div class="d-block d-md-flex justify-content-center text-secondary">
        <div class="login card  px-3 m-5  py-5">
          <h4 class="mx-2 mb-3">ورود</h4>
          <form action="">

            <div class="input-group mb-3 px-2">
              <input type="text" class="form-control" required placeholder="موبایل">
              <button class="btn btn-danger" type="submit" id="button-addon2">دریافت کد</button>

            </div>
          </form>

          <div class="d-flex justify-content-between" dir="ltr">
            <input type="text" class="form-control mx-2">
            <input type="text" class="form-control mx-2">
            <input type="text" class="form-control mx-2">
            <input type="text" class="form-control mx-2">
            <input type="text" class="form-control mx-2">
          </div>
        </div>
        <div class="register card  px-3 m-5  py-5">
          <h4 class="mx-2 mb-3">عضویت</h4>
          <form action="">

            <div class="input-group mb-3 px-2">

              <input id="name" type="text" class="form-control" placeholder="نام" required>
              <input type="text" class="form-control" placeholder="موبایل" required>
              <button class="btn btn-danger" type="submit" id="button-addon3">دریافت کد</button>


            </div>
          </form>

          <div class="d-flex justify-content-between" dir="ltr">
            <input type="text" class="form-control mx-2">
            <input type="text" class="form-control mx-2">
            <input type="text" class="form-control mx-2">
            <input type="text" class="form-control mx-2">
            <input type="text" class="form-control mx-2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRegister"
}
</script>

<style scoped>
input, input:focus {
  background: rgba(255, 255, 255, 0.35);
  /*border-color: brown;*/
  padding-top: 12px;
  padding-bottom: 12px;
}

button {
  padding-top: 12px;
  padding-bottom: 12px;
}


input:not(#name) {
  text-align: left;
  direction: ltr;
}

.login, .register {
  width: 450px;
  /*margin-top: 250px !important;*/
  /*padding-bottom: 50px !important;*/
}
button:focus, input:focus{
  outline: none !important;
}
</style>