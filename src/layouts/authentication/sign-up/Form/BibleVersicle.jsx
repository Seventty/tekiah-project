import React, { useState, useEffect } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import efesiosQuote from "assets/text/efesiosQuote.txt";

const BibleVersicle = () => {
  const [efesiosText, setEfesiosText] = useState("");

  useEffect(() => {
    fetch(efesiosQuote)
      .then((r) => r.text())
      .then((text) => {
        setEfesiosText(text);
      });
  }, []);

  return (
    <MDBox>
      <MDBox
        p={0}
        sx={{
          textAlign: "center",
        }}
      >
        <MDTypography variant="body2" fontWeight="medium">
          Efesios 3:14-19
        </MDTypography>
      </MDBox>
      <MDBox
        mt={1}
        sx={{
          textAlign: "left",
        }}
      >
        <MDTypography variant="subtitle2" fontWeight="light">
          {efesiosText}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
};

export default BibleVersicle;
