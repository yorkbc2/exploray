<template>
  <ul class="profile-navigation-list">
    <li>
      <router-link to="/profile">
        <i class="fas fa-user"></i>
        Личные данные
      </router-link>
    </li>
    <li>
      <router-link to="/profile/trip">
        <i class="fas fa-hiking"></i>
        Путешествия
      </router-link>
    </li>
    <li>
      <router-link to="/profile/stats">
        <i class="fas fa-chart-line"></i>
        Статистика
      </router-link>
    </li>
    <li>
      <router-link to="/profile/people">
        <i class="fas fa-users"></i>
        Люди
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'profile-navigation'
}
</script>


<style lang="scss">
.profile-navigation-list {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    display: block;

    a {
      position: relative;
      display: block;
      padding: 10px 20px;

      font-size: 16px;
      border-top: 1px solid #e1e1e1;

      transition: background-color 0.4s ease-in-out;

      &.router-link-active,
      &:hover {
        background-color: #f0f0f0;
      }

      &.router-link-active {
        &::before,
        &::after {
          content: "";
          position: absolute;
          height: 100%;
          width: 5px;
          background: #0dba00;
          top: 0px;
          right: -1px;
        }
        &::before {
          right: auto;
          left: 0px;
        }
      }

      > i.fas {
        vertical-align: middle;
        color: #7d7d7d;
        font-size: 14px;
        margin-right: 8px;
      }
    }
  }
}
</style>
