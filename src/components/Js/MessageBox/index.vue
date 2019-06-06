<template>
		<div class="message">
			<h2>{{title}}</h2>
			<p>{{content}}</p>
			<div>
				<div @touchend="handleCancle">{{cancel}}</div>
				<div @touchend="handleOk">{{ok}}</div>
			</div>
		</div>
</template>
<script>
		
		export default{
			name:'messagebox'
		}

</script>
<style scoped>
	.message{
		width: 80%;
		height: 260px;
		background: #666;
		font-size: 22px;
		text-align: center;
		position: fixed;
		top: 150px;
		position: relative;
		left: 10%;
		position: fixed;
	}
	.message>div{
		width: 100%;
		border: 1px solid #fff;
		display: flex;
		position: absolute;


	}
	.message >div div{
		flex: 1;
		width: 50%;
		text-align: center;
		border-right: 1px solid #fff;
	}
	.message >div div:last-child{
		border: none;
	}
</style>