"use client";

import { Button } from "@chakra-ui/react";
import RailzConnect from "@railzai/railz-connect";
import { useRef } from "react";

export function RailzButton() {
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    const widget = new RailzConnect();

    widget.open({
      parentElement: ref.current,
      widgetId: process.env.NEXT_PUBLIC_RAILZ_WIDGET_ID,
    });
  };

  return (
    <>
      <Button onClick={onClick}>Open Railz</Button>
      <div id="railz-connect" ref={ref} />
    </>
  );
}
