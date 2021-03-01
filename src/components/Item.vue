<template>
  <div v-if="current" class="edit-form">
    <h4>Item</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="current.title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="current.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ current.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="current.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deleteItem">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="update">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "item",
  props: ["item"],
  data() {
    return {
      current: null,
      message: "",
    };
  },
  watch: {
    item: function(item) {
      this.current = { ...item };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      DataService.update(this.current.key, {
        published: status,
      })
        .then(() => {
          this.current.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    update() {
      const data = {
        title: this.current.title,
        description: this.current.description,
      };

      DataService.update(this.current.key, data)
        .then(() => {
          this.message = "The item was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteItem() {
      DataService.delete(this.current.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.current = { ...this.item }
  },
};
</script>
