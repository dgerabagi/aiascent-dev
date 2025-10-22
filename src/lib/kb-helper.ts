// src/lib/kb-helper.ts
export function getKnowledgeBase(reportName: string | null): 'report' | 'dce' | 'academy' {
    if (!reportName) return 'report';

    if (reportName.startsWith('v2v-academy-lab')) {
        return 'dce';
    }
    
    if (reportName.startsWith('v2v-academy-') || reportName === 'whitepaper') {
        return 'academy';
    }

    return 'report';
}