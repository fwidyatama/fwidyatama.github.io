<template>
  <div
    class="flex h-screen sm:mt-0 mx-auto"
    id="main"
    data-aos="zoom-in"
    data-aos-delay="400"
  >
    <div class="m-auto mx-auto flex flex-col sm:flex-row">
      <div class="flex mr-0 mb-10 sm:mb-0 sm:mr-16">
        <img
          src="../assets/Farid-2.jpeg"
          alt="Farid"
          class="
            rounded-full
            w-32
            h-32
            sm:w-48 sm:h-48
            object-cover
            mx-auto
            border-b-4 border-solid border-3 border-teal-500
          "
        />
      </div>

      <div class="intro">
        <p
          class="font-sans flex font-bold text-2xl md:text-6xl mb-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Hi,
        </p>

        <p
          class="font-sans flex font-bold text-2xl md:text-6xl mb-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          I'm&nbsp;
          <span class="text-teal-500">Farid</span>&nbsp;Widyatama&nbsp;<span
            class="animate-waving-hand"
            >🖐</span
          >
        </p>
        <p
          class="
            font-sans
            flex
            font-light
            text-md
            md:text-3xl
            bg-teal-300
            w-fit
          "
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Backend Engineer
        </p>
        <p
          class="font-sans flex font-light text-md md:text-xl mt-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <span class="mr-3"><font-awesome-icon icon="location-dot" /></span>
          Bandung, Indonesia
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
            @click="goTo('https://github.com/fwidyatama')"
          >
            <span class="mr-2"
              ><font-awesome-icon
                :icon="['fab', 'github']"
                class="icon alt" /></span
            >Github</button
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
            @click="goTo('https://www.linkedin.com/in/faridwidyatama')"
          >
            <span class="mr-2"
              ><font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="icon alt" /></span
            >Linkedin
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
            @click="goTo('mailto:faridwidyatama12@gmail.com')"
          >
            <span class="mr-2"
              ><font-awesome-icon icon="envelope" class="icon alt"
            /></span>
            Email
          </button>
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