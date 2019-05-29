module.exports={
	devServer:{
		proxy:{
			'/api':{
				target:'http://www.raygod.cn',
				changeOrigin:true,
				pathRewrite: {
                '^/api': ''
           		}
			}
		}
	}
}