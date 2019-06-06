<template>
		<div>
			<Header title='xxx-movie'></Header>
			<ul class="bul1">
				<router-link to='/movie/city' tag='li'>
					{{$store.state.city.nm}}
				</router-link>
				<router-link to='/movie/nowmovie'  tag='li'>
					热映
				</router-link>
				<router-link to='/movie/readygo'  tag='li'>
					即将上映
				</router-link>
				<router-link to='/movie/search' tag='li'>
					搜索
				</router-link>
			</ul>
			<keep-alive>
				<router-view/>
			</keep-alive>
			<Tabar></Tabar>

		</div>
</template>
<script>
		import Header from '@/components/Header'
		import Tabar from '@/components/Tabar'
		import {messagebox} from '@/components/Js'
		export default{
			name:'movie',
			components:{
				Header,
				Tabar

			},
			activated(){
				console.log(789987)
				console.log('----'+this.$store.state.city.id)
				if(this.$store.state.city.id==2){
					return
				}
				messagebox({
					title:'定位',
					content:'上海555',
					cancel:'取消',
					ok:'切换定位',
				
					handleOk:function(){
						window.localStorage.setItem('nowcity','上海')
						window.localStorage.setItem('nowid',2)
						window.location.reload()
					}
				})
			}
		}

</script>
<style>
	.bul1 li{
		float: left;
		width: 25%;
		text-align: center;
		height: 28px;
		text-align: center;
		line-height: 28px;
		list-style: none;
		border: 1px solid #333;
	}
	ul li.active{
		background: yellowgreen;
	}
</style>