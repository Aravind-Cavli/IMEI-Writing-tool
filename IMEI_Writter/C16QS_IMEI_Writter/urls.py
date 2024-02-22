from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.variant_rendering,name='variant_list'),
    path('interface/',views.interface,name='interface'),
    path('socket_mapping/',views.socket_mapping,name='socket_mapping'),
    path('admin_button/', views.admin_button, name='admin_button'),
    
    #path('execute_function/', views.my_python_function, name='execute_function'),
    
    path('start-test', views.process_data, name='start-test'),
    path('sse/', views.sse, name='sse_endpoint'),
]