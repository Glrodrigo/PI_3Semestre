# Generated by Django 4.1.1 on 2022-11-28 05:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='API',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_solo', models.CharField(max_length=50)),
                ('cor', models.CharField(max_length=20)),
                ('umidade', models.IntegerField()),
                ('regiao', models.CharField(max_length=20)),
                ('producao', models.CharField(max_length=20)),
                ('imagem', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Produtos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.CharField(max_length=100)),
                ('quantidade', models.IntegerField()),
                ('valor', models.IntegerField()),
                ('vencimento', models.DateField()),
            ],
        ),
    ]
