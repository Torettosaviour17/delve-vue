<template>
  <div
    class="w-full h-screen bg-purple-800 bg-fit bg-no-repeat bg-center p-10 bg-[50%] rounded-bl-[200px]"
    :style="{ backgroundImage: `url(${mapbase})` }"
  >
    <h1 class="text-white text-bold text-[48px]">Explore Major Languages <div class="text-[#FFDF81]">on the go</div></h1>
  </div>
</template>

<script setup>
import mapbase from '/mapbase.png'; // Make sure the image is inside 'src/assets'

</script>
