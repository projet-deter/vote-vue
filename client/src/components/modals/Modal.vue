<template>
  <div class="modal" v-if="open">
    <div class="backdrop" @click="onClose" />
    <div class="modal-container">
      <div class="modal-header">
        <span>{{title}}</span>
        <a @click="onClose">X</a>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    open: Boolean,
    title: String,
    onClose: Function
  }
};
</script>

<style>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal > .backdrop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
}
.modal-container {
  z-index: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 0.125rem;
}
.modal-header {
  display: flex;
  padding: 5px 0;
}
.modal-header > span {
  font-weight: bold;
  font-size: 22px;
}
.modal-header > a {
  cursor: pointer;
  padding: 1px 5px;
  font-size: 12px;
  border: solid 1px;
  border-radius: 20%;
  color: #495057;
}
.modal-body {
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>