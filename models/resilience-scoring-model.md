# Resilience Scoring Model

## Scale

Use a 1 to 5 maturity scale across all domains.

| Score | Meaning |
| --- | --- |
| 1 | Initial or ad hoc |
| 2 | Managed but inconsistent |
| 3 | Defined and repeatable in part |
| 4 | Measured and operationally reliable |
| 5 | Optimized and continuously improving |

## Figure

```mermaid
flowchart LR
  A[Control Clarity] --> B[Evidence Quality]
  B --> C[Operational Consistency]
  C --> D[Ownership Clarity]
  D --> E[Measurement Discipline]
  E --> F[Remediation Readiness]
  F --> G[Score]
```

## Scoring Dimensions

- control clarity
- evidence quality
- operational consistency
- ownership clarity
- measurement discipline
- remediation readiness

## Risk Overlay

Track risk separately so maturity and exposure do not get mixed together.

| Risk | Meaning |
| --- | --- |
| Low | Limited exposure |
| Medium | Material issue to monitor |
| High | Significant business impact |
| Critical | Immediate leadership attention required |

## Confidence Overlay

| Confidence | Meaning |
| --- | --- |
| High | Strong direct evidence |
| Medium | Adequate but incomplete evidence |
| Low | Heavy reliance on self-reporting |

## Interpretation

- low maturity with high confidence is a strong improvement candidate
- high maturity with low confidence should still be validated
- the lowest domain score often drives the first roadmap action

## Use

Use this model to compare domains consistently without mixing maturity and risk together.

## Outcome

A clear scoring model makes it easier to explain why one domain needs attention before another.

## Use

Use this model to compare domains consistently without mixing maturity and risk together.
