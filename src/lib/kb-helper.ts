// src/lib/kb-helper.ts
export function getKnowledgeBase(reportName: string | null): 'report' | 'dce' | 'academy' | 'anguilla' {
    if (!reportName) return 'report';

    if (reportName.startsWith('v2v-academy-lab')) {
        return 'dce';
    }
    
    if (reportName.startsWith('v2v-academy-') || reportName === 'whitepaper') {
        return 'academy';
    }

    if (reportName === 'anguilla') {
        return 'anguilla';
    }

    return 'report';
}