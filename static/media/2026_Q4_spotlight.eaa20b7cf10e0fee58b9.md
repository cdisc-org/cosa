08 December 2026, 10:00 -11:30 AM ET
---

**Registration** is available [here](https://events.teams.microsoft.com/event/e8b11299-f0c3-4815-9c0f-75dc4e681b34@078244a1-de67-4c9e-9088-986d7f110a37/registration).

---

Join CDISC and Open-Source Developers for the COSA Spotlight Webinar on 8 December. Register to hear from open-source developers in the CDISC community as they showcase their free tools as part of the CDISC Open Source Alliance (COSA).

* sARDen
* USDM Biomedical Concept Mapper
* HTP42 OSB USDM

<br/>

<img style="float: left; max-width: 173px; padding-right: 16px" src="./img/Event_Images/sARDen.png" class="blockMax100" alt="sARDen">

**sARDen**

In many SAS-based reporting workflows, Analysis Results Data (ARD) concepts live in code or spreadsheets rather than as structured metadata, which makes TLF production hard to standardize, reuse, and trace. sARDen is a SAS-native framework that addresses this.

Users define ARS-aligned study, output, and analysis metadata through simple macros and validate it with built-in checks. sARDen then generates TLFs from that metadata reproducibly, without leaving SAS. A companion package, sARDenMTS, exports the metadata as ARM-TS-compliant YAML. Designed for SAS programmers, biostatisticians, and study designers.

* Yutaka Morioka, EPS Holdings Inc
<br/>
<br/>

<img style="float: left; max-width: 173px; padding-right: 16px" src="./img/Event_Images/COSAlogo.png" class="blockMax100" alt="USDMBCM">

**USDM Biomedical Concept Mapper**

Mapping planned study activities to CDISC Biomedical Concepts within USDM is usually done by hand. That work is hard to replicate, audit, and scale, and it slows study startup. The USDM Biomedical Concept Mapper automates it with a lightweight Python command-line tool.

The tool retrieves candidate concepts from the latest CDISC Biomedical Concepts and SDTM Dataset Specializations. It then uses commercial or self-hosted large language models to pick the best match. Finally, it writes validated, explainable mappings with confidence scores back into the USDM file. Designed for clinical standards leads, clinical programmers, and study data managers.

* Chaitanya Repaka, AI Lens
<br/>
<br/>

<img style="float: left; max-width: 173px; padding-right: 16px" src="./img/Event_Images/htp42.png" class="blockMax100" alt="htp42">

**HTP42 OSB USDM Uploader**

Creating or updating studies manually in OpenStudyBuilder (OSB) is slow, error-prone, and inconsistent. The HTP42 OSB USDM Uploader reads a USDM JSON study definition and loads its objectives, endpoints, arms, visits, and other components into OSB automatically.

This turns standardized protocol metadata into a working study specification that can drive downstream assets such as the SoA, CRFs, and EDC setup. Built in Python and aligned with CDISC Digital Data Flow (DDF), it is designed for programmers and study designers working with OSB and USDM.

* Phoebe Babrah, HealthTechPartners42
* Marius Conjeaud, HealthTechPartners42

