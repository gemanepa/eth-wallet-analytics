/**
 * Checks if more than a year has passed between the given date and the current date.
 *
 * @param {Date} dateObj - The date to compare with the current date.
 * @returns {boolean} - Returns true if more than a year has passed; otherwise, returns false.
 */
function moreThanAYearPassed(dateObj: Date) {
  // Get the current date
  const currentDate = new Date();

  // Compare the years of the two dates
  return currentDate.getFullYear() - dateObj.getFullYear() > 1;
}

export { moreThanAYearPassed };
