<template>
  <div
    class="bg-[#8324DB1A] w-full h-[100vh] flex justify-between pl-10 p-24  rounded-tr-[180px]"
  >
    <div class="w-[65%]">
      <h1 class="font-bold text-[64px] pb-6">
        Have
        <span class="text-[#AC6CE7] leading-[80px] tracking-normal">fun</span>
        learning a language while you <span class="text-[#AC6CE7]">Travel</span>
      </h1>
      <p class="font-light text-[#1B1B1B] text-[24px] leading-[100%]">
        Embark on exciting quests, conquer daily challenges from anywhere in the
        world to help you answer confidently in your language of choice any
        situation.
      </p>
    </div>
    <div class="w-[25%]">
      <img :src="heroimg" alt="heroimg" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Herosection",
  data() {
    return {
      heroimg: "/heroimg.png",
    };
  },
};
</script>
