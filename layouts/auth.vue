<template>
  <div class="bg-primary">
    <div
      class="container mx-auto max-w-xl relative h-screen flex justify-center flex-col"
    >
      <Nuxt />
      <copy-right />
    </div>
  </div>
</template>

<script>
import CopyRight from '~/components/general/CopyRight'
export default {
  name: 'auth',
  middleware: 'auth',
  auth: 'guest',
  components: { CopyRight },
}
</script>
