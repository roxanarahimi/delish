<template>
  <div id="parallax">

    <main>
      <div class="container-fluid px-0 mx-0" style="padding-top: 130px">
        <div class="row  px-0 mx-0 justify-content-center ">
          <div class="col-12 col-md-8 col-lg-6">
            <div class=" card  px-3 py-5">
              <div class="card-body">
<!--                <span id="loginBtn" @click="showLoginForm" class="btn btn-danger px-5 me-2 mb-5">ورود</span>-->
<!--                <span id="registerBtn" @click="showRegisterForm" class="btn btn-outline-danger px-5 mb-5">عضویت</span>-->

                <h4 class="fw-bold ps-2">ورود به سایت</h4>
                <small class=" ps-2 text-muted">جهت ورود و یا عضویت، لطفا شماره همراه خود را وارد کنید:</small>
                <form id="login"    class="login mt-5 " action="">

                  <div class="input-group mb-3 px-2">
                    <input type="text" class="form-control"  minlength="11" maxlength="11" required placeholder="موبایل">
                    <button class="btn btn-danger" type="submit" @click.prevent ="sendCode" id="button-addon2">دریافت کد</button>

                  </div>
                  <small class="d-block error m-2"></small>

                </form>


                <div class="d-flex justify-content-between" dir="ltr">
                  <input type="text" min="0" max="9" minlength="1" maxlength="1" class="text-center form-control mx-2">
                  <input type="text" min="0" max="9" minlength="1" maxlength="1" class="text-center form-control mx-2">
                  <input type="text" min="0" max="9" minlength="1" maxlength="1" class="text-center form-control mx-2">
                  <input type="text" min="0" max="9" minlength="1" maxlength="1" class="text-center form-control mx-2">
                  <input type="text" min="0" max="9" minlength="1" maxlength="1" class="text-center form-control mx-2">
                </div>
                <span class="text-secondary ps-2">ارسال مجدد</span>
                <span class="text-primary ps-2" >00:59</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "LoginRegister",
  setup(){
    const status = ref('login');
    const showLoginForm = ()=>{

      document.querySelector('#register').classList.add('d-none')
      document.querySelector('#login').classList.remove('d-none')
      document.querySelector('#registerBtn').classList.remove('btn-danger')
      document.querySelector('#registerBtn').classList.add('btn-outline-danger')
      document.querySelector('#loginBtn').classList.remove('btn-outline-danger')
      document.querySelector('#loginBtn').classList.add('btn-danger')

      status.value = 'login';
    };
    const showRegisterForm = ()=>{
      document.querySelector('#register').classList.remove('d-none')
      document.querySelector('#login').classList.add('d-none')
      document.querySelector('#loginBtn').classList.remove('btn-danger')
      document.querySelector('#loginBtn').classList.add('btn-outline-danger')
      document.querySelector('#registerBtn').classList.remove('btn-outline-danger')
      document.querySelector('#registerBtn').classList.add('btn-danger')
      status.value = 'register'
    };

    const sendCode = ()=>{

      let emptyFieldsCount = 0;
      let  req = document.querySelectorAll('[required]');
      req.forEach((element) => {
        if (element.value === "") {
          element.classList.add('hasError');
          element.parentNode.nextSibling.innerHTML = "لطفا شماره موبایل زا وارد کنید";
          emptyFieldsCount++;
        } else {
          element.classList.remove('hasError');
          element.parentNode.nextSibling.innerHTML = "";
        }
      });


    };
    const submit = ()=>{

    };
    const count = ()=>{

    }

    return{
      status,
      showLoginForm,
      showRegisterForm,
      submit,
      count,
      sendCode,
    }
  }
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




#login {
  /*width: 450px;*/
  /*margin-top: 250px !important;*/
  /*padding-bottom: 50px !important;*/
}
button:focus, input:focus{
  outline: none !important;
}
</style>