FROM zenika/alpine-chrome:with-node

USER root

COPY entrypoint.sh /entrypoint.sh

ENV CHROME_PATH=/usr/bin/chromium-browser

ENTRYPOINT ["/entrypoint.sh"]