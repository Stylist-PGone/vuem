<template>
		<footer>
			<ul>
				<router-link  tag='li' to='/movie'>
					movie
				</router-link>
				<router-link tag='li' to='/ciname'>
					ciname
				</router-link>
				<router-link tag='li' to='/mine'>
					mine
				</router-link>
			</ul>
		</footer>
</template>
<script>
		export default{
			name:'Tabar'
		}

</script>
<style scoped>
	ul li{
		float: left;
		width: 33.33%;
		line-height: 60px;
		background: #666;
		height: 60px;
		color: #fff;
		text-align: center;
		list-style: none;
	}
	ul li.active{
		background: #fff;
		color:#000;
		border:1px solid #000;
	}
	footer{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>