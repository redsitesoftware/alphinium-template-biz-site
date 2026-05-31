import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, company, heroImage, homeFeatures } from '../data/siteData';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.brand}>{company.name}</Text>
            <Text style={styles.tagline}>{company.tagline}</Text>
          </View>
          <Pressable style={styles.headerButton} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.headerButtonText}>Book a call</Text>
          </Pressable>
        </View>

        <ImageBackground source={{ uri: heroImage }} imageStyle={styles.heroImage} style={styles.heroCard}>
          <View style={styles.heroOverlay}>
            <Text style={styles.eyebrow}>B2B SaaS delivery for growth-stage teams</Text>
            <Text style={styles.heroTitle}>{company.headline}</Text>
            <Text style={styles.heroCopy}>
              RedSite Software designs premium digital products, revenue systems, and platform experiences for ambitious Brisbane businesses.
            </Text>
            <View style={styles.heroActions}>
              <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Services')}>
                <Text style={styles.primaryButtonText}>Get Started</Text>
              </Pressable>
              <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('Case Studies')}>
                <Text style={styles.secondaryButtonText}>View proof</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.featureGrid}>
          {homeFeatures.map((feature) => (
            <View key={feature.id} style={styles.featureCard}>
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.calloutCard}>
          <View style={styles.calloutTextWrap}>
            <Text style={styles.calloutLabel}>Why teams choose alphinium</Text>
            <Text style={styles.calloutTitle}>One partner for product strategy, delivery, and long-term optimisation.</Text>
          </View>
          <Pressable style={styles.inlineButton} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.inlineButtonText}>Contact RedSite</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  brand: { color: colors.text, fontSize: 22, fontWeight: '800' },
  tagline: { color: colors.primarySoft, marginTop: 4, fontSize: 13 },
  headerButton: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 999 },
  headerButtonText: { color: colors.text, fontWeight: '700' },
  heroCard: { minHeight: 420, borderRadius: 28, overflow: 'hidden', backgroundColor: colors.card },
  heroImage: { borderRadius: 28 },
  heroOverlay: { flex: 1, backgroundColor: 'rgba(7, 17, 31, 0.7)', padding: 28, justifyContent: 'flex-end' },
  eyebrow: { color: colors.primarySoft, fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.2 },
  heroTitle: { color: colors.text, fontSize: 36, lineHeight: 42, fontWeight: '900', marginTop: 12 },
  heroCopy: { color: colors.textMuted, fontSize: 16, lineHeight: 24, marginTop: 12, maxWidth: 520 },
  heroActions: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 24 },
  primaryButton: { backgroundColor: colors.primary, paddingHorizontal: 20, paddingVertical: 14, borderRadius: 14 },
  primaryButtonText: { color: colors.text, fontWeight: '800', fontSize: 15 },
  secondaryButton: { borderWidth: 1, borderColor: 'rgba(245,249,255,0.28)', backgroundColor: 'rgba(16,35,63,0.7)', paddingHorizontal: 20, paddingVertical: 14, borderRadius: 14 },
  secondaryButtonText: { color: colors.text, fontWeight: '700', fontSize: 15 },
  featureGrid: { gap: 16 },
  featureCard: { backgroundColor: colors.card, borderRadius: 22, borderWidth: 1, borderColor: colors.border, padding: 20 },
  featureIcon: { color: colors.primary, fontSize: 22, fontWeight: '800' },
  featureTitle: { color: colors.text, fontSize: 20, fontWeight: '800', marginTop: 12 },
  featureDescription: { color: colors.textMuted, fontSize: 14, lineHeight: 22, marginTop: 8 },
  calloutCard: { backgroundColor: colors.backgroundAlt, borderRadius: 24, borderWidth: 1, borderColor: colors.border, padding: 20, gap: 18 },
  calloutLabel: { color: colors.primarySoft, fontWeight: '700', textTransform: 'uppercase', fontSize: 12, letterSpacing: 1 },
  calloutTitle: { color: colors.text, fontSize: 22, lineHeight: 30, fontWeight: '800', marginTop: 8 },
  inlineButton: { alignSelf: 'flex-start', backgroundColor: colors.cardSoft, paddingHorizontal: 18, paddingVertical: 12, borderRadius: 999 },
  inlineButtonText: { color: colors.text, fontWeight: '700' },
});
