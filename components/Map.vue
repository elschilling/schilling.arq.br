<template>
  <div style="height: 80vh; width: 100%; margin-top: 20px">
    <LMap ref="map" :zoom="zoom" :center="[-23.0330257, -46.9717131]" :use-global-leaflet="false">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap" />
      <LMarker v-for="obra of acervoPublic" :lat-lng="{ lat: obra.lat, lng: obra.lng }">
        <LPopup>
          {{ obra.nome }} <br />
          {{ obra.data }}
          <img :src="obra.Images" alt="" />
        </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const zoom = ref(12)

import acervo from '../assets/acervo.json'
const acervoPublic = computed(() => {
  return acervo.filter((record) => record.Public === true)
})
console.log('acervo', acervo)
</script>

<style>
.leaflet-popup-content {
  width: 300px;
}
</style>
