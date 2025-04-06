from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# /api/companies - список всех компаний
class CompanyListAPIView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

# /api/companies/<int:id>/ - получение одной компании
class CompanyRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

# /api/companies/<int:id>/vacancies/ - список вакансий по компании
class CompanyVacanciesAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

# /api/vacancies - список всех вакансий
class VacancyListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

# /api/vacancies/<int:id>/ - получение одной вакансии
class VacancyRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

# /api/vacancies/top_ten/ - топ 10 вакансий с наибольшей зарплатой
class TopTenVacanciesAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]
