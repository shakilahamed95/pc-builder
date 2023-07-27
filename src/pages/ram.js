import RootLayout from "@/layout/RootLayout";

export default function RamPage() {
    return <div> Ram Page</div>;
  }

  RamPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };