<template>
  <ion-card class="ff-card magic-chart">
    <ion-card-header>
      <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="chart-container" :id="chartId"></div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

export default {
  name: 'MagicChart',
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    chartId: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.magic-chart {
  transition: all 0.3s ease;
}

.magic-chart:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.chart-container {
  height: 350px;
  width: 100%;
  position: relative;
}

.chart-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--ff-crystal-light), transparent);
}
</style>