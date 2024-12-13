import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./AccountPage.css";

function AccountPage() {
  return (
    <>
      <Header />
      <body>
        <div className="profileDiv">
          <table className="nicknameTable">
            <tr>
              <th className="userImage" rowSpan={2}>
                <img src="../../../public/images/userprofile.svg" alt="" />
              </th>
              <th className="nickname" colSpan={2}>
                EvilAFM
              </th>
            </tr>
            <tr>
              <td className="userDescription" colSpan={2}>
                I'm Alex and i don't like anything
              </td>
            </tr>
          </table>
        </div>

        <div className="gamesMenu">
          <nav>
            <ul className="menu">
              <li id="accountLi">
                <a id="accountlinks" href="/account/owned">Owned Games</a>
              </li>
              <li id="accountLi">
                <a id="accountlinks" href="/account/wishlist">Wishlisted Games</a>
              </li>
            </ul>
          </nav>
          <hr className="underLine" />
        </div>

        <div className="ownedGames">
          <table className="ownedGamesTable">
            <tr>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
            </tr>
            <tr>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
            </tr>
            <tr>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
              <td className="ownedImage">
                <img src="../../../public/images/saofbgrid.png" alt="" />
              </td>
            </tr>
          </table>
        </div>

      </body>
      <Footer />
    </>
  );
}

export default AccountPage;
