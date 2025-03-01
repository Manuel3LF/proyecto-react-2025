const parseFloatNumber = (num, decimals = 3) => {
    if (!num) return "N/A"; // Evita errores con valores nulos o undefined
    return parseFloat(num).toFixed(decimals);
};

export default parseFloatNumber;