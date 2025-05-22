<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button class="mako-button"></ion-menu-button>
        </ion-buttons>
        <ion-title class="neon-text">ANÁLISIS COMPLETO</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="neon-text">ANÁLISIS COMPLETO</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div id="container">        
        <ion-segment value="business" @ionChange="segmentChanged" class="mako-segment">
          <ion-segment-button value="business">
            <ion-label>NEGOCIO</ion-label>
          </ion-segment-button>
          <ion-segment-button value="technical">
            <ion-label>TÉCNICO</ion-label>
          </ion-segment-button>
        </ion-segment>
        
        <div class="segment-content">
          <div v-if="currentSegment === 'business'">
            <ion-grid>
              <ion-row>
                <ion-col size="12" size-md="6" size-lg="3">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>USUARIOS</ion-card-subtitle>
                      <ion-card-title>5,248</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="metric-change positive">+12.5% desde el mes pasado</div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
                
                <ion-col size="12" size-md="6" size-lg="3">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>PUBLICACIONES</ion-card-subtitle>
                      <ion-card-title>98,245</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="metric-change positive">+8.3% desde el mes pasado</div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
                
                <ion-col size="12" size-md="6" size-lg="3">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>TASA DE INTERACCIÓN</ion-card-subtitle>
                      <ion-card-title>3.8%</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="metric-change positive">+0.5% desde el mes pasado</div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
                
                <ion-col size="12" size-md="6" size-lg="3">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>TIEMPO DE SESIÓN</ion-card-subtitle>
                      <ion-card-title>8.5 min</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="metric-change negative">-2.1% desde el mes pasado</div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
              
              <ion-row>
                <ion-col size="12">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>GRÁFICO PERSONALIZADO</ion-card-subtitle>
                      <ion-card-title>CANALES DE ADQUISICIÓN DE USUARIOS</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="chart-container">
                        <div id="customBusinessChart"></div>
                      </div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          
          <div v-if="currentSegment === 'technical'">
            <ion-grid>
              <ion-row>
                <ion-col size="12" size-md="6" size-lg="3">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>DISPONIBILIDAD</ion-card-subtitle>
                      <ion-card-title>99.98%</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="metric-change positive">+0.03% desde el mes pasado</div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
                
                <ion-col size="12" size-md="6" size-lg="3">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>TIEMPO DE RESPUESTA</ion-card-subtitle>
                      <ion-card-title>124ms</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="metric-change positive">-15ms desde el mes pasado</div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
                
                <ion-col size="12" size-md="6" size-lg="3">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>TASA DE ERROR</ion-card-subtitle>
                      <ion-card-title>0.42%</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="metric-change positive">-0.08% desde el mes pasado</div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
                
                <ion-col size="12" size-md="6" size-lg="3">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>LLAMADAS A LA API</ion-card-subtitle>
                      <ion-card-title>5.2M</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="metric-change positive">+18.3% desde el mes pasado</div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
              
              <ion-row>
                <ion-col size="12">
                  <ion-card class="ff-card">
                    <ion-card-header>
                      <ion-card-subtitle>GRÁFICO PERSONALIZADO</ion-card-subtitle>
                      <ion-card-title>RENDIMIENTO DEL SISTEMA</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <div class="chart-container">
                        <div id="customTechnicalChart"></div>
                      </div>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
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
  IonLabel, 
  IonMenuButton, 
  IonPage, 
  IonRow, 
  IonSegment, 
  IonSegmentButton, 
  IonTitle, 
  IonToolbar 
} from '@ionic/vue';
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'AnalyticsPage',
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
    IonLabel,
    IonMenuButton,
    IonPage,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar
  },
  setup() {
    const currentSegment = ref('business');
    let businessChart = null;
    let technicalChart = null;
    
    const segmentChanged = (event) => {
      currentSegment.value = event.detail.value;
    };
    
    const initBusinessChart = () => {
      if (document.getElementById('customBusinessChart')) {
        businessChart = echarts.init(document.getElementById('customBusinessChart'));
        
        const option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['Búsqueda Orgánica', 'Directo', 'Redes Sociales', 'Email', 'Referidos'],
            textStyle: {
              color: 'var(--ff-mako-steel)'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            axisLine: {
              lineStyle: {
                color: 'var(--ff-mako-light)'
              }
            },
            axisLabel: {
              color: 'var(--ff-mako-steel)'
            }
          },
          yAxis: {
            type: 'value',
            name: 'Usuarios',
            axisLine: {
              lineStyle: {
                color: 'var(--ff-mako-light)'
              }
            },
            axisLabel: {
              color: 'var(--ff-mako-steel)'
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(var(--ff-mako-light), 0.1)'
              }
            }
          },
          series: [
            {
              name: 'Búsqueda Orgánica',
              type: 'bar',
              stack: 'total',
              emphasis: {
                focus: 'series'
              },
              data: [320, 332, 301, 334, 390, 330],
              itemStyle: {
                color: 'var(--ff-mako-core)'
              }
            },
            {
              name: 'Directo',
              type: 'bar',
              stack: 'total',
              emphasis: {
                focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230],
              itemStyle: {
                color: 'var(--ff-mako-accent)'
              }
            },
            {
              name: 'Redes Sociales',
              type: 'bar',
              stack: 'total',
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330],
              itemStyle: {
                color: 'var(--ff-mako-gold)'
              }
            },
            {
              name: 'Email',
              type: 'bar',
              stack: 'total',
              emphasis: {
                focus: 'series'
              },
              data: [150, 232, 201, 154, 190, 330],
              itemStyle: {
                color: 'var(--ff-mako-light)'
              }
            },
            {
              name: 'Referidos',
              type: 'bar',
              stack: 'total',
              emphasis: {
                focus: 'series'
              },
              data: [820, 932, 901, 934, 1290, 1330],
              itemStyle: {
                color: 'var(--ion-color-danger)'
              }
            }
          ],
          backgroundColor: 'transparent'
        };
        
        businessChart.setOption(option);
      }
    };
    
    const initTechnicalChart = () => {
      if (document.getElementById('customTechnicalChart')) {
        technicalChart = echarts.init(document.getElementById('customTechnicalChart'));
        
        const option = {
          title: {
            text: 'Métricas de Rendimiento del Sistema',
            textStyle: {
              color: 'var(--ff-mako-light)'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Tiempo de Respuesta', 'Uso de CPU', 'Uso de Memoria', 'E/S de Disco'],
            textStyle: {
              color: 'var(--ff-mako-steel)'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
            axisLine: {
              lineStyle: {
                color: 'var(--ff-mako-light)'
              }
            },
            axisLabel: {
              color: 'var(--ff-mako-steel)'
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}%',
              color: 'var(--ff-mako-steel)'
            },
            axisLine: {
              lineStyle: {
                color: 'var(--ff-mako-light)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(var(--ff-mako-light), 0.1)'
              }
            }
          },
          series: [
            {
              name: 'Tiempo de Respuesta',
              type: 'line',
              data: [45, 52, 38, 24, 33, 26, 21],
              smooth: true,
              itemStyle: {
                color: 'var(--ff-mako-core)'
              },
              lineStyle: {
                width: 3
              },
              markPoint: {
                data: [
                  { type: 'max', name: 'Máx' },
                  { type: 'min', name: 'Mín' }
                ]
              }
            },
            {
              name: 'Uso de CPU',
              type: 'line',
              data: [25, 32, 58, 74, 63, 46, 31],
              smooth: true,
              itemStyle: {
                color: 'var(--ff-mako-accent)'
              },
              lineStyle: {
                width: 3
              },
              markPoint: {
                data: [
                  { type: 'max', name: 'Máx' },
                  { type: 'min', name: 'Mín' }
                ]
              }
            },
            {
              name: 'Uso de Memoria',
              type: 'line',
              data: [35, 42, 48, 54, 53, 46, 41],
              smooth: true,
              itemStyle: {
                color: 'var(--ff-mako-gold)'
              },
              lineStyle: {
                width: 3
              },
              markPoint: {
                data: [
                  { type: 'max', name: 'Máx' },
                  { type: 'min', name: 'Mín' }
                ]
              }
            },
            {
              name: 'E/S de Disco',
              type: 'line',
              data: [15, 22, 38, 54, 33, 26, 21],
              smooth: true,
              itemStyle: {
                color: 'var(--ion-color-danger)'
              },
              lineStyle: {
                width: 3
              },
              markPoint: {
                data: [
                  { type: 'max', name: 'Máx' },
                  { type: 'min', name: 'Mín' }
                ]
              }
            }
          ],
          backgroundColor: 'transparent'
        };
        
        technicalChart.setOption(option);
      }
    };
    
    onMounted(() => {
      initBusinessChart();
      
      window.addEventListener('resize', () => {
        if (businessChart) businessChart.resize();
        if (technicalChart) technicalChart.resize();
      });
    });
    
    watch(currentSegment, (newValue) => {
      if (newValue === 'business') {
        setTimeout(() => {
          initBusinessChart();
        }, 100);
      } else if (newValue === 'technical') {
        setTimeout(() => {
          initTechnicalChart();
        }, 100);
      }
    });
    
    return {
      currentSegment,
      segmentChanged
    };
  }
};
</script>

<style scoped>
#container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.segment-content {
  margin-top: 20px;
}

.chart-container {
  height: 400px;
  width: 100%;
}

.metric-change {
  font-size: 14px;
  margin-top: 8px;
}

.positive {
  color: var(--ff-mako-accent);
}

.negative {
  color: var(--ion-color-danger);
}

/* Segment Control Estilo Mako */
ion-segment {
  --background: var(--ff-mako-dark);
  border-radius: 8px;
  border: 1px solid var(--ff-mako-core);
  padding: 4px;
}

ion-segment-button {
  --color: var(--ff-mako-steel);
  --color-checked: var(--ff-mako-gold);
  --indicator-color: var(--ff-mako-core);
  --border-radius: 4px;
  font-weight: bold;
}

ion-segment-button ion-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Ajustes específicos para mantener consistencia */
ion-card-header ion-card-title {
  color: var(--ff-mako-light);
  font-size: 1.8rem;
  font-weight: bold;
}

ion-card-header ion-card-subtitle {
  color: var(--ff-mako-accent);
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Responsive */
@media (max-width: 768px) {
  ion-card-header ion-card-title {
    font-size: 1.5rem;
  }
  
  ion-segment-button ion-label {
    font-size: 0.8rem;
  }
}
</style>