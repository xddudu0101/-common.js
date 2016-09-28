/**
 * 请求类
 */
var Request = {
	// ajax请求统一入口
	ajax : function(params) {
		 //loading-s
		 $('.blackLay').show();
	     $('.popup').show();
		
		$.ajax({  
            url : params.url, 
            data : params.data,
            type : params.type,
            async : params.async,
            success : function(data) {
            	//loading-e
            	$('.blackLay').hide();
                $('.popup').hide();
            	if (Utils.isNotEmpty(params.callback)) {
            		data.param = params;
            		params.callback(data);
            	} else {
            		if (data.resCode != 0) {
            			Message.show(data.resDesc);
            	    }
            	}
            },
            error: function(){
            	$('.blackLay').hide();
                $('.popup').hide();
                if (Utils.isNotEmpty(params.errorCallback)) {
            		params.errorCallback(data);
            	}
            }
		});
	},
	// ajax请求统一入口
	post : function(params) {
		$.ajax({  
            url : params.url, 
            data : params.data,
            type : 'POST',
            async : params.async,
            success : function(data) {
            	if (Utils.isNotEmpty(params.callback)) {
					data.param = params;
            		params.callback(data);
            	} else {
            		if (data.resCode != 0) {
            			Message.show(data.resDesc);
            	    }
            	}
            },
            error: function(data){
                if (Utils.isNotEmpty(params.errorCallback)) {
            		params.errorCallback(data);
            	}
            }
		});
	},
	// 校验手机是否已注册
	validatePhoneUrl : function() {
		return {
			url : '/api/register/checkRegistered',
			type : 'POST',
			async : true
		}
	},
	//获取迪士尼、端午、父亲节页面数据
	reqPageInf : function() {
		return {
			url : '/activity/summer/pageInf',
			type : 'POST',
			async : true
		}
	},
	//存储用户收货信息
	saveReceiveInfo : function() {
		return {
			url : '/api/user/saveReceiveInfo',
			type : 'POST',
			async : true
		}
	},
	//读取用户收货信息
	queryReceiveInfo : function() {
		return {
			url : '/api/user/queryReceiveInfo',
			type : 'POST',
			async : true
		}
	},
	// 发送验证码
	sendValidatecodeUrl : function() {
		return {
			url : '/api/register/sendSms',
			type : 'POST',
			async : true
		}
	},
	// 发送验证码
	checkAndSendUrl : function() {
		return {
			url : '/api/register/checkAndSend',
			type : 'POST',
			async : true
		}
	},
	// 校验验证码
	validateCodeUrl : function() {
		return {
			url : '/api/register/validateSms',
			type : 'POST',
			async : true
		}
	},
	// 校验验证码
	getAgreementUrl : function() {
		return {
			url : '/api/register/agreement',
			type : 'POST',
			async : true
		}
	},
	// 提交注册
	registerSubmitUrl : function() {
		return {
			url : '/api/register/submit',
			type : 'POST',
			async : true
		}
	},
	// 更名投票
	renameVoteUrl : function() {
		return {
			url : '/activity/rename/vote',
			type : 'POST',
			async : true
		}
	},
	// 获取当前投票结果
	renameVoteScoreUrl : function() {
		return {
			url : '/activity/rename/getScore',
			type : 'POST',
			async : true
		}
	},
	// 领取红包
	receivePackeUrl : function() {
		return {
			url : '/api/packet/receive',
			type : 'POST',
			async : true
		}
	},
	// 红包注册
	registerPacketUrl : function() {
		return {
			url : '/api/packet/register',
			type : 'POST',
			async : true
		}
	},
	// 获取红包领取记录
	packeListUrl : function() {
		return {
			url : '/api/packet/list',
			type : 'POST',
			async : true
		}
	},
	// 查询红包分享信息
	queryRedShareUrl : function() {
		return {
			url : '/api/packet/queryRedShare',
			type : 'POST',
			async : true
		}
	},
	// 查询红包规则
	queryRedRuleUrl : function() {
		return {
			url : '/api/packet/ruleInfo',
			type : 'POST',
			async : true
		}
	},
	// 下载App
	downloadAppUrl : function() {
		return {
			url : '/promote/getDownloadAppUrl',
			type : 'POST',
			async : true
		}
	},
	// 下载App
	statisticsUrl : function() {
		return {
			url : '/promote/statistics/downloadApp',
			type : 'POST',
			async : true
		}
	},
	//获取活动介绍或者领取油费Tab页展示内容
	getActivityTab : function() {
		return {
			url : '/activity/youba/getpage',
			type : 'POST',
			async : true
		}
	},
	getOilInfo : function() {
		return {
			url : '/activity/jyz/get',
			type : 'POST',
			async : true
		}
	},
	getOilPage : function() {
		return {
			url : '/activity/youba/getoil',
			type : 'POST',
			async : true
		}
	},
	submitOilForm : function() {
		return {
			url : '/api/youba/submit',
			type : 'POST',
			async : true
		}
	},
	// 查询分享信息
	queryShareInfoUrl : function() {
		return {
			url : '/api/query/shareInfo',
			type : 'POST',
			async : true
		}
	},
	// 查询分享信息
	queryShareInfoUrlByMobile : function() {
		return {
			url : '/api/query/shareByMobile',
			type : 'POST',
			async : true
		}
	},
	// 吉利红包新户判别
	validateUserJiliUrl : function(){
		return {
			url : '/api/jili/judge',
			type : 'POST',
			async : true
		}
	},
	// 获取榜单排名
	queryRangingUrl : function(){
		return {
			url : '/api/zzs/getRanking',
			type : 'POST',
			async : true
		}
	},
	// deepshare下载app地址
	deepshareUrl : function(key){
		return {
			url : 'https://fds.so/v2/url/' + key,
			type : 'POST',
			async : true
		}
	},
	// 月度任务-历史记录
	queryBountyHistoryUrl : function(){
		return {
			url : '/api/bounty/queryHistory',
			type : 'POST',
			async : true
		}
	},
	// 月度任务-领取
	receiveBountyPrizeUrl : function(){
		return {
			url : '/api/bounty/receivePrize',
			type : 'POST',
			async : true
		}
	},
	// 月度任务-收货地址确认
	saveShippingUrl : function(){
		return {
			url : '/api/bounty/saveShipping',
			type : 'POST',
			async : true
		}
	},
	invFriGetTime : function(key){
		return {
			url : '/activity/invfri/gettime',
			type : 'POST',
			async : true
		}
	},
	queryLaborStatusUrl : function(key){
		return {
			url : '/api/labor/queryStatus',
			type : 'POST',
			async : true
		}
	},
	receiveLaborAwardUrl : function(key){
		return {
			url : '/api/labor/receiveAward',
			type : 'POST',
			async : true
		}
	},
	receiveEdriverUrl : function(key){
		return {
			url : '/api/edriver/receive',
			type : 'POST',
			async : true
		}
	},
	invUserUrl : function(key){
		return {
			url : '/api/query/shareByMobile',
			type : 'POST',
			async : true
		}
	},
	queryAppProdMascot : function(key) {
		return {
			url: '/api/mascot/queryAppProdMascot',
			type: 'POST',
			async: true
		}
	},
	getShareInf : function(key) {
		return {
			url: '/activity/euroCup/getShareInf',
			type: 'POST',
			async: true
		}
	},
	queryIspFlow : function(key) {
		return {
			url: '/api/others/queryIspFlow',
			type: 'POST',
			async: true
		}
	},
	getInvUser : function(key) {
		return {
			url: '/api/inv/invUser',
			type: 'POST',
			async: true
		}
	},
	queryFluxList : function() {
		return {
			url: '/api/others/queryChargeFlow',
			type: 'POST',
			async: true
		}
	},
	updateChargeFlowStatusUrl : function() {
		return {
			url: '/api/others/updateChargeFlowStatus',
			type: 'POST',
			async: true
		}
	},
	queryQuestionList : function() {
		return {
			url: '/api/answer/queryQuestionList',
			type: 'POST',
			async: true
		}
	},
	submitQuestionList : function() {
		return {
			url: '/api/answer/submitQuestionList',
			type: 'POST',
			async: true
		}
	},
	queryHistoryAnswer : function() {
		return {
			url: '/api/answer/queryQuestionHistoryInfo',
			type: 'POST',
			async: true
		}
	},
	checkMobileIsRegistered : function() {
		return {
			url: '/api/checkRegister/checkMobileIsRegistered',
			type: 'POST',
			async: true
		}
	},
	updateUserShareStatus : function() {
		return {
			url: '/api/answer/updateUserShareStatus',
			type: 'POST',
			async: true
		}
	},
	updateFluxShareStatus : function() {
		return {
			url: '/api/activity/shareFlowRecord',
			type: 'POST',
			async: true
		}
	},
	queryGoldsUrl : function() {
		return {
			url: '/api/activity/queryGolds',
			type: 'POST',
			async: true
		}
	},
	queryWinnersUrl : function() {
		return {
			url: '/api/activity/queryWinners',
			type: 'POST',
			async: true
		}
	},
	queryInvestmentUrl : function() {
		return {
			url: '/api/activity/queryInvestment',
			type: 'POST',
			async: true
		}
	}
}

/**
 * 提示信息类  
 */
var Message = {
	// 显示提示信息（默认）
	show : function(message) {
		if (Utils.isEmpty(message)) {
			message = this.system_later;
		}

		// 设置提示信息
		$('#message').html(message);
		// 提示信息淡入效果
		$('#message').fadeIn(300);
		
		// 1.5s后提示信息淡出
		setTimeout(this.close,1500);
	},
	// 显示提示信息（自定义）
	showMessage : function(id, message) {
		if (Utils.isEmpty(message)) {
			message = this.system_later;
		}
		var visibility = $(id).css('visibility');
		if (visibility == 'visible'){
			clearTimeout(Config.t);
		}
		// 设置提示信息
		$(id).html(message);
		// 提示信息淡入效果
		$(id).css('visibility','visible');
		// 5s后提示信息淡出
		Config.t = setTimeout(function(){
			Message.closeMessage(id);
		}, 5000);
	
	},
	// 隐藏提示信息（默认）
	close : function(message) {
		$('#message').fadeOut('slow');
	},
	// 隐藏提示信息（自定义）
	closeMessage : function(id, message) {
		var visibility = $(id).css('visibility');
		if (visibility == 'visible'){
			$(id).html('');
			$(id).css('visibility','hidden');
		}
	},
	//语音验证码提示信息切换
	showVoiceMessage : function(id) {
		var message = "电话拨打中...请留意接听";
		$(Config.voiceCodeBut).css('text-decoration','none');
		if (Utils.isEmpty(mobile)) {
			message = this.system_later;
		}
		Common.unbindClick(Config.voiceCodeBut);
		// 设置提示信息
		$(id).html(message);
		// 30s后提示信息淡出
		setTimeout(function(){
			$(Config.voiceCodeBut).css('text-decoration','underline');
			$(id).html(Message.voice_code_default_message);
			Common.bindClick(Config.voiceCodeBut,Register.resendVoiceCode);
		}, 30000);
	},
	register_mobile_empty : '请先输入手机号码',
	register_mobile_error : '请输入正确的11位手机号码',
	register_mobile_error2 : '请输入正确的手机号',
	register_validatecode_empty : '请先输入6位数字的验证码',
	register_validatecode_error : '请输入6位数字的验证码',
	register_validatecode_error2 : '请输入正确的验证码',
	register_password_empty : '请先输入密码',
	register_password_length_error : '请输入6~14位的密码',
	register_password_rule_error : '密码强度不符合,请重新输入',
	register_password_rule_error2 : '请设置正确的登录密码',
	register_agreement_check : '请先勾选注册协议',
	youka_card_error_one_1 : '<h5>请输入卡号</h5>',
	youka_card_error_one_2 : '<h5>卡号不足19位</h5>',
	youka_card_error_two_1 : '<h5>输入卡号不一致</h5>',
	youka_card_error_three_1 : '<h5>请输入短信验证码</h5>',
	mgm_imgCode_error_empty : '请输入图形验证码',
	voice_code_default_message  : '短信收不到?点此接收语音验证码',
	oilno_length_notenough : "请输入正确的19位油卡卡号",

	system_later : '请稍后重试',
	system_error : '操作或网络异常，请稍后重试'
}

/**
 * 注册类   
 */
var Register = {
	// 校验手机号码
	checkPhone : function(phone) {
		if (Utils.isEmpty(phone)){
			Register.hideVoiceCodePopup();
			Message.show(Message.register_mobile_empty);
			return false;
		}
		if (!this.checkPhoneRule(phone)){
			Register.hideVoiceCodePopup();
			Message.show(Message.register_mobile_error);
			return false;
		}
		return true;
	},
	// 校验手机格式
	checkPhoneRule : function(phone) {
		if(/^1\d{10}$/.test(phone)){
	        return true;
	    }
		return false;
	},
	// 校验短信验证码
	checkValidateCode : function(validateCode) {
		if (Utils.isEmpty(validateCode)){
			Message.show(Message.register_validatecode_empty);
			return false;
		}
		if (!this.checkValidateCodeRule(validateCode)){
			Message.show(Message.register_validatecode_error);
			return false;
		}
		return true;
	},
	// 校验验证码格式
	checkValidateCodeRule : function(validateCode) {
		if(/^\d{6}$/.test(validateCode)){
	        return true;
	    }
		return false;
	},
	// 校验密码
	checkPassword : function(password) {
		if (Utils.isEmpty(password)){
			Message.show(Message.register_password_empty);
	    	return false;
	    }
	    if (password.length < 6 || password.length > 14){
	    	Message.show(Message.register_password_length_error); 
        	return false;
        }
        if (!this.checkPasswordRule(password)){
        	Message.show(Message.register_password_rule_error); 
        	return false;
        }
	    return true;
	},
	// 校验密码格式
	checkPasswordRule : function(password) {
		var intCount = 0;
		var re = new RegExp("[a-zA-Z]");
		var len = re.test(password);

		if (len) {
			intCount++;
		}
		re = new RegExp("[0-9]");
		len = re.test(password);
		if (len) {
			intCount++;
		}
		if (/[\':;*?~`!@#$%^&+={}\[\]\<\\(\),\.]/.test(password)) {
			intCount++;
		}
		if(intCount>=2){
			return true;
		}else{
			return false;
		}
	},
	// 发送短信验证码
	sendSms : function(params) {
		if (this.checkPhone(params.data.phone)){
			if (Config.flag == 0){
				this.countdown(Config.count);
			}
			Request.ajax(params);
		}
	},
	// 校验验证码是否正确
	checkCode : function(params) {
		if (this.checkPhone(params.data.phone) && this.checkValidateCode(params.data.validateCode)){
			Request.ajax(params);
		}
	},
	// 提交注册
	submit : function(params) {
		if (this.checkPhone(params.data.phone) && this.checkPassword(params.data.password)) {
			params.data.password = Security.hex_md5(params.data.password).toUpperCase();
			Request.ajax(params);
		}
	},
	// 按钮倒计时触发
	countdown : function(count){
	    // 设置验证码倒计时标记
		Config.flag = 1;
		// 禁用发送验证码按钮
		Common.disable(Config.codeBut);
		// 验证码按钮倒计时
	    this.setRemainTime(count);
	},
	// 验证码按钮倒数计数
	setRemainTime : function(curCount) {
	    if (curCount <= 0) {
	    	Config.flag = 0;
	    	var v_mobile = $(Config.phoneInput).val();
			Common.undisable(Config.codeBut,Config.send);
	        $(Config.codeBut).html('重新发送');
	    }else {
	    	$(Config.codeBut).html('重发(' + curCount + ')');
	        curCount--;  
	        setTimeout(function(){Register.setRemainTime(curCount)}, 1000);
	    }  
	},
	phoneKeyup : function() {
		if ($(Config.phoneInput).val().length >= 11){
			if (Config.flag == 0){
				Common.undisable(Config.codeBut, Config.send);
			}
            if ($(Config.codeInput).val().length >= 6){
            	Common.undisable(Config.nextBut, Config.next);
            }
		} else {
			// 清空验证码输入框
			Common.clean(Config.codeInput);
			Common.disable(Config.codeBut);
			Common.disable(Config.nextBut);
		}
	},
	codeKeyup : function(){
		if ($(Config.codeInput).val().length >= 6 && $(Config.phoneInput).val().length >= 11){
			Common.undisable(Config.nextBut, Config.next);
		} else {
			Common.disable(Config.nextBut);
		}
	},
	passwordKeyup : function(){
		if ($(Config.passwordInput).val().length >= 6){
			Common.undisable(Config.submitBut, Config.submit)
		} else {
			Common.disable(Config.submitBut);
		}
	},
	// 发送验证码
	sendCode : function(){
		var mobile = $(Config.phoneInput).val();
		var imgCode = $("#v_code").val().toUpperCase();

		if(Config.isImageCode == "1"){
			if (Utils.isEmpty(imgCode)) {
				Message.showMessage("#imgTip", Message.mgm_imgCode_error_empty);
				return;
			}
		}

		Common.unbindClick(Config.imgSubmitBut);
		var request = Request.sendValidatecodeUrl();
		request.data = {
			mobile : mobile,
			imgCode : imgCode,
			resType : Config.resType,
			sendType : Config.sendType,
			isImageCode :　Config.isImageCode
		};
		request.callback = Register.sendCallback;

		Request.post(request);
	},
	sendCallback : function(data){
		Common.clean('#v_code');
		Common.bindClick(Config.imgSubmitBut, function(){
			$("input").blur();
			setTimeout(function(){
				Register.sendCode();
			},300);
		});
		if (data != null && data != '') {
			//if (data.resCode == 0359){//发送验证码失败，需要弹出图形验证码
			//	Register.hideVoiceCodePopup();//隐藏语音验证码弹出层
			//	Register.showImgCodePopup();
			//	Message.showMessage('#imgTip', data.resDesc);
			//} else
			if(data.resCode == 1){//请求发送验证码接口失败

				Register.hideImgCodePopup();//隐藏图形验证码弹出层
				Register.hideVoiceCodePopup();//隐藏语音验证码弹出层
				Message.showMessage(Config.tip, data.resDesc);

			} else if(data.resCode == 4034){//校验图形验证码失败

				Register.showImgCodePopup();
				Message.showMessage('#imgTip', data.resDesc);

			} else if(data.resCode == 4035){//图形验证码校验成功，弹出发送语音验证码提示框
				Config.sendType = "1";
				Config.isImageCode = "0";
				Register.hideImgCodePopup();//隐藏图形验证码弹出层
				Register.showVoiceCodePopup();//显示语音验证码弹出层

			} else{//发送验证码成功
				Config.sendType = "0";
				if(Config.resType == "2"){
					Register.hideImgCodePopup();//隐藏图形验证码弹出层
					Register.hideVoiceCodePopup();//隐藏语音验证码弹出层
					Message.showVoiceMessage(Config.voiceCodeBut);
				}else{
					Register.hideImgCodePopup();//隐藏图形验证码弹出层
					Register.countdown(Config.count);
					Message.showMessage(Config.tip, data.resDesc);
				}

			}
		}
	},
	isRegister : function(){
		var mobile = $(Config.phoneInput).val();
		if (Register.checkPhone(mobile)){
			var request = Request.validatePhoneUrl();
			request.data = {
				mobile : mobile,
				resType : Config.resType
			};
			request.callback = Register.registerCallback;
			Request.post(request);
		} else {
			Message.showMessage(Config.tip, Message.register_mobile_error);
		}
	},
	registerCallback : function(data){
		if (Utils.isNotEmpty(data)){
			
			if(data.resCode == 0){

				if(data.paramsMap.isShowImgCode == "1"){

					if(data.paramsMap.isLimt == "1"){
						Config.isImageCode = "0";//不需要输入图形验证码
						Register.hideImgCodePopup();
						Message.showMessage(Config.tip, data.resDesc);
					}else{
						Config.isImageCode = "1";//需要输入图形验证码
						Register.showImgCodePopup();
					}

				}else{
					Config.isImageCode = "0";//不需要输入图形验证码
					if(!data.paramsMap.isLimt == "1"){
						Register.hideImgCodePopup();
						if(Config.resType == "2"){
							Register.showVoiceCodePopup();
						}else{
							Register.sendCode();
						}
					}else{

						Message.showMessage(Config.tip, "获取验证码次数超限，请稍后再试");
					}
				}
			}else{
				Config.isImageCode = "0";//不需要输入图形验证码
				Register.hideVoiceCodePopup();
				Register.hideImgCodePopup();
				Message.showMessage(Config.tip, data.resDesc);
			}
		} else {
			Config.isImageCode = "0";//不需要输入图形验证码
			Message.showMessage(Config.tip, data.resMsg);
		}
	},
	//显示语音验证码弹出层
	showVoiceCodePopup : function(){
		$('#voiceCodePopup').css('margin-top',$(document).scrollTop()+Config.imgTop);
		Common.show('#voiceCodeMask');
		Common.show('#voiceCodePopup');
	},
	//隐藏语音验证码弹出层
	hideVoiceCodePopup : function(){
		$('#voiceCodeMask').css('display', 'none');
		$('#voiceCodePopup').css('display', 'none');
	},
	//隐藏图形验证码弹出层
	hideImgCodePopup : function(){
		$(Config.refreshImg).unbind("error",Register.imgCodeLimit);
		//$("body").css("position","relative");
		Common.hide('#imgcodeMask');
		Common.hide('#imgcodePopup');
	},
	//显示图形验证码弹出层
	showImgCodePopup : function(){

		$('#imgcodePopup').css('margin-top',$(document).scrollTop()+Config.imgTop);
		Common.clean('#v_code');
		Common.refreshImg();
		$(Config.refreshImg).bind("error",Register.imgCodeLimit);
		Common.show('#imgcodeMask');
		Common.show('#imgcodePopup');
		//Common.click('#refreshImg', refreshImg);
	},
	resendValidateCode : function(){
		Config.resType = "1";
		Register.isRegister();
	},
	resendVoiceCode : function(){
		Config.resType = "2";//语音
		Register.isRegister();
	},
	imgCodeLimit : function(){
		Register.hideImgCodePopup();//隐藏图形验证码弹出层
		Message.showMessage(Config.tip, "获取图形验证码次数超限，请稍后再试");
	}
};

/**
 * 统计类
 */
var Statistics = {
	// 添加第三方页面统计
	statisticsDSP : function(type) {
		var accountId = this.getAccountId();
		if (accountId != ''){
			$.getScript('/js/common/statisticsDSP.js', function(){
				statisticsPage(accountId);
				if (type == 'register'){
					statisticsRegister();
				}
			}); 
		}
	},
	// 获取统计账号
	getAccountId : function() {
		var activityId = Utils.getUrlParam('activity');
		if(activityId != ''){
			var accountId = this.getStatisticsAccountId(activityId);
			return accountId;
		} else {
			return '';
		}
	},
	// 配置第三方账号
	getStatisticsAccountId : function(activityId) {
		var accountId = '';
		switch(activityId){
			case 'juxiao':
				accountId = 'm-168935-0';
				break;
			default:
				accountId = '';
		}
		return accountId;
	},
	// 统计点击（访问）量
	statistics : function(type){
		var index = layer.load(1, {
		    shade: [0.4,'#000']
		});
		var request =  Request.statisticsUrl();
		request.data = {
			activity : Utils.getChannel(),
        	sysType : Utils.getSysType(),
        	page : Utils.getPage(),
        	reserve3 : type || 0  // 0-按钮， 1-页面
		};
		request.callback = Statistics.statisticsCallback;
		Request.post(request);
	},
	// 统计点击（访问）量回调
	statisticsCallback : function(data){
		setTimeout(function(){
    		layer.closeAll();
    	}, 3000);
    	window.location.href = Config.url;
	}
};

/**
 * 工具类
 */
var Utils = {
	formartDate : function(date, format){
		date = date.replace('年','-');
		date = date.replace('月','-');
		date = date.replace('日','');
		var dd = new Date(date.replace(/-/g, "/"));
		
		return  dd.format(format);
	},
	// 获取N天后的日期（N可为负数，表示N天前）
	getDateAfter : function(n) {
		var dd = new Date();
	    dd.setDate(dd.getDate() + n);//获取AddDayCount天后的日期
	    return dd.format("yyyy-MM-dd");
	},
	// 获取指定日期N天后的日期
	getDayAfter : function(date, n, format) {
		date = date.replace('年','-');
		date = date.replace('月','-');
		date = date.replace('日','');
		var dd = new Date(date.replace(/-/g, "/"));
		dd.setDate(dd.getDate() + n);//获取AddDayCount天后的日期
	    return dd.format(format);
	},
	// 比较俩个日期大小
	isAfter : function(date1, date2) {
		date1 = date1.replace('年','-');
		date1 = date1.replace('月','-');
		date1 = date1.replace('日','');
		
		date2 = date2.replace('年','-');
		date2 = date2.replace('月','-');
		date2 = date2.replace('日','');
		
		var dd1 = new Date(date1.replace(/-/g, "/").substring(0, 10));
		var dd2 = new Date(date2.replace(/-/g, "/").substring(0, 10));
		
		if (dd1 > dd2){
			return 1; 	
		} else if (dd1 < dd2){
			return -1
		} else {
			return 0;
		}
	},
	// 判断日期是否在xxx之间
	isBetween : function(date, date1, date2) {
		if (this.isAfter(date, date1) > -1 && this.isAfter(date, date2) < 1){
			return true;
		}
		return false;
	},
	// 获取手机系统类型（包含模拟器）
	getSysType : function() {
		var sysType = '';
		var u = navigator.userAgent;
		if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
			sysType = "IOS";  //ios系统
		} else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 || u.indexOf('Windows Phone') > -1) {
			sysType = "ANDROID";  // android系统
		} else {
			sysType = "PC";
		}
		return sysType;
	},
	getUrl : function(){
		return window.location.href;
	},
	// 获取url参数
	getUrlParam : function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null){
			return unescape(r[2]); 
		} 
		return '';
	},
	// 获取uri参数
	getUri : function() {
		return window.location.protocol + "//" + window.location.host;
	},
	// 获取imgUrI参数
	getImgUri : function() {
		var path = this.getPath();
		if (this.isNotEmpty(path)){
			return path.replace('https://', 'http://');
		}
		return this.getUri();
	},
	// 获取域名地址
	getPath : function() {
		return $('#path').val();
	},
	// 获取渠道
	getChannel : function() {
		var activity = Utils.isNotEmpty($(Config.activity)) ? $(Config.activity).val() : '';
		if (Utils.isNotEmpty(activity)){
			return activity;
		}
		return this.getUrlParam('activity');
	},
	// 获取当前页面
	getPage : function (){
		var url = window.location.href;
		var uri = window.location.protocol + '//' + window.location.host;
		var page = url.substr(url.indexOf(uri) + uri.length, (url.indexOf('?') < 0 ? url.length : url.indexOf('?')) - uri.length);
		return page;
	},
	// 获取随机数
	random : function (Min,Max){   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	},
	// 获取随机字符串
	getRandomStr : function(len) {
		len = len || 16;
		var base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";  
        var str = '';  
        for (var i = 0; i < len; i++) {  
            var number = Math.floor(Math.random() * base.length); 
            str += base.charAt(number);  
        }  
        return str;
	},
	// 判断是否在手机打开
	isMobile : function (){
		if (this.getSysType() != 'PC'){
			return true;
		}
		return false;
	},
	// 获取验证码
	refreshCode : function (){
	     var   imgObj = $("#generateCode"); 
	     var   imgObjsrc=$('#generateCode').attr('src');
	     var   index = imgObjsrc.indexOf("?"); 
	    
	    if(index != -1) { 
	    	 var url = imgObjsrc.substring(0,index + 1); 
	        $('#generateCode').attr('src',url+Math.random()); 
	    } else { 
	    	 $('#generateCode').attr('src',imgObjsrc+"?"+Math.random()); 
	    } 
	 
	},
	// 判断是否在微信打开
	isWeixin : function (){
	    var ua = navigator.userAgent.toLowerCase();  
	    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
	        return true;  
	    }
	    return false;  
	},
	// 是否来源微信分享
	isFromWeixin : function (){
		var url = Utils.getUrl();
	    if(url.contains('from=timeline') || url.contains('from=groupmessage') || url.contains('from=singlemessage')) {  
	        return true;  
	    }
	    return false;  
	},
	// 判断对象为空
	isEmpty : function(obj) {
		if (typeof(obj) != 'number' && (!obj || obj == null || obj == '' || obj == undefined || typeof(obj) == 'undefined')) {
			return true;
		}
		return false;
	},
	// 判断对象不为空
	isNotEmpty : function(obj) {
		if (!this.isEmpty(obj)) {
			return true;
		}
		return false;
	},
	// 是否是横屏状态
	isLandscape : function(){
		if (this.isMobile() && (window.orientation === 90 || window.orientation === -90)) {
			return true;
        }
		return false;
	},
	// 格式化金额
	fmoney : function (s, n) { 
	   n = n > 0 && n <= 20 ? n : 0;  
	   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
	   var l = s.split(".")[0].split("").reverse();
	   t = "";  
	   for(i = 0; i < l.length; i ++ )  
	   {  
	      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
	   }  
	   if (s.contains('.')){
		   r = s.split(".")[1]; 
		   return t.split("").reverse().join("") + "." + r;  
	   }
	   return t.split("").reverse().join("");  
	},
	// 格式化金额（小数为0的自动转整数）
	fmoney1 : function (s, n) { 
		n = n > 0 && n <= 20 ? n : 0;  
	    var strS = (s + "").replace(/[^\d\.-]/g, "");
		var x = Math.pow(10, n);
		s1 = Math.floor(parseFloat(strS) * x) / x + "";
		if (s1.indexOf(".") < 0){
			return s1;
		}
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		var l = s.split(".")[0].split("").reverse();
		t = "";  
		for(i = 0; i < l.length; i ++ )  
		{  
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
		}  
		if (s.contains('.')){
			r = s.split(".")[1]; 
			return t.split("").reverse().join("") + "." + r;  
		}
		return t.split("").reverse().join("");
	},
	// 将数字0~9转为汉字
	convertToChinese : function(n){
		var N = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
	    return N[n];
	},
	checkOilNo : function(oilNo){
		// 以19位数字开头，以19位数字结尾  
		var reg = /^\d{19}$/g;   
		if(reg.test(oilNo)){  
		   return true;  
		}  
		
		return false;
	},
	// 将手机号中间四位加密
	convertMobile : function(mobile){
		return mobile.substring(0,3) + "****" + mobile.substring(7,11);
	},
	//设置或添加cookie
	setCookie : function (name,value,time){
	    var str = name + "=" + escape(value);
	    if(time > 0){
	        var date = new Date();
	        var ms = time;
	        date.setTime(date.getTime() + ms);
	        str += "; expires=" + date.toGMTString();
	    }
	    document.cookie = str;
	},
	//获取cookie  
	getCookie : function (name){  
	    //cookie中的数据都是以分号加空格区分开  
	    var arr = document.cookie.split("; ");  
	    for(var i=0; i<arr.length; i++){  
	        if(arr[i].split("=")[0] == name){  
	            return arr[i].split("=")[1];  
	        }
	    }
	    //未找到对应的cookie则返回空字符串  
	    return '';  
	},
	//删除cookie  
	removeCookie : function (name){   
	    document.cookie = name+"=;expires="+(new Date(0)).toGMTString();
	},
	//设置session
	setSession : function (){   
		if (this.isEmpty(this.getCookie('sessionID'))){
			this.setCookie('sessionID', $('#sessionId').val(), 86400000);
		}
	},
	//获取session
	getSession : function (){   
		if (this.isEmpty(this.getCookie('sessionID'))){
			this.setSession();
		}
		return this.getCookie('sessionID');
	},
	// 给url添加参数
	addUrlParam : function(url, key, value){
		var returnUrl = url;
		if (Utils.isEmpty(url) || Utils.isEmpty(key) || Utils.isEmpty(value) || url.indexOf(key + '=') > -1){
			return url;
		}
		if (url.indexOf('?') > -1){
			returnUrl += '&'+ key + '=' + value;
		} else {
			returnUrl += '?'+ key + '=' + value;
		}
		return returnUrl;
	}
}

/**
 * 公用函数
 */
var Common = {
	// 根据客户端系统绑定click事件
	click : function(obj, fun) {
		if (Utils.getSysType() == 'PC'){
			$(obj).unbind("click");
			$(obj).bind('click', fun);
		} else {
			$(document).on('touchend', obj, fun);
		}
	},
	// 绑定click事件
	bindClick : function(obj, fun) {
		Common.unbindClick(obj);
		$(obj).bind("click", fun);
	},
	unbindClick : function(obj) {
		$(obj).unbind("click");
	},
	// 绑定click事件
	onClick : function(obj, fun, delay) {
		Common.bindClick(obj, function(){
			Common.unbindClick(obj);
			// 输入框失去焦点
			if (Utils.getSysType() == 'IOS'){
				Common.inputBlur();
			}
			fun();
			delay = delay || 1000;
			setTimeout(function(){
				Common.onClick(obj, fun, delay);
			}, delay);
		});
		
        //var widthSelf = $(obj).width();
	    //var widthSmall = widthSelf * 0.9;
	    //var heightSelf = $(obj).height();
	    //var heightSmall = heightSelf * 0.9;
        //
	    //if(typeof(window.ontouchstart) == 'undefined' || typeof(window.ontouchstart) == 'null'){ //不支持触屏
	    //	$(obj).mousedown(function() {
	    //		$(obj).addClass('opacity');
	    //    	$(obj).css('width',widthSmall);
	    //	});
	    //
         //   $(obj).mouseup(function () {
         //   	$(obj).removeClass('opacity');
	    //    	$(obj).css('width',widthSelf);
         //   });
	    //}else{
	    //    $(obj).bind('touchstart', function(){
	    //    	$(obj).addClass('opacity');
	    //    	$(obj).css('width',widthSmall);
	    //    }).bind('touchend', function(){
	    //    	$(obj).removeClass('opacity');
	    //    	$(obj).css('width',widthSelf);
	    //    });
	    //}
	},
	// 绑定keyup事件
	bindKeyup : function(obj, fun) {
		$(obj).keyup(fun);
	},
	// 获得焦点
	focus : function(obj, fun){
		$(obj).focus(fun)
	},
	// 失去焦点
	blur : function(obj, fun){
		$(obj).blur(fun)
	},
	// 按钮禁用
	disable : function(but) {
		$(but).css("opacity", "0.4");
		this.unbindClick(but);
	},
	// 按钮解禁
	undisable : function(but, fun) {
		$(but).css("opacity", "1");
		this.bindClick(but, fun);
	},
	hide : function(obj) {
		$(obj).hide();
	},
	show : function(obj) {
		$(obj).show();
	},
	// 清除输入框
	clean : function(obj) {
		$(obj).val("");
	},
	// 输入框强制失去焦点
	inputBlur : function(){
		$('#main').css('margin-top', '0');
		document.activeElement.blur();
		$("input").blur();
	},
	// 实例化html标签
	newObj : function(obj, id, className, html){
	    var obj=$(obj);
	    if (id != ''){
	        obj.attr('id',id);
	    }
	    if (className != ''){
	        obj.addClass(className);
	    }
	    if (html != ''){
	        obj.html(html);
	    }

	    return obj;
	},
	// 下载app
	downloadApp : function(){
		var request =  Request.downloadAppUrl();
		request.data = {
			activity : Utils.getChannel(),
        	sysType : Utils.getSysType(),
        	category : Config.category || 0,   // 0-注册页， 1-落地页
        	isWeixin : Utils.isWeixin()
		};
		request.callback = Common.downloadCallback;
		Request.post(request);
	},
	// 下载app回调
	downloadCallback : function(data){
		Config.url = data;
		Common.click(Config.downloadBut,function(){
			Statistics.statistics(0);
    	});
	},
	// 推广下载app
	promoteDownload : function(){
		if ('IOS' == Utils.getSysType()){
			Common.deepshareRequest();
			return;	
		}
		var request =  Request.downloadAppUrl();
		request.data = {
			activity : Utils.getChannel(),
        	sysType : Utils.getSysType(),
        	isWeixin : Utils.isWeixin()
		};
		request.callback = Common.promoteDownloadCallback;
		Request.post(request);
	},
	// 推广下载app回调
	promoteDownloadCallback : function(data){
		if (Utils.isNotEmpty(data)){
			Config.url = data;
			Common.click(Config.downloadBut, function(){
				if(Utils.isWeixin()){
					Common.showBrowserGuide();
				} else {
					Statistics.statistics(0);
				}
			});
		} else {
			Common.deepshareRequest();
		}
	},
	// 推广下载app错误回调
	promoteDownloadErrorCallback : function(data){
		Common.downloadApp();
	},
	// 推广deepshare下载app
	deepshareRequest : function(){
		var request =  Request.deepshareUrl(Config.promoteKey);
		var data = {
            inapp_data: JSON.stringify({channel: Utils.getChannel()}),
            sender_id: ""
		};
		request.data = JSON.stringify(data);
		request.callback = Common.deepshareRequestCallback;
		Request.post(request);
	},
	// 推广deepshare下载app回调
	deepshareRequestCallback : function(data){
		Config.url = data.url;
		if (Utils.getSysType() != 'PC' && !Utils.isWeixin() && Utils.isFromWeixin()){
			window.location.href = Config.url;
		} else {
			Common.click(Config.downloadBut, function(){
				if(Utils.isWeixin()){
					Common.showBrowserGuide();
				} else {
					Statistics.statistics(0);
				}
			});
		}
	},
	// 显示浏览器打开提示引导
	showBrowserGuide : function(){
		$('#guidePopup').css('top',$(document).scrollTop());
		$('#browserGuide').show();
	},
	refreshImg : function(){
		$('#refreshImg').attr('src',"/common/getImgCode/refresh?mobile=" + $(Config.phoneInput).val() + '&random=' + Math.random());
	},
	// 屏幕旋转
	rotating : function(){
		if (Utils.isLandscape()){
			$('#landscape').show();
            $('#portrait').hide();
		} else {
			$('#portrait').show();
            $('#landscape').hide();
		}
	}
}

var App = {
	setPopupTop : function(obj, top){
		if (Utils.getSysType() == 'PC'){
			$(obj).css('padding-top', $(document).scrollTop() + top + 'px');
		} else {
			$(obj).css('padding-top', $('#main').scrollTop()  + top + 'px');
		}
	},
	show : function(obj, top){
		if (Utils.isNotEmpty(top)){
			App.setPopupTop(obj, top);
		}
		$(obj).show();
	},
	invUser : function(activityCode, mobile){
		var request =  Request.invUserUrl();
		request.data = {
				activityCode: activityCode,
				mobile: mobile
		};
		request.invMobile = Utils.convertMobile(mobile);
		request.callback = App.invUserCallback;
		Request.post(request);
	},
	invUserCallback : function(data){
		var invMobile = data.param.invMobile;
		var url = (data.shareUrl.indexOf('?') > -1) ? data.shareUrl : data.shareUrl + "?x=x";
		if (Utils.isNotEmpty(data)) {
			CaiMiModuleClient.Share(
                data.shareTitle,
                data.shareContent,
                url+"&invCode="+data.invCode+"&invMobile="+Utils.convertMobile(data.param.invMobile),
                data.sharePic
            );
        }
	}
}

/**
 * 初始化配置
 */
Config = {
	flag : 0,  // 倒计时标识
	count : 60,  // 验证码按钮倒计时时间
	phoneInput : '',  // 手机号输入框
	codeInput : '',	  // 验证码输入框
	passwordInput : '',	// 密码输入框
	codeBut : '#codeBut',  // 获取验证码按钮
	nextBut : '',    // 下页
	submitBut : '',  // 注册提交
  	downloadBut : '', // 下载按钮
	send : '',  	//发送方法
	next : '',   
	submit : '',    // 提交方法
	tip : '',		// 提示信息id
	category : '',  // 0-注册页， 1-落地页
	reserve3 : '',  // 0-按钮， 1-页面
	url : '',  		// 下载App地址
	imgSubmitBut : '#imgSubmitBut', // 图形验证码弹窗确认按钮
	imgCancelBut : '#imgCancelBut', // 图形验证码弹窗取消按钮
	activity : '#activity',			// 渠道ID
	promoteKey : '83841190249f21b2',// deepshare APP id
	voiceSubmitBut : '#voiceSubmitBut',
	voiceCancelBut : '#voiceCancelBut',
	refreshImg : "#refreshImg",
	sendType : '',//发送类型，如果不等于1，需要判断请求是语音还是短信，语音弹出提示框
	resType : '',
	voiceCodeBut : '#voiceCodeBut',
	t : '',  // 提示信息setTimeout
	deepFlag : '#deepFlag',
	isImageCode : '',//是否需要输入图形验证码
	imgTop : 40,
	invBtn : "#invBtn",
	set : function(config){
		if (Utils.isNotEmpty(config.phoneInput)){
			this.phoneInput = config.phoneInput;
		}
		if (Utils.isNotEmpty(config.codeInput)){
			this.codeInput = config.codeInput;
		}
		if (Utils.isNotEmpty(config.passwordInput)){
			this.passwordInput = config.passwordInput;
		}
		if (Utils.isNotEmpty(config.codeBut)){
			this.codeBut = config.codeBut;
		}
		if (Utils.isNotEmpty(config.nextBut)){
			this.nextBut = config.nextBut;
		}
		if (Utils.isNotEmpty(config.submitBut)){
			this.submitBut = config.submitBut;
		}
		if (Utils.isNotEmpty(config.downloadBut)){
			this.downloadBut = config.downloadBut;
		}
		if (Utils.isNotEmpty(config.send)){
			this.send = config.send;
		}
		if (Utils.isNotEmpty(config.next)){
			this.next = config.next;
		}
		if (Utils.isNotEmpty(config.submit)){
			this.submit = config.submit;
		}
		if (Utils.isNotEmpty(config.tip)){
			this.tip = config.tip;
		}
		if (Utils.isNotEmpty(config.activity)){
			this.activity = config.activity;
		}
		if (Utils.isNotEmpty(config.category)){
			this.category = config.category;
		}
		if (Utils.isNotEmpty(config.reserve3)){
			this.reserve3 = config.reserve3;
		}
		if (Utils.isNotEmpty(config.url)){
			this.url = config.url;
		}
		if (Utils.isNotEmpty(config.promoteKey)){
			this.promoteKey = config.promoteKey;
		}
		if (Utils.isNotEmpty(config.imgTop)){
			this.imgTop = config.imgTop;
		}
		if (Utils.isNotEmpty(config.invBtn)){
			this.imgTop = config.invBtn;
		}
	}
};

/**
 * 日期格式化
 */
Date.prototype.format = function(format){
	var o = {
		"M+" : this.getMonth()+1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth()+3)/3), //quarter
		"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) {
		format=format.replace(RegExp.$1, (this.getFullYear()+"").substr(4- RegExp.$1.length));
	}
	for(var k in o){
		if(new RegExp("("+ k +")").test(format)){
			format = format.replace(RegExp.$1, RegExp.$1.length==1? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
		}
	}
	return format;
} 

/**
 * 字符串以endStr结尾
 */
String.prototype.endWith=function(endStr){
	var d=this.length-endStr.length; 
	return (d>=0&&this.lastIndexOf(endStr)==d);
}
/**
 * 字符串是否包含str
 */
String.prototype.contains=function(str){
	return this.indexOf(str) > -1;
}

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};


$(document).ready(function(){
	// 设置客户端session
	Utils.setSession();
	//layer点击遮罩层，弹出层隐藏
	Common.click('.layui-layer-shade', function(){
		$('.layui-layer-shade').remove();
        $('.layui-layer').remove();
        $('body').css('overflow', 'auto');
	});
	
	Common.click('#imgCancelBut', function(){
		Register.hideImgCodePopup();
	});

	//点击发送语音
	Common.bindClick(Config.voiceCodeBut,function() {
		Register.resendVoiceCode();
	});
	//点击语音验证码弹出层取消按钮
	Common.bindClick(Config.voiceCancelBut,function() {
		Config.sendType = "0";
		Register.hideVoiceCodePopup();
	});
	//点击图片-产生随机验证码
	Common.bindClick('#refreshImg', Common.refreshImg);

	//发送随机验证码	
	Common.bindClick(Config.codeBut,function() {
		Register.resendValidateCode();
	});

	//点击语音验证码弹出层确定按钮，发送语音验证码
	$(Config.voiceSubmitBut).click(function() {
		Config.resType = "2";//语音
		Register.sendCode();
	});
	//确定v_submit
	Common.bindClick(Config.imgSubmitBut, function(){
		$("input").blur();
		setTimeout(function(){
			Register.sendCode();
		},300);
	});
	Common.click('#guideBlackLay', function(){
		$('#browserGuide').hide();
	});

	// 判断横竖屏
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function(){
		Common.rotating();
	}, false);
	
	Common.rotating();
});
