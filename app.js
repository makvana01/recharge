/**
 * RechargeWise — Smart Mobile Recharge Engine & Application Logic
 */

// ==================== PLAN DATABASE ====================
const PLANS_DATABASE = {
  Jio: [
    {
      id: "jio_299",
      operator: "Jio",
      price: 299,
      mrp: 349,
      validity: "28 Days",
      data: "1.5 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "⭐ Best Seller",
      ott: ["JioCinema", "JioTV", "JioCloud"],
      perks: ["Complimentary JioCinema (basic)", "JioTV access", "High-speed 4G/5G data"]
    },
    {
      id: "jio_349",
      operator: "Jio",
      price: 349,
      mrp: 399,
      validity: "28 Days",
      data: "2.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "⚡ True 5G Unlimited",
      ott: ["JioCinema", "JioTV", "JioCloud"],
      perks: ["Truly Unlimited 5G Data", "2GB high-speed daily data", "Jio apps subscription"]
    },
    {
      id: "jio_449",
      operator: "Jio",
      price: 449,
      mrp: 499,
      validity: "28 Days",
      data: "3.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["daily-data"],
      tag: "🚀 Heavy Data",
      ott: ["JioCinema Premium", "JioTV"],
      perks: ["Includes JioCinema Premium subscription", "Unlimited 5G Data", "Zero throttling"]
    },
    {
      id: "jio_719",
      operator: "Jio",
      price: 719,
      mrp: 799,
      validity: "70 Days",
      data: "2.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "long-term", "daily-data"],
      tag: "🔥 Value Deal",
      ott: ["JioCinema", "JioTV"],
      perks: ["70 days long validity", "Truly Unlimited 5G coverage", "Save ₹150 vs monthly refills"]
    },
    {
      id: "jio_899",
      operator: "Jio",
      price: 899,
      mrp: 999,
      validity: "90 Days",
      data: "2.0 GB/Day + 20GB Extra",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["long-term", "daily-data"],
      tag: "🎁 20GB Extra Bonus",
      ott: ["JioCinema", "JioTV"],
      perks: ["Quarterly pack (90 days)", "20GB lump-sum bonus data", "Unlimited 5G Data"]
    },
    {
      id: "jio_1029",
      operator: "Jio",
      price: 1029,
      mrp: 1149,
      validity: "84 Days",
      data: "2.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["ott", "long-term"],
      tag: "🎬 Disney+ Hotstar",
      ott: ["Disney+ Hotstar (3 Months)", "JioCinema", "JioTV"],
      perks: ["Free 3-month Disney+ Hotstar Mobile", "84 Days validity", "Unlimited 5G Data"]
    },
    {
      id: "jio_1299",
      operator: "Jio",
      price: 1299,
      mrp: 1399,
      validity: "84 Days",
      data: "2.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["ott", "long-term"],
      tag: "🍿 Netflix Pack",
      ott: ["Netflix (Mobile)", "JioCinema", "JioTV"],
      perks: ["Complimentary Netflix Mobile plan", "84 Days validity", "Unlimited 5G Data"]
    },
    {
      id: "jio_3599",
      operator: "Jio",
      price: 3599,
      mrp: 3899,
      validity: "365 Days",
      data: "2.5 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "long-term"],
      tag: "👑 Annual Best Value",
      ott: ["FanCode", "JioCinema", "JioTV"],
      perks: ["Full 365 Days peace of mind", "Save ₹800+ annually", "Unlimited 5G Data throughout the year"]
    },
    {
      id: "jio_19",
      operator: "Jio",
      price: 19,
      mrp: 25,
      validity: "Active Plan",
      data: "1.5 GB",
      voice: "NA",
      sms: "NA",
      categories: ["data-booster"],
      tag: "⚡ Instant Add-on",
      ott: [],
      perks: ["Instant 1.5GB 4G/5G data", "Valid till active base plan", "High-speed booster"]
    },
    {
      id: "jio_61",
      operator: "Jio",
      price: 61,
      mrp: 75,
      validity: "Active Plan",
      data: "6 GB High Speed",
      voice: "NA",
      sms: "NA",
      categories: ["data-booster"],
      tag: "📶 5G Booster",
      ott: [],
      perks: ["Unlocks Unlimited 5G on base packs", "6GB high-speed bonus", "No speed cap"]
    },
    {
      id: "jio_155",
      operator: "Jio",
      price: 155,
      mrp: 179,
      validity: "28 Days",
      data: "2 GB Total",
      voice: "Unlimited Calls",
      sms: "300 SMS",
      categories: ["talktime"],
      tag: "📞 Low Budget Calling",
      ott: ["JioCinema", "JioTV"],
      perks: ["Cheapest 28-day calling pack", "Ideal for secondary SIMs", "Nationwide roaming free"]
    },
    {
      id: "jio_479",
      operator: "Jio",
      price: 479,
      mrp: 529,
      validity: "84 Days",
      data: "6 GB Total",
      voice: "Unlimited Calls",
      sms: "900 SMS",
      categories: ["talktime", "long-term"],
      tag: "💰 84d Calling Special",
      ott: ["JioCinema", "JioTV"],
      perks: ["3 Months validity for under ₹500", "Unlimited voice calls", "Free incoming in national roaming"]
    }
  ],

  Airtel: [
    {
      id: "airtel_299",
      operator: "Airtel",
      price: 299,
      mrp: 349,
      validity: "28 Days",
      data: "1.5 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "⭐ Popular Pack",
      ott: ["Wynk Music", "Apollo 24|7"],
      perks: ["Free Hellotunes on Wynk", "Apollo 24|7 Circle membership", "Fast Airtel network"]
    },
    {
      id: "airtel_349",
      operator: "Airtel",
      price: 349,
      mrp: 399,
      validity: "28 Days",
      data: "2.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "⚡ 5G Plus Unlimited",
      ott: ["Wynk Music", "Free Hellotunes"],
      perks: ["Truly Unlimited 5G Plus data", "Apollo 24|7 Circle benefits", "Free Hellotunes"]
    },
    {
      id: "airtel_449",
      operator: "Airtel",
      price: 449,
      mrp: 499,
      validity: "28 Days",
      data: "3.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["daily-data", "ott"],
      tag: "🎬 Airtel Xstream",
      ott: ["Airtel Xstream Play (20+ OTTs)", "Wynk"],
      perks: ["Includes SonyLIV, LionsgatePlay, ErosNow", "Unlimited 5G data", "3GB/day"]
    },
    {
      id: "airtel_649",
      operator: "Airtel",
      price: 649,
      mrp: 699,
      validity: "56 Days",
      data: "2.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "🔥 2-Month Value",
      ott: ["Wynk Music", "Apollo 24|7"],
      perks: ["56 Days uninterrupted calling & 5G", "Wynk free music", "Apollo circle access"]
    },
    {
      id: "airtel_859",
      operator: "Airtel",
      price: 859,
      mrp: 949,
      validity: "84 Days",
      data: "1.5 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "long-term", "daily-data"],
      tag: "💎 Top 84-Day Value",
      ott: ["Wynk Music", "Hellotunes"],
      perks: ["Save ₹188 vs monthly recharges", "Unlimited 5G Plus", "Full 84 days validity"]
    },
    {
      id: "airtel_1029",
      operator: "Airtel",
      price: 1029,
      mrp: 1149,
      validity: "84 Days",
      data: "2.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["ott", "long-term"],
      tag: "🎬 Disney+ Hotstar",
      ott: ["Disney+ Hotstar (3 Months)", "Airtel Xstream Play"],
      perks: ["3 Months Disney+ Hotstar Mobile", "Xstream Play access", "Unlimited 5G Plus"]
    },
    {
      id: "airtel_1199",
      operator: "Airtel",
      price: 1199,
      mrp: 1299,
      validity: "84 Days",
      data: "2.5 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["ott", "long-term"],
      tag: "📦 Amazon Prime",
      ott: ["Amazon Prime (84 Days)", "Wynk"],
      perks: ["84 Days Amazon Prime membership", "Fast delivery & Prime Video", "Unlimited 5G Plus"]
    },
    {
      id: "airtel_3599",
      operator: "Airtel",
      price: 3599,
      mrp: 3899,
      validity: "365 Days",
      data: "2.0 GB/Day + Unlimited 5G",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "long-term"],
      tag: "👑 Annual Pack",
      ott: ["Apollo 24|7", "Wynk Music"],
      perks: ["Full 1 Year validity", "Unlimited 5G throughout the year", "Save ₹750+ annually"]
    },
    {
      id: "airtel_22",
      operator: "Airtel",
      price: 22,
      mrp: 29,
      validity: "1 Day",
      data: "1 GB Data",
      voice: "NA",
      sms: "NA",
      categories: ["data-booster"],
      tag: "⚡ Emergency Addon",
      ott: [],
      perks: ["Instant 1GB 4G/5G data", "Valid for 1 calendar day"]
    },
    {
      id: "airtel_77",
      operator: "Airtel",
      price: 77,
      mrp: 89,
      validity: "Active Plan",
      data: "5 GB Data",
      voice: "NA",
      sms: "NA",
      categories: ["data-booster"],
      tag: "📶 Data Booster",
      ott: [],
      perks: ["5GB high-speed data", "Valid till active base plan"]
    },
    {
      id: "airtel_199",
      operator: "Airtel",
      price: 199,
      mrp: 239,
      validity: "28 Days",
      data: "2 GB Total",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["talktime"],
      tag: "📞 Calling Only",
      ott: ["Wynk Music"],
      perks: ["Affordable 28-day calling", "Free Hellotunes", "National roaming"]
    },
    {
      id: "airtel_509",
      operator: "Airtel",
      price: 509,
      mrp: 559,
      validity: "84 Days",
      data: "6 GB Total",
      voice: "Unlimited Calls",
      sms: "300 SMS",
      categories: ["talktime", "long-term"],
      tag: "💰 84d Low Spend",
      ott: ["Wynk Music"],
      perks: ["84 days validity", "Unlimited calling across India"]
    }
  ],

  Vi: [
    {
      id: "vi_299",
      operator: "Vi",
      price: 299,
      mrp: 349,
      validity: "28 Days",
      data: "1.5 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "⭐ Hero Unlimited",
      ott: ["Vi Movies & TV"],
      perks: ["Binge All Night (12am-6am Unlimited)", "Weekend Data Rollover", "Data Delights (2GB backup)"]
    },
    {
      id: "vi_349",
      operator: "Vi",
      price: 349,
      mrp: 399,
      validity: "28 Days",
      data: "2.0 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "🌙 12am-6am Free Data",
      ott: ["Vi Movies & TV"],
      perks: ["Unlimited data 12 AM to 6 AM", "Weekend Data Rollover", "Up to 2GB backup data/month"]
    },
    {
      id: "vi_449",
      operator: "Vi",
      price: 449,
      mrp: 499,
      validity: "28 Days",
      data: "3.0 GB/Day + Hotstar",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["daily-data", "ott"],
      tag: "🎬 Hotstar Mobile",
      ott: ["Disney+ Hotstar (3 Months)", "Vi MTV"],
      perks: ["Disney+ Hotstar Mobile 3 Months", "Binge all night data", "3GB/Day high speed"]
    },
    {
      id: "vi_719",
      operator: "Vi",
      price: 719,
      mrp: 799,
      validity: "70 Days",
      data: "1.5 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "long-term", "daily-data"],
      tag: "🔥 Hero 70 Days",
      ott: ["Vi Movies & TV"],
      perks: ["Binge All Night (12am-6am)", "Weekend Data Rollover", "70 days long validity"]
    },
    {
      id: "vi_859",
      operator: "Vi",
      price: 859,
      mrp: 949,
      validity: "84 Days",
      data: "2.0 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "long-term", "daily-data"],
      tag: "💎 84-Day Value",
      ott: ["Vi Movies & TV"],
      perks: ["2GB daily data for 84 days", "Weekend Rollover", "Night binge data"]
    },
    {
      id: "vi_1049",
      operator: "Vi",
      price: 1049,
      mrp: 1149,
      validity: "84 Days",
      data: "2.0 GB/Day + SonyLIV",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["ott", "long-term"],
      tag: "🎬 SonyLIV Bundle",
      ott: ["SonyLIV Premium (84 Days)", "Vi MTV"],
      perks: ["SonyLIV Premium 84 Days access", "Hero Unlimited benefits", "2GB/Day"]
    },
    {
      id: "vi_3199",
      operator: "Vi",
      price: 3199,
      mrp: 3499,
      validity: "365 Days",
      data: "2.0 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "long-term"],
      tag: "👑 Annual Hero Pack",
      ott: ["Amazon Prime Lite (1 Year)", "Vi MTV"],
      perks: ["1 Year Amazon Prime Lite included", "365 Days validity", "Binge all night throughout year"]
    },
    {
      id: "vi_24",
      operator: "Vi",
      price: 24,
      mrp: 29,
      validity: "1 Day",
      data: "1 GB Data",
      voice: "NA",
      sms: "NA",
      categories: ["data-booster"],
      tag: "⚡ 1 Day Boost",
      ott: [],
      perks: ["Instant 1GB data booster", "Valid for 24 hours"]
    },
    {
      id: "vi_49",
      operator: "Vi",
      price: 49,
      mrp: 59,
      validity: "1 Day",
      data: "Unlimited Data (12am-6am)",
      voice: "NA",
      sms: "NA",
      categories: ["data-booster"],
      tag: "🌙 Night Pass",
      ott: [],
      perks: ["Unlimited data from 12 AM to 6 AM", "Download movies/updates overnight"]
    },
    {
      id: "vi_199",
      operator: "Vi",
      price: 199,
      mrp: 239,
      validity: "28 Days",
      data: "2 GB Total",
      voice: "Unlimited Calls",
      sms: "300 SMS",
      categories: ["talktime"],
      tag: "📞 Budget Voice",
      ott: [],
      perks: ["28 Days validity", "Unlimited local/STD calls", "National roaming"]
    }
  ],

  BSNL: [
    {
      id: "bsnl_107",
      operator: "BSNL",
      price: 107,
      mrp: 119,
      validity: "35 Days",
      data: "3 GB Total",
      voice: "200 Mins Voice",
      sms: "NA",
      categories: ["popular", "talktime"],
      tag: "⭐ Best 35-Day Saver",
      ott: ["BSNL Tunes"],
      perks: ["Unbeatable 35-day validity", "Free national roaming", "Cheapest secondary SIM pack"]
    },
    {
      id: "bsnl_199",
      operator: "BSNL",
      price: 199,
      mrp: 229,
      validity: "30 Days",
      data: "2.0 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "⚡ Calendar 30 Days",
      ott: [],
      perks: ["True 30-day calendar month validity", "2GB high speed per day", "Unlimited calls"]
    },
    {
      id: "bsnl_249",
      operator: "BSNL",
      price: 249,
      mrp: 279,
      validity: "45 Days",
      data: "2.0 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "daily-data"],
      tag: "🔥 45 Days Power",
      ott: [],
      perks: ["45 Days validity under ₹250", "90 GB total high-speed data", "Unlimited voice calls"]
    },
    {
      id: "bsnl_397",
      operator: "BSNL",
      price: 397,
      mrp: 449,
      validity: "150 Days",
      data: "2.0 GB/Day (for 30d)",
      voice: "Unlimited (30d)",
      sms: "100 SMS/Day (30d)",
      categories: ["popular", "long-term"],
      tag: "👑 150 Days SIM Active",
      ott: [],
      perks: ["Keeps SIM active for 5 whole months", "Free incoming calls everywhere", "Unmatched validity"]
    },
    {
      id: "bsnl_599",
      operator: "BSNL",
      price: 599,
      mrp: 649,
      validity: "84 Days",
      data: "3.0 GB/Day",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["daily-data", "long-term"],
      tag: "🚀 3GB Daily Monster",
      ott: ["Zing Music"],
      perks: ["3GB daily data for 84 days (252GB total)", "Unlimited free night data (12am-5am)", "Best high-usage plan"]
    },
    {
      id: "bsnl_797",
      operator: "BSNL",
      price: 797,
      mrp: 899,
      validity: "300 Days",
      data: "2.0 GB/Day (for 60d)",
      voice: "Unlimited (60d)",
      sms: "100 SMS/Day (60d)",
      categories: ["long-term"],
      tag: "📅 10 Months Validity",
      ott: [],
      perks: ["300 Days incoming validity", "Under ₹80 per month cost", "Ideal for parents & elders"]
    },
    {
      id: "bsnl_1999",
      operator: "BSNL",
      price: 1999,
      mrp: 2199,
      validity: "365 Days",
      data: "600 GB Total",
      voice: "Unlimited Calls",
      sms: "100 SMS/Day",
      categories: ["popular", "long-term"],
      tag: "🏆 1 Year Under ₹2000",
      ott: ["Eros Now Entertainment"],
      perks: ["Full 365 Days validity", "600GB lump-sum data with no daily limit", "Unlimited calls"]
    },
    {
      id: "bsnl_16",
      operator: "BSNL",
      price: 16,
      mrp: 20,
      validity: "1 Day",
      data: "2 GB High Speed",
      voice: "NA",
      sms: "NA",
      categories: ["data-booster"],
      tag: "⚡ Mini Booster",
      ott: [],
      perks: ["2GB instant data booster", "Valid for 1 calendar day"]
    },
    {
      id: "bsnl_94",
      operator: "BSNL",
      price: 94,
      mrp: 105,
      validity: "30 Days",
      data: "3 GB Total",
      voice: "200 Mins Voice",
      sms: "NA",
      categories: ["talktime"],
      tag: "📞 Pure Calling",
      ott: [],
      perks: ["30 days validity", "200 minutes of voice calling", "3GB data included"]
    }
  ]
};

// ==================== COUPONS CONFIGURATION ====================
const VALID_COUPONS = {
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

// ==================== GUIDE ARTICLES DATA ====================
const GUIDE_ARTICLES = {
  g1: {
    title: "Jio ₹299 vs ₹349: Which 28-day plan offers real value in 2026?",
    category: "JIO COMPARISON",
    readTime: "4 min read",
    html: `
      <h2>Jio ₹299 vs ₹349 Plan Breakdown</h2>
      <div class="guide-meta-bar">
        <span>⏱️ 4 min read</span> · <span>Updated Today</span> · <span>Author: Telecom Analysis Team</span>
      </div>
      <div class="guide-body-text">
        <p>Both the <strong>₹299</strong> and <strong>₹349</strong> recharge packs from Reliance Jio come with standard 28-day validity, unlimited local and STD voice calling to any network, and 100 SMS per day. However, their data allowances and 5G perks are fundamentally different.</p>
        
        <h4>Key Specification Comparison</h4>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Jio ₹299 Plan</th>
              <th>Jio ₹349 Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Validity</td>
              <td>28 Days</td>
              <td>28 Days</td>
            </tr>
            <tr>
              <td>Daily Data Limit</td>
              <td>1.5 GB / Day</td>
              <td>2.0 GB / Day</td>
            </tr>
            <tr>
              <td>Total 4G Data</td>
              <td>42 GB</td>
              <td>56 GB (+14 GB more)</td>
            </tr>
            <tr>
              <td>Unlimited 5G Eligibility</td>
              <td>❌ Not Eligible</td>
              <td>✅ <strong>Yes (Unlimited 5G Standalone)</strong></td>
            </tr>
            <tr>
              <td>Price Difference</td>
              <td>Base Price</td>
              <td>+₹50 Extra</td>
            </tr>
          </tbody>
        </table>

        <h4>The Verdict: Which one should you buy?</h4>
        <p><strong>1. If you possess a 5G-capable smartphone in a Jio 5G covered city:</strong> Always recharge with <strong>₹349</strong>. The ₹50 price difference unlocks totally unrestricted, unthrottled 5G data which consumes zero from your daily quota!</p>
        <p><strong>2. If you use a 4G smartphone:</strong> The ₹299 plan gives you 1.5GB/day which is sufficient for light browsing, messaging, and UPI transactions. However, ₹349 gives 33% more daily data (2GB/day) for just ₹50 more (₹1.78/day extra).</p>
      </div>
    `
  },
  g2: {
    title: "Where to find legitimate mobile recharge cashback and coupon codes?",
    category: "SAVINGS GUIDE",
    readTime: "5 min read",
    html: `
      <h2>Finding Real Cashback & Avoiding Fake Coupons</h2>
      <div class="guide-meta-bar">
        <span>⏱️ 5 min read</span> · <span>Updated Recently</span> · <span>Author: Consumer Finance Desk</span>
      </div>
      <div class="guide-body-text">
        <p>Many internet sites list hundreds of expired or fake coupon codes. Here is our vetted, step-by-step checklist to legitimately shave ₹25 to ₹100 off your mobile bills every single cycle.</p>
        
        <h4>1. RechargeWise Direct Coupons</h4>
        <p>Always check our top coupon bar before paying. Active codes like <code>SUPER50</code> and <code>SAVE25</code> directly reduce the final payable amount at checkout with zero convenience fees.</p>

        <h4>2. UPI App Rewards (Google Pay & PhonePe Scratch Cards)</h4>
        <p>Google Pay frequently distributes "Flat ₹30 Cashback on Mobile Recharge via UPI" scratch cards. If you have an active reward in your Google Pay or PhonePe Rewards section, pay through that specific app handle.</p>

        <h4>3. Credit Card Telecom Categories</h4>
        <p>Cards like Airtel Axis Bank Credit Card (25% cashback on Airtel), Cashback SBI Card (5% cashback on online spends), and Amazon Pay ICICI Card (2% reward points) provide permanent statement credits on all mobile recharges.</p>
      </div>
    `
  },
  g3: {
    title: "Best Airtel prepaid plans categorized by validity and daily usage",
    category: "AIRTEL PLANS",
    readTime: "6 min read",
    html: `
      <h2>Airtel Prepaid Plans Optimization Guide</h2>
      <div class="guide-meta-bar">
        <span>⏱️ 6 min read</span> · <span>Updated Recently</span> · <span>Author: Telecom Analysis Team</span>
      </div>
      <div class="guide-body-text">
        <p>Airtel operates India's premier 5G Plus network. Selecting the right pack depends primarily on your refill frequency preference:</p>

        <h4>1. Best 28-Day Pack: Airtel ₹349</h4>
        <p>This is Airtel's entry tier for <strong>Unlimited 5G Plus</strong>. Includes 2GB/day, unlimited calling, free Hellotunes, and Apollo 24|7 healthcare circle.</p>

        <h4>2. Best 84-Day Pack: Airtel ₹859</h4>
        <p>Recharging ₹349 every month for 3 months costs ₹1,047. Doing a single 84-day recharge with ₹859 provides the exact same benefits while pocketing <strong>₹188 in direct savings</strong>.</p>

        <h4>3. Best Entertainment Pack: Airtel ₹1029</h4>
        <p>Includes 84 days validity, 2GB/day + 5G, and a complimentary 3-month subscription to Disney+ Hotstar Mobile.</p>
      </div>
    `
  },
  g4: {
    title: "How to make the most of Vi's Weekend Data Rollover & Binge All Night",
    category: "VI TIPS",
    readTime: "4 min read",
    html: `
      <h2>Unlocking Vi Hero Unlimited Perks</h2>
      <div class="guide-meta-bar">
        <span>⏱️ 4 min read</span> · <span>Updated Recently</span> · <span>Author: Network Insights</span>
      </div>
      <div class="guide-body-text">
        <p>Vodafone Idea (Vi) offers unique data features in its 'Hero Unlimited' packs (₹299 and above) that neither Jio nor Airtel provide:</p>

        <h4>1. Binge All Night (12 AM to 6 AM)</h4>
        <p>Between midnight and 6 AM, your data usage is 100% free and does not deduct a single megabyte from your daily quota. You can schedule heavy OS updates, game downloads, or 4K video streams overnight.</p>

        <h4>2. Weekend Data Rollover</h4>
        <p>Any unused daily data from Monday to Friday is accumulated and credited to your balance on Saturday and Sunday for binge watching.</p>

        <h4>3. Data Delights (Emergency 2GB Backup)</h4>
        <p>Dial <code>121249</code> or use the Vi app to claim 1GB extra high-speed data twice a month when your regular data runs out, completely free.</p>
      </div>
    `
  }
};

// ==================== APPLICATION STATE ====================
const appState = {
  currentOperator: "Jio",
  currentCategory: "all",
  searchQuery: "",
  connectionType: "prepaid",
  selectedMobile: "",
  selectedCircle: "Gujarat",
  selectedPlan: null,
  activeCoupon: null,
  rechargeHistory: []
};

// ==================== DOM ELEMENTS ====================
const elements = {
  // Navigation & Drawer
  header: document.getElementById("header"),
  desktopNav: document.getElementById("desktopNav"),
  mobileMenuToggle: document.getElementById("mobileMenuToggle"),
  mobileDrawer: document.getElementById("mobileDrawer"),
  drawerClose: document.getElementById("drawerClose"),
  historyCounter: document.getElementById("historyCounter"),
  viewHistoryNav: document.getElementById("viewHistoryNav"),
  copyTopPromo: document.getElementById("copyTopPromo"),

  // Hero Form
  mobileInput: document.getElementById("mobileInput"),
  detectedOpBadge: document.getElementById("detectedOpBadge"),
  opIndicatorDot: document.getElementById("opIndicatorDot"),
  detectedOpName: document.getElementById("detectedOpName"),
  operatorSelect: document.getElementById("operatorSelect"),
  circleSelect: document.getElementById("circleSelect"),
  amountInput: document.getElementById("amountInput"),
  quickAmountChips: document.getElementById("quickAmountChips"),
  selectedPlanPreview: document.getElementById("selectedPlanPreview"),
  previewPlanName: document.getElementById("previewPlanName"),
  previewValidity: document.getElementById("previewValidity"),
  previewBenefits: document.getElementById("previewBenefits"),
  proceedRechargeBtn: document.getElementById("proceedRechargeBtn"),
  jumpToExplorerBtn: document.getElementById("jumpToExplorerBtn"),
  btnPrepaid: document.getElementById("btnPrepaid"),
  btnPostpaid: document.getElementById("btnPostpaid"),
  openBrowsePlansModal: document.getElementById("openBrowsePlansModal"),
  quickPlanBtn: document.getElementById("quickPlanBtn"),
  headerRechargeBtn: document.getElementById("headerRechargeBtn"),
  floatingRechargeBtn: document.getElementById("floatingRechargeBtn"),

  // Plan Explorer
  operatorTabs: document.querySelectorAll(".op-tab-btn"),
  planSearchInput: document.getElementById("planSearchInput"),
  clearPlanSearch: document.getElementById("clearPlanSearch"),
  categoryFilterContainer: document.getElementById("categoryFilterContainer"),
  categoryPills: document.querySelectorAll(".cat-pill"),
  plansGrid: document.getElementById("plansGrid"),
  emptyPlansState: document.getElementById("emptyPlansState"),
  resetPlanFilterBtn: document.getElementById("resetPlanFilterBtn"),
  jioCount: document.getElementById("jioCount"),
  airtelCount: document.getElementById("airtelCount"),
  viCount: document.getElementById("viCount"),
  bsnlCount: document.getElementById("bsnlCount"),

  // History Section
  historyTableContainer: document.getElementById("historyTableContainer"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),

  // Checkout Modal
  checkoutModal: document.getElementById("checkoutModal"),
  closeCheckoutModal: document.getElementById("closeCheckoutModal"),
  cancelCheckoutBtn: document.getElementById("cancelCheckoutBtn"),
  checkoutPaymentView: document.getElementById("checkoutPaymentView"),
  checkoutProcessingView: document.getElementById("checkoutProcessingView"),
  checkoutSuccessView: document.getElementById("checkoutSuccessView"),
  modalMobileNum: document.getElementById("modalMobileNum"),
  modalOperatorCircle: document.getElementById("modalOperatorCircle"),
  modalOriginalPrice: document.getElementById("modalOriginalPrice"),
  modalPayablePrice: document.getElementById("modalPayablePrice"),
  modalBenefitChips: document.getElementById("modalBenefitChips"),
  couponInput: document.getElementById("couponInput"),
  applyCouponBtn: document.getElementById("applyCouponBtn"),
  couponFeedback: document.getElementById("couponFeedback"),
  payOptions: document.querySelectorAll(".pay-option"),
  subviewUpiQr: document.getElementById("subviewUpiQr"),
  subviewUpiId: document.getElementById("subviewUpiId"),
  subviewCard: document.getElementById("subviewCard"),
  subviewNetbanking: document.getElementById("subviewNetbanking"),
  qrCountdown: document.getElementById("qrCountdown"),
  payNowBtn: document.getElementById("payNowBtn"),
  payBtnAmount: document.getElementById("payBtnAmount"),
  processingStatusText: document.getElementById("processingStatusText"),
  step1: document.getElementById("step1"),
  step2: document.getElementById("step2"),
  step3: document.getElementById("step3"),

  // Receipt Elements
  receiptMobile: document.getElementById("receiptMobile"),
  receiptOperator: document.getElementById("receiptOperator"),
  receiptPlanPrice: document.getElementById("receiptPlanPrice"),
  receiptDiscountRow: document.getElementById("receiptDiscountRow"),
  receiptDiscount: document.getElementById("receiptDiscount"),
  receiptTotalPaid: document.getElementById("receiptTotalPaid"),
  receiptTxnId: document.getElementById("receiptTxnId"),
  receiptOpRef: document.getElementById("receiptOpRef"),
  receiptDateTime: document.getElementById("receiptDateTime"),
  receiptBenefits: document.getElementById("receiptBenefits"),
  printReceiptBtn: document.getElementById("printReceiptBtn"),
  doneRechargeBtn: document.getElementById("doneRechargeBtn"),

  // Guide Modal
  guideReaderModal: document.getElementById("guideReaderModal"),
  closeGuideModal: document.getElementById("closeGuideModal"),
  guideModalBody: document.getElementById("guideModalBody"),

  // Support Modal
  supportModal: document.getElementById("supportModal"),
  closeSupportModal: document.getElementById("closeSupportModal"),
  openSupportModalBtn: document.getElementById("openSupportModalBtn"),
  privacyTermsBtn: document.getElementById("privacyTermsBtn"),
  supportForm: document.getElementById("supportForm"),
  supportFeedback: document.getElementById("supportFeedback"),

  // Newsletter & FAQs
  newsletterForm: document.getElementById("newsletterForm"),
  newsletterEmail: document.getElementById("newsletterEmail"),
  newsletterMsg: document.getElementById("newsletterMsg"),
  faqAccordion: document.getElementById("faqAccordion"),
  toastContainer: document.getElementById("toastContainer")
};

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  loadHistoryFromStorage();
  updatePlanCounts();
  renderPlans();
  renderHistoryTable();
  setupEventListeners();
  startQrTimer();
});

// ==================== EVENT LISTENERS SETUP ====================
function setupEventListeners() {
  // Mobile Drawer Toggle
  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener("click", () => {
      elements.mobileDrawer.classList.toggle("open");
    });
  }
  if (elements.drawerClose) {
    elements.drawerClose.addEventListener("click", () => {
      elements.mobileDrawer.classList.remove("open");
    });
  }
  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", () => {
      elements.mobileDrawer.classList.remove("open");
    });
  });

  // Top Bar Promo Copy
  if (elements.copyTopPromo) {
    elements.copyTopPromo.addEventListener("click", () => {
      copyToClipboard("SUPER50", "Promo code SUPER50 copied! Apply at checkout.");
    });
  }

  // Pre-filled Hero Operator Buttons
  document.querySelectorAll(".op-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const op = tag.getAttribute("data-operator");
      selectOperator(op);
      showToast(`Selected ${op} as operator`, "info");
    });
  });

  // Mobile Number Auto-Detection & Input Filter
  if (elements.mobileInput) {
    elements.mobileInput.addEventListener("input", handleMobileInput);
  }

  // Operator & Circle Select
  if (elements.operatorSelect) {
    elements.operatorSelect.addEventListener("change", (e) => {
      selectOperator(e.target.value);
    });
  }
  if (elements.circleSelect) {
    elements.circleSelect.addEventListener("change", (e) => {
      appState.selectedCircle = e.target.value;
    });
  }

  // Quick Amount Chips
  document.querySelectorAll(".amount-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const amt = parseInt(chip.getAttribute("data-amount"), 10);
      elements.amountInput.value = amt;
      document.querySelectorAll(".amount-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      findAndPreviewPlan(amt);
    });
  });

  // Amount Input Manual Entry
  if (elements.amountInput) {
    elements.amountInput.addEventListener("input", () => {
      const val = parseInt(elements.amountInput.value, 10);
      findAndPreviewPlan(val);
    });
  }

  // Prepaid / Postpaid Switches
  if (elements.btnPrepaid && elements.btnPostpaid) {
    elements.btnPrepaid.addEventListener("click", () => {
      elements.btnPrepaid.classList.add("active");
      elements.btnPostpaid.classList.remove("active");
      appState.connectionType = "prepaid";
    });
    elements.btnPostpaid.addEventListener("click", () => {
      elements.btnPostpaid.classList.add("active");
      elements.btnPrepaid.classList.remove("active");
      appState.connectionType = "postpaid";
    });
  }

  // Proceed to Recharge Button (Hero)
  if (elements.proceedRechargeBtn) {
    elements.proceedRechargeBtn.addEventListener("click", handleHeroProceedRecharge);
  }

  // Browse All Plans Jump
  if (elements.jumpToExplorerBtn) {
    elements.jumpToExplorerBtn.addEventListener("click", scrollToExplorer);
  }
  if (elements.openBrowsePlansModal) {
    elements.openBrowsePlansModal.addEventListener("click", scrollToExplorer);
  }
  if (elements.quickPlanBtn) {
    elements.quickPlanBtn.addEventListener("click", scrollToExplorer);
  }
  if (elements.headerRechargeBtn) {
    elements.headerRechargeBtn.addEventListener("click", () => {
      elements.mobileInput.focus();
      elements.mobileInput.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
  if (elements.floatingRechargeBtn) {
    elements.floatingRechargeBtn.addEventListener("click", () => {
      elements.mobileInput.focus();
      elements.mobileInput.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  // Operator Tabs in Plan Explorer
  elements.operatorTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const op = tab.getAttribute("data-op");
      selectOperator(op);
    });
  });

  // Category Filter Pills
  elements.categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      elements.categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      appState.currentCategory = pill.getAttribute("data-category");
      renderPlans();
    });
  });

  // Live Plan Search
  if (elements.planSearchInput) {
    elements.planSearchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value.trim().toLowerCase();
      elements.clearPlanSearch.style.display = appState.searchQuery ? "block" : "none";
      renderPlans();
    });
  }
  if (elements.clearPlanSearch) {
    elements.clearPlanSearch.addEventListener("click", () => {
      elements.planSearchInput.value = "";
      appState.searchQuery = "";
      elements.clearPlanSearch.style.display = "none";
      renderPlans();
    });
  }
  if (elements.resetPlanFilterBtn) {
    elements.resetPlanFilterBtn.addEventListener("click", () => {
      elements.planSearchInput.value = "";
      appState.searchQuery = "";
      elements.clearPlanSearch.style.display = "none";
      appState.currentCategory = "all";
      elements.categoryPills.forEach(p => p.classList.toggle("active", p.getAttribute("data-category") === "all"));
      renderPlans();
    });
  }

  // Network Cards Direct Click
  document.querySelectorAll(".select-operator-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const op = btn.getAttribute("data-operator");
      selectOperator(op);
      scrollToExplorer();
    });
  });

  // Spotlight Select Buttons
  document.querySelectorAll(".apply-plan-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const op = btn.getAttribute("data-operator");
      const amt = parseInt(btn.getAttribute("data-amount"), 10);
      selectOperator(op);
      elements.amountInput.value = amt;
      findAndPreviewPlan(amt);
      elements.mobileInput.focus();
      elements.mobileInput.scrollIntoView({ behavior: "smooth", block: "center" });
      showToast(`Selected ₹${amt} ${op} pack. Enter your number to proceed!`, "info");
    });
  });

  // Coupon Copy Buttons
  document.querySelectorAll(".copy-coupon-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-code");
      copyToClipboard(code, `Coupon code ${code} copied!`);
      // If modal is open, auto paste
      if (elements.couponInput) {
        elements.couponInput.value = code;
      }
    });
  });

  // Quick Promo in Checkout
  document.querySelectorAll(".quick-promo-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const promo = btn.getAttribute("data-promo");
      elements.couponInput.value = promo;
      applyCoupon(promo);
    });
  });

  // Coupon Apply in Checkout
  if (elements.applyCouponBtn) {
    elements.applyCouponBtn.addEventListener("click", () => {
      const code = elements.couponInput.value.trim().toUpperCase();
      applyCoupon(code);
    });
  }

  // Payment Options Radios
  elements.payOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      elements.payOptions.forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      const method = opt.getAttribute("data-method");
      
      elements.subviewUpiQr.style.display = method === "upi-qr" ? "block" : "none";
      elements.subviewUpiId.style.display = method === "upi-id" ? "block" : "none";
      elements.subviewCard.style.display = method === "card" ? "block" : "none";
      elements.subviewNetbanking.style.display = method === "netbanking" ? "block" : "none";
    });
  });

  // Pay Now Button
  if (elements.payNowBtn) {
    elements.payNowBtn.addEventListener("click", initiatePaymentProcess);
  }

  // Modal Closers
  if (elements.closeCheckoutModal) {
    elements.closeCheckoutModal.addEventListener("click", closeCheckout);
  }
  if (elements.cancelCheckoutBtn) {
    elements.cancelCheckoutBtn.addEventListener("click", closeCheckout);
  }
  if (elements.doneRechargeBtn) {
    elements.doneRechargeBtn.addEventListener("click", () => {
      closeCheckout();
      elements.mobileInput.value = "";
      elements.amountInput.value = "";
      elements.selectedPlanPreview.style.display = "none";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Print Receipt Button
  if (elements.printReceiptBtn) {
    elements.printReceiptBtn.addEventListener("click", printReceipt);
  }

  // Guides Reading Modal
  document.querySelectorAll(".read-guide-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const guideId = btn.getAttribute("data-guide-id");
      openGuideModal(guideId);
    });
  });
  if (elements.closeGuideModal) {
    elements.closeGuideModal.addEventListener("click", () => {
      elements.guideReaderModal.style.display = "none";
    });
  }

  // Support Desk Modal
  if (elements.openSupportModalBtn) {
    elements.openSupportModalBtn.addEventListener("click", () => {
      elements.supportModal.style.display = "grid";
    });
  }
  if (elements.closeSupportModal) {
    elements.closeSupportModal.addEventListener("click", () => {
      elements.supportModal.style.display = "none";
    });
  }
  if (elements.supportForm) {
    elements.supportForm.addEventListener("submit", (e) => {
      e.preventDefault();
      elements.supportForm.style.display = "none";
      elements.supportFeedback.style.display = "block";
      showToast("Support ticket logged successfully!", "success");
    });
  }

  // Privacy & Terms Disclaimer Alert
  if (elements.privacyTermsBtn) {
    elements.privacyTermsBtn.addEventListener("click", () => {
      showToast("RechargeWise adheres to standard RBI & BBPS privacy norms.", "info");
    });
  }

  // Newsletter Form
  if (elements.newsletterForm) {
    elements.newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      elements.newsletterEmail.value = "";
      elements.newsletterMsg.textContent = "✅ You're subscribed! Watch your inbox for weekly deal alerts.";
      elements.newsletterMsg.style.color = "var(--success)";
      showToast("Subscribed to deal alerts!", "success");
    });
  }

  // FAQ Accordion
  if (elements.faqAccordion) {
    const faqItems = elements.faqAccordion.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    });
  }

  // Clear History
  if (elements.clearHistoryBtn) {
    elements.clearHistoryBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your recharge history?")) {
        appState.rechargeHistory = [];
        localStorage.removeItem("rechargewise_history");
        renderHistoryTable();
        showToast("Recharge history cleared.", "info");
      }
    });
  }

  // Close modals on escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCheckout();
      elements.guideReaderModal.style.display = "none";
      elements.supportModal.style.display = "none";
    }
  });

  // Footer Category links
  document.querySelectorAll(".cat-link-trigger").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.getAttribute("data-cat");
      appState.currentCategory = cat;
      elements.categoryPills.forEach(p => p.classList.toggle("active", p.getAttribute("data-category") === cat));
      renderPlans();
      scrollToExplorer();
    });
  });

  // Footer Operator links
  document.querySelectorAll(".op-link-trigger").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const op = link.getAttribute("data-operator");
      selectOperator(op);
      scrollToExplorer();
    });
  });
}

// ==================== AUTO-DETECT OPERATOR ====================
function handleMobileInput(e) {
  let val = e.target.value.replace(/\D/g, ""); // allow numbers only
  if (val.length > 10) val = val.substring(0, 10);
  e.target.value = val;
  appState.selectedMobile = val;

  if (val.length >= 4) {
    const prefix = val.substring(0, 4);
    const p2 = parseInt(val.substring(0, 2), 10);

    let detected = "Jio";
    let color = "var(--jio-brand)";

    // Common Indian Telecom Prefix Heuristics
    if (p2 >= 90 && p2 <= 91) {
      detected = "Airtel";
      color = "var(--airtel-brand)";
    } else if (p2 === 98 || p2 === 99) {
      detected = "Airtel";
      color = "var(--airtel-brand)";
    } else if (p2 >= 92 && p2 <= 96) {
      detected = "Vi";
      color = "var(--vi-brand)";
    } else if (p2 === 94 || p2 === 84 || p2 === 85) {
      detected = "BSNL";
      color = "var(--bsnl-brand)";
    } else if (val.startsWith("6") || val.startsWith("70") || val.startsWith("79")) {
      detected = "Jio";
      color = "var(--jio-brand)";
    }

    elements.detectedOpName.textContent = detected;
    elements.opIndicatorDot.style.background = color;
    elements.operatorSelect.value = detected;
    selectOperator(detected, false); // select without re-scrolling
  } else {
    elements.detectedOpName.textContent = "Auto Detect";
    elements.opIndicatorDot.style.background = "#cbd5e1";
  }
}

// ==================== OPERATOR SWITCHING ====================
function selectOperator(opName, updateExplorer = true) {
  if (!PLANS_DATABASE[opName]) return;
  appState.currentOperator = opName;

  // Update hero operator dropdown
  if (elements.operatorSelect) {
    elements.operatorSelect.value = opName;
  }

  // Update tabs in explorer
  elements.operatorTabs.forEach(tab => {
    const isTarget = tab.getAttribute("data-op") === opName;
    tab.classList.toggle("active", isTarget);
    tab.setAttribute("aria-selected", isTarget ? "true" : "false");
  });

  // Re-render plans
  if (updateExplorer) {
    renderPlans();
  }

  // Refresh plan preview if amount entered
  if (elements.amountInput && elements.amountInput.value) {
    findAndPreviewPlan(parseInt(elements.amountInput.value, 10));
  }
}

// ==================== PLAN PREVIEW IN HERO ====================
function findAndPreviewPlan(amount) {
  if (!amount) {
    elements.selectedPlanPreview.style.display = "none";
    appState.selectedPlan = null;
    return;
  }

  const opPlans = PLANS_DATABASE[appState.currentOperator] || [];
  const found = opPlans.find(p => p.price === amount);

  if (found) {
    appState.selectedPlan = found;
    elements.previewPlanName.textContent = `₹${found.price} Plan Selected`;
    elements.previewValidity.textContent = found.validity;
    elements.previewBenefits.textContent = `${found.data} · ${found.voice} · ${found.sms}`;
    elements.selectedPlanPreview.style.display = "block";
  } else {
    // Generic placeholder plan
    appState.selectedPlan = {
      id: `custom_${amount}`,
      operator: appState.currentOperator,
      price: amount,
      validity: "Standard Validity",
      data: "Talktime & Data benefits apply",
      voice: "Standard Calling",
      sms: "Standard SMS",
      categories: ["custom"],
      tag: "Custom Amount",
      ott: [],
      perks: ["Direct telecom operator top-up"]
    };
    elements.previewPlanName.textContent = `₹${amount} Custom Top-up`;
    elements.previewValidity.textContent = "Instant Recharge";
    elements.previewBenefits.textContent = `Full talktime / standard recharge for ${appState.currentOperator}`;
    elements.selectedPlanPreview.style.display = "block";
  }
}

// ==================== RENDER PLANS GRID ====================
function renderPlans() {
  const opPlans = PLANS_DATABASE[appState.currentOperator] || [];
  
  // Filter by category
  let filtered = opPlans.filter(plan => {
    if (appState.currentCategory === "all") return true;
    return plan.categories.includes(appState.currentCategory);
  });

  // Filter by search query
  if (appState.searchQuery) {
    const q = appState.searchQuery;
    filtered = filtered.filter(plan => {
      const priceStr = plan.price.toString();
      const valStr = plan.validity.toLowerCase();
      const dataStr = plan.data.toLowerCase();
      const ottStr = (plan.ott || []).join(" ").toLowerCase();
      const tagStr = (plan.tag || "").toLowerCase();
      const perksStr = (plan.perks || []).join(" ").toLowerCase();

      return priceStr.includes(q) || 
             valStr.includes(q) || 
             dataStr.includes(q) || 
             ottStr.includes(q) || 
             tagStr.includes(q) || 
             perksStr.includes(q);
    });
  }

  // Handle empty state
  if (filtered.length === 0) {
    elements.plansGrid.innerHTML = "";
    elements.emptyPlansState.style.display = "block";
    return;
  }
  elements.emptyPlansState.style.display = "none";

  // Build Plan Cards HTML
  const cardsHtml = filtered.map(plan => {
    const ottPillHtml = plan.ott && plan.ott.length > 0 
      ? `<div class="plan-ott-pills">
           <span class="ott-badge">OTT</span>
           <span>${plan.ott.join(" · ")}</span>
         </div>` 
      : "";

    const discountPill = plan.mrp && plan.mrp > plan.price
      ? `<span class="plan-discount-pill">Save ₹${plan.mrp - plan.price}</span>`
      : "";

    const strikethroughHtml = plan.mrp && plan.mrp > plan.price
      ? `<span class="plan-strikethrough">₹${plan.mrp}</span>`
      : "";

    const perksListHtml = (plan.perks || []).map(perk => `
      <li><span class="feature-icon">✓</span> <span>${perk}</span></li>
    `).join("");

    return `
      <article class="plan-card" data-plan-id="${plan.id}">
        ${plan.tag ? `<span class="plan-card-tag">${plan.tag}</span>` : ""}
        
        <div class="plan-price-row">
          <span class="plan-price">₹${plan.price}</span>
          ${strikethroughHtml}
          ${discountPill}
        </div>

        <div class="plan-badges-strip">
          <span class="badge-detail">📅 ${plan.validity}</span>
          <span class="badge-detail highlight">📶 ${plan.data}</span>
          <span class="badge-detail">📞 ${plan.voice}</span>
        </div>

        ${ottPillHtml}

        <ul class="plan-features-list">
          ${perksListHtml}
        </ul>

        <div class="plan-card-actions">
          <button class="btn btn-primary btn-block select-this-plan-btn" data-plan-id="${plan.id}">
            <span>Recharge ₹${plan.price}</span>
            <span>⚡</span>
          </button>
        </div>
      </article>
    `;
  }).join("");

  elements.plansGrid.innerHTML = cardsHtml;

  // Attach click events on "Recharge ₹xxx" buttons
  elements.plansGrid.querySelectorAll(".select-this-plan-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const planId = btn.getAttribute("data-plan-id");
      const targetPlan = opPlans.find(p => p.id === planId);
      if (targetPlan) {
        appState.selectedPlan = targetPlan;
        elements.amountInput.value = targetPlan.price;
        findAndPreviewPlan(targetPlan.price);

        // If mobile number already filled, trigger checkout directly
        if (appState.selectedMobile && appState.selectedMobile.length === 10) {
          openCheckout(targetPlan);
        } else {
          // Focus on mobile number input in hero
          elements.mobileInput.focus();
          elements.mobileInput.scrollIntoView({ behavior: "smooth", block: "center" });
          showToast(`Selected ₹${targetPlan.price} pack! Please enter 10-digit mobile number.`, "info");
        }
      }
    });
  });
}

// ==================== UPDATE COUNTS ====================
function updatePlanCounts() {
  if (elements.jioCount) elements.jioCount.textContent = `${(PLANS_DATABASE.Jio || []).length} Plans`;
  if (elements.airtelCount) elements.airtelCount.textContent = `${(PLANS_DATABASE.Airtel || []).length} Plans`;
  if (elements.viCount) elements.viCount.textContent = `${(PLANS_DATABASE.Vi || []).length} Plans`;
  if (elements.bsnlCount) elements.bsnlCount.textContent = `${(PLANS_DATABASE.BSNL || []).length} Plans`;
}

// ==================== SCROLL TO EXPLORER ====================
function scrollToExplorer() {
  const el = document.getElementById("plans-explorer");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ==================== PROCEED RECHARGE (HERO FORM) ====================
function handleHeroProceedRecharge() {
  const phone = elements.mobileInput.value.replace(/\D/g, "");
  if (!phone || phone.length !== 10) {
    elements.mobileInput.focus();
    showToast("Please enter a valid 10-digit mobile number.", "error");
    return;
  }

  const amt = parseInt(elements.amountInput.value, 10);
  if (!amt || isNaN(amt) || amt < 10) {
    elements.amountInput.focus();
    showToast("Please select or enter a recharge amount (min ₹10).", "error");
    return;
  }

  if (!appState.selectedPlan) {
    findAndPreviewPlan(amt);
  }

  openCheckout(appState.selectedPlan);
}

// ==================== CHECKOUT MODAL FLOW ====================
function openCheckout(plan) {
  if (!plan) return;
  appState.selectedPlan = plan;
  appState.activeCoupon = null;

  // Populate Order Summary
  const phone = elements.mobileInput.value || "9876543210";
  const circle = elements.circleSelect.value || "Gujarat";
  const op = appState.currentOperator;

  elements.modalMobileNum.textContent = `+91 ${phone.substring(0, 5)} ${phone.substring(5)}`;
  elements.modalOperatorCircle.textContent = `${op} · ${circle} ${appState.connectionType.toUpperCase()}`;
  elements.modalOriginalPrice.style.display = "none";
  elements.modalPayablePrice.textContent = `₹${plan.price}`;
  elements.payBtnAmount.textContent = `₹${plan.price}`;

  // Benefit Chips
  elements.modalBenefitChips.innerHTML = `
    <span class="b-chip">📅 ${plan.validity}</span>
    <span class="b-chip">📶 ${plan.data}</span>
    <span class="b-chip">📞 ${plan.voice}</span>
    ${plan.ott && plan.ott.length ? `<span class="b-chip">🎬 ${plan.ott[0]}</span>` : ""}
  `;

  // Reset Coupon feedback & input
  elements.couponInput.value = "";
  elements.couponFeedback.style.display = "none";
  elements.couponFeedback.textContent = "";

  // Reset Views
  elements.checkoutPaymentView.style.display = "block";
  elements.checkoutProcessingView.style.display = "none";
  elements.checkoutSuccessView.style.display = "none";

  // Display Modal
  elements.checkoutModal.style.display = "grid";
}

function closeCheckout() {
  elements.checkoutModal.style.display = "none";
}

// ==================== COUPON ENGINE ====================
function applyCoupon(couponCode) {
  const code = (couponCode || "").trim().toUpperCase();
  const coupon = VALID_COUPONS[code];

  if (!coupon) {
    elements.couponFeedback.textContent = "❌ Invalid promo code. Try SUPER50 or SAVE25.";
    elements.couponFeedback.className = "coupon-feedback error";
    elements.couponFeedback.style.display = "block";
    appState.activeCoupon = null;
    recalcPayableAmount();
    return;
  }

  const basePrice = appState.selectedPlan ? appState.selectedPlan.price : 0;
  if (basePrice < coupon.minAmount) {
    elements.couponFeedback.textContent = `❌ Minimum recharge amount for ${code} is ₹${coupon.minAmount}.`;
    elements.couponFeedback.className = "coupon-feedback error";
    elements.couponFeedback.style.display = "block";
    appState.activeCoupon = null;
    recalcPayableAmount();
    return;
  }

  appState.activeCoupon = coupon;
  elements.couponFeedback.textContent = `🎉 ${coupon.description}`;
  elements.couponFeedback.className = "coupon-feedback success";
  elements.couponFeedback.style.display = "block";

  recalcPayableAmount();
  showToast(`Coupon ${code} applied successfully!`, "success");
}

function recalcPayableAmount() {
  const basePrice = appState.selectedPlan ? appState.selectedPlan.price : 0;
  let payable = basePrice;
  let discount = 0;

  if (appState.activeCoupon) {
    if (appState.activeCoupon.discountType === "flat") {
      discount = appState.activeCoupon.discountValue;
    } else if (appState.activeCoupon.discountType === "percent") {
      discount = Math.min(
        Math.round((basePrice * appState.activeCoupon.discountValue) / 100),
        appState.activeCoupon.maxDiscount || 50
      );
    }
  }

  payable = Math.max(basePrice - discount, 0);

  if (discount > 0) {
    elements.modalOriginalPrice.textContent = `₹${basePrice}`;
    elements.modalOriginalPrice.style.display = "inline";
    elements.modalPayablePrice.textContent = `₹${payable}`;
    elements.payBtnAmount.textContent = `₹${payable}`;
  } else {
    elements.modalOriginalPrice.style.display = "none";
    elements.modalPayablePrice.textContent = `₹${basePrice}`;
    elements.payBtnAmount.textContent = `₹${basePrice}`;
  }
}

// ==================== PAYMENT PROCESSING SIMULATION ====================
function initiatePaymentProcess() {
  elements.checkoutPaymentView.style.display = "none";
  elements.checkoutProcessingView.style.display = "block";

  // Step 1: Connecting
  elements.processingStatusText.textContent = "Connecting to secure payment gateway...";
  elements.step1.className = "proc-step active";
  elements.step2.className = "proc-step";
  elements.step3.className = "proc-step";

  setTimeout(() => {
    elements.step1.className = "proc-step done";
    elements.step2.className = "proc-step active";
    elements.processingStatusText.textContent = `Pushing recharge request to ${appState.currentOperator} telecom server...`;
  }, 1000);

  setTimeout(() => {
    elements.step2.className = "proc-step done";
    elements.step3.className = "proc-step active";
    elements.processingStatusText.textContent = "Activating pack and generating digital receipt...";
  }, 2000);

  setTimeout(() => {
    completePaymentSuccess();
  }, 2800);
}

function completePaymentSuccess() {
  const plan = appState.selectedPlan;
  const phone = elements.mobileInput.value || "9876543210";
  const op = appState.currentOperator;
  const circle = elements.circleSelect.value || "Gujarat";
  const dateStr = new Date().toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const txnId = "TXN" + Math.floor(1000000000 + Math.random() * 9000000000);
  const opRef = op.toUpperCase().substring(0, 3) + Math.floor(10000000 + Math.random() * 90000000);

  let discount = 0;
  if (appState.activeCoupon) {
    if (appState.activeCoupon.discountType === "flat") {
      discount = appState.activeCoupon.discountValue;
    } else {
      discount = Math.min(Math.round((plan.price * appState.activeCoupon.discountValue) / 100), 40);
    }
  }
  const totalPaid = Math.max(plan.price - discount, 0);

  // Fill Receipt
  elements.receiptMobile.textContent = `+91 ${phone.substring(0, 5)} ${phone.substring(5)}`;
  elements.receiptOperator.textContent = `${op} · ${circle} (${appState.connectionType.toUpperCase()})`;
  elements.receiptPlanPrice.textContent = `₹${plan.price}`;
  
  if (discount > 0) {
    elements.receiptDiscountRow.style.display = "flex";
    elements.receiptDiscount.textContent = `-₹${discount}`;
  } else {
    elements.receiptDiscountRow.style.display = "none";
  }

  elements.receiptTotalPaid.textContent = `₹${totalPaid}`;
  elements.receiptTxnId.textContent = txnId;
  elements.receiptOpRef.textContent = opRef;
  elements.receiptDateTime.textContent = dateStr;
  elements.receiptBenefits.textContent = `${plan.validity} · ${plan.data} · ${plan.voice}`;

  // Record Transaction in History
  const record = {
    id: txnId,
    opRef: opRef,
    operator: op,
    circle: circle,
    mobile: phone,
    planPrice: plan.price,
    paidAmount: totalPaid,
    discount: discount,
    validity: plan.validity,
    data: plan.data,
    date: dateStr,
    timestamp: Date.now()
  };

  appState.rechargeHistory.unshift(record);
  saveHistoryToStorage();
  renderHistoryTable();

  // Show Success View
  elements.checkoutProcessingView.style.display = "none";
  elements.checkoutSuccessView.style.display = "block";

  showToast(`Recharge of ₹${totalPaid} successful! SMS dispatched.`, "success");
}

// ==================== RECHARGE HISTORY & STORAGE ====================
function saveHistoryToStorage() {
  try {
    localStorage.setItem("rechargewise_history", JSON.stringify(appState.rechargeHistory));
    if (elements.historyCounter) {
      elements.historyCounter.textContent = appState.rechargeHistory.length;
    }
  } catch (err) {
    console.error("Failed to save history", err);
  }
}

function loadHistoryFromStorage() {
  try {
    const saved = localStorage.getItem("rechargewise_history");
    if (saved) {
      appState.rechargeHistory = JSON.parse(saved);
      if (elements.historyCounter) {
        elements.historyCounter.textContent = appState.rechargeHistory.length;
      }
    }
  } catch (err) {
    console.error("Failed to parse history", err);
  }
}

function renderHistoryTable() {
  if (!elements.historyTableContainer) return;

  if (appState.rechargeHistory.length === 0) {
    elements.historyTableContainer.innerHTML = `
      <div class="history-empty-state">
        <div class="icon">📜</div>
        <h4>No past recharges found</h4>
        <p>Complete your first mobile recharge above to track status and download invoices.</p>
      </div>
    `;
    if (elements.clearHistoryBtn) elements.clearHistoryBtn.style.display = "none";
    return;
  }

  if (elements.clearHistoryBtn) elements.clearHistoryBtn.style.display = "inline-block";

  const rowsHtml = appState.rechargeHistory.map(item => {
    let opClass = "jio-bg";
    let initial = "J";
    if (item.operator === "Airtel") { opClass = "airtel-bg"; initial = "A"; }
    else if (item.operator === "Vi") { opClass = "vi-bg"; initial = "V"; }
    else if (item.operator === "BSNL") { opClass = "bsnl-bg"; initial = "B"; }

    return `
      <div class="history-item">
        <div class="hist-op-icon ${opClass}">${initial}</div>
        <div class="hist-details">
          <strong>+91 ${item.mobile}</strong>
          <small>${item.operator} · ${item.circle} · ${item.validity}</small>
        </div>
        <div class="hist-amount">
          <strong>₹${item.paidAmount}</strong>
          <small class="green-text">Paid</small>
        </div>
        <div class="hist-date">
          <span>${item.date}</span>
        </div>
        <div>
          <span class="hist-status-badge">✓ SUCCESS</span>
        </div>
        <div>
          <button class="btn btn-outline btn-sm repeat-recharge-btn" data-mobile="${item.mobile}" data-op="${item.operator}" data-amount="${item.planPrice}">
            Repeat ⚡
          </button>
        </div>
      </div>
    `;
  }).join("");

  elements.historyTableContainer.innerHTML = `
    <div class="history-list">
      ${rowsHtml}
    </div>
  `;

  // Attach Repeat Recharge click events
  elements.historyTableContainer.querySelectorAll(".repeat-recharge-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const mob = btn.getAttribute("data-mobile");
      const op = btn.getAttribute("data-op");
      const amt = parseInt(btn.getAttribute("data-amount"), 10);

      elements.mobileInput.value = mob;
      selectOperator(op);
      elements.amountInput.value = amt;
      findAndPreviewPlan(amt);

      handleHeroProceedRecharge();
    });
  });
}

// ==================== PRINT RECEIPT ====================
function printReceipt() {
  window.print();
}

// ==================== QR COUNTDOWN TIMER ====================
function startQrTimer() {
  let timeLeft = 299; // 4 mins 59 seconds
  setInterval(() => {
    if (timeLeft <= 0) timeLeft = 299;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    if (elements.qrCountdown) {
      elements.qrCountdown.textContent = `0${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }
    timeLeft--;
  }, 1000);
}

// ==================== GUIDE MODAL OPENER ====================
function openGuideModal(guideId) {
  const guide = GUIDE_ARTICLES[guideId];
  if (!guide || !elements.guideModalBody) return;

  elements.guideModalBody.innerHTML = guide.html;
  elements.guideReaderModal.style.display = "grid";
}

// ==================== UTILITIES: TOAST & CLIPBOARD ====================
function showToast(message, type = "info") {
  if (!elements.toastContainer) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === "success" ? "✓" : type === "error" ? "⚠️" : "ℹ️"}</span>
    <span>${message}</span>
  `;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function copyToClipboard(text, message) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message, "success");
    }).catch(() => {
      fallbackCopy(text, message);
    });
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  showToast(message, "success");
}
