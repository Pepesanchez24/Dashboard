<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content class="mako-menu-background">
          <ion-list id="inbox-list">
            <ion-list-header class="mako-menu-header">
              <span class="mako-logo">FORO FINAL FANTASY</span>
            </ion-list-header>
            
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item 
                @click="selectedIndex = i" 
                router-direction="root" 
                :router-link="p.url" 
                lines="none" 
                detail="false" 
                class="mako-menu-item"
                :class="{ 'mako-menu-item-active': selectedIndex === i }">
                <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon" class="mako-menu-icon"></ion-icon>
                <ion-label class="mako-menu-label">{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script>
import { 
  IonApp, 
  IonContent, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonListHeader, 
  IonMenu, 
  IonMenuToggle, 
  IonNote, 
  IonRouterOutlet, 
  IonSplitPane 
} from '@ionic/vue';
import { ref } from 'vue';
import { 
  homeOutline, 
  homeSharp, 
  barChartOutline, 
  barChartSharp, 
  codeSlashOutline, 
  codeSlashSharp, 
  analyticsOutline, 
  analyticsSharp 
} from 'ionicons/icons';

export default {
  name: 'App',
  components: {
    IonApp, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader, 
    IonMenu, 
    IonMenuToggle, 
    IonNote, 
    IonRouterOutlet, 
    IonSplitPane
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: 'Resumen',
        url: '/home',
        iosIcon: homeOutline,
        mdIcon: homeSharp
      },
      {
        title: 'Métricas de Negocio',
        url: '/business',
        iosIcon: barChartOutline,
        mdIcon: barChartSharp
      },
      {
        title: 'Métricas Técnicas',
        url: '/technical',
        iosIcon: codeSlashOutline,
        mdIcon: codeSlashSharp
      },
      {
        title: 'Análisis Completo',
        url: '/analytics',
        iosIcon: analyticsOutline,
        mdIcon: analyticsSharp
      }
    ];
    
    return {
      selectedIndex,
      appPages
    }
  }
};
</script>

<style scoped>
/* Estilo Mako FFVII para el menú */
.mako-menu-background {
  --background: linear-gradient(160deg, var(--ff-mako-dark) 0%, #00264d 100%);
  color: var(--ff-mako-steel);
}

.mako-menu-header {
  background: rgba(0, 40, 80, 0.8);
  padding: 20px 16px 10px;
  border-bottom: 1px solid rgba(0, 162, 224, 0.3);
}

.mako-logo {
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ff-mako-gold);
  display: block;
  margin-bottom: 4px;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(0, 162, 224, 0.5);
}

.mako-subtitle {
  color: var(--ff-mako-accent);
  font-family: 'Cormorant', serif;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

#inbox-list {
  background: transparent;
  padding-top: 0;
}

.mako-menu-item {
  --background: transparent;
  --color: var(--ff-mako-steel);
  --padding-start: 20px;
  --inner-padding-end: 20px;
  margin: 6px 0;
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
}

.mako-menu-item-active {
  --background: rgba(0, 162, 224, 0.1);
  --color: white;
  border-left-color: var(--ff-mako-accent);
}

.mako-menu-icon {
  color: var(--ff-mako-core);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.mako-menu-item-active .mako-menu-icon {
  color: var(--ff-mako-accent);
  transform: scale(1.1);
}

.mako-menu-label {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.mako-menu-item:hover:not(.mako-menu-item-active) {
  --background: rgba(0, 162, 224, 0.05);
  border-left-color: var(--ff-mako-core);
}

/* Efecto de brillo para el ítem activo */
.mako-menu-item-active::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: var(--ff-mako-core);
  box-shadow: 0 0 10px var(--ff-mako-core);
}

/* Scrollbar estilo Mako */
ion-content::part(scroll) {
  scrollbar-width: thin;
  scrollbar-color: var(--ff-mako-core) var(--ff-mako-dark);
}
</style>