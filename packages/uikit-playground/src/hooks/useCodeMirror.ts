import { EditorState } from "@codemirror/state";
import type { Extension } from "@codemirror/state";
import { EditorView } from "codemirror";
import { useCallback, useEffect, useState, useRef } from "react";

type changes = {
  value: string;
  isDispatch: boolean;
  cursor?: number;
};

export default function useCodeMirror(extensions?: Extension[], doc?: string) {
  const view = useRef<EditorView>();
  const [element, setElement] = useState<HTMLElement>();
  const [changes, setChanges] = useState<changes>({
    value: "[]",
    isDispatch: true,
    cursor: 0,
  });

  const editor = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);

  const updateListener = EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      setChanges({
        value: view.current?.state?.doc.toString() || "",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        isDispatch: update?.transactions[0]?.annotations?.length === 1 || false,
        cursor: view.current?.state?.selection?.main?.head || 0,
      });
    }
  });

  const setValue = (
    value: string,
    {
      from,
      to,
      cursor,
    }: {
      from?: number;
      to?: number;
      cursor?: number;
    }
  ) => {
    try {
      view.current?.dispatch({
        changes: {
          from: from || 0,
          to: to || view.current.state.doc.length,
          insert: value || "",
        },
        selection: { anchor: cursor || 0 },
      });
    } catch (e) {
      // do nothing;
    }
  };

  useEffect(() => {
    if (!element) return;

    view.current = new EditorView({
      state: EditorState.create({
        doc: doc || "",
        extensions: [updateListener, ...(extensions || [])],
      }),
      parent: element,
    });

    return () => view.current?.destroy();
  }, [element]);

  return { editor, changes, setValue };
}
