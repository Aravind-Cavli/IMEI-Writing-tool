from django.db import models

# Create your models here.
class variants(models.Model):
    def __str__(self):
        return self.variant
    variant=models.CharField(max_length=20,default='C16QS-')
    
class hardware(models.Model):
    def __str__(self):
        return self.hw
    hw=models.CharField(max_length=40,default='C16QS')


class Socket_Mapping(models.Model):
    def __str__(self):
        return self.socket_id   
    sn=models.IntegerField()
    socket_id=models.CharField( max_length=15,default='SOCKET')
    comport=models.CharField(max_length=6,default='COM')

