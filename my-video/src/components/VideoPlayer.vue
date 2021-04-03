<template>
    <div class="video-player">
        <video class="video" ref="video">
          <source src="https://www.youtube.com/watch?v=_I453ahNvCQ" type="video/mp4">
        </video>
      </div>
</template>

<script>

export default {
  name: 'VideoPlayer',
  props: {
    msg: String
  },
  computed: {
      videoElement () {
          return this.$refs.video;
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

