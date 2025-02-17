<template>
    <section>
        <HeroSection />
        <Customer />
    </section>
</template>
<script>
import HeroSection from '@/components/hero-section.vue';
import Customer from '@/components/customers.vue';
export default {
    components: {
        HeroSection,
        Customer
    }
}
</script>