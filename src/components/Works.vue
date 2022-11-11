<template>
  <div class="flex h-min" id="work" ref="work">
    <div class="m-auto mx-auto" data-aos="zoom-in" data-aos-delay="400">
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
              Works
            </p>
          </div>
        </div>
        <div
          v-for="project in projects"
          :key="project.name"
          class="mx-auto flex flex-col sm:flex-row py-5"
        >
          <div class="grid-cols-2 space-y-2 px-5 w-screen mb-5 sm:mb-0">
            <p class="font-sans flex font-bold text-xl md:text-2xl">
              {{ project.name }}
            </p>

            <p
              class="
                font-sans
                flex
                font-light
                text-lg
                mb-4
                text-justify
                w-full
              "
            >
              {{ project.description }}
            </p>
            <p class="font-sans flex font-bold text-md">
              <span class="mr-2"
                ><font-awesome-icon icon="layer-group" class="icon alt"
              /></span>
              Technology Stack
            </p>
            <div class="grid grid-cols-3 w-full sm:w-3/5 gap-y-1.5">
              <div
                v-for="stack in project.techStack"
                :key="stack"
                class="
                  bg-gray-200
                  font-sans
                  text-s
                  font-light
                  mr-2
                  px-2.5
                  py-0.5
                  rounded
                "
              >
                {{ stack }}
              </div>
            </div>
          </div>
          <!-- <div class="flex mr-0 mt-2 mb-10 sm:mb-0 sm:mr-16 w-full">
            <img
              :src="getImageUrl(project.image)"
              :alt="project.name"
              class="rounded px-3 sm:w-84 sm:h-56 object-cover mx-auto"
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import projects from "../data/project.json";
export default {
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/project/${name}`, import.meta.url).href;
    };
    return { getImageUrl };
  },
  data() {
    return {
      src: "../assets/Project/",
      items: null,
      projects: projects,
    };
  },
};
</script>