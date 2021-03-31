<template>
  <section class="pictures">
    <div class="pictures__loader" v-if="loading"><span>Loading...</span></div>
    <div v-else class="pictures_wrapped">
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
      loading: true,
    }
  },
  methods: {
    async transferPics() {
      await this.$store.dispatch('pullPics');
      this.pictures = this.pics.splice(0, 18);
      this.changeLoader();
    },
    changeLoader() {
      this.loading = false;
    }
  },
  computed: {
    pics() {
      return this.$store.state.pics;
    }
  },
  created() {
    this.transferPics();
  }
}
</script>

<style>

</style>