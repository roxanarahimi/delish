<template>
  <div class="map-container mx-auto w-100 h-100 mb-3">
    <div class="map-marker-centered"></div>
    <l-map id="map" class="mx-auto map" style="height: 280px; width: 100%"
           @dragend="getCoords($event)" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <!--        <l-marker :lat-lng="markerLatLng"></l-marker>-->
    </l-map>
  </div>

</template>

<script>
import 'leaflet/dist/leaflet.css';
import {LMap, LTileLayer, LMarker, LGeoJson,} from "@vue-leaflet/vue-leaflet";

export default {
  name: "Map",
  components: {
    LGeoJson,
    LMap,
    LTileLayer,
    LMarker,

  },
  data() {
    return {
      flag: 0,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
          '&copy; <a target="_blank" href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [35.7049839, 51.4751094],
      // markerLatLng: [35.705523, 51.473405],


    };
  },
  methods: {
    getCoords(e) {
      console.log(e.target.getCenter())
    }}
}
</script>

<style scoped>

</style>