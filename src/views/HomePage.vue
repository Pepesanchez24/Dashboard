<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button class="mako-button"></ion-menu-button>
        </ion-buttons>
        <ion-title class="neon-text">RESUMEN DE FORO FINAL FANTASY</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="neon-text">RESUMEN DE FORO FINAL FANTASY</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div id="container">
        <div class="welcome-card">
          <h1 class="ff-title">BIENVENIDO AL DASHBOARD DE FORO FINAL FANTASY</h1>
          <p>Este dashboard proporciona métricas clave sobre el rendimiento de nuestra plataforma social.</p>
          
          <ion-card class="ff-card mako-glow">
            <ion-card-header>
              <ion-card-subtitle>RESUMEN GENERAL</ion-card-subtitle>
              <ion-card-title>MÉTRICAS CLAVE</ion-card-title>
            </ion-card-header>
            
            <ion-card-content>
              <div class="metrics-grid">
                <div class="metric-item" v-for="metric in metrics" :key="metric.label">
                  <div class="metric-value">{{ metric.value }}</div>
                  <div class="metric-label">{{ metric.label }}</div>
                </div>
              </div>
            </ion-card-content>
          </ion-card>
          
          <ion-grid>
            <ion-row>
              <ion-col size="12" size-md="6">
                <ion-card class="ff-card">
                  <ion-card-header>
                    <ion-card-subtitle>DASHBOARD DE NEGOCIO</ion-card-subtitle>
                    <ion-card-title>MÉTRICAS PRINCIPALES</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-list>
                      <ion-item v-for="item in businessMetrics" :key="item.label">
                        <ion-icon :name="item.icon" slot="start"></ion-icon>
                        <ion-label>{{ item.label }}</ion-label>
                      </ion-item>
                    </ion-list>
                  </ion-card-content>
                </ion-card>
              </ion-col>
              
              <ion-col size="12" size-md="6">
                <ion-card class="ff-card">
                  <ion-card-header>
                    <ion-card-subtitle>DASHBOARD TÉCNICO</ion-card-subtitle>
                    <ion-card-title>MÉTRICAS PRINCIPALES</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-list>
                      <ion-item v-for="item in techMetrics" :key="item.label">
                        <ion-icon :name="item.icon" slot="start"></ion-icon>
                        <ion-label>{{ item.label }}</ion-label>
                      </ion-item>
                    </ion-list>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonButtons, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenuButton, 
  IonPage, 
  IonRow, 
  IonTitle, 
  IonToolbar 
} from '@ionic/vue';
import { ref } from 'vue';

export default {
  name: 'HomePage',
  components: {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
  },
  setup() {
    const metrics = ref([
      { value: 12483, label: 'Usuarios Activos' },
      { value: 3567, label: 'Publicaciones Hoy' },
      { value: '99.8%', label: 'Disponibilidad' },
      { value: 24579, label: 'Interacciones Hoy' }
    ]);

    const businessMetrics = ref([
      { icon: 'trending-up-outline', label: 'Crecimiento de Usuarios' },
      { icon: 'chatbubble-outline', label: 'Actividad de Publicaciones' },
      { icon: 'people-outline', label: 'Demografía de Usuarios' },
      { icon: 'globe-outline', label: 'Distribución Geográfica' },
      { icon: 'timer-outline', label: 'Tiempo de Sesión' }
    ]);

    const techMetrics = ref([
      { icon: 'speedometer-outline', label: 'Rendimiento de la Aplicación' },
      { icon: 'server-outline', label: 'Salud del Servidor' },
      { icon: 'code-slash-outline', label: 'Uso de la API' },
      { icon: 'bug-outline', label: 'Seguimiento de Errores' },
      { icon: 'analytics-outline', label: 'Uso de Recursos' }
    ]);
    
    return {
      metrics,
      businessMetrics,
      techMetrics
    };
  }
};
</script>

<style scoped>
/* Asegúrate de que estas variables coincidan con tu theme */
:root {
  --ff-mako-core: #00a2e0;
  --ff-mako-dark: #003366;
  --ff-mako-light: #66ccff;
  --ff-mako-accent: #00ff99;
  --ff-mako-gold: #ffcc00;
  --ff-mako-steel: #c0c0c0;
}

#container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-card {
  margin-bottom: 30px;
}

h1 {
  color: var(--ff-mako-light);
  font-weight: 700;
  margin-bottom: 8px;
}

p {
  color: var(--ff-mako-steel);
  font-size: 1.05rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

/* IonCard styling */
ion-card {
  background: linear-gradient(145deg, var(--ff-mako-dark), #001a33);
  border-radius: 16px;
  box-shadow: 0 8px 15px rgba(0, 162, 224, 0.3);
  border: 1px solid var(--ff-mako-core);
  color: var(--ff-mako-steel);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

ion-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 162, 224, 0.6);
}

ion-card-header {
  padding: 18px 24px;
  border-bottom: 1px solid var(--ff-mako-core);
  color: var(--ff-mako-light);
}

ion-card-subtitle {
  font-weight: 600;
  color: var(--ff-mako-accent);
  font-size: 0.9rem;
  margin-bottom: 5px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

ion-card-title {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: var(--ff-mako-light);
}

ion-card-content {
  padding: 18px 24px;
  color: var(--ff-mako-steel);
}

/* Metrics grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (min-width: 768px) {
  .metrics-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.metric-item {
  background: rgba(0, 51, 102, 0.7);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--ff-mako-core);
  box-shadow: inset 0 0 10px rgba(0, 162, 224, 0.3);
  transition: all 0.3s ease;
}

.metric-item:hover {
  background: rgba(0, 162, 224, 0.2);
}

.metric-value {
  font-size: 28px;
  font-weight: 700;
  color: var(--ff-mako-accent);
}

.metric-label {
  font-size: 14px;
  margin-top: 6px;
  color: var(--ff-mako-steel);
}

/* IonList & Items */
ion-list {
  background: transparent;
  padding: 0;
}

ion-item {
  --background: transparent;
  --color: var(--ff-mako-steel);
  border-bottom: 1px solid rgba(0, 162, 224, 0.3);
  transition: all 0.3s ease;
}

ion-item:hover {
  --background: rgba(0, 162, 224, 0.1);
  --color: white;
}

ion-icon {
  color: var(--ff-mako-accent);
}

/* Clases específicas del tema */
.ff-title {
  font-family: 'Cinzel', serif;
  color: var(--ff-mako-light);
  text-shadow: 0 0 8px var(--ff-mako-core);
  border-bottom: 2px solid var(--ff-mako-accent);
  display: inline-block;
  padding-bottom: 5px;
}

.neon-text {
  text-shadow: 0 0 5px var(--ff-mako-core),
               0 0 10px var(--ff-mako-core),
               0 0 20px var(--ff-mako-light);
}

.mako-button {
  --color: var(--ff-mako-gold);
}
</style>