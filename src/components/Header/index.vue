<template>
		<header>
			{{title}}
		</header>
</template>
<script>
		export default{
			name:'headers',
			props:{
				title:{
					type:String,
					default:'xxx-movie'
				}
			}
		}

</script>
<style>
	header{
		height: 60px;
		background: orange;
		text-align: center;
		font-size: 18px;
		color: #FFF;
		line-height: 60px;
	}
</style>