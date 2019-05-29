<template>
		<div>
			<input ref='input2' v-model="message" type="text" placeholder="please input..."> <button>搜索</button>
			<ul class='ulno' ref='ulxxx'>
				<Li  v-for="(item,index) in movieList"   :class="{'activeli':index===isactive}"  @click="change(item.nm)">
					{{item.nm}}
				</Li>
			</ul>
		</div>
		
</template>
<script>
		export default{
			name:'Search',
			components:{
				
			},
			data(){
				return{
					no:false,
					isactive:false,
					searchMovie:[],
					message:'',
					movieList:[]
				}
			},
			mounted(){
				// this.axios.get('/api/testcityport/index3.php').then((res)=>{
				// 	console.log(res.data)
				// })
				
			},
			methods:{
				cancelRequest(){
					if(typeof this.source==="function"){
						this.source('终止') //防抖动
					}
				},
				addclass(index){
					this.isactive=index
					
				},
				removeclass(index){
					this.isactive=null
				},
				change(index){
						
						this.$refs.input2.value=index
						this.$refs.ulxxx.style.display='none'
						//this.message=''
				},
				
				addActive(index){
					alert(6)
				}
			},
			watch:{
				message(newValue){
					var that=this
					this.cancelRequest();
					if(newValue!==''){ //防止抖动 快速输入拦截
						this.axios.get('/api/testcityport/index4.php?kw='+newValue,{
							cancelToken:new this.axios.CancelToken(function (c){
								that.source=c
							})
						}).then((res)=>{
							console.log(res.data)
							this.movieList=res.data.data.cinemas.list
							console.log(this.isactive)
							this.$refs.ulxxx.style.display='block'
						}).catch(err=>{
							if(this.axios.isCancel(err)){
								console.log('Request canceled',err.message); //请求取消返回取消的message
							}else{
								console.log(err)
							}
						})	
					}else{
						this.movieList=''
					}
					
				}
			},
			filters:{
				getCard(key){
					
				}
			}
		}

</script>
<style scoped>
	input{
		width: 70%;
		border: none;
		background: #f0f0f0;
		font-size: 25px;
		height: 50px;
		margin-left: 2.5%;
		margin-top: 30px;
	}
	.none{
		display: none;
	}
	.activeli{
		background: yellow;

	}
	.ulno li:hover{
		background: yellow;
	}
	button{
		width: 25%;
		background: blue;
		height: 50px;
		color: #fff;
		border: none;
		position: relative;
		top: -5px;
		margin-top: 30px;
	}
</style>