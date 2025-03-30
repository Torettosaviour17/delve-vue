<template>
  <div class="text-white w-full bg-[#481478] pt-20">
    <div class="flex w-full">
      <div class="p-6 pl-14 pt-1 rounded-lg text-center w-[25%]">
        <div class="flex flex-col items-center">
          <img :src="footerlogo" alt="Delve Logo" class="" />
        </div>
        <div class="flex gap-4 mt-4">
          <button
            class="bg-[#8324DB] text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md"
          >
            <font-awesome-icon :icon="['fab', 'google-play']" class="text-xl" />
            Download
          </button>
          <button
            class="bg-[#8324DB] text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md"
          >
            <font-awesome-icon :icon="['fab', 'apple']" class="text-xl" />
            Download
          </button>
        </div>
      </div>

      <div
        class="max-w-6xl text-white mx-auto grid grid-cols-10 gap- pt-8 w-[50%]"
      >
        <div class="col-start-2 col-end-3">
          <h3
            class="font-sans font-semibold text-[16px] leading-[100%] mb-[20px]"
          >
            About
          </h3>
          <ul>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              Courses
            </li>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              Quests
            </li>
          </ul>
        </div>
        <div class="col-start-3 col-end-6">
          <h3
            class="font-sans font-semibold text-[16px] leading-[100%] mb-[20px]"
          >
            Help and Support
          </h3>
          <ul>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              Delve FAQs
            </li>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              School FAQs
            </li>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              Disclosure
            </li>
          </ul>
        </div>
        <div class="col-start-6 col-end-9">
          <h3
            class="font-sans font-semibold text-[16px] leading-[100%] mb-[20px]"
          >
            Privacy and Terms
          </h3>
          <ul>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              Community Guidelines
            </li>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              Terms
            </li>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              Privacy
            </li>
          </ul>
        </div>
        <div class="col-start-9 col-end-11">
          <h3
            class="font-sans font-semibold text-[16px] leading-[100%] mb-[20px]"
          >
            Contact Us
          </h3>
          <ul>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              +234 912 296 4215
            </li>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              +234 803 371 5532
            </li>
            <li
              class="font-sans font-normal text-[14px] leading-[100%] mb-[20px]"
            >
              hello@delve.fun
            </li>
          </ul>
        </div>
      </div>

      <div class="p-6 pt-0 rounded-lg max-w-md mx-auto w-[23%] hidden md:block">
        <label
          for="email"
          class="block font-sans font-bold text-[16px] leading-[100%] text-white mb-3"
        >
          STAY UP TO DATE
        </label>

        <input
          type="email"
          id="email"
          placeholder="enter your email here"
          class="w-full rounded-[10px] border-[0.5px] border-gray-300 p-[12px_11px] text-gray-800 mb-4"
        />

        <div class="flex items-end justify-end">
          <button
            class="bg-[#8324DB] text-white font-sans font-semibold text-[16px] px-[24px] py-[10px] rounded-[10px] shadow-md"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center w-full">
      <div class="border-t border-white mt-16 mb-8 w-[92%]"></div>
    </div>
    <div
      class="container mx-auto md:flex justify-between items-center px-4 text-center"
    >
      <!-- Social Icons -->
      <div class="md:flex space-x-4 hidden">
        <font-awesome-icon
          :icon="['fab', 'tiktok']"
          class="text-white text-xl"
        />
        <font-awesome-icon
          :icon="['fab', 'x-twitter']"
          class="text-white text-xl"
        />
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="text-white text-xl"
        />
        <font-awesome-icon
          :icon="['fab', 'facebook-f']"
          class="text-white text-xl"
        />
        <font-awesome-icon
          :icon="['fab', 'linkedin-in']"
          class="text-white text-xl"
        />
      </div>

      <!-- Copyright Text -->
      <p class="text-sm">&copy; 2025 Delve. All rights reserved.</p>
    </div>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGooglePlay,
  faApple,
  faTiktok,
  faXTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import footerlogo from "../../../public/footerlogo.png";

// Add icons to the library
library.add(
  faGooglePlay,
  faApple,
  faTiktok,
  faXTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn
);

export default {
  name: "footer",

  data() {
    return {
      footerlogo,
    };
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
