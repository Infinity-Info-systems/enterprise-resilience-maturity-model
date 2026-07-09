export type ResilienceLayer = 'Governance' | 'Assessment' | 'Improvement' | 'Reporting' | 'Reassessment';

export type MaturityLevel = 'Initial' | 'Managed' | 'Defined' | 'Measured' | 'Optimized';

export interface DomainMaturity {
  domain: string;
  level: MaturityLevel;
  score: number;
  owner: string;
}

export interface ResilienceLayerEntry {
  layer: ResilienceLayer;
  question: string;
  artifact: string;
}

export interface ResilienceRegistry {
  repository: string;
  purpose: string;
  layers: ResilienceLayerEntry[];
  domains: DomainMaturity[];
  improvementFocus: string[];
  decisionRule: string;
  governanceQuestions: string[];
}

export const resilienceRegistry: ResilienceRegistry = {
  repository: 'Enterprise Resilience Maturity Model',
  purpose:
    'Score resilience maturity across governance, reliability, DR, observability, and FinOps and turn findings into an improvement roadmap.',
  layers: [
    {
      layer: 'Governance',
      question: 'Who owns the program?',
      artifact: 'Governance model',
    },
    {
      layer: 'Assessment',
      question: 'How mature are we?',
      artifact: 'Scorecard',
    },
    {
      layer: 'Improvement',
      question: 'What needs to change?',
      artifact: 'Improvement plan',
    },
    {
      layer: 'Reporting',
      question: 'What should leaders see?',
      artifact: 'Executive report',
    },
    {
      layer: 'Reassessment',
      question: 'Did it improve?',
      artifact: 'Reassessment schedule',
    },
  ],
  domains: [
    { domain: 'Governance', level: 'Defined', score: 3, owner: 'Governance lead' },
    { domain: 'Reliability', level: 'Measured', score: 4, owner: 'SRE lead' },
    { domain: 'Disaster Recovery', level: 'Managed', score: 2, owner: 'Resilience lead' },
    { domain: 'Observability', level: 'Defined', score: 3, owner: 'Observability lead' },
    { domain: 'FinOps', level: 'Managed', score: 2, owner: 'FinOps lead' },
  ],
  improvementFocus: [
    'Raise the lowest-scoring domain first.',
    'Convert findings into a measurable roadmap.',
    'Re-run assessment on a regular cadence.',
    'Keep evidence attached to every maturity claim.',
  ],
  governanceQuestions: [
    'How mature are we right now?',
    'Which domain is weakest?',
    'What needs to change next?',
    'What should executives see?',
    'Did the score improve after action?',
  ],
  decisionRule:
    'If a maturity claim cannot be scored, evidenced, and reassessed, it should not be treated as a controlled result.',
};

export function getResilienceOverview() {
  return {
    repository: resilienceRegistry.repository,
    purpose: resilienceRegistry.purpose,
    layerCount: resilienceRegistry.layers.length,
    domainCount: resilienceRegistry.domains.length,
    lowestScore: Math.min(...resilienceRegistry.domains.map((domain) => domain.score)),
  };
}
