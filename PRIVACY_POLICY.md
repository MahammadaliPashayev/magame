# Privacy Policy — MaGame

**Last updated: May 29, 2026**

---

## 1. Introduction

This Privacy Policy explains how MaGame ("we", "our", or "us") collects, uses, and protects your personal data when you use our mobile application MaGame (the "App") available on iOS and Android.

By using the App, you agree to the collection and use of information as described in this policy.

### 1.1 Contact Details

**Controller:** Mahammadali Pashayev (MaGame)
**Email:** mahammadalipashayev@gmail.com
**Location:** Baku, Azerbaijan

For any privacy-related questions, contact us at the email above. Our full registered address is available upon request from a competent supervisory authority.

---

## 2. Age Restriction

**MaGame is not intended for children under the age of 13.**

We do not knowingly collect personal data from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately at the email above. We will delete such data promptly.

If you are between 13 and 16 years old and located in the European Union, you may need parental consent to use the App depending on your country's laws.

---

## 3. Data We Collect

### 3.1 Account & Authentication Data
- **Email address** — collected when you register or log in via OTP (one-time password). Used solely for authentication purposes.
- **User ID** — a unique identifier assigned by Firebase Authentication.

### 3.2 Profile Data
- Display name, user tag, avatar image (if provided)
- Experience points (XP), level, league tier
- Game statistics: games played, games won

### 3.3 Game Progress Data
- Solo game progress: completed levels, best scores, best tiles, last played timestamps
- This data is stored per game (Sudoku, 2048, Minesweeper, Nonogram, Kakuro, Hitori, Numberlink)

### 3.4 Advertising Data
- When you watch a rewarded advertisement (to receive an in-game hint), we log: game identifier, reward type, timestamp
- Your IP address is not stored in ad logs
- Google AdMob may collect device identifiers, IP address, and usage data for ad serving and measurement (see Section 5.3)

### 3.5 Technical & Security Data
- IP address (hashed, not stored in plain text) — used temporarily for rate limiting to prevent abuse of our authentication system
- Device type and operating system — collected by Firebase and AdMob for app functionality and ad delivery

### 3.6 Guest Users
If you use the App as a guest, we assign a temporary anonymous User ID. No email is collected. Guest data may be lost if the app is uninstalled.

---

## 4. How We Use Your Data

| Data | Purpose | Legal Basis |
|---|---|---|
| Email address | Send OTP login code | Contract performance |
| User profile | Display in-app, game rooms | Contract performance |
| Game progress | Save and sync your progress | Contract performance |
| Ad event logs | Analytics, fraud prevention | Legitimate interest |
| IP address (hashed) | Rate limiting, security | Legitimate interest |
| AdMob data | Show relevant rewarded ads | Consent |

We do **not** sell your personal data to third parties.
We do **not** use your data for automated decision-making that produces legal effects.

---

## 5. Third-Party Services

### 5.1 Google Firebase
**Provider:** Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
**Services used:** Firebase Authentication, Cloud Firestore, Cloud Functions, Firebase App Check
**Data processed:** Email, User ID, game data, security tokens
**Privacy policy:** https://firebase.google.com/support/privacy

Firebase processes data in the USA. Data transfer is protected by Google's standard contractual clauses under GDPR Art. 46(2)(c).

### 5.2 Resend
**Provider:** Resend, Inc., USA
**Purpose:** Delivery of OTP authentication emails
**Data processed:** Your email address, IP address (by email delivery infrastructure)
**Privacy policy:** https://resend.com/legal/privacy-policy

We send your email address to Resend solely to deliver the one-time password. The email is not used for marketing.

### 5.3 Google AdMob
**Provider:** Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
**Purpose:** Serving rewarded video advertisements (opt-in only — you choose to watch ads to receive hints)
**Data processed:** Device identifiers (IDFA on iOS, GAID on Android), IP address, app usage data, ad interaction data
**Privacy policy:** https://policies.google.com/privacy

AdMob may use your device's advertising identifier to serve ads. You can reset or limit ad tracking:
- **iOS:** Settings → Privacy & Security → Tracking → disable "Allow Apps to Request to Track"
- **Android:** Settings → Google → Ads → Delete advertising ID

We only show **rewarded ads** — you actively choose to watch them. We do not show banner ads or interstitial ads without your initiation.

### 5.4 Apple App Attest (iOS)
**Provider:** Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA
**Purpose:** Verifying that requests to our backend come from our genuine app on a real Apple device (fraud prevention)
**Data processed:** A cryptographic attestation token — no personal data is shared with Apple beyond what is standard for iOS
**Privacy policy:** https://www.apple.com/legal/privacy/

### 5.5 Google Play Integrity (Android)
**Provider:** Google LLC, USA
**Purpose:** Same as App Attest — verifying genuine app on real Android device
**Data processed:** Integrity token — no personal data shared beyond standard Android operations
**Privacy policy:** https://policies.google.com/privacy

---

## 6. Data Retention

| Data | Retention period |
|---|---|
| OTP codes | 5 minutes (auto-deleted after use or expiry) |
| Rate limit records | 1 hour (rolling window) |
| User account & profile | Until account deletion is requested |
| Game progress | Until account deletion is requested |
| Ad event logs | 12 months |
| Firebase Auth data | Until account deletion is requested |

---

## 7. Your Rights

Depending on your location, you may have the following rights regarding your personal data:

- **Right of access** — request a copy of your data
- **Right to rectification** — correct inaccurate data
- **Right to erasure** ("right to be forgotten") — request deletion of your data
- **Right to restriction** — limit how we process your data
- **Right to data portability** — receive your data in a structured format
- **Right to object** — object to processing based on legitimate interest
- **Right to withdraw consent** — for processing based on consent (e.g. AdMob)

To exercise any of these rights, contact us at mahammadalipashayev@gmail.com. We will respond within 30 days.

**EU/EEA users:** You also have the right to lodge a complaint with your local data protection authority.

**California residents (CCPA):** You have the right to know what personal information is collected, the right to delete it, and the right to opt out of sale (we do not sell personal information).

---

## 8. Account Deletion

You can request deletion of your account and all associated data at any time by emailing us at mahammadalipashayev@gmail.com with the subject "Account Deletion Request".

Upon receiving your request, we will delete your account data within 30 days. Note that some data may be retained for legal compliance (e.g. tax records) or security purposes (e.g. fraud prevention logs) for a limited period.

---

## 9. Data Security

We implement appropriate technical and organizational measures to protect your personal data:

- All communication between the App and our servers is encrypted via HTTPS/TLS
- Firebase App Check / Play Integrity ensures only our genuine app can access our backend
- OTP codes expire within 5 minutes
- IP-based rate limiting prevents abuse of authentication
- Firestore security rules enforce that users can only access their own data

Despite these measures, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.

---

## 10. International Data Transfers

Our backend services (Firebase, Resend, AdMob) are operated by US-based companies and may process your data in the United States or other countries outside your country of residence.

For transfers from the EEA/UK, we rely on:
- **Adequacy decisions** where available
- **Standard Contractual Clauses** (SCCs) adopted by the European Commission under Art. 46(2)(c) GDPR

---

## 11. Children's Privacy (COPPA)

MaGame is rated for users **13 and older**. We do not knowingly collect, use, or disclose personal information from children under 13.

If we discover we have inadvertently collected information from a child under 13, we will delete it immediately. Parents or guardians who believe their child has submitted personal data to us should contact us at mahammadalipashayev@gmail.com.

---

## 12. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of significant changes by:
- Updating the "Last updated" date at the top of this policy
- Displaying a notice within the App

Continued use of the App after changes constitutes acceptance of the updated policy.

---

## 13. Contact

For any questions, concerns, or requests regarding this Privacy Policy or your personal data:

**Email:** mahammadalipashayev@gmail.com
**Response time:** Within 30 days

---

*This Privacy Policy was prepared for MaGame, a party games mobile application developed by Mahammadali Pashayev (MaGame), Azerbaijan.*
