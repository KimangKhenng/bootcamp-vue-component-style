<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>