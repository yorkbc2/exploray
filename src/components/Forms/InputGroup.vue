<template>
  <div class="input-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "input-group"
};
</script>

<style lang="scss">
.input-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 15px;
  &__element {
    background-color: #fff;
    position: relative;
    padding: 5px 15px;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      height: 36px;
      width: 1px;
      background-color: #b2b2b2;
      top: 50%;
      transform: translateY(-50%);
      right: 0px;
    }

    .icon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    input {
      background-color: #fff;
      border: 0px;
      padding: 12px 25px;
      font-size: 16px;
      margin-left: 25px;
    }

    &:first-child {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
    &:last-child {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      &::after {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    justify-content: space-between;

    &__element {
      &:first-child {
        &::after {
          display: none;
        }
      }
      border-radius: 50px;
      width: 48%;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    &__element {
      width: 100%;
      margin-bottom: 15px;
    }
  }
}
</style>
