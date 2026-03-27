import { useToggle } from '@rocket.chat/fuselage-hooks';
import {
  useId,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { styled } from 'tamagui';

import { RcxInteractive, RcxText, RcxView } from '../../primitives';
import { Chevron } from '../Chevron';

const AccordionItemFrame = styled(RcxView, {
  name: 'AccordionItem',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
});

const AccordionItemBar = styled(RcxInteractive, {
  name: 'AccordionItemBar',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  role: 'button',

  // min-height: 2 * 32 + 24 = 88px
  minHeight: 88,
  // padding: (32 - 1px border) (8 - 1px border) => 31px 7px
  paddingBlock: 31,
  paddingInline: 7,

  textAlign: 'left',

  color: '$fontTitlesLabels',

  borderWidth: 1,
  borderStyle: 'solid',
  borderBlockStartColor: '$strokeExtraLight',
  borderBlockEndColor: 'transparent',
  borderInlineColor: 'transparent',

  hoverStyle: {
    backgroundColor: '$surfaceTint',
  },

  focusVisibleStyle: {
    borderColor: '$strokeHighlight',
    boxShadow: '0 0 0 2px var(--strokeExtraLightHighlight)',
  },

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        color: '$fontDisabled',
        backgroundColor: '$surfaceDisabled',
        hoverStyle: {
          backgroundColor: '$surfaceDisabled',
        },
      },
    },
  } as const,
});

const AccordionItemTitle = styled(RcxText, {
  name: 'AccordionItemTitle',
  display: 'block',
  flexGrow: 1,

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  fontFamily: '$body',
  fontSize: '$h4',
  fontWeight: '$h4',
  lineHeight: '$h4',
  letterSpacing: '$h4',

  color: 'inherit',
});

const AccordionItemPanel = styled(RcxView, {
  name: 'AccordionItemPanel',
  visibility: 'hidden',
  overflow: 'hidden',
  height: 0,
  paddingBlock: 0,
  paddingInline: '$x8',

  variants: {
    expanded: {
      true: {
        visibility: 'visible',
        height: 'auto',
        paddingBlock: '$x32',
        paddingInline: '$x8',
      },
    },
  } as const,
});

export type AccordionItemProps = {
  children?: ReactNode;
  className?: string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  tabIndex?: number;
  title: ReactNode;
  noncollapsible?: boolean;
};

const AccordionItem = ({
  children,
  defaultExpanded,
  disabled = false,
  expanded: propExpanded,
  tabIndex = 0,
  title,
  noncollapsible = !title,
  ...props
}: AccordionItemProps) => {
  const [stateExpanded, toggleStateExpanded] = useToggle(defaultExpanded);
  const expanded = propExpanded || stateExpanded;

  const panelExpanded = noncollapsible || expanded;

  const titleId = useId();
  const panelId = useId();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) {
      return;
    }
    e.currentTarget?.blur();
    toggleStateExpanded();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (disabled || event.currentTarget !== event.target) {
      return;
    }

    if (![' ', 'Enter'].includes(event.key)) {
      return;
    }

    event.preventDefault();

    if (event.repeat) {
      return;
    }

    toggleStateExpanded();
  };

  const collapsibleProps = {
    'aria-controls': panelId,
    'aria-expanded': expanded ? 'true' : 'false',
    'tabIndex': !disabled ? tabIndex : undefined,
    'onClick': handleClick,
    'onKeyDown': handleKeyDown,
  } as const;

  const nonCollapsibleProps = {
    'aria-disabled': 'true',
    'aria-expanded': 'true',
    'aria-labelledby': titleId,
  } as const;

  const barProps = noncollapsible ? nonCollapsibleProps : collapsibleProps;

  return (
    <AccordionItemFrame tag='section' {...props}>
      {title && (
        <AccordionItemBar
          isDisabled={disabled || undefined}
          {...barProps}
        >
          <AccordionItemTitle tag='h2' id={titleId}>
            {title}
          </AccordionItemTitle>
          {!noncollapsible && <Chevron size='x24' up={expanded} />}
        </AccordionItemBar>
      )}
      <AccordionItemPanel
        expanded={panelExpanded || undefined}
        id={panelId}
      >
        {children}
      </AccordionItemPanel>
    </AccordionItemFrame>
  );
};

export default AccordionItem;
