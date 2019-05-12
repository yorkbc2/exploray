<template>
  <div
    :class="{'advanced-select': true, 'toggled': toggled, 'advanced-select--reversed': reversed, 'advanced-select--mobile-reversed': mobileReversed, 'advanced-select--to-top': top}"
  >
    <span class="advanced-select__current" @click="toggle()">
      {{ placeholder | activeOptionLabel(activeOption) }}
      <icon name="arrow-down" fill="#000" hoverFill="#000" :width="13" :height="13"/>
    </span>
    <ul class="advanced-select__dropdown" ref="dropdown" :style="{ display: 'none' }">
      <li v-for="(option, index) in options" :key="index" @click="onChange(option)">
        <span>{{ '' | activeOptionLabel(option) }}</span>
        <small v-if="option.description">{{option.description}}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    reversed: Boolean,
    mobileReversed: Boolean,
    top: Boolean,
    /**
     * Array of objects
     * {
     *      value: "Value",
     *      description?: "Description of value",
     *      label?: "Label will be used as option"
     * }
     */
    options: Array
  },
  data() {
    return {
      activeOption: null,
      toggled: false
    };
  },
  methods: {
    onChange(option) {
      this.activeOption = option;
      this.toggle();

      this.$emit("change", this.activeOption);
    },
    toggle() {
      if (this.toggled) {
        jQuery(this.$refs.dropdown).slideUp(400, () => {
          this.toggled = false;
        });
      } else {
        this.toggled = true;
        jQuery(this.$refs.dropdown).slideDown(400);
      }
    }
  },
  filters: {
    activeOptionLabel: (placeholder, option) =>
      (option ? option.label || option.value : undefined) || placeholder
  },
  mounted() {
    if (!this.placeholder) {
      this.activeOption = this.options[0];
    }
  }
};
</script>

<style lang="scss">
@mixin advanced-select-reversed() {
  color: #fff;
  background-color: #0a6aa8;
  border-radius: 50px;

  .advanced-select__current {
    font-weight: lighter;
    border: 1px solid #fff;
    border-radius: 50px;
    color: #fff;
    background-color: #0a6aa8;
    border-radius: 50px;

    svg {
      fill: #fff !important;
    }
  }

  .advanced-select__dropdown {
    background-color: #0a6aa8;

    li {
      &:first-child {
        border-top: 0px;
      }
    }
  }
}

.advanced-select {
  position: relative;
  width: 200px;

  border-radius: 15px;
  transition: border-radius 0.2s ease-in-out;
  cursor: pointer;

  &__current {
    display: block;
    padding: 9px 25px 9px;
    text-align: center;
    transition: all 0.4s ease-in-out;
    background-color: #fff;
    border-radius: 15px;
    svg {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__dropdown {
    position: absolute;
    display: block;
    left: 0px;
    top: 100%;

    background-color: #fff;
    margin: 0;
    padding: 0;
    border-radius: 0 0 15px 15px;
    z-index: 113;
    box-shadow: 2.5px 6.23px 7px 0px rgba(0, 0, 0, 0.2);
    max-height: 200px;
    overflow-y: auto;

    width: 100%;

    li {
      border-top: 1px solid #e7e7e7;
      list-style: none;
      padding: 8px 3px 8px 3px;
      text-align: center;
      transition: all 0.4s ease-in-out;

      &:last-child {
        border-radius: 0 0 15px 15px;
      }
      &:hover {
        background-color: #0dba00;
        color: #fff;
      }
      span {
        display: block;
      }
    }
  }

  &:hover {
    .advanced-select__current {
      background-color: #0dba00;
      color: #fff;
      border-radius: 15px;

      .svg-inserted {
        svg {
          fill: #fff !important;
        }
      }
    }
    &.advanced-select--mobile-reversed:not(.toggled) {
      .advanced-select__current {
        border-radius: 50px;
      }
    }
  }

  &.toggled {
    &,
    .advanced-select__current {
      border-radius: 15px 15px 0 0;
    }

    .advanced-select__current {
      svg {
        transform: scale(-1) translateY(50%);
      }
    }
  }

  &--to-top {
    &.toggled {
      &,
      .advanced-select__current {
        border-radius: 0 0 15px 15px;
      }
    }
    .advanced-select__dropdown {
      top: auto;
      bottom: 100%;

      border-radius: 15px 15px 0 0;
      box-shadow: 2.5px -6.23px 7px 0px rgba(0, 0, 0, 0.2);

      li {
        border-top: 0px;
        border-bottom: 1px solid #e7e7e7;

        &:last-child {
          border-radius: 0px;
        }
        &:first-child {
          border-radius: 15px 15px 0 0;
        }
      }
    }
  }

  &--reversed {
    @include advanced-select-reversed();
  }

  @media screen and (max-width: 768px) {
    &--mobile-reversed {
      @include advanced-select-reversed();
    }
  }
}
</style>


