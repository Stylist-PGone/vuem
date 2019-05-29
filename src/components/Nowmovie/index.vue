<template>
		<div>
			<ul>
				<li v-for="(item,index) in movieData">
				<img :src="item.img|setWh('128.180')" class="thumb" alt="">
				{{item.nm}} <img v-if="item.version" src="@/assets/dui.png" alt="">
					<div class="btn">
						购票
					</div>
				</li>
				
			</ul>
		</div>
</template>
<script>
		export default{
			name:'Nowmovie',
			components:{
				
			},
			data(){
				return{
					urltest:'http://jjj/w.h/xxx',
					movieData:[]
				}
			},
			mounted(){
				this.axios.get('/api/testcityport/index2.php').then(
				(res)=>{
					this.movieData=res.data.data.movieList
					console.log(this.movieData)
					//console.log(res.data.data.movieList)
				})
			//	console.log(this.urltest|setWh())
			}
		}

</script>
<style scoped>
	.thumb{
		width: 70px;
		height: 120px;
		float: left;
	}
	ul li{
		float: left;
		width: 50%;
		margin-top: 5px;
		position: relative;
	}
	.btn{
		width: 40px;
		color: #fff;
		background: red;
		height: 30px;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		position: absolute;
		bottom:0;
		right: 15px;
	}
</style>