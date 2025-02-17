import { defineStore } from 'pinia'
import axios from 'axios'

const useProfileStore = defineStore('profile', {
    state: () => {
        return {
            profile: {}
        }
    },
    actions: {
        async fetchProfile() {
            const { data } = await axios.get('https://api.github.com/users/tfd-ed')
            this.profile = data
        }
    }
})

export default useProfileStore