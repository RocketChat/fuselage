import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { createStyledComponent } from '../../styles';
import { Chevron } from '../Chevron';

const Container = createStyledComponent('rcx-pagination', 'nav');
const Left = createStyledComponent('rcx-pagination__left', 'div');
const Right = createStyledComponent('rcx-pagination__right', 'div');
const Label = createStyledComponent('rcx-pagination__label', 'span');
const List = createStyledComponent('rcx-pagination__list', 'ol');
const ListItem = createStyledComponent('rcx-pagination__list-item', 'li');
const Link = createStyledComponent('rcx-pagination__link', 'button');
const BackLink = createStyledComponent('rcx-pagination__back', 'button');
const ForwardLink = createStyledComponent('rcx-pagination__forward', 'button');

const defaultItemsPerPageLabel = () => 'Items per page:';

const defaultShowingResultsLabel = ({ count, current, itemsPerPage }) =>
  `Showing results ${ current + 1 } - ${ Math.min(current + itemsPerPage, count) } of ${ count }`;

export const Pagination = React.forwardRef(function Pagination({
  count,
  current = 0,
  itemsPerPage = 25,
  itemsPerPageLabel = defaultItemsPerPageLabel,
  showingResultsLabel = defaultShowingResultsLabel,
  onSetItemsPerPage,
  onSetCurrent,
  ...props
}, ref) {
  const itemsPerPageOptions = [25, 50, 100].filter((i) => i <= count);
  const hasItemsPerPageSelection = itemsPerPageOptions.length > 1;
  const currentPage = Math.floor(current / itemsPerPage);
  const pages = Math.ceil(count / itemsPerPage);
  const displayedPages = useMemo(() => {
    if (pages <= 7) {
      // 0 1 2 3 4 5 6
      return Array.from({ length: pages }, (_, i) => i);
    }

    if (currentPage < 5) {
      // 0 1 2 3 4 ... N
      return [0, 1, 2, 3, 4, '⋯', pages - 1];
    }

    if (currentPage > pages - 5) {
      // 0 ... N-4 N-3 N-2 N-1 N
      return [0, '⋯', pages - 5, pages - 4, pages - 3, pages - 2, pages - 1];
    }

    // 0 ... x-1 x x-2 ... N
    return [0, '⋯', currentPage - 1, currentPage, currentPage + 1, '⋯', pages - 1];
  }, [pages, currentPage]);

  const renderingContext = { count, pages, current, currentPage, itemsPerPage };

  const handleSetItemsPerPageLinkClick = (itemsPerPageOption) => () => {
    onSetItemsPerPage && onSetItemsPerPage(itemsPerPageOption);
  };

  const handleSetPageLinkClick = (page) => () => {
    onSetCurrent && onSetCurrent(page * itemsPerPage);
  };

  return <Container ref={ref} {...props}>
    {hasItemsPerPageSelection && (
      <Left>
        <Label>{itemsPerPageLabel(renderingContext)}</Label>
        <List>
          {itemsPerPageOptions.map((itemsPerPageOption) =>
            <ListItem key={itemsPerPageOption}>
              <Link disabled={itemsPerPage === itemsPerPageOption} onClick={handleSetItemsPerPageLinkClick(itemsPerPageOption)}>
                {itemsPerPageOption}
              </Link>
            </ListItem>,
          )}
        </List>
      </Left>
    )}
    <Right>
      <Label>{showingResultsLabel(renderingContext)}</Label>
      <List>
        <ListItem>
          <BackLink disabled={currentPage === 0} onClick={handleSetPageLinkClick(currentPage - 1)}>
            <Chevron left size={16} />
          </BackLink>
        </ListItem>
        {displayedPages.map((page, i) => (
          <ListItem key={i}>
            {page === '⋯'
              ? '⋯'
              : <Link disabled={currentPage === page} onClick={handleSetPageLinkClick(page)}>{page + 1}</Link>}
          </ListItem>
        ))}
        <ListItem>
          <ForwardLink disabled={currentPage === pages - 1} onClick={handleSetPageLinkClick(currentPage + 1)}>
            <Chevron right size={16} />
          </ForwardLink>
        </ListItem>
      </List>
    </Right>
  </Container>;
});

Pagination.defaultProps = {
  current: 0,
  itemsPerPage: 25,
  itemsPerPageLabel: defaultItemsPerPageLabel,
  showingResultsLabel: defaultShowingResultsLabel,
};

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  current: PropTypes.number,
  itemsPerPage: PropTypes.oneOf([25, 50, 100]),
  invisible: PropTypes.bool,
};
