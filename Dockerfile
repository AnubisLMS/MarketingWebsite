FROM node:16-alpine as build

ENV GATSBY_CPU_COUNT=4
ENV GENERATE_SOURCEMAP=false

WORKDIR /opt/app
COPY package.json yarn.lock /opt/app/
RUN set -ex; \
  yarn global add gatsby; \
  yarn install --frozen-lockfile; \
  gatsby telemetry --disable; \
  find / -depth -name '.cache' -exec 'rm' '-rf' '{}' ';'
COPY . /opt/app/
RUN yarn run build

FROM node:16-alpine
WORKDIR /opt/app
RUN yarn global add serve \
  && find / -depth -name '.cache' -exec 'rm' '-rf' '{}' ';'
COPY --from=0 /opt/app/public /opt/app/public
USER nobody
CMD serve -s public -l 3000