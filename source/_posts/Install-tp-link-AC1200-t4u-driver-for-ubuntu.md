---
title: 'Note: Install tp-link AC1200 t4u driver for ubuntu'
date: 2017-12-19 19:14:09
tags: [Ubuntu, WIFI, MINT]
categories: [编程人生]
---
Bought a TP-link AC1200 wifi adapter long before and not used it so far. Yesterday, I find it again when I collected my old stuff.
Since my old Dell laptop does not support 5G channel, and its built-in wifi adapter sucks, why not have a try!!!
<!-- more -->

Searched and tried a lot, and finally, I find the `correct one`(which works for me).
The link is: https://ubuntuforums.org/showthread.php?t=2340769

```bash
# Uninstall rtl8812au-dkms if you installed it as other solutions told you
sudo apt-get purge rtl8812au-dkms
# Install the necessary software
sudo apt-get update
sudo apt-get install git dkms

git clone  https://github.com/ptpt52/rtl8812au.git
cd rtl8812au
sudo make -f Makefile.dkms install
sudo modprobe rtl8812au
# Now the hardware should work for you
```
