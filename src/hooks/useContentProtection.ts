import { useEffect } from "react";

/**
 * Blocks selection, copy/cut, context menu, and image drag. Not real security (devtools, view source, etc.).
 */
export function useContentProtection() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const onCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const onCut = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.tagName === "IMG" || t?.closest("img")) e.preventDefault();
    };

    const onSelectStart = (e: Event) => {
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      if (mod && (e.key === "s" || e.key === "S")) e.preventDefault();
      if (mod && (e.key === "c" || e.key === "C")) e.preventDefault();
      if (mod && (e.key === "x" || e.key === "X")) e.preventDefault();
      if (mod && (e.key === "a" || e.key === "A")) e.preventDefault();
      if (mod && (e.key === "u" || e.key === "U")) e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("copy", onCopy, true);
    document.addEventListener("cut", onCut, true);
    document.addEventListener("dragstart", onDragStart, true);
    document.addEventListener("selectstart", onSelectStart, true);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("copy", onCopy, true);
      document.removeEventListener("cut", onCut, true);
      document.removeEventListener("dragstart", onDragStart, true);
      document.removeEventListener("selectstart", onSelectStart, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
}
