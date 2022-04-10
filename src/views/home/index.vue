<template>
  <div class="home">
    <nut-searchbar
      placeholder="请输入小区地址,例如：北中路"
      v-model="searchValue"
      search="search"
    >
      <template v-slot:leftout>
        <nut-menu>
          <nut-menu-item v-model="city" :options="cityOptions" />
        </nut-menu>
      </template>
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
      <template v-slot:rightout>
        <nut-button size="small" plain color="#7232dd" @click="search"
          >搜 索</nut-button
        >
      </template>
    </nut-searchbar>

      <nut-table
        id="nut-table"
        :columns="columns"
        :summary="summary"
        :data="data"
        striped="striped"
      ></nut-table>
  </div>
</template>

<script>
import { createApp, toRefs, onMounted, reactive, ref } from "vue";
// @ is an alias to /src
import { Notify } from "@nutui/nutui";

export default {
  name: "Home",
  mounted() {
    let params = {
      token: "ddcat",
      address: this.searchValue,
    };
    this.$get("/api/find", (params = params)).then((res) => {
      console.log(res);
      if (res.code == 200) {
        if (res.data) {
          this.data = res.data;
        } else {
          Notify.warn(res.message);
        }
      }
    });
  },
  setup() {
    const columns = [
      {
        title: "区域",
        key: "region",
        align: "center",
      },
      {
        title: "地址",
        key: "address",
        align: "center",
      },
      {
        title: "确诊时间",
        key: "confirmDate",
        align: "center",
      },
    ];
    let data = [];
    let searchValue = "";

    const state = reactive({
      searchValue: searchValue,
      columns: columns,
      data: data,
    });

    let cityOptions = [{ text: "上海", value: 1 }];
    let city = 1;

    return {
      ...toRefs(state),
      cityOptions,
      city,
    };
  },
  methods: {
    // 总览
    summary() {
      return {
        value:
          "以上数据仅供参考，可能存在更新延迟或者遗漏错误，数据来源为各省市区卫健委公开数据。",
        colspan: 10,
      };
    },
    // 搜索
    search() {
      console.log("搜索得值:", this.searchValue);
      let params = {
        token: "ddcat",
        address: this.searchValue,
      };
      this.$get("/api/find", (params = params)).then((res) => {
        console.log(res);
        if (res.code == 200) {
          if (res.data) {
            Notify.success("查询成功~");
            this.data = res.data;
          } else {
            Notify.warn(res.message);
          }
        }
      });
    },
  },
};
</script>
<style>
#search-form {
  padding-top: 10px;
  margin: 10px;
}
.nut-searchbar {
  position: fixed;
  top: 0;
}
#nut-table {
  padding-top: 50px;
  padding-bottom: 100px;
}
.nut-searchbar {
  padding: 0px !important;
}
.nut-menu__bar {
  box-shadow: none !important;
}
.nut-searchbar__right-search-icon {
  margin-right: 20px;
}
.nut-menu__pop {
  box-shadow: 0px 2px 5px 0px #dddcdc;
}
</style>