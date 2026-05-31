import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { caseStudies, colors } from '../data/siteData';

export default function CaseStudyScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Proof that premium product execution moves pipeline and retention.</Text>
        <Text style={styles.subtitle}>A snapshot of the business outcomes RedSite Software helps teams unlock.</Text>

        {caseStudies.map((study) => (
          <View key={study.id} style={styles.card}>
            <Image source={{ uri: study.image }} style={styles.image} />
            <View style={styles.cardBody}>
              <Text style={styles.result}>{study.result}</Text>
              <Text style={styles.cardTitle}>{study.title}</Text>
              <Text style={styles.cardDescription}>{study.summary}</Text>
            </View>
          </View>
        ))}

        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Contact')}>
          <Text style={styles.primaryButtonText}>Start your next case study</Text>
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
  card: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 24, overflow: 'hidden' },
  image: { width: '100%', height: 210 },
  cardBody: { padding: 18 },
  result: { color: colors.primarySoft, fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  cardTitle: { color: colors.text, fontSize: 22, fontWeight: '800', marginTop: 10 },
  cardDescription: { color: colors.textMuted, fontSize: 14, lineHeight: 22, marginTop: 8 },
  primaryButton: { marginTop: 8, backgroundColor: colors.primary, paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  primaryButtonText: { color: colors.text, fontWeight: '800', fontSize: 15 },
});
