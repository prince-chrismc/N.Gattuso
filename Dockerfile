FROM ubuntu:16.04 as build-stage

WORKDIR /app
COPY ./ /app/

FROM nginx:1.15

COPY --from=build-stage /app/index.html /usr/share/nginx/html
COPY --from=build-stage /app/robots.txt /usr/share/nginx/html
COPY --from=build-stage /app/google* /usr/share/nginx/html
COPY --from=build-stage /app/CNAME /usr/share/nginx/html

COPY --from=build-stage /app/assets/ /usr/share/nginx/html/assets/
COPY --from=build-stage /app/en/ /usr/share/nginx/html/en/
COPY --from=build-stage /app/fr/ /usr/share/nginx/html/fr/
COPY --from=build-stage /app/images /usr/share/nginx/html/images/

