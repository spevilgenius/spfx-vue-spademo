<template>
  <div id="SPADemo">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

export interface ISpaDemoWebPartProps {
    description: string;
}

@Component
export default class SpaDemoWebPart extends Vue implements ISpaDemoWebPartProps {

    @Prop()
    public description: string;

}
</script>

<style lang="scss" module>

</style>