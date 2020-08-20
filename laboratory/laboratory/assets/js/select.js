window.addEventListener('load', function () {
    let myChart = echarts.init(document.querySelector('.echarts'));
   
    myChartOption = {
        title: {
            text: '设备状态',
            top:20,
            left:'center',
            textStyle:{
                color:'black',
                fontSize:14
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            color: ["#F58080", "#47D8BE", "#F9A589"],
            data: ['使用中', '未使用', '维修中'],
            left: 'center',
            bottom: 'bottom'
        },
        grid: {
            top: 'middle',
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: '80%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['玻璃器皿','温度计','蒸馏头','冷凝器','冷凝管','智能试剂柜'],
            axisLine: {
                lineStyle: {
                    color: "#999"
                }
            }
        },
        yAxis: {
            type: 'value',
    
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#333"
                },
            },
            nameTextStyle: {
                color: "#999"
            },
            splitArea: {
                show: false
            }
        },
        series: [{
                name: '使用中',
                type: 'line',
                data: [54,23,25,15,17,4],
                color: "#F58080",
                lineStyle: {
                    normal: {
                        width: 5,
                        color: {
                            type: 'linear',
    
                            colorStops: [{
                                offset: 0,
                                color: '#FFCAD4' // 0% 处的颜色
                            }, {
                                offset: 0.4,
                                color: '#F58080' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#F58080' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(245,128,128, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetY: 7
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F58080',
                        borderWidth: 10,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                         shadowBlur: 100,*/
                        borderColor: "#F58080"
                    }
                },
                smooth: true
            },
            {
                name: '未使用',
                type: 'line',
                data: [4,7,4,3,2,1],
                lineStyle: {
                    normal: {
                        width: 5,
                        color: {
                            type: 'linear',
    
                            colorStops: [{
                                    offset: 0,
                                    color: '#AAF487' // 0% 处的颜色
                                },
                                {
                                    offset: 0.4,
                                    color: '#47D8BE' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#47D8BE' // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(71,216,190, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetY: 7
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#AAF487',
                        borderWidth: 10,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                         shadowBlur: 100,*/
                        borderColor: "#AAF487"
                    }
                },
                smooth: true
            },
            {
                name: '维修中',
                type: 'line',
                data: [2,0,1,2,1,1],
                lineStyle: {
                    normal: {
                        width: 5,
                        color: {
                            type: 'linear',
    
                            colorStops: [{
                                    offset: 0,
                                    color: '#F6D06F' // 0% 处的颜色
                                },
                                {
                                    offset: 0.4,
                                    color: '#F9A589' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#F9A589' // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(249,165,137, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetY: 7
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F6D06F',
                        borderWidth: 10,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                         shadowBlur: 100,*/
                        borderColor: "#F6D06F"
                    }
                },
                smooth: true
            }
        ]
    }
    myChart.setOption(myChartOption);
    let myChart1 = echarts.init(document.querySelector('.echarts1'));
    myChartOption1={
        title: {
            text: '设备数量',
            top:20,
            left:'center',
            textStyle:{
                color:'black',
                fontSize:14
            }
        },
        tooltip: {},
        animationDurationUpdate: function(idx) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 300,
                edgeLength: 100
            },
            roam: true,
            label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        fontSize: 20,
                        fontStyle: '600',
                    }
                }
                ,
            data: [{
                "name": "玻璃器皿",
                "value": 60,
                x: 500,
                y: 56,
                "symbolSize": 80,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "#FF8C00",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "#FF8C00",
                        "color": "#FF8C00"
                    }
                }
            }, {
                "name": "温度计",
                "value": 30,
                x: 0,
                y: 0,
                "symbolSize": 80,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "#FF4500",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "#FF4500",
                        "color": "#FF4500",
                    }
                },
                
            }, {
                "name": "蒸馏头",
                "value": 30,
                x: 0,
                y: 0,
                "symbolSize": 80,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "rgb(165, 190, 198)",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "rgb(165, 190, 198)",
                        "color": "rgb(165, 190, 198)"
                    }
                }
            }, {
                "name": "冷凝器",
                "value": 20,
                "symbolSize": 120,
                x: 0,
                y: 0,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "#4DFB37",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "#4DFB37",
                        "color": "#4DFB37"
                    }
                }
            }, {
                "name": "冷凝管",
                "value": 20,
                x: 0,
                y: 0,
                "symbolSize": 80,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "#00BFFF",
                        "borderWidth": 4,
                        "shadowBlur": 100,
                        "shadowColor": "#00BFFF",
                        "color": "#00BFFF"
                    }
                }
            }, {
                "name": "智能试剂柜",
                "value": 6,
                x: 0,
                y: 0,
                "symbolSize": 80,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "borderColor": "#FFD700",
                        "borderWidth": 4,
                        // "shadowBlur": 100,
                        // "shadowColor": "#FFD700",
                        "color": "#FFD700"
                    }
                }
            }],
            links:[{
                "source": "蒸馏头",
                "target": "冷凝器"
            },
            {
                "source": "智能试剂柜",
                "target": "冷凝器"
            },
            {
                "source": "温度计",
                "target": "冷凝器"
            },
            {
                "source": "玻璃器皿",
                "target": "冷凝器"
            },
            {
                "source": "冷凝管",
                "target": "冷凝器"
            }]
        }]
    }
    myChart1.setOption(myChartOption1);

})