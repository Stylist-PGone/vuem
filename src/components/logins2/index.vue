<template>
		<div>
			username: <input type="text" name='u'> <br>
			password: <input type="text" name="p"> <br>
			<button>GO</button>
			<a href="">登陆</a>
			<a href="">注册</a>
		</div>
</template>
<script>
		export default{
			name:'logins2',
			components:{
				
			}
		}

</script>
<style scoped>
	input{
		width: 200px;
	}
	button{
		width: 45px;
		height: 30px;
		background: orange;
		color: #fff;
		line-height: 30px;
		display: block;
		margin:0 auto;
	}
</style>