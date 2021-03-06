<template>
  <nav id="navbar" class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">Stethoscope App</nuxt-link>
        <div @click="toggle()" id="navbarBurger" :class="toggleClass" class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" :class="toggleClass" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item is-hoverable">
            <nuxt-link to="/" :class="toggleClass" class="navbar-link">Home</nuxt-link>
          </div>
          <div class="navbar-item is-hoverable">
            <nuxt-link to="/patients" :class="toggleClass" class="navbar-link">Patients</nuxt-link>
          </div>
        </div>
        <div class="navbar-end">
          <app-button @click="logout">Logout</app-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AppButton from '~/components/Button'

export default {
  components: {
    AppButton
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
    logout() {
      this.$store.dispatch('SIGN_OUT')
      this.$router.push('/signin')
    }
  },
  computed: {
    toggleClass() {
      return {
        'is-active': this.isActive
      } 
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  position: fixed;
  background-color: white;
  min-height: 3.25rem;
  &>.container {
    align-items: stretch;
    display: flex;
    min-height: 3.25rem;
    width: 100%;
  }
}

.navbar-menu {
  display: none;
}

.navbar-item {
  flex-grow: 0;
  flex-shrink: 0;
}

.navbar-item,
.navbar-link {
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  position: relative;
}

.navbar-brand {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
}

.container {
  margin: 0 auto;
  position: relative;
  &>.navbar {
    .navbar-brand {
      margin-left: 1rem;
    }
  }
}

.navbar-burger {
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
  &>span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  &.is-active {
    &>span {
      &:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .navbar {
    &>.container {
      display: block;
    }
  }
  .navbar,
  .navbar-menu {
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 3.25rem);
    overflow: auto;
    background-color: white;
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    padding: 0.5rem 0;
    &.is-active {
      display: block;
    }
  }
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
    width: 960px;
  }

  .navbar,
  .navbar-menu,
  .navbar-start,
  .navbar-end {
    align-items: stretch;
    display: flex;
  }

  .navbar-item,
  .navbar-link {
    align-items: center;
    display: flex;
  }

  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .navbar-start {
    justify-content: flex-start;
    margin-right: auto;
  }

  .navbar-end {
    justify-content: flex-end;
    margin-left: auto;
  }

  .navbar-burger {
    display: none;
  }
}

@media screen and (min-width: 1216px) {
  .container {
    max-width: 1152px;
    width: 1152px;
  }
}

@media screen and (min-width: 1408px) {
  .container {
    max-width: 1344px;
    width: 1344px;
  }
}
</style>