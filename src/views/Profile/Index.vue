<template>
    <div>
        <BaseLoading  v-if="isLoading"/>
        <h1>Profile View</h1>
    </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import setError from '@/mixins/setError'
import { getApiAccount } from '../../api/search'
export default {
    name: 'ProfileView',
    // Dar de alta mixin
    mixins: [
        setError
    ],
    components: { BaseLoading },
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
