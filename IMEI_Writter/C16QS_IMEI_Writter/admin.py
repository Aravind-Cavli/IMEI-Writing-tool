from django.contrib import admin
from . models import variants,hardware,Socket_Mapping
# Register your models here.

admin.site.register(variants)
admin.site.register(hardware)
admin.site.register(Socket_Mapping)