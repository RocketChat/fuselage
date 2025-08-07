FROM zenika/alpine-chrome:with-node

USER root

COPY entrypoint.sh /entrypoint.sh

RUN chmod -R 777 /home/runner/work/fuselage/fuselage/

ENV CHROME_PATH=/usr/bin/chromium-browser

ENTRYPOINT ["/entrypoint.sh"]