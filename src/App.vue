<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <RegisterModal />
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import RegisterModal from './modals/register-modal.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    RegisterModal
  }
}
</script>