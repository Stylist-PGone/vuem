<template>
		<div>
			<Header title='我的'></Header>
			<Login></Login>
			<Tabar></Tabar>
		</div>
</template>
<script>
		import Header from '@/components/Header'
		import Tabar from '@/components/Tabar'
		import Login from '@/components/logins2'
		export default{
			name:'mine',
			components:{
				Header,
				Tabar,
				Login
			}
		}
</script>
<style>
	
</style>