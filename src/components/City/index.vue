<template>
		<div>
			热门city：
			<div class="hot">
			
				<ul ref="cityul" class='sul'>
					<li  v-for="(item,index) in cityList" :key="index"   ref='item' @click="liClick(index)">
						{{index}}{{item.city}}
					</li>
				</ul>
				<ul class="tul" ref='testul'>
					<li :id='(i2+1)' v-for="(i1,i2) in uldata" :key="i1.id">
						{{i1.id}}
					</li>
					
				</ul>
			</div>
		</div>
</template>
<script>
		// let reqParams = {
		//     key: 'aaa'
		// };
		export default{
			name:'City',
			data(){
				return{
					cityList:[],
					uldata:[
						{
							id:1
						},
						{
							id:2
						},
						{
							id:3
						}
					]
				}
			},
			components:{
				
			},
			mounted(){ 
				this.axios.get('/api/testcityport/',{params:{key:456}}).then((res)=>{
					//console.log(res.data.citylist)
					this.cityList=res.data.citylist   
				})
				//this.$refs.testul.
				//console.log(this.$refs.cityul)
			},
			methods:{
				liClick(i7){
					
				
					window.location.href="#"+(i7+1)
				}
			}
		}

</script>
<style scoped>
	.hot{
		width: 90%;
		margin:0 auto;
		background: pink
	}
	.tul li{
		width: 300px;
		height: 600px;
		background: #666;
		font-size: 50px;
		color: #fff;
		margin-top: 20px;
	}
	.hot ul.sul li{
		float: left;
		background: #333;
		color: #fff;
		width:20%;
		text-align: center;
		margin-left: 3%;
		border: 1px solid red;
		height: 22px;
		margin-top: 10px;
	}
</style>