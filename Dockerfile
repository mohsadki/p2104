# see https://github.com/cmaessen/docker-php-sendmail for more information

FROM php:7.4.0-fpm

RUN apt-get update && apt-get install -q -y msmtp mailutils && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install mysqli sysvsem

RUN pecl install xdebug-3.1.0 \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "[XDebug]" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_log=/tmp/xdebug.log" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=on" >> /usr/local/etc/php/conf.d/xdebug.ini

RUN echo "hostname=localhost.localdomain" > /etc/msmtprc \
    && echo "root=root@localhost" >> /etc/msmtprc \
    && echo "mailhub=maildev" >> /etc/msmtprc \
    && echo "sendmail_path=sendmail -i -t" >> /usr/local/etc/php/conf.d/php-sendmail.ini

RUN echo "[Date]" >> /usr/local/etc/php/conf.d/php-sendmail.ini \
    && echo "date.timezone = Europe/Amsterdam" >> /usr/local/etc/php/conf.d/php-sendmail.ini

RUN echo "localhost localhost.localdomain" >> /etc/hosts