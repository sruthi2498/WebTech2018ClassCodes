<?php
	$address = '0.0.0.0';
	$port = 12345;
	/* Create WebSocket:Creates and returns a socket resource, also referred to as an endpoint of communication. A typical network connection is made up of 2 sockets, one performing the role of the client, and another performing the role of the server.*/
	$server = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
	/*The socket_set_option() function sets the option specified by the optname parameter, at the specified protocol level, to the value pointed to by the optval parameter for the socket.*/
	socket_set_option($server, SOL_SOCKET, SO_REUSEADDR, 1);
	/*Binds the name given in address to the socket described by socket. This has to be done before a connection is be established*/
	socket_bind($server, $address, $port);
	/*listen for incoming connections on socket.*/
	socket_listen($server);
	/*this function will accept incoming connections on that socket. Once a successful connection is made, a new socket resource is returned, which may be used for communication.*/
	$client = socket_accept($server);
	// Send WebSocket handshake headers.
	$request = socket_read($client, 5000);
	preg_match('#Sec-WebSocket-Key: (.*)\r\n#', $request, $matches);
	$key = base64_encode(pack(
    'H*',
    sha1($matches[1] . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
	));
	$headers = "HTTP/1.1 101 Switching Protocols\r\n";
	$headers .= "Upgrade: websocket\r\n";
	$headers .= "Connection: Upgrade\r\n";
	$headers .= "Sec-WebSocket-Version: 13\r\n";
	$headers .= "Sec-WebSocket-Accept: $key\r\n\r\n";
	socket_write($client, $headers, strlen($headers));
	while($rcvd=socket_read($client,4096)){
		$data=unmask($rcvd);
		$rev=strrev($data);
		$resp = chr(129) . chr(strlen($rev)) . $rev;
		socket_write($client, $resp, strlen($resp));
		}
	// Send  messages into WebSocket in a loop.
	
	
	function unmask($text) {
	$length = ord($text[1]) & 127;
	if($length == 126) {
		$masks = substr($text, 4, 4);
		$data = substr($text, 8);
	}
	elseif($length == 127) {
		$masks = substr($text, 10, 4);
		$data = substr($text, 14);
	}
	else {
		$masks = substr($text, 2, 4);
		$data = substr($text, 6);
	}
	$text = "";
	for ($i = 0; $i < strlen($data); ++$i) {
		$text .= $data[$i] ^ $masks[$i%4];
	}
	return $text;
}