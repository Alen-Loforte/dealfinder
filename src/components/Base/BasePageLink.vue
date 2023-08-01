<template>
  <q-item
    :class="$route.path == link ? 'link-active' : 'link-inactive'"
    clickable
    tag="a"
    @click="router.push(link)"
  >
    <div style="margin-left: 0.7rem; display: flex">
      <!--
        <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" size="1.5rem" />
      </q-item-section>
      -->

      <q-item-section>
        <div class="content-style">
          <q-icon :name="icon" size="1.5rem" class="q-mr-sm" />
          <q-item-label>{{ title }}</q-item-label>
        </div>
        <!--
          <q-item-label>{{ title }}</q-item-label>
        -->
      </q-item-section>
    </div>
  </q-item>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    default: "#",
  },

  icon: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.link-active {
  color: $primary;
  font-weight: 600;
  font-size: 0.9rem;
  background-color: $white;
}
.link-inactive {
  font-size: 0.9rem;
  color: white;
}
.content-style {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
