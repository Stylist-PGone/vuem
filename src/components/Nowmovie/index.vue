<template>
			<div class="box">
				{{olddata}}
				<scoller ref='childcomponent' @childfunction="getdata" :handleToScroll='handleToScroll' :handleToEnd="handleToEnd">
					<div class="boxchild">
						{{notice}}
							<ul>
								<li @tap="godateil()" v-for="(item,index) in movieData">
								<img :src="item.img|setWh('128.180')" class="thumb" alt="">
								{{item.nm}} <img v-if="item.version" src="@/assets/dui.png" alt="">
									<div class="btn">
										购票
									</div>
								</li>
								
							</ul>
							
					</div>
				</scoller>	
				<loading v-if="loading">
				</loading>		
			</div>
</template>
<script>
	// import Bscoll from 'better-scroll'
		export default{
			name:'Nowmovie',
			components:{
				
			},
			data(){
				return{
					urltest:'http://jjj/w.h/xxx',
					movieData:[],
					notice:'',
					olddata:'wobushixxxboooo',
					loading:true,
					preid:-1
				}
			},
			activated(){

				//this.$refs.childcomponent.testchildcomponent()
				//var nowList=window.localStorage.getItem('nowList')
				// if(nowList){
				// 	this.movieData=JSON.parse(nowList)
				// 	this.loading=false
				// }else{
					var cityId=this.$store.state.city.id
					console.log('before+++cityid'+cityId)
					if(cityId==this.preid){
						return
					}
					else{
						console.log('cityid-------------'+cityId)
						this.loading=true
						this.axios.get('/api/testcityport/index2.php?id='+cityId).then(
							(res)=>{
								
								var msg=res.data.msg
								if(msg='ok'){
									setTimeout(()=>{
										this.movieData=res.data.data.movieList
										window.localStorage.setItem('nowList',JSON.stringify(res.data.data.movieList))
										this.loading=false
										this.preid=cityId
									},1500)
									
								}
								
							// this.$nextTick(()=>{ 
							// 	// var benscroll=new Bscoll(this.$refs.box,{
							// 	// 	tap:true,
							// 	// 	probeType:1
							// 	// })
							// 	benscroll.on('scroll',(pos)=>{
							// 		if(pos.y>30){
							// 			this.notice='正在更新中'
							// 		}
							// 	})
							// 	benscroll.on('touchEnd',(pos)=>{
							// 		if(pos.y>30){
							// 			this.notice='更新完成'
							// 			setTimeout(()=>{
							// 				this.notice=''
							// 			},1000)
										
							// 		}
							// 	})
							// })
							
						})
					}
					
				//}
				
			
			},
			methods:{
				getdata(data){
					this.olddata=data
				},
				godateil(){
					
				},
				handleToScroll(pos){
					if(pos.y>30){
						this.notice='正在更新中'
					}
				},
				handleToEnd(pos){
					if(pos.y>30){
						this.notice='更新完成'
							setTimeout(()=>{
									this.notice=''
							},1000)
								
					}
				}
			}
		}

</script>
<style scoped>
	.thumb{
		width: 70px;
		height: 120px;
		float: left;
	}
	.box{
		height: 500px;
		width: 100%;
		
		overflow: hidden;
	}

	.boxchild{
		width: 100%;
		overflow: hidden;
		/*可以解决li 等float元素没有高的问题*/
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