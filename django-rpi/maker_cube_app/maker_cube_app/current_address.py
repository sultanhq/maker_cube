def current_address():
    import socket
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("gmail.com",80))
        return(s.getsockname()[0])
    except socket.error:
        return"No Internet Connection"
