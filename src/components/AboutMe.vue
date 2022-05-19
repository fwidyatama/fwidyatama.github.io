<template>
  <div class="flex h-screen" id="aboutme" ref="aboutme">
    <div class="m-auto mx-auto" data-aos="zoom-in" data-aos-delay="400">
      <div class="container m-auto pb-10">
        <div class="m-auto mx-auto flex flex-col sm:flex-row py-5">
          <div class="grid-cols-3 space-y-2 px-5">
            <p
              class="
                text-3xl
                mb-1
                sm:text-5xl sm:mb-0
                md:mt-auto
                font-bold font-sans
                text-teal-500 text-left
              "
            >
              About Me
            </p>
          </div>
        </div>
        <div class="px-5">
          <p class="text-justify font-sans text-lg sm:text-2xl">
            My name is Farid Widyatama. I'm a Software Engineer especially as
            Backend Engineer. I enjoy to create an impact and help to solve
            problems with product that I created. Beside that, I like to work in
            a team, because it's fun and challenging for me. I write the code
            using Javascript, but not limited to that.
          </p>

          <!-- <div class="mt-3 flex">
            <button
              class="
                mob:text-sm
                laptop:text-base
                mob:p-1
                laptop:p-2
                m-6
                mob:m-1
                laptop:m-6
                rounded-lg
                transition-all
                ease-out
                duration-300
                hover:bg-slate-100 hover:scale-105
                active:scale-100
                first:ml-0
              "
              @click="goTo('https://facebook.com/farid.widyatama')"
            >
              <span class="mr-2"
                ><font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="icon alt" /></span
              >Facebook</button
            ><button
              class="
                mob:text-sm
                laptop:text-base
                mob:p-1
                laptop:p-2
                m-6
                mob:m-1
                laptop:m-6
                rounded-lg
                transition-all
                ease-out
                duration-300
                hover:bg-slate-100 hover:scale-105
                active:scale-100
                first:ml-0
              "
              @click="goTo('https://twitter.com/fwdytm')"
            >
              <span class="mr-2"
                ><font-awesome-icon
                  :icon="['fab', 'twitter']"
                  class="icon alt" /></span
              >Twitter
            </button>
            <button
              class="
                mob:text-sm
                laptop:text-base
                mob:p-1
                laptop:p-2
                m-6
                mob:m-1
                laptop:m-6
                rounded-lg
                transition-all
                ease-out
                duration-300
                hover:bg-slate-100 hover:scale-105
                active:scale-100
                first:ml-0
              "
              @click="goTo('https://www.instagram.com/fwidyatama/')"
            >
              <span class="mr-2"
                ><font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="icon alt" /></span
              >Instagram
            </button>
          </div> -->
        </div>
      </div>
      <div class="container m-auto">
        <div class="m-auto mx-auto flex flex-col sm:flex-row py-5">
          <div class="grid-cols-3 space-y-2 px-5">
            <p
              class="
                text-3xl
                mb-1
                sm:text-5xl sm:mb-0
                md:mt-auto
                font-bold font-sans
                text-teal-500 text-left
              "
            >
              Send me a message!
            </p>
          </div>
        </div>
        <div class="px-5">
          <p class="text-justify font-sans text-lg sm:text-2xl">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>

          <div class="mt-3 flex">
            <button
              class="
                mob:text-sm
                laptop:text-base
                mob:p-1
                laptop:p-2
                m-6
                mob:m-1
                laptop:m-6
                rounded-lg
                transition-all
                ease-out
                duration-300
                hover:bg-slate-100 hover:scale-105
                active:scale-100
                first:ml-0
              "
              @click="goTo('https://facebook.com/farid.widyatama')"
            >
              <span class="mr-2"
                ><font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="icon alt" /></span
              >Facebook</button
            ><button
              class="
                mob:text-sm
                laptop:text-base
                mob:p-1
                laptop:p-2
                m-6
                mob:m-1
                laptop:m-6
                rounded-lg
                transition-all
                ease-out
                duration-300
                hover:bg-slate-100 hover:scale-105
                active:scale-100
                first:ml-0
              "
              @click="goTo('https://twitter.com/fwdytm')"
            >
              <span class="mr-2"
                ><font-awesome-icon
                  :icon="['fab', 'twitter']"
                  class="icon alt" /></span
              >Twitter
            </button>
            <button
              class="
                mob:text-sm
                laptop:text-base
                mob:p-1
                laptop:p-2
                m-6
                mob:m-1
                laptop:m-6
                rounded-lg
                transition-all
                ease-out
                duration-300
                hover:bg-slate-100 hover:scale-105
                active:scale-100
                first:ml-0
              "
              @click="goTo('https://www.instagram.com/fwidyatama/')"
            >
              <span class="mr-2"
                ><font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="icon alt" /></span
              >Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    goTo: (url) => {
      window.open(url);
    },
  },
};
</script>