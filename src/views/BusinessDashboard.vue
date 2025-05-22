<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="neon-text">MÉTRICAS DE NEGOCIO</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="mako-background">
      <div class="metrics-container">
        <div class="card-grid">
          <ion-card class="chart-card wide">
            <ion-card-header>
              <ion-card-subtitle class="mako-subtitle">CRECIMIENTO DE USUARIOS</ion-card-subtitle>
              <ion-card-title class="mako-chart-title">USUARIOS POR MES</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div class="chart-container">
                  <canvas id="userGrowthChart"></canvas>
                </div>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="chart-card wide">
            <ion-card-header>
              <ion-card-subtitle class="mako-subtitle">ACTIVIDAD</ion-card-subtitle>
              <ion-card-title class="mako-chart-title">PUBLICACIONES POR MES</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div class="chart-container">
                  <canvas id="postsChart"></canvas>
                </div>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="chart-card">
            <ion-card-header>
              <ion-card-subtitle class="mako-subtitle">DEMOGRAFÍA DE USUARIOS</ion-card-subtitle>
              <ion-card-title class="mako-chart-title">DISTRIBUCIÓN POR EDAD</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div class="chart-container">
                  <div id="demographicsChart" class="echart"></div>
                </div>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="chart-card">
            <ion-card-header>
              <ion-card-subtitle class="mako-subtitle">DISTRIBUCIÓN GEOGRÁFICA</ion-card-subtitle>
              <ion-card-title class="mako-chart-title">USUARIOS POR REGIÓN</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div class="chart-container">
                  <div id="geoDistributionChart" class="echart"></div>
                </div>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="chart-card wide">
            <ion-card-header>
              <ion-card-subtitle class="mako-subtitle">RETENCIÓN DE USUARIOS</ion-card-subtitle>
              <ion-card-title class="mako-chart-title">ANÁLISIS DE COHORTES</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div class="chart-container">
                  <div id="retentionChart" class="echart"></div>
                </div>
              </div>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
} from '@ionic/vue'
import { onMounted, onBeforeUnmount } from 'vue'
import Chart from 'chart.js/auto'
import * as echarts from 'echarts'

let userGrowthChart, postsChart, demographicsChart, geoChart, retentionChart

function resizeCharts() {
  userGrowthChart?.resize()
  postsChart?.resize()
  demographicsChart?.resize()
  geoChart?.resize()
  retentionChart?.resize()
}

onMounted(() => {
  const ctxUser = document.getElementById('userGrowthChart')
  const ctxPosts = document.getElementById('postsChart')

  // Configuración común para Chart.js
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: 'top',
        labels: {
          color: 'white' // Texto blanco para leyendas
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'white' // Texto blanco para eje X
        },
        grid: {
          display: false // Eliminar líneas de grid en eje X
        }
      },
      y: {
        ticks: {
          color: 'white', // Texto blanco para eje Y
          callback: (value) => value.toLocaleString()
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' // Líneas de grid muy tenues
        }
      }
    }
  }

  userGrowthChart = new Chart(ctxUser, {
    type: 'line',
    data: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      datasets: [{
        label: 'Usuarios',
        data: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000],
        borderColor: '#42a5f5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        fill: true,
        tension: 0.3,
        borderWidth: 2
      }]
    },
    options: {
      ...chartOptions,
      elements: {
        point: {
          backgroundColor: 'white', // Puntos blancos
          borderColor: '#42a5f5',
          borderWidth: 2
        }
      }
    }
  })

  postsChart = new Chart(ctxPosts, {
    type: 'bar',
    data: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      datasets: [{
        label: 'Publicaciones',
        data: [25000, 30000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000],
        backgroundColor: 'rgba(79, 195, 247, 0.8)',
        borderWidth: 0 // Sin bordes en las barras
      }]
    },
    options: {
      ...chartOptions,
      scales: {
        ...chartOptions.scales,
        x: {
          ...chartOptions.scales.x,
          grid: {
            display: false
          }
        }
      }
    }
  })

  // Configuración común para ECharts
  const echartsCommon = {
    textStyle: {
      color: 'white' // Texto blanco global
    },
    backgroundColor: 'transparent' // Fondo transparente
  }

  demographicsChart = echarts.init(document.getElementById('demographicsChart'))
  demographicsChart.setOption({
    ...echartsCommon,
    tooltip: { 
      trigger: 'item', 
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      backgroundColor: 'rgba(0, 26, 51, 0.9)',
      borderColor: '#00a2e0',
      textStyle: {
        color: 'white'
      }
    },
    legend: {
      orient: 'horizontal',
      bottom: 0,
      textStyle: {
        color: 'white'
      },
      data: ['18-24', '25-34', '35-44', '45-54']
    },
    series: [{
      name: 'Distribución por Edad',
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['50%', '38%'],
      label: {
        show: true,
        color: 'black',
        formatter: '',
        position: 'outside'
      },
      labelLine: { 
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      itemStyle: {
        borderWidth: 0 // Sin bordes en las porciones
      },
      data: [
        { value: 300, name: '18-24' },
        { value: 500, name: '25-34' },
        { value: 400, name: '35-44' },
        { value: 200, name: '45-54' }
      ]
    }]
  })

  geoChart = echarts.init(document.getElementById('geoDistributionChart'))
  geoChart.setOption({
    ...echartsCommon,
    tooltip: { 
      trigger: 'axis', 
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(0, 26, 51, 0.9)',
      borderColor: '#00a2e0'
    },
    grid: { 
      left: '3%', 
      right: '4%', 
      bottom: '3%', 
      containLabel: true,
      backgroundColor: 'transparent'
    },
    xAxis: { 
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    yAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      data: ['Europa', 'Norteamérica', 'Asia', 'Sudamérica', 'África', 'Oceanía', 'Otros']
    },
    series: [{
      name: 'Usuarios',
      type: 'bar',
      data: [1400, 1200, 1000, 700, 500, 300, 200],
      itemStyle: {
        color: (params) => ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452'][params.dataIndex],
        borderWidth: 0 // Sin bordes en las barras
      },
      label: { 
        show: true, 
        position: 'right',
        color: 'white'
      }
    }]
  })

  retentionChart = echarts.init(document.getElementById('retentionChart'))
  retentionChart.setOption({
    ...echartsCommon,
    tooltip: { 
      trigger: 'axis',
      backgroundColor: 'rgba(0, 26, 51, 0.9)',
      borderColor: '#00a2e0'
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
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      data: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4']
    },
    yAxis: { 
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
    series: [{
      name: 'Retención',
      type: 'line',
      data: [1000, 800, 600, 400],
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: { 
        color: '#EE6666',
        borderWidth: 0
      },
      lineStyle: { 
        width: 3,
        color: '#EE6666'
      }
    }]
  })

  window.addEventListener('resize', resizeCharts)
  setTimeout(resizeCharts, 100)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCharts)
})
</script>

<style scoped>
/* Fondo Mako */
.mako-background {
  --background: linear-gradient(135deg, var(--ff-mako-dark) 0%, #001a33 100%);
  color: var(--ff-mako-steel);
  font-family: 'Cormorant', serif;
}

/* Toolbar estilo Mako */
ion-toolbar {
  --background: linear-gradient(90deg, var(--ff-mako-dark), var(--ff-mako-core));
  --color: var(--ff-mako-gold);
  font-family: 'Cinzel', serif;
  border-bottom: 1px solid var(--ff-mako-accent);
  box-shadow: 0 2px 15px rgba(0, 162, 224, 0.5);
}

ion-toolbar ion-title {
  text-shadow: 0 0 10px var(--ff-mako-light);
  letter-spacing: 1px;
}

/* Textos Mako */
.neon-text {
  text-shadow: 0 0 5px var(--ff-mako-core),
               0 0 10px var(--ff-mako-core),
               0 0 20px var(--ff-mako-light);
}

.mako-subtitle {
  color: var(--ff-mako-accent);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.mako-chart-title {
  color: var(--ff-mako-light);
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  margin-top: 8px;
}

/* Mantenimiento de estilos estructurales */
.metrics-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.no-scroll {
  --overflow: hidden;
  overflow: hidden;
}

.metrics-container {
  height: 100%;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: auto;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  gap: 16px;
  width: 100%;
  height: calc(100% - 60px);
}

.chart-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(145deg, rgba(0, 51, 102, 0.8), rgba(0, 26, 51, 0.9));
  border: 1px solid var(--ff-mako-core);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 162, 224, 0.3),
              inset 0 0 10px rgba(0, 162, 224, 0.2);
}

.chart-card.wide {
  grid-column: span 2;
}

ion-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: transparent;
}

.chart-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  padding: 8px;
  background: rgba(0, 51, 102, 0.3);
  border-radius: 6px;
  border: 1px solid rgba(0, 162, 224, 0.2);
  box-shadow: inset 0 0 15px rgba(0, 162, 224, 0.1);
}

.chart-container {
  flex: 1;
  width: 95%;
  height: 95%;
  max-width: 95%;
  max-height: 95%;
  position: relative;
  min-height: 200px;
  background: rgba(0, 26, 51, 0.7);
  border-radius: 4px;
  border: 1px solid rgba(0, 162, 224, 0.15);
}

canvas,
.echart {
  width: 100% !important;
  height: 100% !important;
  display: block;
  object-fit: contain;
}

/* Estilos específicos para gráficos */
.chart-container canvas {
  background: linear-gradient(160deg, rgba(0, 51, 102, 0.5) 0%, rgba(0, 10, 20, 0.7) 100%);
  border-radius: 4px;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
  }

  .chart-card.wide {
    grid-column: span 1;
  }

  .chart-container {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .metrics-container {
    padding: 8px;
  }

  .card-grid {
    gap: 12px;
  }

  .chart-container {
    min-height: 200px;
  }
}
</style>