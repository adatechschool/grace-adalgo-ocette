/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 * @param {string} text
 */
export const inclusify = (text) => {
  let inclusified = text;

  // Remplacer "il" ou "Il" par "iel" ou "Iel"
  inclusified = inclusified.replace(/\bil\b/gi, (match) =>
    match === "Il" ? "Iel" : "iel",
  );

  // Remplacer "elle" ou "Elle" par "iel" ou "Iel"
  inclusified = inclusified.replace(/\belle\b/gi, (match) =>
    match === "Elle" ? "Iel" : "iel",
  );

  // Remplacer "ils" ou "Ils" par "iels" ou "Iels"
  inclusified = inclusified.replace(/\bils\b/gi, (match) =>
    match === "Ils" ? "Iels" : "iels",
  );

  // Remplacer "elles" ou "Elles" par "iels" ou "Iels"
  inclusified = inclusified.replace(/\bell[ae]s\b/gi, (match) =>
    match === "Elles" ? "Iels" : "iels",
  );

  // Remplacer "ceux" ou "Ceux" par "celleux" ou "Celleux"
  inclusified = inclusified.replace(/\bceux\b/gi, (match) =>
    match === "Ceux" ? "Celleux" : "celleux",
  );

  // Remplacer "celle" ou "Celle" par "celleux" ou "Celleux"
  inclusified = inclusified.replace(/\bcelle\b/gi, (match) =>
    match === "Celle" ? "Celleux" : "celleux",
  );

  return inclusified;
};
