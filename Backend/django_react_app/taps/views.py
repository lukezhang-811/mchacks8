from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Taps
from .serializers import *

@api_view(['GET', 'POST'])
def taps_list(request):
    if request.method == 'GET':
        data = Taps.objects.all()

        serializer = TapsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TapsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def taps_detail(request, dataList):
    try:
        taps = Taps.objects.get(dataList=dataList)
    except Taps.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = TapsSerializer(taps, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            mapped_tap_times= serializer
            fig = plt.gcf()
            time_list = []
            numTaps_list = []
            count=0
            i=0
            j=0
            last=0

            # make two list for time and stress level
            for x in mapped_tap_times:
             i+=1
             if (x-last) > 60:
              j+=1
              time_list.append(j)
              numTaps_list.append(count)
              count=0
              last+=60
             count+=1
             if i == len(tap_times):
                  break



            # graphing
            x1 = time_list
            y1 = numTaps_list
            plt.plot(x1, y1, label = "Activity")

            print(x1)
            print(y1)

            # naming
            plt.xlabel('Time')
            plt.ylabel('Stress level')
            plt.title('Your session')
                #convert graph into string buffer and then we convert 64 bit code into image
            buf = io.BytesIO()
            fig.savefig(buf,format='png')
            buf.seek(0)
            string = base64.b64encode(buf.read())
            uri =  urllib.parse.quote(string)
            return render(request,'home.html',{'data':uri})
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        taps.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)