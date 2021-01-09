const WebTorrent = require("../");

const client = new WebTorrent();

const torrentId = "data/big-buck-bunny.torrent"

client.add(torrentId, { path: "data/" }, function (torrent) {
  torrent.on("done", function () {
    console.log("torrent download finished");
  });

  setInterval(() => {
    const {
      timeRemaining,
      downloaded,
      uploaded,
      downloadSpeed,
      uploadSpeed,
      progress,
      ratio,
      numPeers
    } = torrent;
  
      console.log({
      timeRemaining,
      downloaded,
      uploaded,
      downloadSpeed,
      uploadSpeed,
      progress,
      ratio,
      numPeers
    });
  }, 5000);
})
