/*https://loktar00@github.com/loktar00/JQuery-Snowfall*/
// document.write(`
// <div style="z-index:999999;position: fixed;bottom: 0;width: 100%;font-size: 15px;padding: 10px 20px;background-color: #df4759;border-color: #df4759;color: #fff;">
// 	<p class="text-center mb-0" style="color:#fff; margin:0;">
// 		<strong>Thông báo!</strong> Chúng tôi tiếp tục đối mặt với sự cố dịch vụ lưu trữ hình ảnh. Biihappy đang mất niềm tin với nhà cung cấp dịch vụ hiện tại, nên chúng tôi sẽ chuyển đổi dữ liệu qua nhà cung cấp mới uy tín hơn. Cảm ơn bạn vì đã hiểu và chờ đợi chúng tôi!
// 	</p>
// </div>
// `);

Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var e=["webkit","moz"],t=0;t<e.length&&!window.requestAnimationFrame;++t){var i=e[t];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(e){var t=Date.now(),i=Math.max(n+16,t);return setTimeout(function(){e(n=i)},i-t)},window.cancelAnimationFrame=clearTimeout}}();var snowFall=function(){function e(){var e={flakeCount:35,flakeColor:"#ffffff",flakeIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,image:!1,collectionHeight:40},t=[],n={},o=0,s=0,a=0,r=0,l=function(e,t){for(var i in t)e.hasOwnProperty(i)&&(e[i]=t[i])},h=function(e,t){return Math.round(e+Math.random()*(t-e))},m=function(e,t){for(var i in t)e.style[i]=t[i]+("width"==i||"height"==i?"px":"")},d=function(t,i,n){this.x=h(a,s-a),this.y=h(0,o),this.size=i,this.speed=n,this.step=0,this.stepSize=h(1,10)/100,e.collection&&(this.target=canvasCollection[h(0,canvasCollection.length-1)]);var r=null;e.image?(r=new Image,r.src=e.image):(r=document.createElement("div"),m(r,{background:e.flakeColor})),r.className="snowfall-flakes",m(r,{width:this.size,height:this.size,position:"absolute",top:this.y,left:this.x,fontSize:0,zIndex:e.flakeIndex}),e.round&&m(r,{"-moz-border-radius":~~e.maxSize+"px","-webkit-border-radius":~~e.maxSize+"px",borderRadius:~~e.maxSize+"px"}),e.shadow&&m(r,{"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555",boxShadow:"1px 1px 1px #555"}),t.tagName===document.body.tagName?document.body.appendChild(r):t.appendChild(r),this.element=r,this.update=function(){this.y+=this.speed,this.y>o-(this.size+6)&&this.reset(),this.element.style.top=this.y+"px",this.element.style.left=this.x+"px",this.step+=this.stepSize,this.x+=Math.cos(this.step),(this.x+this.size>s-a||this.x<a)&&this.reset()},this.reset=function(){this.y=0,this.x=h(a,s-a),this.stepSize=h(1,10)/100,this.size=h(100*e.minSize,100*e.maxSize)/100,this.element.style.width=this.size+"px",this.element.style.height=this.size+"px",this.speed=h(e.minSpeed,e.maxSpeed)}},f=function(){for(var e=0;e<t.length;e+=1)t[e].update();r=requestAnimationFrame(function(){f()})};return{snow:function(r,m){for(l(e,m),n=r,o=n.offsetHeight,s=n.offsetWidth,n.snow=this,"body"===n.tagName.toLowerCase()&&(a=25),window.addEventListener("resize",function(){o=n.clientHeight,s=n.offsetWidth},!0),i=0;i<e.flakeCount;i+=1)t.push(new d(n,h(100*e.minSize,100*e.maxSize)/100,h(e.minSpeed,e.maxSpeed)));f()},clear:function(){var e=null;e=n.getElementsByClassName?n.getElementsByClassName("snowfall-flakes"):n.querySelectorAll(".snowfall-flakes");for(var t=e.length;t--;)e[t].parentNode===n&&n.removeChild(e[t]);cancelAnimationFrame(r)}}}return{snow:function(t,i){if("string"==typeof i)if(t.length>0)for(var n=0;n<t.length;n++)t[n].snow&&t[n].snow.clear();else t.snow.clear();else if(t.length>0)for(var n=0;n<t.length;n++)(new e).snow(t[n],i);else(new e).snow(t,i)}}}();
var SNOW_Picture = biicore.webroot + '/common/imgs/heart.png';
var special_custom = ['646f6e3d778825e6f306667f', '64a04f6beb89a210fc07656a'];

var dataSheet;
      
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get("id");

async function fetchGoogleSheet() {
  const apiKey = "AIzaSyChXLCI_NcMDxpVi8XSfSopjH2MoijOst0"; // Thay thế bằng API Key của bạn
  const sheetName = "Nhà gái"; // Tên của sheet cần truy cập
  const sheetName2 = "Nhà trai"; // Tên của sheet cần truy cập
  const sheetId = "1N5YjzpisADFocd2QH_SqIA1MeArLQn7SZSbrsmp6tu4"; // Thay thế bằng ID của Google Sheet
  const range = "A2:D"; // Thay thế bằng range bạn muốn fetch

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${range}?key=${apiKey}`;
  const url2 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName2}!${range}?key=${apiKey}`;

  const fetchData = async (url) => {
	const response = await fetch(url);
	if (!response.ok) {
	  throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
	}
	return response.json();
  };

  try {
	const [data, data2] = await Promise.all([fetchData(url), fetchData(url2)]);

	dataSheet = data.values.map((e) => ({
	  id: e[0],
	  name: e[1],
	  time: e[2],
	  date: e[3],
	  man: false,
	}));

	if (data2.values) {
	  const dataSheet2 = data2.values.map((e) => ({
		id: e[0],
		name: e[1],
		time: e[2],
		date: e[3],
		man: true,
	  }));
	  dataSheet.push(...dataSheet2);
	}

	if (id && dataSheet) {
	  const parts = dataSheet.find((e) => e.id === id);
	  if (parts) {
		const [day, month, year] = parts.date.split("/");
		const [hour, minute] = parts.time.split(":");

		document.getElementById("dateWedding").textContent = parts.date;
		document.getElementById("nguoiNhan").textContent = parts.name;
		document.getElementById("ngayNguoiNhan").textContent = day;
		document.getElementById("thangNguoiNhan").textContent = month;
		document.getElementById("namNguoiNhan").textContent = year;
		document.getElementById("gioAn").textContent = hour;
		document.getElementById("phutAn").textContent = minute;
		document.getElementById("nhaGaiTrai").textContent = parts.man ? 'nhà Trai' : 'nhà Gái';
	  }
	}
  } catch (error) {
	console.error("Error fetching data:", error);
  }
}
window.onload = (event) =>{
	fetchGoogleSheet()
	if(biicore.effect.type == 'none') return false;
	setTimeout(function() {
		if(biicore.effect.type == 'heart') {
			let flakeCount = 30;
			if (typeof biicore.template_id !== 'undefined' && special_custom.includes(biicore.template_id)) {
				flakeCount = 5;
				if(window.innerWidth <= 650) {
					flakeCount = 3;
				}
			}
			snowFall.snow(document.getElementsByTagName('body')[0], {image : SNOW_Picture, minSize: 15, maxSize:32, flakeCount:flakeCount, maxSpeed: 3, minSpeed: 1});
		}else if(biicore.effect.type == 'snow') {
			let flakeCount = 250;
			if (typeof biicore.template_id !== 'undefined' && special_custom.includes(biicore.template_id)) {
				flakeCount = 50;
				if(window.innerWidth <= 1200) {
					flakeCount = 30;
				}
				if(window.innerWidth <= 650) {
					flakeCount = 25;
				}
			}
			snowFall.snow(document.getElementsByTagName('body')[0], {round : true, shadow : true, flakeCount : flakeCount, minSize: 1, maxSize:8});
		}else if(biicore.effect.type == 'custom') {
			let effectSetting = biicore.effect.setting;
			let minSpeed = (parseInt(effectSetting.speed) - 3);
			if(minSpeed <= 0) minSpeed = 1;
			snowFall.snow(document.getElementsByTagName('body')[0], {image : effectSetting.icon, minSize: effectSetting.minSize, maxSize:effectSetting.maxSize, flakeCount:effectSetting.number, maxSpeed: effectSetting.speed, minSpeed: minSpeed});
		}
	}, 300);
	

	showContentWishSuggestions.forEach(function(content) {
		content.addEventListener('click', function(event) {
			event.preventDefault();
			let text = this.textContent || this.innerText;
			document.getElementById('content').value = text;
		});
	});
};
if(biicore.alert && Object.keys(biicore.alert).length > 0 && biicore.alert.status == 1) {
	setTimeout(function(){
		Swal.fire({
			title: biicore.alert.title,
			html: biicore.alert.content,
			showCloseButton: false,
			showConfirmButton: false,
			showCancelButton: true,
			focusCancel: true,
			cancelButtonText: (typeof biicore.alert.cancel_button_text != 'undefined' && biicore.alert.cancel_button_text != '') ? biicore.alert.cancel_button_text : 'Tắt thông báo',
		});
	}, biicore.alert.timeout);
}

if(biicore.bgMusic){
	var audioPlayer = document.createElement("AUDIO");
	audioPlayer.style.display = "none";

	setTimeout(function(){
		if (audioPlayer.canPlayType("audio/mpeg")) {
			audioPlayer.setAttribute("src", biicore.bgMusic);
			document.getElementsByClassName("bii-player")[0].style.display = "block";
		}
		audioPlayer.volume = 0.3;
		audioPlayer.setAttribute("controls", "controls");
		document.body.appendChild(audioPlayer);
	}, 1000);
	
	var myInterval = setInterval(function(){
		if(document.querySelector(".bii-player")){
			setTimeout(function(){
				document.getElementsByClassName("bii-player")[0].classList.add("show-sec");
			},2000);
			setTimeout(function(){
				document.getElementsByClassName("bii-player")[0].classList.remove("show-sec");
			},7000);
			clearInterval(myInterval);
		}
	}, 200);

	function playPause() {
		document.getElementsByClassName("bii-player")[0].classList.remove("show-sec");
	    if (audioPlayer.paused) {
			audioPlayer.play();
			document.getElementById("playerVolumeOff").style.display = "none";
			document.getElementById("playerVolumeOn").style.display = "block";
		} else {
			audioPlayer.pause(); 
			document.getElementById("playerVolumeOff").style.display = "block";
			document.getElementById("playerVolumeOn").style.display = "none";
		}
	}
}

var showButtonWishSuggestions = document.querySelector('.show-autocomplete');
var hideButtonWishSuggestions = document.querySelector('.hide-autocomplete');
var showContentWishSuggestions = document.querySelectorAll('.showContent');

var toggleDisplayWishesAutocomplete = function(check=false) {
	let content = document.querySelector('.wishes-autocomplete-content');
	let isShowing = showButtonWishSuggestions.style.display === 'none';
	if(check && !isShowing) {
		return;
	}
	content.style.display = isShowing ? 'none' : '';
	showButtonWishSuggestions.style.display = isShowing ? '' : 'none';
	hideButtonWishSuggestions.style.display = isShowing ? 'none' : '';
};

if(showButtonWishSuggestions && hideButtonWishSuggestions) {
	showButtonWishSuggestions.addEventListener('click', function() { toggleDisplayWishesAutocomplete(false); });
	hideButtonWishSuggestions.addEventListener('click', function() { toggleDisplayWishesAutocomplete(false); });                    
	document.body.addEventListener('click', function(event) {
		if (event.target === document.body || (!showButtonWishSuggestions.contains(event.target) && !hideButtonWishSuggestions.contains(event.target) && !document.getElementById('searchWishSuggestions').contains(event.target) && !Array.from(showContentWishSuggestions).some(function(element) { return element.contains(event.target); }) )) {
			toggleDisplayWishesAutocomplete(true);
		}
	});
}

function searchWishSuggestionsFunction() {
	let input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('searchWishSuggestions');
	filter = removeVietnameseTones(input.value.toUpperCase());
	ul = document.getElementById("wishSuggestions");
	li = ul.getElementsByTagName('li');

	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (removeVietnameseTones(txtValue.toUpperCase()).indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function removeVietnameseTones(str) {
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "A");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "E");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "I");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "O");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "U");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "Y");
	str = str.replace(/đ/g, "D");
	str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
	str = str.replace(/Đ/g, "D");
	str = str.replace(/[^a-zA-Z0-9 ]/g, "");
	return str;
}


