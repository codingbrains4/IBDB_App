var pf=Ti.Platform.osname;
if(pf=='android')
{
	win_height = Ti.Platform.displayCaps.platformHeight,
	win_width = Ti.Platform.displayCaps.platformWidth;
	var isTablet=((win_width > 899) || (win_height > 899));

	if(isTablet)
		{
			var win1 = Ti.UI.createWindow({
			height:Ti.UI.FILL,
			width:Ti.UI.FILL,
			backgroundColor:'white',
			exitOnClose:true,
			orientationModes:[Ti.UI.UPSIDE_PORTRAIT,Ti.UI.PORTRAIT,Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT]
			});
		}
	else
		{
			var win1 = Ti.UI.createWindow({
			height:Ti.UI.FILL,
			width:Ti.UI.FILL,
			backgroundColor:'white',
			exitOnClose:true,
			orientationModes:[Ti.UI.PORTRAIT]
			});
		}

		var view1=Ti.UI.createView({
			top:'90%',
			backgroundColor:'#151B54'
			});

		var webview = Ti.UI.createWebView({
				url:'http://mobilewebsite.projects-codingbrains.com/',
				enableZoomControls : 'false',
				//bottom:'10%',
       			keepScreenOn : 'true',
        		scalesPageToFit : 'true',
        		width : '100%'
				});
		win1.add(webview);
		style1 = Ti.UI.ActivityIndicatorStyle.BIG_DARK;
		var activityIndicator = Ti.UI.createActivityIndicator({
			style : style1
	    	});
		var loading = false;
		webview.addEventListener('beforeload', function(){
		    Ti.API.info('beforeload');
		    loading = true;
		    activityIndicator.show();
		});
 
	webview.addEventListener('load', function(){
	    Ti.API.info('load');
	    loading = false;
	    activityIndicator.hide();
	});
 
	webview.addEventListener('error', function(){
	    Ti.API.info('error');
	    loading = false;
	    activityIndicator.hide();
	});
	win1.add(activityIndicator);

	win1.addEventListener("open", function() {
	     win1.activity.actionBar.hide();	
	});

	var btn_Reload=Ti.UI.createButton({
		color:'white',
		title:'Reload', 
		left:'120px',
		//height:'50px',
		backgroundColor:'#151B54'
	});
	var btn_Stop=Ti.UI.createButton({
		color:'white',
		title:'Stop', 
		right:'120px',
		//height:'60px',
		backgroundColor:'#151B54'
	});
	var btn_Forward=Ti.UI.createButton({
		color:'white',
		title:'>',
		right:'30px',
		//height:'50px',
		width:'45px',
		backgroundColor:'#151B54'
	});
	var btn_Backward=Ti.UI.createButton({
		color:'white',
		title:'<', 
		left:'30px',
		//height:'50px',
		backgroundColor:'#151B54',
		width:'45px'
	});
	
	btn_Stop.addEventListener('click', function() {
	    webview.stopLoading();
	});
	
	btn_Backward.addEventListener('click', function() {
	    webview.goBack();
	});
	
	btn_Forward.addEventListener('click', function() {
	    webview.goForward();
	});
	
	btn_Reload.addEventListener('click', function() {
	    webview.reload();
	});
	view1.add(btn_Backward);
	view1.add(btn_Forward);
	view1.add(btn_Reload);
	view1.add(btn_Stop);
	//win1.add(view1);
var firstTap, secondTap;
	win1.addEventListener("androidback", function() {
	     
	        if(firstTap == null){
        firstTap = new Date();
    }else{
        secondTap = new Date();
        var diff = (secondTap - firstTap)/1000;
        firstTap = new Date();
        Ti.API.info('diff is '+diff);
        if(diff < 1){ // checking for difference of 1 second between each back click to exit the app
            var alert = Ti.UI.createAlertDialog({
	            title : "Message",
	            message : "Are you sure you want to close the application?",
	            buttonNames : ["OK", "Cancel"]
	        });
	        alert.addEventListener('click', function(e) {
	            if (e.index == 0) {
	                win1.close();
	                Ti.Android.currentActivity.finish();
	            }
	        });
	       alert.show();
        }
        else{
        	webview.goBack();
        }
    }	       
	    }); 
	    win1.open();
	}
else if(pf=='iphone'||pf=='ipad')
{ 	
	if(pf=='ipad')
	{
	var win2=Ti.UI.createWindow({
		backgroundColor:'white',
		orientationModes:[Ti.UI.UPSIDE_PORTRAIT,Ti.UI.PORTRAIT,Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT],
		height:'100%',
		top:25
	});
	}
	else{
		var win2=Ti.UI.createWindow({
		backgroundColor:'white',
		orientationModes:[Ti.UI.PORTRAIT],
		height:'100%',
		top:25
	});
	}
	win2.statusBarStyle=Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;
	var view2=Ti.UI.createView({
	height:'10%',
	top:'87%',
	backgroundColor:'#151B54'
});
	var btn_Reload=Ti.UI.createButtonBar({
	labels:['Reload'],
	title:'Reload', 
	left:'20%',
	//height:'50px',
	backgroundColor:'white',
	
});
var btn_Stop=Ti.UI.createButtonBar({
	
	labels:['Stop'],
	title:'Stop', 
	right:'20%',
	//height:'60px',
	backgroundColor:'white',
	
});
var btn_Forward=Ti.UI.createButtonBar({
	labels:['>'],
	right:'10%',
	//height:'50px',
	backgroundColor:'white',
	
});
var btn_Backward=Ti.UI.createButtonBar({
	labels:['<'], 
	left:'10%',
	//height:'50px',
	backgroundColor:'white',
	
});

var webview1 = Ti.UI.createWebView({
	disableBounce:true,
		url:'http://mobilewebsite.projects-codingbrains.com/',
		enableZoomControls : 'false',
		//height:'90%',
        //keepScreenOn : 'true',
        //scalesPageToFit : 'true',
        //bottom:'13%',
        width : '100%'
	});
btn_Stop.addEventListener('click', function() {
    webview1.stopLoading();
});

btn_Backward.addEventListener('click', function() {
    webview1.goBack();
});

btn_Forward.addEventListener('click', function() {
    webview1.goForward();
});

btn_Reload.addEventListener('click', function() {
    webview1.reload();
});

		win2.add(webview1);
		view2.add(btn_Backward);
		view2.add(btn_Forward);
		view2.add(btn_Reload);
		view2.add(btn_Stop);
		//win2.add(view2);


      var  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;

		var activityIndicator1 = Ti.UI.createActivityIndicator({
				style : style		       
		    });
		    
var loading1 = false;
webview1.addEventListener('beforeload', function(){
    Ti.API.info('beforeload');
    loading1 = true;
    activityIndicator1.show();
});
 
webview1.addEventListener('load', function(){
    Ti.API.info('load');
    loading1 = false;
    activityIndicator1.hide();
});
 
webview1.addEventListener('error', function(){
    Ti.API.info('error');
    loading1 = false;
    activityIndicator1.hide();
});
win2.add(activityIndicator1);
win2.open();
}

