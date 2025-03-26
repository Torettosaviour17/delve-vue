<template>
  <div
    class="w-full h-[400px] sm:h-[500px] md:h-screen bg-purple-500 bg-contain bg-no-repeat bg-center sm:bg-[70%] md:bg-[50%] lg:bg-[40%] xl:bg-[30%] pt-7 p-10 rounded-bl-[180px]"
    :style="{ backgroundImage: `url(${mapbase})` }"
  >
    <h1
      class="text-white font-bold text-[30px] sm:text-[38px] md:text-[40px] lg:text-[48px]"
    >
      Explore Major Languages
      <div class="text-[#FFDF81]">on the go</div>
    </h1>
  </div>
</template>

<script setup>
import mapbase from "/mapbase.png"; // Ensure the image is in 'src/assets'
</script>
