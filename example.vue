<template>
  <v-map :zoom=14 :center="center">
    <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
    <v-editablecirclemarker :latLng.sync="ll" :rad="rad" :options="{icon:icon}"></v-editablecirclemarker>
  </v-map>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'
  import * as Vue2Leaflet from 'vue2-leaflet'
  import Vue2LeafletEditablecirclemarker from './Vue2LeafletEditablecirclemarker'
  import iconUrl from 'leaflet/dist/images/marker-icon.png'
  import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

  const x = -35.15;
  const y = -58.2;
  let llvar = Vue2Leaflet.L.latLng(x, y)

  @Component({
    components: {
      'v-map': Vue2Leaflet.LMap,
      'v-tilelayer': Vue2Leaflet.LTileLayer,
      'v-editablecirclemarker': Vue2LeafletEditablecirclemarker
    },
  })
  export default class Map extends Vue {
    icon = Vue2Leaflet.L.divIcon({
      className: 'markerAB markerA',
      popupAnchor: [0, -40]
    })
    center = Vue2Leaflet.L.latLng(x, y)
    rad = 200
    get ll() {
      return llvar
    }
    set ll(val) {
      console.log('setll', val)
      llvar = val
    }
    mounted () {
      setTimeout(()=>this.rad=1000, 3000)
    }
  }
</script>

<style>
  @import "~leaflet/dist/leaflet.css";
  html, body {
    height: 100%;
    margin: 0;
  }
</style>