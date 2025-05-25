import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentsScreen: React.FC = () => {
  const paymentMethods = [
    {
      id: '1',
      type: 'Bank Transfer',
      icon: 'business-outline' as keyof typeof Ionicons.glyphMap,
      description: 'Transfer to any bank account',
    },
    {
      id: '2',
      type: 'QR Code',
      icon: 'qr-code-outline' as keyof typeof Ionicons.glyphMap,
      description: 'Scan to pay instantly',
    },
    {
      id: '3',
      type: 'Mobile Number',
      icon: 'phone-portrait-outline' as keyof typeof Ionicons.glyphMap,
      description: 'Send money using phone number',
    },
    {
      id: '4',
      type: 'Bill Payment',
      icon: 'receipt-outline' as keyof typeof Ionicons.glyphMap,
      description: 'Pay utilities and bills',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Payments</Text>
          <Text style={styles.headerSubtitle}>Choose your payment method</Text>
        </View>

        <View style={styles.paymentMethodsList}>
          {paymentMethods.map((method) => (
            <TouchableOpacity key={method.id} style={styles.paymentMethodItem}>
              <View style={styles.paymentMethodIcon}>
                <Ionicons name={method.icon} size={24} color="#4CAF50" />
              </View>
              <View style={styles.paymentMethodDetails}>
                <Text style={styles.paymentMethodType}>{method.type}</Text>
                <Text style={styles.paymentMethodDescription}>{method.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E4F7A',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  paymentMethodsList: {
    paddingHorizontal: 20,
  },
  paymentMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentMethodIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  paymentMethodDetails: {
    flex: 1,
  },
  paymentMethodType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E4F7A',
    marginBottom: 4,
  },
  paymentMethodDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default PaymentsScreen;