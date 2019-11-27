FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y software-properties-common vim
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update

RUN apt-get install -y libmysqlclient-dev

RUN apt-get install -y build-essential
RUN apt-get install -y python3.6
RUN apt-get install -y python3.6-dev
RUN apt-get install -y python3-pip
RUN apt-get install -y python3.6-venv

RUN apt-get install -y git
RUN apt-get install -y telnet

# update pip
# RUN python3.6 -m pip install pip --upgrade
# RUN python3.6 -m pip install wheel
#
# ADD . /api
#
# WORKDIR /api
# RUN export LC_CTYPE=UTF-8
# RUN pip install -r scripts/docker/requirements/requirements_test.txt
# RUN pip install -r scripts/docker/requirements/requirements_api.txt
#
