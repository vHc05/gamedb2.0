import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./SalesPage.css";

function SalesPage() {
  return (
    <>
      <Header />
      <body>
        <h1 className="text">SALES</h1>
        <h3 className="text">Current steam games in sale</h3>
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Buscar..." />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <h3 className="text">MÁS RECIENTES</h3>
        <div className="salesDiv">
          <table className="salesTable">
            <colgroup>
              <col id="salesCol1" />
              <col id="salesCol2" />
              <col id="salesCol3" />
            </colgroup>

            <thead>
              <th className="headtableText" colSpan={2}>
                RECIENTES
              </th>
              <th className="headtableText" id="colPrecio">
                Precio
              </th>
            </thead>

            <tbody>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">99.99$</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">99.99$</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">99.99$</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">99.99$</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">99.99$</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">99.99$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default SalesPage;
