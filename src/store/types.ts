export type RawDaysData = TillRawData[];

export type TillRawData = {
  [key: string]: TillContentRawData
}

export type TillContentRawData = {
  startingTill: number,
  addedToTill: number,
  revenue: Array<{ amount: number }>,
  payments: Array<{ amount: number }>,
  closingTill: number
}