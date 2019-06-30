<template>
	<div class="exp">
		<ul>
			<li class="acn">
				<img src="../assets/img/key.svg">
				<p>上海翎阳网络科技有限公司</p>
				<p>2018.10-至今</p>
				<p>前端工程师</p>
			</li>
			<li class="acn">
				<img src="../assets/img/acn.png">
				<p>埃森哲</p>
				<p>2015.2--2017.7</p>
				<p>金融相关</p>
			</li>
			<li class="pwc">
				<img src="../assets/img/pwc.png">
				<p>普华永道</p>
				<p>2017.7--2018.3</p>
				<p>咨询相关</p>
			</li>
		</ul>
	</div>
</template>
<script>
	//给外界使用
	export default {
		  name:"exp",     //对应1
		  //数据
		  data(){
		  	return {		  		
		  	}
		  },
		  //事件
		  methods:{

		  }
	}
</script>
<style scoped>
	.exp ul li{
		display: inline-block;
		width: 30%;
		height: 200px;
		margin:30px;
		margin-top: 100px;
		line-height: 40px;
	}
	.exp ul .acn{
		background-color: rgba(70,140,229,1);
		position: relative;
	}
	.exp ul .pwc{
		background-color: #FF9933;
	}
	.exp img{
		border-radius: 0;
		height: 50px;
		margin-top: 10px;
		margin-left: -100px;
		display: inline-block;
	}
	.exp ul p{
		color: #fff;

	}
	.tex{
		margin-top: 100px;
		color: green;
		font-weight: bolder;

	}
</style>