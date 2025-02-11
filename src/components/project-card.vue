<template>
    <article @click="handleClick"
        class="hover:animate-background hover:cursor-pointer rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s]">
        <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500"> {{ date }} </time>

            <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                {{ title }}
            </h3>

            <div class="mt-4 flex flex-wrap gap-1">
                <span v-for="(item, index) in keywords" :key="index"
                    class="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600">
                    {{ item }}
                </span>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        id: {
            type: String
        },
        date: {
            type: String,
            default: "2010 - 11 -12"
        },
        title: {
            type: String,
            default: "How to center an element using JavaScript and jQuery"
        },
        keywords: {
            type: Array,
            default() {
                return ["C++", "Javascript", "Python"]
            }
        }
    },
    methods: {
        handleClick() {
            this.$router.push(`/project/${this.id}`)
        }
    }
}
</script>