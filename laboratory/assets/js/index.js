window.addEventListener('load', function () {

    let myChart = echarts.init(document.querySelector('.echarts'));

    myChartOption = {
        //          title: {
        //              text: 'ECharts 入门示例'
        //          },
        tooltip: {},
        
        legend: {
            data: ['已完成', '进行中', '未进行', '审核中', '待审核']
        },
        xAxis: {
            data: ['已完成', '进行中', '未进行', '审核中', '待审核']
        },
        yAxis: {},
        series: [
           
            {
                name: '已完成',
                type: 'bar',
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#C1232B'
                    }
                },
                //              data: [5, 20, 36, 10, 10, 20]
                data: [10, 0, 0, 0, 0]
            },
            {
                name: '进行中',
                type: 'bar',
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#B5C334'
                    }
                },
                //              data: [5, 20, 36, 10, 10, 20]
                data: [0,3, 0, 0, 0]
            },
            {
                name: '未进行',
                type: 'bar',
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#FCCE10'
                    }
                },
                //              data: [5, 20, 36, 10, 10, 20]
                data: [0, 0, 3, 0, 0]
            },
            {
                name: '审核中',
                type: 'bar',
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#E87C25'
                    }
                },
                //              data: [5, 20, 36, 10, 10, 20]
                data: [0, 0, 0, 2, 0]
            },
            {
                name: '待审核',
                type: 'bar',
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#27727B'
                    }
                },
                //              data: [5, 20, 36, 10, 10, 20]
                data: [0, 0, 0, 0, 2]
            },
           /*  {
                name: '袜子',
                type: 'bar',
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#FE8463'
                    }
                },
                //              data: [5, 20, 36, 10, 10, 20]
                data: [0, 0, 0, 0, 0, 20]
            }, */
            {
                // name: '访问来源',
                type: 'pie',
                radius: '28%',
                center: ['75%', '35%'],
                //          data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
                //          data: [5, 20, 36, 10, 10, 20]
                label: {
                    show: false,
                },
                /* data: [{
            'name': '已完成',
            'value': 10
        }, {
            'name': '进行中',
            'value': 3
        }, {
            'name': '未进行',
            'value': 3
        }, {
            'name': '审核中',
            'value': 2
        }, {
            'name': '待审核',
            'value': 2
        }], */
                data: [
                    { value: 10, name: '已完成', itemStyle: { color: '#C1232B' } },
                    { value: 3, name: '进行中', itemStyle: { color: '#B5C334' } },
                    { value: 3, name: '未进行', itemStyle: { color: '#FCCE10' } },
                    { value: 2, name: '审核中', itemStyle: { color: '#E87C25' } },
                    { value: 2, name: '待审核', itemStyle: { color: '#27727B' } },
                    // { value: 20, name: '袜子', itemStyle: { color: '#FE8463' } }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    /*  var colorList = ['#ACD', '#FDD56A', '#A2CD5A', '#D2A2CC', '#FD866A', '#E1C4C4', '#CDC5BF']
     myChartOption = {
     title: {
         text: '实验状态',
         x: 'center',
         y: 'center',
         textStyle: {
             fontSize: 14
         }
     },
     tooltip: {
         trigger: 'item'
     },
     series: [{
         type: 'pie',
         center: ['50%', '50%'],
         radius: ['24%', '45%'],
         clockwise: true,
         avoidLabelOverlap: true,
         hoverOffset: 15,
         itemStyle: {
             normal: {
                 color: function(params) {
                     return colorList[params.dataIndex]
                 }
             }
         },
         label: {
             show: true,
             position: 'outside',
             formatter: '{a|{b}：{d}%}\n{hr|}',
             rich: {
                 hr: {
                     backgroundColor: 't',
                     borderRadius: 3,
                     width: 3,
                     height: 3,
                     padding: [3, 3, 0, -12]
                 },
                 a: {
                     padding: [-30, 15, -20, 15]
                 }
             }
         },
         labelLine: {
             normal: {
                 length: 10,
                 length2: 10,
                 lineStyle: {
                     width: 1
                 }
             }
         },
         data: [{
             'name': '已完成',
             'value': 10
         }, {
             'name': '进行中',
             'value': 3
         }, {
             'name': '未进行',
             'value': 3
         }, {
             'name': '审核中',
             'value': 2
         }, {
             'name': '待审核',
             'value': 2
         }],
     }]
 }; */

    myChart.setOption(myChartOption);



});
