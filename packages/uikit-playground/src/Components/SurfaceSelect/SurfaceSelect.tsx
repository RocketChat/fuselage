import { Box, Select } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useContext } from "react";

import { context, surfaceAction } from "../../Context";
import options from "./options";

const SurfaceSelect: FC = () => {
  const {
    state: { surface, isMobile },
    dispatch,
  } = useContext(context);
  return (
    <Box pie="15px">
      <Select
        width="170px"
        height={isMobile ? "30px" : "initial"}
        options={options}
        value={`${surface}`}
        placeholder="Surface"
        onChange={(e) => {
          dispatch(surfaceAction(parseInt(e)));
        }}
      />
    </Box>
  );
};

export default SurfaceSelect;
