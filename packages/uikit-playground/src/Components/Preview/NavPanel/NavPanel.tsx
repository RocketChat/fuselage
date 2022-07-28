import { css } from "@rocket.chat/css-in-js";
import { Box, ButtonGroup, Icon } from "@rocket.chat/fuselage";
import React, { useContext } from "react";
import type { FC } from "react";

import { context } from "../../../Context";
import PanelBtn from "./PanelBtn";
import TabChange from "./TabChange";

const NavPanel: FC = () => {
  const {
    state: { isMobile, isTablet },
  } = useContext(context);

  const tabsItem: string[] = ["Preview", "Editor"];
  return (
    <Box
      width={"100%"}
      height={"40px"}
      borderBlockEnd="var(--default-border)"
      display={"flex"}
      alignItems={"center"}
      zIndex={1}
      justifyContent={isMobile ? "flex-end" : "space-between"}
      bg="alternative"
      className={css`
        user-select: none;
      `}
    >
      <Box display="flex" height="100%">
        {!isMobile && (
          <ButtonGroup
            pis={"20px"}
            className={css`
              column-gap: 10px;
            `}
          >
            <PanelBtn
              icon={<Icon name="file" width={16} />}
              name={"Clear Blocks"}
              isSmall={isTablet}
            />
            <PanelBtn
              icon={<Icon name="copy" width={16} />}
              name={"Copy Payload"}
              isSmall={isTablet}
            />
          </ButtonGroup>
        )}
      </Box>
      {isTablet && <TabChange tabsItem={tabsItem} />}
    </Box>
  );
};

export default NavPanel;
