// src/components/menus/report/ReportTreeNav.tsx
// Updated on: C1372 (Default subsection expansion to false.)
// Updated on: C1369 (Robustly handle both nested and flat section structures.)
// Updated on: C1367 (Fix property access and implicit any errors by adding explicit types.)
// Updated on: C1360 (Render nested subsections.)
// Updated on: C1356 (Use centralized expandedSections state from reportStore for persistence.)
// NEW FILE - C1340
import React from 'react';
import { useReportStore } from '../../../state/reportStore';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useShallow } from 'zustand/react/shallow';

import type { RawReportSection, RawSubSection, RawReportPage } from '../../../state/reportStore';


const ReportTreeNav: React.FC = () => {
  const { reportData, currentPageIndex, goToPageByIndex, expandedSections, toggleSectionExpansion } = useReportStore(
    useShallow(state => ({
      reportData: state.reportData,
      currentPageIndex: state.currentPageIndex,
      goToPageByIndex: state.goToPageByIndex,
      expandedSections: state.expandedSections,
      toggleSectionExpansion: state.toggleSectionExpansion,
    }))
  );

  if (!reportData) return null;

  const containerStyle: React.CSSProperties = {
    width: '250px',
    minWidth: '250px',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRight: '1px solid #555',
    padding: '10px',
    overflowY: 'auto',
    flexShrink: 0,
  };

  const sectionHeaderStyle: React.CSSProperties = {
    fontSize: '11px',
    color: '#00ffff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const subSectionHeaderStyle: React.CSSProperties = {
    ...sectionHeaderStyle,
    fontSize: '10px',
    color: '#aaddff',
    paddingLeft: '10px',
    fontWeight: 'normal',
  };

  const pageLinkStyle = (isActive: boolean): React.CSSProperties => ({
    fontSize: '10px',
    color: isActive ? '#FFA500' : '#ccc',
    padding: '4px 0 4px 25px',
    cursor: 'pointer',
    display: 'block',
    fontWeight: isActive ? 'bold' : 'normal',
    borderLeft: `2px solid ${isActive ? '#FFA500' : 'transparent'}`,
    transition: 'all 0.2s',
  });

  let pageCounter = 0;

  return (
    <div style={containerStyle}>
      <h3 style={{ marginTop: 0, fontSize: '12px' }}>Report Navigator</h3>
      {reportData.sections.map((section: RawReportSection) => {
        const isSectionExpanded = expandedSections[section.sectionId] ?? false;
        const sectionPageStartIndex = pageCounter;

        // C1372: Combine page counting from direct pages and subsection pages
        let sectionPageCount = (section.pages || []).length;
        if (section.subSections) {
          sectionPageCount += section.subSections.reduce((acc, sub) => acc + (sub.pages || []).length, 0);
        }
        pageCounter += sectionPageCount;

        return (
          <div key={section.sectionId}>
            <div style={sectionHeaderStyle} onClick={() => toggleSectionExpansion(section.sectionId)}>
              {isSectionExpanded ? <FaChevronDown /> : <FaChevronRight />}
              {section.sectionTitle}
            </div>
            {isSectionExpanded && (
              <div style={{ paddingLeft: '10px' }}>
                {/* Render direct pages first if they exist */}
                {(section.pages || []).map((page: RawReportPage, index: number) => {
                  const globalPageIndex = sectionPageStartIndex + index;
                  const isActive = globalPageIndex === currentPageIndex;
                  return (
                    <div
                      key={page.pageId}
                      style={pageLinkStyle(isActive)}
                      onClick={() => goToPageByIndex(globalPageIndex)}
                    >
                      {page.pageTitle}
                    </div>
                  );
                })}

                {/* Then render subsections */}
                {section.subSections && (() => {
                  let subSectionPageCounter = sectionPageStartIndex + (section.pages || []).length;
                  return section.subSections.map((subSection: RawSubSection) => {
                    // C1372 FIX: Default to false to start collapsed
                    const isSubSectionExpanded = expandedSections[subSection.subSectionId] ?? false;
                    const startIndex = subSectionPageCounter;
                    subSectionPageCounter += (subSection.pages || []).length;

                    return (
                      <div key={subSection.subSectionId}>
                        <div style={subSectionHeaderStyle} onClick={() => toggleSectionExpansion(subSection.subSectionId)}>
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
                                style={pageLinkStyle(isActive)}
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