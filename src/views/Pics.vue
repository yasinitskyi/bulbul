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
      this.pictures = this.pics.splice(0, 18);
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