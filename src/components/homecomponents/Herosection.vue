<template>
  <div
    class="bg-[#8324DB1A] w-full h-[95vh] flex justify-center items-center rounded-tr-[180px]"
  >
    <div>
      <h1>Have fun learning a language while you Travel</h1>
      <p>
        Embark on exciting quests, conquer daily challenges from anywhere in the
        world to help you answer confidently in your language of choice any
        situation.
      </p>
    </div>
    <div>
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
