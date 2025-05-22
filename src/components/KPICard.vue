<template>
  <ion-card class="ff-card crystal-metric">
    <ion-card-header>
      <ion-card-subtitle>{{ subtitle }}</ion-card-subtitle>
      <ion-card-title>{{ title }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="crystal-value">{{ value }}</div>
      <div :class="['crystal-change', changeClass]" v-if="change">
        {{ changePrefix }}{{ change }}
      </div>
      <div class="crystal-icon">
        <ion-icon :icon="icon" />
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/vue';

export default {
  name: 'CrystalMetric',
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon
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
    value: {
      type: [String, Number],
      required: true
    },
    change: {
      type: [String, Number],
      default: null
    },
    positive: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'diamond-outline'
    }
  },
  computed: {
    changeClass() {
      return this.positive ? 'positive' : 'negative';
    },
    changePrefix() {
      return this.positive ? '+' : '';
    }
  }
}
</script>

<style scoped>
.crystal-metric {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.crystal-metric:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.crystal-value {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--ff-dark-blue);
  font-family: 'Cinzel', serif;
}

.crystal-change {
  font-size: 14px;
  font-family: 'Cormorant', serif;
  font-style: italic;
}

.crystal-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  opacity: 0.2;
}

.crystal-icon ion-icon {
  font-size: 36px;
  color: var(--ff-crystal-blue);
}

.positive {
  color: var(--ff-green);
}

.negative {
  color: var(--ff-red);
}
</style>