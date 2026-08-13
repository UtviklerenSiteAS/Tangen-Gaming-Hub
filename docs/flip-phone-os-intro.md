# The Project — Introduction & Prototype Budget

*A hardened flip-phone OS, its own exclusive app ecosystem, and a closed
attested messenger — starting as a lean prototype you can begin this week.*

**Status:** Prototype phase. Personal project, unrelated to Tangen Gaming Hub.
**Date:** 2026-08-13
**Full technical detail:** see [`flip-phone-os-concept.md`](./flip-phone-os-concept.md).
This document is the clean introduction + the "buy it tomorrow" budget.

**Milestone (2026-08-13):** the messenger's cryptographic core is proven working
end-to-end — identity keys, EC + Kyber (post-quantum) pre-keys, session
establishment, and real encrypt/decrypt via `libsignal-android:0.86.5` — running
in the Android Studio emulator on the Windows dev machine, no phones required yet.
Built and verified live against current `signalapp/libsignal` source (not
secondary tutorials, which are largely written against older, pre-Kyber versions
of the library and will not compile as-is). Not yet done: real device-to-device
transport (currently both test identities run in one process), persistence of
keys/sessions across app restarts, hardware attestation, and any UI beyond a
proof-of-concept text screen.

---

## 1. What this is

A phone platform in the spirit of GrapheneOS, but with three things GrapheneOS
doesn't have: a **flip form factor**, an **app ecosystem exclusive to the OS**, and
a **closed, attested messenger** — "Signal on steroids" that only genuine devices
can join. Sold and run as a **managed fleet** (a workplace or a family), with a
self-hosted admin server that can remotely burn a lost device, while every device
also carries an offline duress-wipe.

The vision runs on ideal hardware (a relockable, attestation-capable flip — the
2027 Motorola target). The **prototype** proves the software on cheap hardware you
can buy now.

## 2. The whole platform on one page

| Layer | Decision | Why |
|---|---|---|
| **OS** | Hardened Android distro (fork of AOSP/LineageOS) | Keeps VoLTE + app compatibility; a small team can maintain it |
| **Ecosystem** | An app channel exclusive to the OS, enforced by attestation | The OS itself is the network effect |
| **Flagship app** | Closed messenger on **libsignal**, attested devices only | Sybil/spam/bot-proof; the reason to own the phone |
| **Identity** | Attested device key + username — **no phone numbers** | Fixes Signal's weakest point |
| **Security** | Local duress-PIN wipe (offline) + signed remote burn (fleet) | Real protection is offline; remote is a convenience |
| **Backend** | Self-hosted **Njalla** server, local LLM (Hermes agent), pseudonymous tokens | You are a *processor*; the fleet admin holds identities |
| **Market** | Managed fleet (work / family) | Central admin is normal and expected here |
| **Form factor** | Flip — nostalgia, statement, call privacy, metaphor | The premium is emotional, not spec-driven |

## 3. What we build first (the prototype)

The two features that define the product — the **attested messenger** and the
**burn** — need **zero custom hardware and no bootloader unlock** to prototype:

1. **Messenger v0** on stock Android: two phones, libsignal, username identity,
   disappearing-by-default, an attestation *check* (soft for now), history wiped by
   a duress PIN.
2. **Admin server v0** on your Njalla VPS: a dashboard of **pseudonymous device
   tokens**, a small local LLM for support triage, and a **human-approved, signed**
   burn command. The LLM never authorises a burn — it only drafts and queues.
3. **UX pass**: does the whole thing feel good on a cheap touchscreen? That answer
   decides whether it's worth going further.

Only after that do we flash a custom Android build (Phase 1) and, if it's good,
look at real relockable hardware (Phase 2).

> **One honest caveat, stated once:** on cheap phones the attestation is *soft* —
> a determined attacker could fake "genuine device." That is fine for proving the
> software; the "only real devices" guarantee only becomes hard on relockable
> hardware (the 2027 target). Don't sell the hard guarantee before you have the
> hardware for it.

## 4. The phones we'll use

For the prototype you want: **cheap, Chinese, good touchscreen UX, and a known
path to LineageOS later.** The pick:

### Primary — Xiaomi Redmi 13C  (2× for the messenger test)
Cheap, made in China, genuinely nice screen and UX for the price, and it has a
**proven LineageOS GSI path** for Phase 1. Buy two — a messenger needs two
endpoints to test.
- 🔗 Live Norwegian prices: **[prisjakt.no → Redmi 13C](https://www.prisjakt.no/search?query=redmi+13c)**
- 🔗 Bulk / future sourcing: **[AliExpress → Redmi 13C](https://www.aliexpress.com/wholesale?SearchText=redmi+13c)**
- 🔗 The ROM path (Phase 1): **[XDA — LineageOS GSI on Redmi 13C](https://xdaforums.com/t/flash-lineageos-gsi-to-redmi-13c.4677765/)**
- ⚠️ **Start the unlock clock today:** Xiaomi now requires a Mi account ≥30 days old
  + a 7-day wait before it will unlock the bootloader. You don't need it for
  Phase 0 (stock Android), but create the account now so it's ready for Phase 1.
- Even cheaper: **[Redmi A3 / A5](https://www.prisjakt.no/search?query=redmi+a3)** — a bit weaker, fine for a first look.

### Alternative — Motorola Moto G (2025)
Costs more, but the bootloader unlocks **instantly** via Motorola's portal (no
30-day wait), and Motorola is the **future GrapheneOS partner** — so a Moto mule
aligns with the 2027 target hardware.
- 🔗 Live prices: **[prisjakt.no → Moto G 2025](https://www.prisjakt.no/search?query=moto+g+2025)**

## 5. Budget — what tomorrow's money buys

You already have the server (Njalla, crypto-paid) and all the software is free and
open-source, so **your spend is essentially two phones.**

| Item | What | Price (indicative) | Link |
|---|---|---:|---|
| Dev phone #1 | Redmi 13C | ~1 300 NOK | [prisjakt](https://www.prisjakt.no/search?query=redmi+13c) |
| Dev phone #2 | Redmi 13C (2nd endpoint) | ~1 300 NOK | [prisjakt](https://www.prisjakt.no/search?query=redmi+13c) |
| Cables ×2 | Data-capable USB-C, for flashing/debug | ~150 NOK | any electronics shop |
| Prepaid SIM (optional) | To test VoLTE calling | ~200 NOK | [Talkmore](https://www.talkmore.no/) / Telenor |
| **Total tomorrow** | | **≈ 2 950 NOK** | *within your 2–5k* |

**Already owned / free (0 NOK tomorrow):**

| Item | What | Cost |
|---|---|---|
| Njalla VPS | Hermes agent + local LLM + admin dashboard | *existing* — €15–45/mo, crypto-paid ([njal.la](https://njal.la/)) |
| Local LLM | Llama 3.1 8B (or Qwen 14B) quantized, via [Ollama](https://ollama.com/) on the CPU VPS | free |
| OS / build tools | [LineageOS](https://wiki.lineageos.org/) + AOSP toolchain | free |
| Messenger crypto | [libsignal](https://github.com/signalapp/libsignal) (Signal Protocol) | free |

> **Cheapest possible start:** if you want to spend under 2 000 NOK, buy **one**
> Redmi A3 (~900 NOK) plus **one** phone you already own as the second endpoint,
> and skip the prepaid SIM until VoLTE testing. But two matched Redmi 13Cs is the
> better prototype and still lands inside your budget.

## 6. Decisions locked (so nothing is left open)

These were the remaining open questions; here are the defaults we're adopting for
the prototype, so there is a clear common understanding:

- **Local LLM:** small quantised model (7–8B, e.g. Llama 3.1 8B) via Ollama on the
  Njalla CPU VPS. GPU-class models deferred until there's a reason.
- **Push transport:** self-hosted WebSocket keep-alive on Njalla (no FCM on a
  de-Googled OS), with notifications coalesced/batched to leak less metadata.
- **Fleet-admin authentication:** a hardware security key (FIDO2/WebAuthn) or an
  mTLS client certificate to authorise any remote burn. No knowledge-based auth.
- **Who hosts the admin server:** self-hosted on Njalla for the prototype
  (crypto-paid, privacy-aligned). In a future sell-it version, each organisation
  self-hosts its own — so you touch no identity data at all.
- **App-store moderation:** for a small closed fleet, manual review by you. Not an
  open public marketplace yet — that's a later, separate decision.
- **Attestation on prototype hardware:** accepted as *soft*. The hard guarantee is
  explicitly deferred to relockable hardware (2027). Don't market what the hardware
  can't yet back.

**One thing still genuinely unresolved (not blocking the prototype):** whether the
Motorola × GrapheneOS 2027 report holds up — it's from search snippets, and the
primary sources were blocked here. Verify at source before any production spend.

## 7. Dev environment — Windows is fine for Phase 0

**Phase 0 needs no Linux at all.** Two separate pieces, two separate stacks:

- **Messenger app (v0):** ordinary Android app development. **[Android Studio](https://developer.android.com/studio)**
  on Windows — Win64, 8 GB RAM minimum (16 GB recommended), 8 GB disk. Bundles JDK
  + Kotlin, nothing else to install. Add Signal's own Maven repo (their artifacts
  aren't all on Maven Central) and the Android binding:
  ```kotlin
  repositories {
      maven {
          name = "SignalBuildArtifacts"
          url = uri("https://build-artifacts.signal.org/libraries/maven/")
      }
  }
  dependencies {
      implementation("org.signal:libsignal-android:0.86.5")
  }
  ```
  `libsignal-android` ships native libs for `arm64-v8a`, which matches the Redmi 13C.
- **Admin dashboard:** lives on the **Njalla box**, which is already Linux — but it's
  plain web development, not an OS build. Recommended: **Python + FastAPI + SQLite**
  (simple, and pairs well with Ollama's Python client for LLM triage). Write it on
  Windows in VS Code with the **Remote-SSH** extension pointed at the Njalla server —
  you edit directly on the box, no local Linux VM needed.

**Building the actual AOSP/LineageOS fork (Phase 1) is a different animal — deferred
on purpose.** Confirmed against the current LineageOS wiki: today's branch
(lineage-21+) needs **64 GB RAM and 400 GB disk**, SSD strongly recommended. That
doesn't fit a typical Windows laptop even via WSL2. When Phase 1 actually starts,
the practical move is a **rented Linux build box in the cloud, paid by the hour**
for the build window — not a local WSL2/dual-boot setup fought against undersized
hardware. Nothing to set up for this yet.

## 8. So, tomorrow

1. Order **2× Redmi 13C** from a prisjakt listing (~2 600 NOK). *(Optional: grab
   the cables + a prepaid SIM.)*
2. Create a **Mi account** today so the 30-day unlock clock is running for Phase 1.
3. Install **Android Studio** on your Windows machine and get "Hello World" running
   on a Redmi 13C over USB, to prove the toolchain before writing messenger logic.
4. On your **Njalla** server: install Ollama + a small model, and stand up a bare
   FastAPI dashboard that stores only pseudonymous tokens.
5. Start **Messenger v0** on stock Android across the two phones.

That's a complete, honest first step for well under 5 000 NOK — proving the
software that makes this platform worth building, before a single krone goes to
hardware you can't yet buy.
