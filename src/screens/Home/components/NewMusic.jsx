import * as S from "../Styled-Home";

function NewMusic({ secondColor }) {
    return(
        <>
            <S.NewMusicTitle>Nueva Música</S.NewMusicTitle>
            <S.NewMusicContainer>
                <S.SongList>
                    <S.SongItem style={{ backgroundColor: secondColor }}>
                        <S.SongTitle>Nombre de la Canción 1</S.SongTitle>
                        <S.SongArtist>Artista 1</S.SongArtist>
                        <S.SongDuration>3:45</S.SongDuration>
                    </S.SongItem>
                    <S.SongItem style={{ backgroundColor: secondColor }}>
                        <S.SongTitle>Nombre de la Canción 2</S.SongTitle>
                        <S.SongArtist>Artista 2</S.SongArtist>
                        <S.SongDuration>4:20</S.SongDuration>
                    </S.SongItem>
                    <S.SongItem style={{ backgroundColor: secondColor }}>
                        <S.SongTitle>Nombre de la Canción 3</S.SongTitle>
                        <S.SongArtist>Artista 3</S.SongArtist>
                        <S.SongDuration>4:20</S.SongDuration>
                    </S.SongItem>
                    <S.SongItem style={{ backgroundColor: secondColor }}>
                        <S.SongTitle>Nombre de la Canción 4</S.SongTitle>
                        <S.SongArtist>Artista 4</S.SongArtist>
                        <S.SongDuration>4:20</S.SongDuration>
                    </S.SongItem>
                    <S.SongItem style={{ backgroundColor: secondColor }}>
                        <S.SongTitle>Nombre de la Canción 5</S.SongTitle>
                        <S.SongArtist>Artista 5</S.SongArtist>
                        <S.SongDuration>4:20</S.SongDuration>
                    </S.SongItem>
                    <S.SongItem style={{ backgroundColor: secondColor }}>
                        <S.SongTitle>Nombre de la Canción 6</S.SongTitle>
                        <S.SongArtist>Artista 6</S.SongArtist>
                        <S.SongDuration>4:20</S.SongDuration>
                    </S.SongItem>
                </S.SongList>
            </S.NewMusicContainer>
        </>
    );
}

export default NewMusic;
