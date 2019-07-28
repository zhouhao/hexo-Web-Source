title: "Note: why SVN is so slow to connect to server"
date: 2014-12-05 17:33:24
tags: [SVN]
categories: [计算机那些事, 普通]
---
It happens from one month ago after I changed my windows domain password(Damn windows forced me to do that). Then every time when I want to commit to server, I need to input my password(SVN won't save it for me), what's more, SVN always needs more than 3 minutes to connect with server at background.
<!-- more -->
Today, they changed SVN server(but the same IP is kept), however, it is still very slow to commit.

After finishing my task, I googled a lot, then find a very easy solution: http://stackoverflow.com/questions/5048718/tortoisesvn-not-saving-authentication-details

```bash 
# AppData maybe a hidden folder in windows
Open "C:\Users\${username}\AppData\Roaming\Subversion", then delete "auth" folder. All set now!!!
```

As Jocelyn or Keith Smiley said: `Next time I logged in it was created anew and my password was properly saved.`
