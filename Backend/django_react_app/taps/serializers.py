from rest_framework import serializers
from .models import Taps

class TapsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Taps
        fields = ('dataList')
