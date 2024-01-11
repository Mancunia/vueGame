<template>
    <div class="result">
            {{ result }}
    </div>
</template>

<script>
export default {
    name: 'ReactionsResult',
    props: {
        result:{
            type: String,
            required: true
        }
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
    .result{
        font-size: 20px;
        border-radius: 20px;
        padding: 10px;
    }
</style>