<template>
    <button :disabled="isDisabled" @click="onClick">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'ReactionsButton',
    props: {
        title: {
            type: String,
            required: true,
        },
        isDisabled:{
            type: Boolean,
            default: false
        }
    },

    methods: {
        onClick (){
            this.$emit('clicked');
        }
    },
};
</script>

<style lang="scss" scoped>

</style>