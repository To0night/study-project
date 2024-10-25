<!-- 自定义表格列组件 -->

<template>
  <div class="column-class">
    <div>
      {{ label }}
      <template v-if="sortable">
        <span @click="sortHandle" class="sort-span-class" v-if="sortFlag === -1"
          >降序</span
        >
        <span @click="sortHandle" class="sort-span-class" v-if="sortFlag === 0"
          >原始</span
        >
        <span @click="sortHandle" class="sort-span-class" v-if="sortFlag === 1"
          >增序</span
        >
      </template>
    </div>

    <!-- 插槽的默认内容 -->
    <div v-for="(item, index) in parentDataSource" :key="index">
      <slot v-bind="{ row: item }">
        {{ item[prop] }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentDataSource: [],
      sortFlag: 0,
    };
  },
  created() {
    this.parentDataSource = JSON.parse(JSON.stringify(this.$parent.dataSource));
  },
  methods: {
    sortHandle() {
      this.sortFlag++;
      if (this.sortFlag > 1) {
        this.sortFlag = -1;
      }
      if (this.sortFlag === -1) {
        // 倒序
        this.parentDataSource = this.parentDataSource.sort((pre, cur) => pre[this.prop] - cur[this.prop]);
      }
      if (this.sortFlag === 0) {
        // 倒序
        this.parentDataSource = JSON.parse(JSON.stringify(this.$parent.dataSource));
      }
      if (this.sortFlag === 1) {
        // 倒序
        this.parentDataSource = this.parentDataSource.sort((pre, cur) => cur[this.prop] - pre[this.prop]);
      }
    },
  },
  props: {
    label: String, // 标签
    prop: String, // 对应数据源
    sortable: {
      type: Boolean,
      default: false, // 默认不排序
    }, // 是否可排序
  },
};
</script>

<style>
.column-class {
  display: inline-block;
  margin: 10px 20px;
}

.sort-span-class {
  background: skyblue;
  cursor: pointer;
  color: white;
  display: inline-block;
  padding: 0 10px;
}
</style>