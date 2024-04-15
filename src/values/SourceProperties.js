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
    1: { id: 1, title: "Science" },
    2: { id: 2, title: "Computer Science" },
    3: { id: 3, title: "Video Games" },
    4: { id: 4, title: "Movies & Series" },
    5: { id: 5, title: "Music" },
    6: { id: 6, title: "Education" },
    7: { id: 7, title: "Economy" },
    8: { id: 8, title: "Travel" },
    9: { id: 9, title: "Culture" },
    10: { id: 10, title: "History" },
    11: { id: 11, title: "Geography" },
    12: { id: 12, title: "Politic" },
    13: { id: 13, title: "Comedy" },
    14: { id: 14, title: "Language" },
    15: { id: 15, title: "Lifestyle" },
    16: { id: 16, title: "Activism" },
    17: { id: 17, title: "Mind" }
}
const NoTheme = { id: -1, title: "All Themes" }

export const SourceType = {
    0: { id: 0, title: "RSS", icon: rssLogo },
    1: { id: 1, title: "Youtube", icon: youtubeLogo },
    2: { id: 2, title: "Spotify", icon: spotifyLogo }
}
const NoType = { id: -1, title: "All Sources", icon: allSourceLogo }

export const levels = [NoLevel, SourceLevel[0], SourceLevel[1], SourceLevel[2], SourceLevel[3], SourceLevel[4], SourceLevel[5], SourceLevel[6]];
export const types = [NoType, SourceType[0], SourceType[1], SourceType[2]];
export const themes = [NoTheme, SourceTheme[1], SourceTheme[2], SourceTheme[3], SourceTheme[4], SourceTheme[5], SourceTheme[6], SourceTheme[7], SourceTheme[8], SourceTheme[9], SourceTheme[10], SourceTheme[11], SourceTheme[12], SourceTheme[13], SourceTheme[14], SourceTheme[15], SourceTheme[16], SourceTheme[17]];