import RootLayout from "@/layout/RootLayout";

export default function MonitorPage() {
    return <div> MonitorPage</div>;
  }

  
  MonitorPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };