FROM zenika/alpine-chrome:with-node

USER root

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN chmod +x /usr/bin/chromium-browser

ENV CHROME_PATH=/usr/bin/chromium-browser

ENTRYPOINT ["/entrypoint.sh"]