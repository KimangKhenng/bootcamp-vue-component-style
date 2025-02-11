<template>
    <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Read trusted reviews from our customers
            </h2>

            <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <CustomerCard v-for="(item, index) in customers" :key="index" :title="item.title" :text="item.text" />
            </div>
        </div>
    </section>
</template>
<script>
import CustomerCard from "@/components/customer-card.vue"
export default {
    components: {
        CustomerCard
    },
    data() {
        return {
            customers: [{
                title: "KimAng",
                text: "This is KK"
            },
            {
                title: "Chau Dara",
                text: "This is Dara"
            },
            {
                title: "Alexander",
                text: "This is Alexander"
            }]
        }
    }
}
</script>