<template>
  <div
    class="bg-[#8324DB] bg-opacity-10 w-full h-auto md:h-[110vh] flex flex-col-reverse md:flex-row md:justify-between px-6 sm:px-14 py-10 md:p-24 rounded-tr-[100px] sm:rounded-tr-[180px]"
  >
    <div class="w-full md:w-[70%] text-center md:text-left">
      <h1
        class="font-bold text-[36px] sm:text-[48px] md:text-[42px] lg:text-[64px] pb-3"
      >
        Have
        <span
          class="text-[#AC6CE7] leading-[120%] sm:leading-[80px] tracking-normal"
          >fun</span
        >
        learning a language while you <span class="text-[#AC6CE7]">Travel</span>
      </h1>
      <p
        class="font-light text-[#1B1B1B] text-[18px] sm:text-[24px] leading-[140%]"
      >
        Embark on exciting quests, conquer daily challenges from anywhere in the
        world to help you answer confidently in your language of choice in any
        situation.
      </p>

      <div
        class="flex flex-col sm:flex-row items-center justify-center md:justify-start sm:items-start pt-7 gap-4"
      >
        <img
          :src="appleStore"
          alt="Apple Store"
          class="w-[50%] sm:w-[40%] md:w-[30%] max-w-[140px] h-auto"
        />
        <img
          :src="playStore"
          alt="Play Store"
          class="w-[50%] sm:w-[40%] md:w-[30%] max-w-[140px] h-auto"
        />
      </div>
    </div>
    <div class="w-full md:w-[25%] flex justify-center">
      <img :src="heroimg" alt="Hero Image" class="w-[200px] md:w-auto h-auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Herosection",
  data() {
    return {
      heroimg: "/heroimg.png",
      appleStore: "/App Store.png", // Make sure the filename matches exactly
      playStore: "/Play Store.png", // Make sure the filename matches exactly
    };
  },
};
</script>
