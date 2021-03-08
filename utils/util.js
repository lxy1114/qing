export default {
	setNumber(number) {
		if(number == 0){
			return '00:00'
		}
		var minute = number.split(':')[0]
		var second = number.split(':')[1]
		minute = this.setDigit(minute)
		second = this.setDigit(second)
		var result = minute+':'+second
		return result
	},
	setDigit(value) {
		value = typeof value == 'string' ? value : String(value)
		if(value.length == 1){
			value = '0'+value
		}
		return value
	},
	getTime(time) {
		var current = new Date().getTime()
		var difference = current-time
		var date = ''
		if(difference <= 60){
			date = '刚刚'
		}else if(difference <= 60*60){
			date = parseInt(difference/60)+'分钟前'
		}else if(new Date().getFullYear() == new Date(time).getFullYear() && new Date().getMonth() == new Date(time).getMonth() && new Date().getDate() == new Date(time).getDate()){
			date = this.getNumber(new Date(time).getHours())+':'+this.getNumber(new Date(time).getMinutes())
		}else{
			date = new Date(time).getFullYear()+'-'+this.getNumber(new Date(time).getMonth()+1)+'-'+this.getNumber(new Date(time).getDate())+' '+this.getNumber(new Date(time).getHours())+':'+this.getNumber(new Date(time).getMinutes())
		}
		return date
	},
	getNumber(number) {
		if(String(number).length == 1){
			number = '0'+number
		}
		return number
	},
	getDura(duration) {
		if(String(duration).indexOf(':') != -1 ) return
		var minute = parseInt(duration/1000/60)
		var second = parseInt(duration/1000%60)
		duration = this.getNumber(minute)+':'+this.getNumber(second)
		return duration
	},
	toast(msg) {
		uni.showToast({
			title: msg,
			icon: 'none',
			duration: 1000
		})
	},
	navigateTo(url) {
		uni.navigateTo({
			url: url
		})
	},
	reLaunch(url) {
		uni.navigateTo({
			url: url
		})
	},
}