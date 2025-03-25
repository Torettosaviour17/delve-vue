<script setup>
import { PlusIcon } from "@heroicons/vue/24/solid";
import { MinusIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="w-full h-[85vh] pt-20 bg-[#F9F9F9] pr-20 pb-10 pl-16">
    <div class="flex items-center justify-center">
      <h1
        class="font-normal text-[16px] leading-[24px] text-center p-[10px] mb-6 border-[2px] rounded-[21px] shadow-lg"
      >
        Our Features
      </h1>
    </div>
    <div class="flex w-full space-x-16">
      <div class="w-[40%]">
        <h1 class="font-bold pt-12 pb-4 text-[32px] leading-[120%]">
          Got Questions About Delve ?
        </h1>
        <p class="font-medium text-[18px] leading-[150%] pr-32 text-[#615F5F]">
          No worries, we’ve got you covered
        </p>
      </div>
      <div class="w-[60%] space-y-6">
        <div
          class="flex justify-between w-full items-center p-4 bg-[#FFFFFF] rounded-[12px]"
        >
          <h5 class="font-semibold text-[20px] leading-[42px] tracking-normal">
            Is Delve available in flight mode?
          </h5>
          <PlusIcon class="w-7 h-7 text-black cursor-pointer" />
        </div>
        <div class="p-4 bg-[#F3E9FB] rounded-[16px]">
          <div
            class="flex justify-between w-full items-center px-0 p-4 rounded-[12px]"
          >
            <h5
              class="font-semibold text-[20px] leading-[42px] tracking-normal"
            >
              Can I switch languages when I learn with Delve?
            </h5>
            <MinusIcon class="w-7 h-7 text-gray-black cursor-pointer" />
          </div>
          <div>
            <p
              class="font-['Open_Sans'] font-normal text-[#555555] text-[16px] leading-[32px] tracking-[0%]"
            >
              We offer a variety of languages, including Spanish, French,
              German, Japanese, and more. We continuously add new languages
              based on user demand.re.
            </p>
          </div>
        </div>
        <div
          class="flex justify-between w-full items-center p-4 bg-[#FFFFFF] rounded-[12px]"
        >
          <h5 class="font-semibold text-[20px] leading-[42px] tracking-normal">
            Can I adjust my learning goals?
          </h5>
          <PlusIcon class="w-7 h-7 text-black cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { PlusIcon } from "@heroicons/vue/24/solid";

export default {
  name: "OurFeature0",
};
</script>
