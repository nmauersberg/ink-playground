interface Props {
  message: Message;
  mIndex: number;
}

export type Message = {
  id: number;
  prompt: Prompt;
  status: Status;
  content?: string;
  severity: Severity;
};

export type Prompt = 'COMPILE' | 'SYSTEM' | 'GIST';

export type Status = 'IN_PROGRESS' | 'DONE' | 'ERROR' | 'INFO';

export enum Severity {
  INFO = 'Info',
  DONE = 'Success',
  ERROR = 'Error',
  IN_PROGRESS = 'InProgress',
}

export type SeverityColors = {
  Info: string;
  Success: string;
  Error: string;
  InProgress: string;
};

const severityColors: SeverityColors = {
  Info: 'text-info',
  Success: 'text-success',
  Error: 'text-error',
  InProgress: 'text-in-progress',
};

const selectIcon = (status: Status): string => {
  switch (status) {
    case 'IN_PROGRESS':
      return 'pi pi-spinner animate-spin';
    case 'DONE':
      return 'pi pi-check';
    case 'ERROR':
      return 'pi pi-times';
    default:
      return 'pi pi-info-circle';
  }
};

export const ConsoleMessage = ({ message: m, mIndex }: Props) => {
  const severity: Severity = m.severity;
  const icon: string = selectIcon(m.status);

  return (
    <>
      <div className="flex mb-1 text-sm subpixel-antialiased" data-testid={`message-${mIndex}`}>
        <div className="w-6">
          <i
            className={`${icon} ${severityColors[severity]} pt-px`}
            data-testid={`icon-${mIndex}`}
          />
        </div>
        <span className={severityColors[severity]}>{m.prompt}:</span>
        <span className="pl-2">{m?.content}</span>
      </div>
    </>
  );
};
