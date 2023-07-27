import { defineStore } from 'pinia';
import { dataMapper } from "./dataMappers";
import { RawDaysData } from "./types";
import { TableDayData } from "../types";

export const useDaysStore = defineStore('days', {
  state: (): { days: RawDaysData } => ({
    days: JSON.parse(`
{
  "2023-05-01": null,
  "2023-05-02": {
    "6": {
      "turnoverId": 517,
      "meta": {
        "date": "2023-05-02",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "in-progress",
        "booked": false,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "addedToTill": 0,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 11662,
          "groupId": -21,
          "amount": 0,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": null,
          "paymentId": -20,
          "amount": 222,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": {
            "type": "tab",
            "items": [
              {
                "id": 97,
                "amount": 222,
                "invoiced": false,
                "includesTax": true,
                "description": "Breakfast",
                "attachment": null,
                "lines": [
                  {
                    "id": 96,
                    "amount": 222,
                    "description": "Test",
                    "tax": {
                      "id": null,
                      "companyId": null,
                      "taxId": null,
                      "taxName": null,
                      "taxFactor": null
                    },
                    "ledgernumber": {
                      "id": null,
                      "companyId": null,
                      "ledgernumberId": null,
                      "ledgernumberName": null
                    }
                  }
                ],
                "customer": {
                  "id": null,
                  "companyId": null,
                  "customerId": null,
                  "customerName": null
                }
              }
            ]
          }
        },
        {
          "id": 11660,
          "paymentId": -6,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [],
      "totalPayments": 222,
      "totalRevenue": 0,
      "cash": 0,
      "paidFromTill": 0,
      "startingTill": 0,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": 222,
      "closingTill": 0
    },
    "20": null
  },
  "2023-05-03": {
    "6": {
      "turnoverId": 523,
      "meta": {
        "date": "2023-05-03",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "in-progress",
        "booked": false,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "addedToTill": 0,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 11852,
          "groupId": 15,
          "amount": 0,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11853,
          "groupId": 16,
          "amount": 0,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11818,
          "groupId": -21,
          "amount": 0,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": 11816,
          "paymentId": -6,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 11939,
          "paymentId": 38,
          "amount": 0,
          "name": "Pin",
          "bookingType": "debit",
          "ledger": {
            "typeId": 38,
            "debit": "3600",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 11817,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [
        {
          "id": 11819,
          "noSaleId": 43,
          "amount": 0,
          "name": "Eigen verbuik",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 43,
            "debit": "0860",
            "credit": "9200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 11820,
          "noSaleId": 44,
          "amount": 0,
          "name": "Representatie",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 44,
            "debit": "7200",
            "credit": "7200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 11821,
          "noSaleId": 45,
          "amount": 0,
          "name": "Breuk",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 45,
            "debit": "7400",
            "credit": "7400",
            "type": "extra",
            "code": null
          }
        }
      ],
      "totalPayments": 0,
      "totalRevenue": 0,
      "cash": 0,
      "paidFromTill": 0,
      "startingTill": 0,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": 0,
      "closingTill": 0
    },
    "20": null
  },
  "2023-05-04": {
    "6": {
      "turnoverId": 518,
      "meta": {
        "date": "2023-05-04",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "in-progress",
        "booked": false,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "addedToTill": 0,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 11669,
          "groupId": -21,
          "amount": 0,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": 11668,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 11667,
          "paymentId": -6,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [],
      "totalPayments": 0,
      "totalRevenue": 0,
      "cash": 0,
      "paidFromTill": 0,
      "startingTill": 0,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": 0,
      "closingTill": 0
    },
    "20": {
      "turnoverId": 545,
      "meta": {
        "date": "2023-05-04",
        "dateToBank": null,
        "registerId": 20,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "complete",
        "booked": false,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 123,
        "denominations": {
          "inGrams": false,
          "coin_0_01": 0,
          "coin_0_02": 0,
          "coin_0_05": 0,
          "coin_0_10": 0,
          "coin_0_20": 0,
          "coin_0_50": 0,
          "coin_1_00": 0,
          "coin_2_00": 0,
          "note_5": 0,
          "note_10": 0,
          "note_20": 0,
          "note_50": 0,
          "note_100": 0,
          "note_200": 0,
          "note_500": 0
        }
      },
      "addedToTill": 123,
      "moneyInTill": {
        "value": 123,
        "denominations": {
          "inGrams": false,
          "coin_0_01": 0,
          "coin_0_02": 0,
          "coin_0_05": 0,
          "coin_0_10": 0,
          "coin_0_20": 0,
          "coin_0_50": 0,
          "coin_1_00": 0,
          "coin_2_00": 0,
          "note_5": 0,
          "note_10": 0,
          "note_20": 0,
          "note_50": 0,
          "note_100": 0,
          "note_200": 0,
          "note_500": 0
        }
      },
      "deposited": 122,
      "revenue": [
        {
          "id": 12637,
          "groupId": -21,
          "amount": 0,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 12652,
          "groupId": 15,
          "amount": 0,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 12653,
          "groupId": 16,
          "amount": 0,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": 12635,
          "paymentId": -6,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12636,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12644,
          "paymentId": 150,
          "amount": 123,
          "name": "giftCard redeem value",
          "bookingType": "debit",
          "ledger": {
            "typeId": 150,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12642,
          "paymentId": 38,
          "amount": 0,
          "name": "Pin",
          "bookingType": "debit",
          "ledger": {
            "typeId": 38,
            "debit": "3600",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12643,
          "paymentId": 149,
          "amount": 123,
          "name": "Pin Nieuw",
          "bookingType": "debit",
          "ledger": {
            "typeId": 149,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12645,
          "paymentId": 151,
          "amount": 0,
          "name": "giftCard add value",
          "bookingType": "debit",
          "ledger": {
            "typeId": 151,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12651,
          "paymentId": 157,
          "amount": 0,
          "name": "Test payment",
          "bookingType": "debit",
          "ledger": {
            "typeId": 157,
            "debit": "8210",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12646,
          "paymentId": 152,
          "amount": 0,
          "name": "Contant",
          "bookingType": "debit",
          "ledger": {
            "typeId": 152,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12647,
          "paymentId": 153,
          "amount": 0,
          "name": "Pin defect",
          "bookingType": "debit",
          "ledger": {
            "typeId": 153,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12648,
          "paymentId": 154,
          "amount": 0,
          "name": "Fooi",
          "bookingType": "debit",
          "ledger": {
            "typeId": 154,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12649,
          "paymentId": 155,
          "amount": 0,
          "name": "Kadootje",
          "bookingType": "debit",
          "ledger": {
            "typeId": 155,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12650,
          "paymentId": 156,
          "amount": 0,
          "name": "eigen verbruik",
          "bookingType": "debit",
          "ledger": {
            "typeId": 156,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [
        {
          "id": 12638,
          "noSaleId": 43,
          "amount": 0,
          "name": "Eigen verbuik",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 43,
            "debit": "0860",
            "credit": "9200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12639,
          "noSaleId": 44,
          "amount": 123,
          "name": "Representatie",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 44,
            "debit": "7200",
            "credit": "7200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12640,
          "noSaleId": 45,
          "amount": 123,
          "name": "Breuk",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 45,
            "debit": "7400",
            "credit": "7400",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12641,
          "noSaleId": 88,
          "amount": 0,
          "name": "Extra",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 88,
            "debit": "4700",
            "credit": "4700",
            "type": "extra",
            "code": null
          }
        }
      ],
      "totalPayments": 369,
      "totalRevenue": 0,
      "cash": -122,
      "paidFromTill": 0,
      "startingTill": 246,
      "vouchersSold": 0,
      "vouchersRedeemed": 123,
      "tillDifference": 246,
      "closingTill": 1
    }
  },
  "2023-05-05": null,
  "2023-05-06": null,
  "2023-05-07": null,
  "2023-05-08": null,
  "2023-05-09": {
    "6": {
      "turnoverId": 519,
      "meta": {
        "date": "2023-05-09",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "confirmed",
        "booked": true,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 123,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "addedToTill": 0,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 11676,
          "groupId": -21,
          "amount": 123,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 123,
          "amountExclTax": 123,
          "specification": null
        },
        {
          "id": 11694,
          "groupId": 378,
          "amount": 0,
          "name": "FLES WIJN WIT",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 378,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11693,
          "groupId": 377,
          "amount": 0,
          "name": "DESSERT",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 377,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11692,
          "groupId": 376,
          "amount": 0,
          "name": "STERKE DRANKEN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 376,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11683,
          "groupId": 367,
          "amount": 0,
          "name": "WIJNEN GLAS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 367,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11677,
          "groupId": 15,
          "amount": 123,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 148.82999999999998,
          "amountExclTax": 123,
          "specification": null
        },
        {
          "id": 11678,
          "groupId": 16,
          "amount": 0,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11679,
          "groupId": 363,
          "amount": 0,
          "name": "10. KOFFIE",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 363,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11680,
          "groupId": 364,
          "amount": 0,
          "name": "Condimenten",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 364,
            "debit": null,
            "credit": "0022",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11681,
          "groupId": 365,
          "amount": 0,
          "name": "LUNCH",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 365,
            "debit": null,
            "credit": "0030",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11682,
          "groupId": 366,
          "amount": 0,
          "name": "FRIS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 366,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11684,
          "groupId": 368,
          "amount": 0,
          "name": "BIEREN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 368,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11691,
          "groupId": 375,
          "amount": 0,
          "name": "FLES WIJN ROOD",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 375,
            "debit": null,
            "credit": "0024",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11685,
          "groupId": 369,
          "amount": 0,
          "name": "HOOFD",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 369,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11686,
          "groupId": 370,
          "amount": 0,
          "name": "Supplementen",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 370,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11687,
          "groupId": 371,
          "amount": 0,
          "name": "SNACKS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 371,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11688,
          "groupId": 372,
          "amount": 0,
          "name": "BIJ- GERECHTEN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 372,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11689,
          "groupId": 373,
          "amount": 0,
          "name": "COCKTAILS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 373,
            "debit": null,
            "credit": "0022",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11690,
          "groupId": 374,
          "amount": 0,
          "name": "VOOR",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 374,
            "debit": null,
            "credit": "0014",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": 11698,
          "paymentId": 38,
          "amount": 0,
          "name": "Pin",
          "bookingType": "debit",
          "ledger": {
            "typeId": 38,
            "debit": "3600",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 11675,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 11674,
          "paymentId": -6,
          "amount": 100,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [
        {
          "id": 11695,
          "noSaleId": 43,
          "amount": 123,
          "name": "Eigen verbuik",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 43,
            "debit": "0860",
            "credit": "9200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 11696,
          "noSaleId": 44,
          "amount": 123,
          "name": "Representatie",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 44,
            "debit": "7200",
            "credit": "7200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 11697,
          "noSaleId": 45,
          "amount": 0,
          "name": "Breuk",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 45,
            "debit": "7400",
            "credit": "7400",
            "type": "extra",
            "code": null
          }
        }
      ],
      "totalPayments": 100,
      "totalRevenue": 271.83,
      "cash": -123,
      "paidFromTill": 100,
      "startingTill": 123,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": -294.83,
      "closingTill": 0
    },
    "20": null
  },
  "2023-05-10": {
    "6": {
      "turnoverId": 520,
      "meta": {
        "date": "2023-05-10",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "confirmed",
        "booked": true,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 100,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "addedToTill": 0,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 11715,
          "groupId": -21,
          "amount": 200,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 200,
          "amountExclTax": 200,
          "specification": null
        },
        {
          "id": 11733,
          "groupId": 378,
          "amount": 0,
          "name": "FLES WIJN WIT",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 378,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11732,
          "groupId": 377,
          "amount": 0,
          "name": "DESSERT",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 377,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11731,
          "groupId": 376,
          "amount": 0,
          "name": "STERKE DRANKEN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 376,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11722,
          "groupId": 367,
          "amount": 0,
          "name": "WIJNEN GLAS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 367,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11716,
          "groupId": 15,
          "amount": 200,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 242,
          "amountExclTax": 200,
          "specification": null
        },
        {
          "id": 11717,
          "groupId": 16,
          "amount": 0,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11718,
          "groupId": 363,
          "amount": 0,
          "name": "10. KOFFIE",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 363,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11719,
          "groupId": 364,
          "amount": 0,
          "name": "Condimenten",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 364,
            "debit": null,
            "credit": "0022",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11720,
          "groupId": 365,
          "amount": 0,
          "name": "LUNCH",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 365,
            "debit": null,
            "credit": "0030",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11721,
          "groupId": 366,
          "amount": 0,
          "name": "FRIS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 366,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11723,
          "groupId": 368,
          "amount": 0,
          "name": "BIEREN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 368,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11730,
          "groupId": 375,
          "amount": 0,
          "name": "FLES WIJN ROOD",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 375,
            "debit": null,
            "credit": "0024",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11724,
          "groupId": 369,
          "amount": 0,
          "name": "HOOFD",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 369,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11725,
          "groupId": 370,
          "amount": 0,
          "name": "Supplementen",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 370,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11726,
          "groupId": 371,
          "amount": 0,
          "name": "SNACKS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 371,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11727,
          "groupId": 372,
          "amount": 0,
          "name": "BIJ- GERECHTEN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 372,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11728,
          "groupId": 373,
          "amount": 0,
          "name": "COCKTAILS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 373,
            "debit": null,
            "credit": "0022",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11729,
          "groupId": 374,
          "amount": 0,
          "name": "VOOR",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 374,
            "debit": null,
            "credit": "0014",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": null,
          "paymentId": -6,
          "amount": 121,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": {
            "type": "receipt",
            "items": [
              {
                "id": 245,
                "amount": 100,
                "invoiced": false,
                "includesTax": false,
                "description": "Test",
                "attachment": null,
                "lines": [],
                "costType": {
                  "id": 9,
                  "name": "High",
                  "tax": {
                    "id": 30,
                    "factor": 0.21,
                    "ledger": {
                      "typeId": 30,
                      "debit": "2  ",
                      "credit": null,
                      "type": "tax",
                      "code": "2  "
                    }
                  },
                  "ledger": {
                    "typeId": 9,
                    "debit": "7400",
                    "credit": null,
                    "type": "receipt",
                    "code": null
                  }
                }
              }
            ]
          }
        },
        {
          "id": 11737,
          "paymentId": 38,
          "amount": 0,
          "name": "Pin",
          "bookingType": "debit",
          "ledger": {
            "typeId": 38,
            "debit": "3600",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 11714,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [
        {
          "id": 11734,
          "noSaleId": 43,
          "amount": 200,
          "name": "Eigen verbuik",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 43,
            "debit": "0860",
            "credit": "9200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 11735,
          "noSaleId": 44,
          "amount": 0,
          "name": "Representatie",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 44,
            "debit": "7200",
            "credit": "7200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 11736,
          "noSaleId": 45,
          "amount": 0,
          "name": "Breuk",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 45,
            "debit": "7400",
            "credit": "7400",
            "type": "extra",
            "code": null
          }
        }
      ],
      "totalPayments": 121,
      "totalRevenue": 442,
      "cash": -100,
      "paidFromTill": 121,
      "startingTill": 100,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": -421,
      "closingTill": 0
    },
    "20": null
  },
  "2023-05-11": {
    "6": {
      "turnoverId": 521,
      "meta": {
        "date": "2023-05-11",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "confirmed",
        "booked": true,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 200,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "addedToTill": 100,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 11754,
          "groupId": -21,
          "amount": 200,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 200,
          "amountExclTax": 200,
          "specification": null
        },
        {
          "id": 11772,
          "groupId": 378,
          "amount": 0,
          "name": "FLES WIJN WIT",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 378,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11771,
          "groupId": 377,
          "amount": 0,
          "name": "DESSERT",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 377,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11770,
          "groupId": 376,
          "amount": 0,
          "name": "STERKE DRANKEN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 376,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11761,
          "groupId": 367,
          "amount": 0,
          "name": "WIJNEN GLAS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 367,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11755,
          "groupId": 15,
          "amount": 100,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 121,
          "amountExclTax": 100,
          "specification": null
        },
        {
          "id": 11756,
          "groupId": 16,
          "amount": 0,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11757,
          "groupId": 363,
          "amount": 0,
          "name": "10. KOFFIE",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 363,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11758,
          "groupId": 364,
          "amount": 0,
          "name": "Condimenten",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 364,
            "debit": null,
            "credit": "0022",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11759,
          "groupId": 365,
          "amount": 0,
          "name": "LUNCH",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 365,
            "debit": null,
            "credit": "0030",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11760,
          "groupId": 366,
          "amount": 0,
          "name": "FRIS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 366,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11762,
          "groupId": 368,
          "amount": 0,
          "name": "BIEREN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 368,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11769,
          "groupId": 375,
          "amount": 0,
          "name": "FLES WIJN ROOD",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 375,
            "debit": null,
            "credit": "0024",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11763,
          "groupId": 369,
          "amount": 0,
          "name": "HOOFD",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 369,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11764,
          "groupId": 370,
          "amount": 0,
          "name": "Supplementen",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 370,
            "debit": null,
            "credit": "0020",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11765,
          "groupId": 371,
          "amount": 0,
          "name": "SNACKS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 371,
            "debit": null,
            "credit": "0002",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11766,
          "groupId": 372,
          "amount": 0,
          "name": "BIJ- GERECHTEN",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 372,
            "debit": null,
            "credit": "0023",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11767,
          "groupId": 373,
          "amount": 0,
          "name": "COCKTAILS",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 373,
            "debit": null,
            "credit": "0022",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11768,
          "groupId": 374,
          "amount": 0,
          "name": "VOOR",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": 374,
            "debit": null,
            "credit": "0014",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": null,
          "paymentId": -6,
          "amount": 300,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": {
            "type": "receipt",
            "items": [
              {
                "id": 246,
                "amount": 100,
                "invoiced": false,
                "includesTax": true,
                "description": "Breakfast",
                "attachment": null,
                "lines": [],
                "costType": {
                  "id": 9,
                  "name": "High",
                  "tax": {
                    "id": 30,
                    "factor": 0.21,
                    "ledger": {
                      "typeId": 30,
                      "debit": "2  ",
                      "credit": null,
                      "type": "tax",
                      "code": "2  "
                    }
                  },
                  "ledger": {
                    "typeId": 9,
                    "debit": "7400",
                    "credit": null,
                    "type": "receipt",
                    "code": null
                  }
                }
              },
              {
                "id": 247,
                "amount": 200,
                "invoiced": false,
                "includesTax": true,
                "description": "Test",
                "attachment": null,
                "lines": [],
                "costType": {
                  "id": 10,
                  "name": "Low",
                  "tax": {
                    "id": 29,
                    "factor": 0.09,
                    "ledger": {
                      "typeId": 29,
                      "debit": "12 ",
                      "credit": null,
                      "type": "tax",
                      "code": "12 "
                    }
                  },
                  "ledger": {
                    "typeId": 10,
                    "debit": "7200",
                    "credit": null,
                    "type": "receipt",
                    "code": null
                  }
                }
              }
            ]
          }
        },
        {
          "id": 11773,
          "paymentId": 38,
          "amount": 0,
          "name": "Pin",
          "bookingType": "debit",
          "ledger": {
            "typeId": 38,
            "debit": "3600",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 11753,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [
        {
          "id": 11774,
          "noSaleId": 43,
          "amount": 522,
          "name": "Eigen verbuik",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 43,
            "debit": "0860",
            "credit": "9200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 11775,
          "noSaleId": 44,
          "amount": 0,
          "name": "Representatie",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 44,
            "debit": "7200",
            "credit": "7200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 11776,
          "noSaleId": 45,
          "amount": 0,
          "name": "Breuk",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 45,
            "debit": "7400",
            "credit": "7400",
            "type": "extra",
            "code": null
          }
        }
      ],
      "totalPayments": 300,
      "totalRevenue": 321,
      "cash": -200,
      "paidFromTill": 300,
      "startingTill": 300,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": -321,
      "closingTill": 0
    },
    "20": null
  },
  "2023-05-12": null,
  "2023-05-13": {
    "6": {
      "turnoverId": 522,
      "meta": {
        "date": "2023-05-13",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "in-progress",
        "booked": false,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "addedToTill": 0,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 11794,
          "groupId": 15,
          "amount": 0,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11793,
          "groupId": -21,
          "amount": 0,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 11795,
          "groupId": 16,
          "amount": 0,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": null,
          "paymentId": -6,
          "amount": 121,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": {
            "type": "receipt",
            "items": [
              {
                "id": 248,
                "amount": 100,
                "invoiced": false,
                "includesTax": false,
                "description": "Breakfast",
                "attachment": null,
                "lines": [],
                "costType": {
                  "id": 9,
                  "name": "High",
                  "tax": {
                    "id": 30,
                    "factor": 0.21,
                    "ledger": {
                      "typeId": 30,
                      "debit": "2  ",
                      "credit": null,
                      "type": "tax",
                      "code": "2  "
                    }
                  },
                  "ledger": {
                    "typeId": 9,
                    "debit": "7400",
                    "credit": null,
                    "type": "receipt",
                    "code": null
                  }
                }
              }
            ]
          }
        },
        {
          "id": 11792,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [],
      "totalPayments": 121,
      "totalRevenue": 0,
      "cash": 0,
      "paidFromTill": 121,
      "startingTill": 0,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": 121,
      "closingTill": 0
    },
    "20": null
  },
  "2023-05-14": null,
  "2023-05-15": null,
  "2023-05-16": null,
  "2023-05-17": null,
  "2023-05-18": {
    "6": {
      "turnoverId": 526,
      "meta": {
        "date": "2023-05-18",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "in-progress",
        "booked": false,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "addedToTill": 0,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 12238,
          "groupId": 15,
          "amount": 0,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 12239,
          "groupId": 16,
          "amount": 0,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 12237,
          "groupId": -21,
          "amount": 0,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": 12236,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12235,
          "paymentId": -6,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [],
      "totalPayments": 0,
      "totalRevenue": 0,
      "cash": 0,
      "paidFromTill": 0,
      "startingTill": 0,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": 0,
      "closingTill": 0
    },
    "20": {
      "turnoverId": 544,
      "meta": {
        "date": "2023-05-18",
        "dateToBank": null,
        "registerId": 20,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "complete",
        "booked": false,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 123,
        "denominations": {
          "inGrams": false,
          "coin_0_01": 0,
          "coin_0_02": 0,
          "coin_0_05": 0,
          "coin_0_10": 0,
          "coin_0_20": 0,
          "coin_0_50": 0,
          "coin_1_00": 0,
          "coin_2_00": 0,
          "note_5": 0,
          "note_10": 0,
          "note_20": 0,
          "note_50": 0,
          "note_100": 0,
          "note_200": 0,
          "note_500": 0
        }
      },
      "addedToTill": 123,
      "moneyInTill": {
        "value": 123,
        "denominations": {
          "inGrams": false,
          "coin_0_01": 0,
          "coin_0_02": 0,
          "coin_0_05": 0,
          "coin_0_10": 0,
          "coin_0_20": 0,
          "coin_0_50": 0,
          "coin_1_00": 0,
          "coin_2_00": 0,
          "note_5": 0,
          "note_10": 0,
          "note_20": 0,
          "note_50": 0,
          "note_100": 0,
          "note_200": 0,
          "note_500": 0
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 12602,
          "groupId": -21,
          "amount": 123,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 123,
          "amountExclTax": 123,
          "specification": null
        },
        {
          "id": 12603,
          "groupId": 15,
          "amount": 123,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 148.82999999999998,
          "amountExclTax": 123,
          "specification": null
        },
        {
          "id": 12604,
          "groupId": 16,
          "amount": 123,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 134.07000000000002,
          "amountExclTax": 123,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": 12600,
          "paymentId": -6,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12601,
          "paymentId": -20,
          "amount": 123,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12611,
          "paymentId": 150,
          "amount": 0,
          "name": "giftCard redeem value",
          "bookingType": "debit",
          "ledger": {
            "typeId": 150,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12609,
          "paymentId": 38,
          "amount": 0,
          "name": "Pin",
          "bookingType": "debit",
          "ledger": {
            "typeId": 38,
            "debit": "3600",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12610,
          "paymentId": 149,
          "amount": 0,
          "name": "Pin Nieuw",
          "bookingType": "debit",
          "ledger": {
            "typeId": 149,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12612,
          "paymentId": 151,
          "amount": 0,
          "name": "giftCard add value",
          "bookingType": "debit",
          "ledger": {
            "typeId": 151,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12618,
          "paymentId": 157,
          "amount": 0,
          "name": "Test payment",
          "bookingType": "debit",
          "ledger": {
            "typeId": 157,
            "debit": "8210",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12613,
          "paymentId": 152,
          "amount": 0,
          "name": "Contant",
          "bookingType": "debit",
          "ledger": {
            "typeId": 152,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12614,
          "paymentId": 153,
          "amount": 0,
          "name": "Pin defect",
          "bookingType": "debit",
          "ledger": {
            "typeId": 153,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12615,
          "paymentId": 154,
          "amount": 0,
          "name": "Fooi",
          "bookingType": "debit",
          "ledger": {
            "typeId": 154,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12616,
          "paymentId": 155,
          "amount": 0,
          "name": "Kadootje",
          "bookingType": "debit",
          "ledger": {
            "typeId": 155,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12617,
          "paymentId": 156,
          "amount": 0,
          "name": "eigen verbruik",
          "bookingType": "debit",
          "ledger": {
            "typeId": 156,
            "debit": null,
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [
        {
          "id": 12605,
          "noSaleId": 43,
          "amount": 123,
          "name": "Eigen verbuik",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 43,
            "debit": "0860",
            "credit": "9200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12606,
          "noSaleId": 44,
          "amount": 123,
          "name": "Representatie",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 44,
            "debit": "7200",
            "credit": "7200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12607,
          "noSaleId": 45,
          "amount": 0,
          "name": "Breuk",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 45,
            "debit": "7400",
            "credit": "7400",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12608,
          "noSaleId": 88,
          "amount": 0,
          "name": "Extra",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 88,
            "debit": "4700",
            "credit": "4700",
            "type": "extra",
            "code": null
          }
        }
      ],
      "totalPayments": 246,
      "totalRevenue": 405.9,
      "cash": 0,
      "paidFromTill": 0,
      "startingTill": 246,
      "vouchersSold": 0,
      "vouchersRedeemed": 123,
      "tillDifference": -282.9,
      "closingTill": 123
    }
  },
  "2023-05-19": null,
  "2023-05-20": null,
  "2023-05-21": {
    "6": {
      "turnoverId": 524,
      "meta": {
        "date": "2023-05-21",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "confirmed",
        "booked": true,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 200,
        "denominations": {
          "inGrams": false,
          "coin_0_01": 0,
          "coin_0_02": 0,
          "coin_0_05": 0,
          "coin_0_10": 0,
          "coin_0_20": 0,
          "coin_0_50": 0,
          "coin_1_00": 0,
          "coin_2_00": 0,
          "note_5": 0,
          "note_10": 0,
          "note_20": 0,
          "note_50": 0,
          "note_100": 0,
          "note_200": 0,
          "note_500": 0
        }
      },
      "addedToTill": 0,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 12026,
          "groupId": -21,
          "amount": 0,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 12028,
          "groupId": 16,
          "amount": 300,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 327,
          "amountExclTax": 300,
          "specification": null
        },
        {
          "id": 12027,
          "groupId": 15,
          "amount": 200,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 242,
          "amountExclTax": 200,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": null,
          "paymentId": -6,
          "amount": 300,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": {
            "type": "receipt",
            "items": [
              {
                "id": 249,
                "amount": 100,
                "invoiced": false,
                "includesTax": true,
                "description": "Test",
                "attachment": null,
                "lines": [],
                "costType": {
                  "id": 9,
                  "name": "High",
                  "tax": {
                    "id": 30,
                    "factor": 0.21,
                    "ledger": {
                      "typeId": 30,
                      "debit": "2  ",
                      "credit": null,
                      "type": "tax",
                      "code": "2  "
                    }
                  },
                  "ledger": {
                    "typeId": 9,
                    "debit": "7400",
                    "credit": null,
                    "type": "receipt",
                    "code": null
                  }
                }
              },
              {
                "id": 250,
                "amount": 200,
                "invoiced": false,
                "includesTax": true,
                "description": "Test low",
                "attachment": null,
                "lines": [],
                "costType": {
                  "id": 10,
                  "name": "Low",
                  "tax": {
                    "id": 29,
                    "factor": 0.09,
                    "ledger": {
                      "typeId": 29,
                      "debit": "12 ",
                      "credit": null,
                      "type": "tax",
                      "code": "12 "
                    }
                  },
                  "ledger": {
                    "typeId": 10,
                    "debit": "7200",
                    "credit": null,
                    "type": "receipt",
                    "code": null
                  }
                }
              }
            ]
          }
        },
        {
          "id": 12025,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12185,
          "paymentId": 38,
          "amount": 0,
          "name": "Pin",
          "bookingType": "debit",
          "ledger": {
            "typeId": 38,
            "debit": "3600",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [
        {
          "id": 12195,
          "noSaleId": 43,
          "amount": 0,
          "name": "Eigen verbuik",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 43,
            "debit": "0860",
            "credit": "9200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12196,
          "noSaleId": 44,
          "amount": 0,
          "name": "Representatie",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 44,
            "debit": "7200",
            "credit": "7200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12197,
          "noSaleId": 45,
          "amount": 0,
          "name": "Breuk",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 45,
            "debit": "7400",
            "credit": "7400",
            "type": "extra",
            "code": null
          }
        }
      ],
      "totalPayments": 300,
      "totalRevenue": 569,
      "cash": -200,
      "paidFromTill": 300,
      "startingTill": 200,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": -469,
      "closingTill": 0
    },
    "20": null
  },
  "2023-05-22": {
    "6": {
      "turnoverId": 525,
      "meta": {
        "date": "2023-05-22",
        "dateToBank": null,
        "registerId": 6,
        "createdBy": {
          "id": 1,
          "email": "joost@thenextsoftware.io",
          "username": "joost@thenextsoftware.io",
          "firstName": "Joost",
          "lastName": "Heitbrink",
          "active": true,
          "createdOn": 1567685153,
          "lastLogin": 1690293930,
          "activity_this_month": true
        },
        "comment": null,
        "status": "confirmed",
        "booked": true,
        "includesTax": false,
        "pinOnly": false,
        "currency": "EUR",
        "turnoverAttachment": null,
        "bookingError": null
      },
      "openingTill": {
        "value": 200,
        "denominations": {
          "inGrams": false,
          "coin_0_01": 0,
          "coin_0_02": 0,
          "coin_0_05": 0,
          "coin_0_10": 0,
          "coin_0_20": 0,
          "coin_0_50": 0,
          "coin_1_00": 0,
          "coin_2_00": 0,
          "note_5": 0,
          "note_10": 0,
          "note_20": 0,
          "note_50": 0,
          "note_100": 0,
          "note_200": 0,
          "note_500": 0
        }
      },
      "addedToTill": 100,
      "moneyInTill": {
        "value": 0,
        "denominations": {
          "inGrams": false,
          "coin_0_01": null,
          "coin_0_02": null,
          "coin_0_05": null,
          "coin_0_10": null,
          "coin_0_20": null,
          "coin_0_50": null,
          "coin_1_00": null,
          "coin_2_00": null,
          "note_5": null,
          "note_10": null,
          "note_20": null,
          "note_50": null,
          "note_100": null,
          "note_200": null,
          "note_500": null
        }
      },
      "deposited": 0,
      "revenue": [
        {
          "id": 12214,
          "groupId": -21,
          "amount": 0,
          "name": "",
          "bookingType": "credit",
          "includesTax": false,
          "tax": null,
          "ledger": {
            "typeId": -21,
            "debit": null,
            "credit": "6050",
            "type": "default",
            "code": null
          },
          "amountInclTax": 0,
          "amountExclTax": 0,
          "specification": null
        },
        {
          "id": 12216,
          "groupId": 16,
          "amount": 200,
          "name": "2. Laag",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 29,
            "factor": 0.09,
            "ledger": {
              "typeId": 29,
              "debit": "12 ",
              "credit": null,
              "type": "tax",
              "code": "12 "
            }
          },
          "ledger": {
            "typeId": 16,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 218.00000000000003,
          "amountExclTax": 200,
          "specification": null
        },
        {
          "id": 12215,
          "groupId": 15,
          "amount": 100,
          "name": "1. Hoog",
          "bookingType": "credit",
          "includesTax": false,
          "tax": {
            "id": 30,
            "factor": 0.21,
            "ledger": {
              "typeId": 30,
              "debit": "2  ",
              "credit": null,
              "type": "tax",
              "code": "2  "
            }
          },
          "ledger": {
            "typeId": 15,
            "debit": null,
            "credit": "0450",
            "type": "group",
            "code": null
          },
          "amountInclTax": 121,
          "amountExclTax": 100,
          "specification": null
        }
      ],
      "payments": [
        {
          "id": null,
          "paymentId": -6,
          "amount": 230,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -6,
            "debit": "0310",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": {
            "type": "receipt",
            "items": [
              {
                "id": 251,
                "amount": 100,
                "invoiced": false,
                "includesTax": false,
                "description": "Test high",
                "attachment": null,
                "lines": [],
                "costType": {
                  "id": 9,
                  "name": "High",
                  "tax": {
                    "id": 30,
                    "factor": 0.21,
                    "ledger": {
                      "typeId": 30,
                      "debit": "2  ",
                      "credit": null,
                      "type": "tax",
                      "code": "2  "
                    }
                  },
                  "ledger": {
                    "typeId": 9,
                    "debit": "7400",
                    "credit": null,
                    "type": "receipt",
                    "code": null
                  }
                }
              },
              {
                "id": 252,
                "amount": 100,
                "invoiced": false,
                "includesTax": false,
                "description": "Test low",
                "attachment": null,
                "lines": [],
                "costType": {
                  "id": 10,
                  "name": "Low",
                  "tax": {
                    "id": 29,
                    "factor": 0.09,
                    "ledger": {
                      "typeId": 29,
                      "debit": "12 ",
                      "credit": null,
                      "type": "tax",
                      "code": "12 "
                    }
                  },
                  "ledger": {
                    "typeId": 10,
                    "debit": "7200",
                    "credit": null,
                    "type": "receipt",
                    "code": null
                  }
                }
              }
            ]
          }
        },
        {
          "id": 12213,
          "paymentId": -20,
          "amount": 0,
          "name": null,
          "bookingType": "debit",
          "ledger": {
            "typeId": -20,
            "debit": "0410",
            "credit": null,
            "type": "default",
            "code": null
          },
          "specification": null
        },
        {
          "id": 12217,
          "paymentId": 38,
          "amount": 0,
          "name": "Pin",
          "bookingType": "debit",
          "ledger": {
            "typeId": 38,
            "debit": "3600",
            "credit": null,
            "type": "payment",
            "code": null
          },
          "specification": null
        }
      ],
      "noSale": [
        {
          "id": 12218,
          "noSaleId": 43,
          "amount": 0,
          "name": "Eigen verbuik",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 43,
            "debit": "0860",
            "credit": "9200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12219,
          "noSaleId": 44,
          "amount": 0,
          "name": "Representatie",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 44,
            "debit": "7200",
            "credit": "7200",
            "type": "extra",
            "code": null
          }
        },
        {
          "id": 12220,
          "noSaleId": 45,
          "amount": 0,
          "name": "Breuk",
          "bookingType": "noSale",
          "ledger": {
            "typeId": 45,
            "debit": "7400",
            "credit": "7400",
            "type": "extra",
            "code": null
          }
        }
      ],
      "totalPayments": 230,
      "totalRevenue": 339,
      "cash": -200,
      "paidFromTill": 230,
      "startingTill": 300,
      "vouchersSold": null,
      "vouchersRedeemed": null,
      "tillDifference": -409,
      "closingTill": 0
    },
    "20": null
  },
  "2023-05-23": null,
  "2023-05-24": null,
  "2023-05-25": null,
  "2023-05-26": null,
  "2023-05-27": null,
  "2023-05-28": null,
  "2023-05-29": null,
  "2023-05-30": null,
  "2023-05-31": null
}
`)
  }),
  getters: {
    daysTableData: (state): TableDayData[] => dataMapper(state.days),
  }
});

