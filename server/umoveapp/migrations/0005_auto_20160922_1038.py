# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-22 15:38
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('umoveapp', '0004_remove_studio_address2'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studio',
            old_name='address1',
            new_name='address',
        ),
    ]
