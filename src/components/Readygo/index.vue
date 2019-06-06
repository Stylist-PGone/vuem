<template>
		<div class="box">
			<scoller>
				<div class="boxchild">
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
							2<li>
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
			</scoller>
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