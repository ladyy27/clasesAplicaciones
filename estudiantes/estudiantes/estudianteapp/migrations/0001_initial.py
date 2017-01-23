# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=100, blank=True)),
                ('apellido', models.CharField(max_length=200, blank=True)),
                ('cedula', models.CharField(max_length=200, blank=True)),
                ('ciudad', models.CharField(max_length=200, blank=True)),
                ('provincia', models.CharField(max_length=200, blank=True)),
            ],
            options={
                'verbose_name_plural': 'Estudiante',
            },
        ),
    ]
