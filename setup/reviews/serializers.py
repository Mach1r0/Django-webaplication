from django.contrib.auth.models import User, Group
from rest_framework import serializers
from reviews.models import Review, Business, Category

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Group 
        fields = ['url', 'name']

class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Review
        fields = '__all__'

class BusinessSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Business
        depth = 1
        fields = [
            'url',
            'name',
            'slug',
            'description',
            'price_range',
            'street_address',
            'city',
            'region',
            'postal_code',
            'country',
            'website',
            'phone',
            'hours',
            'reviews',
        ]
class CategorySerializer(serializers.HyperlinkedModelSerializer):
    business = BusinessSerializer(many=True, read_only=True)
    business_ids = serializers.PrimaryKeyRelatedField(many=True, write_only=True, queryset=Business.objects.all(), source='business')

    class Meta: 
        model = Category 
        depth = 1
        fields =  [
            'url',
            'name',
            'slug', 
            'ordinal', 
            'business',
            'business_ids'
        ] 

    def create(self, validated_data):
        business = validated_data.pop('business')
        category = Category.objects.create(**validated_data)
        category.business.set(business)
        return category