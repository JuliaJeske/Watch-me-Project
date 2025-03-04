import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import '../styles/sidebar.scss';

type GenreResponseProps = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

 type ISidebarProps = {
  selectedGenreId: number,
   handleClickButton(id:number):void

 }

export function SideBar({selectedGenreId, handleClickButton}: ISidebarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.name)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}

function handleClickButton(id: any): void {
  throw new Error("Function not implemented.");
}
