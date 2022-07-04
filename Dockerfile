FROM debian

RUN apt update
RUN apt install -y curl
RUN curl https://raw.githubusercontent.com/leanprover/elan/master/elan-init.sh -sSf | sh -s -- -y
RUN /root/.elan/bin/elan default leanprover/lean4:stable
RUN find . | grep lean
