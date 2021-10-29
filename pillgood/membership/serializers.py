from rest_framework import serializers

from .models import Membership, Pay


class MembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membership
        fields = ['membership_id', 'number', 'period', 'price', 'type', 'status']


class PaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pay
        fields = ['pay_id', 'email', 'pay_type', 'remain', 'pay_date', 'end_date', 'membership_id', 'status']
