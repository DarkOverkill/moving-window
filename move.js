var difX;
		var difY;
		var pX;
		var pY;
		var a;
		var element;
		function cords(e){
			pX = e.pageX;
			pY = e.pageY;
			document.getElementById("coords").innerHTML = "X: " + pX + "Y: " + pY;
		}
		function move(e) {	
			
			if (a=="true") {
				//document.getElementById("coords").innerHTML = "X: " + x + "Y: " + y;
				//document.getElementById('test').style.left = pX - difX + 'px';
			    //document.getElementById('test').style.top = pY - difY + 'px';
				window.getSelection().removeAllRanges();
				element.style.left = pX - difX + 'px';
			    element.style.top = pY - difY + 'px';
				//console.log(pX, "	", difX);
			}	
			//console.log(element, "	", pX, "	", difX);
		}
		
		function down(e){
			difX = pX - document.getElementById('info').getClientRects()[0].left;
			difY = pY - document.getElementById('info').getClientRects()[0].top;
			a = document.getElementById("head").getAttribute('data-val');
			console.log('down ', a, typeof(a));
			document.getElementById("head").setAttribute('data-val', "true");
			a = document.getElementById("head").getAttribute('data-val');
			element = document.getElementById('info');
			console.log(element, "	", pX, "	", difX);
		}

		function up(){
			a = document.getElementById("head").getAttribute('data-val');
			console.log('up ', a, typeof(a));
			document.getElementById("head").setAttribute('data-val', "false");
			a = document.getElementById("head").getAttribute('data-val');
		}		