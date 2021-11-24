import { ReactElement, MouseEvent } from 'react';

export type ButtonProps = {
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: (
    e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void | Promise<void> | null;
  testId?: string;
  disabled?: boolean;
  loading?: boolean;
};

export const ButtonWithIcon = ({
  label,
  Icon,
  onClick,
  testId,
  disabled,
  loading,
}: ButtonProps): ReactElement => {
  const disabledClasses =
    disabled || loading ? 'cursor-not-allowed text-gray-600 bg-elevation' : '';

  const IconOfState = (): ReactElement => {
    if (loading)
      return (
        <i className="pi pi-spinner animate-spin mt-1.5 mr-1.5" data-testid={'icon-loading'} />
      );

    if (disabled) return <i className="pi pi-ban mt-1.5 mr-1.5" data-testid={'icon-disabled'} />;

    return <Icon className={'mt-1.5 mr-1.5'} data-testid={testId} />;
  };

  return (
    <button
      disabled={disabled || loading}
      className={`${disabledClasses} dark:hover:bg-elevation hover:bg-gray-200 py-1 px-3 mr-1 rounded text-lg flex`}
      onClick={(e?) => onClick(e)}
    >
      <IconOfState />
      {label}
    </button>
  );
};
