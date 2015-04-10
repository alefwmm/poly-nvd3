Polymer("nvd3-abstract-chart",{publish:{data:null,url:"",params:"",width:null,height:null,margin:null,noData:"No Data Available.",with3dShadow:!1,withTransitions:!1},nvModel:null,configureChart:function(){var a=this.shadowRoot.querySelector("div");this.with3dShadow&&(a.className+=" with-3d-shadow"),this.withTransitions&&(a.className+=" with-transitions"),this.chart.margin(this.margin).noData(this.noData)},created:function(){this.chart=null,this.svg=null,this.data=this.data||[],this.margin=this.margin||{top:30,right:30,bottom:50,left:60}},ready:function(){this.svg=d3.select(this.$.svg),this.manageDataFromUrl(),this.createChart()},createChart:function(){var a,b=this;nv.addGraph(function(){return b.chart=b.nvModel(),b.chart.tooltip&&b.chart.tooltip.chartContainer(b.svg.node().parentNode),b.configureChart(),b.updateData(),window.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(function(){b.resizeChart()},300)}),b.chart})},resizeChart:function(){var a=this.shadowRoot.host,b=this.shadowRoot.querySelector("div"),c=this.width?this.width:a.offsetWidth,d=this.height?this.height:c/1.618;b.style.width=c+"px",b.style.height=d+"px",this.chart.width(c).height(d),this.svg.call(this.chart),nv.utils.windowResize(this.chart.update)},updateData:function(){this.svg&&this.chart&&(this.svg.datum(this.data).call(this.chart),this.resizeChart())},manageDataFromUrl:function(){var a=this;if(this.url){var b=this.shadowRoot.querySelector("core-ajax");b.addEventListener("core-response",function(b){a.url="",a.data=b.detail.response}),b.go()}},dataChanged:function(){this.updateData()},urlChanged:function(){this.manageDataFromUrl()}}),Polymer("nvd3-bullet-chart",{publish:{color:nv.utils.defaultColor(),forceX:[]},nvModel:nv.models.bulletChart,configureChart:function(){this["super"](),this.chart.color(this.color).forceX(this.forceX)}}),Polymer("nvd3-cumulative-line-chart",{publish:{x:function(a){return a.x},y:function(a){return a.y/100},color:nv.utils.defaultColor(),isArea:!1,showXAxis:!0,showYAxis:!0,showLegend:!0,useInteractiveGuideline:!0,xAxisAxisLabel:"",xAxisRotateLabels:0,xAxisTickFormat:function(a){return d3.format("d")(a)},yAxisAxisLabel:"",yAxisRotateLabels:0,yAxisTickFormat:function(a){return d3.format(".2f")(a)}},nvModel:nv.models.cumulativeLineChart,configureChart:function(){this["super"](),this.chart.color(this.color).x(this.x).y(this.y).isArea(this.isArea).showXAxis(this.showXAxis).showYAxis(this.showYAxis).showLegend(this.showLegend).useInteractiveGuideline(this.useInteractiveGuideline),this.chart.xAxis.axisLabel(this.xAxisAxisLabel).rotateLabels(this.xAxisRotateLabels).tickFormat(this.xAxisTickFormat),this.chart.yAxis.axisLabel(this.yAxisAxisLabel).rotateLabels(this.yAxisRotateLabels).tickFormat(this.yAxisTickFormat)}}),Polymer("nvd3-discrete-bar-chart",{publish:{x:function(a){return a.label},y:function(a){return a.value},color:nv.utils.defaultColor(),showXAxis:!0,showYAxis:!0,xAxisAxisLabel:"",xAxisRotateLabels:0,xAxisTickFormat:function(a){return a},yAxisAxisLabel:"",yAxisRotateLabels:0,yAxisTickFormat:function(a){return d3.format(".2f")(a)}},nvModel:nv.models.discreteBarChart,configureChart:function(){this["super"](),this.chart.color(this.color).x(this.x).y(this.y).showXAxis(this.showXAxis).showYAxis(this.showYAxis),this.chart.xAxis.axisLabel(this.xAxisAxisLabel).rotateLabels(this.xAxisRotateLabels).tickFormat(this.xAxisTickFormat),this.chart.yAxis.axisLabel(this.yAxisAxisLabel).rotateLabels(this.yAxisRotateLabels).tickFormat(this.yAxisTickFormat)}}),Polymer("nvd3-line-chart",{publish:{clipEdge:!1,color:nv.utils.defaultColor(),defined:null,duration:250,forcePoint:[],forceX:[],forceY:[],interpolate:"linear",isArea:function(a){return a.area},rightAlignYAxis:!1,showLegend:!0,showXAxis:!0,showYAxis:!0,useInteractiveGuideline:!0,x:null,y:null,xAxisAxisLabel:"",xAxisRotateLabels:0,xAxisTickFormat:function(a){return d3.format("d")(a)},yAxisAxisLabel:"",yAxisRotateLabels:0,yAxisTickFormat:function(a){return d3.format(".2f")(a)}},nvModel:nv.models.lineChart,configureChart:function(){this["super"](),this.chart.clipEdge(this.clipEdge).color(this.color).duration(this.duration).forcePoint(this.forcePoint).forceX(this.forceX).forceY(this.forceY).interpolate(this.interpolate).isArea(this.isArea).rightAlignYAxis(this.rightAlignYAxis).showLegend(this.showLegend).showXAxis(this.showXAxis).showYAxis(this.showYAxis).useInteractiveGuideline(this.useInteractiveGuideline),this.defined&&this.chart.defined(this.defined),this.x&&this.chart.x(this.x),this.y&&this.chart.y(this.y),this.chart.xAxis.axisLabel(this.xAxisAxisLabel).rotateLabels(this.xAxisRotateLabels).tickFormat(this.xAxisTickFormat),this.chart.yAxis.axisLabel(this.yAxisAxisLabel).rotateLabels(this.yAxisRotateLabels).tickFormat(this.yAxisTickFormat)}}),Polymer("nvd3-multi-bar-chart",{publish:{x:function(a){return a.x},y:function(a){return a.y},color:nv.utils.defaultColor(),showXAxis:!0,showYAxis:!0,xAxisAxisLabel:"",xAxisRotateLabels:0,xAxisTickFormat:function(a){return a},yAxisAxisLabel:"",yAxisRotateLabels:0,yAxisTickFormat:function(a){return d3.format(".2f")(a)}},nvModel:nv.models.multiBarChart,configureChart:function(){this["super"]();var a=new d3.range(0,3).map(function(a,b){return{key:"Stream"+b,values:new d3.range(0,11).map(function(a,b){return{y:10+100*Math.random()*(Math.floor(100*Math.random())%2?1:-1),x:b}})}});console.log(JSON.stringify(a)),this.chart.color(this.color).x(this.x).y(this.y).showXAxis(this.showXAxis).showYAxis(this.showYAxis),this.chart.xAxis.axisLabel(this.xAxisAxisLabel).rotateLabels(this.xAxisRotateLabels).tickFormat(this.xAxisTickFormat),this.chart.yAxis.axisLabel(this.yAxisAxisLabel).rotateLabels(this.yAxisRotateLabels).tickFormat(this.yAxisTickFormat)}}),Polymer("nvd3-pie-chart",{publish:{x:function(a){return a.label},y:function(a){return a.value},color:nv.utils.defaultColor(),showLegend:!0,showLabels:!0},nvModel:nv.models.pieChart,configureChart:function(){this["super"](),this.chart.color(this.color).x(this.x).y(this.y).growOnHover(!1).showLegend(this.showLegend).showLabels(this.showLabels)}}),Polymer("nvd3-scatter-chart",{publish:{x:function(a){return a.x},y:function(a){return a.y},color:nv.utils.defaultColor(),showXAxis:!0,showYAxis:!0,showLegend:!0,showDistX:!1,showDistY:!1,clipVoronoi:!0,useVoronoi:!0,xAxisAxisLabel:"",xAxisRotateLabels:0,xAxisTickFormat:function(a){return d3.format(".2f")(a)},yAxisAxisLabel:"",yAxisRotateLabels:0,yAxisTickFormat:function(a){return d3.format(".2f")(a)}},nvModel:nv.models.scatterChart,configureChart:function(){this["super"](),this.chart.color(this.color).x(this.x).y(this.y).showXAxis(this.showXAxis).showYAxis(this.showYAxis).showDistX(this.showDistX).showDistY(this.showDistY).useVoronoi(this.useVoronoi).clipVoronoi(this.clipVoronoi).interactive(!0).showLegend(this.showLegend),this.chart.xAxis.axisLabel(this.xAxisAxisLabel).rotateLabels(this.xAxisRotateLabels).tickFormat(this.xAxisTickFormat),this.chart.yAxis.axisLabel(this.yAxisAxisLabel).rotateLabels(this.yAxisRotateLabels).tickFormat(this.yAxisTickFormat)}}),Polymer("nvd3-stacked-area-chart",{publish:{x:function(a){return a.x},y:function(a){return a.y},color:nv.utils.defaultColor(),showXAxis:!0,showYAxis:!0,showLegend:!0,useInteractiveGuideline:!0,xAxisAxisLabel:"",xAxisRotateLabels:0,xAxisTickFormat:function(a){return d3.format("d")(a)},yAxisAxisLabel:"",yAxisRotateLabels:0,yAxisTickFormat:function(a){return d3.format(".2f")(a)}},nvModel:nv.models.stackedAreaChart,configureChart:function(){this["super"](),this.chart.color(this.color).x(this.x).y(this.y).showXAxis(this.showXAxis).showYAxis(this.showYAxis).showLegend(this.showLegend).useInteractiveGuideline(this.useInteractiveGuideline),this.chart.xAxis.axisLabel(this.xAxisAxisLabel).rotateLabels(this.xAxisRotateLabels).tickFormat(this.xAxisTickFormat),this.chart.yAxis.axisLabel(this.yAxisAxisLabel).rotateLabels(this.yAxisRotateLabels).tickFormat(this.yAxisTickFormat)}});