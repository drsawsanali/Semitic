# Ancient Semitic Inscriptions Encyclopedia — Three Build Variants

This repository is organized into three implementation branches derived from the same encyclopedia source and content baseline.

## 1. `aia-native-rebuild`
Full native MIT App Inventor rebuild.

**Purpose:** maximize App Inventor compatibility while preserving the application interface, content, navigation and functions as far as the platform allows.

**Primary output:** `.aia` + App Inventor APK.

## 2. `aia-webviewer`
MIT App Inventor WebViewer shell around the web application.

**Purpose:** achieve the closest visual match and quickest AIA-compatible implementation.

**Primary output:** `.aia` WebViewer project + bundled/hosted web build + test APK.

## 3. `kotlin-compose-full`
Full Android Kotlin/Jetpack Compose implementation.

**Purpose:** highest functional and visual fidelity without App Inventor limitations.

**Primary output:** Android Studio source + APK + signed APK + AAB.

## Source baseline
The source package supplied for this work is a Vite/React/TypeScript application and serves as the reference for screens, content and behavior.

## Shared requirements
- Preserve academic content and navigation.
- Preserve Arabic/English and RTL/LTR behavior.
- Optimize all phone screens for Android 9+.
- Avoid horizontal overflow; target narrow screens from approximately 320dp upward.
- Maintain separate QA/parity documentation for every variant.
