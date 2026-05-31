import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, serviceImage, services } from '../data/siteData';

export default function ServicesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Platform services built for teams that need to ship fast and scale safely.</Text>
        <Text style={styles.subtitle}>From launch strategy to post-release support, alphinium covers the product lifecycle.</Text>

        {services.map((service) => (
          <View key={service.id} style={styles.card}>
            <Image source={{ uri: serviceImage }} style={styles.image} />
            <View style={styles.cardBody}>
              <View style={styles.iconBadge}>
                <Text style={styles.iconText}>{service.icon}</Text>
              </View>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardDescription}>{service.description}</Text>
            </View>
          </View>
        ))}

        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.primaryButtonText}>Talk to our solutions team</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 16 },
  title: { color: colors.text, fontSize: 30, lineHeight: 36, fontWeight: '900' },
  subtitle: { color: colors.textMuted, fontSize: 15, lineHeight: 24 },
  card: { backgroundColor: colors.card, borderRadius: 24, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  image: { width: '100%', height: 180 },
  cardBody: { padding: 18 },
  iconBadge: { width: 42, height: 42, borderRadius: 14, backgroundColor: colors.backgroundAlt, alignItems: 'center', justifyContent: 'center' },
  iconText: { color: colors.primary, fontSize: 20, fontWeight: '800' },
  cardTitle: { color: colors.text, fontSize: 22, fontWeight: '800', marginTop: 14 },
  cardDescription: { color: colors.textMuted, fontSize: 14, lineHeight: 22, marginTop: 8 },
  primaryButton: { marginTop: 8, backgroundColor: colors.primary, paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  primaryButtonText: { color: colors.text, fontWeight: '800', fontSize: 15 },
});
