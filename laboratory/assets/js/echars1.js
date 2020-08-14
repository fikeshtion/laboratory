window.addEventListener('load',function(){
    let myChart=echarts.init(this.document.querySelector('.echarts2'));
    const colors = [{
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#8331D9"
            },
            {
                offset: 0.5,
                color: "#720DFF"
            },
            {
                offset: 0.5,
                color: "#B635FC"
            },
            {
                offset: 1,
                color: "#7F2CF1"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#F27921"
            },
            {
                offset: 0.5,
                color: "#EE3E70"
            },
            {
                offset: 0.5,
                color: "#F48D35"
            },
            {
                offset: 1,
                color: "#C82957"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#F17620"
            },
            {
                offset: 0.5,
                color: "#F5D01C"
            },
            {
                offset: 0.5,
                color: "#EF8E08"
            },
            {
                offset: 1,
                color: "#FEDC44"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#4D34FF"
            },
            {
                offset: 0.5,
                color: "#244EFB"
            },
            {
                offset: 0.5,
                color: "#5034D9"
            },
            {
                offset: 1,
                color: "#316CE8"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#20AAF8"
            },
            {
                offset: 0.5,
                color: "#2C74FF"
            },
            {
                offset: 0.5,
                color: "#27AEFA"
            },
            {
                offset: 1,
                color: "#4D8AFF"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#289DF5"
            },
            {
                offset: 0.5,
                color: "#0DE8FF"
            },
            {
                offset: 0.5,
                color: "#49B1FB"
            },
            {
                offset: 1,
                color: "#17E9FD"
            }
        ]
    },
    {
        type: "linear",
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [{
                offset: 0,
                color: "#4FC3B2"
            },
            {
                offset: 0.5,
                color: "#49B5A3"
            },
            {
                offset: 0.5,
                color: "#57D1BF"
            },
            {
                offset: 1,
                color: "#5AD1BD"
            }
        ]
    }
];
const barWidth = 30;
    let mychartoption={
        tooltip: {
            trigger: "item"
        },
        xAxis: {
            data: ["已完成", "未进行", "进行中", "审核中", "待审核"],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: "#A1B5EB",
                fontSize: 12
            }
        },
        yAxis: {
            show: false
        },
        grid: {
            left: 0,
            right: 0
        },
        series: [{
                z: 1,
                type: "bar",
                barWidth: barWidth,
                data: [{
                        value: 10,
                        itemStyle: {
                            normal: {
                                color: colors[1]
                            }
                        }
                    },
                    {
                        value: 3,
                        itemStyle: {
                            normal: {
                                color: colors[2]
                            }
                        }
                    },
                    {
                        value: 3,
                        itemStyle: {
                            normal: {
                                color: colors[3]
                            }
                        }
                    },
                    {
                        value: 2,
                        itemStyle: {
                            normal: {
                                color: colors[4]
                            }
                        }
                    },
                    {
                        value: 2,
                        itemStyle: {
                            normal: {
                                color: colors[5]
                            }
                        }
                    }
                ]
            },
            {
                z: 2,
                name: "底部",
                type: "pictorialBar",
                data: [{
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: colors[1]
                            }
                        }
                    },
                    {
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: colors[2]
                            }
                        }
                    },
                    {
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: colors[3]
                            }
                        }
                    },
                    {
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: colors[4]
                            }
                        }
                    },
                    {
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: colors[5]
                            }
                        }
                    }
                ],
                symbol: "diamond",
                symbolOffset: [0, "50%"],
                symbolSize: [barWidth, 10]
            },
            {
                z: 3,
                name: "上部1",
                type: "pictorialBar",
                symbolPosition: "end",
                data: [{
                        value:10,
                        itemStyle: {
                            normal: {
                                borderColor: colors[1],
                                borderWidth: 2,
                                color: colors[1]
                            }
                        }
                    },
                    {
                        value: 3,
                        itemStyle: {
                            normal: {
                                borderColor: colors[2],
                                borderWidth: 2,
                                color: colors[2]
                            }
                        }
                    },
                    {
                        value: 3,
                        itemStyle: {
                            normal: {
                                borderColor: colors[3],
                                borderWidth: 2,
                                color: colors[3]
                            }
                        }
                    },
                    {
                        value: 2,
                        itemStyle: {
                            normal: {
                                borderColor: colors[4],
                                borderWidth: 2,
                                color: colors[4]
                            }
                        }
                    },
                    {
                        value: 2,
                        itemStyle: {
                            normal: {
                                borderColor: colors[5],
                                borderWidth: 2,
                                color: colors[5]
                            }
                        }
                    }
                ],
                symbol: "diamond",
                symbolOffset: [0, "-50%"],
                symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth]
            }
        ]
    }
    myChart.setOption(mychartoption);
    let myChart1=echarts.init(this.document.querySelector('.echarts1'));
    var plantCap = [{
        name: '信息系',
        value: '8'
    }, {
        name: '化工系',
        value: '3'
    }, {
        name: '生物系',
        value: '3'
    }, {
        name: '机电系',
        value: '2'
    }, {
        name: '会计系',
        value: '3'
    }];
    
    var datalist = [{
        offset: [50, 50],
        symbolSize: 120,
        opacity: .95,
           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#29c0fb'
        }, {
            offset: 1,
            color: '#2dc5b9'
        }]),
    }, {
        offset: [38, 70],
        symbolSize: 95,
        opacity: .95,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#35d17e'
        }, {
            offset: 1,
            color: '#49ddb2'
        }]),
    }, {
        offset: [23, 43],
        symbolSize: 90,
        opacity: .95,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#e5d273'
        }, {
            offset: 1,
            color: '#e4a37f'
        }]),
    }, {
        offset: [68, 40],
        symbolSize: 90,
        opacity: .95,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#277aec'
        }, {
            offset: 1,
            color: '#57c5ec'
        }]),
    }, {
        offset: [38, 20],
        symbolSize: 65,
        opacity: .95,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#e54948'
        }, {
            offset: 1,
            color: '#f08456'
        }]),
    }, {
        offset: [56, 15],
        symbolSize: 68,
        opacity: .7,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#11c46e'
        }, {
            offset: 1,
            color: '#f08456'
        }]),
    }, {
        offset: [65, 75],
        symbolSize: 65,
        opacity: .68,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#ff4141'
        }, {
            offset: 1,
            color: '#ff8989'
        }]),
    }];
    var datas = [];
    for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
            name: item.name+'\n'+item.value,
            value: itemToStyle.offset,
            symbolSize: itemToStyle.symbolSize,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 13,
                        lineHeight: 17,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: itemToStyle.color,
                    opacity: itemToStyle.opacity
                }
            },
        })
    }
    let mychartoption1={
        // backgroundColor: '#20203e',
        grid: {
            show: false,
            top: 10,
            bottom: 10
        },
        xAxis: [{
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            nameLocation: 'middle',
            nameGap: 5
        }],
        yAxis: [{
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30
        }],
        series: [{
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 120,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    color: '#fff',
                    textStyle: {
                        fontSize: '20'
                    }
                },
            },
            itemStyle: {
                normal: {
                    color: '#00acea'
                }
            },
            data: datas
        }]
    }
    myChart1.setOption(mychartoption1);
    //




})