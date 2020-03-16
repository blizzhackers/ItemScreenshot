function BaseItem() {
/*     var runes_gen = function() { // generates runes compilation, only needed to generate a new compilation .png
        var sWidth = 28;
        var sHeight = 28;
        let runes = []
        for (var i=0; i<33; i++) {
            let name = "r" + (i+1).toString().padStart(2, "0");
            runes.push(new Promise((resolve, reject) => {
                let img = new Image();
                img.src = "assets/gfx/" + name + "/21.png";
                img.onload = () => {
                    let newRune = document.createElement('canvas');
                    newRune.width = sWidth;
                    newRune.height = sHeight;
                    let ctx = newRune.getContext('2d');
                    ctx.drawImage(img, 0, 0, newRune.width, newRune.height);
                    obj = {};
                    obj[name] = newRune;
                    resolve(obj);
                }
            }));
        }
        
        return runes;
    }; */
    
    var runes = function() { // slices compilation to rune list
        var img = new Image();
        img.src = "assets/runes.png";
        let runes = [];
        this.loaded = false;
        
        let cb = [];
        img.onload = () => {
            cb.forEach(cb => cb.call());
        }

        for (let i = 0; i < 33; i++) {
            let name = "r" + (i+1).toString().padStart(2, "0");
            runes.push(new Promise((resolve, reject) => {
                cb.push(() => {
                    var sWidth = 28;
                    var sHeight = 28;
                    let newRune = document.createElement('canvas');
                    newRune.width = sWidth;
                    newRune.height = sWidth;
                    let ctx = newRune.getContext('2d');
                    ctx.drawImage(img, i * sWidth, 0, sWidth, sHeight, 0, 0, newRune.width, newRune.height);
                    obj = {};
                    obj[name] = newRune;
                    resolve(obj);
                });
            }));
        }       
        
        return runes;
    };
    
    /* var gems_gen = function() { // generates gems compilation, only needed to generate a new compilation .png
        var gemlist = [
                "skc", "skf", "sku", "skl", "skz",
                "gsba", "gsbb", "gsbc", "gsbd", "gsbe",
                "gsga", "gsgb", "gsgc", "gsgd", "gsge",
                "gsra", "gsrb", "gsrc", "gsrd", "gsre",
                "gsva", "gsvb", "gsvc", "gsvd", "gsve",
                "gswa", "gswb", "gswc", "gswd", "gswe",
                "gsya", "gsyb", "gsyc", "gsyd", "gsye"
            ];
        var sWidth = 28;
        var sHeight = 28;
        let gems = []
        for (var i=0; i<gemlist.length; i++) {
            let name = gemlist[i];
            gems.push(new Promise((resolve, reject) => {
                let img = new Image();
                img.src = "assets/gfx/" + name + "/21.png";
                img.onload = () => {
                    let newGem = document.createElement('canvas');
                    newGem.width = sWidth;
                    newGem.height = sHeight;
                    let ctx = newGem.getContext('2d');
                    ctx.drawImage(img, 0, 0, newGem.width, newGem.height);
                    obj = {};
                    obj[name] = newGem;
                    resolve(obj);
                }
            }));
        }
        
        return gems;
    }; */
    
    var gems = function() { // slices compilation to gem list
        var img = new Image();
        img.src = "assets/gems.png";
        let gems = [];
        this.loaded = false;
        
        let cb = [];
        img.onload = () => {
            cb.forEach(cb => cb.call());
        }
        
        var gemlist = [
            "skc", "skf", "sku", "skl", "skz",
            "gsba", "gsbb", "gsbc", "gsbd", "gsbe",
            "gsga", "gsgb", "gsgc", "gsgd", "gsge",
            "gsra", "gsrb", "gsrc", "gsrd", "gsre",
            "gsva", "gsvb", "gsvc", "gsvd", "gsve",
            "gswa", "gswb", "gswc", "gswd", "gswe",
            "gsya", "gsyb", "gsyc", "gsyd", "gsye"
        ];

        for (let i = 0; i < gemlist.length; i++) {
            let name = gemlist[i];
            gems.push(new Promise((resolve, reject) => {
                cb.push(() => {
                    var sWidth = 28;
                    var sHeight = 28;
                    let newGem = document.createElement('canvas');
                    newGem.width = sWidth;
                    newGem.height = sWidth;
                    let ctx = newGem.getContext('2d');
                    ctx.drawImage(img, i * sWidth, 0, sWidth, sHeight, 0, 0, newGem.width, newGem.height);
                    obj = {};
                    obj[name] = newGem;
                    resolve(obj);
                });
            }));
        }       
        
        return gems;
    };
    
    /* var jewels_gen = function() { // generates jewels compilation, only needed to generate a new compilation .png
        var sWidth = 28;
        var sHeight = 28;
        let jewels = []
        for (var i=0; i<6; i++) {
            let name = "jew" + (i+1).toString();
            jewels.push(new Promise((resolve, reject) => {
                let img = new Image();
                img.src = "assets/gfx/" + name + "/21.png";
                img.onload = () => {
                    let newJewel = document.createElement('canvas');
                    newJewel.width = sWidth;
                    newJewel.height = rHeight;
                    let ctx = newJewel.getContext('2d');
                    ctx.drawImage(img, 0, 0, newJewel.width, newJewel.height);
                    obj = {};
                    obj[name] = newJewel;
                    resolve(obj);
                }
            }));
        }
        
        return jewels;
    }; */
	
	var jewels = function() { // slices compilation to jewel list
        var img = new Image();
        img.src = "assets/jewels.png";
        let jewels = [];
        this.loaded = false;
        
        let cb = [];
        img.onload = () => {
            cb.forEach(cb => cb.call());
        }

        for (let i = 0; i < 6; i++) {
            let name = "jew" + (i+1).toString();
            jewels.push(new Promise((resolve, reject) => {
                cb.push(() => {
                    var sWidth = 28;
                    var sHeight = 28;
                    let newJewel = document.createElement('canvas');
                    newJewel.width = sWidth;
                    newJewel.height = sWidth;
                    let ctx = newJewel.getContext('2d');
                    ctx.drawImage(img, i * sWidth, 0, sWidth, sHeight, 0, 0, newJewel.width, newJewel.height);
                    obj = {};
                    obj[name] = newJewel;
                    resolve(obj);
                });
            }));
        }       
        
        return jewels;
    };
    
    this.socket = new Promise((resolve, reject) => {
        var sStart = Date.now();
        var sWidth = 28;
        var sHeight = 28;
        let name = "gemsocket";
        let promises = [
            new Promise((resolve, reject) => {
                let img = new Image();
                img.src = "assets/" + name + ".png";
                img.onload = () => {
                    let gemsocket = document.createElement('canvas');
                    gemsocket.width = sWidth;
                    gemsocket.height = sHeight;
                    let ctx = gemsocket.getContext('2d');
                    ctx.drawImage(img, 0, 0, gemsocket.width, gemsocket.height);
                    obj = {};
                    obj[name] = gemsocket;
                    resolve(obj);
                }
            })
        ];
        
        promises = promises.concat(runes());    // Add runes
        promises = promises.concat(gems());     // Add gems
        promises = promises.concat(jewels());     // Add jewels
		
        return Promise.all(promises).then(results => {
            let ret = {};
            results.forEach(result => {
                Object.keys(result).forEach(item => {
                    ret[item] = result[item]
                });
            });
            console.log("Loading sockets took " + (Date.now() - sStart) + "ms");
            resolve(ret);
        }); 
    }).then(result => this.socket = result);
}

var BaseItem = new BaseItem();

function Item(itemData) {	
	this.image = itemData.image;
	this.X = 2;
	this.Y = 4;
	this.width = 0;
	this.height = 0;
	
	this.color = itemData.itemColor;
	this.ethereal = itemData.description.toLowerCase().indexOf("ethereal") > -1;
	this.socketPositions = [];

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
                                this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num10 + num12 });
                                break;
                            }
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num6 + num10 + num12 });
                            break;
                        }
                        if (this.Y === 3) {
                            if (this.X === 1) {
                                this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num7 + num12 });
                                break;
                            }
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num7 + num12 });
                            break;
                        }
                        if (this.X === 1) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num7 + num10 + num12 });
                            break;
                        }
                        this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num7 + num10 + num12 });
                        break;
                    case 2:
                        if(this.Y === 2) {
                            if(this.X === 1) {
                                this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num12});
                                this.socketPositions.push({ gfx: itemData.sockets[1], x: num3 + num11, y: num7 + num12});
                                break;
                            }
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num4 + num11, y: num7 + num12});
                            break;
                        }
                        if (this.Y === 3) {
                            if (this.X === 1) {
                                this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num10 + num12});
                                this.socketPositions.push({ gfx: itemData.sockets[1], x: num3 + num11, y: num7 + num10 + num12});
                                break;
                            }
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num6 + num10 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num4 + num11, y: num7 + num10 + num12});
                            break;
                        }
                        if (this.X === 1) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num10 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num3 + num11, y: num8 + num10 + num12});
                            break;
                        }
                        this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num6 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[1], x: num4 + num11, y: num8 + num10 + num12});
                        break;
                    case 3:
                        if(this.Y === 2) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num5 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[2], x: num4 + num11, y: num7 + num12});
                            break;
                        }
                        if (this.Y === 3) {
                            if (this.X === 1) {
                                this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num12});
                                this.socketPositions.push({ gfx: itemData.sockets[1], x: num3 + num11, y: num7 + num12});
                                this.socketPositions.push({ gfx: itemData.sockets[2], x: num3 + num11, y: num8 + num12});
                                break;
                            }
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num4 + num11, y: num7 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[2], x: num4 + num11, y: num8 + num12});
                            break;
                        }
                        if (this.X === 1) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num10 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num3 + num11, y: num7 + num10 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[2], x: num3 + num11, y: num8 + num10 + num12});
                            break;
                        }
                        this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num6 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[1], x: num4 + num11, y: num7 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[2], x: num4 + num11, y: num8 + num10 + num12});
                        break;
                    case 4:
                        if (this.Y === 3) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num10 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num5 + num11, y: num6 + num10 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[2], x: num3 + num11, y: num7 + num10 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[3], x: num5 + num11, y: num7 + num10 + num12});
                            break;
                        }
                        if (this.Y === 2) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num5 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[2], x: num3 + num11, y: num7 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[3], x: num5 + num11, y: num7 + num12});
                            break;
                        }
                        if(this.X === 1) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num3 + num11, y: num7 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[2], x: num3 + num11, y: num8 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[3], x: num3 + num11, y: num9 + num12});
                            break;
                        }
                        this.socketPositions.push({ gfx: itemData.sockets[0], x: num4 + num11, y: num6 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[1], x: num4 + num11, y: num7 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[2], x: num4 + num11, y: num8 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[3], x: num4 + num11, y: num9 + num12});
                        break;
                    case 5:
                        if (this.Y === 3) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num5 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[2], x: num4 + num11, y: num7 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[3], x: num3 + num11, y: num8 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[4], x: num5 + num11, y: num8 + num12});
                            break;
                        }
                        this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[1], x: num5 + num11, y: num6 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[2], x: num4 + num11, y: num7 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[3], x: num3 + num11, y: num8 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[4], x: num5 + num11, y: num8 + num10 + num12});
                        break;
                    case 6:
                        if (this.Y === 3) {
                            this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[1], x: num5 + num11, y: num6 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[2], x: num3 + num11, y: num7 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[3], x: num5 + num11, y: num7 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[4], x: num3 + num11, y: num8 + num12});
                            this.socketPositions.push({ gfx: itemData.sockets[5], x: num5 + num11, y: num8 + num12});
                            break;
                        }
                        this.socketPositions.push({ gfx: itemData.sockets[0], x: num3 + num11, y: num6 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[1], x: num5 + num11, y: num6 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[2], x: num3 + num11, y: num7 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[3], x: num5 + num11, y: num7 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[4], x: num3 + num11, y: num8 + num10 + num12});
                        this.socketPositions.push({ gfx: itemData.sockets[5], x: num5 + num11, y: num8 + num10 + num12});
                        break;
                    default:
                        break;
                }
            
                console.log("Loading item took " + (Date.now() - iStart) + "ms");
                resolve(image);
            }
        });
    }).call();
	
	this.drawSockets = function(graphics) {		
		promises = [];
		for (var i = 0; i < this.socketPositions.length; i++) {
            let socket = this.socketPositions[i];
			graphics.globalAlpha = 0.3;
			graphics.drawImage(
				BaseItem.socket["gemsocket"],
				socket.x - 2,
				socket.y + 1
			);
			graphics.globalAlpha = 1.0;
			
            if (socket.gfx.indexOf("gemsocket") > -1) continue;
            graphics.drawImage(
                BaseItem.socket[socket.gfx],  	// Socketed item
                socket.x, 		// X
                socket.y  		// Y
            );
			
			promises.push(socket);
		}
		
		return Promise.all(promises);
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
				console.log("Drawing item image took " + (Date.now() - iStart) + "ms");
			});
		});
	}
}