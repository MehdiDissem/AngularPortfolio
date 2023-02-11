function createTree(){treeJSON=d3.json("flare.json",function(h){console.log(h),console.log("refreshed tree"),h={name:"Check my skills",children:[{name:"Technical Skills",children:[{name:"languages",children:[{name:"JavaScript"},{name:"TypeScript"}]},{name:"Front-End",children:[{name:"React"},{name:"ReactNative"},{name:"NextJS"},{name:"HTML"},{name:"CSS"},{name:"TailWind"},{name:"Bootstrap"}]},{name:"Back-End",children:[{name:"NodeJS"},{name:"Express"},{name:"Prisma"},{name:"SocketIO"}]},{name:"Databases",children:[{name:"MongoDB"},{name:"MySQL"},{name:"Postgres"},{name:"Firebase"}]}]},{name:"Soft Skills",children:[{name:"Debating"},{name:"Negotiation"},{name:"Time Management"},{name:"Stress Management"},{name:"Conflict Resolution"}]},{name:"Work Experience",children:[{name:"RebootKamp",children:[{name:"Hacker in Residence - 2023"}]},{name:"Craxis Agency",children:[{name:"SEO department manager - 2019/2022"}]},{name:"SportUp",children:[{name:"Digital project manager"}]},{name:"UReputation",children:[{name:"Chief web analytics consultant - 2016/2019"}]},{name:"Universal McCann",children:[{name:"Digital Marketing Intern - 2016 "}]}]},{name:"Freelance",children:[{name:"Wordpress Websites - 2019/2021"},{name:"Articles Writing - 2018/2021"},{name:"Social Media reports - 2019"},{name:"SEO reports - 2021"}]},{name:"Education",children:[{name:"Full-StackJS",children:[{name:"RebootKamp - 2023"}]},{name:"Master's degree in International Trade",children:[{name:"ESSECT - 2016"}]},{name:"Licence degree in Economy",children:[{name:"ESSECT - 2014"}]}]},{name:"Projects",children:[{name:"Portfolios",children:[{name:"Visit My Github"}]},{name:"DelivAir",children:[{name:"Visit My Github"}]},{name:"SocialMedia App",children:[{name:"Visit My Github"}]},{name:"OneBlood",children:[{name:"Visit My Github"}]}]}]},console.log(h),console.log("running");var o,f=0,D=0,u=750,g=$(window).width(),p=$(window).height();$(window).resize(function(){g=$(window).width(),p=$(window).height(),console.log("doc height is "+$(window).height())});var c=d3.layout.tree(),v=d3.svg.diagonal().projection(function(e){return[e.y,e.x]});(function k(e,t,a){if(e){t(e);var s=a(e);if(s)for(var d=s.length,m=0;m<d;m++)k(s[m],t,a)}})(h,function(e){f=Math.max(e.name.length,f)},function(e){return e.children&&e.children.length>0?e.children:null}),console.log(f);var r=d3.behavior.zoom().scaleExtent([.1,3]).on("zoom",function F(){l.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")")}),R=d3.select("#tree-container").append("svg").attr("width","100%").attr("height","100%").attr("class","overlay").call(r);function w(e){e.children&&(e._children=e.children,e._children.forEach(w),e.children=null)}var E=function(){var e=[];null!==draggingNode&&null!==selectedNode&&(e=[{source:{x:selectedNode.y0,y:selectedNode.x0},target:{x:draggingNode.y0,y:draggingNode.x0}}]);var t=l.selectAll(".templink").data(e);t.enter().append("path").attr("class","templink").attr("d",d3.svg.diagonal()).attr("pointer-events","none"),t.attr("d",d3.svg.diagonal()),t.exit().remove()};function b(e){scale=r.scale(),x=-e.y0,y=-e.x0,x=x*scale+g/2,y=y*scale+p/2,d3.select("g").transition().duration(u).attr("transform","translate("+x+","+y+")scale("+scale+")"),r.scale(scale),r.translate([x,y])}function j(e){T(e=function Y(e){return e.children?(e._children=e.children,e.children=null):e._children&&(e.children=e._children,e._children=null),e}(e)),b(e)}function T(e){var t=[1],a=function(n,i){i.children&&i.children.length>0&&(t.length<=n+1&&t.push(0),t[n+1]+=i.children.length,i.children.forEach(function(G){a(n+1,G)}))};a(0,o);var s=25*d3.max(t),d=(c=c.size([s,g])).nodes(o).reverse(),m=c.links(d);d.forEach(function(n){n.y=n.depth*(10*f)}),node=l.selectAll("g.node").data(d,function(n){return n.id||(n.id=++D)});var S=node.enter().append("g").attr("class","node").attr("transform",function(n){return"translate("+e.y0+","+e.x0+")"}).on("click",j);S.append("circle").attr("class","nodeCircle").attr("r",5).style("fill",function(n){return n._children?"lightsteelblue":""}),S.append("text").attr("x",function(n){return n.children||n._children?-10:10}).attr("dy",".35em").attr("class","nodeText").attr("text-anchor",function(n){return n.children||n._children?"end":"start"}).text(function(n){return n.name}).style("fill-opacity",0),S.append("circle").attr("class","ghostCircle").attr("r",30).attr("opacity",.2).style("fill","red").attr("pointer-events","mouseover").on("mouseover",function(n){!function(e){selectedNode=e,E()}(n)}).on("mouseout",function(n){selectedNode=null,E()}),node.select("text").attr("x",function(n){return n.children||n._children?-10:10}).attr("text-anchor",function(n){return n.children||n._children?"end":"start"}).text(function(n){return n.name}),node.select("circle.nodeCircle").attr("r",2).style("fill",function(n){return n._children?"lightsteelblue":"#fff"}),node.transition().duration(u).attr("transform",function(n){return"translate("+n.y+","+n.x+")"}).select("text").style("fill-opacity",1);var M=node.exit().transition().duration(u).attr("transform",function(n){return"translate("+e.y+","+e.x+")"}).remove();M.select("circle").attr("r",0),M.select("text").style("fill-opacity",0);var C=l.selectAll("path.link").data(m,function(n){return n.target.id});C.enter().insert("path","g").attr("class","link").attr("d",function(n){var i={x:e.x0,y:e.y0};return v({source:i,target:i})}),C.transition().duration(u).attr("d",v),C.exit().transition().duration(u).attr("d",function(n){var i={x:e.x,y:e.y};return v({source:i,target:i})}).remove(),d.forEach(function(n){n.x0=n.x,n.y0=n.y})}var l=R.append("g");r.scale(1.7),console.log(r.scale()+"SDFDSFDSF"),(o=h).x0=p/2,o.y0=0,function N(e){e.children&&(e.children.forEach(N),w(e))}(o),T(o),b(o)})}