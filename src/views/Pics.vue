<template>
  <section class="pictures">
    <div class="pictures_wrapped">
      <div class="pictures__img_wrapped" v-for="picture in pictures" :key="picture.id">
        <img :src="picture.url" alt="Random picture" class="pictures__img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pictures: [],
    }
  },
  methods: {
    async transferPics() {
      await this.$store.dispatch('pullPics');
      const tempData = this.$store.state.pics;
      this.pictures = tempData.splice(0, 19);
    }
  },
  created() {
    this.transferPics();
  }
}
</script>

<style>

</style>