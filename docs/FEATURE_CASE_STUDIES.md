# Feature Plan: Case Studies Section

This document outlines the plan for implementing a new "Case Studies" section on the website.

## 1. Feature Overview

The "Case Studies" section will serve as a dedicated area to showcase detailed stories of key projects and accomplishments. It is an evolution of the "Career Highlights" section and aims to provide concrete evidence of expertise, build trust with the target audience (recruiters, potential clients), and demonstrate a proven track record of success.

Each case study will follow a clear narrative structure:
*   **The Challenge:** The business problem or opportunity.
*   **My Role & The Solution:** The specific role played and the actions taken.
*   **The Results:** The measurable, tangible outcomes of the project.

It is recommended to start with 2-3 high-quality case studies.

## 2. Integration Plan

The new section will be seamlessly integrated into the existing website structure.

### 2.1. URL Structure & Pages

*   **Case Study Listing Page:**
    *   **URL:** `/case-studies`
    *   **Purpose:** A central hub that lists all available case studies.
    *   **Content:** Will feature a title, an introductory paragraph, and a grid of "case study cards," each linking to a detailed page.

*   **Individual Case Study Pages (Dynamic Route):**
    *   **URL:** `/case-studies/[slug]` (e.g., `/case-studies/scaling-a-tech-team`)
    *   **Purpose:** A dedicated page for each case study to provide a focused reading experience and for SEO benefits.
    *   **Layout:** Will include the case study title, a "sticky" sidebar with key metrics, and the main content area with the Challenge/Solution/Results narrative.

### 2.2. Navigation & Discovery

*   **Main Navigation:**
    *   A "Case Studies" link will be added to the main header navigation.
    *   The recommended order is: `Home`, `About`, `Case Studies`, `Playbooks`, `Reach Me`.

*   **Homepage Call-to-Action (CTA):**
    *   A button or link will be added to the homepage, likely at the end of the "Highlights from my career" section.
    *   The CTA will encourage users to explore the case studies in more detail (e.g., "Explore My Work in Detail").

## 3. Implementation Steps

1.  Create the new directory and files for the dynamic route: `src/app/case-studies/[slug]/page.tsx`.
2.  Create the listing page: `src/app/case-studies/page.tsx`.
3.  Update the header component (`src/app/components/Header.tsx`) to include the new navigation link.
4.  Update the homepage's social proof section (`src/app/components/SocialProofSection.tsx`) to include the CTA.
5.  Populate the pages with the content for the initial 2-3 case studies.
