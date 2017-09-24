window.onload = function() {

var bannerWrap=document.getElementById('banner_wrap');
	var banner = document.getElementById('banner');
	var prevBtn = document.getElementById('prev');
	var nextBtn = document.getElementById('next');
	var oimg = banner.getElementsByTagName('img')[0];
	var oimgW = oimg.clientWidth; //获取一张图片的宽度
	var cir = document.getElementById('circle');
	var ali = cir.getElementsByTagName('li'); //获取li的集合
	/*var num = 0;*/ //num从0开始记  0 1 2 3...6 7  没有假象图初始化为0
	var num = 1; //由于前面添加了假象图  因此初始化为1；
	var len = banner.getElementsByTagName('img').length; // 图片的数量

	/*切换下一张*/
	nextBtn.onclick = function() {
		// banner.style.left = -oimgW + 'px';//移动一张图片   添加一个变量可改变n张图片的宽度
		num++;
		// if (num == 8) { //对num的值进行判断
		// 	num = 0;
		// }
		if (num == 9) { //由于假象图 初始值为1，因此判断要加1；
			num = 0;
			banner.style.left = -num * oimgW + 'px'; //跳回假象图
			banner.style.transition = 'all 0s'; //跳回假象图 不要过度效果
			banner.style.webkitTransition = 'all 0s';
			num = 1; //从假象图到真1图  实现有过渡效果  不加上num=1 会出现undefined
		}
		setTimeout(function() { //内部函数语句
				banner.style.left = -num * oimgW + 'px'; //移动图片的宽度进行位移
				banner.style.transition = 'all 1s'; //过渡动画
				banner.style.webkitTransition = 'all 1s';
			}, 0)
			// setTimeout 运行机制 先执行主线程里的语句，之后再执行内部函数里面的语句
			/*banner.style.left = -num * oimgW + 'px'; //移动图片的宽度进行位移
			banner.style.transition = 'all 1s'; //过渡动画
			banner.style.webkitTransition = 'all 1s';*/
			/*js dom 操作的合并机制  因此引入定时器 实现假象图跳转真图无过渡效果*/
		for (var i = 0; i < ali.length; i++) { //消除其他li的样式
			ali[i].className = '';
		}
		/*由于初始值改为1，因此num要-1才能让小标圆点对应上*/
		/*ali[num].className = 'active';*/
		ali[num - 1].className = 'active';

		//给移动的图片添加active样式  同时也要消除其他li的样式  因此用for循环
	}



	/*切换上一张*/
	prevBtn.onclick = function() {
		num--;
		if (num == 0) {
			num = 9;
			banner.style.left = -num * oimgW + 'px';
			banner.style.transition = 'all 0s';
			banner.style.webkitTransition = 'all 0s';
			num = 8;
		}
		setTimeout(function() {
			banner.style.left = -num * oimgW + 'px';
			banner.style.transition = 'all 1s';
			banner.style.webkitTransition = 'all 1s';
		}, 0);
		for (var i = 0; i < ali.length; i++) {
			ali[i].className = '';
		}
		ali[num - 1].className = 'active';
	}

	/*定时切换*/
	var Timer = null;

	function Move() {

		Timer = setInterval(function() {
			num++;
			// if (num == oimg.length - 1) {
			if (num == len - 1) {
				num = 0;
				banner.style.left = -num * oimgW + 'px';
				banner.style.transition = 'all 1s';
				banner.style.webkitTransition = 'all 1s';
				num = 1;
			}
			setTimeout(function() {
				banner.style.left = -num * oimgW + 'px';
				banner.style.transition = 'all 1s';
				banner.style.webkitTransition = 'all 1s';
			}, 0);
			for (var i = 0; i < ali.length; i++) {
				ali[i].className = '';
			}
			ali[num - 1].className = 'active';
		}, 2000)
	}
	/*封装的函数不会自动执行  因此要启动定时器*/
	Move();

	/*鼠标滑过清除滑动(定时器)*/
	bannerWrap.onmouseover = function() {
			clearInterval(Timer);
		}
		/*鼠标移出继续滑动(定时器) 因此封装定时切换*/
	bannerWrap.onmouseout = function() {
		Move();
	}

	/*滑动悬浮下标小圆点进行切换*/
	for (var i = 0; i < ali.length; i++) { //遍历li
		ali[i].index = i; //下标索引
		ali[i].onmouseover = function() {
			for (var j = 0; j < ali.length; j++) {
				ali[j].className = '';
			}
			this.className = 'active';
			num=this.index+1;//由于图片跟索引下标相差1  因此+1
			banner.style.left=-num*oimgW+'px';
			banner.style.transition='all 1s';
			banner.style.webkitTransition='all 1s';
		}
	}
}