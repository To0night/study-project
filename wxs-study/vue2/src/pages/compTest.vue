<template>
  <div>
    <xTbale :dataSource="tableData">
      <xColumn prop="index" label="序号" sortable> </xColumn>
      <xColumn prop="name" label="姓名">
        <template #default="scope">
          {{ scope.row.name }}
        </template>
      </xColumn>
      <xColumn prop="age" label="年龄">
        <template #default="scope">
          {{ scope.row.age }}
        </template>
      </xColumn>
      <xColumn prop="description" label="描述">
        <template #default="scope">
          {{ scope.row.description }}
        </template>
      </xColumn>
    </xTbale>
  </div>
</template>

<script>
import xTableVue from "../components/xTable.vue";
import tableColumnVue from "../components/tableColumn.vue";
export default {
  components: {
    xTbale: xTableVue,
    xColumn: tableColumnVue,
  },
  created() {
    const reactive = (target) => {
      return new Proxy(target, {
        get(target, key) {
          return typeof target[key] === 'object' ? reactive(target[key]) : target[key]
        },
        set(target, key, newvalue) {
          console.log("更改值", newvalue);
          target[key] = newvalue;
          return true;
        },
        deleteProperty(target,key){
          console.log('删除值',key)
          delete target[key]
          return true
        }
      });
    };
    const state = reactive({
      name: "wxs",
      age: 25,
      list:[1,2,3,4]
    });
   state.list[0] = 'xxas'
    console.log(state);
  },
  data() {
    return {
      tableData: [
        {
          index: 2,
          name: "wxs",
          age: 24,
          description: "一些描述",
        },
        {
          index: 1,
          name: "hk",
          age: 48,
          description: "另一些描述",
        },
        {
          index: 3,
          name: "ggb",
          age: 28,
          description: "加一点描述",
        },
      ],
    };
  },
};
</script>

<style></style>