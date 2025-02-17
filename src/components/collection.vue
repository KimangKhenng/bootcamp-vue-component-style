<template>
    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(item, index) in repositories" :key="index">
            <ProjectCard :title="item.full_name" :date="item.created_at" :keywords="item.topics" :id="item.name" />
        </li>
    </ul>
</template>
<script>
import ProjectCard from '@/components/project-card.vue';
import useRepositorieStore from '@/stores/repositories';
import { mapActions, mapState } from 'pinia';
export default {
    components: { ProjectCard },
    async mounted() {
        await this.fetchRepository()
    },
    computed: {
        ...mapState(useRepositorieStore, ['repositories'])
    },
    methods: {
        ...mapActions(useRepositorieStore, ['fetchRepository'])
    }
}
</script>