title: Start with Laravel
date: 2014-08-21 19:11:11
tags: [PHP, Laravel, "Mod Rewrite"]
categories: [计算机那些事, 网站]
---
This is a quick start helloWorld demo of Laravel.
<!-- more -->
### 1. Install Composer
```bash
# Install composer
curl -sS https://getcomposer.org/installer | php

# Move composer to system library folder, so
# that we can use composer as a quick demand
mv composer.phar /usr/local/bin/composer
```

### 2. Install Laravel & Create our HelloWorld Demo
```bash
composer create-project laravel/laravel helloWorld
```

### 3. Change permission of `app/storage` folder
```
chmod -R 777 app/storage
```

### 4. Change vhost to make `public` folder as root directory
```bash
# Open /etc/apache2/sites-available/000-default.conf
# append public to DocumentRoot
# (Note: I already mv content from helloWorld folder to html folder)
DocumentRoot /var/www/html/public
```
Now, we can access the website with `http://YourIPAddress` now.

### 5. Enable mod rewrite
```xml
# Open /etc/apache2/apache2.conf
<Directory /var/www/>
    Options Indexes FollowSymLinks
    AllowOverride all #Change None to all here
    Require all granted
</Directory>
```
### 6. Test for mod rewrite
```
# Add below function to router.php
Route::get('users', function() {
    return 'Users!';
});
```
Now open `http://YourIPAddress/users`, then you can see `Users!` in the web page.

### All Set Now!
