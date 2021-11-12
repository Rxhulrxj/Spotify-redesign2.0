import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

const spotifyApi = new SpotifyWebApi({});
function Dashboard() {
  return (
    <main>
      <Sidebar />
      <Body />
      <Rightbar />
    </main>
  );
}

export default Dashboard;
