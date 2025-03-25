<template>
  <div
    class="w-full h-screen bg-purple-500 bg-fit bg-no-repeat  pt-7 p-10 bg-[70%] rounded-bl-[180px]"
    :style="{ backgroundImage: `url(${mapbase})` }"
  >
    <h1 class="text-white text-bold text-[48px]">Explore Major Languages <div class="text-[#FFDF81]">on the go</div></h1>
  </div>
</template>

<script setup>
import mapbase from '/mapbase.png'; // Make sure the image is inside 'src/assets'

</script>
