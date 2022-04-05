import {
  AnimatedVisibility,
  PositionAnimated,
  Tooltip,
} from '@rocket.chat/fuselage';
import { useDebouncedState, useUniqueId } from '@rocket.chat/fuselage-hooks';
import type {
  ComponentProps,
  Dispatch,
  MutableRefObject,
  ReactElement,
  ReactNode,
  Ref,
  SetStateAction,
} from 'react';
import { cloneElement, forwardRef, useCallback, useMemo, useRef } from 'react';

type AnchorParams = {
  ref: MutableRefObject<null>;
  toggle: Dispatch<SetStateAction<boolean>>;
  id: string;
};

const getAnchor = (
  children: ReactElement | ((props: AnchorParams) => ReactNode),
  params: AnchorParams
): ReactNode => {
  if (typeof children === 'function') {
    return children(params);
  }

  return cloneElement(children, {
    'ref': params.ref,
    'onMouseEnter': () => params.toggle(true),
    'onMouseLeave': () => params.toggle(false),
    'onFocus': () => params.toggle(true),
    'onBlur': () => params.toggle(false),
    'aria-describedby': params.id,
  });
};

// Workaround to the c̶r̶a̶p̶p̶y̶ not-so-great API of PositionAnimated
const InnerTooltip = forwardRef(function InnerTooltip(
  { style, ...props }: ComponentProps<typeof Tooltip>,
  ref: Ref<HTMLDivElement>
): ReactElement {
  return (
    <div ref={ref} style={style}>
      <Tooltip {...props} />
    </div>
  );
});

type TooltipWrapperProps = {
  children: ReactElement | ((props: AnchorParams) => ReactNode);
  text: string;
};

const TooltipWrapper = ({
  children,
  text,
}: TooltipWrapperProps): ReactElement => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useDebouncedState(false, 460);
  const toggle = useCallback(
    (open) => {
      setOpen(open);

      if (open) {
        setOpen.flush();
      }
    },
    [setOpen]
  );

  const id = useUniqueId();

  const anchorParams = useMemo(
    () => ({ ref: anchorRef, toggle, id }),
    [id, toggle]
  );
  const anchor = getAnchor(children, anchorParams);

  return (
    <>
      {anchor}

      {open && (
        <PositionAnimated
          anchor={anchorRef}
          placement='top-middle'
          margin={8}
          visible={AnimatedVisibility.UNHIDING}
        >
          <InnerTooltip
            id={id}
            aria-hidden='false'
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {text}
          </InnerTooltip>
        </PositionAnimated>
      )}
    </>
  );
};

export default TooltipWrapper;
