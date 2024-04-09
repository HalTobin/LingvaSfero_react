import allSourceLogo from 'images/sources/source-none.svg';
import rssLogo from 'images/sources/source-rss.svg';
import youtubeLogo from 'images/sources/source-youtube.svg';
import spotifyLogo from 'images/sources/source-spotify.svg';

export const SourceLevel = {
    0: { id: 0, title: "A0", text: "Total Beginner" },
    1: { id: 1, title: "A1", text: "Beginner" },
    2: { id: 2, title: "A2", text: "Intermediate Beginner" },
    3: { id: 3, title: "B1", text: "Advanced Beginner" },
    4: { id: 4, title: "B2", text: "Intermediate" },
    5: { id: 5, title: "C1", text: "Advanced" },
    6: { id: 6, title: "C2", text: "Expert" }
}
const NoLevel = { id: -1, title: "--", text: "All Levels" }

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
    0: { id: 0, title: "RSS", icon: rssLogo },
    1: { id: 1, title: "Youtube", icon: youtubeLogo },
    2: { id: 2, title: "Spotify", icon: spotifyLogo }
}
const NoType = { id: -1, title: "All Sources", icon: allSourceLogo }

export const levels = [NoLevel, SourceLevel[0], SourceLevel[1], SourceLevel[2], SourceLevel[3], SourceLevel[4], SourceLevel[5], SourceLevel[6]];
export const types = [NoType, SourceType[0], SourceType[1], SourceType[2]]