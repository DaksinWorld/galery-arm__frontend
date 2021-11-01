<template>
  <a class="back_to_top" title="Наверх">↑</a>
</template>

<script>
import {onMounted} from "vue";

export default {
  setup() {
    onMounted(() => {
          (function () {
            'use strict';

            function trackScroll() {
              var scrolled = window.pageYOffset;
              var coords = document.documentElement.clientHeight;

              if (scrolled > coords) {
                goTopBtn.classList.add('back_to_top-show');
              }
              if (scrolled < coords) {
                goTopBtn.classList.remove('back_to_top-show');
              }
            }

            function backToTop() {
              if (window.pageYOffset > 0) {
                window.scrollBy(0, -80);
                setTimeout(backToTop, 0);
              }
            }

            var goTopBtn = document.querySelector('.back_to_top');

            window.addEventListener('scroll', trackScroll);
            goTopBtn.addEventListener('click', backToTop);
          })();
        }
    )
  }
}

// eslint-disable-next-line no-unexpected-multiline


</script>

<style scoped>
.back_to_top {
  position: fixed;
  bottom: 80px;
  right: 40px;
  z-index: 9999;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #f5f5f5;
  color: #444;
  cursor: pointer;
  border-radius: 2px;
  display: none;
}

.back_to_top:hover {
  background: #e9ebec;
}

.back_to_top-show {
  display: block;
}
</style>
