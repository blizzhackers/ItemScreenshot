function Item(itemData) {	
	this.image = itemData.image;
	this.X = 2;
	this.Y = 4;
	this.width = 0;
	this.height = 0;
	
	this.color = itemData.itemColor;
	this.ethereal = itemData.description.toLowerCase().indexOf("ethereal") > -1;
	this.socketPositions = [];

	var socket = (function () { let img = new Image(); img.src = "assets/gemsocket.png"; return img; }).call();
	
	var loadImage = (() => {
		return new Promise((resolve, reject) => {
		var iStart = Date.now();
		var image = new Image();
		
        image.src = "assets/gfx/" + itemData.image + "/" + (itemData.itemColor === -1?21:itemData.itemColor) + ".png";
		
		image.onload = () => {
			this.width = image.width;
			this.height = image.height;
			if (image.height < 30) {
                this.Y = 1;
            } else if (image.height < 65) {
                this.Y = 2;
            } else if (image.height < 95) {
                this.Y = 3;
            }
            
            if (image.width < 37) {
                this.X = 1;
            }
			
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
					
			//this.socketPositions = [];
			
			switch (itemData.sockets.length) {
				case 1:
					if(this.Y === 2) {
						if(this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12 });
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12 });
						break;
					}
					if (this.Y === 3) {
						if (this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12 });
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12 });
						break;
					}
					if (this.X === 1) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12 });
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12 });
					break;
				case 2:
					if(this.Y === 2) {
						if(this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
						break;
					}
					if (this.Y === 3) {
						if (this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
						break;
					}
					if (this.X === 1) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num10 + num12});
					break;
				case 3:
					if(this.Y === 2) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
						break;
					}
					if (this.Y === 3) {
						if (this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num12});
						break;
					}
					if (this.X === 1) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num10 + num12});
					break;
				case 4:
					if (this.Y === 3) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num10 + num12});
						break;
					}
					if (this.Y === 2) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num12});
						break;
					}
					if(this.X === 1) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num9 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num4 + num11, y: num9 + num12});
					break;
				case 5:
					if (this.Y === 3) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num10 + num12});
					break;
				case 6:
					if (this.Y === 3) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[5] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[5] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num10 + num12});
					break;
				default:
					break;
			}
			
			console.log("Loading item took " + (Date.now() - iStart) + "ms");
			resolve(image);
		}
	}); }).call();
	
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
			
			this.socketPositions[i] = new Promise((resolve, reject) => {
				this.socketPositions[i].gfx.onload = () => {
					graphics.drawImage(
						this.socketPositions[i].gfx,  	// Socketed item
						this.socketPositions[i].x, 		// X
						this.socketPositions[i].y  		// Y
					);function Item(itemData) {	
	this.image = itemData.image;
	this.X = 2;
	this.Y = 4;
	this.width = 0;
	this.height = 0;
	
	this.color = itemData.itemColor;
	this.ethereal = itemData.description.toLowerCase().indexOf("ethereal") > -1;
	this.socketPositions = [];

	var socket = (function () { let img = new Image(); img.src = "assets/gemsocket.png"; return img; }).call();
	
	var loadImage = (() => {
		return new Promise((resolve, reject) => {
		var iStart = Date.now();
		var image = new Image();
		
        image.src = "assets/gfx/" + itemData.image + "/" + (itemData.itemColor === -1?21:itemData.itemColor) + ".png";
		
		image.onload = () => {
			this.width = image.width;
			this.height = image.height;
			if (image.height < 30) {
                this.Y = 1;
            } else if (image.height < 65) {
                this.Y = 2;
            } else if (image.height < 95) {
                this.Y = 3;
            }
            
            if (image.width < 37) {
                this.X = 1;
            }
			
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
					
			//this.socketPositions = [];
			
			switch (itemData.sockets.length) {
				case 1:
					if(this.Y === 2) {
						if(this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12 });
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12 });
						break;
					}
					if (this.Y === 3) {
						if (this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12 });
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12 });
						break;
					}
					if (this.X === 1) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12 });
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12 });
					break;
				case 2:
					if(this.Y === 2) {
						if(this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
						break;
					}
					if (this.Y === 3) {
						if (this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
						break;
					}
					if (this.X === 1) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num10 + num12});
					break;
				case 3:
					if(this.Y === 2) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
						break;
					}
					if (this.Y === 3) {
						if (this.X === 1) {
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
							this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
							break;
						}
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num12});
						break;
					}
					if (this.X === 1) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num10 + num12});
					break;
				case 4:
					if (this.Y === 3) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num10 + num12});
						break;
					}
					if (this.Y === 2) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num12});
						break;
					}
					if(this.X === 1) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num9 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num4 + num11, y: num6 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num8 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num4 + num11, y: num9 + num12});
					break;
				case 5:
					if (this.Y === 3) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num4 + num11, y: num7 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num10 + num12});
					break;
				case 6:
					if (this.Y === 3) {
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num12});
						this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[5] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num12});
						break;
					}
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[0] + "/21.png"; return img; }).call(), x: num3 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[1] + "/21.png"; return img; }).call(), x: num5 + num11, y: num6 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[2] + "/21.png"; return img; }).call(), x: num3 + num11, y: num7 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[3] + "/21.png"; return img; }).call(), x: num5 + num11, y: num7 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[4] + "/21.png"; return img; }).call(), x: num3 + num11, y: num8 + num10 + num12});
					this.socketPositions.push({ gfx: (function () { let img = new Image(); img.src = "assets/gfx/" + itemData.sockets[5] + "/21.png"; return img; }).call(), x: num5 + num11, y: num8 + num10 + num12});
					break;
				default:
					break;
			}
			
			console.log("Loading item took " + (Date.now() - iStart) + "ms");
			resolve(image);
		}
	}); }).call();
	
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
			
			this.socketPositions[i] = new Promise((resolve, reject) => {
				this.socketPositions[i].gfx.onload = () => {
					graphics.drawImage(
						this.socketPositions[i].gfx,  	// Socketed item
						this.socketPositions[i].x, 		// X
						this.socketPositions[i].y  		// Y
					);
					
					resolve(this.socketPositions[i]);
				};
			}).then(result => this.socketPositions[i] = result);
			
			promises.push(this.socketPositions[i]);
		}
		
		return Promise.all(promises);
	}
	
	this.drawEthereal = function(graphics) {
		return new Promise((resolve, reject) => {
			
		});
	}
	
	this.drawItem = function(graphics, x, y) {
		var iStart = Date.now();
		
		var canvas = document.createElement('canvas');
		loadImage.then(result => {
			canvas.width = result.width;
			canvas.height = result.height
			if (this.ethereal) graphics.globalAlpha = 0.5;
			graphics.drawImage(result, x, y);
			graphics.globalAlpha = 1.0;

			this.drawSockets(graphics).then(result => {
				console.log("Creating item image took " + (Date.now() - iStart) + "ms");
			});
		});
	}
}
					
					resolve(this.socketPositions[i]);
				};
			}).then(result => this.socketPositions[i] = result);
			
			promises.push(this.socketPositions[i]);
		}
		
		return Promise.all(promises);
	}
	
	this.drawEthereal = function(graphics) {
		return new Promise((resolve, reject) => {
			
		});
	}
	
	this.drawItem = function(graphics, x, y) {
		var iStart = Date.now();
		
		var canvas = document.createElement('canvas');
		loadImage.then(result => {
			canvas.width = result.width;
			canvas.height = result.height
			if (this.ethereal) graphics.globalAlpha = 0.5;
			graphics.drawImage(result, x, y);
			graphics.globalAlpha = 1.0;

			this.drawSockets(graphics).then(result => {
				console.log("Creating item image took " + (Date.now() - iStart) + "ms");
			});
		});
	}
}