import { resilienceRegistry } from './resilienceRegistry';

export interface ResilienceReportRow {
  domain: string;
  level: string;
  score: number;
  owner: string;
}

export function buildResilienceReport() {
  const rows: ResilienceReportRow[] = resilienceRegistry.domains.map((domain) => ({
    domain: domain.domain,
    level: domain.level,
    score: domain.score,
    owner: domain.owner,
  }));

  return {
    title: resilienceRegistry.repository,
    purpose: resilienceRegistry.purpose,
    layers: resilienceRegistry.layers,
    improvementFocus: resilienceRegistry.improvementFocus,
    governanceQuestions: resilienceRegistry.governanceQuestions,
    decisionRule: resilienceRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildResilienceSummary() {
  return {
    totalDomains: resilienceRegistry.domains.length,
    lowestScore: Math.min(...resilienceRegistry.domains.map((domain) => domain.score)),
    measuredDomains: resilienceRegistry.domains.filter((domain) => domain.level === 'Measured').length,
    managedDomains: resilienceRegistry.domains.filter((domain) => domain.level === 'Managed').length,
  };
}
