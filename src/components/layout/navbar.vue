<template>
  <nav class="flex justify-between items-center p-3 md:px-20 px-10">
    
    <div class="w-40 h-14">
      <img :src="logo" alt="Logo" class="hidden md:block">
      <img :src="delveshark" alt="mobile logo" class=" md:hidden">
    </div>

 <div class="flex justify-center sm:justify-start space-x-4">
  <button class="text-white bg-[#8324DB] px-5 py-2 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold rounded-xl border-b-[#5B1999] border-b-4">
    Try Delve
  </button>
</div>

  </nav>
</template>

<script>
import logo from '../../../public/delve-logo.png';
import delveshark from '../../../public/delveshark.png';

export default {
  data() {
    return {
      logo,
      delveshark,
    };
  },
};
</script>
