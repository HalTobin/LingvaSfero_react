import rssLogo from 'images/sources/source-rss.svg';
import youtubeLogo from 'images/sources/source-youtube.svg';
import spotifyLogo from 'images/sources/source-spotify.svg';

export const SourceLevel = {
    0: "A0",
    1: "A1",
    2: "A2",
    3: "B1",
    4: "B2",
    5: "C1",
    6: "C2"
}

export const SourceTheme = {
    1: "Science",
    2: "Computer Science",
    3: "Video Games",
    4: "Movies & Series",
    5: "Music",
    6: "Education",
    7: "Economy",
    8: "Travel",
    9: "Culture",
    10: "History",
    11: "Geography",
    12: "Politic",
    13: "Comedy",
    14: "Language",
    15: "Lifestyle",
    16: "Activism",
    17: "Mind"
}

export const SourceType = {
    0: { title: "RSS", icon: rssLogo },
    1: { title: "Youtube", icon: youtubeLogo },
    2: { title: "Spotify", icon: spotifyLogo }
}

export const types = [SourceType[0], SourceType[1], SourceType[2]]