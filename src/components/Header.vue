<template>
  <div
    class="
      section
      flex flex-col
      items-center
      justify-between
      w-full
      p-8
      mt-4
      hidden
      md:block
      sticky
      top-0
      z-60
    "
  >
    <div class="navbar-wrapper w-full flex items-center justify-end">
      <div class="wrapper block">
        <ul class="flex">
          <li
            class="
              mr-6
              inline
              transition
              duration-150
              border-b-4 border-transparent
              hover:border-teal-500
            "
          >
            <button class="font-medium font-sans" @click="goto('work')">
              Works
            </button>
          </li>
          <li
            class="
              mr-6
              inline
              transition
              duration-150
              border-b-4 border-transparent
              hover:border-teal-500
            "
          >
            <button class="font-medium font-sans" @click="goto('aboutme')">
              About Me
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(componentId) {
      window.scrollTo({
        top: document.getElementById(componentId).offsetTop,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>