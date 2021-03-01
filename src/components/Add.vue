<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="item.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="item.description"
          name="description"
        />
      </div>

      <button @click="save" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newItem">Add</button>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "add",
  data() {
    return {
      item: {
        title: "",
        description: "",
        published: false
      },
      submitted: false
    }
  },
  methods: {
    save() {
      var data = {
        title: this.item.title,
        description: this.item.description,
        published: false
      };

      DataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newItem() {
      this.submitted = false;
      this.item = {
        title: "",
        description: "",
        published: false
      };
    }
  }
};
</script>
