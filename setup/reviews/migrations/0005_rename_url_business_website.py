# Generated by Django 5.0.2 on 2024-03-01 01:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0004_business_slug'),
    ]

    operations = [
        migrations.RenameField(
            model_name='business',
            old_name='url',
            new_name='website',
        ),
    ]
