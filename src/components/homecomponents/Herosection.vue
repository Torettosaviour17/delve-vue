<template>
  <div
    class="bg-[#8324DB] bg-opacity-10 w-full h-[110vh] md:flex justify-between pl-14 pt-18 p-24 rounded-tr-[180px]"
  >
    <div class="md:w-[70%]">
      <h1 class="font-bold text-[64px] pb-3">
        Have
        <span class="text-[#AC6CE7] leading-[80px] tracking-normal">fun</span>
        learning a language while you <span class="text-[#AC6CE7]">Travel</span>
      </h1>
      <p class="font-light text-[#1B1B1B] text-[24px] leading-[100%]">
        Embark on exciting quests, conquer daily challenges from anywhere in the
        world to help you answer confidently in your language of choice any
        situation.
      </p>
      <div class="flex pt-7 items-start">
        <img :src="appleStore" alt="Apple Store" class="w-40 h-auto" />
        <img :src="playStore" alt="Play Store" class="w-40 h-auto ml-4" />
      </div>
    </div>
    <div class="md:w-[25%]">
      <img :src="heroimg" alt="Hero Image" class="w-full h-auto" />
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
