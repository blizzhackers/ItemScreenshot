function Item(itemData) {	
	this.image = itemData.image;
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	
	this.color = itemData.itemColor;
	this.ethereal = itemData.description.toLowerCase().indexOf("ethereal") > -1;
	this.socketPositions = (function(length) {
		let num3 = 0;
		let num4 = num3 + 14;
		let num5 = num4 + 14;
		let num6 = 5;
		let num7 = 34;
		let num8 = 63;
		let num9 = 92;
		let num10 = 14;
		let num11 = 1;
		let num12 = -1;
				
		positions = [];
		switch (length) {
			case 1:
				if(Y === 2) {
					if(X === 1) {
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12 });
						break;
					}
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12 });
					break;
				}
				if (Y === 3) {
					if (X === 1) {
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12 });
						break;
					}
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12 });
					break;
				}
				if (X === 1) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12 });
					break;
				}
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12 });
				break;
			case 2:
				if(Y === 2) {
					if(X === 1) {
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
						break;
					}
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
					break;
				}
				if (Y === 3) {
					if (X === 1) {
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
						break;
					}
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
					break;
				}
				if (X === 1) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
					break;
				}
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num10 + num12});
				break;
			case 3:
				if(Y === 2) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
					break;
				}
				if (Y === 3) {
					if (X === 1) {
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
						positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
						break;
					}
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num12});
					break;
				}
				if (X === 1) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
					break;
				}
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num10 + num12});
				break;
			case 4:
				if (Y === 3) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num10 + num12});
					break;
				}
				if (Y === 2) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num12});
					break;
				}
				if(X === 1) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num9 + num12});
					break;
				}
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num4 + num11, y: num9 + num12});
				break;
			case 5:
				if (Y === 3) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num12});
					break;
				}
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num10 + num12});
				break;
			case 6:
				if (Y === 3) {
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
					positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[5] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num12});
					break;
				}
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
				positions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[5] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num10 + num12});
				break;
			default:
				break;
		}
		
		return positions;
	}).call(itemData.sockets.length);

	var socket = (function () { let img = new Image(); img.src = "assets/gemsocket.png"; return img; }).call();
	
	var image = new Promise((resolve, reject) => {
		var iStart = Date.now();
		var image = new Image();
		
		if (this.color === -1) {
            this.color = 21;
        }
		
        image.src = "assets/gfx/" + this.image + "/" + this.color + ".png";
		
		image.onload = () => {
			this.width = image.width;
			this.height = image.height;
			
			console.log("Loading item took " + (Date.now() - iStart) + "ms");
			resolve(image);
		}
	}).then(result => image = result);
	
	this.drawSockets = function(graphics) {
		promises = [];
		for (var i = 0; i < this.socketPositions.length; i++) {
			graphics.globalAlpha = 0.3;
			graphics.drawImage(
				socket,
				this.socketPositions[i].x - 2,
				this.socketPositions[i].y + 1
			);
			graphics.globalAlpha = 1.0;
			if (this.socketPositions[i].gfx.src.indexOf("gemsocket") > -1) continue;
			
			promises.push(new Promise((resolve, reject) => {
				this.socketPositions[i].gfx.onload = (soc) => {
					graphics.drawImage(
						this.socketPositions[i].gfx,  	// Socketed item
						this.socketPositions[i].x, 		// X
						this.socketPositions[i].y  		// Y
					);
					
					resolve(this.socketPositions[i]);
				};
			}));
		}
		
		return Promise.all(promises);
	}
	
	this.drawEthereal = function(graphics) {
		return new Promise((resolve, reject) => {
			
		});
	}
	
	this.drawItem = function(graphics, x, y) {
		var iStart = Date.now();
		
		if (this.ethereal) graphics.globalAlpha = 0.5;
		graphics.draw(image, x, y);
		graphics.globalAlpha = 1.0;
		
		this.drawSockets(image).then(result => {
			console.log("Creating item image took " + (Date.now() - iStart) + "ms");
		});
		
		
		
	}
}