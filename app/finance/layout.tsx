import Footer from "@/components/containers/footer";
import Header from "@/components/containers/header";

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
