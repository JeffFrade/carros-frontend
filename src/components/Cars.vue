<template>
  <div class="hello">
    <b-row>
      <h1 class="text-center">Cars</h1>
      <hr/>
      <b-table striped hover :items="cars" :per-page="perPage" :current-page="currentPage"></b-table>
    </b-row>

    <b-row>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
    ></b-pagination>
    </b-row>
  </div>
</template>

<script>
  import Api from '@/services/api';

  export default {
    data () {
      return {
        cars: [],
        currentPage: null,
        rows: null,
        perPage: null
      }
    },

    created () {
      Api.getAllCars(cars => {
        this.cars = cars.data
        this.currentPage = 1;
        this.rows = cars.data.length;
        this.perPage = 15
      })
    }
  }
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
