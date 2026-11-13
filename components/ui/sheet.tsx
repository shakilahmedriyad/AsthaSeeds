"use client";

import { Drawer } from "@base-ui/react/drawer";
import { X } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const Sheet = Drawer.Root;
const SheetTrigger = Drawer.Trigger;
const SheetClose = Drawer.Close;
const SheetTitle = Drawer.Title;

function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Drawer.Popup>) {
  return (
    <Drawer.Portal>
      <Drawer.Backdrop className="fixed inset-0 z-50 bg-black/50 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
      <Drawer.Viewport className="fixed inset-0 z-50 flex justify-end">
        <Drawer.Popup
          className={cn(
            "h-full w-[min(20rem,85vw)] border-l border-border bg-background p-6 text-foreground shadow-xl outline-none transition-transform duration-300 data-ending-style:translate-x-full data-starting-style:translate-x-full",
            className,
          )}
          {...props}
        >
          <Drawer.Content className="flex h-full flex-col">{children}</Drawer.Content>
        </Drawer.Popup>
      </Drawer.Viewport>
    </Drawer.Portal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-border pb-4",
        className,
      )}
      {...props}
    />
  );
}

function SheetCloseButton({
  "aria-label": ariaLabel,
  className,
}: {
  "aria-label": string;
  className?: string;
}) {
  return (
    <SheetClose
      render={
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn("size-8", className)}
          aria-label={ariaLabel}
        />
      }
    >
      <X className="size-4" aria-hidden="true" />
    </SheetClose>
  );
}

export {
  Sheet,
  SheetClose,
  SheetCloseButton,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
