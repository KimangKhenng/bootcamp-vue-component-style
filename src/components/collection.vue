<template>
    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(item, index) in projects" :key="index">
            <ProjectCard :title="item.title" :date="item.date" :keywords="item.keywords" :id="item.id" />
        </li>
    </ul>
</template>
<script>
import ProjectCard from '@/components/project-card.vue';
export default {
    components: { ProjectCard },
    data() {
        return {
            // Return from API Request
            projects: [
                { id: 'n2414-5894-535-df3', title: "How to master C++", date: "2015/12/31", keywords: ["C++", "Java"] },
                { id: '1a2d4-513-df3', title: "Advanced Python", date: "2013/12/31", keywords: ["Javascript", "Java"] },
                { id: 'z414-w1247535-df3', title: "How to master Javascript", date: "2017/12/31", keywords: ["C++", "Rust"] },
                { id: 'l2514-51265-df3', title: "How to master C#", date: "2015/12/31", keywords: ["C#", "Java"] }
            ]
        }
    }
}
</script>