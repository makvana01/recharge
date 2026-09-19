/**
 * RechargeWise — Active Coupons Database
 */

export const VALID_COUPONS = {
  SUPER50: {
    code: "SUPER50",
    discountType: "flat",
    discountValue: 50,
    minAmount: 299,
    description: "Flat ₹50 Instant Cashback Applied!"
  },
  SAVE25: {
    code: "SAVE25",
    discountType: "flat",
    discountValue: 25,
    minAmount: 199,
    description: "Flat ₹25 Bill Deduction Applied!"
  },
  YEAR100: {
    code: "YEAR100",
    discountType: "flat",
    discountValue: 100,
    minAmount: 2999,
    description: "Flat ₹100 Annual Plan Discount Applied!"
  },
  WELCOME10: {
    code: "WELCOME10",
    discountType: "percent",
    discountValue: 10,
    maxDiscount: 40,
    minAmount: 150,
    description: "10% Welcome Discount Applied!"
  }
};
