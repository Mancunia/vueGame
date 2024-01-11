<template>
    <div>
        <h1>Start</h1>
        <Button @clicked="start" title="Start" :isDisabled="isPlaying"/>
        <Block v-if="isPlaying" @clicked="stop" @restart="stop" />
        <Result v-if="!isPlaying" :result="result" />
    </div>
</template>

<script>
import Block from '@/components/Block.vue';
import Result from '@/components/Result.vue';
import Button from '../components/widget/Button.vue';

import gameControls from '@/service/gameControl';

export default {
    name: 'ReactionsStart',
    components: {
        Button,
        Block,
        Result
    },

    data() {
        return {
            isPlaying:false,
            delay: null,
            result: "Click start to play"
        };
    },

    mounted() {
        
    },

    methods: {
        start (){
            this.delay = 2000 + Math.random() * 5000
            this.isPlaying = true
            console.log(this.delay)

        },
        stop (eventData){
           this.result = gameControls(eventData)
            this.delay = null
            this.isPlaying = false
        }
    },
};
</script>

<style lang="scss" scoped>

</style>