<template>
  <div>
      <div class="sidebar" v-for="(s, i) in sidebar" :key="i">
        <router-link :to="`/${s.path}`">{{ s.name }}</router-link>
      </div>
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

    const sidebar = ref({
      allPhoto: {
        name:"All Photo",
        path:"i/allPhoto"
      },
      PaperWork: {
        name:"Paper Work",
        path:"PaperWork"
      },
      Portal: {
        name:"Portal",
        path:"Portal"
      },
      Phlegm: {
        name:"Phlegm",
        path:"Phlegm"
      },
      Compact: {
        name:"Compact",
        path:"Compact"
      },
      Jellyfish: {
        name:"Jellyfish",
        path:"Jellyfish"
      },
      Series: {
        name:"Series",
        path:"Series"
      },
      Single: {
        name:"Single",
        path:"Single"
      },
    })

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
      sidebar,
      handleIsColored,
      handleIsNonColored
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100px;
  margin-right: 10px;
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
