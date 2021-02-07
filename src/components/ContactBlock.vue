<template>
    <div>
        {{contact.name}}
        {{contact['addresses'][0]['streetName']}}
        
    </div>
</template>

<script>
  export default {
    name: 'contact-block',
    props: {
      contact: {
        type: Object,
        required: true,
      },
    },
  }
</script>
