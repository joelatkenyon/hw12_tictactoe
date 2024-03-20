# Makefile for web deployment
# Must first:
# sudo mkdir /var/www/html/hw12_javascript_two/tictactoe
# sudo chown ubuntu /var/www/html/hw12_javascript_two/tictactoe

all: PutHTML

PutHTML:
	cp tictactoe.html /var/www/html/hw12_javascript_two/tictactoe/
	cp tictactoe.js /var/www/html/hw12_javascript_two/tictactoe/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/hw12_javascript_two/tictactoe/
