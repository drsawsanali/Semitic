# AIA Native Rebuild

This branch is reserved for a full MIT App Inventor compatible rebuild of the Ancient Semitic Inscriptions Encyclopedia.

## Goal
Preserve the visual hierarchy, Arabic/English interface, academic content, navigation, inscriptions, comparative dictionary, chronology, quizzes, bibliography, media, and as much functionality as App Inventor can support natively.

## Required internal changes
- Recreate screens/components with App Inventor components and extensions where needed.
- Replace React state/routing with App Inventor screens/arrangements and TinyDB/local data structures.
- Reimplement data tables and search using local JSON/CSV assets or TinyDB.
- Reimplement audio/TTS with App Inventor TextToSpeech/Player where feasible.
- Reimplement OCR/AI/server-backed functions through Web/API components or approved extensions.
- Maintain Android 9+ usability and responsive phone layouts.

## Source baseline
The uploaded source package is a Vite/React/TypeScript application and is used as the visual/content reference for this branch.

## Deliverable target
- `.aia` project
- test APK exported from App Inventor
- feature parity checklist
- known limitations document
