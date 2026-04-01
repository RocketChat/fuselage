import { useMediaQuery } from '@rocket.chat/fuselage-hooks';
import type { ComponentPropsWithoutRef, Dispatch, ReactNode, SetStateAction } from 'react';
import { useMemo } from 'react';
import { styled } from '@tamagui/core';

import { RcxInteractiveText, RcxText, RcxView } from '../../primitives';
import { Chevron } from '../Chevron';

type ItemsPerPage = 25 | 50 | 100;

// --- Styled components ---

const PaginationNav = styled(RcxView, {
  name: 'Pagination',
  role: 'navigation',
  display: 'flex',
  flexDirection: 'column-reverse',
  flexWrap: 'nowrap',
  alignItems: 'center',
  paddingBlock: 12,
  paddingInline: 24,
});

const PaginationDividerLine = styled(RcxView, {
  name: 'PaginationDividerLine',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 1,
  borderRadius: '$x2',
  backgroundColor: '$strokeExtraLight',
});

const PaginationLeft = styled(RcxView, {
  name: 'PaginationLeft',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 1,
  justifyContent: 'center',
  marginInlineStart: 0,
});

const PaginationRight = styled(RcxView, {
  name: 'PaginationRight',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 1,
  marginInlineStart: 0,
});

const PaginationLabel = styled(RcxText, {
  name: 'PaginationLabel',
  display: 'block',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  color: '$fontSecondaryInfo',
  overflowWrap: 'normal',
});

const PaginationList = styled(RcxView, {
  name: 'PaginationList',
  role: 'list',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  marginInline: 4,
});

const PaginationListItem = styled(RcxText, {
  name: 'PaginationListItem',
  role: 'listitem',
  display: 'flex',
  marginInline: 2,
  padding: 4,
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  color: '$fontSecondaryInfo',
  overflowWrap: 'normal',
});

const PaginationLink = styled(RcxInteractiveText, {
  name: 'PaginationLink',
  role: 'button',
  display: 'inline-flex',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  color: '$fontInfo',
  backgroundColor: 'transparent',
  borderWidth: 0,
  overflowWrap: 'normal',

  hoverStyle: {
    textDecorationLine: 'underline',
  },

  focusVisibleStyle: {
    textDecorationLine: 'underline',
  },

  disabledStyle: {
    fontWeight: '$c2',
    color: '$fontDefault',
    cursor: 'default',
    textDecorationLine: 'none',
  },
});

const PaginationNavButton = styled(RcxInteractiveText, {
  name: 'PaginationNavButton',
  role: 'button',
  display: 'inline-flex',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  color: '$fontSecondaryInfo',
  backgroundColor: 'transparent',
  borderWidth: 0,
  overflowWrap: 'normal',

  disabledStyle: {
    color: '$fontSecondaryInfo',
    cursor: 'not-allowed',
  },
});

// --- Component ---

export type PaginationProps = ComponentPropsWithoutRef<typeof PaginationNav> & {
  count: number;
  current?: number;
  divider?: boolean;
  itemsPerPage?: ItemsPerPage;
  itemsPerPageLabel?: (context: {
    count: number;
    current: number;
    itemsPerPage: ItemsPerPage;
  }) => string;
  showingResultsLabel?: (context: {
    count: number;
    current: number;
    itemsPerPage: ItemsPerPage;
  }) => string;
  onSetCurrent?: Dispatch<SetStateAction<number>>;
  onSetItemsPerPage?: Dispatch<SetStateAction<ItemsPerPage>>;
  children?: ReactNode;
};

const defaultItemsPerPageLabel = () => 'Items per page:';

const defaultShowingResultsLabel = ({
  count,
  current,
  itemsPerPage,
}: {
  count: number;
  current: number;
  itemsPerPage: ItemsPerPage;
}) =>
  `Showing results ${current + 1} - ${Math.min(
    current + itemsPerPage,
    count,
  )} of ${count}`;

const itemsPerPageOptions = [25, 50, 100] as ItemsPerPage[];

const Pagination = ({
  count,
  current = 0,
  itemsPerPage = 25,
  itemsPerPageLabel = defaultItemsPerPageLabel,
  showingResultsLabel = defaultShowingResultsLabel,
  onSetItemsPerPage,
  onSetCurrent,
  divider,
  ...props
}: PaginationProps) => {
  const isSm = useMediaQuery('(min-width: 600px)');
  const isMd = useMediaQuery('(min-width: 768px)');

  const hasItemsPerPageSelection = itemsPerPageOptions.length > 1;
  const currentPage = Math.floor(current / itemsPerPage);
  const pages = Math.ceil(count / itemsPerPage);
  const displayedPages = useMemo(() => {
    if (pages <= 7) {
      return Array.from({ length: pages }, (_, i) => i);
    }

    if (currentPage < 5) {
      return [0, 1, 2, 3, 4, '⋯', pages - 1];
    }

    if (currentPage > pages - 5) {
      return [0, '⋯', pages - 5, pages - 4, pages - 3, pages - 2, pages - 1];
    }

    return [
      0,
      '⋯',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '⋯',
      pages - 1,
    ];
  }, [pages, currentPage]);

  const renderingContext = { count, pages, current, currentPage, itemsPerPage };

  const handleSetItemsPerPageLinkClick =
    (itemsPerPageOption: ItemsPerPage) => () => {
      onSetItemsPerPage?.(itemsPerPageOption);
    };

  const handleSetPageLinkClick = (page: number) => () => {
    onSetCurrent?.(page * itemsPerPage);
  };

  // Responsive direction: column-reverse default, column at sm, row at md
  const flexDirection = isMd ? 'row' : isSm ? 'column' : 'column-reverse';

  // Responsive left section margin
  const leftMarginInlineStart = isSm ? 'auto' : 0;
  const leftMarginInlineEnd = isMd ? 'auto' : undefined;

  // Responsive right section
  const rightFlexDirection = isSm ? 'row' : 'column';
  const rightMarginInlineStart = isSm ? 'auto' : 0;

  return (
    <PaginationNav
      position={divider ? 'relative' : undefined}
      flexDirection={flexDirection as any}
      {...props}
    >
      {divider && <PaginationDividerLine />}
      {hasItemsPerPageSelection && (
        <PaginationLeft
          marginInlineStart={leftMarginInlineStart}
          marginInlineEnd={leftMarginInlineEnd}
        >
          <PaginationLabel>
            {itemsPerPageLabel(renderingContext)}
          </PaginationLabel>
          <PaginationList>
            {itemsPerPageOptions.map((itemsPerPageOption) => (
              <PaginationListItem key={itemsPerPageOption}>
                <PaginationLink
                  tabIndex={itemsPerPage === itemsPerPageOption ? -1 : 0}
                  disabled={itemsPerPage === itemsPerPageOption}
                  onPress={handleSetItemsPerPageLinkClick(itemsPerPageOption)}
                >
                  {itemsPerPageOption}
                </PaginationLink>
              </PaginationListItem>
            ))}
          </PaginationList>
        </PaginationLeft>
      )}
      <PaginationRight
        flexDirection={rightFlexDirection as any}
        marginInlineStart={rightMarginInlineStart}
      >
        <PaginationLabel>
          {showingResultsLabel(renderingContext)}
        </PaginationLabel>
        <PaginationList>
          <PaginationListItem>
            <PaginationNavButton
              disabled={currentPage === 0}
              onPress={handleSetPageLinkClick(currentPage - 1)}
            >
              <Chevron left size='x16' />
            </PaginationNavButton>
          </PaginationListItem>
          {displayedPages.map((page, i) => (
            <PaginationListItem key={i}>
              {page === '⋯' ? (
                '⋯'
              ) : (
                <PaginationLink
                  disabled={currentPage === page}
                  onPress={handleSetPageLinkClick(page as number)}
                >
                  {(page as number) + 1}
                </PaginationLink>
              )}
            </PaginationListItem>
          ))}
          <PaginationListItem>
            <PaginationNavButton
              disabled={currentPage === pages - 1}
              onPress={handleSetPageLinkClick(currentPage + 1)}
            >
              <Chevron right size='x16' />
            </PaginationNavButton>
          </PaginationListItem>
        </PaginationList>
      </PaginationRight>
    </PaginationNav>
  );
};

export default Pagination;
