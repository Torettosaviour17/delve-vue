<script setup>
import { ref } from "vue";
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/solid";

// FAQ Data (stored in an array)
const faqs = ref([
  {
    question: "Is Delve available in flight mode?",
    answer:
      "Currently, Delve requires an internet connection to access all features.",
    isOpen: false,
  },
  {
    question: "Can I switch languages when I learn with Delve?",
    answer:
      "We offer a variety of languages, including Spanish, French, German, Japanese, and more. We continuously add new languages based on user demand.",
    isOpen: false,
  },
  {
    question: "Can I adjust my learning goals?",
    answer:
      "Yes! Delve allows you to customize your learning experience based on your schedule and goals.",
    isOpen: false,
  },
]);

// Toggle function to open one at a time
const toggleFAQ = (index) => {
  faqs.value.forEach((faq, i) => {
    faq.isOpen = i === index ? !faq.isOpen : false;
  });
};
</script>

<template>
  <div class="w-full h-auto pt-20 bg-[#F9F9F9] px-6 md:px-16 lg:px-20 pb-10">
    <div class="flex items-center justify-center">
      <h1
        class="font-normal text-[16px] leading-[24px] text-center p-[10px] mb-6 border-[2px] rounded-[21px] shadow-lg"
      >
        Our Features
      </h1>
    </div>

    <!-- Layout Wrapper -->
    <div class="flex flex-col md:flex-row w-full md:space-x-16">
      <!-- Left Section -->
      <div class="w-full md:w-[40%] text-left mb-10">
        <h1
          class="font-bold pt-6 md:pt-12 pb-4 text-[24px] md:text-[32px] leading-[120%]"
        >
          Got Questions About Delve?
        </h1>
        <p
          class="font-medium text-[16px] md:text-[18px] leading-[150%] text-[#615F5F]"
        >
          No worries, we’ve got you covered.
        </p>
      </div>

      <!-- Right Section (FAQs) -->
      <div class="w-full md:w-[60%] space-y-4 md:space-y-6">
        <div v-for="(faq, index) in faqs" :key="index">
          <!-- Question -->
          <div
            @click="toggleFAQ(index)"
            class="flex justify-between w-full items-center p-4 bg-[#FFFFFF] rounded-[12px] cursor-pointer"
          >
            <h5
              class="font-semibold text-[18px] md:text-[20px] leading-[32px] md:leading-[42px]"
            >
              {{ faq.question }}
            </h5>
            <component
              :is="faq.isOpen ? MinusIcon : PlusIcon"
              class="w-6 md:w-7 h-6 md:h-7 text-black cursor-pointer"
            />
          </div>

          <!-- Answer (only visible when open) -->
          <div v-if="faq.isOpen" class="p-4 bg-[#F3E9FB] rounded-[16px]">
            <p
              class="font-['Open_Sans'] font-normal text-[#555555] text-[14px] md:text-[16px] leading-[28px] md:leading-[32px]"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
