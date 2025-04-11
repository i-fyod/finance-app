export function formatNumberWithSuffix(value: number) {
    const suffixes = ["", "k", "M", "G", "T", "P", "E"];
    let suffixIndex = 0;

    while (value >= 1000 && suffixIndex < suffixes.length - 1) {
        value /= 1000;
        suffixIndex++;
    }

    const formattedValue = value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);
    return formattedValue.replace(".", ",") + suffixes[suffixIndex];
}
