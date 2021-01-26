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
}

export default {};
