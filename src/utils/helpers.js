import emotionIsPropValid from "@emotion/is-prop-valid";

export const formatCurrency = (value) =>
    new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
    }).format(value);

export function shouldForwardProp(propName, target) {
    if (typeof target === "string") {
        return emotionIsPropValid(propName);
    }
    return true;
}
