from django.urls import path
from .views import (
    CompanyListAPIView,
    CompanyRetrieveAPIView,
    CompanyVacanciesAPIView,
    VacancyListAPIView,
    VacancyRetrieveAPIView,
    TopTenVacanciesAPIView,
)

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view(), name='companies_list'),
    path('companies/<int:id>/', CompanyRetrieveAPIView.as_view(), name='company_detail'),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view(), name='company_vacancies'),
    path('vacancies/', VacancyListAPIView.as_view(), name='vacancies_list'),
    path('vacancies/<int:id>/', VacancyRetrieveAPIView.as_view(), name='vacancy_detail'),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view(), name='top_ten_vacancies'),
]
