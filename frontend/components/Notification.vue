<template>
  <div :class="` btn-lg mt-2 mb-2 btn-${type}`" class="notification">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    type: {
      type: String,
      default: "success",
      validator: (val) => ["danger", "success"].includes(val),
    },
    message: {
      type: String,
      default: "",
    },
  },
};
</script>