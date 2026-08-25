export const USD_TO_INR = 88 // fixed display rate, not live FX

export const toPaise = (usd) => Math.round(usd * USD_TO_INR * 100)

export const applyDiscount = (paise, bps) =>
  Math.round((paise * (10_000 - bps)) / 10_000)

const fmt = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

export const formatINR = (paise) => fmt.format(paise / 100)