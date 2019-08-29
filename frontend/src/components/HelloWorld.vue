<template>
  <div>
    <ul>
      <li v-for="car in cars">id = {{ car.id }}, car = {{ car.name | leftPad}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "HelloWorld",
    data() {
      return {
        cars: []
      };
    },
    async mounted() {
      try {
        var result = await axios({
          method: "POST",
          url: "http://localhost:8080/graphql",
          data: {
            query: `
                      {
                        cars {
                          id
                          name
                        }
                      }
                  `
          }
        });
        this.cars = result.data.data.cars;
      } catch (error) {
        console.error(error);
      }
    }
  }
</script>
<style>
li {
  text-align: left;
}
</style>