import RootLayout from "@/layout/RootLayout";

export default function StoragePage() {
    return <div> StoragePage</div>;
  }

  StoragePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };