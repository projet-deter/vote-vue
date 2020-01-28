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
      <div class="modal-footer">
        <slot name="footer">
          <a @click="onClose">Cancel</a>
          <a @click="onSubmit">Submit</a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    open: Boolean,
    onClose: Function,
    onSubmit: Function,
    title: String
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
  display: flex;
  flex-direction: column;
  min-height: 25%;
  max-height: 75%;
  min-width: 40%;
  max-width: 80%;
  background-color: #fff;
  border: solid 1px transparent;
  border-radius: 0.125rem;
}
.modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  border-bottom: solid 1px #000;
}
.modal-header > span {
  font-weight: bold;
  font-size: 25px;
  color: #2c3e50;
}
.modal-header > a {
  cursor: pointer;
}
.modal-body {
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.modal-footer {
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-top: 10px;
  border-top: solid 1px #000;
  justify-content: flex-end;
}
.modal-footer > a {
  padding-top: 5px;
  color: #42b983;
}
.modal-footer > a:hover {
  color: #44715d;
  cursor: pointer;
}
</style>