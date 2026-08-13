# Flip Phone OS + Ecosystem — Concept Note

**Status:** Parked concept. Not a committed project. No product decisions made.
**Date:** 2026-08-13
**Origin:** Late-night idea — "flip phones with our own OS, with an ecosystem across all phones like GrapheneOS."

---

## 1. The idea in one line

A clamshell flip phone running a hardened Android distribution we control, with a
shared ecosystem layer spanning every device we ship — GrapheneOS's philosophy,
in a flip form factor.

## 2. Decisions locked so far

These came out of an explicit pressure-test of the original idea. They narrow the
concept from "build an OS for €20 burner phones" to something buildable.

| Question | Decision | Consequence |
|---|---|---|
| How deep does "our own OS" go? | **Custom Android distro** — fork AOSP/LineageOS, harden it, add our layer | Keeps VoLTE, app compatibility, and a realistic team size. We are not writing a kernel. |
| Flip form factor vs. €20 price point | **Keep the flip, pay more** | Rules out the entire cheap-Chinese-burner supply chain. Changes the product from "disposable" to "deliberate." |
| What happens now | **Park as concept doc** | This document. No code, no supplier contact, no spend. |

### What was explicitly abandoned

- **The €20 Chinese burner as a base.** Dead on technical grounds, not budget
  grounds — see §3.
- **"One-time use / disposable" as positioning.** Disposable hardware means the
  ODM silently swaps SoC, modem and panel between production batches under the
  same model name. You cannot maintain an OS against a moving target. The framing
  also invites regulatory and payment-processor friction for no gain, since EU/NO
  SIM registration applies regardless.

## 3. Why the original cheap-China path fails

Worth recording so we don't rediscover it at 2am in six months.

**The €20 flip phones are not Android.** The commodity clamshells on Alibaba run
Unisoc T107 — a Cat.1 feature-phone chipset with roughly **48 MB RAM / 128 MB
flash**, running a proprietary RTOS. There is no AOSP to fork. Porting an OS here
means *writing* one against undocumented Unisoc blobs, with no chipset SDK access
(vendors gate that behind NDAs and 1000+ unit commitments).

**The cheap hackable Android devices aren't flips.** The Qin F21 Pro (MTK6761,
3 GB/32 GB, ~$113) is a real Android device, but it is a candybar keypad phone at
5× the target price.

**Neither can relock.** GrapheneOS's security model is hardware-rooted: it writes
its own signing keys into the Pixel's Titan M2 secure element and **relocks the
bootloader**, preserving verified boot under a non-Google OS. Cheap hardware
offers either a bootloader that never unlocks, or one that unlocks and never
relocks. A permanently-unlocked device boots unverified forever — anyone with a
USB cable and a minute alone with it can flash the boot partition. Shipping that
while invoking GrapheneOS's name would be a security claim we cannot honour.

**VoLTE is the silent killer.** With 2G/3G shutdowns, calls ride VoLTE, which is
carrier-certified *per device and per firmware build*. A custom OS build can lose
the ability to place a phone call on Telenor/Telia. This ends more custom-ROM
phone projects than any other single cause.

**MediaTek/Unisoc kernel sources.** Both routinely ship without public kernel
source, forcing reverse-engineered blobs. This is the standard reason cheap
devices never get sustained LineageOS support.

## 4. Hardware landscape (as of Aug 2026)

| Option | Price | Flip? | Relockable? | Verdict |
|---|---|---|---|---|
| Unisoc T107 clamshell (Alibaba, MOQ 20) | ~$22 | Yes | No | **Dead.** 48 MB RAM, RTOS, no AOSP |
| Qin F21 Pro (MTK6761) | ~$113 | No | No | Hackable, but wrong form factor |
| Samsung Galaxy Z Flip 3/4 (refurb) | Varies | Yes | No (unlock only) | **Closing window** — see below |
| Motorola Razr (2027, GrapheneOS-partnered) | TBD | Yes | **Expected yes** | **The strategic target** |
| Used Pixel 6a/7a + GrapheneOS | €100–150 | No | Yes | The honest benchmark we must beat |

**Samsung is a shrinking window.** Unofficial LineageOS 22 exists for the Z Flip 3
(`b2q`), so a refurb Z Flip 3/4 is the only Android flip we could realistically
build on *today*. But Samsung is removing the OEM-unlock toggle from Developer
Options in One UI 8, so this path has an expiry date and no relock at any point.
Viable as a **prototype mule**, not as a product.

**The benchmark to beat.** If the goal is simply "cheap secure phone," a used
Pixel 6a at €100–150 runs real GrapheneOS today with relock, secure element and
actual security patches. Any version of this project must answer: *what do we
offer that a refurbished Pixel does not?* Current best answer: **the flip form
factor and a coherent multi-device ecosystem** — neither of which the Pixel path
provides.

## 5. The strategic opening

Multiple outlets reported (March 2026) that **Motorola and the GrapheneOS
Foundation entered a long-term partnership** — GrapheneOS's first expansion beyond
Pixel. Reported details:

- Motorola's **2026** devices do **not** meet requirements; **2027** devices are
  being engineered to.
- Missing today: relockable bootloader with custom keys, and hardware **memory
  tagging (MTE)**.
- Named initial targets include the **Motorola Signature, Razr Ultra and Razr
  Fold**.

> **Confidence: medium.** This is assembled from search-result snippets. The
> primary sources (grapheneos.org, phonearena, makeuseof) are blocked by this
> environment's egress proxy and were **not** verified directly. **Verify at
> source before this influences any spend.**

If it holds, it is the single most important fact in this document: a
**relockable, MTE-capable Android flip phone becomes a real platform in 2027**.
That is exactly the hardware this concept needs, and we do not have to build it.
The play is to be ready for that platform rather than to fight commodity hardware
for two years.

## 6. Phased approach

**Phase 0 — Define the ecosystem (no hardware).**
"Ecosystem across all phones" is currently one undefined word, and it is the
entire product. GrapheneOS itself has no Apple-style ecosystem — it has sandboxed
Play services, remote attestation (Auditor) and a hardened app repo. We must
decide which of these we mean:

- Device-to-device sync (contacts, messages, files) without a third-party cloud?
- Remote attestation — devices proving their integrity to each other?
- A curated/hardened app source?
- An identity layer shared across a household or team's devices?

This phase needs zero custom hardware. It can be prototyped on stock Android and
proves the valuable half of the idea first.

**Phase 1 — Distro prototype on a mule.**
Refurb Z Flip 3 (`b2q`) + LineageOS 22 as the development mule. Goal is learning
what a hardened flip UX actually wants — outer-display behaviour, hinge states,
keypad/touch interaction. Throwaway hardware, deliberately.

**Phase 2 — Align to the 2027 platform.**
If the Motorola/GrapheneOS report verifies, target that generation. Relockable
bootloader + MTE + a vendor with an actual security-update pipeline solves every
blocker in §3 at once.

## 7. Costs and obligations not yet budgeted

Selling a device with our OS in the EU/Norway makes **us** the legal
manufacturer — replacing the OS voids the ODM's conformity assessment. That pulls
in CE marking, the RED directive (including cybersecurity requirements mandatory
since Aug 2025), RoHS, WEEE registration, and the incoming Cyber Resilience Act.
Plus carrier VoLTE certification per firmware build, and a standing commitment to
ship security patches for the device's supported life.

**Comparables:** Light Phone, Punkt, Mudita and Minimal Phone each did
"minimal phone + custom OS." All took years and millions; all sell at $300–800;
several nearly died on firmware. Any plan that assumes a shorter path needs to
say explicitly why.

## 8. Open questions

1. What *is* the ecosystem, concretely? (Blocks everything. Answer first.)
2. Does the Motorola × GrapheneOS report verify at source?
3. What does the flip form factor give the user that justifies the premium —
   nostalgia, focus/digital-wellbeing, or physical call privacy?
4. Is this a separate venture, or does it relate to Tangen Gaming Hub at all?
   (Currently unrelated — parked here for lack of a better home.)
5. Build-and-sell hardware, or ship a distro users flash themselves? The second
   avoids nearly all of §7.

## 9. Sources

- [Unisoc T107 product page](https://www.unisoc.com/en/product/FeaturePhoneUS/T107)
- [Unisoc T107 clamshell, Alibaba (~$22, MOQ 20)](https://www.alibaba.com/product-detail/Unisoc-T107-chipset-4G-senior-phone_1600302854389.html)
- [Qin F21 Pro (MTK6761, ~$113)](https://www.sunsky-online.com/p/MPH2216B/QIN-F21-Pro-3GB-32GB-2.8-inch-Android-11-MTK6761-Quad-core-up-to-2.0GHz-21-Keys-Network-4G-Bl.htm)
- [GrapheneOS CLI install guide (verified boot / relock)](https://grapheneos.org/install/cli)
- [GrapheneOS bootloader relock discussion](https://discuss.grapheneos.org/d/270-relock-the-bootloader)
- [Motorola × GrapheneOS — unverified, egress-blocked](https://www.makeuseof.com/grapheneos-expanding-supported-devices-motorola/)
- [LineageOS 22.0 for Galaxy Z Flip 3 (b2q), unofficial](https://xdaforums.com/t/lineageos-22-0-for-galaxy-z-flip3-5g-b2q-rom-experimental-unofficial.4705780/)
- [Cheap Chinese phones and custom ROM support (XDA)](https://xdaforums.com/t/cheap-chinese-phones-with-good-custom-rom-support.4188885/)
- [Global vs Chinese ROM / bootloader unlockability](https://electronics.alibaba.com/buyingguides/unlocked-chinese-phones-global-rom-vs-chinese-rom-guide)
