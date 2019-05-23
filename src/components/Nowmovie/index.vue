<template>
		<div>
			<ul>
				<li>
				<img src="@/assets/1.jpg" class="thumb" alt="">
				《the shey》
					<div class="btn">
						购票
					</div>
				</li>
				<li>
				<img src="@/assets/2.jpg" class="thumb" alt="">
				《faker》
					<div class="btn">
						购票
					</div>
				</li>
				<li>
				<img src="@/assets/3.jpg" class="thumb" alt="">
				《rookie》
				<div class="btn">
						购票
					</div>
				</li>
				<li>
				<img src="@/assets/4.jpg" class="thumb" alt="">
				《chedan》
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