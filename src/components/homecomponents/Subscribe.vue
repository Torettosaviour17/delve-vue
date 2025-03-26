<template>
  <div
    class="w-full bg-[#F9F9F9] md:mt-16 flex items-center justify-center md:pb-[40px]"
  >
    <div
      class="w-full md:w-[80%] h-[75%] border border-2-black rounded-[16px] p-[20px] md:p-[40px] flex flex-col-reverse md:flex-row justify-between bg-white shadow-lg"
    >
      <!-- Left Content (Text and Form) -->
      <div class="w-full md:w-[68%] space-y-16 p-6">
        <div class="space-y-5 pt-20">
          <h4
            class="font-sans font-bold text-[32px] leading-[100%] tracking-[0%]"
          >
            Stay in Touch
          </h4>

          <p
            class="font-sans font-normal text-[18px] text-[#595959] leading-[100%] tracking-[0%]"
          >
            Subscribe to our newsletter and stay updated.
          </p>
        </div>
        <div>
          <label
            class="font-sans font-semibold text-[18px] leading-[28px] tracking-[0%]"
          >
            Email Address
          </label>

          <div
            class="w-full pt-7 space-y-4 md:space-y-0 md:flex justify-between items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full md:w-[70%] border border-gray-300 rounded-[10px] p-[14px_16px] gap-[8px] placeholder-gray-400"
            />
            <button
              class="bg-[#8324DB] md:text-[12px] lg:text-[13px] text-white font-sans w-full md:w-[25%] font-semibold text-[16px] leading-[24px] tracking-[0%] rounded-[9px] border-b-[1px] px-[24px] py-[12px] gap-[6px]"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <!-- Animation Section (Now on top in mobile view) -->
      <div
        class="w-full md:w-[35%] h-full flex items-center self-center justify-center relative"
      >
        <!-- Wrapper to keep everything centered -->
        <div class="w-full h-full flex items-center justify-center">
          <div
            class="relative flex items-center justify-center w-[200px] h-[200px]"
          >
            <img
              :src="Letter"
              alt="Ammunition"
              class="w-full h-full object-contain"
            />

            <!-- Animation effects centered perfectly -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="absolute w-[120px] h-[120px] bg-purple-500/60 rounded-full animate-wave"
              ></div>
              <div
                class="absolute w-[120px] h-[120px] bg-purple-500/60 rounded-full animate-wave2"
              ></div>
              <div
                class="absolute w-[120px] h-[120px] bg-purple-500/60 rounded-full animate-wave3"
              ></div>
              <div
                class="absolute w-[120px] h-[120px] bg-purple-500/60 rounded-full animate-wave4"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscribeNow",

  data() {
    return {
      Letter: "/Letter.png", // Ensure the path is correct
    };
  },
};
</script>
