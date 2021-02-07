<template>
    {{currentPage}}
    {{pageCount}}
    <button
        :disabled="currentPage===1"
        @click="pageClickCallback(currentPage-1)"
        >Previous</button>
    <button
        :disabled="currentPage===pageCount"
        @click="pageClickCallback(currentPage+1)"
        >Next</button>
</template>

<script>
  export default {
    name: 'pagination',
    props: {
      currentPage: {
        type: Number,
        required: true,
        default:1
      },
      pageCount: {
        type: Number,
        required: true,
      },
      pageClickCallback: {
        type: Function,
        required: true,
      },
    },
  }
</script>