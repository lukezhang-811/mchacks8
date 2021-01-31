from django.db import models

class Taps(models.Model):
    dataList = models.CharField("DataList", max_length=24)

    def __str__(self):
        return self.dataList