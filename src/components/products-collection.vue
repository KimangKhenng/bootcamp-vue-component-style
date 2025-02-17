<template>
    <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header class="text-center">
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">{{ profile.login }}</h2>

                <p class="mx-auto mt-4 max-w-md text-gray-500">
                    {{ profile.bio }}
                </p>
            </header>
            <router-view />
        </div>
    </section>
</template>
<script>
import useProfileStore from '@/stores/profile';
import { mapActions, mapState } from 'pinia';
export default {
    name: 'ProductCollection',
    async mounted() {
        await this.fetchProfile()
    },
    computed: {
        ...mapState(useProfileStore, ['profile'])
    },
    methods: {
        ...mapActions(useProfileStore, ['fetchProfile'])
    }
}
</script>