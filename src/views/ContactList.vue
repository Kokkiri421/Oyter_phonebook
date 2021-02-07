<template>
  <div v-if="error">500 API ERROR</div>
  <div v-else class="p-grid">
    <div class="p-col-2 contact-filter">
      <filter-contacts
        v-bind:companyNameCallback="companyNameChanged"
        v-bind:addressNameCallback="addressNameChanged"
        v-bind:addressNumberCallback="addressNumberChanged"
        v-bind:contactFirstnameCallback="contactFirstnameChanged"
        v-bind:contactLastnameCallback="contactLastnameChanged"
        v-bind:contactPhoneCallback="contactPhoneChanged"
        v-bind:contactEmailCallback="contactEmailChanged"
      />
    </div>
    <div class="p-col contact-list">
      <DataTable :value="contacts" class="data-table">
        <Column field="name" header="Name"></Column>
        <Column field="address" header="Address"></Column>
        <Column
          field="email"
          header="Email"
        ></Column>
        <Column field="phone" header="Phone"></Column>
      </DataTable>
      <div class="paginator">
        <Paginator 
        :rows="10"
        :first="0"
        :totalRecords="elementCount"
        :rowsPerPageOptions="[10, 20, 30]"
        @page="onPage($event)"
      ></Paginator>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FilterContacts from "@/components/FilterContacts.vue";
import Paginator from "primevue/paginator";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "contact-list",
  components: {
    FilterContacts,
    Paginator,
    DataTable,
    Column,
  },
  data() {
    return {
      currentPage: 0,
      itemsPerPage: 10,
      companyName: "",
      addressName: "",
      addressNumber: 0,
      contactFirstname: "",
      contactLastname: "",
      contactPhone: "",
      contactEmail: "",
    };
  },

  created() {
    this.$store.dispatch("fetchContacts", {
      page: this.currentPage,
      size: this.itemsPerPage,
    });
  },

  computed: {
    contacts() {
      let contacts = this.$store.getters["getContacts"];

      if (this.companyName) {
        contacts = contacts.filter((contact) =>
          contact["name"]===(this.companyName)
        );
      }

      if (this.addressName) {
        contacts = contacts.filter((contact) => {
          const addresses = contact["addresses"].map(
            (address) => address["streetName"]
          );
          return addresses.includes(this.addressName);
        }); 
      }

      if (this.addressNumber) {
        console.log("number");
        contacts = contacts.filter((contact) => {
          const addresses = contact["addresses"].map(
            (address) => address["streetNumber"]
          );
          return addresses.includes(Number(this.addressNumber));
        });
      }

      if (this.contactFirstname) {
        contacts = contacts.filter((contact) => {
          const clients = contact["contacts"].map(
            (client) => client["name"]
          );
          return clients.includes(this.contactFirstname);
        });
      }

      if (this.contactLastname) {
        contacts = contacts.filter((contact) => {
          const clients = contact["contacts"].map(
            (client) => client["surname"]
          );
          return clients.includes(this.contactLastname);
        });
      }

      

      if (this.contactEmail) {
        contacts = contacts.filter((contact) => {
          const clients = contact["contacts"].map(
            (client) => client["emails"]
          );
          return clients.filter((client) => client.includes(this.contactEmail)
          ).length
            ? true
            : false;
        });
      }

      if (this.contactPhone) {
        contacts = contacts.filter((contact) => {
          const clients = contact["contacts"].map(
            (client) => client["phones"]
          );
          return clients.filter((client) => client.includes(this.contactPhone)
          ).length
            ? true
            : false;
        });
      }

      contacts = contacts.map((contact) => {
        return {
          name: contact["name"],
          address: `${contact["addresses"][0]["streetName"]} ${contact["addresses"][0]["streetNumber"]}`,
          email: contact["contacts"][0]["emails"][0],
          phone: contact["contacts"][0]["phones"][0],
        };
      });
      return contacts;
    },

    elementCount() {
      return this.$store.state.elementCount;
    },
    error() {
      return this.$store.state.error;
    },
  },

  methods: {
    onPage(e) {
      this.currentPage = e.page;
      this.itemsPerPage = e.rows;
    },
    companyNameChanged(company) {
      this.companyName = company.target.value;
    },
    addressNameChanged(address) {
      this.addressName = address.target.value;
    },
    addressNumberChanged(address) {
      this.addressNumber = address.target.value;
    },
    contactFirstnameChanged(contact) {
      this.contactFirstname = contact.target.value;
    },
    contactLastnameChanged(contact) {
      this.contactLastname = contact.target.value;
    },
    contactPhoneChanged(contact) {
      this.contactPhone = contact.target.value;
    },
    contactEmailChanged(contact) {
      this.contactEmail = contact.target.value;
    },
  },

  watch: {
    currentPage(newCurrentPage) {
      this.currentPage = newCurrentPage;
      this.$store.dispatch("fetchContacts", {
        page: this.currentPage,
        size: this.itemsPerPage,
      });
    },
    itemsPerPage(newItemsPerPage) {
      this.itemsPerPage = newItemsPerPage;
      this.$store.dispatch("fetchContacts", {
        page: this.currentPage,
        size: this.itemsPerPage,
      });
    },
  },
};
</script>
