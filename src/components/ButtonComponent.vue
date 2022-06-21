<template>
  <div class="flex">
    <button class="bg-white px-4 px-4 border-2 border-primary-normal mx-4">
      <div class="flex">
        <div>
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 8.75L1.75 5L5.5 1.25"
              stroke="#2183F7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="-mt-2">>Button</div>
      </div>
    </button>
    <button
      class="bg-primary-normal px-4 px-4 border-2 border-primary-normal mx-4"
    >
      <div class="flex">
        <div class="-mt-2">Button</div>
        <div>
          <svg
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.25L5.25 5L1.5 8.75"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  name: "buttonComponent",
  components: {},
  setup() {},
};
</script>
