import Navigation from "@/components/suggestions-page/navigation/navigation";
import PageContainer from "@/components/ui/page-container.tsx/page-container";
import React from "react";

const HomePage = () => {
  return (
    <PageContainer title="Suggestions">
      <div className="flex flex-col">
        <Navigation />
      </div>
    </PageContainer>
  );
};

export default HomePage;
