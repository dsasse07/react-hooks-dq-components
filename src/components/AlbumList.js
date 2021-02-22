import React from "react";
import Album from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  const albumCards = albums.map(album => <Album name={album.name} image={album.image} genre={album.genre}/> )
  return (
    <section className="albums">
      {albumCards}
    </section>
  );
}

export default AlbumList;
