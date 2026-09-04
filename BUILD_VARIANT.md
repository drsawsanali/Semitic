# Kotlin / Compose Full-Fidelity Build

This branch is reserved for the highest-fidelity Android implementation of the Ancient Semitic Inscriptions Encyclopedia.

## Goal
Preserve the complete interface, content, navigation and functionality without the constraints imposed by App Inventor.

## Target stack
- Kotlin
- Jetpack Compose
- Android 9+ minimum support
- Material 3
- Navigation Compose
- Local structured assets/database for inscriptions, languages, dictionary, chronology, bibliography and quizzes
- Web/API integration only where required for AI/OCR/server-backed features

## Fidelity requirements
- Keep Arabic/English presentation and RTL/LTR behavior.
- Match the existing web application's visual hierarchy and content.
- Preserve reader, language matrix, inscription explorer, dictionary, etymology/root views, audio/pronunciation, maps, OCR, flashcards, bibliography, quizzes, indexing, LaTeX, AI research lab and timeline where technically available.
- Remove horizontal overflow on phone layouts and validate narrow screens from 320dp upward.
- Respect system bars, keyboard insets and safe areas.

## Deliverables
- Android Studio project
- Debug APK
- Signed release APK
- AAB for Google Play
- signing/build documentation
- parity/QA checklist
