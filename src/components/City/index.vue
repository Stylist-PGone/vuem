<template>
		<div>
			热门city：
			<div class="hot">
				<ul>
					<li>北京</li>
					<li>上海</li>
					<li>西宁</li>
					<li>南京</li>
					<li>武汉</li>
				</ul>
			</div>
		</div>
</template>
<script>
		export default{
			name:'City',
			components:{
				
			}
		}

</script>
<style scoped>
	.hot{
		width: 90%;
		margin:0 auto;
		background: pink
	}
	.hot ul li{
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