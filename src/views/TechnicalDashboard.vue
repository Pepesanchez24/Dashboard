<template>
  <ion-page class="metrics-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Métricas Técnicas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="no-scroll" scroll-y="false">
      <div class="metrics-container">
        <div class="card-grid">
          <ion-card class="chart-card wide">
            <ion-card-header>
              <ion-card-subtitle>Rendimiento del Servidor</ion-card-subtitle>
              <ion-card-title>Tiempo de Respuesta (ms)</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div id="responseTimeChart"></div>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="chart-card wide">
            <ion-card-header>
              <ion-card-subtitle>Monitorización en Tiempo Real</ion-card-subtitle>
              <ion-card-title>Uso de CPU y Memoria</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div id="resourceUsageChart"></div>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="chart-card tall">
            <ion-card-header>
              <ion-card-subtitle>Métricas de Tráfico</ion-card-subtitle>
              <ion-card-title>Llamadas a Endpoints</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <canvas id="endpointCallsChart"></canvas>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="chart-card">
            <ion-card-header>
              <ion-card-subtitle>Seguimiento de Errores</ion-card-subtitle>
              <ion-card-title>Errores por Tipo</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div id="errorTrackingChart"></div>
              </div>
            </ion-card-content>
          </ion-card>

          <ion-card class="chart-card wide">
            <ion-card-header>
              <ion-card-subtitle>Rendimiento de Base de Datos</ion-card-subtitle>
              <ion-card-title>Tiempo de Respuesta de Consultas</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <div class="chart-wrapper">
                <div id="dbPerformanceChart"></div>
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
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent, IonPage, IonToolbar, IonHeader, IonMenuButton, IonTitle
} from '@ionic/vue'
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import Chart from 'chart.js/auto'
import ApexCharts from 'apexcharts'
import * as echarts from 'echarts'

let responseTimeChart = null
let resourceUsageChart = null
let apiUsageChart = null
let errorTrackingChart = null
let dbPerformanceChart = null
let resourceUpdateInterval = null

function generateResourceData(baseValue) {
  const now = new Date().getTime()
  const data = []
  for (let i = 0; i < 60; i++) {
    const x = now - (59 - i) * 1000
    const y = getRandomValue(baseValue, 5, 0, 100)
    data.push([x, y])
  }
  return data
}

function getRandomValue(base, variance, min, max) {
  let value = base + (Math.random() * variance * 2) - variance
  value = Math.max(min, Math.min(max, value))
  return Math.round(value * 10) / 10
}

function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

const debouncedResizeCharts = debounce(() => {
  resourceUsageChart?.resize()
  errorTrackingChart?.resize()
  apiUsageChart?.resize()
}, 200)

onMounted(() => {
  nextTick(() => {
    // Configuración común para ApexCharts con texto blanco
    const apexCommon = {
      chart: {
        height: '100%',
        type: 'line',
        toolbar: { show: false },
        animations: { enabled: false },
        background: 'transparent',
        foreColor: '#ffffff' // Texto blanco global
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      markers: {
        size: 4,
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: { size: 7 }
      },
      tooltip: {
        enabled: true,
        style: {
          color: '#ffffff' // Tooltip blanco
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        labels: {
          colors: ['#ffffff'] // Leyenda blanca
        }
      },
      grid: {
        borderColor: 'transparent',
        strokeDashArray: 4
      },
      xaxis: {
        labels: {
          style: {
            color: '#ffffff' // Eje X blanco
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        title: {
          style: {
            color: '#ffffff' // Título eje X blanco
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            color: '#ffffff' // Eje Y blanco
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        title: {
          style: {
            color: '#ffffff' // Título eje Y blanco
          }
        }
      }
    }

    responseTimeChart = new ApexCharts(document.querySelector("#responseTimeChart"), {
      ...apexCommon,
      series: [{ name: 'Tiempo de Respuesta', data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10] }],
      xaxis: {
        ...apexCommon.xaxis,
        categories: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        title: { 
          text: 'Hora (24h)',
          style: {
            color: '#ffffff'
          }
        }
      },
      yaxis: {
        ...apexCommon.yaxis,
        title: { 
          text: 'Tiempo de Respuesta (ms)',
          style: {
            color: '#ffffff'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#00ff99'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1
        }
      }
    })

    responseTimeChart.render().then(() => {
      window.addEventListener('resize', debouncedResizeCharts)
    })

    // Configuración común para ECharts con texto blanco
    const echartsCommon = {
      textStyle: {
        color: '#ffffff' // Texto blanco global
      },
      backgroundColor: 'transparent'
    }

    resourceUsageChart = echarts.init(document.getElementById('resourceUsageChart'))
    const optionResource = {
      ...echartsCommon,
      tooltip: { 
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: 'transparent',
        textStyle: {
          color: '#ffffff' // Tooltip blanco
        }
      },
      legend: {
        data: ['CPU', 'Memoria'],
        top: '5%',
        right: '5%',
        orient: 'horizontal',
        textStyle: { 
          color: '#ffffff' // Leyenda blanca
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLabel: { 
          color: '#ffffff', // Eje X blanco
          formatter: (value) => new Date(value).toLocaleTimeString() 
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: { 
          color: '#ffffff', // Eje Y blanco
          formatter: '{value} %' 
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      },
      series: [
        {
          name: 'CPU',
          type: 'line',
          showSymbol: false,
          data: generateResourceData(50),
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#42a5f5'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(66, 165, 245, 0.5)' },
              { offset: 1, color: 'rgba(66, 165, 245, 0.1)' }
            ])
          },
          itemStyle: {
            borderWidth: 0
          }
        },
        {
          name: 'Memoria',
          type: 'line',
          showSymbol: false,
          data: generateResourceData(70),
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#4fc3f7'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(79, 195, 247, 0.5)' },
              { offset: 1, color: 'rgba(79, 195, 247, 0.1)' }
            ])
          },
          itemStyle: {
            borderWidth: 0
          }
        }
      ]
    }
    resourceUsageChart.setOption(optionResource)

    resourceUpdateInterval = setInterval(() => {
      const now = new Date().getTime()
      const option = resourceUsageChart.getOption()
      option.series[0].data.shift()
      option.series[0].data.push([now, getRandomValue(50, 5, 0, 100)])
      option.series[1].data.shift()
      option.series[1].data.push([now, getRandomValue(70, 5, 0, 100)])
      resourceUsageChart.setOption(option)
    }, 1000)

    // Configuración para Chart.js con texto blanco
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            color: 'white' // Leyenda blanca
          }
        },
        tooltip: {
          bodyColor: '#ffffff', // Cuerpo tooltip blanco
          titleColor: '#ffffff' // Título tooltip blanco
        }
      },
      scales: {
        x: {
          ticks: {
            color: 'white' // Eje X blanco
          },
          grid: {
            display: false,
            color: 'rgba(255, 255, 255, 0.1)'
          },
          border: {
            display: false
          }
        },
        y: {
          ticks: {
            color: 'white', // Eje Y blanco
            callback: (value) => value.toLocaleString()
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          border: {
            display: false
          }
        }
      },
      elements: {
        bar: {
          borderWidth: 0
        }
      }
    }

    const ctxApi = document.getElementById('endpointCallsChart')?.getContext('2d')
    if (ctxApi) {
      apiUsageChart = new Chart(ctxApi, {
        type: 'bar',
        data: {
          labels: ['Login', 'GetUser', 'PostComment', 'Upload', 'Logout'],
          datasets: [{
            label: 'Llamadas', 
            data: [1200, 900, 800, 700, 400], 
            backgroundColor: 'rgba(79, 195, 247, 0.8)',
            borderWidth: 0
          }]
        },
        options: chartOptions
      })
    }

    errorTrackingChart = echarts.init(document.getElementById('errorTrackingChart'))
    errorTrackingChart.setOption({
      ...echartsCommon,
      tooltip: { 
        trigger: 'item', 
        formatter: '{b}: {c} ({d}%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: 'transparent',
        textStyle: {
          color: '#ffffff' // Tooltip blanco
        }
      },
      legend: {
        bottom: null,
        top: '0%',
        right: 'right',
        orient: 'horizontal',
        data: ['404 Not Found', '500 Internal', '401 Unauthorized', '403 Forbidden'],
        textStyle: { 
          color: '#ffffff' // Leyenda blanca
        }
      },
      series: [{
        name: 'Errores',
        type: 'pie',
        radius: '50%',
        label: {
          color: '#ffffff', // Etiquetas blancas
          formatter: ''
        },
        data: [
          { value: 1048, name: '404 Not Found' },
          { value: 735, name: '500 Internal' },
          { value: 580, name: '401 Unauthorized' },
          { value: 484, name: '403 Forbidden' }
        ],
        itemStyle: {
          borderWidth: 0,
          borderColor: 'transparent'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(255, 255, 255, 0.3)'
          }
        }
      }]
    })

    dbPerformanceChart = new ApexCharts(document.querySelector("#dbPerformanceChart"), {
      ...apexCommon,
      series: [{ name: 'Tiempo de Consulta', data: [210, 190, 280, 320, 230, 290, 300, 250, 270, 310, 200, 260] }],
      chart: { ...apexCommon.chart, type: 'area' },
      xaxis: {
        ...apexCommon.xaxis,
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        title: { 
          text: 'Mes',
          style: {
            color: '#ffffff'
          }
        }
      },
      yaxis: {
        ...apexCommon.yaxis,
        title: { 
          text: 'Milisegundos',
          style: {
            color: '#ffffff'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100]
        }
      }
    })
    dbPerformanceChart.render().then(() => {
      window.dispatchEvent(new Event('resize'))
    })

    window.addEventListener('resize', debouncedResizeCharts)
  })
})

onBeforeUnmount(() => {
  responseTimeChart?.destroy()
  resourceUsageChart?.dispose()
  apiUsageChart?.destroy()
  errorTrackingChart?.dispose()
  dbPerformanceChart?.destroy()
  clearInterval(resourceUpdateInterval)
  window.removeEventListener('resize', debouncedResizeCharts)
})
</script>

<style scoped>
/* Fondo Mako */
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
  padding: 1px;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;
  height: 100%;
}

.chart-card {
  background: linear-gradient(145deg, rgba(0, 51, 102, 0.8), rgba(0, 26, 51, 0.9));
  border: 1px solid var(--ff-mako-core);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 162, 224, 0.3),
              inset 0 0 10px rgba(0, 162, 224, 0.2);
  display: flex;
  flex-direction: column;
  height: 28vh;
  min-height: 180px;
}

.chart-card.wide {
  grid-column: span 2;
  height: 28vh;
  min-height: 180px;
}

.chart-card.endpoint-calls {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  height: 25vh;
  min-height: 150px;
}

.chart-card.error-tracking {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  height: 25vh;
  min-height: 150px;
}

ion-card-header {
  padding: 6px 18px;
  border-bottom: 1px solid rgba(0, 162, 224, 0.3);
  flex-shrink: 0;
}

ion-card-subtitle {
  font-weight: 600;
  color: var(--ff-mako-accent);
  font-size: 0.85rem;
  margin-bottom: 3px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

ion-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ff-mako-light);
  font-family: 'Cinzel', serif;
}

ion-toolbar-title {
  text-shadow: 0 0 10px var(--ff-mako-light);
  letter-spacing: 1px;
}

ion-card-content {
  flex-grow: 1;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
}

.chart-wrapper {
  width: 100%;
  height: 100%;
  min-height: 200px;
  background: rgba(0, 51, 102, 0.3);
  border-radius: 6px;
  border: 1px solid rgba(0, 162, 224, 0.2);
  box-shadow: inset 0 0 15px rgba(0, 162, 224, 0.1);
}

.chart-card.tall {
  grid-row: 1 / span 2;
  height: 60vh;
  min-height: 380px;
}

canvas, #responseTimeChart, #resourceUsageChart, #errorTrackingChart, #dbPerformanceChart {
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(160deg, rgba(0, 51, 102, 0.5) 0%, rgba(0, 10, 20, 0.7) 100%) !important;
  border-radius: 4px !important;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .chart-card.wide,
  .chart-card.endpoint-calls,
  .chart-card.error-tracking {
    grid-column: span 1;
    grid-row: auto;
    height: 28vh;
  }

  .chart-card.tall {
    height: 28vh;
    min-height: 180px;
  }
}

@media (max-width: 480px) {
  .metrics-container {
    padding: 8px;
  }

  .card-grid {
    gap: 12px;
  }
}
</style>