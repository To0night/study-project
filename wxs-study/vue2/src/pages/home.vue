<template>
    <div>
        <!-- <div id="target">{{ name }}</div>
    <div :style="styleObj">这里是store的name {{ $store.state.name }}</div>
    <div>这里是store的永远比name大1 {{ $store.getters.doubleName }}</div>
    <router-link to="/home/child1">去子组件</router-link>
    <router-view></router-view>

    <div class="#title"> {{ title }}</div>
    <div class="#subtitle"> {{ subtitle }}</div> -->
        {{ styleObj.backgroundColor }}
        {{ styleObj?.name }}
        {{ arr }}
        <button @click="change">12313</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: "wxs",
            styleObj: {
                backgroundColor: 'rgba("#bf2722",0.2)',
            },
            title: '0',
            subtitle: '0',
            arr: [1, 2, 3, 4, 5]
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        change() {
            this.styleObj.name = 'huleikai'

            this.arr[2] = '123123123'
        }
    }
};
</script>

<style lang="scss" scoped></style>




const 更新视图 = () => {
    // document.querySelector('#title').innerHTML = this.title 
    // document.querySelector('#subtitle').innerHTML = this.subtitle 
    // ...
}