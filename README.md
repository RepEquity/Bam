### Boom Wordpress

A Starter theme for Wordpress

Technologies: Gulp, SASS, Susy, Breakpoint

1. Download Wordpress https://wordpress.org/download/

2. Rename your new wordpress folder
    - move this Bam repository into wp-content/themes/

3. /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf 

<!-- <VirtualHost *:80>
   DocumentRoot "/users/tmontgomery/development/sites/Bam"
   ServerName bam.dev
       <Directory /users/tmontgomery/development/sites/Bam >
           Options Indexes FollowSymLinks MultiViews
           AllowOverride All
           Order allow,deny
           allow from all
       </Directory>
</VirtualHost> -->

4. /etc/hosts
  add:
  127.0.0.1 bam.dev
5. Go to phpMyAdmin
  - create new db for Bam
  -

6. Go to browser and input your new local server name- EX. bam.dev 

7. Go through WP setup
    Database Name = what you called your DB in phpMyAdmin
    username = root
    password = root
    database = localhost
    table prefix = wp_

8. Login to wp-admin
  -Go to Appearance -> Themes and change the them to BAM

9. Go to plugins and search for and download 'Advanced Custom Fields'

10. Bundle Install

11. Change the BrowserSync environment settings to match your local environment. 

12. NPM install

13. Run 'Gulp'