from django.shortcuts import render
from maker_cube_app.current_address import current_address

# from django.http import HttpResponse

# Create your views here.
def index(request):
    # return HttpResponse("HELLO WORLD")
    if current_address() == "No Internet Connection":
        ip = current_address()
    else:
        ip = current_address() + ":8080"
    data = {"ip": ip,}
    return render(request, 'cube/index.html', data)

def mobile(request):
    # return HttpResponse("HELLO WORLD")
    if current_address() == "No Internet Connection":
        ip = current_address()
    else:
        ip = current_address() + ":8080"
    data = {"ip": ip,}
    return render(request, 'cube/mobile.html', data)
