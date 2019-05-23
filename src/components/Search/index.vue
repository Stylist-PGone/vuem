<template>
		<div>
			<input type="text" placeholder="please input..."> <button>搜索</button>
		</div>
</template>
<script>
		export default{
			name:'Search',
			components:{
				
			}
		}

</script>
<style scoped>
	input{
		width: 70%;
		border: none;
		background: #f0f0f0;
		font-size: 25px;
		height: 50px;
		margin-left: 2.5%;
		margin-top: 30px;
	}
	button{
		width: 25%;
		background: blue;
		height: 50px;
		color: #fff;
		border: none;
		position: relative;
		top: -5px;
		margin-top: 30px;
	}
</style>