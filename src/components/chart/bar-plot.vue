<template>
  <div :id="id" class="chart-container"/>
</template>
<script>
import * as d3 from "d3";

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      default: []
    },
    xAxis: {
      type: String,
      required: true
    },
    yAxis: {
      type: String,
      required: true
    }
  },
  watch: {
    data(newVal, oldVal) {
      this.draw();
    }
  },
  mounted() {
  },
  methods: {
    draw() {
      const vm = this;
      if (vm.data.length === 0) {
        return;
      } else {
        const margin = { top: 10, right: 30, bottom: 90, left: 40 },
          width = 600 - margin.left - margin.right,
          height = 450 - margin.top - margin.bottom;
        const maxDomain = vm.data.map(row => row[vm.yAxis]);
        const chartDiv = document.getElementById(vm.id);
        const svg = d3
          .select(chartDiv)
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + 100 + "," + margin.top + ")");

        var x = d3
          .scaleBand()
          .range([0, width])
          .domain(
            vm.data.map(function(d) {
              return d[vm.xAxis];
            })
          )
          .padding(0.2);
        svg
          .append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x))
          .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

        var y = d3
          .scaleLinear()
          .domain([maxDomain[maxDomain.length - 1], maxDomain[0]])
          .range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));
        svg
          .selectAll("bar")
          .data(vm.data)
          .enter()
          .append("rect")
          .attr("x", function(d) {
            return x(d[vm.xAxis]);
          })
          .attr("width", x.bandwidth())
          .attr("fill", "#69b3a2")
          // no bar at the beginning thus:
          .attr("height", function(d) {
            return height - y(d[vm.yAxis]);
          }) // always equal to 0
          .attr("y", function(d) {
            return y(d[vm.yAxis]);
          });
      }
    },
  },
};
</script>
<style scoped>
  .chart-container {
    width: 100%;
  }
</style>
