<template>

	
	<div class="wrap" ref='box'>

<!-- 
		<button @click="select(x1)" >click</button> -->
		<slot></slot>
		
	</div>
</template>
<script>
	import Bscoll from 'better-scroll'
	export default{
		name:'scroller',
		props:{
			handleToScroll:{
				type:Function,
				default:function(){
					console.log(66)
				}
			},
			handleToEnd:{
				type:Function,
				default:function(){console.log(66)}
			}
		},
		data(){
			return{
				x1:999
			}
		},
		methods:{
			select(val){
				this.$emit('childfunction',val)
			},
			testchildcomponent(){
				console.log('父组件可以通过挂载在子组件在这里是scoller的ref来调用我的testxchildcominet方法')
			},
			toScrollTop(){
				this.scoll.scrollTo(0,-400)
				
			}
		},
		mounted(){
			//this.$nextTick(()=>{ 
				var benscroll=new Bscoll(this.$refs.box,{
								tap:true,
								probeType:1
				})
				this.scoll=benscroll
				benscroll.on('scoll',(pos)=>{
					this.handleToScroll(pos)
				})
				benscroll.on('touchEnd',(pos)=>{
					this.handleToEnd(pos)
				})
			//})	
		}
		
	}
</script>
<style>
	.boxchild{
		width: 100%;
		
		/*可以解决li 等float元素没有高的问题*/
	}

	.box{
		height: 500px;
		width: 100%;	
	}

		.boxchild{
		width: 100%;
		overflow: hidden;
		/*可以解决li 等float元素没有高的问题*/
	}
	.wrap{
		height: 100%;
	}


	.button{
		
		width: 200px;
		height: 50px;
		
	}

</style>