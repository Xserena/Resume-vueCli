<!-- 1.模板：html结构 -->
<template>   <!-- 只能有一个根标签 -->
  <div id="app">
    <div class="box" ondragstart="return false">
      <p>
        <img src="./assets/img/photo.png">
        <ul>
          <li>{{user.name}}</li>
          <li>{{user.univer}}</li>
          <li>{{user.age}}</li>
          <li>{{user.career}}</li>
        </ul>
      </p>
      <p class="dpt"><router-link to='/'>项目经验</router-link></p>
      <p class="dpt"><router-link to='/exp'>工作经验</router-link></p>  
      <div class="blog">
        <p class="github">
          <a href="https://github.com/Xserena" target="_blank"></a><br><span>GitHub</span>
        </p>
        <p class="csdn">
          <a href="https://blog.csdn.net/Biebersxzl" target="_blank"></a><br><span>CSDN</span>
        </p>
      </div>
      <div class="conta">
        <p class="phone">
        <span>
          {{user.phone}}
        </span>
      </p>
      <p class="email">
        <span>
          {{user.email}}
        </span>
      </p>
      </div>
      
    </div>
    <div class="content">
       <router-view></router-view>
    </div>
   
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
//引入要使用的文件
// import Home from './components/Home'         //Test文件名

export default {
  name: 'app',
  data(){
    return {          
      user:{name:"谢卓玲",age:"27岁",univer:"西南大学--本科",career:"web前端",phone:"18780162375",email:"2286465251@qq.com"}
    }
  },
  components: {
  }
}

</script>

<!--3. 样式 -->
<style>
html,body,#app {
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  display: flex;
  display: -webkit-flex; /* Safari */
  color: rgba(200,200,200);
}
.box{
  -webkit-flex: 1;
  flex: 1;
  height:100%;
  background-color: rgba(24,24,24,1);

}
.box ul{
  display: inline-block;
  list-style: none;
}
.box ul li{
  margin-top: 10px;
  font-size: 15px;
  text-align: left;
}
.content{
  -webkit-flex: 3;
  flex: 3;
}
img{
  margin-top: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: -30px;
  margin-right: 50px;
  }
  .dpt{
    margin-top: 80px;
  }
  .dpt a{
    display: inline-block;
    width: 130px;
    font-size: 20px;
    text-decoration: none;
    color: rgb(200,200,200);
    padding-bottom: 10px;
    border-bottom : 2px solid #2c3e50;
  }
  .blog p{
    display: inline-block;
    margin: 40px 30px;

  }
  .blog a{
    display: inline-block;
    width: 30px;
    height:30px;  
    border-radius: 50%;   
  }
  .blog span{
    font-size: 12px;
  }
  .github a{
     background-image: url("./assets/img/github.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .csdn a{
    background-image: url("./assets/img/csdn.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .conta p{
    margin-bottom:30px; 
  }
  .conta span{
    margin-left: -130px;
    display: inline-block;
    width: 24px;
    height:24px;  
    border-radius: 50%;  
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: 40px;
     font-size: 12px;
  }
  .phone span{    
    background-image: url("./assets/img/phone.png");    
  }
  .email span{
    background-image: url("./assets/img/qq.png");
  }
</style>
