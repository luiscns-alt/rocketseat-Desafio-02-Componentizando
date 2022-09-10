import { memo } from "react";
import "../styles/sidebar.scss";
import { Button } from "./Button";

interface IGenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface ISideBarProps {
  handleClickButton: (id: number) => void;
  genres: Array<IGenreResponseProps>;
  selectedGenreId: number;
}

function SideBarComponent({
  genres,
  handleClickButton,
  selectedGenreId,
}: ISideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

export const SideBar = memo(SideBarComponent)