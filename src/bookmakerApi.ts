export interface OlimpBet {
  deleted: boolean;
  event_name: string;
  value: number;
  new_max_bet: number;
}

interface OlimpBetslip {
  [key: string]: OlimpBet;
}

declare global {
  const betslip: OlimpBetslip;

  interface GermesData {
    bookmakerName: string;
    minimumStake: number;
    maximumStake: number;
    doStakeTime: Date;
    betProcessingStep: string;
    betProcessingAdditionalInfo: string;
    betProcessingTimeout: number;
    stakeDisabled: boolean;
    stopBetProcessing: () => void;
  }

  interface Window {
    consoleCopy: Console;
    germesData: GermesData;
  }
}

export const clearGermesData = (): void => {
  window.germesData = {
    bookmakerName: 'OlimpCom',
    minimumStake: undefined,
    maximumStake: undefined,
    doStakeTime: undefined,
    betProcessingStep: undefined,
    betProcessingAdditionalInfo: undefined,
    betProcessingTimeout: 50000,
    stakeDisabled: undefined,
    stopBetProcessing: () => {
      window.germesData.betProcessingStep = 'error';
      window.germesData.stakeDisabled = true;
    },
  };
};

export default {};
