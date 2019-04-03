/* global echarts :true*/
$(function(){
  var xDat=[],
      yDat=[];
  for (var p=0;p<=1;p+=0.1){
    xDat.push(p);
    yDat.push(h(p));
  //console.log(`p=${p},h(p)=${h(p)}`);
  }
  function h(p){
    if(p===0) return 0;
    return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
  }
  var myChart = echarts.init($('.main')[0]);
  var option = {
    title: {
      text: '二进商函数曲线'         
    },
    tooltip: {},
    legend: {
      data:['二进商']
    },
    xAxis: {
      data: xDat
    },
    yAxis: {},
    series: [{
      name: '二进商',
      type: 'line',
      smooth:true,
      data: yDat
    }]
  };
  myChart.setOption(option);
 
});
