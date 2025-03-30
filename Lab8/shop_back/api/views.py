from django.shortcuts import render
from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


# Create your views here.
class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductSingle(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategorySingle(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductsByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)