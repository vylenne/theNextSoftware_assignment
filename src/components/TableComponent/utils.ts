import { TableTill, TotalsSummary } from "../../types";

export function calculateDayTotals(tills: TableTill[]): TotalsSummary {
  return tills.reduce(
    (acc: TotalsSummary, till) => {
      if (till.tillContent) {
        return {
          startingTillSum: acc.startingTillSum + till.tillContent.startingTill,
          openingTillSum: acc.openingTillSum + till.tillContent.openingTill,
          revenueTotalSum: acc.revenueTotalSum + till.tillContent.revenueTotal,
          paymentTotalSum: acc.paymentTotalSum + till.tillContent.paymentTotal,
          finallTillSum: acc.finallTillSum + till.tillContent.finallTill,
        }
      } else {
        return acc
      }
    }, { startingTillSum: 0, openingTillSum: 0, revenueTotalSum: 0, paymentTotalSum: 0, finallTillSum: 0 }
  )
}