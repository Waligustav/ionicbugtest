<template>
  <base-layout page-title="Test page 1">
    <ion-list>
      <ion-item><h4>Welcome to the test page</h4></ion-item>
      <ion-item router-link="/firstPage/1">router-link to test page 2</ion-item>
      <ion-item @click="navigate()">@click function to test page 2</ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";

export default {
  components: {
    IonList,
    IonItem,
  },
  methods: {
    navigate() {
      this.$router.push("/firstPage/1");
    },
  },
};
</script>
