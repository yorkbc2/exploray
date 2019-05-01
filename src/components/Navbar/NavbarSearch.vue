<template>
  <div class="nav__search">
    <input type="search" class="input" placeholder="Поиск тура">
    <icon name="search"/>
  </div>
</template>

<style lang="scss">
.nav__search {
  position: relative;
  max-width: 200px;
  margin: 0 15px;

  input {
    width: 100%;
    padding: 10px 35px 10px 15px;
    font-size: 16px;
    border: 1px solid #fff;
    border-radius: 50px;
    background-color: transparent;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%) scale(0.9);
  }
}
</style>
