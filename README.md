# ItemScreenshot
Generates a 'screenshot like' image of provided item.<br>

<p>thx @Laztheripper for cleaning my mess and for the good time working on this together</p>
<br>
<p>All items use pregenerated colors from the `/assets/gfx/` folder, some of them don't make sense of course.. we still left them there for reference. There is a little python tool attached in the `/assets/` that we wrote to generate these images.</p>
<p>A slightly different version of that tool can be found here: https://github.com/Fa-b/D2PaletteApply</p>
<br>
<p>Have fun :-).</p>
<br>
# Settings (true/false):<br>
<br>
hideItemLevel<br>
hideRequirements<br>
hideSetCompletion<br>
showItemColor<br>
drawCursor (hidden option 'rnd' for random cursor pos on item)<br>
drawSockets<br>
drawEthereal<br>

# Note
Pushing loads of gfx to your repo might require you to increase the post buffer size to some really high value:<br>
```
git config http.postBuffer 524288000
```