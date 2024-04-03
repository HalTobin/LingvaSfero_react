export const Colors = {
    bg_primary: "#202020",
    bg_secondary: "#1C0C34"
}

export function toColor(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16,
        a = ((num & 0xFF000000) >>> 24) / 255;
    const colorString = `rgba(${r},${g},${b},${a})`;
    console.log("colorString:", colorString);
    return colorString;
}