<template>
    <div v-if="showBlock" class="block" @click="onClick">
        Click me
    </div>
    <Button v-if="showBlock" title="Restart" @clicked="restart"/>
    
</template>

<script>
// import gameControls from "../service/gameControls"
import Button from './widget/Button'

export default {
    name: 'ReactionsBlock',
    components: {
        Button
    },
    props: {
        delay:{
            type: Number,
            default: 1000
        }
    },
    data(){
        return {
            showBlock:false,
            timer:null,
            reactionTime : 0
        }
    },
    mounted(){
        
        setTimeout(() =>{
            this.showBlock = true
            this.startTimer()
        },this.delay);

    },
    unmounted(){
        console.log("Unmounted:",this.reactionTime)
    },
    updated(){
        console.log("Updated:",this.reactionTime)
    },

    methods: {
        onClick(){//stop timer
            clearInterval(this.timer);
            this.$emit('clicked',this.reactionTime);
        },
        restart(){
            this.showBlock = false;
            this.$emit('restart');
        },
        startTimer(){
            this.timer = setInterval(() => {this.reactionTime += 10},10)
        }
    },
};
</script>

<style lang="css" scoped>
    .block{
        width: 400px;
        border-radius: 20px;
        background-color: green;
        color:white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }

    
</style>