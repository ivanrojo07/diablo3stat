export default {
    methods: {
        /**
         * Go to hero ID
         * @param {String | Number} heroId
         */
        goToHero (heroId) {
            // Obtener parametros de la url
            const { region, battleTag } = this.$route.params
            // Navegar a la ruta "Hero"
            this.$router.push({ name: 'Hero', params: { region, battleTag, heroId } })
        }
    }
}
