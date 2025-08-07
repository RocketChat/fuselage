FROM zenika/alpine-chrome:with-node

USER root

COPY entrypoint.sh /entrypoint.sh

RUN chmod -R 777 /github/home

ENV CHROME_PATH=/usr/bin/chromium-browser

ENTRYPOINT ["/entrypoint.sh"]