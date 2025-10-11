// src/components/home/WorkflowSection.tsx
// C4 - Enhanced styling for a more polished look
import React from 'react';

const workflowSteps = [
    { id: 1, title: "Curate Context" },
    { id: 2, title: "Generate Prompt" },
    { id: 3, title: "Parallel AI Responses" },
    { id: 4, title: "Test & Select" },
    { id: 5, title: "Integrate & Commit" },
];

const WorkflowSection = () => {
return (
<section className="py-20 md:py-32 bg-background">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
The Power of Iteration: The DCE Workflow
</h2>

    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
      {workflowSteps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="text-center p-6 border border-neutral-800 rounded-lg bg-neutral-950 shadow-lg min-w-[200px]">
            <span className="text-primary font-bold">{step.id}.</span> {step.title}
          </div>
          {index < workflowSteps.length - 1 && (
            <div className="text-2xl text-neutral-600 mx-4 hidden md:block">→</div>
          )}
        </React.Fragment>
      ))}
    </div>

    <p className="text-center mt-8 text-muted-foreground">
        (Interactive visualization coming soon)
    </p>
  </div>
</section>
);
};

export default WorkflowSection;