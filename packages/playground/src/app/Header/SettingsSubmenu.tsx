import { LabeledInputSwitch } from '@paritytech/components/';
import { ReactElement, useContext } from 'react';
import { AppContext } from '~/context/app/';
import { Dispatch, State } from '~/context/app/reducer';

export const SettingsSubmenu = (): ReactElement => {
  const [state, dispatch]: [State, Dispatch] = useContext(AppContext);

  return (
    <div className="mr-8 w-44">
      <LabeledInputSwitch
        label={'Dark Mode'}
        checked={state.darkmode}
        onChange={() => dispatch({ type: 'SET_DARKMODE', payload: !state.darkmode })}
        data-testid="darkModeSwitch"
      />

      <LabeledInputSwitch
        label={'Minimap'}
        checked={state.minimap}
        onChange={() => dispatch({ type: 'SET_MINIMAP', payload: !state.minimap })}
        data-testid="minimapSwitch"
      />

      <LabeledInputSwitch
        label={'Numbering'}
        checked={state.numbering}
        onChange={() => dispatch({ type: 'SET_NUMBERING', payload: !state.numbering })}
        data-testid="numberingSwitch"
      />
    </div>
  );
};
