title: ghost-button
author: Zhong Hong
date: 2018/5/11

1.Target effect
    Now the ghost button is a very common effect on the website. By making the button thinner to improve the beauty of the page, the effect we have to achieve is three pictures, which can be enlarged and rotated 360 degrees when the mouse is suspended. Each icon has a phantom button under each icons. When the mouse is suspended, there will be four sides flying into the mouse. Tooltip and other effects are described below.
2.Realization ideas
    a. Picture section
        First set the width of the whole box, and then set the width of each box with pictures and buttons. The span label introduces the picture in the way of the background picture, setting the rotating magnification effect. Notice the use of transition here. It is set in the original unchanging style.
    b. Button part
        Set the width of the button, the border, the margin and other styles, here pay attention to the box-sizing: border-box; the use of properties, when the setting width, the set margin and so on will hold the original box, and the use of this property, will make the box size is the set of high value, the inner margin and so on on the basis of the inward calculation. And then set the four sides to fly into the effect, each fly into the edge of the span tag set wide and high, the top from the left in the left, the animation effect is from left: - 110%, width:0 to left: - 2, width:100%.

    c. Tooltip part
        Since the button width has been set up, the tooltip added now is best placed outside the three big box labels, set its style to be absolutely positioned and hidden (opacity = 0) and make an inverted triangle with the span tag, and then use the jQuery to complete the following parts to set the data-title attribute for each box, that is to write to t In ooltip, when the mouse is suspended, the content in the data-title is written to the EM tag, the animation that sets its left property and sets the change, that is, the change of the top and opacity values. The effect is completed at this point.