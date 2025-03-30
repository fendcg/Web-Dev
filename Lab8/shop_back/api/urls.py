from django.urls import path
from .views import ProductList, ProductSingle, CategoryList, CategorySingle, ProductsByCategory

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductSingle.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategorySingle.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', ProductsByCategory.as_view(), name='products-by-category'),
]