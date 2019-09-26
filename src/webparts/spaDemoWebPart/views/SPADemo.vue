<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main role="main" id="maincontainer">
      WOOHOO This is a body!
    </main>
    <footer class="footer">
      <!-- <Footer /> -->
      Yes sir what a FOOTER!!
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '../components/Navbar.vue'
// import Footer from '../components/Footer'

@Component({
  components: {
    Navbar
  } 
}) 
export default class SPADemo extends Vue {
    
}

</script>

<style lang="scss" module>

</style>