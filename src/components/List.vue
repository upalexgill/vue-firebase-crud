<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(item, index) in items"
          :key="index"
          @click="setActive(item, index)"
        >
          {{ item.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAll">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="current">
        <item
          :item="current"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Item...</p>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";
import Item from "./Item";

export default {
  name: "list",
  components: { Item },
  data() {
    return {
      items: [],
      current: null,
      currentIndex: -1
    };
  },
  methods: {
    onDataChange(items) {
      let _items = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _items.push({
          key: key,
          title: data.title,
          description: data.description,
          published: data.published,
        });
      });

      this.items =_items;
    },

    refreshList() {
      this.current = null;
      this.currentIndex = -1;
    },

    setActive(item, index) {
      this.current = item;
      this.currentIndex = index;
    },

    removeAll() {
      DataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    DataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    DataService.getAll().off("value", this.onDataChange);
  }
};
</script>
