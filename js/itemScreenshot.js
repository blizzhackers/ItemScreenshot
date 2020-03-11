//Item screenshots

WebFont.load({
    custom: {
        families: ['AvQuest']
    }
});



var itemScreenshot = {
    hideRequirements    : true,
    drawCursor          : true,
    drawSockets         : true,
    drawEthereal        : true,

    bgnd: [
        (function () { let img = new Image(); img.src = "assets/bgnd1.png"; return img; }).call(),
        (function () { let img = new Image(); img.src = "assets/bgnd2.png"; return img; }).call(),
        (function () { let img = new Image(); img.src = "assets/bgnd3.png"; return img; }).call(),
        (function () { let img = new Image(); img.src = "assets/bgnd4.png"; return img; }).call()
    ],

    hand: (function () { let img = new Image(); img.src = "assets/hand.png"; return img; }).call(),
    
    socket: (function () { let img = new Image(); img.src = "assets/gemsocket.png"; return img; }).call(),

    textColorMap: [
        "#C4C4C4",      // WHITE
        "#B04434",      // RED
        "#18FC00",      // SET
        "#787CE7",      // MAGIC
        "#948064",      // UNIQUE
        "#505050",      // DARK GRAY
        "WhiteSmoke",
        "WhiteSmoke",
        "#D08420",      // CRAFT
        "#D8B864"       // RARE
    ],

    getItemDesc: function (desc) {
        var i, out = [],
            stringColor = 0;
    
        if (!desc) {
            return "";
        }

        var lines = desc.split("\n");
        
        for (var line in lines) {
            out.push({ text: lines[line], color: [this.textColorMap[0]] });
        }
    
        // Lines are normally in reverse. Add color tags if needed and reverse order.
        for (i = out.length - 1; i >= 0; i -= 1) {
            if (out[i].text.indexOf("Sell value: ") > -1) { // Remove sell value
                out.splice(i, 1);
    
                i += 1;
            } else {
                // Remove all buggy color codes first ..
                out[i].text = out[i].text.replace(/^((xff)|ÿc)/, "");
				out[i].text = out[i].text.replace(/[0-9]((xff)|ÿc)/g, "");
                
                // Check if one of the requirements is not met if we decided to hide them
                if (this.hideRequirements && out[i].text.match(/^1/) &&
                    (out[i].text.match(/(strength:)/i) ||
                    out[i].text.match(/(dexterity:)/i) ||
                    out[i].text.match(/(level:)/i) ||
                    out[i].text.match(/(only\))$/i)) ){
                    // Clear red colors if necessary
                    out[i].color[0] = this.textColorMap[0];
                } else {
                    // .. Otherwise get the real color
                    out[i].color[0] = this.textColorMap[parseInt(out[i].text[0])];
                }
                
                // Remove colorcode from desc
				out[i].text = out[i].text.substring(1);
				
				// second color in same row will always be blue/'magic'
                if (out[i].text.match(/(xff)|ÿc/))
                    out[i].color.push("#787CE7");
            }
    
			// using '$' as delimiter for inline color change here..
            out[i].text = out[i].text.replace(/(xff)|ÿc([0-9!"+<;.*])/g, "\$");
            out[i].text = out[i].text.replace(/\\/g, "");
        }
        
        return out;
    },

    cleanDecription: function (description) {
        return this.getItemDesc(description.toString().split("$")[0]);
    },

    loaded: {},

    create: function (item) {
        var strArray1 = this.cleanDecription(item.description);
        var num1 = 0;
        var tmp = document.createElement('canvas');
        var ctx = tmp.getContext('2d');
        ctx.font = "bold 1.5em AvQuest";
		
        for (var line in strArray1) {
            let size = ctx.measureText(strArray1[line].text);
            if (size.width > num1) {
                num1 = size.width;
            }
        }
        
        if (num1 < 100)
            num1 = 100;
            
        num2 = 16; //parseInt(ctx.font);
        
        console.log("Width:", num1);

        for (var i = 0; i < item.sockets.length; i++) {
            if (item.sockets[i] === "gemsocket") continue;

            var img = new Image();
            img.src = "assets/gfx/" + item.sockets[i] + ".png";
            img.onload = (function(name){
                return function() {
                    itemScreenshot.loaded[name] = this;
                };
            })(item.sockets[i]);
        }

        var image = new Image();
        image.src = "assets/gfx/" + item.image + ".png";
        
        image.onload = () => {
            var X, Y, Top, Left = 0
        
            if (image.height < 30) {
                Y = 1;
                Top = 32;
            } else if (image.height < 65) {
                Y = 2;
                Top = 61;
            } else if (image.height < 95) {
                Y = 3;
                Top = 90;
            } else {
                Y = 4;
                Top = 119;
            }
            
            if (image.width < 37) {
                X = 1;
                Left = 213; // 212 originally
            } else {
                X = 2;
                Left = 226;
            }
            
            var canvas = document.createElement('canvas');
            canvas.width = num1 + 14;
            canvas.height = num2 * strArray1.length + Top + 1;
            document.getElementById("itemList").append(canvas);
            var graphics = canvas.getContext('2d');
            
            console.log("Setting black canvas")
            graphics.fillStyle = "rgba(10, 10, 10, 1)";
            graphics.fillRect(0, 0, canvas.width, canvas.height);
            
            console.log("Drawing background");
            graphics.drawImage(this.bgnd[Y-1], canvas.width / 2 - Left, -9); // top -10 originally

            console.log("Drawing item-active background");
            if (this.drawCursor) {
                graphics.fillStyle = "rgba(0, 128, 0, 0.1)";
            } else {
                graphics.fillStyle = "rgba(0, 0, 255, 0.1)";
            }
            graphics.fillRect((canvas.width - image.width) / 2, 5, image.width, image.height);
            
            console.log("Drawing item gfx")
            if (this.drawEthereal && item.description.toLowerCase().indexOf("ethereal") > -1) graphics.globalAlpha = 0.5;
            graphics.drawImage(image, (canvas.width - image.width) / 2, 5);
            graphics.globalAlpha = 1.0;
            
            if (this.drawSockets) {
                let num3 = Math.round((canvas.width - image.width) / 2); // (item.width - image.width) / 2 originally
                let num4 = num3 + 14;
                let num5 = num4 + 14;
                let num6 = 5; // 5 originally
                let num7 = 34;
                let num8 = 63;
                let num9 = 92;
                let num10 = 14;
                let num11 = 1;
                let num12 = -1;
                
                let socketPositions = [];
                
                switch (item.sockets.length) {
                case 1:
                    if(Y === 2) {
                        if(X === 1) {
                            socketPositions.push({ x: num3 + num11, y: num6 + num10 + num12});
                            break;
                        }
                        socketPositions.push({ x: num4 + num11, y: num6 + num10 + num12});
                        break;
                    }
                    if (Y === 3) {
                        if (X === 1) {
                            socketPositions.push({ x: num3 + num11, y: num7 + num12});
                            break;
                        }
                        socketPositions.push({ x: num4 + num11, y: num7 + num12});
                        break;
                    }
                    if (X === 1) {
                        socketPositions.push({ x: num3 + num11, y: num7 + num10 + num12});
                        break;
                    }
                    socketPositions.push({ x: num4 + num11, y: num7 + num10 + num12});
                    break;
                case 2:
                    if(Y === 2) {
                        if(X === 1) {
                            socketPositions.push({ x: num3 + num11, y: num6 + num12});
                            socketPositions.push({ x: num3 + num11, y: num7 + num12});
                            break;
                        }
                        socketPositions.push({ x: num4 + num11, y: num6 + num12});
                        socketPositions.push({ x: num4 + num11, y: num7 + num12});
                        break;
                    }
                    if (Y === 3) {
                        if (X === 1) {
                            socketPositions.push({ x: num3 + num11, y: num6 + num10 + num12});
                            socketPositions.push({ x: num3 + num11, y: num7 + num10 + num12});
                            break;
                        }
                        socketPositions.push({ x: num4 + num11, y: num6 + num10 + num12});
                        socketPositions.push({ x: num4 + num11, y: num7 + num10 + num12});
                        break;
                    }
                    if (X === 1) {
                        socketPositions.push({ x: num3 + num11, y: num6 + num10 + num12});
                        socketPositions.push({ x: num3 + num11, y: num8 + num10 + num12});
                        break;
                    }
                    socketPositions.push({ x: num4 + num11, y: num6 + num10 + num12});
                    socketPositions.push({ x: num4 + num11, y: num8 + num10 + num12});
                    break;
                case 3:
                    if(Y === 2) {
                        socketPositions.push({ x: num3 + num11, y: num6 + num12});
                        socketPositions.push({ x: num5 + num11, y: num6 + num12});
                        socketPositions.push({ x: num4 + num11, y: num7 + num12});
                        break;
                    }
                    if (Y === 3) {
                        if (X === 1) {
                            socketPositions.push({ x: num3 + num11, y: num6 + num12});
                            socketPositions.push({ x: num3 + num11, y: num7 + num12});
                            socketPositions.push({ x: num3 + num11, y: num8 + num12});
                            break;
                        }
                        socketPositions.push({ x: num4 + num11, y: num6 + num12});
                        socketPositions.push({ x: num4 + num11, y: num7 + num12});
                        socketPositions.push({ x: num4 + num11, y: num8 + num12});
                        break;
                    }
                    if (X === 1) {
                        socketPositions.push({ x: num3 + num11, y: num6 + num10 + num12});
                        socketPositions.push({ x: num3 + num11, y: num7 + num10 + num12});
                        socketPositions.push({ x: num3 + num11, y: num8 + num10 + num12});
                        break;
                    }
                    socketPositions.push({ x: num4 + num11, y: num6 + num10 + num12});
                    socketPositions.push({ x: num4 + num11, y: num7 + num10 + num12});
                    socketPositions.push({ x: num4 + num11, y: num8 + num10 + num12});
                    break;
                case 4:
                    if (Y === 3) {
                        socketPositions.push({ x: num3 + num11, y: num6 + num10 + num12});
                        socketPositions.push({ x: num5 + num11, y: num6 + num10 + num12});
                        socketPositions.push({ x: num3 + num11, y: num7 + num10 + num12});
                        socketPositions.push({ x: num5 + num11, y: num7 + num10 + num12});
                        break;
                    }
                    if (Y === 2) {
                        socketPositions.push({ x: num3 + num11, y: num6 + num12});
                        socketPositions.push({ x: num5 + num11, y: num6 + num12});
                        socketPositions.push({ x: num3 + num11, y: num7 + num12});
                        socketPositions.push({ x: num5 + num11, y: num7 + num12});
                        break;
                    }
                    if(X === 1) {
                        socketPositions.push({ x: num3 + num11, y: num6 + num12});
                        socketPositions.push({ x: num3 + num11, y: num7 + num12});
                        socketPositions.push({ x: num3 + num11, y: num8 + num12});
                        socketPositions.push({ x: num3 + num11, y: num9 + num12});
                        break;
                    }
                    socketPositions.push({ x: num4 + num11, y: num6 + num12});
                    socketPositions.push({ x: num4 + num11, y: num7 + num12});
                    socketPositions.push({ x: num4 + num11, y: num8 + num12});
                    socketPositions.push({ x: num4 + num11, y: num9 + num12});
                    break;
                case 5:
                    if (Y === 3) {
                        socketPositions.push({ x: num3 + num11, y: num6 + num12});
                        socketPositions.push({ x: num5 + num11, y: num6 + num12});
                        socketPositions.push({ x: num4 + num11, y: num7 + num12});
                        socketPositions.push({ x: num3 + num11, y: num8 + num12});
                        socketPositions.push({ x: num5 + num11, y: num8 + num12});
                        break;
                    }
                    socketPositions.push({ x: num3 + num11, y: num6 + num10 + num12});
                    socketPositions.push({ x: num5 + num11, y: num6 + num10 + num12});
                    socketPositions.push({ x: num4 + num11, y: num7 + num10 + num12});
                    socketPositions.push({ x: num3 + num11, y: num8 + num10 + num12});
                    socketPositions.push({ x: num5 + num11, y: num8 + num10 + num12});
                    break;
                case 6:
                    if (Y === 3) {
                        socketPositions.push({ x: num3 + num11, y: num6 + num12});
                        socketPositions.push({ x: num5 + num11, y: num6 + num12});
                        socketPositions.push({ x: num3 + num11, y: num7 + num12});
                        socketPositions.push({ x: num5 + num11, y: num7 + num12});
                        socketPositions.push({ x: num3 + num11, y: num8 + num12});
                        socketPositions.push({ x: num5 + num11, y: num8 + num12});
                        break;
                    }
                    socketPositions.push({ x: num3 + num11, y: num6 + num10 + num12});
                    socketPositions.push({ x: num5 + num11, y: num6 + num10 + num12});
                    socketPositions.push({ x: num3 + num11, y: num7 + num10 + num12});
                    socketPositions.push({ x: num5 + num11, y: num7 + num10 + num12});
                    socketPositions.push({ x: num3 + num11, y: num8 + num10 + num12});
                    socketPositions.push({ x: num5 + num11, y: num8 + num10 + num12});
                    break;
                default:
                    break;
                }
                
                graphics.globalAlpha = 0.3;
                socketPositions.forEach((position) => {
                    graphics.drawImage(
                        this.socket,
                        position.x,
                        position.y
                    );
                });
                graphics.globalAlpha = 1.0;

                for (var i = 0; i < item.sockets.length && socketPositions.length; i++) {
                    if (item.sockets[i] === "gemsocket") continue;
                    var img = new Image();
                    img.src = "assets/gfx/" + item.sockets[i] + ".png";
                    img.onload = (function(pos){
                        return function() {
                            graphics.drawImage(
                                this,  // Socketed item
                                pos.x, // X
                                pos.y  // Y
                            );
                        };
                    })(socketPositions[i]);
                }
            }
            
            if (this.drawCursor) {
                console.log("Drawing cursor");
                graphics.drawImage(itemScreenshot.hand, ((canvas.width + image.width) / 2) - 5, 5 + 5);
            }

            console.log("Drawing text");
            graphics.font = ctx.font;
            graphics.filter = "blur(0.2px)";

            for (var index in strArray1) {
				pos = {
					x: canvas.width / 2,
					y: (index * num2 + Top + num2 - 3.0) // -1 originally
				};
				
				graphics.fillStyle = strArray1[index].color[0];
				
				if(strArray1[index].color.length > 1) {
					leftText = strArray1[index].text.split("$")[0];
					rightText = strArray1[index].text.split("$")[1];
					shift = (ctx.measureText(leftText).width + ctx.measureText(rightText).width) / 2
					graphics.textAlign = "left";
					graphics.fillText(leftText, pos.x - shift, pos.y);
					graphics.fillStyle = strArray1[index].color[1];
					graphics.fillText(strArray1[index].text.split("$")[1], pos.x + ctx.measureText(leftText).width - shift, pos.y);
				} else {
					graphics.textAlign = "center";
					graphics.fillText(strArray1[index].text, pos.x, pos.y);
				}
			}
        }
    },

    sortCanvases: function () {
        var packer = new GrowingPacker();
        var blocks = [];
        var list = $("#itemList");
        var canvas = document.createElement('canvas');
        canvas.width = 0;
        canvas.height = 0;
        list.children().each(function(idx) {
            var padding = parseInt($(this).css("padding-top"));
            blocks.push({item: $(this), w: $(this).width() + padding, h: $(this).height() + padding});
        });
        
        blocks.sort(function(a,b) { return (b.h - a.h); });
        packer.fit(blocks);
        
        canvas.width += packer.root.w;
        canvas.height += packer.root.h;

        var container = canvas.getContext('2d');
        
        for(var n = 0 ; n < blocks.length ; n++) {
            var block = blocks[n];
            if (block.fit) {
                container.drawImage(block.item[0], block.fit.x, block.fit.y);
            } else {
                console.error("Couldn't pack image to canvas (Width Height):", block.w, block.h, "max. allowed size (Width Height):", packer.root.w, packer.root.h);
            }
        }

        $("#itemList").empty();
        $("#itemList").addClass("visible");
        document.getElementById("itemList").append(canvas);
    }
}
