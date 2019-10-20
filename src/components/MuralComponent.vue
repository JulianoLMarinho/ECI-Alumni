<template>
    <div class="mural">
        <div class="user">
            <Icon size="48"></Icon>
            <div class="user-info">
            <div class="user-info__name">Nome do Usuário</div>
            <div class="user-info__date">Publicado em Dia de Mês de Ano às Horas</div>
            </div>
        </div>
        <div class="content">Content</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Icon from '@/components/Icon.vue';
export default Vue.extend({
    components:{
            Icon,
        }
});
</script> 

<style lang="scss" scoped>
.mural{
    border: solid 1px #9B9491;
    border-radius: 20px;
    padding: 10px 0px 0px 10px;
    margin-bottom: 20px;
}
.user{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;

    .user-info{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        &__name{
            font-size: 24px;
        }
        &__date{
            font-size: 12px;
            color: #ABABAB;
        }
    }
}

.content{
        margin: 20px;
}
    
</style>