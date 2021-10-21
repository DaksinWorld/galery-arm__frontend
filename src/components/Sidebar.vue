<template>
  <div class="sidebar">
      <router-link to="/i/allPhoto" query>All Photo</router-link>
      <router-link to="/PaperWork">Paper work</router-link>
      <router-link to="/Portal">Portal</router-link>
      <router-link to="/Phlegm">Phlegm</router-link>
      <router-link to="/Compact">Compact</router-link>
      <router-link to="/Jellyfish">Jellyfish</router-link>
      <router-link to="/Skins">Skins</router-link>
      <router-link to="/Series">Series</router-link>
      <router-link to="/Single">Single</router-link>
      <div class="filter">
        <label @click="handleIsColored" v-if="isColoredPick" class="black">Colored</label>
        <label @click="handleIsColored" v-else >Colored</label>
        <label @click="handleIsNonColored" v-if="isNonColoredPick" class="black">B&W</label>
        <label @click="handleIsNonColored" v-else>B&W</label>
      </div>
  </div>
</template>
<script>

import {ref, watch} from "vue";

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}) {
    const isColoredPick = ref(false)
    const isNonColoredPick = ref(false)
    const data = ref()

    const handleIsColored = () => {
      if(isColoredPick.value){
        isColoredPick.value = false
        data.value = ''
      } else {
        isColoredPick.value = true
        data.value = 'Colored'
      }
    }

    const handleIsNonColored = () => {
      if(isNonColoredPick.value){
        isNonColoredPick.value = false
        data.value = ''
      } else {
        isNonColoredPick.value = true
        data.value = 'BlackAndWhite'
      }
    }

    watch([data], values => {
      emit('update:modelValue', {
        data: values[0]
      })
    })

    return {
      isColoredPick,
      isNonColoredPick,
      handleIsColored,
      handleIsNonColored
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 15px;
    color: #666;
    margin-bottom: 18px;
  }
}

label {
  margin: 18px 0;
}

label:first-child {
  margin-top: 22px;
}

.black {
  font-weight: 500;
  color: black;
}
</style>
