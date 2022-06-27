<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>A completely un-styled demo.</div>
  <br />
  <a href="https://storage.jgile.com/csv-sample.csv">Download Sample CSV</a>
  <br /><br />
  <vue-csv-import v-model="mappedCsv" :fields="fields">
    <vue-csv-toggle-headers></vue-csv-toggle-headers>
    <vue-csv-errors></vue-csv-errors>
    <div>
      <vue-csv-input></vue-csv-input>
    </div>
    <vue-csv-map></vue-csv-map>
  </vue-csv-import>
  <br /><br />
  <div>
    <pre>{{ mappedCsv }}</pre>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mappedCsv: null,
      fields: {
        name: { required: false, label: "Name" },
        age: { required: true, label: "Age" },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
