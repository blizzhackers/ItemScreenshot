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

var ItemScreenshot = {
    // Settings
    
	fastMode			: false,	// Draw text using webfont (less pwetty but faster ofc)
    hideItemLevel       : true,		// Hide the item level
    hideRequirements    : false,	// Hide the red text when you can't wear an item
    hideSetCompletion   : false,	// Hide the set completion
    showItemColor       : false,	// Show the item color at the end of the desc
    drawCursor          : "rnd",	// Draw the cursor ("rnd" is random cursor position)
    drawSockets         : true,		// Draw sockets and socketed items
    drawEthereal        : true,		// Draw ethereal item gfx

    // ------ No touchy ------

    font:   (function () { WebFont.load({custom: {families: ['AvQuest']}}); return "AvQuest";   }).call(),
    
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

        for (i = out.length - 1; i >= 0; i -= 1) {
            if (out[i].text.indexOf("Sell value: ") > -1) {
                out.splice(i, 1);
    
                i += 1;
            } else {
                if (i === 0 && this.hideItemLevel && out[i].text.indexOf(" (") > -1) {
                    out[i].text = out[i].text.split(" (")[0];
                }

                out[i].text = out[i].text.replace(/^((xffc)|ÿc)/, "");
				out[i].text = out[i].text.replace(/[0-9]((xffc)|ÿc)/g, "");
                
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

				out[i].text = out[i].text.substring(1);
				
				// second color in same row will always be blue/'magic'
                if (out[i].text.match(/((xff)|ÿc)/))
                    out[i].color.push(3);
            }

            out[i].text = out[i].text.replace(/((xffc)|ÿc)([0-9!"+<;.*])/g, "\$");
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
        var iStart = Date.now();
        var strArray1 = this.cleanDecription(item.description);
        var num1 = 0;
        var tmp = document.createElement('canvas');
        var ctx = tmp.getContext('2d');
        ctx.font = "bold 1.5em AvQuest";
		
        for (var line in strArray1) {
            let size = this.fastMode ? ctx.measureText(strArray1[line].text) : Font16.measureText(strArray1[line].text);
            if (size.width > num1) {
                num1 = size.width;
            }
        }

        if (this.showItemColor && item.itemColor !== -1) {
            strArray1.push({ text: "", color: [5]});
            strArray1.push({ text: this.colorStrings[item.itemColor], color: [5]});
        }
		
		var test = new Item(item);
		
        if (num1 < 100)
            num1 = 100;
            
        num2 = 16;

        item.onload = () => {
            var X, Y, Top, Left = 0
        
            if (item.X === 1) {
                Top = 32;
            } else if (item.X === 2) {
                Top = 61;
            } else if (item.X === 3) {
                Top = 90;
            } else {
                Top = 119;
            }
            
            if (item.Y === 1) {
                Left = 213; // 212 originally
            } else {
                Left = 226;
            }
            
            var canvas = document.createElement('canvas');
            canvas.width = num1 + 14;
            canvas.height = num2 * strArray1.length + Top + 1;
            document.getElementById("itemList").append(canvas);
            var graphics = canvas.getContext('2d');
            
            //console.log("Setting black canvas")
            graphics.fillStyle = "rgba(10, 10, 10, 1)";
            graphics.fillRect(0, 0, canvas.width, canvas.height);
            
            //console.log("Drawing background");
            graphics.drawImage(this.bgnd[item.Y-1], canvas.width / 2 - Left, -9); // top -10 originally

            //console.log("Drawing item-active background");
            if (this.drawCursor) {
                graphics.fillStyle = "rgba(0, 128, 0, 0.1)";
            } else {
                graphics.fillStyle = "rgba(0, 0, 255, 0.1)";
            }
            graphics.fillRect((canvas.width - item.width) / 2, 5, item.width, item.height);
            
            //console.log("Drawing item gfx")
			item.drawItem(graphics, Math.round((canvas.width - item.width) / 2), 5);
            

            //console.log("Drawing text");
            
            if (this.fastMode) {
				graphics.font = ctx.font;
				graphics.filter = "blur(0.2px)";
                
				for (var index in strArray1) {
                    let pos = {
                        x: canvas.width / 2,
                        y: (index * num2 + Top + num2 - 3) // -1 originally
                    };
                    
                    graphics.fillStyle = this.textColorMap[strArray1[index].color[0]];
                    
                    if(strArray1[index].color.length > 1) {
                        leftText = strArray1[index].text.split("$")[0];
                        rightText = strArray1[index].text.split("$")[1];
                        shift = (ctx.measureText(leftText).width + ctx.measureText(rightText).width) / 2;
                        graphics.textAlign = "left";
                        graphics.fillText(leftText, Math.round(pos.x - shift), Math.round(pos.y));
                        graphics.fillStyle = this.textColorMap[strArray1[index].color[1]];
                        graphics.fillText(strArray1[index].text.split("$")[1], Math.round(pos.x + ctx.measureText(leftText).width - shift), Math.round(pos.y));
                    } else {
                        graphics.textAlign = "center";
                        graphics.fillText(strArray1[index].text, Math.round(pos.x), Math.round(pos.y));
                    }
                }
                graphics.filter = "None";
            } else {
                var index = 0;
                strArray1.forEach((line) => {
                    let pos = {
                        x: canvas.width / 2,
                        y: (index * num2 + Top - 1)
                    };
                    
                    shift = Font16.measureText(line.text).width / 2;
                    
                    if(line.color.length > 1) {
                        leftText = line.text.split("$")[0];
                        rightText = line.text.split("$")[1];
                        // Apply back half the wrong measured kerning for char '$' width 10 / 2 = 5
                        Font16.drawText(graphics, pos.x - shift + 5, pos.y, leftText, line.color[0]);
                        Font16.drawText(graphics, pos.x - shift + 5 + Font16.measureText(leftText).width, pos.y, rightText, line.color[1]);
                    } else {
                        Font16.drawText(graphics, pos.x - shift, pos.y, line.text, line.color[0]);
                    }
                    index += 1;
                });
            }
            
            if (this.drawCursor) {
                //console.log("Drawing cursor");
                function rnd(min, max) {
                  return Math.floor(Math.random() * (max - min + 1) ) + min;
                }
                graphics.drawImage(this.hand, (canvas.width + item.width) / 2 - (this.drawCursor=="rnd"?rnd(2,15):5), 5 + (this.drawCursor=="rnd"?rnd(2,15):5));
            }

			console.log("Creating item screenshot took " + (Date.now() - iStart) + "ms");
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
           ItemScreenshot.drawScreenshot(new Item(items[idx]));
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
            document.getElementById("itemList").append(canvas);  


            var can = document.createElement('canvas');
            can.width = 0;
            can.height = 0;
            can.width = Object.keys(BaseItem.socket).length * 28;
            can.height = 28;
            var ctx = can.getContext('2d');
            let i = 0;
            Object.keys(BaseItem.socket).forEach(socket => {
				ctx.drawImage(BaseItem.socket[socket], 28 * i, 0);
				i++;
            });
            document.getElementById("itemList").append(can); 
            
        }, 200);
    }
}