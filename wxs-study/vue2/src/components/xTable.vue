<!-- 自定义表格组件 -->

<template>
    <div>
        <slot>
            
        </slot>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    props: {
        // 表格数据源
        dataSource: []
    },
    created(){
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.column-class {
  display: inline-block;
  margin: 10px 20px;
}
</style>