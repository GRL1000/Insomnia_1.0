import React, { useState, useRef, useEffect } from "react";
import { SearchTracks } from "../../../utils/api/Spotify";
import { GetToken } from "../../../utils/InMemoryToken";
import SearchIcon from "../../../assets/icons/search.png";
import * as S from "../Styled-Home";

const SearchBar = ({ onTrackSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { token } = GetToken();
  const searchBarRef = useRef(null);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    try {
      const tracks = await SearchTracks(token, query);
      setResults(tracks);
    } catch (error) {
      console.error("Error searching tracks:", error);
    }
  };

  const handleClickOutside = (event) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target)
    ) {
      setResults([]);
      setIsInputFocused(false);
      setQuery("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const showEllipsis = !isInputFocused && window.innerWidth <= 768;

  return (
    <S.SearchBar ref={searchBarRef}>
      <S.IconSearch>
        <S.IconS src={SearchIcon} alt="Search Icon" />
      </S.IconSearch>
      <form
        onSubmit={handleSearch}
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <S.Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isInputFocused ? "" : (showEllipsis ? "Buscar canciones, artistas..." : "Buscar canciones, artistas y más...")}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button type="submit" style={{ display: "none" }}>
          Search
        </button>
      </form>
      {results.length > 0 && (
        <S.SearchResults>
          {results.map((track) => (
            <S.SearchResultItem
              key={track.id}
              onClick={() => onTrackSelect(track)}
            >
              <S.TrackImage src={track.album.images[0].url} alt={track.name} />
              <S.TrackName>{track.name}</S.TrackName>
              <S.ArtistName>
                {track.artists.map((artist) => artist.name).join(", ")}
              </S.ArtistName>
            </S.SearchResultItem>
          ))}
        </S.SearchResults>
      )}
    </S.SearchBar>
  );
};

export default SearchBar;
