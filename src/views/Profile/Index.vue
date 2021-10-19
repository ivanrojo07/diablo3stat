<template>
    <div>
        <BaseLoading  v-if="isLoading"/>
        <template v-if="profileData !== null">
            <MainBlock :profile-data="profileData" />
            <ArtisanBlock :artisans-data="artisansData" />
        </template>
    </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'
import { getApiAccount } from '../../api/search'

import MainBlock from './MainBlock/Index'
import ArtisanBlock from './ArtisanBlock/Index'
export default {
    name: 'ProfileView',
    // Dar de alta mixin
    mixins: [
        setError
    ],
    components: {
        BaseLoading,
        MainBlock,
        ArtisanBlock
    },
    computed: {
        artisansData () {
            return {
                blacksmith: this.profileData.blacksmith,
                blacksmithHardcore: this.profileData.blacksmithHardcore,
                jeweler: this.profileData.jeweler,
                jewelerHardcore: this.profileData.jewelerHardcore,
                mystic: this.profileData.mystic,
                mysticHardcore: this.profileData.mysticHardcore
            }
        }
    },
    data () {
        return {
            isLoading: false,
            profileData: null
        }
    },
    created () {
        this.isLoading = true
        const { region, battleTag: account } = this.$route.params
        this.fetchData(region, account)
    },
    methods: {
        fetchData (region, account) {
            getApiAccount({ region, account })
                .then(({ data }) => {
                    this.profileData = data
                })
                .catch((error) => {
                    this.profileData = null
                    const errObj = {
                        routeParams: this.$route.params,
                        message: error.message
                    }
                    if (error.response) {
                        errObj.data = error.response.data
                        errObj.status = error.response.status
                    }
                    // usamos el mixin
                    // guardamos el objeto en el store
                    this.setApiError(errObj)
                    // navegamos a la ruta de nombre error
                    this.$router.push({ name: 'Error' })
                })
                .finally(() => {
                    this.isLoading = false
                })
        }
    }
}
</script>
