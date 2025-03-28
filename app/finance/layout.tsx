import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="lg:flex">
      <Header />
      <Footer />
      <div className=" flex-1">{children}</div>
    </main>
  );
}
