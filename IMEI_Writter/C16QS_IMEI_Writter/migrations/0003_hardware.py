# Generated by Django 4.1.7 on 2023-09-23 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('C16QS_IMEI_Writter', '0002_alter_variants_variant'),
    ]

    operations = [
        migrations.CreateModel(
            name='hardware',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hw', models.CharField(default='C16QS', max_length=40)),
            ],
        ),
    ]
