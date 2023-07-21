/* eslint-disable @typescript-eslint/no-use-before-define */
import type { Node } from '@react-types/shared';
import React, { useRef } from 'react';
import type { AriaListBoxOptions } from 'react-aria';
import { useListBox, useListBoxSection, useOption } from 'react-aria';
import type { ListState } from 'react-stately';

import Option from '../Option';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLDivElement>;
  state: ListState<unknown>;
}

interface SectionProps {
  section: Node<unknown>;
  state: ListState<unknown>;
}

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export function ListBox(props: ListBoxProps) {
  const ref = useRef(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <div {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <OptionAria key={item.key} item={item} state={state} />
        )
      )}
    </div>
  );
}

function ListBoxSection({ section, state }: SectionProps) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    'heading': section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      <li {...itemProps} className='pt-2'>
        {section.rendered && (
          <span
            {...headingProps}
            className='text-xs font-bold uppercase text-gray-500 mx-3'
          >
            {section.rendered}
          </span>
        )}
        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <OptionAria key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

function OptionAria({ item, state }: OptionProps) {
  const ref = React.useRef<HTMLLIElement>(null);
  const { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  return (
    <Option
      ref={ref}
      disabled={isDisabled}
      selected={isSelected}
      focus={isFocused}
      key={item.key}
      label={item.rendered}
      {...optionProps}
    >
      {item.rendered}
    </Option>
  );
}
