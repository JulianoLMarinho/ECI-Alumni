<template>
    <div class="button">
        <slot/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script> 

<style lang="scss" scoped>
.button{
    cursor: pointer;
    font-weight: bold;
    background-color: #FF8800;
    color: whitesmoke;
    border-radius: 4px;
    height: 24px;
    padding-left: 5px;
   &:hover{
        background-color:#F7AC20;
        transition: all 0.5s ease;
   }
   &:active{
        background-color:#EAEA65;
}
}
    
</style>