title: Image Manipulation [OpenGL]
date: 2013-11-29 18:07:41
tags:
  - Computer Graphics
  - OpenGL
categories:
  - 计算机那些事
  - 图像处理
---

### Finding out what version of OpenGL your graphics card support: [GLinfo2.zip](https://dn-myblog.qbox.me/demo/ComputerGraphics/GLinfo2.zip)
The very first thing you need to do is determine if your video card can support GPU programming. Specifically, you are looking to see if your graphic card supports OpenGL version **4.1** or later.

[>>See the Source Code<<](https://github.com/zhouhao/CS543-Computer-Graphics-Course-Project/tree/master/HW5)

[>>Download the Executive program<<](https://dn-myblog.qbox.me/demo/ComputerGraphics/Image_Manipulation.zip)
<!-- more -->
### How my program works(Keyboard events are case-insensitive):
```
Key 'O': Display original picture (usain_bolt.bmp -- colorful without transformation)
Key 'L': Display picture with Luminance effect (gray scale)
Key 'N': Display image negative
Key 'D': Display image with edge detection effect [Two versions: one is done in color, the other in luminance]
Key 'E': Display image with embossing effect
Key 'T': Display image with Toon rendering
Key 'W': Display image with Twirl Transformation
Key 'P': Display image with Ripple Transformation
Key 'S': Display image with Spherical Transformation
```
### Attention for keyboar issues 'D':
1). Edge Detection in color:       If the previous keyboard event is 'O', or no previous keyboard event, then when you press 'D' or 'd', it will trigger edge detection in color

2). Edge Detection in luminance:   Otherwise, it will trigger edge detection in luminance

### If you have any question, you can contact me: <a href="mailto:royhzhou@gmail.com">royhzhou@gmail.com</a>

### Screen Shots:
![keyboard 'l' event](https://dn-myblog.qbox.me/img/blog/OpenGL/hw5/2.PNG "Luminance effect")
![keyboard 'n' event](https://dn-myblog.qbox.me/img/blog/OpenGL/hw5/3.PNG "negative effect")
![keyboard 'd' event](https://dn-myblog.qbox.me/img/blog/OpenGL/hw5/4.PNG "edge detection effect")
![keyboard 'e' event](https://dn-myblog.qbox.me/img/blog/OpenGL/hw5/5.PNG "embossing effect")
![keyboard 't' event](https://dn-myblog.qbox.me/img/blog/OpenGL/hw5/6.PNG "Toon rendering")
![keyboard 'w' event](https://dn-myblog.qbox.me/img/blog/OpenGL/hw5/7.PNG "Twirl Transformation")
![keyboard 'p' event](https://dn-myblog.qbox.me/img/blog/OpenGL/hw5/8.PNG "Ripple Transformation")
![keyboard 's' event](https://dn-myblog.qbox.me/img/blog/OpenGL/hw5/9.PNG "Spherical Transformation")
