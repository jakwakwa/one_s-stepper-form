export const isValidValues = (values) => {
  if (
    values.salary !== 0 &&
    values.age !== 0 &&
    values.qualification !== "" &&
    values.jobTitle !== "" &&
    values.gender !== "" &&
    values.idNo !== "" &&
    values.firstName !== "" &&
    values.emailAddress !== "" &&
    values.phone !== 0 &&
    values.specailist !== "" &&
    values.meds !== "" &&
    values.hospital !== "" &&
    values.nicotine !== "" &&
    values.alcohol !== "" &&
    values.drugs.length !== 0 &&
    values.hasInsurance !== ""
  ) {
    return true;
  } else {
    return false;
  }
};
