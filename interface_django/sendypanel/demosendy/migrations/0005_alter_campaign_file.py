# Generated by Django 5.1.2 on 2024-12-04 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('demosendy', '0004_campaign_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='campaign_files/'),
        ),
    ]