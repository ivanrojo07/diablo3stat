<template>
    <div class="single-stat w-100">
        <b-card class="text-body">
            <div class="d-flex">
                <div class="d-block ico-cont">
                    <div class="text-center">
                        <!-- Icono y color -->
                        <font-awesome-icon :icon="icoName" :style="{color: icoColor}" class="fa-3x" />
                    </div>
                </div>
                <div class="flex-grow-1">
                    <!-- Valor y Filtro -->
                    <h4 class="font-weight-bold mb-0">
                        {{info.value | formatNumber}}
                    </h4>
                    <!-- texto -->
                    <span class="text-muted font-weight-light mb-0">
                        {{info.text}}
                    </span>
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
import { formatNumber } from '@/filters/numeral'
export default {
    name: 'SingleStat',
    filters: {
        formatNumber
    },
    props: {
        icoName: {
            type: String,
            required: true
        },
        icoColor: {
            type: String,
            required: true
        },
        info: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="stylus" scoped>
    .single-stat
        .ico-cont
            width 80px
</style>
