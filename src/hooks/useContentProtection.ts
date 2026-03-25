import { useEffect } from "react";

/** True if node is inside an editable field (typing / in-field copy allowed). */
function isEditableField(target: EventTarget | null): boolean {
  if (!target || !(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  return Boolean(target.closest("input, textarea, select"));
}

/**
 * Deters casual saving, copying, and context menus. Not security (bypassable via devtools, etc.).
 */
export function useContentProtection() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const onCopy = (e: ClipboardEvent) => {
      if (!isEditableField(e.target)) e.preventDefault();
    };

    const onCut = (e: ClipboardEvent) => {
      if (!isEditableField(e.target)) e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.tagName === "IMG" || t?.closest("img")) e.preventDefault();
    };

    const onSelectStart = (e: Event) => {
      if (!isEditableField(e.target)) e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      const ae = document.activeElement;
      const inField = ae instanceof HTMLElement && isEditableField(ae);

      if (mod && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
      }
      if (mod && !inField && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
      }
      if (mod && !inField && (e.key === "x" || e.key === "X")) {
        e.preventDefault();
      }
      if (mod && !inField && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
      }
      if (mod && !inField && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
      }
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
