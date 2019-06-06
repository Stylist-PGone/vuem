<template>
		<div class="box">
			<scoller ref="city_ref">
				<div>
				<div class="boxchild">
						热门city：
						<div class="hot">
							<ul>
								<Li @tap="handleTocity(item.nm,item.id)"  v-for="(item,index) in cityListtrue" :key="index">
									{{item.nm}}
								</Li>
							</ul>
							<ul ref="cityul" class='sul'>
								<li  v-for="(item,index) in cityList" :key="index"   ref='item' @tap="liClick()">
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
				</div>
			</scoller>			
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
					cityListtrue:[
						{nm:'北京',id:1,state:1},
						{nm:'上海',id:2,state:1},
						{nm:'深圳',id:3,state:1},
						{nm:'武汉',id:4,state:1}
					],
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
					
					this.$refs.city_ref.toScrollTop()
					//window.location.href="#"+(i7+1)
				},
				handleTocity(nm,id){
					this.$store.commit('city/CITY_INFO',{nm,id})
					window.localStorage.setItem('nowcity',nm)
					window.localStorage.setItem('nowid',id)
					this.$router.push('/movie/Nowmovie')
				}
			}}

		
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