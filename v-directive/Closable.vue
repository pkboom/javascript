<template>
  <div>
    <div>
      <button ref="button" @click="showPopup = !showPopup">toggle</button>
    </div>
    <div
      v-show="showPopup"
      v-closable="{
        exclude: ['button'],
        handler: 'onClose',
      }"
      class="bg-gray-500 m-10 h-20 w-20 text-white"
    >
      Test Popup Box
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    }
  },
  methods: {
    onClose() {
      this.showPopup = false
    },
  },
}
</script>
