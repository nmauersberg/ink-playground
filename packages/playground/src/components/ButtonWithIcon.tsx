import { MouseEvent, ReactElement } from 'react';

type ButtonProps = {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: (e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void | null;
};

export const ButtonWithIcon = ({ label, Icon, onClick }: ButtonProps): ReactElement => {
  return (
    <button className="navbarButton" onClick={(e?) => onClick(e)}>
      <Icon className="mt-1.5 mr-1.5" />
      {label}
    </button>
  );
};
