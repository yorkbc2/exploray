<template>
  <div class="covered-blocks-wrapper">
    <div class="covered-blocks-mobile" v-if="isMobile">
      <div class="covered-blocks__row">
        <covered-block
          v-for="(block, index) in blockList"
          :key="index"
          :data="block"
          class="fixed-height"
        />
      </div>
    </div>
    <div class="covered-blocks" v-else>
      <div class="row" v-for="(parent,index) in items" :key="index">
        <div class="col">
          <covered-block :data="parent" class="fixed-height"/>
        </div>
        <div class="col" v-if="parent.children">
          <div class="row child-row" v-for="(child, index) in parent.children" :key="index">
            <div class="col">
              <covered-block :data="child"/>
            </div>
            <div class="col" v-if="child.children">
              <div class="row">
                <div class="col" v-for="(item, index) in child.children" :key="index">
                  <covered-block :data="item"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoveredBlockVue from "./CoveredBlock.vue";
export default {
  components: {
    "covered-block": CoveredBlockVue
  },
  props: {
    items: Array
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 1024;
    },
    blockList() {
      let data = [];
      this.items.forEach(item => {
        data.push(item);
        if (item.children) {
          item.children.forEach(item => {
            data.push(item);
            if (item.children) {
              item.children.forEach(item => data.push(item));
            }
          });
        }
      });
      return data;
    }
  }
};
</script>

<style lang="scss" scoped>
.covered-blocks {
  &-wrapper {
    .row {
      flex-wrap: nowrap;
      .col {
        flex-direction: column;
        display: flex;
        > div {
          flex: 1;
        }
      }

      &.child-row {
        flex-direction: column-reverse;
      }
    }
  }
  &__row {
      display: flex;
      justify-content: space-between;
      >div {
          width: 48%;
          @media screen and (max-width: 767px) {
              width: 100%;
          }
      }
      flex-wrap: wrap;
  }
}
</style>
