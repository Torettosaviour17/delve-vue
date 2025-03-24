<template>
  <nav class="flex justify-between items-center p-3 px-24">
    
    <div class="w-40 h-14">
      <img :src="logo" alt="Logo" class="">
    </div>

    <div class="flex space-x-4">
      <button class="text-white bg-[#8324DB] px-7 py-3 font-semibold rounded-xl border-b-[#5B1999] border-b-4">Try Delve</button>
    </div>
  </nav>
</template>

<script>
import logo from '../../../public/delve-logo.png';

export default {
  data() {
    return {
      logo,
    };
  },
};
</script>
