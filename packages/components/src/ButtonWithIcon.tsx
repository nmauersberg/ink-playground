import { ReactElement, MouseEvent } from 'react';
import { defStyles, classnames } from './style-utils';

export type ButtonProps = {
  label: string;
  Icon: SvgrComponent;
  onClick: (e?: ReactMouseEvent) => void | null;
  testId?: string;
};

export type SvgrComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export type ReactMouseEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

export const ButtonWithIcon = ({ label, Icon, onClick, testId }: ButtonProps): ReactElement => {
  const style = defStyles({
    button: [
      'dark:hover:bg-elevation',
      'hover:bg-gray-200',
      'py-1',
      'px-3',
      'mr-1',
      'rounded',
      'text-lg',
      'flex',
    ],
    icon: ['mt-1.5', 'mr-1.5'],
  });

  return (
    <button className={classnames(style.button)} onClick={(e?) => onClick(e)}>
      <Icon className={classnames(style.icon)} data-testid={testId} />
      {label}
    </button>
  );
};
