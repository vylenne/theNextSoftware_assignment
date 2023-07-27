export type TableDayData = {
  dayId: string;
  tills: TableTill[]
}

export type TableTill = {
  tillId: string;
  tillContent: TableTillContent | null;
}

export type TableTillContent = {
  finallTill: number;
  openingTill: number;
  paymentTotal: number;
  revenueTotal: number;
  startingTill: number;
}

export type TotalsSummary = {
  startingTillSum: number;
  openingTillSum: number;
  revenueTotalSum: number;
  paymentTotalSum: number;
  finallTillSum: number
}