<template>
  <div id="home">
    <div id="parallax">
      <div class="d-flex justify-content-between p-3">

        <div class="justify-content-start text-start" style="width: 260px">


          <router-link to="foods" id="branch_1" class="btn btn-lg btn-danger px-5 mb-3 "
                  style="border-radius:30px; position: absolute; top:15px; right: 15px; width: 230px;">شعبه هفت حوض
          </router-link>
          <router-link to="foods" id="branch_2" class="btn btn-lg btn-danger px-5 mb-3 "
                  style="border-radius:30px; position: absolute; top:15px; right: 15px; width: 230px;">شعبه جردن
          </router-link>
          <router-link to="foods" id="branch_3" class="btn btn-lg btn-danger px-5 mb-3 "
                  style="border-radius:30px; position: absolute; top:15px; right: 15px; width: 230px;">شعبه سعادت آباد
          </router-link>
          <router-link to="foods" id="branch_4" class="btn btn-lg btn-danger px-5 mb-3 "
                  style="border-radius:30px; position: absolute; top:15px; right: 15px; width: 230px;">شعبه بازار
          </router-link>
          <button @click="branchToggle" class="btn btn-lg btn-danger px-5 mb-3 "
                  style="border-radius:30px; position: absolute; top:15px; right: 15px; width: 230px;">شعبه های دلیش
          </button>

        </div>

        <div>
          <router-link to="/login" class="btn btn-lg btn-danger px-5" style="border-radius:30px">عضویت / ورود
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {ref} from "vue";

export default {
  name: 'Home',
  components: {},
  setup() {
    const flag = ref(0);

    const branchToggle = () => {
      flag.value === 0 ?
          (
              document.querySelector('#branch_1').style.top = '78px',
              document.querySelector('#branch_2').style.top = '141px',
              document.querySelector('#branch_3').style.top = '204px',
              document.querySelector('#branch_4').style.top = '267px',
              flag.value = 1
          )
          :
          (
              document.querySelector('#branch_1').style.top = '15px',
              document.querySelector('#branch_2').style.top = '15px',
              document.querySelector('#branch_3').style.top = '15px',
              document.querySelector('#branch_4').style.top = '15px',
              flag.value = 0
          )
      ;
    }

    return {
      branchToggle, flag,
    }
  }
}
</script>
<style>
#parallax {
  width: 100%;
  height: 100vh;
  background: indianred url("../assets/food-bg.png") center bottom;
  background-size: cover;
}

#branch_1, #branch_2, #branch_3, #branch_4 {
  transition: 0.5s ease;
}

</style>