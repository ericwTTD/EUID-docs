# European Unified ID Overview


This page provides the following information about EUID:
- [Introduction](#introduction)
- [EUID Infrastructure](#euid-infrastructure)
- [FAQs](#faqs)
- [License](#license)

For integration guides, supported SDKs, and endpoint reference, see [EUID API Documentation](/api/v1/README.md). See also [Getting Started](/api/README.md).

## Introduction

European Unified ID (EUID) is a deterministic identifier based on personally identifiable information (PII), such as email addresses. Built on the [UID2 framework](https://github.com/UnifiedID2/uid2docs/blob/main/api/README.md), EUID complies with the user transparency and privacy controls specific to the market requirements in Europe and the UK, including the General Data Protection Regulation (GDPR) regulations and current consent framework limitations. 

The goal of EUID is to enable deterministic identity for advertising opportunities on the open internet with consumer transparency and controls in place. EUID enables logged-in experiences from publisher websites, mobile apps, and Connected TV (CTV) apps to monetize through programmatic workflows.  


### EUID vs. UID2

EUID is an open-source, standalone solution with its own unique namespace that builds on the [UID2 framework](https://github.com/UnifiedID2/uid2docs/blob/main/api/README.md). The main differences between UID2 and EUID result from more stringent EU data protection laws related to the consent-collection framework and data rights for data subjects and obligations between participants. Otherwise, EUID follows the same [guiding principles](#guiding-principles) as UID2.

>IMPORTANT: Even though it builds on the UID2 framework, EUID is a separate identifier. 

The following table summarizes the key differences between the two solutions.

| Comparison Aspect | UID2 | EUID |
| :--- | :--- | :--- |
| Open-sourced framework | Yes | Yes |
| Interoperable | Yes | Yes |
| PII used | Email addresses, phone numbers | Email addresses |
| Consent | Based on local regulations like California Privacy Rights Act (CPRA), California Consumer Privacy Act (CCPA) | Driven by GDPR, TCF2.0 outcomes, and local regulatory input |


### Guiding Principles

- **First-party relationships:** EUID enables advertisers to easily activate their first-party data on publisher websites across the open internet.

- **Non-proprietary (universal) standard:** EUID is accessible to all [participants](#participants) in the advertising ecosystem who abide by the code of conduct. No individual organization controls access.

- **Open source:** EUID code is transparent thanks to an open-source framework.

- **Interoperable:** EUID allows other identity solutions (commercial and proprietary) to integrate and provide EUIDs with their offerings.

- **Secure and encrypted data:** EUID leverages multiple layers of security to protect PII and other user data.

- **Consumer control:** Consumers can opt out of EUID at any time through the [Transparency and Control Portal](https://transparentadvertising.eu).

### Technical Design Principles

- **Accountability:** Access requires all participants to abide by a code of conduct governed by an independent body.

- **Distributed integration:** Multiple certified integration paths provide options for publishers, advertisers, and data providers to generate EUIDs.

- **Decentralized storage:** To block malicious actors, the framework provides no centralized storage of PII-to-EUID mappings.

- **Lean infrastructure:** Infrastructure is light and inexpensive to operate.

- **Self-reliant:** No reliance on external services for real-time processing of RTB data.


## EUID Infrastructure

The following sections explain and illustrate the key elements of the EUID infrastructure:

  - [EUID Types](#euid-types)
  - [Core Components](#core-components)
  - [Participants](#participants)
  - [Workflows](#workflows)

### EUID Types

There are two types of EUIDs, raw EUIDs and EUID tokens (also known as advertising tokens). The following table explains each type.

| ID Type | Shared in Bid Stream? | Description |
| :--- | :--- | :--- |
| **Raw EUIDs** | Never | This is an unencrypted alphanumeric identifier created through the EUID APIs or SDKs with the user's verifiable PII, such as an email address, as input. Raw EUIDs are designed to be stored by advertisers, data providers, and demand-side platforms (DSPs).|
| **EUID (Advertising) Token** | Shared | This is an encrypted form of a raw EUID. EUID tokens are generated from hashed or unhashed email addresses and are designed to be stored by publishers or publisher service providers. Supply-side platforms (SSPs) pass EUID tokens in bid stream and DSPs decrypt them at bid request time. |

### Core Components

The administrative EUID infrastructure consists of the following core components, all of which are currently managed by The Trade Desk.

| Component | Description |
| :--- | :--- |
| **Core Service**  | A centralized service that stores salt secrets, encryption keys, and manages access to the distributed EUID system. | 
| **Operator Service**  | TBD. Operator Service being the scalability level of infrastructure: more load can be handled by adding more operator service instances. All instances (public or private) are designed with protections to ensure keeping sensitive EUID data required to provide the services secure, regardless of who operates the service.  | 
| **Opt-out Service**  | A global service that manages user opt-out requests, for example, by routing them to the relevant EUID data holders. | 
| **Transparency and Control Portal**  | A user-facing website, [https://transparentadvertising.eu](https://transparentadvertising.eu), that allows consumers to opt out of EUID at any time. | 


### Participants 

With its transparent and interoperable approach, EUID provides a collaborative framework for many participants across the advertising ecosystem—advertisers, publishers, DSPs, SSPs, single sign-on (SSO) providerss, customer data platforms (CDPs), consent management providers (CMPs), identity providers, data providers, and measurement providers.  

The following table lists the key participants and their roles in the EUID [workflows](#workflows).

| Participant | Role Description |
| :--- | :--- |
| **Core Administrator**  | An organization (currently, The Trade Desk) that manages the EUID Core Service and other [components](#core-components), for example, by distributing encryption keys and salts to EUID operators and sending user opt-outs requests to operators and DSPs. |  
| **Operators**  | Organizations that operate the service (via the EUID APIs) and are accessible to all participants. Operators receive and store encryption keys and salts from the EUID Core Service, salt and hash PII to return EUIDs, encrypt EUIDs to generate EUID tokens, and distribute EUID token decryption keys.<br/><br/>There can be multiple operators that participants can choose to work with. Any participant can also choose to become a closed operator and operate their own internal version of the service to generate and manage EUIDs.<br/><br/>The Trade Desk serves as an open operator for EUID. | 
| **Compliance Manager**  | An organization that audits EUID participants for compliance with stated rules and relays compliance information to the EUID administrators and EUID operators. | 
| **DSPs**  | DSPs integrate with the EUID system to receive EUIDs from brands (as first-party data) and data providers (as third-party data) and leverage them to inform bidding on EUIDs in the bid stream. | 
| **Data Providers**  | Organizations that collect user data and push it to DSPs, for example, advertisers, data on-boarders, measurement providers, identity graph providers, and third-party data providers. | 
| **Advertisers**  | Organizations that TBD. | 
| **Publishers**  | Organizations that propagate EUIDs to the bid stream via SSPs and include identity providers, publishers, and SSOs. Publishers can choose to work with an SSO or an independent ID provider that is interoperable with EUID. The latter can handle the EUID integration on their behalf. | 
| **Consumers**  | Users who engage with publishers or publisher-related SSOs and identity providers. Users can manage their EUID consent and privacy settings in the [Transparency and Control Portal]([#opt-out-portal](https://transparentadvertising.eu)). | 

## Workflows

The following table lists four key workflows in the EUID system and provides links to the respective integration guides, which include specific diagrams, integration steps, FAQs, and other relevant information for each workflow.

| Workflow | Intended Primary Participants | Integration Guide |
| :--- | :--- | :--- |
| **Buy-side** | DSPs who transact on EUIDs in the bid stream. | [DSP](./api/v1/guides/dsp-guide.md) |
| **Data provider** | Organizations that collect user data and push it to DSPs. | [Advertiser and Data Provider](./api/v1/guides/advertiser-dataprovider-guide.md) |
| **Publisher** | Organizations that propagate EUIDs to the bid stream via SSPs.<br/> NOTE: Publishers can choose to leverage the [EUID SDK](./api/v1/sdks/client-side-identity.md) or complete their own custom, server-only integration. | [Publisher (with EUID SDK)](./api/v1/guides/publisher-client-side.md)<br/>[Publisher (Server-Only)](./api/v1/guides/custom-publisher-integration.md) |
| **User trust** | Consumers who engage with publishers or publisher-related SSOs and identity providers. | N/A |


The following diagram summarizes all four workflows. For each workflow, the [participants](#participants), [core components](#core-components), [EUID types](#euid-types), and numbered steps are color-coded.

![The EUID Ecosystem](/images/macro_view.jpg)


## FAQs

Here are the commonly asked questions regarding EUID.

#### Will all integration partners in the UID2 infrastructure (SSPs, data providers, measurement providers) be automatically integrated with EUID? 

No. EUID functions as its own identifier separate from UID2. As such, paperwork containing usage and access to UID2 does not automatically grant usage and access for EUID. New contracts are required to be signed for EUID.

#### How do companies interfacing with EUID tokens know which decryption key to apply?

Metadata supplied with a EUID token discloses the timestamp of encryption, which informs which decryption key applies.

#### Can a user opt out of targeted advertising tied to their EUID?

Yes, through the [Transparency and Control Portal](https://transparentadvertising.eu), a user can opt out from being served targeted ads tied to their EUID. The request is distributed through the EUID Core Service and EUID Operators to all relevant participants. 

Some publishers and service providers have the option to limit access to their products based on a user’s participation in EUID and it is the publisher’s responsibility to communicate this as part of their value exchange dialog with the user.

#### How does a user know where to access the opt-out portal?

Publishers, SSOs, or consent management platforms disclose links to the [Transparency and Control Portal](https://transparentadvertising.eu) in their login and consent flows, privacy policies, and other means.

#### Why do advertisers and data providers not need to integrate with the opt-out feed?

Opt-outs relate to opting out of targeted advertising, which is handled through the publisher and DSP opt-out [workflows](#workflows). If the consumer wishes to disengage from a specific advertiser, they need to contact the advertiser directly.

## License
All work and artifacts are licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.txt).
