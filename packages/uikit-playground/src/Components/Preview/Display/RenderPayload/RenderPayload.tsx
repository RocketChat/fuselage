import { Box } from "@rocket.chat/fuselage";
import {
  UiKitModal as uiKitModal,
  UiKitBanner as uiKitBanner,
  UiKitMessage as uiKitMessage,
} from "@rocket.chat/fuselage-ui-kit";
import type { LayoutBlock } from "@rocket.chat/ui-kit";
import React from "react";

import DeleteElementBtn from "./DeleteElementBtn";
import ElementWrapper from "./ElementWrapper";

const RenderPayload = ({
  index,
  payload,
  surface,
}: {
  index: number;
  payload: readonly LayoutBlock[];
  surface: number;
}) => {
  const uiKitRender: { [key: number]: any } = {
    "1": () => uiKitMessage(payload),
    "2": () => uiKitBanner(payload),
    "3": () => uiKitModal(payload),
  };

  return (
    <ElementWrapper key={index}>
      <DeleteElementBtn elementIndex={index} />
      <Box>{uiKitRender[surface]()}</Box>
    </ElementWrapper>
  );
};

export default RenderPayload;
