from django.shortcuts import render
from maker_cube_app.current_address import current_address
# from django.http import HttpResponse

# Create your views here.
def index(request):
    # return HttpResponse("HELLO WORLD")
    ip = {"ip": current_address(),}
    return render(request, 'cube/index.html', ip)

def mobile(request):
    ip = {"ip": current_address(),}
    return render(request, 'cube/mobile_index.html', ip)
