import Vue from 'vue'
import MessageBox from './MessageBox'
export var messagebox=(function(){
	var defaults={//默认值
		title:'8888',
		content:'',
		cancel:'',
		ok:'',
		handleCancle:null,
		handleOk:null,
	}
	var MyComponent=Vue.extend(MessageBox)
	return function(opts){ //配置参数
		for (var attr in opts){
			defaults[attr]=opts[attr]
		}
	
		var vm=new MyComponent({	
			el:document.createElement('div'),
			data:{
				title:defaults.title,
				content:defaults.content,
				cancel:defaults.cancel,
				ok:defaults.ok
			},

			methods:{
				handleCancle(){
					defaults.handleCancle&&defaults.handleCancle.call(this)
					document.body.removeChild(vm.$el)
				},
				handleOk(){
					defaults.handleOk&&defaults.handleOk.call(this)
					document.body.removeChild(vm.$el)
				}
			}
		})
		document.body.appendChild(vm.$el)

	}
})()