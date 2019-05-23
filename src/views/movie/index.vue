<template>
		<div>
			<Header title='xxx-movie'></Header>
			<ul class="bul1">
				<router-link to='/movie/city' tag='li'>
					城市
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
		
		export default{
			name:'movie',
			components:{
				Header,
				Tabar
				
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