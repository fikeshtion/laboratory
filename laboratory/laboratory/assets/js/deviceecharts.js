window.addEventListener('load', function () {

    let myChart = echarts.init(document.querySelector('.echarts'));
   
    var  myChartOption = {
        title: {
            // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['设备数量']
        },
        radar: {
            // shape: 'circle',
            splitNumber: 3, 
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '1~9', max: 10},
               { name: '10~19', max: 10},
               { name: '20~29', max: 10},
               { name: '30~39', max: 10},
               { name: '40~49', max: 10},
               { name: '>=50', max: 10}
            ],
            splitArea : {
                show : false,
                areaStyle : {
                    color: 'rgba(255,0,0)', // 图表背景的颜色
                },
            },
            splitLine: {                        // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgb(60,161,232)',                       // 分隔线颜色
                        width: 1, 							 // 分隔线线宽
                    }
                },
        },
        series: [{
            name: '设备数量',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [7, 3, 2, 5, 1, 2],
                    // name : '预算分配（Allocated Budget）'
                }
            ],
            itemStyle: {                // 单个拐点标志的样式设置。
                normal: {
                    borderColor: 'rgb(0,255,255)',       // 拐点的描边颜色。[ default: '#000' ]
                    borderWidth: 5,                        // 拐点的描边宽度，默认不描边。[ default: 0 ]
                    color: 'rgb(0,255,255)',
                },
            },
            areaStyle:{
                color: 'rgba(0,255,255,0.3)',
            },
        }]
    };

    
    myChart.setOption(myChartOption);



});
