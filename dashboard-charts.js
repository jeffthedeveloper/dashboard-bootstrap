// Configuração dos gráficos do dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});

function initializeCharts() {
    // Configurações globais do Chart.js
    Chart.defaults.color = '#ffffff';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
    Chart.defaults.backgroundColor = 'rgba(255, 255, 255, 0.1)';

    // Gráfico de Performance Mensal
    initPerformanceChart();
    
    // Gráfico de Canais
    initChannelChart();
    
    // Gráfico de Produtos
    initProductsChart();
    
    // Gráfico Gauge
    initGaugeChart();
}

function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    const data = {
        labels: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '30'],
        datasets: [
            {
                label: 'Visitas',
                data: [4200, 3800, 3200, 4500, 3900, 2800, 3600, 4100, 3700, 4300, 3500, 4000, 3300, 4400, 3900, 4200],
                borderColor: '#7f5af0',
                backgroundColor: 'rgba(127, 90, 240, 0.1)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Vendas',
                data: [24, 18, 13, 28, 22, 15, 19, 26, 21, 29, 17, 25, 16, 31, 23, 27],
                borderColor: '#00f5c3',
                backgroundColor: 'rgba(0, 245, 195, 0.1)',
                fill: true,
                tension: 0.4,
                yAxisID: 'y1'
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#ffffff',
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(31, 31, 58, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

function initChannelChart() {
    const ctx = document.getElementById('channelChart').getContext('2d');
    
    const data = {
        labels: ['Google Ads', 'Facebook Ads', 'Orgânico', 'Referral'],
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                '#7f5af0',
                '#00f5c3',
                '#fbbf24',
                '#ef4444'
            ],
            borderWidth: 2,
            borderColor: '#1f1f3a'
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#ffffff',
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(31, 31, 58, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

function initProductsChart() {
    const ctx = document.getElementById('productsChart').getContext('2d');
    
    const data = {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'],
        datasets: [{
            label: 'Vendas',
            data: [89, 76, 65, 54, 43],
            backgroundColor: [
                '#7f5af0',
                '#00f5c3',
                '#fbbf24',
                '#ef4444',
                '#10b981'
            ],
            borderWidth: 1,
            borderColor: '#1f1f3a'
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(31, 31, 58, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#ffffff'
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
}

function initGaugeChart() {
    const canvas = document.getElementById('gaugeChart');
    const ctx = canvas.getContext('2d');
    
    // Configurações do gauge
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 70;
    const percentage = 85;
    
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar fundo do gauge
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.stroke();
    
    // Desenhar progresso
    const endAngle = Math.PI + (Math.PI * percentage / 100);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, endAngle);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#00f5c3';
    ctx.stroke();
    
    // Desenhar marcações
    for (let i = 0; i <= 100; i += 20) {
        const angle = Math.PI + (Math.PI * i / 100);
        const x1 = centerX + (radius - 20) * Math.cos(angle);
        const y1 = centerY + (radius - 20) * Math.sin(angle);
        const x2 = centerX + (radius - 10) * Math.cos(angle);
        const y2 = centerY + (radius - 10) * Math.sin(angle);
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    }
}

// Função para atualizar dados em tempo real (simulação)
function updateRealTimeData() {
    // Simular atualizações de dados
    setInterval(() => {
        // Aqui você pode implementar atualizações via WebSocket ou API
        console.log('Atualizando dados em tempo real...');
    }, 30000); // Atualizar a cada 30 segundos
}

// Inicializar atualizações em tempo real
updateRealTimeData();

