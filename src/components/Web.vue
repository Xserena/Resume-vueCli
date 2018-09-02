<template>
	<div class="web" ondragstart="return false">
		<p class="title">
			<span>HTML</span>
			<span>CSS</span>
			<span>JS</span>
			<span>Vue.js</span>
		</p>
		<div class="content" v-for="item in items">
			<div class="content_detail" >
				<div class="text">
					<h3>{{item.title}}</h3>
					<p >
						<span v-for="point in item.points">{{point}}</span>
					</p>
					<p><a :href="item.pagehref" target="_blank">{{item.des}}</a>
					<a :href="item.linehref" target="_blank">源码地址</a></p>
					<p class="show">描述：{{item.tex}}</p>
				</div>
				<div class="img">
					<img :src="item.imgUrl" width="100%" height="100%"/>
				</div>
				
			</div>
			<p class="line"></p>
		</div>		
	</div>
</template>
<script>
	//给外界使用
	export default {
		  name:"web",     //对应1
		  //数据
		  data(){
		  	return {		  		
		  		items:[
		  			{title:"在线翻译demo",points:["Vue.js","HTML","Bootswatch","JS"],des:"在线地址(PC端)",pagehref:"https://xserena.github.io/-demo/dist/index.html",linehref:"https://github.com/Xserena/-demo",imgUrl:require("../assets/img/tans.png"),tex:"使用vue-cli搭建，通过vue-resource模块向Translate API发送http请求，利用vue的一些基本指令及MVVM思想传输数据，实现一个在线翻译器的小demo。"},
		  			{title:"二千炸鸡店",points:["Vue-Cli","HTML","Bootswatch","JS"],des:"在线地址(PC端)",pagehref:"https://xserena.github.io/qianShop/dist/index.html",linehref:"https://github.com/Xserena/qianShop",imgUrl:require("../assets/img/qian.png"),tex:"使用vue-cli搭建，Vue-Router实现多级路由跳转；结合vue的MVVM思想实现商品的选择，金额计算。但目前对IE不太友好。"},
		  			{title:"购物车单页面",points:["Vue.js","HTML","CSS","JS"],des:"在线地址(手机端)",pagehref:"https://xserena.github.io/goShop/page.html",linehref:"https://github.com/Xserena/goShop",imgUrl:require("../assets/img/goshop.png"),tex:"使用Vue的MVVM思想模式，实现购物车单页面模拟。选择/删除商品，自动计算总价，合计。"},
		  			{title:"网页设计一",points:["HTML","CSS","JS","Bootstrap"],des:"在线地址(PC端)",pagehref:"https://xserena.github.io/HomePage/HomePage.html",linehref:"https://github.com/Xserena/HomePage",imgUrl:require("../assets/img/homepage.png"),tex:"由HTML、CSS、JS原生制作的页面，添加了拖动按钮，单击拖动，双击打开，链接到其他的网址，百度搜索功能。"},
		  			{title:"网页设计二",points:["HTML","CSS","JS","Bootstrap"],des:"在线地址(PC端)",pagehref:"https://xserena.github.io/HomePage/msg.html",linehref:"https://github.com/Xserena/HomePage",imgUrl:require("../assets/img/msg.png"),tex:"发表文章，留言，点赞,听音乐-->采用的是sessionStorage储存数据，模拟PHP+MySQL联系前后端的模式。有一些小bug，只有采用刷新页面的模式保存数据。另外，之前是用PHP+MySQL写的，但是能力有限，写到留言部分发现需要重新改结构才能继续。所以采用了sessionStorage模拟流程"},
		  			{title:"网页设计三",points:["Canvas","CSS","JS","Bootstrap"],des:"在线地址(PC端)",pagehref:"https://xserena.github.io/HomePage/graffiti.html",linehref:"https://github.com/Xserena/HomePage",imgUrl:require("../assets/img/huaban.png"),tex:"画板，将作品设置旋转效果，Canvas的功能太炫，不过按个人能力做了一个简单的，旋转效果是一个想法，就是希望想想和网上作品不一样的...，简历中的画看起来很别扭吧，不过都是个人用这个画板画的，不用PS切图就能获取透明背景图画，而且还可以原创^-"},
		  			{title:"网页设计四",points:["Python","HTML","CSS","JS"],des:"在线地址(PC端)",pagehref:"https://xserena.github.io/HomePage/output.html",linehref:"https://github.com/Xserena/HomePage",imgUrl:require("../assets/img/python.png"),tex:"爬虫，听了一点点Python爬虫的课，尝试着爬了一点新闻内容，也算是和前端有一丢丢联系吧。"}
		  		],
		         
		  	}
		  },
		  //事件
		  methods:{

		  }
	}
</script>
<style scoped>
	.web{
		height: 100%;
		overflow-y: scroll;

	}
	.title{
		width: 100%;
		margin: auto;
		color: green;
		font-weight: bolder;
		font-size: 22px;
		margin-top: 50px;

	}
	.title span{
		margin:50px;
	}
	.content{
		color: rgb(88,88,88);
		margin-top: 10px;
	}
	.content_detail{
		width: 90%;
		display: flex;
		display: -webkit-flex; /* Safari */
		height:350px; 
		margin:auto;
	}
	.content_detail .img{
		-webkit-flex: 2;
		flex: 2;
		margin-bottom: 80px;
	}
	.content_detail .img img{		
		width: 100%;
		height: 100%;
		border-radius: 0;
	}
	.content_detail .text{
		-webkit-flex: 3;
		flex: 3;
		margin-top: 50px;
		text-align: left;
		color: #000;
	}
	.content_detail .text span{
		padding: 2px 5px;
		display: inline-block;
		margin: 10px 20px 10px 0; 
		font-size: 13px;
		background-color: #80bd01;
		border-radius: 3px;
		color: #ffffff;
	}
	.content_detail .text span:nth-child(2){
		background-color: #f60;
	}
	.content_detail .text span:nth-child(3){
		background-color: #0066FF;
	}
	.content_detail .text span:nth-child(4){
		background-color:#FF0033;
	}
	.content_detail .text .show{
		margin-top: 10px;
		padding-right: 40px;
	}
	.content_detail .text a{
		text-decoration: none;
		margin-right: 20px;
		color: #6666FF;
	}
	.line{
		width: 90%;
		margin:auto;
		margin-bottom: 20px;
		border: 1.5px dashed rgb(168,168,168);
	}
</style>