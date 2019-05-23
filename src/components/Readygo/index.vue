<template>
		<div>
			<ul>
				<li>
				<img src="@/assets/5.jpg" class="thumb" alt="">
				《skt》
					<div class="btn">
						预告
					</div>
				</li>
				<li>
				<img src="@/assets/6.jpg" class="thumb" alt="">
				《jdg》
					<div class="btn">
						预告
					</div>
				</li>
				<li>
				<img src="@/assets/7.jpg" class="thumb" alt="">
				《snake》
				<div class="btn">
						预告
					</div>
				</li>
				<li>
				<img src="@/assets/8.jpg" class="thumb" alt="">
				《lgd》
				<div class="btn">
						预告
					</div>
				</li>
			</ul>
		</div>
</template>
<script>
		export default{
			name:'Readygo',
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
		background: blue;
		height: 30px;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		position: absolute;
		bottom:0;
		right: 15px;
	}
</style>