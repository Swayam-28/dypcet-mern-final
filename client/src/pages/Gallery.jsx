import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Gallery() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    api.get("/galleryitems").then((res) => setAlbums(res.data || []));
  }, []);

  return (
    <div className="container section">
      <h1>Gallery</h1>

      <div className="grid" style={{ marginTop: "24px" }}>
        {albums.map((album) => (
          <div key={album._id} className="card">
            <h3>{album.title}</h3>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "6px",
              marginTop: "10px"
            }}>
              {album.images?.slice(0, 3).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "90px",
                    objectFit: "cover",
                    borderRadius: "6px"
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
