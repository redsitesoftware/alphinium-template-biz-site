import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, company } from '../data/siteData';

export default function ContactScreen() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const updateField = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Let’s map your next platform release.</Text>
        <Text style={styles.subtitle}>Reach RedSite Software for discovery, delivery planning, or a tailored alphinium product walkthrough.</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>{company.name}</Text>
          <Text style={styles.infoText}>{company.tagline}</Text>
          <Text style={styles.infoText}>{company.address}</Text>
          <Text style={styles.infoText}>{company.phone}</Text>
          <Text style={styles.infoText}>{company.email}</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Send us a message</Text>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor={colors.textMuted} value={form.name} onChangeText={(value) => updateField('name', value)} />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor={colors.textMuted} value={form.email} onChangeText={(value) => updateField('email', value)} />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Tell us about your project"
            placeholderTextColor={colors.textMuted}
            value={form.message}
            multiline
            onChangeText={(value) => updateField('message', value)}
          />
          <Pressable style={styles.primaryButton} onPress={() => setSent(true)}>
            <Text style={styles.primaryButtonText}>{sent ? 'Message queued' : 'Send'}</Text>
          </Pressable>
          {sent ? <Text style={styles.successText}>Thanks — our Brisbane team will reply shortly.</Text> : null}
        </View>

        <View style={styles.mapCard}>
          <Text style={styles.mapLabel}>Office location</Text>
          <Text style={styles.mapTitle}>Brisbane QLD</Text>
          <Text style={styles.mapCopy}>Near the CBD, close to client workshops, strategy sessions, and product discovery sprints.</Text>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapPin}>●</Text>
            <Text style={styles.mapPlaceholderText}>Brisbane QLD</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 18 },
  title: { color: colors.text, fontSize: 30, lineHeight: 36, fontWeight: '900' },
  subtitle: { color: colors.textMuted, fontSize: 15, lineHeight: 24 },
  infoCard: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 22, padding: 20, gap: 8 },
  infoTitle: { color: colors.text, fontSize: 22, fontWeight: '800' },
  infoText: { color: colors.textMuted, fontSize: 14, lineHeight: 22 },
  formCard: { backgroundColor: colors.backgroundAlt, borderWidth: 1, borderColor: colors.border, borderRadius: 22, padding: 20, gap: 12 },
  formTitle: { color: colors.text, fontSize: 20, fontWeight: '800' },
  input: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 13, color: colors.text, fontSize: 15 },
  messageInput: { minHeight: 120, textAlignVertical: 'top' },
  primaryButton: { backgroundColor: colors.primary, paddingVertical: 15, borderRadius: 14, alignItems: 'center' },
  primaryButtonText: { color: colors.text, fontWeight: '800', fontSize: 15 },
  successText: { color: colors.success, fontWeight: '700' },
  mapCard: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 22, padding: 20, gap: 10 },
  mapLabel: { color: colors.primarySoft, textTransform: 'uppercase', letterSpacing: 1, fontSize: 12, fontWeight: '700' },
  mapTitle: { color: colors.text, fontSize: 22, fontWeight: '800' },
  mapCopy: { color: colors.textMuted, fontSize: 14, lineHeight: 22 },
  mapPlaceholder: { marginTop: 8, borderRadius: 18, borderWidth: 1, borderStyle: 'dashed', borderColor: colors.primarySoft, minHeight: 180, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.backgroundAlt },
  mapPin: { color: colors.primary, fontSize: 28, marginBottom: 8 },
  mapPlaceholderText: { color: colors.text, fontWeight: '800', fontSize: 18 },
});
