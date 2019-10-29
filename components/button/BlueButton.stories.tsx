import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import BlueButton from "./BlueButton";

storiesOf("Button", module)
  .add("with text", () => (
    <BlueButton onClick={action("clicked")}>Hello Button</BlueButton>
  ))
  .add("with some emoji", () => (
    <BlueButton onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </BlueButton>
  ));
