<template>
  <div class="p-fluid" @submit="submitClickCallback">
    <div class="p-field">
      <label for="companyName">Company name</label>
      <InputText id="companyName" type="text" @change="companyNameCallback"/>
    </div>
    <div class="p-field">
      <label for="addressName">Street name</label>
      <InputText id="addressName" type="text" @change="addressNameCallback"/>
    </div>
    <div class="p-field">
      <label for="addressNumber">Street number</label>
      <InputText id="addressNumber" type="number" min="1" @change="addressNumberCallback"/>
    </div>
    <div class="p-field">
      <label for="contactFirstname">Firstname</label>
      <InputText id="contactFirstname" type="text" @change="contactFirstnameCallback"/>
    </div>
    <div class="p-field">
      <label for="contactLastname">Lastname</label>
      <InputText id="contactLastname" type="text" @change="contactLastnameCallback"/>
    </div>
    <div class="p-field">
      <label for="contactEmail">Email</label>
      <InputText id="contactEmail" type="text" @change="contactEmailCallback"/>
    </div>
    <div class="p-field">
      <label for="contactPhone">Phone number</label>
      <InputText id="contactPhone" type="text" @change="contactPhoneCallback"/>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
//import InputNumber from "primevue/inputnumber";

export default {
  name: "filter-contacts",
  components: {
    InputText,
    //InputNumber
  },
  
  props: {
    companyNameCallback: {
      type: Function,
      required: true,
    },
    addressNameCallback: {
      type: Function,
      required: true,
    },
    addressNumberCallback: {
      type: Function,
      required: true,
    },
    contactFirstnameCallback: {
      type: Function,
      required: true,
    },
    contactLastnameCallback: {
      type: Function,
      required: true,
    },
    contactPhoneCallback: {
      type: Function,
      required: true,
    },
    contactEmailCallback: {
      type: Function,
      required: true,
    },
  },
};
</script>