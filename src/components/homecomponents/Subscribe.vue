<template>
  <div
    class="w-full h-screen bg-[#F9F9F9] mt-16 flex items-center justify-center"
  >
    <div
      class="w-[80%] h-[75%] border border-2-black rounded-[16px] p-[40px] flex justify-between bg-white shadow-lg"
    >
      <div class="w-[68%] space-y-16">
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
            class="font-sans font-semibold text-[18px]  leading-[28px] tracking-[0%]"
          >
            Email Address
          </label>

          <div class="w-full pt-7 flex justify-between items-center">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-[70%] border border-gray-300 rounded-[10px] p-[14px_16px] gap-[8px] placeholder-gray-400"
            />
            <button
              class="bg-[#8324DB] text-white font-sans font-semibold text-[16px] leading-[24px] tracking-[0%] rounded-[9px] border-b-[1px] px-[24px] py-[12px] gap-[6px]"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div class="w-[35%] h-full flex justify-center items-center relative">
        <img :src="Letter" alt="Ammunition" class="w-[200px] h-[200px]" />

        <!-- Ammunition wave effects, positioned over the image -->
        <div
          class="absolute w-[120px] h-[120px] bg-purple-500/60 rounded-full animate-wave"
          style="top: 36%; left: 33%; transform: translate(-50%, -50%)"
        ></div>
        <div
          class="absolute w-[120px] h-[120px] bg-purple-500/60 rounded-full animate-wave2"
          style="top: 36%; left: 33%; transform: translate(-50%, -50%)"
        ></div>
        <div
          class="absolute w-[120px] h-[120px] bg-purple-500/60 rounded-full animate-wave3"
          style="top: 36%; left: 33%; transform: translate(-50%, -50%)"
        ></div>
        <div
          class="absolute w-[120px] h-[120px] bg-purple-500/60 rounded-full animate-wave4"
          style="top: 36%; left: 33%; transform: translate(-50%, -50%)"
        ></div>
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
