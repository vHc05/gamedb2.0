import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./FrontPage.css";

function FrontPage() {
  return (
    <>
      <Header />
      <body>
        <h1 className="text">GAMEDB</h1>
        <h3 className="text">GameDB is a web to check some steam statistics</h3>
        <div className="mostPlayedDiv">
          <table className="mostPlayedTable">
            <colgroup>
              <col id="salesCol1" />
              <col id="salesCol2" />
              <col id="salesCol3" />
            </colgroup>

            <thead>
              <th className="tableText" id="colJugados" colSpan={2}>MAS JUGADOS</th>
              <th className="tableText" id="colJugadores">
                JUGADORES
              </th>
            </thead>

            <tbody>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">999</td>
              </tr>

              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">999</td>
              </tr>

              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">999</td>
              </tr>

              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">999</td>
              </tr>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">999</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="recentGamesDiv">
          <table className="recentGamesTable">
            <colgroup>
              <col id="salesCol1" />
              <col id="salesCol2" />
              <col id="salesCol3" />
            </colgroup>

            <thead>
              <th className="tableText">SALIDAS RECIENTES</th>
              <th className="tableText" colSpan={2}>
                PRECIO
              </th>
            </thead>

            <tbody>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">9.99$</td>
              </tr>

              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">9.99$</td>
              </tr>

              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">9.99$</td>
              </tr>

              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">9.99$</td>
              </tr>
              <tr>
                <td className="gameImage">
                  <img src="../../../public/images/test.jpg" alt="" />
                </td>
                <td className="tableText">GAME TITLE</td>
                <td className="tableText">9.99$</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="patchesDiv">
          <table className="patchesTable">
            <colgroup>
              <col id="salesCol1" />
              <col id="salesCol2" />
            </colgroup>

            <thead>
              <th className="text" colSpan={2}>
                ACTUALIZACION EN LA BASE DE DATOS
              </th>
            </thead>
            <tbody>
              <tr className="tableText">
                <td>ID</td>
                <td>EVENTO</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="tableText">000000</td>
                <td className="tableText">Nuevo: BloodBorne PC</td>
              </tr>

              <tr>
                <td className="tableText">000000</td>
                <td className="tableText">Nuevo: BloodBorne PC</td>
              </tr>

              <tr>
                <td className="tableText">000000</td>
                <td className="tableText">Nuevo: BloodBorne PC</td>
              </tr>

              <tr>
                <td className="text">000000</td>
                <td className="text">Nuevo: BloodBorne PC</td>
              </tr>
              <tr>
                <td className="tableText">000000</td>
                <td className="tableText">Nuevo: BloodBorne PC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default FrontPage;
