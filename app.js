/**
 * AR/VR/MR Conference Acceptance Statistics - app.js
 * Longitudinal Paper Acceptance & Submission Intelligence Across Premier Venues
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Raw Data Fallback (Guarantees offline & direct file:/// compatibility)
  // =========================================================================
  const RAW_CONFERENCES_META = [
    {
      "id": "chi",
      "name": "CHI",
      "full_name": "ACM CHI Conference on Human Factors in Computing Systems",
      "since": 1982,
      "description": "The ACM Conference on Human Factors in Computing Systems (CHI) series of academic conferences is generally considered the most prestigious in the field of human-computer interaction. It is hosted by ACM SIGCHI, the Special Interest Group on Computer-Human Interaction. CHI has been held annually since 1982 and attracts thousands of international attendees.",
      "website": "https://chi.acm.org",
      "sources": [
        {
          "name": "ACM Digital Library (CHI)",
          "url": "https://dl.acm.org/conference/chi"
        },
        {
          "name": "Official Portal",
          "url": "https://chi.acm.org"
        }
      ],
      "annual_links": {
        "2016": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F2858036",
        "2017": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3025453",
        "2018": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3173574",
        "2019": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3290605",
        "2020": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3313831",
        "2021": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3411764",
        "2022": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3491102",
        "2023": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3544548",
        "2024": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3613904",
        "2025": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3706598",
        "2026": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3772318",
        "2027": ""
      },
      "csv_file": "chi.csv",
      "color": "#3B82F6",
      "bg_color": "rgba(59, 130, 246, 0.15)"
    },
    {
      "id": "uist",
      "name": "UIST",
      "full_name": "ACM Symposium on User Interface Software and Technology",
      "since": 1988,
      "description": "The premier forum for innovations in human-computer interfaces, graphical and tangible user interfaces, AR/VR software systems, input hardware, and interaction techniques.",
      "website": "https://uist.acm.org",
      "sources": [
        {
          "name": "ACM Digital Library (UIST)",
          "url": "https://dl.acm.org/conference/uist"
        }
      ],
      "annual_links": {
        "2016": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F2984511",
        "2017": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3126594",
        "2018": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3242587",
        "2019": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3332165",
        "2020": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3379337",
        "2021": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3472749",
        "2022": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3526113",
        "2023": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3586183",
        "2024": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3654777",
        "2025": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3746059",
        "2026": "https://uist.acm.org/uist2026/",
        "2027": ""
      },
      "csv_file": "uist.csv",
      "color": "#EC4899",
      "bg_color": "rgba(236, 72, 153, 0.15)"
    },
    {
      "id": "vr",
      "name": "IEEE VR",
      "full_name": "IEEE Conference on Virtual Reality and 3D User Interfaces",
      "since": 1993,
      "description": "The premier international event for presenting research breakthroughs in virtual reality, augmented reality, 3D user interfaces, and immersive visualization technologies. Note: The statistics of 2016 and 2017 data were the accumulation of papers submitted to IEEE VR and IEEE 3DUI (2016: 47/189 = 33/135(VR) + 18/54(3DUI); 2017: 54/221 = 39/174(VR) + 15/47(3DUI)).",
      "website": "https://ieeevr.org",
      "sources": [
        {
          "name": "IEEE Xplore Digital Library",
          "url": "https://ieeexplore.ieee.org/xpl/conhome/1000791/all-proceedings"
        },
        {
          "name": "IEEE VR Official Portal",
          "url": "https://ieeevr.org"
        }
      ],
      "annual_links": {
        "2016": "https://doi.org/10.1109/VR.2016.7504674",
        "2017": "https://doi.org/10.1109/VR.2017.7892221",
        "2018": "https://doi.org/10.1109/VR.2018.8446397",
        "2019": "https://doi.org/10.1109/VR.2019.8798110",
        "2020": "https://doi.org/10.1109/VR46266.2020.00123",
        "2021": "https://doi.org/10.1109/VR50410.2021.00007",
        "2022": "https://doi.org/10.1109/VR51125.2022.00007",
        "2023": "https://doi.org/10.1109/VR55154.2023.00006",
        "2024": "https://doi.org/10.1109/VR58804.2024.00007",
        "2025": "https://doi.org/10.1109/VR59515.2025.00007",
        "2026": "https://doi.org/10.1109/VR67842.2026.00007",
        "2027": ""
      },
      "csv_file": "vr.csv",
      "color": "#8B5CF6",
      "bg_color": "rgba(139, 92, 246, 0.15)"
    },
    {
      "id": "ismar",
      "name": "ISMAR",
      "full_name": "IEEE International Symposium on Mixed and Augmented Reality",
      "since": 2002,
      "description": "The premier international academic conference dedicated exclusively to Augmented Reality (AR), Mixed Reality (MR), and Virtual Reality (VR) scientific research and industrial applications.",
      "website": "https://www.ismar.net",
      "sources": [
        {
          "name": "IEEE Xplore Digital Library",
          "url": "https://ieeexplore.ieee.org/xpl/conhome/1810084/all-proceedings"
        },
        {
          "name": "ISMAR Official Portal",
          "url": "https://www.ismar.net"
        }
      ],
      "annual_links": {
        "2016": "https://doi.org/10.1109/ISMAR.2016.6",
        "2017": "https://doi.org/10.1109/ISMAR.2017.7",
        "2018": "https://doi.org/10.1109/ISMAR.2018.00007",
        "2019": "https://doi.org/10.1109/ISMAR.2019.00007",
        "2020": "https://doi.org/10.1109/ISMAR50242.2020.00007",
        "2021": "https://doi.org/10.1109/ISMAR52148.2021.00006",
        "2022": "https://doi.org/10.1109/ISMAR55827.2022.00006",
        "2023": "https://doi.org/10.1109/ISMAR59233.2023.00006",
        "2024": "https://doi.org/10.1109/ISMAR62088.2024.00006",
        "2025": "https://doi.org/10.1109/ISMAR67309.2025.00005",
        "2026": "https://www.ieeeismar.net/2026/",
        "2027": ""
      },
      "csv_file": "ismar.csv",
      "color": "#10B981",
      "bg_color": "rgba(16, 185, 129, 0.15)"
    },
    {
      "id": "vrst",
      "name": "VRST",
      "full_name": "ACM Symposium on Virtual Reality Software and Technology",
      "since": 1994,
      "description": "An internationally recognized symposium dedicated to software architectures, rendering algorithms, hardware interfaces, and applications for virtual, augmented, and mixed reality.",
      "website": "https://vrst.acm.org",
      "sources": [
        {
          "name": "ACM Digital Library (VRST)",
          "url": "https://dl.acm.org/conference/vrst"
        },
        {
          "name": "VRST Official Portal",
          "url": "https://vrst.acm.org/"
        }
      ],
      "annual_links": {
        "2016": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F2993369",
        "2017": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3139131",
        "2018": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3281505",
        "2019": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3359996",
        "2020": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3385956",
        "2021": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3489849",
        "2022": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3562939",
        "2023": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3611659",
        "2024": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3641825",
        "2025": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3756884",
        "2026": "https://vrst.acm.org/vrst2026/",
        "2027": ""
      },
      "csv_file": "vrst.csv",
      "color": "#06B6D4",
      "bg_color": "rgba(6, 182, 212, 0.15)"
    },
    {
      "id": "sui",
      "name": "SUI",
      "full_name": "ACM Symposium on Spatial User Interaction",
      "since": 2013,
      "description": "The premier venue for research on 3D spatial user interfaces, spatial computing, whole-body gesture/haptic interaction modalities, and virtual/augmented environments.",
      "website": "https://sui.acm.org",
      "sources": [
        {
          "name": "ACM Digital Library (SUI)",
          "url": "https://dl.acm.org/conference/sui"
        }
      ],
      "annual_links": {
        "2016": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F2983310",
        "2017": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3131277",
        "2018": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3267782",
        "2019": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3357251",
        "2020": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3385959",
        "2021": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3485279",
        "2022": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3565970",
        "2023": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3607822",
        "2024": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3677386",
        "2025": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3694907",
        "2026": "https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3822518",
        "2027": ""
      },
      "csv_file": "sui.csv",
      "color": "#F59E0B",
      "bg_color": "rgba(245, 158, 11, 0.15)"
    }
  ];

  const RAW_CSV_DATA = {
    chi: `Year,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027
Submission,2200,2400,2592,2958,3126,2845,2579,3182,4028,5020,6730,N/A
Accepted,600,600,666,703,758,747,637,879,1058,1249,1702,N/A
Accepted Rate,0.272727273,0.25,0.256944444,0.237660581,0.242482406,0.262565905,0.246994959,0.276241358,0.26266137,0.248804781,0.252897474,N/A
Sub Growth Rate,N/A,0.090909091,0.08,0.141203704,0.056795132,-0.089891235,-0.093497364,0.233811555,0.265870522,0.246276068,0.34063745,N/A
Acc Growth Rate,N/A,0,0.11,0.055555556,0.078236131,-0.014511873,-0.147255689,0.379905808,0.203640501,0.180529301,0.362690152,N/A`,

    ismar: `Year,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027
Submission,84,113,119,163,302,359,603,627,646,763,754,N/A
Accepted,23,31,33,50,87,80,128,173,177,217,198,N/A
Accepted Rate,0.273809524,0.274336283,0.277310924,0.306748466,0.28807947,0.222841226,0.212271973,0.275917065,0.273993808,0.28440367,0.262599469,N/A
Sub Growth Rate,N/A,0.345238095,0.053097345,0.369747899,0.852760736,0.188741722,0.679665738,0.039800995,0.03030303,0.181114551,-0.011795544,N/A
Acc Growth Rate,N/A,0.347826087,0.064516129,0.515151515,0.74,-0.08045977,0.6,0.3515625,0.023121387,0.225988701,-0.087557604,N/A`,

    sui: `Year,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027
Submission,77,46,61,60,36,43,43,92,91,104,110,N/A
Accepted,20,16,19,15,18,17,18,33,27,26,33,N/A
Accepted Rate,0.25974026,0.347826087,0.31147541,0.25,0.5,0.395348837,0.418604651,0.358695652,0.296703297,0.25,0.3,N/A
Sub Growth Rate,N/A,-0.402597403,0.326086957,-0.016393443,-0.4,0.194444444,0,1.139534884,-0.010869565,0.142857143,0.057692308,N/A
Acc Growth Rate,N/A,-0.2,0.1875,-0.210526316,0.2,-0.055555556,0.058823529,0.833333333,-0.181818182,-0.037037037,0.269230769,N/A`,

    uist: `Year,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027
Submission,384,324,375,381,450,367,372,483,608,947,1259,N/A
Accepted,79,73,80,93,97,95,98,121,146,210,253?,N/A
Accepted Rate,0.205729167,0.225308642,0.213333333,0.244094488,0.215555556,0.258855586,0.26344086,0.250517598,0.240131579,0.221752904,0.200953137,N/A
Sub Growth Rate,N/A,-0.15625,0.157407407,0.016,0.181102362,-0.184444444,0.013623978,0.298387097,0.258799172,0.557565789,0.329461457,N/A
Acc Growth Rate,N/A,-0.075949367,0.095890411,0.1625,0.043010753,-0.020618557,0.031578947,0.234693878,0.20661157,0.438356164,0.204761905,N/A`,

    vr: `Year,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027
Submission,189,221,316,442,486,389,418,612,627,785,775,N/A
Accepted,47,54,65,95,104,92,90,130,180,211,228,N/A
Accepted Rate,0.248677249,0.244343891,0.205696203,0.214932127,0.21399177,0.236503856,0.215311005,0.212418301,0.28708134,0.268789809,0.294193548,N/A
Sub Growth Rate,N/A,0.169312169,0.429864253,0.398734177,0.099547511,-0.199588477,0.074550129,0.464114833,0.024509804,0.25199362,-0.012738854,N/A
Acc Growth Rate,N/A,0.14893617,0.203703704,0.461538462,0.094736842,-0.115384615,-0.02173913,0.444444444,0.384615385,0.172222222,0.08056872,N/A`,

    vrst: `Year,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027
Submission,150,183,190,180,132,168,131,152,204,332,348,N/A
Accepted,39,41,42,39,35,44,35,39,45,90,94,N/A
Accepted Rate,0.26,0.224043716,0.221052632,0.216666667,0.265151515,0.261904762,0.267175573,0.256578947,0.220588235,0.271084337,0.270114943,N/A
Sub Growth Rate,N/A,0.22,0.038251366,-0.052631579,-0.266666667,0.272727273,-0.220238095,0.160305344,0.342105263,0.62745098,0.048192771,N/A
Acc Growth Rate,N/A,0.051282051,0.024390244,-0.071428571,-0.102564103,0.257142857,-0.204545455,0.114285714,0.153846154,1,0.044444444,N/A`
  };

  // =========================================================================
  // 2. State & Metric Definitions
  // =========================================================================
  const METRICS = {
    acceptance_rate: {
      key: "acceptance_rate",
      label: "Acceptance Rate",
      unit: "%",
      isPercent: true,
      description: "Ratio of accepted papers to total submitted papers",
      format: (val) => (val * 100).toFixed(1) + "%",
      formatShort: (val) => (val * 100).toFixed(0) + "%"
    },
    submission: {
      key: "submission",
      label: "Submissions",
      unit: "papers",
      isPercent: false,
      description: "Total research paper submissions received",
      format: (val) => Math.round(val).toLocaleString(),
      formatShort: (val) => Math.round(val).toLocaleString()
    },
    accepted: {
      key: "accepted",
      label: "Accepted Papers",
      unit: "papers",
      isPercent: false,
      description: "Total accepted papers published in main proceedings",
      format: (val) => Math.round(val).toLocaleString(),
      formatShort: (val) => Math.round(val).toLocaleString()
    },
    sub_growth: {
      key: "sub_growth",
      label: "Submission Growth",
      unit: "%",
      isPercent: true,
      description: "Year-over-Year percentage change in total submissions",
      format: (val) => (val > 0.0001 ? "+" : "") + (val * 100).toFixed(1) + "%",
      formatShort: (val) => (val > 0.0001 ? "+" : "") + (val * 100).toFixed(0) + "%"
    },
    acc_growth: {
      key: "acc_growth",
      label: "Accepted Growth",
      unit: "%",
      isPercent: true,
      description: "Year-over-Year percentage change in accepted papers count",
      format: (val) => (val > 0.0001 ? "+" : "") + (val * 100).toFixed(1) + "%",
      formatShort: (val) => (val > 0.0001 ? "+" : "") + (val * 100).toFixed(0) + "%"
    }
  };

  const appState = {
    currentView: "single", // "single" | "multi"
    selectedConf: "chi",
    selectedMetric: "acceptance_rate",
    singleChartType: "line", // "line" | "bar"
    multiChartType: "line",  // "line" | "bar"
    multiSelectedConfs: ["chi", "ismar", "sui", "uist", "vr", "vrst"],
    conferences: [],
    datasets: {}, // id -> parsed records
    years: []
  };

  // =========================================================================
  // 3. Data Parsing & Trend Estimation Logic
  // =========================================================================

  /**
   * Parses CSV string format:
   * Line 1: Year,2016,2017,...
   * Line 2: Submission,...
   * Line 3: Accepted,...
   * Line 4: Accepted Rate,...
   * Line 5: Sub Growth Rate,...
   * Line 6: Acc Growth Rate,...
   */
  function parseCSV(csvText) {
    const lines = csvText.trim().split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (lines.length < 4) return [];

    const rowMap = {};
    for (const line of lines) {
      const parts = line.split(",").map(p => p.trim());
      const header = parts[0].toLowerCase();
      const vals = parts.slice(1);

      if (header.includes("year")) {
        rowMap.years = vals.map(Number);
      } else if (header.startsWith("sub growth") || header === "sub growth rate") {
        rowMap.sub_growth = vals;
      } else if (header.startsWith("acc growth") || header === "acc growth rate") {
        rowMap.acc_growth = vals;
      } else if (header.includes("rate")) {
        rowMap.acceptance_rate = vals;
      } else if (header.startsWith("accepted") || header === "accepted") {
        rowMap.accepted = vals;
      } else if (header.startsWith("submission") || header === "submission") {
        rowMap.submission = vals;
      }
    }

    const years = rowMap.years || [];
    const parsedRecords = [];

    for (let i = 0; i < years.length; i++) {
      const y = years[i];
      const record = { year: y };

      for (const mKey of Object.keys(METRICS)) {
        const rawStr = (rowMap[mKey] && rowMap[mKey][i]) ? rowMap[mKey][i] : "N/A";
        record[mKey] = parseDataCell(rawStr);
      }

      // Defensive check: If submission is undisclosed or na, submission growth rate is undefined
      if (record.submission && record.submission.status !== "normal") {
        if (record.sub_growth && record.sub_growth.status === "normal") {
          record.sub_growth = { status: record.submission.status, value: null, estimated: null, raw: record.submission.raw };
        }
      }
      // Defensive check: If accepted is undisclosed or na, accepted growth rate is undefined
      if (record.accepted && record.accepted.status !== "normal") {
        if (record.acc_growth && record.acc_growth.status === "normal") {
          record.acc_growth = { status: record.accepted.status, value: null, estimated: null, raw: record.accepted.raw };
        }
      }

      // Smart Auto-Calculation: Compute acceptance rate and growth rates if missing/N/A from CSV
      if (record.acceptance_rate.status !== "normal" && record.submission.status === "normal" && record.accepted.status === "normal" && record.submission.value > 0) {
        const r = record.accepted.value / record.submission.value;
        record.acceptance_rate = { status: "normal", value: r, estimated: r, raw: String(r) };
      }
      if (i > 0) {
        const prev = parsedRecords[i - 1];
        if (record.sub_growth.status !== "normal" && prev && prev.submission.status === "normal" && record.submission.status === "normal" && prev.submission.value > 0) {
          const g = (record.submission.value - prev.submission.value) / prev.submission.value;
          record.sub_growth = { status: "normal", value: g, estimated: g, raw: String(g) };
        }
        if (record.acc_growth.status !== "normal" && prev && prev.accepted.status === "normal" && record.accepted.status === "normal" && prev.accepted.value > 0) {
          const g = (record.accepted.value - prev.accepted.value) / prev.accepted.value;
          record.acc_growth = { status: "normal", value: g, estimated: g, raw: String(g) };
        }
      }

      parsedRecords.push(record);
    }

    return parsedRecords;
  }

  function parseDataCell(str) {
    const s = String(str).trim();
    if (s.toLowerCase() === "n/a" || s === "") {
      return { status: "na", value: null, estimated: null, raw: "N/A" };
    }
    if (s.toLowerCase() === "undisclosed") {
      return { status: "undisclosed", value: null, estimated: null, raw: "Undisclosed" };
    }
    const num = parseFloat(s);
    if (isNaN(num)) {
      return { status: "na", value: null, estimated: null, raw: s };
    }
    return { status: "normal", value: num, estimated: num, raw: s };
  }

  /**
   * Extrapolates missing values (undisclosed or n/a) based on historical trends.
   * Uses recent 3-year momentum / linear regression to estimate reasonable coordinates.
   */
  function computeTrendEstimations(records) {
    for (const mKey of Object.keys(METRICS)) {
      // Gather normal historical data
      const validPoints = [];
      for (let i = 0; i < records.length; i++) {
        const item = records[i][mKey];
        if (item.status === "normal" && item.value !== null) {
          validPoints.push({ index: i, year: records[i].year, val: item.value });
        }
      }

      if (validPoints.length === 0) continue;

      // Compute regression slope from the first points (for backward extrapolation)
      // and last points (for forward extrapolation)
      let forwardSlope = 0;
      let backwardSlope = 0;

      if (validPoints.length >= 2) {
        // Trailing slope (last up to 4 points)
        const trailing = validPoints.slice(-4);
        let sX = 0, sY = 0, sXY = 0, sX2 = 0;
        const nT = trailing.length;
        for (const p of trailing) {
          sX += p.year; sY += p.val; sXY += p.year * p.val; sX2 += p.year * p.year;
        }
        const denomT = nT * sX2 - sX * sX;
        if (denomT !== 0) forwardSlope = (nT * sXY - sX * sY) / denomT;

        // Leading slope (first up to 4 points)
        const leading = validPoints.slice(0, 4);
        let lX = 0, lY = 0, lXY = 0, lX2 = 0;
        const nL = leading.length;
        for (const p of leading) {
          lX += p.year; lY += p.val; lXY += p.year * p.val; lX2 += p.year * p.year;
        }
        const denomL = nL * lX2 - lX * lX;
        if (denomL !== 0) backwardSlope = (nL * lXY - lX * lY) / denomL;
      }

      // Bound clamp helper for reasonable projection boundaries
      const clampVal = (val) => {
        if (mKey === "acceptance_rate") {
          return Math.max(0.08, Math.min(0.55, val));
        }
        if (mKey === "submission" || mKey === "accepted") {
          return Math.max(10, Math.round(val));
        }
        if (mKey === "sub_growth" || mKey === "acc_growth") {
          return Math.max(-0.4, Math.min(0.8, val));
        }
        return val;
      };

      const firstValid = validPoints[0];
      const lastValid = validPoints[validPoints.length - 1];

      // Acceptance Rate, Submission Growth, and Accepted Growth project using the historical mean of preceding valid data.
      // Submission Count and Accepted Papers retain the linear growth momentum slope.
      const isMeanProjectedMetric = mKey === "acceptance_rate" || mKey === "sub_growth" || mKey === "acc_growth";
      const histMean = validPoints.reduce((sum, p) => sum + p.val, 0) / validPoints.length;

      // 1. Backward extrapolation for leading missing years (i < firstValid.index)
      // Note: Do not extrapolate growth to the very first baseline year (index 0) since YoY growth has no prior year
      for (let i = firstValid.index - 1; i >= 0; i--) {
        if ((mKey === "sub_growth" || mKey === "acc_growth") && i === 0) continue;
        const item = records[i][mKey];
        if (item.status !== "normal") {
          if (isMeanProjectedMetric) {
            const est = clampVal(histMean);
            item.estimated = Number(est.toFixed(4));
          } else {
            const nextVal = records[i + 1][mKey].estimated;
            const est = clampVal(nextVal - backwardSlope);
            item.estimated = Number(est.toFixed(4));
          }
        }
      }

      // 2. Middle gap interpolation between valid points
      for (let v = 0; v < validPoints.length - 1; v++) {
        const start = validPoints[v];
        const end = validPoints[v + 1];
        const gap = end.index - start.index;
        if (gap > 1) {
          for (let i = start.index + 1; i < end.index; i++) {
            const item = records[i][mKey];
            if (item.status !== "normal") {
              const fraction = (i - start.index) / gap;
              const est = clampVal(start.val + fraction * (end.val - start.val));
              item.estimated = Number(est.toFixed(4));
            }
          }
        }
      }

      // 3. Forward extrapolation for trailing missing years (i > lastValid.index)
      for (let i = lastValid.index + 1; i < records.length; i++) {
        const item = records[i][mKey];
        if (item.status !== "normal") {
          if (isMeanProjectedMetric) {
            const est = clampVal(histMean);
            item.estimated = Number(est.toFixed(4));
          } else {
            const prevVal = records[i - 1][mKey].estimated;
            const est = clampVal(prevVal + forwardSlope);
            item.estimated = Number(est.toFixed(4));
          }
        }
      }
    }
  }

  // =========================================================================
  // 4. Pure SVG Chart Engine
  // =========================================================================

  /**
   * Generates a complete SVG line or bar chart.
   * Supports both Single-series (with projected trend lines & '?' badges)
   * and Multi-series (with grouped bars or multiple colorful lines).
   */
  class SvgChartRenderer {
    constructor(containerEl, tooltipEl) {
      this.container = containerEl;
      this.tooltip = tooltipEl;
      this.width = 920;
      this.height = 400;
      this.padding = { top: 45, right: 60, bottom: 65, left: 88 };
    }

    positionTooltip(tipX, tipY, containerRect) {
      this.tooltip.style.display = "block";
      const tipWidth = this.tooltip.offsetWidth || 180;
      const tipHeight = this.tooltip.offsetHeight || 80;

      // Smart Horizontal Alignment:
      // If tooltip would overflow the right edge of container, anchor it to the left of the cursor
      let transformX = "-50%";
      let leftPos = tipX;

      if (tipX + tipWidth * 0.55 > containerRect.width) {
        transformX = "-100%";
        leftPos = Math.min(tipX - 10, containerRect.width - 8);
      } else if (tipX - tipWidth * 0.55 < 0) {
        transformX = "0%";
        leftPos = Math.max(tipX + 10, 8);
      }

      // Smart Vertical Alignment:
      // If tooltip would overflow the top edge of container, flip it downwards
      let transformY = "-105%";
      let topPos = tipY;
      if (tipY - tipHeight - 10 < 0) {
        transformY = "15px";
      }

      this.tooltip.style.transform = `translate(${transformX}, ${transformY})`;
      this.tooltip.style.left = `${leftPos}px`;
      this.tooltip.style.top = `${topPos}px`;
    }

    renderSingle({ records, conf, metricKey, chartType }) {
      const metric = METRICS[metricKey];
      const isGrowth = metricKey === "sub_growth" || metricKey === "acc_growth";
      // YoY growth has no preceding baseline year for the very first tracked year (e.g. 2016), so start from second year
      const filteredRecords = (isGrowth && records.length > 1) ? records.slice(1) : records;
      const years = filteredRecords.map(r => r.year);
      const points = filteredRecords.map(r => ({
        year: r.year,
        raw: r[metricKey].raw,
        status: r[metricKey].status,
        val: r[metricKey].value,
        est: r[metricKey].estimated
      }));

      // Find min / max values
      const vals = points.map(p => (p.status === "normal" ? p.val : p.est)).filter(v => v !== null && !isNaN(v));
      const { minVal, maxVal, ticks } = this.calculateScale(vals, metricKey);

      const plotW = this.width - this.padding.left - this.padding.right;
      const plotH = this.height - this.padding.top - this.padding.bottom;

      const getX = (idx) => this.padding.left + (idx / (years.length - 1)) * plotW;
      const getY = (val) => {
        if (maxVal === minVal) return this.padding.top + plotH / 2;
        return this.padding.top + plotH - ((val - minVal) / (maxVal - minVal)) * plotH;
      };

      const axisY = this.padding.top + plotH;
      const hasZero = minVal <= 0 && maxVal >= 0;
      const zeroY = hasZero ? getY(0) : axisY;
      const isGrowthMetric = metricKey === "sub_growth" || metricKey === "acc_growth";

      // LinearGradient: if growth rate crossing 0, blend from conf.color above 0 to #EF4444 below 0
      let areaGradStops = "";
      if (hasZero && minVal < 0 && isGrowthMetric) {
        const zeroRatio = Math.max(0, Math.min(1, (zeroY - this.padding.top) / plotH));
        const zeroPctPre = Math.max(0, zeroRatio * 100 - 3).toFixed(1);
        const zeroPct = (zeroRatio * 100).toFixed(1);
        areaGradStops = `
          <stop offset="0%" stop-color="${conf.color}" stop-opacity="0.35"/>
          <stop offset="${zeroPctPre}%" stop-color="${conf.color}" stop-opacity="0.08"/>
          <stop offset="${zeroPct}%" stop-color="rgba(239, 68, 68, 0.08)" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#EF4444" stop-opacity="0.3"/>
        `;
      } else {
        areaGradStops = `
          <stop offset="0%" stop-color="${conf.color}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${conf.color}" stop-opacity="0.0"/>
        `;
      }

      // SVG building
      let svg = `<svg viewBox="0 0 ${this.width} ${this.height}" class="svg-chart" preserveAspectRatio="xMidYMid meet">`;
      svg += `<defs>
        <linearGradient id="areaGrad-${conf.id}" x1="0" y1="0" x2="0" y2="1">
          ${areaGradStops}
        </linearGradient>
        <filter id="glow-${conf.id}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="${conf.color}" flood-opacity="0.3"/>
        </filter>
      </defs>`;

      // Positive / Negative Zone Backgrounds (for growth rates)
      if (hasZero && isGrowthMetric) {
        if (zeroY > this.padding.top) {
          svg += `<rect x="${this.padding.left}" y="${this.padding.top}" width="${plotW}" height="${zeroY - this.padding.top}" class="chart-zone-positive" />`;
        }
        if (axisY > zeroY) {
          svg += `<rect x="${this.padding.left}" y="${zeroY}" width="${plotW}" height="${axisY - zeroY}" class="chart-zone-negative" />`;
        }
      }

      // 1. Grid lines and Y-axis labels
      for (const tick of ticks) {
        const y = getY(tick);
        const isZero = Math.abs(tick) < 0.0001;

        if (isZero && isGrowthMetric) {
          svg += `<line x1="${this.padding.left}" y1="${y}" x2="${this.width - this.padding.right}" y2="${y}" class="chart-zero-line" />`;
          svg += `<text x="${this.padding.left - 14}" y="${y + 5}" class="chart-axis-text chart-axis-zero" text-anchor="end">${metric.formatShort(tick)}</text>`;
        } else {
          svg += `<line x1="${this.padding.left}" y1="${y}" x2="${this.width - this.padding.right}" y2="${y}" class="chart-grid-line" />`;
          svg += `<text x="${this.padding.left - 14}" y="${y + 5}" class="chart-axis-text" text-anchor="end">${metric.formatShort(tick)}</text>`;
        }
      }

      // 2. X-axis line & Year labels
      svg += `<line x1="${this.padding.left}" y1="${axisY}" x2="${this.width - this.padding.right}" y2="${axisY}" class="chart-axis-line" />`;

      // 3. Render Chart Elements (Line vs Bar)
      if (chartType === "line") {
        svg += this.buildSingleLineChart({ points, years, conf, metric, getX, getY, axisY, isMulti: false });
      } else {
        svg += this.buildSingleBarChart({ points, years, conf, metric, plotW, plotH, minVal, maxVal, getY, axisY });
      }

      // X-axis ticks (with full 4-digit and mobile short 2-digit support)
      for (let i = 0; i < years.length; i++) {
        const x = chartType === "line" ? getX(i) : this.padding.left + (i + 0.5) * (plotW / years.length);
        const yFull = years[i];
        const yShort = "'" + String(yFull).slice(-2);
        svg += `<text x="${x}" y="${axisY + 30}" class="chart-axis-text chart-axis-year" text-anchor="middle">
          <tspan class="year-full">${yFull}</tspan>
          <tspan class="year-short">${yShort}</tspan>
        </text>`;
      }

      svg += `</svg>`;
      this.container.innerHTML = svg;
      this.bindInteractiveEvents({ points, conf, metric, getX, getY, years, chartType, plotW });
    }

    buildSingleLineChart({ points, years, conf, metric, getX, getY, axisY, isMulti = false }) {
      let pathSegments = "";
      let areaD = "";
      let dotsSvg = "";

      // Continuous line segments: Solid for normal-to-normal, Dashed whenever at least one endpoint is projected/na
      const solidSubPaths = [];
      let currentSolidSegment = [];
      const dashedPaths = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const val = p.status === "normal" ? p.val : p.est;
        if (val === null || isNaN(val)) continue;
        const x = getX(i);
        const y = getY(val);

        if (i > 0) {
          const prev = points[i - 1];
          const prevVal = prev.status === "normal" ? prev.val : prev.est;
          if (prevVal !== null && !isNaN(prevVal)) {
            const prevX = getX(i - 1);
            const prevY = getY(prevVal);

            if (prev.status === "normal" && p.status === "normal") {
              if (currentSolidSegment.length === 0) {
                currentSolidSegment.push({ x: prevX, y: prevY });
              }
              currentSolidSegment.push({ x, y });
            } else {
              if (currentSolidSegment.length > 0) {
                solidSubPaths.push(currentSolidSegment);
                currentSolidSegment = [];
              }
              dashedPaths.push(`M ${prevX} ${prevY} L ${x} ${y}`);
            }
          }
        }
      }

      if (currentSolidSegment.length > 0) {
        solidSubPaths.push(currentSolidSegment);
      }

      // Render solid line paths (and area fill for single view)
      for (const sp of solidSubPaths) {
        if (sp.length >= 2) {
          let d = `M ${sp[0].x} ${sp[0].y}`;
          for (let j = 1; j < sp.length; j++) {
            d += ` L ${sp[j].x} ${sp[j].y}`;
          }
          pathSegments += `<path d="${d}" stroke="${conf.color}" class="chart-line" />`;

          // Area Fill under solid line (Only for Single Venue View to avoid messy overlaps in comparison)
          if (!isMulti) {
            const areaPath = `${d} L ${sp[sp.length - 1].x} ${axisY} L ${sp[0].x} ${axisY} Z`;
            areaD += `<path d="${areaPath}" fill="url(#areaGrad-${conf.id})" />`;
          }
        }
      }

      // Render dashed paths for projected / undisclosed / na connections
      for (const d of dashedPaths) {
        pathSegments += `<path d="${d}" stroke="${conf.color}" class="chart-line chart-line-dashed" />`;
      }

      // Point dots & badges
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const val = p.status === "normal" ? p.val : p.est;
        if (val === null || isNaN(val)) continue;
        const x = getX(i);
        const y = getY(val);
        const isNegative = (metric.key === "sub_growth" || metric.key === "acc_growth") && val < 0;
        const ptColor = isNegative ? "#EF4444" : conf.color;

        if (p.status === "normal") {
          dotsSvg += `<circle cx="${x}" cy="${y}" r="4.5" fill="${ptColor}" stroke="#ffffff" class="chart-point ${isNegative ? "chart-point-negative" : ""}" data-idx="${i}" />`;
        } else {
          // Projected point: dashed border, translucent fill (no floating '?' badge overlay)
          dotsSvg += `<circle cx="${x}" cy="${y}" r="5" fill="${ptColor}" fill-opacity="0.25" stroke="${ptColor}" class="chart-point chart-point-projected ${isNegative ? "chart-point-negative" : ""}" data-idx="${i}" />`;
        }
      }

      return `${areaD}${pathSegments}${dotsSvg}`;
    }

    buildSingleBarChart({ points, years, conf, metric, plotW, plotH, minVal, maxVal, getY, axisY }) {
      let barsSvg = "";
      const barWidth = Math.min(42, (plotW / years.length) * 0.58);
      const zeroY = minVal <= 0 && maxVal >= 0 ? getY(0) : axisY;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const val = p.status === "normal" ? p.val : p.est;
        const centerX = this.padding.left + (i + 0.5) * (plotW / years.length);
        const barX = centerX - barWidth / 2;
        const targetY = getY(val);

        const y = Math.min(targetY, zeroY);
        const h = Math.max(3, Math.abs(targetY - zeroY));

        const isNegative = (metric.key === "sub_growth" || metric.key === "acc_growth") && val < 0;
        const barColor = isNegative ? "#EF4444" : conf.color;

        if (p.status === "normal") {
          barsSvg += `<rect x="${barX}" y="${y}" width="${barWidth}" height="${h}" rx="4" fill="${barColor}" class="chart-bar ${isNegative ? "chart-bar-negative" : ""}" data-idx="${i}" />`;
        } else {
          // Projected Bar (dashed border, translucent fill, no floating '?' badge)
          barsSvg += `<rect x="${barX}" y="${y}" width="${barWidth}" height="${h}" rx="4" fill="${barColor}" stroke="${barColor}" class="chart-bar chart-bar-projected ${isNegative ? "chart-bar-negative" : ""}" data-idx="${i}" />`;
        }
      }

      return barsSvg;
    }

    renderMulti({ confs, datasets, metricKey, chartType, disabledConfIds = new Set() }) {
      const activeConfs = confs.filter(c => !disabledConfIds.has(c.id));
      const metric = METRICS[metricKey];
      const isGrowth = metricKey === "sub_growth" || metricKey === "acc_growth";
      const years = (isGrowth && appState.years.length > 1) ? appState.years.slice(1) : appState.years;

      // Find global min and max across active conferences (excluding baseline year for growth metrics)
      let allVals = [];
      for (const conf of activeConfs) {
        const recs = datasets[conf.id] || [];
        for (const r of recs) {
          if (isGrowth && r.year === appState.years[0]) continue;
          const m = r[metricKey];
          const v = m.status === "normal" ? m.value : m.estimated;
          if (v !== null && !isNaN(v)) allVals.push(v);
        }
      }
      if (allVals.length === 0) allVals = [0, 1];

      const { minVal, maxVal, ticks } = this.calculateScale(allVals, metricKey);
      const plotW = this.width - this.padding.left - this.padding.right;
      const plotH = this.height - this.padding.top - this.padding.bottom;

      const getX = (idx) => this.padding.left + (idx / (years.length - 1)) * plotW;
      const getY = (val) => {
        if (maxVal === minVal) return this.padding.top + plotH / 2;
        return this.padding.top + plotH - ((val - minVal) / (maxVal - minVal)) * plotH;
      };

      const axisY = this.padding.top + plotH;
      const hasZero = minVal <= 0 && maxVal >= 0;
      const zeroY = hasZero ? getY(0) : axisY;
      const isGrowthMetric = metricKey === "sub_growth" || metricKey === "acc_growth";

      let svg = `<svg viewBox="0 0 ${this.width} ${this.height}" class="svg-chart" preserveAspectRatio="xMidYMid meet">`;

      // Positive / Negative Zone Backgrounds (for growth rates)
      if (hasZero && isGrowthMetric) {
        if (zeroY > this.padding.top) {
          svg += `<rect x="${this.padding.left}" y="${this.padding.top}" width="${plotW}" height="${zeroY - this.padding.top}" class="chart-zone-positive" />`;
        }
        if (axisY > zeroY) {
          svg += `<rect x="${this.padding.left}" y="${zeroY}" width="${plotW}" height="${axisY - zeroY}" class="chart-zone-negative" />`;
        }
      }

      // 1. Grid & Y-Axis
      for (const tick of ticks) {
        const y = getY(tick);
        const isZero = Math.abs(tick) < 0.0001;

        if (isZero && isGrowthMetric) {
          svg += `<line x1="${this.padding.left}" y1="${y}" x2="${this.width - this.padding.right}" y2="${y}" class="chart-zero-line" />`;
          svg += `<text x="${this.padding.left - 14}" y="${y + 5}" class="chart-axis-text chart-axis-zero" text-anchor="end">${metric.formatShort(tick)}</text>`;
        } else {
          svg += `<line x1="${this.padding.left}" y1="${y}" x2="${this.width - this.padding.right}" y2="${y}" class="chart-grid-line" />`;
          svg += `<text x="${this.padding.left - 14}" y="${y + 5}" class="chart-axis-text" text-anchor="end">${metric.formatShort(tick)}</text>`;
        }
      }

      svg += `<line x1="${this.padding.left}" y1="${axisY}" x2="${this.width - this.padding.right}" y2="${axisY}" class="chart-axis-line" />`;

      // 2. Chart Rendering (Multi-line or Grouped Bar)
      if (chartType === "line") {
        for (const conf of activeConfs) {
          const recMap = new Map((datasets[conf.id] || []).map(r => [r.year, r]));
          const points = years.map(yr => {
            const r = recMap.get(yr);
            if (r) {
              return {
                year: yr,
                raw: r[metricKey].raw,
                status: r[metricKey].status,
                val: r[metricKey].value,
                est: r[metricKey].estimated
              };
            } else {
              return {
                year: yr,
                raw: "N/A",
                status: "na",
                val: null,
                est: null
              };
            }
          });
          svg += this.buildSingleLineChart({ points, years, conf, metric, getX, getY, axisY, isMulti: true });
        }
      } else {
        // Grouped Bar Chart
        const groupWidth = (plotW / years.length) * 0.82;
        const barWidth = Math.max(3, groupWidth / activeConfs.length);
        const zeroY = minVal <= 0 && maxVal >= 0 ? getY(0) : axisY;

        for (let yi = 0; yi < years.length; yi++) {
          const groupStartX = this.padding.left + (yi + 0.5) * (plotW / years.length) - groupWidth / 2;
          const currentYr = years[yi];

          for (let ci = 0; ci < activeConfs.length; ci++) {
            const conf = activeConfs[ci];
            const recMap = new Map((datasets[conf.id] || []).map(item => [item.year, item]));
            const r = recMap.get(currentYr);
            if (!r) continue;

            const m = r[metricKey];
            const val = m.status === "normal" ? m.value : m.estimated;
            const barX = groupStartX + ci * barWidth;
            const targetY = getY(val);
            const y = Math.min(targetY, zeroY);
            const h = Math.max(2, Math.abs(targetY - zeroY));

            const isNegative = (metricKey === "sub_growth" || metricKey === "acc_growth") && val < 0;
            const barColor = isNegative ? "#EF4444" : conf.color;

            if (m.status === "normal") {
              svg += `<rect x="${barX}" y="${y}" width="${barWidth - 1}" height="${h}" rx="2" fill="${barColor}" class="chart-bar ${isNegative ? "chart-bar-negative" : ""}" data-conf="${conf.id}" data-idx="${yi}" />`;
            } else {
              svg += `<rect x="${barX}" y="${y}" width="${barWidth - 1}" height="${h}" rx="2" fill="${barColor}" stroke="${barColor}" class="chart-bar chart-bar-projected ${isNegative ? "chart-bar-negative" : ""}" data-conf="${conf.id}" data-idx="${yi}" />`;
            }
          }
        }
      }

      // X-axis ticks (with full 4-digit and mobile short 2-digit support)
      for (let i = 0; i < years.length; i++) {
        const x = chartType === "line" ? getX(i) : this.padding.left + (i + 0.5) * (plotW / years.length);
        const yFull = years[i];
        const yShort = "'" + String(yFull).slice(-2);
        svg += `<text x="${x}" y="${axisY + 30}" class="chart-axis-text chart-axis-year" text-anchor="middle">
          <tspan class="year-full">${yFull}</tspan>
          <tspan class="year-short">${yShort}</tspan>
        </text>`;
      }

      svg += `</svg>`;
      this.container.innerHTML = svg;
      this.bindMultiInteractiveEvents({ activeConfs, datasets, metricKey, metric, getX, getY, years, chartType, plotW });
    }

    calculateScale(vals, metricKey) {
      if (!vals || vals.length === 0) vals = [0, 1];
      let min = Math.min(...vals);
      let max = Math.max(...vals);

      if (metricKey === "acceptance_rate") {
        min = Math.max(0, min - 0.04);
        max = Math.min(1.0, max + 0.04);
      } else if (metricKey === "submission" || metricKey === "accepted") {
        min = 0;
        max = Math.ceil(max * 1.15 / 100) * 100;
      } else {
        // Growth rates: sub_growth, acc_growth
        // Ensure 0 is always included and ticks are anchored at 0
        if (min > 0) min = 0;
        if (max < 0) max = 0;
        const range = Math.max(0.3, max - min);
        const rawStep = range / 5;
        const niceSteps = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5];
        let step = niceSteps.find(s => s >= rawStep) || 0.5;

        min = Math.floor((min - 0.01) / step) * step;
        max = Math.ceil((max + 0.01) / step) * step;

        const ticks = [];
        for (let t = min; t <= max + 0.0001; t += step) {
          ticks.push(Number(t.toFixed(4)));
        }
        return { minVal: min, maxVal: max, ticks };
      }

      const count = 5;
      const step = (max - min) / count;
      const ticks = [];
      for (let i = 0; i <= count; i++) {
        ticks.push(min + step * i);
      }

      return { minVal: min, maxVal: max, ticks };
    }

    bindInteractiveEvents({ points, conf, metric, getX, getY, years, chartType, plotW }) {
      const svgEl = this.container.querySelector("svg");
      if (!svgEl) return;

      const handleMove = (e) => {
        const rect = svgEl.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        if (!clientX) return;

        const relX = ((clientX - rect.left) / rect.width) * this.width;
        let bestIdx = 0;
        let minDiff = Infinity;

        for (let i = 0; i < years.length; i++) {
          const px = chartType === "line" ? getX(i) : this.padding.left + (i + 0.5) * (plotW / years.length);
          const diff = Math.abs(relX - px);
          if (diff < minDiff) {
            minDiff = diff;
            bestIdx = i;
          }
        }

        const p = points[bestIdx];
        const val = p.status === "normal" ? p.val : p.est;
        const px = chartType === "line" ? getX(bestIdx) : this.padding.left + (bestIdx + 0.5) * (plotW / years.length);
        const py = getY(val);

        // Position tooltip in pixel coordinates relative to container
        const tipX = (px / this.width) * rect.width;
        const tipY = (py / this.height) * rect.height;

        let statusBadge = "";
        let valText = "";
        if (p.status === "normal") {
          valText = metric.format(p.val);
          if (metric.key === "sub_growth" || metric.key === "acc_growth") {
            if (p.val > 0) {
              valText = `<span style="color:#10B981;">▲ ${valText} (Increase)</span>`;
            } else if (p.val < 0) {
              valText = `<span style="color:#EF4444;">▼ ${valText} (Decrease)</span>`;
            } else {
              valText = `<span style="color:var(--text-muted);">${valText} (No Change)</span>`;
            }
          }
          statusBadge = `<span class="tooltip-badge" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">Proceedings</span>`;
        } else if (p.status === "undisclosed") {
          valText = "?";
          statusBadge = `<span class="tooltip-badge projected">Undisclosed</span>`;
        } else {
          valText = "?";
          statusBadge = `<span class="tooltip-badge na">Awaiting Data</span>`;
        }

        this.tooltip.innerHTML = `
          <div class="tooltip-year">
            <span>${p.year} (${conf.name})</span>
            ${statusBadge}
          </div>
          <div class="tooltip-row">
            <span style="display:flex;align-items:center;gap:4px;">
              <span class="indicator" style="background:${conf.color};"></span>
              ${metric.label}:
            </span>
            <strong>${valText}</strong>
          </div>
        `;
        this.positionTooltip(tipX, tipY, rect);
      };

      svgEl.addEventListener("mousemove", handleMove);
      svgEl.addEventListener("mouseleave", () => {
        this.tooltip.style.display = "none";
      });
      svgEl.addEventListener("touchmove", handleMove, { passive: true });
      svgEl.addEventListener("touchend", () => {
        this.tooltip.style.display = "none";
      });
    }

    bindMultiInteractiveEvents({ activeConfs, datasets, metricKey, metric, getX, getY, years, chartType, plotW }) {
      const svgEl = this.container.querySelector("svg");
      if (!svgEl) return;

      const handleMove = (e) => {
        const rect = svgEl.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        if (!clientX) return;

        const relX = ((clientX - rect.left) / rect.width) * this.width;
        let bestIdx = 0;
        let minDiff = Infinity;

        for (let i = 0; i < years.length; i++) {
          const px = chartType === "line" ? getX(i) : this.padding.left + (i + 0.5) * (plotW / years.length);
          const diff = Math.abs(relX - px);
          if (diff < minDiff) {
            minDiff = diff;
            bestIdx = i;
          }
        }

        const yr = years[bestIdx];
        const px = chartType === "line" ? getX(bestIdx) : this.padding.left + (bestIdx + 0.5) * (plotW / years.length);
        const tipX = (px / this.width) * rect.width;

        let rowsHtml = "";
        for (const conf of activeConfs) {
          const recMap = new Map((datasets[conf.id] || []).map(item => [item.year, item]));
          const r = recMap.get(yr);
          if (!r) continue;
          const m = r[metricKey];
          let valDisplay = "";
          let badge = "";

          if (m.status === "normal") {
            valDisplay = metric.format(m.value);
            if (metricKey === "sub_growth" || metricKey === "acc_growth") {
              if (m.value > 0) {
                valDisplay = `<span style="color:#10B981;">▲ ${valDisplay}</span>`;
              } else if (m.value < 0) {
                valDisplay = `<span style="color:#EF4444;">▼ ${valDisplay}</span>`;
              }
            }
          } else if (m.status === "undisclosed") {
            valDisplay = "?";
            badge = `<span class="tooltip-badge projected">Undisclosed</span>`;
          } else {
            valDisplay = "?";
            badge = `<span class="tooltip-badge na">N/A</span>`;
          }

          rowsHtml += `
            <div class="tooltip-row">
              <span style="display:flex;align-items:center;gap:5px;">
                <span class="indicator" style="background:${conf.color};"></span>
                ${conf.name}:
              </span>
              <strong style="margin-left:auto;">${valDisplay} ${badge}</strong>
            </div>
          `;
        }

        this.tooltip.innerHTML = `
          <div class="tooltip-year">
            <span>Year ${yr}</span>
            <span style="font-size:0.7rem;color:var(--text-muted);">${metric.label}</span>
          </div>
          ${rowsHtml}
        `;
        const tipY = (clientY - rect.top);
        this.positionTooltip(tipX, tipY, rect);
      };

      svgEl.addEventListener("mousemove", handleMove);
      svgEl.addEventListener("mouseleave", () => {
        this.tooltip.style.display = "none";
      });
      svgEl.addEventListener("touchmove", handleMove, { passive: true });
      svgEl.addEventListener("touchend", () => {
        this.tooltip.style.display = "none";
      });
    }
  }

  // =========================================================================
  // 5. Application UI Controller
  // =========================================================================

  let singleChartRenderer = null;
  let multiChartRenderer = null;

  function updateHeaderHeightVar() {
    const header = document.querySelector('.site-header');
    if (header) {
      const h = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    }
  }

  async function initApp() {
    // 1. Dynamic header height calculation for sticky selectors
    updateHeaderHeightVar();
    window.addEventListener('resize', updateHeaderHeightVar);
    window.addEventListener('orientationchange', updateHeaderHeightVar);
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(() => updateHeaderHeightVar());
      const header = document.querySelector('.site-header');
      if (header) ro.observe(header);
    }

    // 2. Theme initialization
    initTheme();

    // 3. Load metadata & CSV data
    await loadData();

    // 4. Always sort conferences by latest submission volume descending
    sortConferencesByLatestSubmissions();

    // 5. Setup SVG Chart renderers
    singleChartRenderer = new SvgChartRenderer(
      document.getElementById("singleSvgChartContainer"),
      document.getElementById("singleChartTooltip")
    );
    multiChartRenderer = new SvgChartRenderer(
      document.getElementById("multiSvgChartContainer"),
      document.getElementById("multiChartTooltip")
    );

    // 6. Setup Event Listeners
    setupNavEvents();
    setupSingleEvents();
    setupMultiEvents();

    // 7. Initial Render
    renderSingleConferencePills();
    renderMultiCheckboxes();
    updateSingleView();
    updateMultiView();

    // Ensure header height updated after fonts and layout stabilize
    requestAnimationFrame(updateHeaderHeightVar);
  }

  function initTheme() {
    const saved = localStorage.getItem("conf_stats_theme") || localStorage.getItem("conf_tracker_theme") || "dark";
    document.documentElement.setAttribute("data-theme", saved);
    updateThemeToggleBtn(saved);

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const curr = document.documentElement.getAttribute("data-theme") || "dark";
        const next = curr === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("conf_stats_theme", next);
        updateThemeToggleBtn(next);
      });
    }
  }

  function updateThemeToggleBtn(theme) {
    const btn = document.getElementById("themeToggleBtn");
    if (!btn) return;
    btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    btn.title = theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme";
  }

  const DYNAMIC_PALETTE = [
    "#3B82F6", // Blue
    "#EC4899", // Pink
    "#8B5CF6", // Purple
    "#10B981", // Emerald
    "#06B6D4", // Cyan
    "#F59E0B", // Amber
    "#EF4444", // Red
    "#14B8A6", // Teal
    "#F97316", // Orange
    "#6366F1", // Indigo
    "#84CC16", // Lime
    "#A855F7"  // Violet
  ];

  async function loadData() {
    // Try fetching conferences.json (prioritizing data/ folder, then root fallback)
    let meta = RAW_CONFERENCES_META;
    const jsonPaths = ["data/conferences.json", "conferences.json"];
    for (const p of jsonPaths) {
      try {
        const resp = await fetch(p + "?t=" + Date.now(), { cache: "no-store" });
        if (resp.ok) {
          meta = await resp.json();
          break;
        }
      } catch (e) {
        // continue to next path
      }
    }

    // Ensure all conferences have colors assigned even if newly added without explicit color
    meta.forEach((conf, idx) => {
      if (!conf.color) {
        conf.color = DYNAMIC_PALETTE[idx % DYNAMIC_PALETTE.length];
      }
      if (!conf.bg_color) {
        conf.bg_color = `${conf.color}26`;
      }
    });

    appState.conferences = meta;

    // Load CSV for each conference (prioritizing data/ folder, then root fallback)
    for (const conf of meta) {
      let csvText = RAW_CSV_DATA[conf.id] || "";
      const baseCsvName = conf.csv_file ? conf.csv_file.replace(/^data\//, '') : `${conf.id}.csv`;
      const csvPaths = [`data/${baseCsvName}`, baseCsvName];
      if (conf.csv_file && !csvPaths.includes(conf.csv_file)) {
        csvPaths.unshift(conf.csv_file);
      }

      for (const p of csvPaths) {
        try {
          const resp = await fetch(p + "?t=" + Date.now(), { cache: "no-store" });
          if (resp.ok) {
            csvText = await resp.text();
            break;
          }
        } catch (e) {
          // continue to next path
        }
      }

      if (csvText) {
        const records = parseCSV(csvText);
        computeTrendEstimations(records);
        appState.datasets[conf.id] = records;
      } else {
        console.warn(`No CSV data found for conference: ${conf.id}`);
        appState.datasets[conf.id] = [];
      }
    }

    // Dynamically aggregate all unique years across all loaded conference datasets
    const allYearsSet = new Set();
    for (const cid of Object.keys(appState.datasets)) {
      (appState.datasets[cid] || []).forEach(r => allYearsSet.add(r.year));
    }
    appState.years = Array.from(allYearsSet).sort((a, b) => a - b);

    // Dynamically update year range text in header and titles if elements exist
    updateDynamicYearLabels();
  }

  /**
   * Dynamically updates year range text in header badge, document title, and table headers.
   */
  function updateDynamicYearLabels() {
    if (!appState.years || appState.years.length === 0) return;
    const startYr = appState.years[0];
    const endYr = appState.years[appState.years.length - 1];
    const rangeText = `${startYr}–${endYr}`;

    const headerBadge = document.getElementById("headerYearBadge");
    if (headerBadge) headerBadge.textContent = rangeText;

    const singleTableTitle = document.getElementById("singleTableTitleRange");
    if (singleTableTitle) singleTableTitle.textContent = `(${rangeText})`;

    document.title = `AR/VR/MR Conference Acceptance Statistics (${rangeText})`;
  }

  /**
   * Always sorts conferences in descending order based on the latest recorded/estimated submission volume.
   */
  function sortConferencesByLatestSubmissions() {
    const getLatestSubCount = (confId) => {
      const recs = appState.datasets[confId] || [];
      // Look from the most recent year backwards to find valid submission or latest estimate
      for (let i = recs.length - 1; i >= 0; i--) {
        const sub = recs[i].submission;
        if (sub.status === "normal" && sub.value !== null) {
          return sub.value;
        }
        if (sub.estimated !== null && sub.estimated !== undefined) {
          return sub.estimated;
        }
      }
      return 0;
    };

    appState.conferences.sort((a, b) => {
      const countA = getLatestSubCount(a.id);
      const countB = getLatestSubCount(b.id);
      return countB - countA; // Descending order
    });

    // Update multiSelectedConfs to mirror the sorted conference sequence
    appState.multiSelectedConfs = appState.conferences.map(c => c.id);

    // Keep selectedConf as the first one if not set
    if (!appState.selectedConf && appState.conferences.length > 0) {
      appState.selectedConf = appState.conferences[0].id;
    }
  }

  // =========================================================================
  // 6. Navigation & View Switching
  // =========================================================================
  function setupNavEvents() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const targetView = btn.dataset.view;
        appState.currentView = targetView;

        document.getElementById("singleConferenceView").classList.toggle("active", targetView === "single");
        document.getElementById("multiConferenceView").classList.toggle("active", targetView === "multi");

        if (targetView === "single") {
          updateSingleView();
        } else {
          updateMultiView();
        }
      });
    });
  }

  // =========================================================================
  // 7. Single Conference View Implementation
  // =========================================================================
  function renderSingleConferencePills() {
    const container = document.getElementById("singleConfPills");
    if (!container) return;

    container.innerHTML = appState.conferences.map(conf => {
      const isSelected = conf.id === appState.selectedConf;
      return `
        <button class="conf-pill ${isSelected ? "active" : ""}" 
                data-id="${conf.id}" 
                style="${isSelected ? `background:${conf.color}; border-color:${conf.color};` : ""}">
          <span class="dot" style="background:${isSelected ? "#ffffff" : conf.color};"></span>
          ${conf.name}
        </button>
      `;
    }).join("");

    container.querySelectorAll(".conf-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        appState.selectedConf = pill.dataset.id;
        renderSingleConferencePills();
        updateSingleView();
      });
    });
  }

  function setupSingleEvents() {
    // Single Metric button cards
    const metricCards = document.querySelectorAll("#singleMetricBtns .metric-tab-card");
    metricCards.forEach(card => {
      card.addEventListener("click", () => {
        appState.selectedMetric = card.dataset.metric;
        updateSingleView();
      });
    });

    // Chart Type (Line / Bar)
    const typeBtns = document.querySelectorAll("#singleChartTypeBtns .ctrl-btn");
    typeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        typeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        appState.singleChartType = btn.dataset.type;
        updateSingleView();
      });
    });
  }

  function updateSingleView() {
    const conf = appState.conferences.find(c => c.id === appState.selectedConf) || appState.conferences[0];
    const records = appState.datasets[conf.id] || [];

    // Sync metric button cards active state
    document.querySelectorAll("#singleMetricBtns .metric-tab-card").forEach(card => {
      const isActive = card.dataset.metric === appState.selectedMetric;
      card.classList.toggle("active", isActive);
      card.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // 1. Update Profile Card
    updateProfileCard(conf);

    // 2. Update KPI Metrics Cards
    updateKpiCards(records);

    // 3. Update Single SVG Chart
    document.getElementById("singleChartTitle").textContent = `${conf.name} - ${METRICS[appState.selectedMetric].label} Trend`;
    document.getElementById("singleChartSubtitle").textContent = METRICS[appState.selectedMetric].description;

    singleChartRenderer.renderSingle({
      records,
      conf,
      metricKey: appState.selectedMetric,
      chartType: appState.singleChartType
    });

    // 4. Update Detailed Data Table
    renderSingleDataTable(records, conf);
  }

  function updateProfileCard(conf) {
    const card = document.getElementById("confProfileCard");
    if (!card) return;
    card.style.setProperty("--profile-accent", conf.color);

    document.getElementById("profileConfName").textContent = conf.name;
    document.getElementById("profileFullName").textContent = conf.full_name;
    document.getElementById("profileSince").textContent = `Est. ${conf.since}`;
    document.getElementById("profileDesc").textContent = conf.description;

    const webBtn = document.getElementById("profileWebLink");
    if (webBtn && conf.website) {
      webBtn.href = conf.website;
      webBtn.style.display = "inline-flex";
    }

    const sourcesContainer = document.getElementById("profileSources");
    if (sourcesContainer && conf.sources) {
      sourcesContainer.innerHTML = `<span style="font-weight:600;">Data Sources:</span>` +
        conf.sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer" class="source-tag">🔗 ${s.name}</a>`).join("");
    }
  }

  function updateKpiCards(records) {
    if (!records || records.length === 0) return;

    // Latest year with recorded submission / accepted data
    let latestValid = null;
    let prevValid = null;

    for (let i = records.length - 1; i >= 0; i--) {
      const r = records[i];
      if (r.submission.status === "normal" || r.acceptance_rate.status === "normal") {
        if (!latestValid) {
          latestValid = r;
        } else if (!prevValid) {
          prevValid = r;
          break;
        }
      }
    }

    if (!latestValid) latestValid = records[0];

    // Card 1: Submissions
    const subEl = document.getElementById("kpiSubmissions");
    const subYoYEl = document.getElementById("kpiSubYoY");
    if (subEl) {
      const isSubNormal = latestValid.submission.status === "normal";
      subEl.textContent = isSubNormal
        ? latestValid.submission.value.toLocaleString()
        : "?";

      const subGrowth = isSubNormal && latestValid.sub_growth.status === "normal" ? latestValid.sub_growth.value : null;
      if (subYoYEl) {
        if (isSubNormal) {
          subYoYEl.innerHTML = subGrowth !== null
            ? `<span class="trend-badge ${subGrowth >= 0 ? "positive" : "negative"}">${subGrowth >= 0 ? "▲" : "▼"} ${(subGrowth * 100).toFixed(1)}%</span> YoY (${latestValid.year})`
            : `<span class="trend-badge neutral">Year ${latestValid.year}</span>`;
        } else {
          subYoYEl.innerHTML = `<span class="trend-badge neutral">${latestValid.submission.status === "undisclosed" ? "Undisclosed" : "Awaiting Data"} (${latestValid.year})</span>`;
        }
      }
    }

    // Card 2: Accepted Papers
    const accEl = document.getElementById("kpiAccepted");
    const accYoYEl = document.getElementById("kpiAccYoY");
    if (accEl) {
      const isAccNormal = latestValid.accepted.status === "normal";
      accEl.textContent = isAccNormal
        ? latestValid.accepted.value.toLocaleString()
        : "?";

      const accGrowth = isAccNormal && latestValid.acc_growth.status === "normal" ? latestValid.acc_growth.value : null;
      if (accYoYEl) {
        if (isAccNormal) {
          accYoYEl.innerHTML = accGrowth !== null
            ? `<span class="trend-badge ${accGrowth >= 0 ? "positive" : "negative"}">${accGrowth >= 0 ? "▲" : "▼"} ${(accGrowth * 100).toFixed(1)}%</span> YoY (${latestValid.year})`
            : `<span class="trend-badge neutral">Year ${latestValid.year}</span>`;
        } else {
          accYoYEl.innerHTML = `<span class="trend-badge neutral">${latestValid.accepted.status === "undisclosed" ? "Undisclosed" : "Awaiting Data"} (${latestValid.year})</span>`;
        }
      }
    }

    // Card 3: Acceptance Rate
    const rateEl = document.getElementById("kpiRate");
    const rateDiffEl = document.getElementById("kpiRateDiff");
    if (rateEl) {
      const isRateNormal = latestValid.acceptance_rate.status === "normal";
      rateEl.textContent = isRateNormal
        ? (latestValid.acceptance_rate.value * 100).toFixed(1) + "%"
        : "?";

      if (isRateNormal && rateDiffEl && prevValid && prevValid.acceptance_rate.status === "normal") {
        const diff = (latestValid.acceptance_rate.value - prevValid.acceptance_rate.value) * 100;
        rateDiffEl.innerHTML = `<span class="trend-badge ${diff >= 0 ? "positive" : "negative"}">${diff >= 0 ? "+" : ""}${diff.toFixed(2)}%p</span> vs ${prevValid.year}`;
      } else if (rateDiffEl) {
        rateDiffEl.innerHTML = `<span class="trend-badge neutral">${isRateNormal ? "Latest Record" : (latestValid.acceptance_rate.status === "undisclosed" ? "Undisclosed" : "Awaiting Data")}</span>`;
      }
    }

    // Card 4: Historical Average Rate
    const avgEl = document.getElementById("kpiAvgRate");
    const avgPeriodEl = document.getElementById("kpiAvgPeriod");
    if (avgEl) {
      const normalRates = records.filter(r => r.acceptance_rate.status === "normal").map(r => r.acceptance_rate.value);
      const avg = normalRates.length > 0 ? normalRates.reduce((a, b) => a + b, 0) / normalRates.length : 0;
      avgEl.textContent = (avg * 100).toFixed(1) + "%";
      if (avgPeriodEl) {
        avgPeriodEl.textContent = `Historical mean (${normalRates.length} recorded years)`;
      }
    }
  }

  function renderSingleDataTable(records, conf) {
    const tbody = document.getElementById("singleTableBody");
    if (!tbody) return;

    tbody.innerHTML = records.map(r => {
      // Submissions
      let subText = "-";
      if (r.submission.status === "normal") {
        subText = r.submission.value.toLocaleString();
      } else if (r.submission.status === "undisclosed") {
        subText = `<span class="badge badge-undisclosed" title="Undisclosed">?</span>`;
      } else {
        subText = `<span class="badge badge-na" title="Awaiting Data">?</span>`;
      }

      // Accepted
      let accText = "-";
      if (r.accepted.status === "normal") {
        accText = r.accepted.value.toLocaleString();
      } else if (r.accepted.status === "undisclosed") {
        accText = `<span class="badge badge-undisclosed" title="Undisclosed">?</span>`;
      } else {
        accText = `<span class="badge badge-na" title="Awaiting Data">?</span>`;
      }

      // Acceptance Rate
      let rateText = "-";
      if (r.acceptance_rate.status === "normal") {
        rateText = `<strong>${(r.acceptance_rate.value * 100).toFixed(2)}%</strong>`;
      } else if (r.acceptance_rate.status === "undisclosed") {
        rateText = `<span class="badge badge-undisclosed" title="Undisclosed">?</span>`;
      } else {
        rateText = `<span class="badge badge-na" title="Awaiting Data">?</span>`;
      }

      // Sub Growth (Baseline year has no prior year, display clean dash '-')
      let subGText = "-";
      if (r.year === appState.years[0]) {
        subGText = `<span style="color:var(--text-dim);">-</span>`;
      } else if (r.sub_growth.status === "normal") {
        const val = r.sub_growth.value;
        const cls = val >= 0 ? "val-pos" : "val-neg";
        subGText = `<span class="${cls}">${val >= 0 ? "+" : ""}${(val * 100).toFixed(1)}%</span>`;
      } else if (r.sub_growth.status === "undisclosed") {
        subGText = `<span class="badge badge-undisclosed">Undisclosed</span>`;
      } else {
        subGText = `<span class="badge badge-na">N/A</span>`;
      }

      // Acc Growth (Baseline year has no prior year, display clean dash '-')
      let accGText = "-";
      if (r.year === appState.years[0]) {
        accGText = `<span style="color:var(--text-dim);">-</span>`;
      } else if (r.acc_growth.status === "normal") {
        const val = r.acc_growth.value;
        const cls = val >= 0 ? "val-pos" : "val-neg";
        accGText = `<span class="${cls}">${val >= 0 ? "+" : ""}${(val * 100).toFixed(1)}%</span>`;
      } else if (r.acc_growth.status === "undisclosed") {
        accGText = `<span class="badge badge-undisclosed">Undisclosed</span>`;
      } else {
        accGText = `<span class="badge badge-na">N/A</span>`;
      }

      // Sources column with annual DOI / proceedings link support
      let statusText = "Proceedings";
      let statusClass = "badge-normal";
      if (r.submission.status === "undisclosed" || r.accepted.status === "undisclosed") {
        statusText = "Undisclosed";
        statusClass = "badge-undisclosed";
      } else if (r.submission.status === "na" || r.acceptance_rate.status === "na") {
        statusText = "Awaiting Data";
        statusClass = "badge-na";
      }

      // Check for annual link (only link confirmed Proceedings entries to official DOI sources; Undisclosed and Awaiting Data remain unlinked)
      const linkUrl = (conf.annual_links && conf.annual_links[String(r.year)]) ? String(conf.annual_links[String(r.year)]).trim() : "";
      let statusHtml = "";
      if (linkUrl && statusText === "Proceedings") {
        statusHtml = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="badge ${statusClass} badge-link" title="Open ${conf.name} ${r.year} proceedings / DOI source: ${linkUrl}">
          ${statusText} ↗
        </a>`;
      } else {
        statusHtml = `<span class="badge ${statusClass}">${statusText}</span>`;
      }

      return `
        <tr>
          <td style="font-weight:700;">${r.year}</td>
          <td>${subText}</td>
          <td>${accText}</td>
          <td>${rateText}</td>
          <td>${subGText}</td>
          <td>${accGText}</td>
          <td style="text-align:center;">${statusHtml}</td>
        </tr>
      `;
    }).join("");
  }

  // =========================================================================
  // 8. Multi-Conference Comparison View Implementation
  // =========================================================================
  function renderMultiCheckboxes() {
    const container = document.getElementById("multiConfChips");
    if (!container) return;

    container.innerHTML = appState.conferences.map(conf => {
      const isChecked = appState.multiSelectedConfs.includes(conf.id);
      return `
        <label class="chip-checkbox ${isChecked ? "checked" : ""}" 
               data-id="${conf.id}"
               style="${isChecked ? `background:${conf.color}; border-color:${conf.color};` : ""}">
          <input type="checkbox" value="${conf.id}" ${isChecked ? "checked" : ""} />
          <span class="chip-color-dot" style="background:${isChecked ? "#ffffff" : conf.color};"></span>
          ${conf.name}
        </label>
      `;
    }).join("");

    container.querySelectorAll(".chip-checkbox").forEach(chip => {
      chip.addEventListener("click", (e) => {
        e.preventDefault();
        const id = chip.dataset.id;
        if (appState.multiSelectedConfs.includes(id)) {
          if (appState.multiSelectedConfs.length > 1) {
            appState.multiSelectedConfs = appState.multiSelectedConfs.filter(c => c !== id);
          }
        } else {
          appState.multiSelectedConfs.push(id);
        }
        renderMultiCheckboxes();
        updateMultiView();
      });
    });
  }

  function setupMultiEvents() {
    // Select All / Deselect All
    const selectAllBtn = document.getElementById("multiSelectAllBtn");
    if (selectAllBtn) {
      selectAllBtn.addEventListener("click", () => {
        appState.multiSelectedConfs = appState.conferences.map(c => c.id);
        renderMultiCheckboxes();
        updateMultiView();
      });
    }

    const clearAllBtn = document.getElementById("multiClearAllBtn");
    if (clearAllBtn) {
      clearAllBtn.addEventListener("click", () => {
        // Keep at least the first one selected
        appState.multiSelectedConfs = [appState.conferences[0].id];
        renderMultiCheckboxes();
        updateMultiView();
      });
    }

    // Multi Metric button cards
    const multiMetricCards = document.querySelectorAll("#multiMetricBtns .metric-tab-card");
    multiMetricCards.forEach(card => {
      card.addEventListener("click", () => {
        appState.selectedMetric = card.dataset.metric;
        updateMultiView();
      });
    });

    // Chart Type (Line / Bar)
    const typeBtns = document.querySelectorAll("#multiChartTypeBtns .ctrl-btn");
    typeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        typeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        appState.multiChartType = btn.dataset.type;
        updateMultiView();
      });
    });
  }

  function updateMultiView() {
    const activeConfs = appState.conferences.filter(c => appState.multiSelectedConfs.includes(c.id));
    const metric = METRICS[appState.selectedMetric];

    // Sync multi metric cards active state
    document.querySelectorAll("#multiMetricBtns .metric-tab-card").forEach(card => {
      const isActive = card.dataset.metric === appState.selectedMetric;
      card.classList.toggle("active", isActive);
      card.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // Chart Header
    document.getElementById("multiChartTitle").textContent = `Comparison: ${metric.label}`;
    document.getElementById("multiChartSubtitle").textContent = `Comparing ${activeConfs.length} selected venues (${metric.description})`;

    // Render Multi Chart
    multiChartRenderer.renderMulti({
      confs: activeConfs,
      datasets: appState.datasets,
      metricKey: appState.selectedMetric,
      chartType: appState.multiChartType
    });

    // Render Multi Legend
    renderMultiLegend(activeConfs);

    // Render Comparison Table
    renderMultiComparisonTable(activeConfs, metric);
  }

  function renderMultiLegend(activeConfs) {
    const legendContainer = document.getElementById("multiChartLegend");
    if (!legendContainer) return;

    legendContainer.innerHTML = activeConfs.map(conf => `
      <div class="legend-item" data-id="${conf.id}">
        <span class="legend-swatch" style="background:${conf.color};"></span>
        <span>${conf.name}</span>
      </div>
    `).join("");
  }

  function renderMultiComparisonTable(activeConfs, metric) {
    const tableHeader = document.getElementById("multiTableHeader");
    const tableBody = document.getElementById("multiTableBody");
    if (!tableHeader || !tableBody) return;

    const isGrowth = metric.key === "sub_growth" || metric.key === "acc_growth";
    const years = (isGrowth && appState.years.length > 1) ? appState.years.slice(1) : appState.years;

    // Header: Conference, then each year
    tableHeader.innerHTML = `
      <tr>
        <th style="text-align:left; min-width:140px;">Conference</th>
        ${years.map(y => `<th style="text-align:right;">${y}</th>`).join("")}
      </tr>
    `;

    // Body: One row per active conference
    tableBody.innerHTML = activeConfs.map(conf => {
      const records = appState.datasets[conf.id] || [];
      const recMap = new Map(records.map(item => [item.year, item]));
      const cells = years.map((y) => {
        const r = recMap.get(y);
        if (!r) return `<td style="text-align:right;">-</td>`;
        const m = r[metric.key];

        if (m.status === "normal") {
          return `<td style="text-align:right; font-weight:600;">${metric.format(m.value)}</td>`;
        } else if (m.status === "undisclosed") {
          return `<td style="text-align:right;"><span class="badge badge-undisclosed" title="Undisclosed">?</span></td>`;
        } else {
          return `<td style="text-align:right;"><span class="badge badge-na" title="Awaiting Data">?</span></td>`;
        }
      }).join("");

      return `
        <tr>
          <td style="text-align:left; font-weight:700; display:flex; align-items:center; gap:6px;">
            <span style="width:10px; height:10px; border-radius:50%; background:${conf.color}; display:inline-block;"></span>
            ${conf.name}
          </td>
          ${cells}
        </tr>
      `;
    }).join("");
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
