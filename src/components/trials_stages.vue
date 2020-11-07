<template>
    <div>
            <b-card no-body>
                <b-card-header header-tag="header" class="p-1" role="tab" v-b-toggle.accordion-1>
                    {{stage_name}}
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>{{ stage_descr }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
    </div>
</template>

<script>
    export default {
        name: "trials_stages",
        props:{
            stage_name: String,
            stage_descr: String,
        },
    }
</script>

<style scoped lang="scss">


</style>