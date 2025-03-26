<template>
  <div class="w-full pt-10 p-10 md:pr-24 md:pb-6 md:pl-24">
    <div class="flex items-center justify-center">
      <h1
        class="font-normal text-[16px] leading-[24px] text-center p-[10px] mb-6 border-[2px] rounded-[21px] shadow-lg"
      >
        Our Features
      </h1>
    </div>
    <div
      class="flex flex-col-reverse md:flex-row w-full space-y-6 md:space-x-20 justify-between"
    >
      <div class="w-full md:w-[50%] space-y-6 text-center md:text-left">
        <h1 class="font-bold text-[48px] leading-[120%]">
          What we have to offer
        </h1>
        <p
          class="font-medium text-[18px] leading-[150%] md:pr-32 text-[#615F5F]"
        >
          Access your quests, participate in challenges, and keep up with your
          learning right from your mobile device.
        </p>

        <div class="w-full flex items-center justify-center p-5">
          <img :src="featureimg" alt="featureimg" />
        </div>
      </div>
      <div class="pb-16 w-full md:w-[50%] space-y-6 mt-16">
        <!-- Word Matching Section -->
        <div
          class="bg-[#F4EDF6] rounded-[19.84px] p-6 flex items-start space-x-4"
        >
          <img
            :src="puzzle"
            alt="🧩"
            class="w-[50px] h-[50px] p-2 rounded-full bg-[#D5B5F3]"
          />
          <div>
            <h1 class="font-inter font-semibold text-[24px] leading-[140%]">
              Word matching
            </h1>
            <p class="text-[18px] leading-[150%] text-[#615F5F] font-normal">
              Pairing words with their correct meanings, synonyms, or
              translations.
            </p>
          </div>
        </div>

        <!-- Quest-Based Learning Section -->
        <div
          class="bg-[#F4EDF6] rounded-[19.84px] p-6 flex items-start space-x-4"
        >
          <img
            :src="questImg"
            alt="quest"
            class="w-[50px] h-[50px] p-2 rounded-full bg-[#D5B5F3]"
          />
          <div>
            <h1 class="font-inter font-semibold text-[24px] leading-[140%]">
              Quest-Based Learning
            </h1>
            <p class="text-[18px] leading-[150%] text-[#615F5F] font-normal">
              Complete real-life challenges like booking a hotel to improve
              fluency.
            </p>
          </div>
        </div>

        <!-- Voice Training Section -->
        <div
          class="bg-[#F4EDF6] rounded-[19.84px] p-6 flex items-start space-x-4"
        >
          <img
            :src="voiceImg"
            alt="voice"
            class="w-[50px] h-[50px] p-2 rounded-full bg-[#D5B5F3]"
          />
          <div>
            <h1 class="font-inter font-semibold text-[24px] leading-[140%]">
              Voice Training
            </h1>
            <p class="text-[18px] leading-[150%] text-[#615F5F] font-normal">
              Speak like a native in no time with our voice training exercises.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurFeature",
  data() {
    return {
      featureimg: "/featureimg.png",
      puzzle: "/puzzle.png",
      questImg: "/quest.png",
      voiceImg: "/voiceImg.png",
    };
  },
};
</script>
