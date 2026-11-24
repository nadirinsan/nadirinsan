# Botico.ai — Marketing Agent Workspace

## Project

This repository houses the Claude Code skills and configuration for the **Botico.ai Marketing Team Lead Agent**.

## Product Overview

**Botico.ai** is an AI-powered, non-custodial trading platform for retail and institutional traders across crypto, stocks, and DeFi markets. Core differentiators: AI Co-Pilot for personalized insights, multi-asset automation, non-custodial architecture, and community-driven trading.

- **Market problem**: 70–90% of traders fail; Botico's AI breaks that pattern
- **Audience**: Beginner to advanced retail traders, institutional traders, fintech-savvy investors
- **Channels**: X (Twitter), Telegram, LinkedIn

## Marketing Agent Skill

The `/marketing-lead` skill acts as the AI team lead for the Botico.ai marketing department. It manages all marketing operations through ClickUp.

**Invoke with**: `/marketing-lead`

**Capabilities**:
- `setup` — Build the ClickUp marketing workspace structure
- `content` — Draft SMM posts for X, Telegram, LinkedIn (every 2 days)
- `weekly-report` — Generate weekly status report in ClickUp
- `campaign` — Create campaign briefs and sub-tasks
- `seo` — Create SEO research and growth experiment tasks
- `monitor` — Search for trends, competitor activity, brand mentions
- `analytics` — Create KPI review tasks
- `plan` — Audit current ClickUp state and produce a weekly priority plan

## ClickUp Workspace

Space: `Botico.ai Marketing`
Folders: Analytics & Reporting, SMM & Content, Campaigns, SEO & Growth Hacking, Social Monitoring

## Conventions

- All ClickUp tasks are left **unassigned** — the human team lead assigns them
- Content drafts are marked `PENDING REVIEW` — never publish without human approval
- SMM content cadence: every 2 days
- Reports: weekly (Mondays)

## Metro Wayfinding Audit Skill

`.claude/skills/metro-wayfinding-audit/` — professional audit of underground metro wayfinding signage (gap analysis, scoring, technical/accessibility review, EN/AZ reports). Entry point `SKILL.md`; Baku Metro reference drawing register in `references/reference-drawings-baku-metro.md`; worked test on the supplied drawings in `examples/drawing-review-baku-metro.md`.
