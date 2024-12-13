import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./PatchNotes.css";

function PatchNotes() {
  return (
    <>
      <Header />
      <body className="patchNotes">
        <h1 className="text">Patch Notes</h1>
        <h3 className="text">Current Patch Notes for supported steam games</h3>
        <div className="patchTableDiv">
          <table className="patchTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
              <td className="patchTime" colSpan={2}>
                00:00AM
              </td>
            </tr>
            <tr>
              <th className="patchGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <td className="patchInfo" colSpan={3}>
                PATCH INFO
              </td>
            </tr>
          </table>
          <br />
          <table className="patchTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
              <td className="patchTime" colSpan={2}>
                00:00AM
              </td>
            </tr>
            <tr>
              <th className="patchGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <td className="patchInfo" colSpan={3}>
                PATCH INFO
              </td>
            </tr>
          </table>
          <br />
          <table className="patchTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
              <td className="patchTime" colSpan={2}>
                00:00AM
              </td>
            </tr>
            <tr>
              <th className="patchGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <td className="patchInfo" colSpan={3}>
                PATCH INFO
              </td>
            </tr>
          </table>
          <br />
          <table className="patchTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
              <td className="patchTime" colSpan={2}>
                00:00AM
              </td>
            </tr>
            <tr>
              <th className="patchGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <td className="patchInfo" colSpan={3}>
                PATCH INFO
              </td>
            </tr>
          </table>
          <br />
          <table className="patchTable">
            <tr>
              <th className="gameImage" rowSpan={2}>
                <img src="../../../public/images/SAOICON.png" alt="" />
              </th>
              <td className="patchTime" colSpan={2}>
                00:00AM
              </td>
            </tr>
            <tr>
              <th className="patchGameName" colSpan={2}>
                Sword Art Online: Hollow Realization
              </th>
            </tr>
            <tr>
              <td className="patchInfo" colSpan={3}>
                PATCH INFO
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

export default PatchNotes;
