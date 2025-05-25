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

const CreditScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Credit</Text>
          <Text style={styles.headerSubtitle}>Manage your credit options</Text>
        </View>

        <View style={styles.creditCard}>
          <View style={styles.creditCardHeader}>
            <Text style={styles.creditCardTitle}>Credit Limit</Text>
            <Ionicons name="card" size={24} color="#4CAF50" />
          </View>
          <Text style={styles.creditAmount}>S$ 5,000.00</Text>
          <Text style={styles.availableCredit}>Available: S$ 4,250.00</Text>
          
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '15%' }]} />
          </View>
          <Text style={styles.usedCredit}>Used: S$ 750.00 (15%)</Text>
        </View>

        <View style={styles.creditOptions}>
          <TouchableOpacity style={styles.creditOption}>
            <View style={styles.creditOptionIcon}>
              <Ionicons name="trending-up" size={24} color="#2196F3" />
            </View>
            <View style={styles.creditOptionDetails}>
              <Text style={styles.creditOptionTitle}>Increase Credit Limit</Text>
              <Text style={styles.creditOptionDescription}>Request a higher credit limit</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.creditOption}>
            <View style={styles.creditOptionIcon}>
              <Ionicons name="calendar" size={24} color="#FF9800" />
            </View>
            <View style={styles.creditOptionDetails}>
              <Text style={styles.creditOptionTitle}>Payment Schedule</Text>
              <Text style={styles.creditOptionDescription}>View upcoming payments</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.creditOption}>
            <View style={styles.creditOptionIcon}>
              <Ionicons name="document-text" size={24} color="#9C27B0" />
            </View>
            <View style={styles.creditOptionDetails}>
              <Text style={styles.creditOptionTitle}>Credit Statement</Text>
              <Text style={styles.creditOptionDescription}>Download monthly statements</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>
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
  creditCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  creditCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  creditCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E4F7A',
  },
  creditAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E4F7A',
    marginBottom: 8,
  },
  availableCredit: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF9800',
    borderRadius: 4,
  },
  usedCredit: {
    fontSize: 14,
    color: '#666',
  },
  creditOptions: {
    paddingHorizontal: 20,
  },
  creditOption: {
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
  creditOptionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  creditOptionDetails: {
    flex: 1,
  },
  creditOptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E4F7A',
    marginBottom: 4,
  },
  creditOptionDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default CreditScreen;