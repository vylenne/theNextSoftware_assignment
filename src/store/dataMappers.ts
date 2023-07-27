import { TableDayData, TableTill } from "../types";
import { RawDaysData, TillContentRawData, TillRawData } from "./types";

export function dataMapper(rawData: RawDaysData): TableDayData[] {
  return Object.entries(rawData).reduce((acc: TableDayData[], entry) => {
    const tableRow: TableDayData = {
      dayId: entry[0],
      tills: daysDataMapper(entry[1]),
    }
    acc.push(tableRow);
    return acc;
  }, []);
}

export function daysDataMapper(tillRawData: TillRawData) {
  let result: TableTill[] = [];
  if (tillRawData) {
    result = Object.entries(tillRawData)
      .reduce((acc: TableTill[], entry) => {
        const tableRow = {
          tillId: entry[0],
          tillContent: calculateTillContent(entry[1]),
        }
        acc.push(tableRow);
        return acc;
      }, [])
  }
  return result;
}

function calculateTillContent(tillContentRawData: TillContentRawData) {
  let result = null;
  if (tillContentRawData) {
    result = {
      startingTill: tillContentRawData.startingTill,
      openingTill: tillContentRawData.startingTill + tillContentRawData.addedToTill,
      revenueTotal: tillContentRawData.revenue.reduce((acc, item) => acc + item.amount, 0),
      paymentTotal: tillContentRawData.payments.reduce((acc, item) => acc + item.amount, 0),
      finallTill: tillContentRawData.closingTill,
    }
  }
  return result;
}