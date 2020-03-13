/*!
 * itemScreenshot Library v1.0
 * https://github.com/Fa-b/ItemScreenshot
 * 
 * A pure js solution to generate Diablo II item tooltips from json objects
 * Obj format is the standard kolbot mulelogged item
 * 
 * Authors: Fa-b, laztheripper
 * Date: 2020/03/11
 */

var itemScreenshot = {
    // Settings
    
    hideItemLevel       : true,
    hideRequirements    : false,
    hideSetCompletion   : false,
    showItemColor       : false,
    drawCursor          : "rnd",
    drawSockets         : true,
    drawEthereal        : true,

    // ------ No touchy ------

    font:   (function () { WebFont.load({custom: {families: ['AvQuest']}}); return "AvQuest";   }).call(),
    font16: [
        Font16.loadFont(0)
    ],
    
    hand:   (function () { let img = new Image(); img.src = "assets/hand.png";      return img; }).call(),
    socket: (function () { let img = new Image(); img.src = "assets/gemsocket.png"; return img; }).call(),

    bgnd: [
        (function () { let img = new Image(); img.src = "assets/bgnd1.png"; return img; }).call(),
        (function () { let img = new Image(); img.src = "assets/bgnd2.png"; return img; }).call(),
        (function () { let img = new Image(); img.src = "assets/bgnd3.png"; return img; }).call(),
        (function () { let img = new Image(); img.src = "assets/bgnd4.png"; return img; }).call()
    ],

    textColorMap: {
        0: "#C4C4C4",      // WHITE
        1: "#B04434",      // RED
        2: "#18FC00",      // SET
        3: "#787CE7",      // MAGIC
        4: "#948064",      // UNIQUE
        5: "#505050",      // DARK GRAY
        6: "#000000",      // BLACK (UNUSED)
        7: "#AC9C64",      // OCHER (UNUSED)
        8: "#D08420",      // CRAFT
        9: "#D8B864",      // RARE
        10: "#186408",     // DARK GREEN (UNUSED)
        11: "#A420FC",     // PURPLE (UNUSED)
        12: "#287C14"      // GREEN (UNUSED)
    },

    colorStrings: [
        "Unknown Color",//0
        "Black",		//1
        "Unknown Color",//2
        "Black",		//3
        "Light Blue", 	//4
        "Dark Blue",	//5
        "Crystal Blue",	//6
        "Light Red",	//7
        "Dark Red",		//8
        "Crystal Red",	//9
        "Light Green",	//10
        "Dark Green",	//11
        "Crystal Green",//12
        "Light Yellow",	//13
        "Dark Yellow",	//14
        "Light Gold",	//15
        "Dark Gold",	//16
        "light Purple",	//17
        "Dark Purple",	//18
        "Orange",		//19
        "White"			//20
    ],

    getItemDesc: function (desc) {
        var i, out = [], setCompletionInd,
            stringColor = 0;
    
        if (!desc) {
            return out;
        }

        var lines = desc.split("\n");
        
        for (var line in lines) {
            out.push({ text: lines[line], color: [0] });
        }
    
        // Lines are normally in reverse. Add color tags if needed and reverse order.
        for (i = out.length - 1; i >= 0; i -= 1) {
            if (out[i].text.indexOf("Sell value: ") > -1) { // Remove sell value
                out.splice(i, 1);
    
                i += 1;
            } else {
                if (i === 0 && this.hideItemLevel && out[i].text.indexOf(" (") > -1) {
                    out[i].text = out[i].text.split(" (")[0];
                }

                // Remove all buggy color codes first ..
                out[i].text = out[i].text.replace(/^((xff)|ÿc)/, "");
				out[i].text = out[i].text.replace(/[0-9]((xff)|ÿc)/g, "");
                
                // Check if one of the requirements is not met or if we decided to hide them
                if (this.hideRequirements && out[i].text.match(/^1/) &&
                    (out[i].text.match(/(strength:)/i) ||
                    out[i].text.match(/(dexterity:)/i) ||
                    out[i].text.match(/(level:)/i) ||
                    out[i].text.match(/(only\))$/i)) ){
                    // Clear red colors if necessary
                    out[i].color[0] = 0;
                } else {
                    // .. Otherwise get the real color
                    out[i].color[0] = parseInt(out[i].text[0]);
                }

                if (i > 3 && out[i].color[0] === 4) {
                    setCompletionInd = i;
                }
                
                // Remove colorcode from desc
				out[i].text = out[i].text.substring(1);
				
				// second color in same row will always be blue/'magic'
                if (out[i].text.match(/((xff)|ÿc)/))
                    out[i].color.push(3);
            }
    
			// using '$' as delimiter for inline color change here..
            out[i].text = out[i].text.replace(/((xff)|ÿc)([0-9!"+<;.*])/g, "\$");
            out[i].text = out[i].text.replace(/\\/g, "");
        }

        if (this.hideSetCompletion && setCompletionInd) {
            out = out.slice(0, setCompletionInd);
        }
        
        return out;
    },

    cleanDecription: function (description) {
        return this.getItemDesc(description.toString().split("$")[0]);
    },

    drawScreenshot: function (item) {
        var strArray1 = this.cleanDecription(item.description);
        var num1 = 0;
        var tmp = document.createElement('canvas');
        var ctx = tmp.getContext('2d');
        ctx.font = "bold 1.5em AvQuest";
		
        for (var line in strArray1) {
            let size = Font16.measureText(strArray1[line].text);//ctx.measureText(strArray1[line].text);
            if (size.width > num1) {
                num1 = size.width;
            }
        }

        if (this.showItemColor && item.itemColor !== -1) {
            strArray1.push({ text: "", color: ["#505050"]});
            strArray1.push({ text: this.colorStrings[item.itemColor], color: [5]});
        }
        
        if (num1 < 100)
            num1 = 100;
            
        num2 = 16;
        
        if (item.itemColor === -1) {
            item.itemColor = 21;
        }

        var image = new Image();
        image.src = "assets/gfx/" + item.image + "/" + item.itemColor + ".png";
        
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
            graphics.drawImage(image, Math.round((canvas.width - image.width) / 2), 5);
            graphics.globalAlpha = 1.0;
            
            if (this.drawSockets) {
                let num3 = Math.round((canvas.width - image.width) / 2);
                let num4 = num3 + 14;
                let num5 = num4 + 14;
                let num6 = 5;
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

                for (var i = 0; i < item.sockets.length && socketPositions.length; i++) {
                    graphics.globalAlpha = 0.3;
                    graphics.drawImage(
                        this.socket,
                        socketPositions[i].x - 2,
                        socketPositions[i].y + 1
                    );
                    graphics.globalAlpha = 1.0;

                    if (item.sockets[i] === "gemsocket") continue;
                    var img = new Image();
                    img.src = "assets/gfx/" + item.sockets[i] + "/21.png";
                    img.onload = (function(pos) {
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

            console.log("Drawing text");
            graphics.font = ctx.font;
            graphics.filter = "blur(0.2px)";

			var index = 0;
            strArray1.forEach((line) => {
				let pos = {
					x: Math.round(canvas.width / 2),
					y: (index * num2 + Top - 1.0) // -1 originally
				};
				
                shift = Font16.measureText(line.text).width / 2
				
                if(line.color.length > 1) {
					leftText = line.text.split("$")[0];
					rightText = line.text.split("$")[1];
					// Apply back half the wrong measured kerning for char '$' width 10 / 2 = 5
                    Font16.drawText(graphics, pos.x - shift + 5, pos.y, leftText, line.color[0]);
                    Font16.drawText(graphics, pos.x - shift + 5 + Font16.measureText(leftText).width, pos.y, rightText, line.color[1]);
				} else {
					Font16.drawText(graphics, pos.x - shift, pos.y, line.text, line.color[0]);
				}
                
				/* if(line.color.length > 1) {
					leftText = line.text.split("$")[0];
					rightText = line.text.split("$")[1];
					graphics.textAlign = "left";
					graphics.fillText(leftText, pos.x - shift, pos.y);
					graphics.fillStyle = this.textColorMap[line.color[1]];
					graphics.fillText(line.text.split("$")[1], pos.x + ctx.measureText(leftText).width - shift, pos.y);
				} else {
					graphics.textAlign = "center";
					graphics.fillText(line.text, pos.x, pos.y);
				} */
				index += 1;
                
			});
            
            if (this.drawCursor) {
                console.log("Drawing cursor");
                function rnd(min, max) {
                  return Math.floor(Math.random() * (max - min + 1) ) + min;
                }
                graphics.drawImage(itemScreenshot.hand, (canvas.width + image.width) / 2 - (this.drawCursor=="rnd"?rnd(2,15):5), 5 + (this.drawCursor=="rnd"?rnd(2,15):5));
            }
        }
    },

    drawCompilation: function (items) {
        var packer = new GrowingPacker();
        var blocks = [];
        var list = $("#itemList");
        var canvas = document.createElement('canvas');
        canvas.width = 0;
        canvas.height = 0;
        
        for (var idx in items) {
            // Todo: add load callback
            itemScreenshot.drawScreenshot(items[idx]);
        }
        
        // Todo: remove timeout
        setTimeout(function() {
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
        }, 1000);
        
    }
}