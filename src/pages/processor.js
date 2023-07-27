import RootLayout from "@/layout/RootLayout";

export default function ProcessorPage() {
  return <div> Processor</div>;
}


ProcessorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};