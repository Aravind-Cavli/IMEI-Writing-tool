# Generated by Django 4.1.7 on 2023-09-23 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('C16QS_IMEI_Writter', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='variants',
            name='variant',
            field=models.CharField(default='C16QS-', max_length=20),
        ),
    ]
