<template>
  <Container>
    <Title :msg="`World Population Visualization`"></Title>
    <BarPlot
      :id="`bar001`"
      :data="getTopSummaryByCountry"
      :xAxis="`country`"
      :yAxis="`population`"
    />
  </Container>
</template>
<script>
import Title from '../components/text/title.vue';
import Container from '../components/layout/container.vue';
import BarPlot from '../components/chart/bar-plot.vue';
import csvData from '../dataset/population.json';

export default {
  components: {
    Title,
    Container,
    BarPlot,
  },
  data() {
    return {
      csvData: [],
    };
  },
  computed: {
    getTopSummaryByCountry() {
      const { csvData: data } = this;
      const resultRow = data.sort(
        (curr, prev) => prev.population - curr.population,
      );
      resultRow.splice(10, resultRow.length - 10 + 1);
      return data;
    },
  },
  mounted() {
    this.csvData = csvData.map(row => ({
      ...row,
      population: +row.population,
    }));
  },
};
</script>
