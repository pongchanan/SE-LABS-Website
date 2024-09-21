import { Outlet, useNavigation } from "react-router-dom";
import Header from "../../component/Header.jsx/Header";
import Footer from "../../component/Footer/footer";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
