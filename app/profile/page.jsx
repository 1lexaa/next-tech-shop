import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import UserInfo from "@/components/UserInfo";

export default function Profile() {
  return (
    <main className="px-10">
      <Nav />

      <UserInfo />

      <Footer />
    </main>
  );
}
