<template>
  <div style="height: 80vh; width: 100%; margin-top: 20px">
    <LMap ref="map" :zoom="zoom" :center="[-23.0330257, -46.9717131]" :use-global-leaflet="false">
      <LTileLayer
        url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
        layer-type="base"
        name="GoogleHybrid"
        :subdomains="['mt0', 'mt1', 'mt2', 'mt3']"
      />
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap" />
      <LControlLayers />

      <LMarker v-for="obra of acervoPublic" :lat-lng="{ lat: obra.lat, lng: obra.lng }">
        <LIcon :icon-url="markerIcon" :icon-anchor="[12, 41]" :popup-anchor="[1, -34]" />
        <LPopup>
          {{ obra.nome }} <br />
          {{ obra.data }}
          <a v-for="image in obra.Images" href="#" @click.prevent="openLightbox(image)">
            <img :src="image" alt="" />
          </a>
        </LPopup>
      </LMarker>
    </LMap>
    <Teleport to="body">
      <div v-if="lightboxOpen" class="custom-lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <button class="close-button" @click="closeLightbox">&times;</button>
          <img :src="currentImage" alt="Lightbox image" class="lightbox-image" />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import markerIcon from '@/assets/marker-icon-logo.png'
const zoom = ref(11)

// Lightbox state
const lightboxOpen = ref(false)
const currentImage = ref('')

// Lightbox methods
const openLightbox = (imageUrl) => {
  currentImage.value = imageUrl
  lightboxOpen.value = true
  // Prevent body scrolling when lightbox is open
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  // Restore body scrolling
  document.body.style.overflow = 'auto'
}

import acervo from '../assets/acervo.json'
const acervoPublic = computed(() => {
  return acervo.filter((record) => record.Public === true)
})
// console.log('acervo', acervo)
</script>

<style>
.leaflet-popup-content {
  width: 300px;
}

.popup-thumbnail {
  max-width: 100px;
  cursor: pointer;
  transition: transform 0.2s;
}

.popup-thumbnail:hover {
  transform: scale(1.05);
}

/* Lightbox styles */
.custom-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border: 2px solid white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button:hover {
  color: #ccc;
}
</style>
