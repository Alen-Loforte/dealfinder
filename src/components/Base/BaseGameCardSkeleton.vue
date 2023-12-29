<template>
  <q-card class="card-content">
    <div class="card-style">
      <div class="img-container">
        <q-skeleton animation="blink" class="img-style" />
      </div>
      <div class="q-mt-md">
        <div class="multi-line">
          <span class="text-h6">
            <q-skeleton animation="blink" type="text" />
            <q-skeleton animation="blink" type="text" width="50%" />
          </span>
        </div>
        <div class="flex items-center">
          <span class="text-body1">
            <q-skeleton
              animation="blink"
              type="text"
              width="100px"
              class="q-mr-sm"
            />
          </span>
          <q-skeleton animation="blink" type="QAvatar" />
        </div>
        <div>
          <span class="text-h6">
            <q-skeleton animation="blink" type="text" />
          </span>
          <span>
            <q-skeleton animation="blink" type="text" />
          </span>
        </div>
        <div class="q-mt-sm">
          <span class="text-body1">
            <q-skeleton animation="blink" type="text" width="70px" />
          </span>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.card-content {
  background-color: $primary;
  padding: 0.5rem;
  width: 25em;
  min-height: 350px;
}
.card-style {
  display: flex;
  flex-direction: column;
  color: $white;
  margin: 8px;
}
.img-container {
  display: contents;
}
.img-style {
  border-radius: 3px;
  align-self: center;
  width: 100%;
  height: 130px;
}
.positive-deal {
  color: $positive;
}
.negative-deal {
  color: $negative;
}
.multi-line {
  height: 4rem;
}
</style>
