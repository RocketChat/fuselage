import { useTheme } from 'tamagui';

import WithErrorWrapper from '../../helpers/WithErrorWrapper';

import { FieldContext } from './Field';

export type FieldLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
  [key: string]: any;
};

const FieldLinkInner = ({ style, ...props }: FieldLinkProps) => {
  const theme = useTheme();

  return (
    <a
      target='_blank'
      className='rcx-box rcx-box--full'
      style={{
        display: 'block',
        // c1 font scale
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '16px',
        letterSpacing: 0,
        marginBlock: 2,
        color: theme.fontInfo.get(),
        ...style,
      }}
      {...props}
    />
  );
};

const FieldLink = (props: FieldLinkProps) => {
  const component = <FieldLinkInner {...props} />;

  if (process.env['NODE_ENV'] === 'development') {
    return (
      <WithErrorWrapper
        context={FieldContext}
        parentComponent='Field'
        componentName={FieldLink.name}
      >
        {component}
      </WithErrorWrapper>
    );
  }

  return component;
};

export default FieldLink;
