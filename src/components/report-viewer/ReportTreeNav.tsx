// src/components/report-viewer/ReportTreeNav.tsx
import React from 'react';
import { useReportState, useReportStore } from '@/stores/reportStore';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import type { RawReportSection, RawSubSection, RawReportPage } from '@/stores/reportStore';

const ReportTreeNav: React.FC = () => {
  const { reportData, currentPageIndex, expandedSections } = useReportState(state => ({
    reportData: state.reportData,
    currentPageIndex: state.currentPageIndex,
    expandedSections: state.expandedSections,
  }));
  const { goToPageByIndex, toggleSectionExpansion } = useReportStore.getState();

  if (!reportData) return null;

  let pageCounter = 0;

  return (
    <div className="w-64 min-w-[250px] h-full bg-black/10 dark:bg-black/30 border-r p-2 overflow-y-auto flex-shrink-0">
      <h3 className="text-sm font-bold mt-0 mb-2">Report Navigator</h3>
      {reportData.sections.map((section: RawReportSection) => {
        const isSectionExpanded = expandedSections[section.sectionId] ?? false;
        const sectionPageStartIndex = pageCounter;

        let sectionPageCount = (section.pages || []).length;
        if (section.subSections) {
          sectionPageCount += section.subSections.reduce((acc, sub) => acc + (sub.pages || []).length, 0);
        }
        pageCounter += sectionPageCount;

        return (
          <div key={section.sectionId}>
            <div className="text-xs text-primary cursor-pointer flex items-center gap-1 mb-1 font-bold" onClick={() => toggleSectionExpansion(section.sectionId)}>
              {isSectionExpanded ? <FaChevronDown /> : <FaChevronRight />}
              {section.sectionTitle}
            </div>
            {isSectionExpanded && (
              <div className="pl-2">
                {(section.pages || []).map((page: RawReportPage, index: number) => {
                  const globalPageIndex = sectionPageStartIndex + index;
                  const isActive = globalPageIndex === currentPageIndex;
                  return (
                    <div
                      key={page.pageId}
                      className={`text-xs py-1 px-2 cursor-pointer block border-l-2 transition-all ${isActive ? 'text-amber-500 font-bold border-amber-500' : 'text-muted-foreground border-transparent hover:bg-accent'}`}
                      onClick={() => goToPageByIndex(globalPageIndex)}
                    >
                      {page.pageTitle}
                    </div>
                  );
                })}
                {section.subSections && (() => {
                  let subSectionPageCounter = sectionPageStartIndex + (section.pages || []).length;
                  return section.subSections.map((subSection: RawSubSection) => {
                    const isSubSectionExpanded = expandedSections[subSection.subSectionId] ?? false;
                    const startIndex = subSectionPageCounter;
                    subSectionPageCounter += (subSection.pages || []).length;

                    return (
                      <div key={subSection.subSectionId} className="pl-2">
                        <div className="text-xs text-primary/80 cursor-pointer flex items-center gap-1 my-1" onClick={() => toggleSectionExpansion(subSection.subSectionId)}>
                          {isSubSectionExpanded ? <FaChevronDown /> : <FaChevronRight />}
                          {subSection.subSectionTitle}
                        </div>
                        {isSubSectionExpanded && (
                          (subSection.pages || []).map((page: RawReportPage, index: number) => {
                            const globalPageIndex = startIndex + index;
                            const isActive = globalPageIndex === currentPageIndex;
                            return (
                              <div
                                key={page.pageId}
                                className={`text-xs py-1 px-2 cursor-pointer block border-l-2 ml-2 transition-all ${isActive ? 'text-amber-500 font-bold border-amber-500' : 'text-muted-foreground border-transparent hover:bg-accent'}`}
                                onClick={() => goToPageByIndex(globalPageIndex)}
                              >
                                {page.pageTitle}
                              </div>
                            );
                          })
                        )}
                      </div>
                    );
                  });
                })()}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReportTreeNav;