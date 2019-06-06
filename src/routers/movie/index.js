export default{
	path:'/movie',
	component:()=>import('@/views/movie'),
	children:[
		{
			path:'city',
			component:()=>import('@/components/City')
		},
		{
			path:'readygo',
			component:()=>import('@/components/Readygo')
		},
		{
			path:'search',
			component:()=>import('@/components/Search')
		},
		{
			path:'nowmovie',
			component:()=>import('@/components/Nowmovie')
		},
		{
			path:'/',
			redirect:to=>{
				return '/movie/nowmovie'
			}
		}
	]
}