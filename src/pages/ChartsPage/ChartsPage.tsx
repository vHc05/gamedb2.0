import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ChartsPage.css";

function ChartsPage() {
  return (
    <>
      <Header />
      <body className="patchNotes">
        <h1 className="text">Charts</h1>
        <h3 className="text">Info about the player base of some steam games</h3>
        <div className="chartTableDiv">
          <table className="chartTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
            </tr>
            <tr>
              <th className="chartGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <th className="currentPlayers">
                CURRENT
              </th>
              <th className="todayPlayers">
                24h PEAK
              </th>
              <th className="allTimePlayers">
                ALL TIME PEAK
              </th>
            </tr>
            <tr>
              <td className="currentPlayers">
                000
              </td>
              <td className="todayPlayers">
                1000
              </td>
              <td className="allTimePlayers">
                5000
              </td>
            </tr>
          </table>
          <br />
          <table className="chartTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
            </tr>
            <tr>
              <th className="chartGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <th className="currentPlayers">
                CURRENT
              </th>
              <th className="todayPlayers">
                24h PEAK
              </th>
              <th className="allTimePlayers">
                ALL TIME PEAK
              </th>
            </tr>
            <tr>
              <td className="currentPlayers">
                000
              </td>
              <td className="todayPlayers">
                1000
              </td>
              <td className="allTimePlayers">
                5000
              </td>
            </tr>
          </table>
          <br />
          <table className="chartTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
            </tr>
            <tr>
              <th className="chartGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <th className="currentPlayers">
                CURRENT
              </th>
              <th className="todayPlayers">
                24h PEAK
              </th>
              <th className="allTimePlayers">
                ALL TIME PEAK
              </th>
            </tr>
            <tr>
              <td className="currentPlayers">
                000
              </td>
              <td className="todayPlayers">
                1000
              </td>
              <td className="allTimePlayers">
                5000
              </td>
            </tr>
          </table>
          <br />
          <table className="chartTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
            </tr>
            <tr>
              <th className="chartGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <th className="currentPlayers">
                CURRENT
              </th>
              <th className="todayPlayers">
                24h PEAK
              </th>
              <th className="allTimePlayers">
                ALL TIME PEAK
              </th>
            </tr>
            <tr>
              <td className="currentPlayers">
                000
              </td>
              <td className="todayPlayers">
                1000
              </td>
              <td className="allTimePlayers">
                5000
              </td>
            </tr>
          </table>
          <br />
          <table className="chartTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
            </tr>
            <tr>
              <th className="chartGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <th className="currentPlayers">
                CURRENT
              </th>
              <th className="todayPlayers">
                24h PEAK
              </th>
              <th className="allTimePlayers">
                ALL TIME PEAK
              </th>
            </tr>
            <tr>
              <td className="currentPlayers">
                000
              </td>
              <td className="todayPlayers">
                1000
              </td>
              <td className="allTimePlayers">
                5000
              </td>
            </tr>
          </table>
          <br />
          <table className="chartTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
            </tr>
            <tr>
              <th className="chartGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <th className="currentPlayers">
                CURRENT
              </th>
              <th className="todayPlayers">
                24h PEAK
              </th>
              <th className="allTimePlayers">
                ALL TIME PEAK
              </th>
            </tr>
            <tr>
              <td className="currentPlayers">
                000
              </td>
              <td className="todayPlayers">
                1000
              </td>
              <td className="allTimePlayers">
                5000
              </td>
            </tr>
          </table>
          <br />
          <br />
        </div>
      </body>
      <br />
      <Footer />
    </>
  );
}

export default ChartsPage;
