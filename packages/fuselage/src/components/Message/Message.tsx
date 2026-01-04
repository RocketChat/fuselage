import type { AllHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { prependClassName } from '../../helpers/prependClassName';

import MessageBlock from './MessageBlock';
import MessageBody from './MessageBody';
import MessageContainer from './MessageContainer';
import MessageContainerFixed from './MessageContainerFixed';
import { MessageDivider } from './MessageDivider';
import MessageHeader from './MessageHeader';
import MessageHighlight from './MessageHighlight';
import MessageLeftContainer from './MessageLeftContainer';
import { MessageMetrics } from './MessageMetrics';
import MessageName from './MessageName';
import MessageNameContainer from './MessageNameContainer';
import MessageRole from './MessageRole';
import MessageRoles from './MessageRoles';
import MessageTimestamp from './MessageTimestamp';
import { MessageToolbar } from './MessageToolbar';
import MessageUsername from './MessageUsername';

export type MessageProps = AllHTMLAttributes<HTMLDivElement> & {
	clickable?: boolean;
	sequential?: boolean;
	className?: string;
	isSelected?: boolean;
	isEditing?: boolean;
	isPending?: boolean;
	highlight?: boolean;
};

/**
 * Message component refactored for Accessibility (Issue #1819)
 */
const Message = Object.assign(
	forwardRef<HTMLDivElement, MessageProps>(function Message(
		{
			className,
			clickable,
			sequential,
			isSelected,
			isEditing,
			isPending,
			highlight,
			tabIndex,
			...props
		},
		ref,
	) {
		const isInteractive = clickable || props.onClick;

		return (
			<div
				ref={ref}
				// Accessibility: Defines the component as a discrete article in a list
				role='article'
				// Accessibility: Communicates the selection state to screen readers
				aria-selected={isSelected}
				aria-busy={isPending}
				// Keyboard: Ensures interactive messages are focusable
				tabIndex={isInteractive ? tabIndex ?? 0 : tabIndex}
				className={prependClassName(
					className,
					[
						'rcx-message',
						isInteractive && 'rcx-message--clickable',
						sequential && 'rcx-message--sequential',
						isSelected && 'rcx-message--selected',
						isEditing && 'rcx-message--editing',
						isPending && 'rcx-message--pending',
						highlight && 'rcx-message--highlight',
					]
						.filter(Boolean)
						.join(' '),
				)}
				{...props}
			/>
		);
	}),
	{
		Metrics: MessageMetrics,
		Toolbar: MessageToolbar,
		Container: MessageContainer,
		ContainerFixed: MessageContainerFixed,
		LeftContainer: MessageLeftContainer,
		Header: MessageHeader,
		Body: MessageBody,
		Block: MessageBlock,
		Timestamp: MessageTimestamp,
		NameContainer: MessageNameContainer,
		Name: MessageName,
		Username: MessageUsername,
		Roles: MessageRoles,
		Role: MessageRole,
		Divider: MessageDivider,
		Highlight: MessageHighlight,
	},
);

export default Message;