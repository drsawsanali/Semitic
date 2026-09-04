# AIA WebViewer

This branch is reserved for the closest visual match using an MIT App Inventor WebViewer shell around the web application.

## Goal
Preserve the existing web UI and content with minimal visual change, while packaging it inside an App Inventor project.

## Architecture
- MIT App Inventor screen as native shell.
- WebViewer as the primary content surface.
- Local bundled web assets when practical, otherwise a hosted web build.
- JavaScript interface / WebViewString bridge for native interactions that App Inventor must handle.
- Android 9+ phone layout validation.

## Expected strengths
- Fastest path to close visual parity.
- Existing React UI can remain largely unchanged.
- Most browsing, dictionary, inscriptions, chronology, quiz and visualization UI can stay web-based.

## Expected limitations
- Native integration is weaker than a full Android implementation.
- Browser-dependent audio, file access, OCR, printing/PDF and AI/server requests may need bridge code or hosted APIs.
- Offline behavior depends on how assets and APIs are packaged.

## Deliverable target
- `.aia` WebViewer project
- bundled/hosted web build
- test APK exported from App Inventor
- bridge and limitations documentation
