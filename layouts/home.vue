<template>
  <div>
    <div
      class="fixed top-0 left-0 w-1/2 h-full bg-gray-100 dark:bg-gray-900"
      aria-hidden="true"
    ></div>
    <div
      class="fixed top-0 right-0 w-1/2 h-full bg-gray-100 dark:bg-gray-900"
      aria-hidden="true"
    ></div>
    <div class="relative min-h-screen flex flex-col">
      <site-header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {}
</script>
