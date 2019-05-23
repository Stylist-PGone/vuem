<template>
		<div>
			<Header title='影院'></Header>
			<Cinamelist></Cinamelist>
			<Tabar></Tabar>
		</div>
</template>
<script>
		import Header from '@/components/Header'
		import Tabar from '@/components/Tabar'
		import Cinamelist from '@/components/cinamelist'
		export default{
			name:'mine',
			components:{
				Header,
				Tabar,
				Cinamelist
			}
		}

</script>
<style>
	
</style>