run_api:
	@python run_api.py 

start: docker-compose.yml
	docker-compose up -d
	@make check_mysql_up
	docker ps --all --format "{{.ID}}\t{{.Names}}\t{{.Status}}"

check_mysql_up: check_mysql_sock
	@mysqladmin ping -h localhost -u root 2> /dev/null || \
			while [ $$? -ne 0 ]; \
			do \
				echo "Waiting mysql server ..."; \
				sleep 3; \
				make check_mysql_up; \
			done

check_mysql_sock:
	@if [ ! -S /tmp/mysql.sock ]; then \
			echo "Socat ..."; \
			socat UNIX-LISTEN:/tmp/mysql.sock,fork,unlink-early TCP:127.0.0.1:3306 > /dev/null 2>&1 & \
		fi
