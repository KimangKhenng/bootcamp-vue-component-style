import { defineStore } from 'pinia'
import axios from 'axios'

const useRepositorieStore = defineStore('repositories', {
    state: () => {
        return {
            repositories: []
        }
    },
    actions: {
        async fetchRepository() {
            const { data } = await axios.get('https://api.github.com/users/tfd-ed/repos')
            this.repositories = data
        }
    }
})

export default useRepositorieStore