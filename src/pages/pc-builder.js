import RootLayout from "@/layout/RootLayout";

export default function PcBuilderPage() {
  return <div>Pc builder page</div>;
}

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
